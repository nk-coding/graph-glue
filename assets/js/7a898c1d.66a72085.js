"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3912],{38717:function(a,n,e){e.r(n),e.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return v}});var s=e(87462),t=e(63366),p=(e(67294),e(3905)),i=e(56923),o=["components"],r={},l="<span>Default</span><wbr/><span>Schema</span><wbr/><span><span>Transformer</span></span>",d={unversionedId:"api/io.github.graphglue.graphql.schema/-default-schema-transformer/index-",id:"api/io.github.graphglue.graphql.schema/-default-schema-transformer/index-",title:"<span>Default</span><wbr/><span>Schema</span><wbr/><span><span>Transformer</span></span>",description:"",source:"@site/docs/api/io.github.graphglue.graphql.schema/-default-schema-transformer/index-.mdx",sourceDirName:"api/io.github.graphglue.graphql.schema/-default-schema-transformer",slug:"/api/io.github.graphglue.graphql.schema/-default-schema-transformer/index-",permalink:"/graph-glue/api/io.github.graphglue.graphql.schema/-default-schema-transformer/index-",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"<span>Package io.</span><wbr/><span>github.</span><wbr/><span>graphglue.</span><wbr/><span>graphql.</span><wbr/><span>schema</span>",permalink:"/graph-glue/api/io.github.graphglue.graphql.schema/index-"},next:{title:"<span>Default</span><wbr/><span>Schema</span><wbr/><span><span>Transformer</span></span>",permalink:"/graph-glue/api/io.github.graphglue.graphql.schema/-default-schema-transformer/-default-schema-transformer-"}},c={},v=[],m={toc:v};function h(a){var n=a.components,e=(0,t.Z)(a,o);return(0,p.kt)("wrapper",(0,s.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"defaultschematransformer"},(0,p.kt)("span",null,"Default"),(0,p.kt)("wbr",null),(0,p.kt)("span",null,"Schema"),(0,p.kt)("wbr",null),(0,p.kt)("span",null,(0,p.kt)("span",null,"Transformer"))),(0,p.kt)(i.Z,{dokkaHTML:'\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword">class </span><a href="index-">DefaultSchemaTransformer</a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;oldSchema<span class="token operator">: </span><span data-unresolved-link="graphql.schema/GraphQLSchema///PointingToDeclaration/">GraphQLSchema</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>mappingContext<span class="token operator">: </span><span data-unresolved-link="org.springframework.data.neo4j.core.mapping/Neo4jMappingContext///PointingToDeclaration/">Neo4jMappingContext</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>nodeDefinitionCollection<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition-collection/index-">NodeDefinitionCollection</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>dataFetcherFactoryProvider<span class="token operator">: </span><span data-unresolved-link="com.expediagroup.graphql.generator.execution/KotlinDataFetcherFactoryProvider///PointingToDeclaration/">KotlinDataFetcherFactoryProvider</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>subFilterGenerator<span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-sub-filter-generator/index-">SubFilterGenerator</a></span></span><span class="token punctuation">)</span> : <a href="../-schema-transformer/index-">SchemaTransformer</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><p class="paragraph">Default implementation of <a href="../-schema-transformer/index-">SchemaTransformer</a> The transformation result can be found in <a href="schema-">schema</a> The generated filter collection can be found in <a href="filter-definition-collection-">filterDefinitionCollection</a></p></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="Constructors">Constructors</button><button class="section-tab" data-togglable="Properties">Properties</button><button class="section-tab" data-togglable="Parameters">Parameters</button></div>\n    <div class="tabs-section-body">\n      <h2 class="">Parameters</h2>\n      <div data-togglable="Parameters">\n        <div class="platform-hinted WithExtraAttributes" data-platform-hinted="data-platform-hinted" data-togglable="Parameters"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div data-togglable="Parameters"><div class="table" data-togglable="Parameters"><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>old</span><wbr><span><span>Schema</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">the schema to transform</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>mapping</span><wbr><span><span>Context</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">mapping context used to get type information from Neo4j</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>node</span><wbr><span>Definition</span><wbr><span><span>Collection</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">collection of all <a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a>s</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>data</span><wbr><span>Fetcher</span><wbr><span>Factory</span><wbr><span><span>Provider</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">provides function and property data fetchers</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>sub</span><wbr><span>Filter</span><wbr><span><span>Generator</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">used to generate the filter entries</p></div></div></div></div></div></div></div></div></div>\n      </div>\n      <h2 class="tabbedcontent">Constructors</h2>\n      <div class="table" data-togglable="Constructors"><a data-name="1620834089%2FConstructors%2F769193423" anchor-label="DefaultSchemaTransformer" id="1620834089%2FConstructors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue TabbedContent">\n            <div class=""><span class="inline-flex">\n                <div><a href="-default-schema-transformer-"><span>Default</span><wbr><span>Schema</span><wbr><span><span>Transformer</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1620834089%2FConstructors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="-default-schema-transformer-"><span class="token function">DefaultSchemaTransformer</span></a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;oldSchema<span class="token operator">: </span><span data-unresolved-link="graphql.schema/GraphQLSchema///PointingToDeclaration/">GraphQLSchema</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;mappingContext<span class="token operator">: </span><span data-unresolved-link="org.springframework.data.neo4j.core.mapping/Neo4jMappingContext///PointingToDeclaration/">Neo4jMappingContext</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;nodeDefinitionCollection<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition-collection/index-">NodeDefinitionCollection</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;dataFetcherFactoryProvider<span class="token operator">: </span><span data-unresolved-link="com.expediagroup.graphql.generator.execution/KotlinDataFetcherFactoryProvider///PointingToDeclaration/">KotlinDataFetcherFactoryProvider</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;subFilterGenerator<span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-sub-filter-generator/index-">SubFilterGenerator</a></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Properties</h2>\n      <div class="table" data-togglable="Properties"><a data-name="441386434%2FProperties%2F769193423" anchor-label="dataFetcherFactoryProvider" id="441386434%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="data-fetcher-factory-provider-">dataFetcherFactoryProvider</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="441386434%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="441386434%2FProperties%2F769193423" anchor-label="dataFetcherFactoryProvider" id="441386434%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">val </span><a href="data-fetcher-factory-provider-">dataFetcherFactoryProvider</a><span class="token operator">: </span><span data-unresolved-link="com.expediagroup.graphql.generator.execution/KotlinDataFetcherFactoryProvider///PointingToDeclaration/">KotlinDataFetcherFactoryProvider</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="787787191%2FProperties%2F769193423" anchor-label="filterDefinitionCollection" id="787787191%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="filter-definition-collection-">filterDefinitionCollection</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="787787191%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="787787191%2FProperties%2F769193423" anchor-label="filterDefinitionCollection" id="787787191%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">val </span><a href="filter-definition-collection-">filterDefinitionCollection</a><span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-filter-definition-collection/index-">FilterDefinitionCollection</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><a data-name="787787191%2FProperties%2F769193423" anchor-label="filterDefinitionCollection" id="787787191%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><p class="paragraph">Collection with all filter definitions</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="1019968514%2FProperties%2F769193423" anchor-label="inputTypeCache" id="1019968514%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="input-type-cache-">inputTypeCache</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1019968514%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="1019968514%2FProperties%2F769193423" anchor-label="inputTypeCache" id="1019968514%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">val </span><a href="input-type-cache-">inputTypeCache</a><span class="token operator">: </span><a href="../../io.github.graphglue.util/-cache-map/index-">CacheMap</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><span class="token keyword"></span><span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span><span class="token operator">&gt;</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><a data-name="1019968514%2FProperties%2F769193423" anchor-label="inputTypeCache" id="1019968514%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><p class="paragraph">Cache for <span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span>s</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-1139139553%2FProperties%2F769193423" anchor-label="mappingContext" id="-1139139553%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="mapping-context-">mappingContext</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1139139553%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="-1139139553%2FProperties%2F769193423" anchor-label="mappingContext" id="-1139139553%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">val </span><a href="mapping-context-">mappingContext</a><span class="token operator">: </span><span data-unresolved-link="org.springframework.data.neo4j.core.mapping/Neo4jMappingContext///PointingToDeclaration/">Neo4jMappingContext</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-1416562643%2FProperties%2F769193423" anchor-label="nodeDefinitionCollection" id="-1416562643%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="node-definition-collection-">nodeDefinitionCollection</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1416562643%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="-1416562643%2FProperties%2F769193423" anchor-label="nodeDefinitionCollection" id="-1416562643%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">val </span><a href="node-definition-collection-">nodeDefinitionCollection</a><span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition-collection/index-">NodeDefinitionCollection</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="1697598291%2FProperties%2F769193423" anchor-label="outputTypeCache" id="1697598291%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="output-type-cache-">outputTypeCache</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1697598291%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="1697598291%2FProperties%2F769193423" anchor-label="outputTypeCache" id="1697598291%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">val </span><a href="output-type-cache-">outputTypeCache</a><span class="token operator">: </span><a href="../../io.github.graphglue.util/-cache-map/index-">CacheMap</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><span class="token keyword"></span><span data-unresolved-link="graphql.schema/GraphQLOutputType///PointingToDeclaration/">GraphQLOutputType</span><span class="token operator">&gt;</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><a data-name="1697598291%2FProperties%2F769193423" anchor-label="outputTypeCache" id="1697598291%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><p class="paragraph">Cache for <span data-unresolved-link="graphql.schema/GraphQLOutputType///PointingToDeclaration/">GraphQLOutputType</span>s</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-668983681%2FProperties%2F769193423" anchor-label="schema" id="-668983681%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="schema-">schema</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-668983681%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="-668983681%2FProperties%2F769193423" anchor-label="schema" id="-668983681%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">val </span><a href="schema-">schema</a><span class="token operator">: </span><span data-unresolved-link="graphql.schema/GraphQLSchema///PointingToDeclaration/">GraphQLSchema</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><a data-name="-668983681%2FProperties%2F769193423" anchor-label="schema" id="-668983681%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><p class="paragraph">The new modified schema</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="1134138629%2FProperties%2F769193423" anchor-label="subFilterGenerator" id="1134138629%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="sub-filter-generator-">subFilterGenerator</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1134138629%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="1134138629%2FProperties%2F769193423" anchor-label="subFilterGenerator" id="1134138629%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">val </span><a href="sub-filter-generator-">subFilterGenerator</a><span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-sub-filter-generator/index-">SubFilterGenerator</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',mdxType:"DokkaComponent"}))}h.isMDXComponent=!0}}]);