description = "A framework to connect graphql-kotlin and neo4j"

val springBootVersion = "2.5.5"
val reactorVersion = "5.3.10"
val graphqlKotlinVersion = "5.3.0"
val neo4jVersion = "2.6.1"

plugins {
    id("org.springframework.boot") version "2.5.5"
	id("io.spring.dependency-management") version "1.0.11.RELEASE"
	kotlin("jvm") version "1.6.0"
	kotlin("plugin.spring") version "1.6.0"
    id("com.expediagroup.graphql") version "5.3.0"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.expediagroup", "graphql-kotlin-spring-server",graphqlKotlinVersion)
    implementation("com.expediagroup", "graphql-kotlin-hooks-provider", graphqlKotlinVersion)
    implementation("org.springframework.boot", "spring-boot-starter-validation", springBootVersion)
    implementation("org.springframework.boot", "spring-boot-starter-data-neo4j", neo4jVersion)
}

graphql {
    schema {
        packages = listOf("de.nkcoding.testing")
    }
}