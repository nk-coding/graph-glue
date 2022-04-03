package io.github.graphglue.graphql.datafetcher

import com.expediagroup.graphql.generator.extensions.unwrapType
import graphql.schema.GraphQLFieldDefinition
import graphql.schema.GraphQLObjectType
import io.github.graphglue.model.NODE_RELATIONSHIP_DIRECTIVE

/**
 * Redirects fields used for NodeSetProperties
 *
 * @param fieldDefinition the field to maybe redirect
 * @return the new field definition
 */
fun rewireFieldType(fieldDefinition: GraphQLFieldDefinition): GraphQLFieldDefinition {
    if (fieldDefinition.hasDirective(NODE_RELATIONSHIP_DIRECTIVE)) {
        val fieldType = fieldDefinition.type
        val originalType = fieldType.unwrapType() as GraphQLObjectType
        val redirectedFunction = originalType.getField("getFromGraphQL")
        if (redirectedFunction != null) {
            return fieldDefinition.transform {
                it.type(redirectedFunction.type)
                it.replaceArguments(redirectedFunction.arguments)
            }
        }
    }
    return fieldDefinition
}