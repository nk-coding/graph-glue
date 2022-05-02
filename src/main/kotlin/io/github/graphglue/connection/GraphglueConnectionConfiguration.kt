package io.github.graphglue.connection

import com.expediagroup.graphql.generator.scalars.ID
import io.github.graphglue.connection.filter.TypeFilterDefinitionEntry
import io.github.graphglue.connection.filter.definition.NodePropertyFilterDefinition
import io.github.graphglue.connection.filter.definition.NodeSetPropertyFilterDefinition
import io.github.graphglue.connection.filter.definition.NodeSubFilterDefinition
import io.github.graphglue.connection.filter.definition.scalars.*
import io.github.graphglue.model.Node
import io.github.graphglue.model.NodeProperty
import io.github.graphglue.model.NodeSetProperty
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import kotlin.reflect.KTypeProjection
import kotlin.reflect.full.createType

/**
 * Configuration for the connections
 * Specifies filter factories and filter definitions used in [Node] classes.
 * Defines filter factories for [String], [Int], [Float] and [ID] scalar properties (including nullable)
 * and for properties backed by [NodeProperty] and [NodeSetProperty]
 */
@Configuration
class GraphglueConnectionConfiguration {

    /**
     * Filter factory for [String] properties
     *
     * @return the generated filter factory
     */
    @Bean
    fun stringFilter() =
        TypeFilterDefinitionEntry(String::class.createType(nullable = true)) { name, property, parentNodeDefinition, _ ->
            StringFilterDefinition(
                name, parentNodeDefinition.getNeo4jNameOfProperty(property), property.returnType.isMarkedNullable
            )
        }

    /**
     * Filter factory for [Int] properties
     *
     * @return the generated filter factory
     */
    @Bean
    fun intFilter() =
        TypeFilterDefinitionEntry(Int::class.createType(nullable = true)) { name, property, parentNodeDefinition, _ ->
            IntFilterDefinition(
                name, parentNodeDefinition.getNeo4jNameOfProperty(property), property.returnType.isMarkedNullable
            )
        }

    /**
     * Filter factory for [Double] properties (float in GraphQL spec)
     *
     * @return the generated filter factory
     */
    @Bean
    fun doubleFilter() =
        TypeFilterDefinitionEntry(Double::class.createType(nullable = true)) { name, property, parentNodeDefinition, _ ->
            FloatFilterDefinition(
                name, parentNodeDefinition.getNeo4jNameOfProperty(property), property.returnType.isMarkedNullable
            )
        }

    /**
     * Filter factory for [Boolean] properties
     *
     * @return the generated filter factory
     */
    @Bean
    fun booleanFilter() =
        TypeFilterDefinitionEntry(Boolean::class.createType(nullable = true)) { name, property, parentNodeDefinition, _ ->
            BooleanFilterDefinition(
                name, parentNodeDefinition.getNeo4jNameOfProperty(property), property.returnType.isMarkedNullable
            )
        }

    /**
     * Filter factory for [ID] properties
     *
     * @return the generated filter factory
     */
    @Bean
    fun idFilter() =
        TypeFilterDefinitionEntry(ID::class.createType(nullable = true)) { name, property, parentNodeDefinition, _ ->
            IDFilterDefinition(
                name, parentNodeDefinition.getNeo4jNameOfProperty(property), property.returnType.isMarkedNullable
            )
        }

    /**
     * ID filter for the id property of a [Node]
     * This could not be specified directly on the property, as the Neo4j and GraphQL properties are different
     * (even though having the same name)
     *
     * @return the generated filter definition
     */
    @Bean("idIdFilter")
    fun idIdFilter() = IDFilterDefinition("id", "id", false)

    /**
     * Filter factory for [Node] properties
     * These properties should always be backed by a [NodeProperty]
     *
     * @return the generated filter factory
     */
    @Bean
    fun nodeFilter() =
        TypeFilterDefinitionEntry(Node::class.createType(nullable = true)) { name, property, parentNodeDefinition, subFilterGenerator ->
            val nodeSubFilterDefinition = NodeSubFilterDefinition(
                name,
                "Filters for nodes where the related node match this filter",
                property.returnType,
                subFilterGenerator,
                parentNodeDefinition.getRelationshipDefinitionOfProperty(property)
            )
            NodePropertyFilterDefinition(nodeSubFilterDefinition)
        }

    /**
     * Filter factory for `Set<Node>` properties
     * These properties should always be backed by a [NodeSetProperty]
     *
     * @return the generated filter factory
     */
    @Bean
    fun nodeSetFilter() =
        TypeFilterDefinitionEntry(Set::class.createType(listOf(KTypeProjection.covariant(Node::class.createType())))) { name, property, parentNodeDefinition, subFilterGenerator ->
            NodeSetPropertyFilterDefinition(
                name,
                property.returnType.arguments.first().type!!,
                subFilterGenerator,
                parentNodeDefinition.getRelationshipDefinitionOfProperty(property)
            )
        }

}