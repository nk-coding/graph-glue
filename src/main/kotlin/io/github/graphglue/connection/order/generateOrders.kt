package io.github.graphglue.connection.order

import io.github.graphglue.graphql.extensions.getPropertyName
import io.github.graphglue.model.Node
import io.github.graphglue.model.OrderProperty
import org.springframework.data.neo4j.core.mapping.Neo4jPersistentEntity
import kotlin.reflect.KClass
import kotlin.reflect.full.hasAnnotation
import kotlin.reflect.full.memberProperties

fun <T : Node> generateOrders(type: KClass<T>, persistentEntity: Neo4jPersistentEntity<*>): Map<String, OrderField<T>> {
    val generatedOrders = type.memberProperties.filter { it.hasAnnotation<OrderProperty>() }
        .map {
            val neo4jPropertyName = persistentEntity.getPersistentProperty(it.name)!!.propertyName
            OrderField(it.getPropertyName(type), listOf(SimpleOrderPart(it, neo4jPropertyName), IdOrderPart))
        }
    val allOrders = generatedOrders + IdOrderField
    return allOrders.associateBy { it.name.toEnumNameCase() }
}

private fun String.toEnumNameCase() = this.replace("(?=[A-Z])".toRegex(), "_").uppercase()