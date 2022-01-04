package de.graphglue.graphql.connection

import com.expediagroup.graphql.generator.execution.KotlinDataFetcherFactoryProvider
import de.graphglue.graphql.connection.filter.definition.SubFilterGenerator
import de.graphglue.graphql.connection.filter.definition.generateFilterDefinition
import de.graphglue.graphql.connection.order.OrderField
import de.graphglue.graphql.connection.order.generateOrders
import de.graphglue.graphql.extensions.getSimpleName
import de.graphglue.graphql.redirect.REDIRECT_PROPERTY_DIRECTIVE
import de.graphglue.model.Connection
import de.graphglue.model.Edge
import de.graphglue.model.Node
import de.graphglue.model.NodeSet
import de.graphglue.util.CacheMap
import graphql.Scalars
import graphql.language.EnumValue
import graphql.schema.*
import org.springframework.data.neo4j.core.mapping.Neo4jMappingContext
import kotlin.reflect.KClass
import kotlin.reflect.KType
import kotlin.reflect.full.memberFunctions
import kotlin.reflect.full.memberProperties
import kotlin.reflect.jvm.jvmErasure

class ConnectionWrapperGraphQLTypeFactory(
    private val outputTypeCache: CacheMap<String, GraphQLOutputType>,
    private val inputTypeCache: CacheMap<String, GraphQLInputType>,
    private val subFilterGenerator: SubFilterGenerator,
    private val codeRegistry: GraphQLCodeRegistry.Builder,
    private val dataFetcherFactoryProvider: KotlinDataFetcherFactoryProvider,
    private val mappingContext: Neo4jMappingContext,
) {


    fun generateWrapperGraphQLType(connectionType: KType): GraphQLType {
        @Suppress("UNCHECKED_CAST") val returnNodeType =
            connectionType.arguments[0].type!!.jvmErasure as KClass<out Node>
        val returnNodeName = returnNodeType.getSimpleName()
        return generateWrapperGraphQLType(returnNodeType, returnNodeName)
    }

    fun generateWrapperGraphQLType(nodeType: KClass<out Node>, nodeName: String): GraphQLOutputType {
        val name = "${nodeName}ListWrapper"
        val functionName = "getFromGraphQL"
        return outputTypeCache.computeIfAbsent(name, GraphQLTypeReference(name)) {
            val filter = generateFilterDefinition(nodeType, subFilterGenerator)

            val orders = generateOrders(nodeType, mappingContext.getPersistentEntity(nodeType.java)!!)

            val type = GraphQLObjectType.newObject().name(name).withDirective(REDIRECT_PROPERTY_DIRECTIVE)
                .field { fieldBuilder ->
                    fieldBuilder.name(functionName).withDirective(REDIRECT_PROPERTY_DIRECTIVE).argument {
                        it.name("filter").description("Filter for specific items in the connection")
                            .type(filter.toGraphQLType(inputTypeCache))
                    }.argument {
                        it.name("orderBy").description("Order in which the items are sorted")
                            .type(generateOrderGraphQLType(nodeName, orders))
                    }.argument {
                        it.name("after").description("Get only items after the cursor").type(Scalars.GraphQLString)
                    }.argument {
                        it.name("before").description("Get only items before the cursor").type(Scalars.GraphQLString)
                    }.argument {
                        it.name("first").description("Get the first n items. Must not be used if before is specified")
                            .type(Scalars.GraphQLInt)
                    }.argument {
                        it.name("last").description("Get the last n items. Must not be used if after is specified")
                            .type(Scalars.GraphQLInt)
                    }.type(GraphQLNonNull(generateConnectionGraphQLType(nodeName)))
                }.build()

            val function = NodeSet::class.memberFunctions.first { it.name == functionName }
            val dataFetcherFactory = dataFetcherFactoryProvider.functionDataFetcherFactory(null, function)
            registerDataFetcher(type, functionName, dataFetcherFactory)

            type
        }
    }

    private fun generateConnectionGraphQLType(returnNodeName: String): GraphQLOutputType {
        val name = "${returnNodeName}Connection"
        return outputTypeCache.computeIfAbsent(name, GraphQLTypeReference(name)) {
            val type =
                GraphQLObjectType.newObject().name(name).description("The connection type for ${returnNodeName}.")
                    .field {
                        it.name("nodes").description("A list of all nodes of the current page.")
                            .type(GraphQLNonNull(GraphQLList(GraphQLNonNull(GraphQLTypeReference(returnNodeName)))))
                    }.field {
                        it.name("edges").description("A list of all edges of the current page.").type(
                            GraphQLNonNull(
                                GraphQLList(
                                    GraphQLNonNull(
                                        generateEdgeGraphQLType(
                                            returnNodeName,
                                        )
                                    )
                                )
                            )
                        )
                    }.field {
                        it.name("totalCount").description("Identifies the total count of items in the connection.")
                            .type(GraphQLNonNull(Scalars.GraphQLInt))
                    }.field {
                        it.name("pageInfo").description("Information to aid in pagination.")
                            .type(GraphQLNonNull(GraphQLTypeReference("PageInfo")))
                    }.build()

            registerFunctionDataFetcher(type, "nodes", Connection::class)
            registerFunctionDataFetcher(type, "edges", Connection::class)
            registerFunctionDataFetcher(type, "totalCount", Connection::class)
            registerPropertyDataFetcher(type, "pageInfo", Connection::class)

            type
        }
    }

    private fun generateEdgeGraphQLType(returnNodeName: String): GraphQLOutputType {
        val name = "${returnNodeName}Edge"
        return outputTypeCache.computeIfAbsent(name, GraphQLTypeReference(name)) {
            val type = GraphQLObjectType.newObject().name(name).description("An edge in a connection.").field {
                it.name("node").description("The item at the end of the edge.")
                    .type(GraphQLNonNull(GraphQLTypeReference(returnNodeName)))
            }.field {
                it.name("cursor").description("A cursor used in pagination.")
                    .type(GraphQLNonNull(Scalars.GraphQLString))
            }.build()

            registerFunctionDataFetcher(type, "node", Edge::class)
            registerFunctionDataFetcher(type, "cursor", Edge::class)

            type
        }
    }

    private fun generateOrderGraphQLType(returnNodeName: String, orders: Map<String, OrderField<*>>): GraphQLInputType {
        val name = "${returnNodeName}Order"
        return inputTypeCache.computeIfAbsent(name, GraphQLTypeReference(name)) {
            GraphQLInputObjectType.newInputObject().name(name)
                .description("Defines the order of a $returnNodeName list").field {
                    it.name("field").description("The field to order by, defaults to ID")
                        .type(generateOrderFieldGraphQLType(returnNodeName, orders))
                        .defaultValueLiteral(EnumValue("ID"))
                }.field {
                    it.name("direction").description("The direction to order by, defaults to ASC")
                        .type(GraphQLTypeReference("OrderDirection")).defaultValueLiteral(EnumValue("ASC"))
                }.build()
        }
    }

    private fun generateOrderFieldGraphQLType(
        returnNodeName: String, orders: Map<String, OrderField<*>>
    ): GraphQLInputType {
        val name = "${returnNodeName}OrderField"
        return inputTypeCache.computeIfAbsent(name, GraphQLTypeReference(name)) {
            val builder =
                GraphQLEnumType.newEnum().name(name).description("Fields a list of $returnNodeName can be sorted by")
            for ((fieldName, fieldValue) in orders.entries) {
                builder.value(fieldName, fieldValue, "Order by ${fieldValue.name}")
            }
            builder.build()
        }
    }

    private fun registerPropertyDataFetcher(type: GraphQLFieldsContainer, fieldName: String, kClass: KClass<*>) {
        val property = kClass.memberProperties.first { it.name == fieldName }
        val dataFetcherFactory = dataFetcherFactoryProvider.propertyDataFetcherFactory(kClass, property)
        registerDataFetcher(type, fieldName, dataFetcherFactory)
    }

    private fun registerFunctionDataFetcher(type: GraphQLFieldsContainer, fieldName: String, kClass: KClass<*>) {
        val function = kClass.memberFunctions.first { it.name == fieldName }
        val dataFetcherFactory = dataFetcherFactoryProvider.functionDataFetcherFactory(null, function)
        registerDataFetcher(type, fieldName, dataFetcherFactory)
    }

    private fun registerDataFetcher(
        type: GraphQLFieldsContainer, fieldName: String, dataFetcherFactory: DataFetcherFactory<Any?>
    ) {
        val fieldCoordinates = FieldCoordinates.coordinates(type, fieldName)
        codeRegistry.dataFetcher(fieldCoordinates, dataFetcherFactory)
    }
}