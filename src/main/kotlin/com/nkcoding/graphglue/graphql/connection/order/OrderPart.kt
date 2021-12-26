package com.nkcoding.graphglue.graphql.connection.order

import com.nkcoding.graphglue.model.Node
import kotlin.reflect.KProperty

abstract class OrderPart<in T: Node>(val property: KProperty<*>, val neo4jPropertyName: String) {
    abstract fun getValue(node: T): Any?
}