"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[851],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(n),c=i,u=h["".concat(p,".").concat(c)]||h[c]||m[c]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7220:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},p="Modeling",s={unversionedId:"modeling",id:"modeling",title:"Modeling",description:"As this library is based on GraphQL Kotlin and Spring Data Neo4j, the modeling is mostly a merge of their approaches.",source:"@site/docs/modeling.mdx",sourceDirName:".",slug:"/modeling",permalink:"/graph-glue/modeling",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/graph-glue/"},next:{title:"Authorization",permalink:"/graph-glue/authorization"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Class Definition",id:"class-definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Functions",id:"functions",level:2},{value:"Relationships",id:"relationships",level:2},{value:"GraphGlue relationships",id:"graphglue-relationships",level:3},{value:"Spring Data Neo4j relationships",id:"spring-data-neo4j-relationships",level:3},{value:"Comparison",id:"comparison",level:3},{value:"Inheritance",id:"inheritance",level:2},{value:"Ordering &amp; Filtering",id:"ordering--filtering",level:2},{value:"Ordering",id:"ordering",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Filters for properties",id:"filters-for-properties",level:4},{value:"Additional filters",id:"additional-filters",level:4}],h={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modeling"},"Modeling"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"As this library is based on GraphQL Kotlin and Spring Data Neo4j, the modeling is mostly a merge of their approaches.\nAlmost all of their features still work when using this library. For more information on their features, please have a look at\n",(0,r.kt)("a",{parentName:"p",href:"https://opensource.expediagroup.com/graphql-kotlin/docs/schema-generator/schema-generator-getting-started"},"GraphQL Kotlin")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-data/neo4j/docs/current/reference/html/#mapping"},"Spring Data Neo4j")))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Consider the following example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@DomainNode("trees")                                // (1)\n@Authorization("READ")                              // (2)\nclass Tree(\n    @OrderProperty @FilterProperty val age: Int,    // (3)\n    internal val name: String                       // (4)\n) : Node() {                                        // (5)\n    \n    @NodeRelationship("ROOT", Direction.OUTGOING)   // (6)\n    @delegate:Transient\n    val root by NodeProperty<Root>()\n    \n    @NodeRelationship("LEAF", Direction.OUTGOING)   // (7)\n    @delegate:Transient\n    val leafs by NodeSetProperty<Leaf>()\n    \n    fun ageInDays() = age * 365                     // (8)\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Necessary annotation for all ",(0,r.kt)("inlineCode",{parentName:"li"},"Node")," classes. If the ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," parameter is provided, a connection-like query with the name ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," is exposed."),(0,r.kt)("li",{parentName:"ol"},"Specifies the ",(0,r.kt)("inlineCode",{parentName:"li"},"READ")," permission for this Node, for more info, see ",(0,r.kt)("a",{parentName:"li",href:"./authorization"},"Authorization")),(0,r.kt)("li",{parentName:"ol"},"Property which is exposed in the GraaphQL schema. As it is annotated with both ",(0,r.kt)("inlineCode",{parentName:"li"},"@OrderProperty")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"@FilterProperty"),", connections of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Tree")," can both be filtered and ordered by this property."),(0,r.kt)("li",{parentName:"ol"},"Internal property NOT exposed in the GraphQL schema."),(0,r.kt)("li",{parentName:"ol"},"Each class needs to extend ",(0,r.kt)("inlineCode",{parentName:"li"},"Node")," in order to use any GraphGlue specific features."),(0,r.kt)("li",{parentName:"ol"},"An outgoing relation of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Root"),"."),(0,r.kt)("li",{parentName:"ol"},"An outgoing relation of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Set<Leaf>"),". In the GraphQL schema, it is exposed as ",(0,r.kt)("inlineCode",{parentName:"li"},"LeafConnection")),(0,r.kt)("li",{parentName:"ol"},"Function exposed as field in the GraphQL schema.")),(0,r.kt)("h2",{id:"class-definition"},"Class Definition"),(0,r.kt)("p",null,"Each node class both has to be annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@DomainNode")," and extend ",(0,r.kt)("inlineCode",{parentName:"p"},"io.github.graphglue.model.Node"),".\nIf any of those conditions is missing, GraphGlue-specific features might not work."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This does not mean, that you never should use classes which fullfill neighter of those criteries.\nFor example, a non-node class can be used as type for properties with a struct-like type: it is still persisted in the database as node, however, in the GraphQL schema, it does not implement ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),", meaning it is not possible to retrieve it via the ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," query."))),(0,r.kt)("p",null,"The Node class also defines an id. In Kotlin, it is possible to access the id using the ",(0,r.kt)("inlineCode",{parentName:"p"},"rawId")," String property. It is not possible to manually assign an id, as a id is automatically generated when the node is first saved. However, the generation can be customized by providing a bean with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"io.github.graphglue.model.NODE_ID_GENERATOR_BEAN")," and the type ",(0,r.kt)("inlineCode",{parentName:"p"},"IdGenerator<String>"),". By default, a random UUID is generated. "),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"Properties are both used to expose fields in the GraphQL schema, and save properties on the node in the database.\nBy default, both Spring Data Neo4j and GraphQL Kotlin use the name of the property as name, however, the name in the GraphQL schema can be changed by annotating it with ",(0,r.kt)("inlineCode",{parentName:"p"},'@GraphQLName("name")'),", the name of the property in the database can be changed by annotating it with ",(0,r.kt)("inlineCode",{parentName:"p"},'@Property("name")'),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Spring Data Neo4j and GraphQL Kotlin use different visibilities. While property backed by a field (this includes delegated properties) is saved in the database. GraphQL Kotlin only exposes ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," properties not annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@GraphQLIgnore")))),(0,r.kt)("p",null,"The used type must both be supported by GraphQL Kotlin and Spring Data Neo4j, however, both libaries provide extension mechanisms which allow you to support additional types."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Like properties, functions can be used to expose field in the GraphQL schema."),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h3",{id:"graphglue-relationships"},"GraphGlue relationships"),(0,r.kt)("p",null,"Declaration of one-sides of relationships"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@NodeRelationship(label, direction)\n@delegate:Transient\nval propertyName by NodeProperty<NodeType>()\n")),(0,r.kt)("p",null,"Declaration of many-sides of relationships"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@NodeRelationship(label, direction)\n@delegate:Transient\nval propertyName by NodeSetProperty<NodeType>()\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", and direction is either ",(0,r.kt)("inlineCode",{parentName:"p"},"Direction.INCOMING")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Direction.OUTGOING"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure to use ",(0,r.kt)("inlineCode",{parentName:"p"},"org.springframework.data.annotation.Transient"),".\nKotlin ",(0,r.kt)("inlineCode",{parentName:"p"},"Transient")," does not work and will result in strange errors, as Spring Data Neo4j tries to persist the backing field of the delegated property."))),(0,r.kt)("p",null,"On save, all relationships are saved. Save cascades down added entities, but removed ones.\nExample: If the one side has initially the value ",(0,r.kt)("inlineCode",{parentName:"p"},"node1"),", which then is replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"node2"),", when saving, ",(0,r.kt)("inlineCode",{parentName:"p"},"node2"),' is saved (as it was "added"), while ',(0,r.kt)("inlineCode",{parentName:"p"},"node1")," is not."),(0,r.kt)("h3",{id:"spring-data-neo4j-relationships"},"Spring Data Neo4j relationships"),(0,r.kt)("p",null,"Declaration of one-sides of relationships"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Relationship(label, direction)\nval propertyName: NodeType\n")),(0,r.kt)("p",null,"Declaration of many-sides of relationships"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Relationship(label, direction)\nval propertyName: List<NodeType>\n")),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-data/neo4j/docs/current/reference/html/#mapping.annotations.relationship"},"Connecting nodes: @Relationship")),(0,r.kt)("h3",{id:"comparison"},"Comparison"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"GraphGlue"),(0,r.kt)("th",{parentName:"tr",align:null},"Spring Data Neo4j"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GraphQL representation"),(0,r.kt)("td",{parentName:"tr",align:null},"One sides are represented by their appropriate type. Many sides are represented by connection types, supporting pagination, filtering and ordering"),(0,r.kt)("td",{parentName:"tr",align:null},"One sides are represented by their appropriate type. Many sides are represented as GraphQL list, without pagination, filtering or ordering support")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lazy loading"),(0,r.kt)("td",{parentName:"tr",align:null},"Only lazy loading is supported. Relations are automatically loaded when accessed. Note: when fetching data for GraphQL, the whole subtree is loaded at once using one Cypher query, preventing the n+1 problem."),(0,r.kt)("td",{parentName:"tr",align:null},"No lazy loading is supported, all relationships are eagerly loaded, which can result in large subgraphs being loaded. To prevent this, you may use ",(0,r.kt)("a",{parentName:"td",href:"https://docs.spring.io/spring-data/neo4j/docs/current/reference/html/#projections"},"Projections"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Matching of opposite sides"),(0,r.kt)("td",{parentName:"tr",align:null},"Opposite sides are matched if the ",(0,r.kt)("inlineCode",{parentName:"td"},"label")," is the same, but the ",(0,r.kt)("inlineCode",{parentName:"td"},"direction")," the opposite."),(0,r.kt)("td",{parentName:"tr",align:null},"Opposite sides are matched if the ",(0,r.kt)("inlineCode",{parentName:"td"},"label")," is the same, but the ",(0,r.kt)("inlineCode",{parentName:"td"},"direction")," the opposite.")))),(0,r.kt)("h2",{id:"inheritance"},"Inheritance"),(0,r.kt)("p",null,"Currently, only inheriting from abstract classes is supported.\nSpecifically, inheriting from ",(0,r.kt)("inlineCode",{parentName:"p"},"open"),", non-",(0,r.kt)("inlineCode",{parentName:"p"},"abstract")," classes is only supported if it is marked with ",(0,r.kt)("inlineCode",{parentName:"p"},"@GraphQLIgnore"),".\nInheriting from interfaces is possible, however non of the GraphGlue annotations (",(0,r.kt)("inlineCode",{parentName:"p"},"@DomainNode"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@Authorization"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@AdditionalFilter"),") is supported there, however, it can e.g. be used to share common ",(0,r.kt)("inlineCode",{parentName:"p"},"@GraphQLDescriptions"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@DomainNode")," annotation is not inherited and has to be present on all node types."))),(0,r.kt)("h2",{id:"ordering--filtering"},"Ordering & Filtering"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For more information on how to use ordering and filtering in GraphQL, see ",(0,r.kt)("a",{parentName:"p",href:"./connections"},"Connections")))),(0,r.kt)("h3",{id:"ordering"},"Ordering"),(0,r.kt)("p",null,"All nodes can be ordered by id.\nAdditionally, nodes of a specific type can also be ordered by all properties annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@OrderProperty"),". As those might not be unique, the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is used to create a strict total order.\nBy default, all data types which are ",(0,r.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/cypher-manual/current/syntax/operators/#cypher-ordering"},"comparable in Cypher")," are supported."),(0,r.kt)("h3",{id:"filtering"},"Filtering"),(0,r.kt)("p",null,"Filters are generated for specific node types.\nThese filters are generated by concatenating property-based filter fields and additional filter fields.\nThen, for each type, a meta filter is created, which allows joining filters by and, or and not:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gql"},"input TypeNodeFilterInput {\n    # filter fields\n}\n\ninput TypeFilterInput {\n    and: [TypeFilterInput!]\n    or: [TypeFilterInput!]\n    not: TypeFilterInput\n    node: TypeNodeFilterInput\n}\n")),(0,r.kt)("p",null,"Exactly one of the specified fields has to be provided."),(0,r.kt)("h4",{id:"filters-for-properties"},"Filters for properties"),(0,r.kt)("p",null,"Properties can be annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@FilterProperty")," to allow filtering by a specific property. By default, this is supported for properties with the following types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Double")," (Float in GraphQL)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"by NodeProperty<*>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"by NodeSetProperty<*>"))),(0,r.kt)("p",null,"Input fields of filters are always optional. All the present fields are then joined by ",(0,r.kt)("inlineCode",{parentName:"p"},"&&"),".",(0,r.kt)("br",{parentName:"p"}),"\n","The input fields of the filter depends on the type: For ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),", only ",(0,r.kt)("inlineCode",{parentName:"p"},"eq")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"in")," are available.\nFor all comparable types (",(0,r.kt)("inlineCode",{parentName:"p"},"Int"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Double")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"lt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lte"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"gte")," are additionally available.\nFinally, for ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"startsWith"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"endsWith"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"contains")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"matches")," are also available."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeProperty<*>")," backed properties, the meta filter for the specific type is used.\nFor ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeSetProperty<*>")," backed properties, the filter fields include  ",(0,r.kt)("inlineCode",{parentName:"p"},"all"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"some")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),", each can be set to a type specific meta filter."),(0,r.kt)("p",null,"It is possible to support additional property types, by providing Spring beans of type ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeFilterDefinitionEntry"),".\nHere an example for the Kotlin ",(0,r.kt)("inlineCode",{parentName:"p"},"Float")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun floatFilter() =\n    TypeFilterDefinitionEntry(Float::class.createType()) { name, property, parentNodeDefinition, _ ->\n        FloatFilterDefinition(name, parentNodeDefinition.getNeo4jNameOfProperty(property))\n    }\n")),(0,r.kt)("h4",{id:"additional-filters"},"Additional filters"),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},'AdditionalFilter("beanName")')," annotation, property independent filters can be defined.\nThis can for instance be used to filter by Node type, or a complex condition.\nA Spring bean with the specified name and type ",(0,r.kt)("inlineCode",{parentName:"p"},"FilterEntryDefinition")," has to be provided."))}c.isMDXComponent=!0}}]);