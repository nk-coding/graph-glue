package com.nkcoding.graphglue.graphql.execution.definition

import com.nkcoding.graphglue.model.Node
import com.nkcoding.graphglue.model.NodeList
import com.nkcoding.graphglue.model.NodeProperty
import com.nkcoding.graphglue.model.NodeRelationship
import kotlin.reflect.KClass
import kotlin.reflect.KTypeProjection
import kotlin.reflect.full.*
import kotlin.reflect.jvm.javaField

fun generateNodeDefinition(nodeClass: KClass<out Node>): NodeDefinition {
    return NodeDefinition(
        nodeClass,
        generateOneRelationshipDefinitions(nodeClass),
        generateManyRelationshipDefinitions(nodeClass)
    )
}

private fun generateOneRelationshipDefinitions(nodeClass: KClass<out Node>): List<OneRelationshipDefinition> {
    val properties = nodeClass.memberProperties.filter { it.returnType.isSubtypeOf(Node::class.createType()) }
    return properties.map {
        val field = it.javaField
        if (field == null || !field.type.kotlin.isSubclassOf(NodeProperty::class)) {
            throw NodeSchemaException("Property of type Node is not backed by a NodeProperty: $it")
        }
        val annotation = it.findAnnotation<NodeRelationship>()
            ?: throw NodeSchemaException("Property of type Node is not annotated with NodeRelationship: $it")
        OneRelationshipDefinition(it, annotation.type, annotation.direction, nodeClass)
    }
}

private fun generateManyRelationshipDefinitions(nodeClass: KClass<out Node>): List<ManyRelationshipDefinition> {
    val nodeListType = NodeList::class.createType(listOf(KTypeProjection.covariant(Node::class.createType())))
    val properties = nodeClass.memberProperties.filter { it.returnType.isSubtypeOf(nodeListType) }
    return properties.map {
        val annotation = it.findAnnotation<NodeRelationship>()
            ?: throw NodeSchemaException("Property of type Node is not annotated with NodeRelationship: $it")
        ManyRelationshipDefinition(it, annotation.type, annotation.direction, nodeClass)
    }
}