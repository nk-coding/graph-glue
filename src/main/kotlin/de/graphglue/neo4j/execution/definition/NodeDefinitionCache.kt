package de.graphglue.neo4j.execution.definition

import de.graphglue.model.Node
import de.graphglue.util.CacheMap
import org.springframework.data.neo4j.core.mapping.Neo4jMappingContext
import kotlin.reflect.KClass

/**
 * Cache of [NodeDefinition]s
 * Used to initially construct all definitions
 *
 * @property backingCollection cache which stores the already created definitions
 * @property neo4jMappingContext used to generate [NodeDefinition]s
 */
class NodeDefinitionCache(
    private val backingCollection: CacheMap<KClass<out Node>, NodeDefinition>,
    private val neo4jMappingContext: Neo4jMappingContext
) {

    /**
     * If already present, gets the [NodeDefinition] for the class, otherwise provides one
     *
     * @param kClass the class used to create the definition
     * @return the present or generated definition
     */
    fun getOrCreate(kClass: KClass<out Node>): NodeDefinition {
        return backingCollection.computeIfAbsent(kClass) {
            generateNodeDefinition(kClass, neo4jMappingContext)
        }
    }
}