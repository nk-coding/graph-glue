"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[713],{69510:function(a,n,e){e.r(n),e.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var s=e(87462),t=e(63366),i=(e(67294),e(3905)),o=e(56923),p=["components"],r={},l="NodeQueryParser",d={unversionedId:"api/io.github.graphglue.data.execution/-node-query-parser/index-",id:"api/io.github.graphglue.data.execution/-node-query-parser/index-",title:"NodeQueryParser",description:"",source:"@site/docs/api/io.github.graphglue.data.execution/-node-query-parser/index-.mdx",sourceDirName:"api/io.github.graphglue.data.execution/-node-query-parser",slug:"/api/io.github.graphglue.data.execution/-node-query-parser/index-",permalink:"/graph-glue/api/io.github.graphglue.data.execution/-node-query-parser/index-",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"orderBy",permalink:"/graph-glue/api/io.github.graphglue.data.execution/-node-query-options/order-by-"},next:{title:"NodeQueryParser",permalink:"/graph-glue/api/io.github.graphglue.data.execution/-node-query-parser/-node-query-parser-"}},c={},u=[],b={toc:u};function v(a){var n=a.components,e=(0,t.Z)(a,p);return(0,i.kt)("wrapper",(0,s.Z)({},b,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nodequeryparser"},"NodeQueryParser"),(0,i.kt)(o.Z,{dokkaHTML:'\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword">class </span><a href="index-">NodeQueryParser</a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>nodeDefinitionCollection<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition-collection/index-">NodeDefinitionCollection</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>filterDefinitionCollection<span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-filter-definition-collection/index-">FilterDefinitionCollection</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>objectMapper<span class="token operator">: </span><span data-unresolved-link="com.fasterxml.jackson.databind/ObjectMapper///PointingToDeclaration/">ObjectMapper</span></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><p class="paragraph">Parser to get <a href="../-node-query/index-">NodeQuery</a>s Can be used to create queries which load a subtree of nodes in one query</p></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="Constructors">Constructors</button><button class="section-tab" data-togglable="Functions">Functions</button><button class="section-tab" data-togglable="Properties">Properties</button><button class="section-tab" data-togglable="Parameters">Parameters</button></div>\n    <div class="tabs-section-body">\n      <h2 class="">Parameters</h2>\n      <div data-togglable="Parameters">\n        <div class="platform-hinted WithExtraAttributes" data-platform-hinted="data-platform-hinted" data-togglable="Parameters"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div data-togglable="Parameters"><div class="table" data-togglable="Parameters"><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>node</span><wbr><span>Definition</span><wbr><span><span>Collection</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">used to get the <a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a> for a specific <a href="../../io.github.graphglue.model/-node/index-">Node</a></p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>filter</span><wbr><span>Definition</span><wbr><span><span>Collection</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">used to get the <a href="../../io.github.graphglue.connection.filter.definition/-filter-definition/index-">FilterDefinition</a> for a specific <a href="../../io.github.graphglue.model/-node/index-">Node</a></p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>object</span><wbr><span><span>Mapper</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">used to parse cursors</p></div></div></div></div></div></div></div></div></div>\n      </div>\n      <h2 class="tabbedcontent">Constructors</h2>\n      <div class="table" data-togglable="Constructors"><a data-name="474469194%2FConstructors%2F769193423" anchor-label="NodeQueryParser" id="474469194%2FConstructors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue TabbedContent">\n            <div class=""><span class="inline-flex">\n                <div><a href="-node-query-parser-"><span>Node</span><wbr><span>Query</span><wbr><span><span>Parser</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="474469194%2FConstructors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="-node-query-parser-"><span class="token function">NodeQueryParser</span></a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;nodeDefinitionCollection<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition-collection/index-">NodeDefinitionCollection</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;filterDefinitionCollection<span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-filter-definition-collection/index-">FilterDefinitionCollection</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;objectMapper<span class="token operator">: </span><span data-unresolved-link="com.fasterxml.jackson.databind/ObjectMapper///PointingToDeclaration/">ObjectMapper</span></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Functions</h2>\n      <div class="table" data-togglable="Functions"><a data-name="152252517%2FFunctions%2F769193423" anchor-label="generateManyNodeQuery" id="152252517%2FFunctions%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="generate-many-node-query-"><span>generate</span><wbr><span>Many</span><wbr><span>Node</span><wbr><span><span>Query</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="152252517%2FFunctions%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="generate-many-node-query-"><span class="token function">generateManyNodeQuery</span></a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;definition<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;dataFetchingEnvironment<span class="token operator">: </span><span data-unresolved-link="graphql.schema/DataFetchingEnvironment///PointingToDeclaration/">DataFetchingEnvironment</span><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;additionalConditions<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="../-cypher-condition-generator/index-">CypherConditionGenerator</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;requiredPermission<span class="token operator">: </span><a href="../../io.github.graphglue.authorization/-permission/index-">Permission</a><span class="token operator">?</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../-node-query/index-">NodeQuery</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><p class="paragraph">Generates a <a href="../-node-query/index-">NodeQuery</a> which loads multiple <a href="../../io.github.graphglue.model/-node/index-">Node</a>s Can use the <code class="lang-kotlin">dataFetchingEnvironment</code> to fetch a subtree of node</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-1562969964%2FFunctions%2F769193423" anchor-label="generateOneNodeQuery" id="-1562969964%2FFunctions%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="generate-one-node-query-"><span>generate</span><wbr><span>One</span><wbr><span>Node</span><wbr><span><span>Query</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1562969964%2FFunctions%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="generate-one-node-query-"><span class="token function">generateOneNodeQuery</span></a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;definition<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;dataFetchingEnvironment<span class="token operator">: </span><span data-unresolved-link="graphql.schema/DataFetchingEnvironment///PointingToDeclaration/">DataFetchingEnvironment</span><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;additionalConditions<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="../-cypher-condition-generator/index-">CypherConditionGenerator</a><span class="token operator">&gt;</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;requiredPermission<span class="token operator">: </span><a href="../../io.github.graphglue.authorization/-permission/index-">Permission</a><span class="token operator">?</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../-node-query/index-">NodeQuery</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><p class="paragraph">Generates a <a href="../-node-query/index-">NodeQuery</a> which loads a single <a href="../../io.github.graphglue.model/-node/index-">Node</a> Can use the <code class="lang-kotlin">dataFetchingEnvironment</code> to fetch a subtree of node</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-2077313229%2FFunctions%2F769193423" anchor-label="generateRelationshipNodeQuery" id="-2077313229%2FFunctions%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="generate-relationship-node-query-"><span>generate</span><wbr><span>Relationship</span><wbr><span>Node</span><wbr><span><span>Query</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-2077313229%2FFunctions%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="generate-relationship-node-query-"><span class="token function">generateRelationshipNodeQuery</span></a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;definition<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;dataFetchingEnvironment<span class="token operator">: </span><span data-unresolved-link="graphql.schema/DataFetchingEnvironment///PointingToDeclaration/">DataFetchingEnvironment</span><span class="token operator">?</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;relationshipDefinition<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-relationship-definition/index-">RelationshipDefinition</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;parentNode<span class="token operator">: </span><a href="../../io.github.graphglue.model/-node/index-">Node</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;requiredPermission<span class="token operator">: </span><a href="../../io.github.graphglue.authorization/-permission/index-">Permission</a><span class="token operator">?</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../-node-query/index-">NodeQuery</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><p class="paragraph">Generates a <a href="../-node-query/index-">NodeQuery</a> for a specific relationship Can use the <code class="lang-kotlin">dataFetchingEnvironment</code> to fetch a subtree of node</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Properties</h2>\n      <div class="table" data-togglable="Properties"><a data-name="-800395171%2FProperties%2F769193423" anchor-label="filterDefinitionCollection" id="-800395171%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="filter-definition-collection-">filterDefinitionCollection</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-800395171%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="-800395171%2FProperties%2F769193423" anchor-label="filterDefinitionCollection" id="-800395171%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="filter-definition-collection-">filterDefinitionCollection</a><span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-filter-definition-collection/index-">FilterDefinitionCollection</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="1321446483%2FProperties%2F769193423" anchor-label="nodeDefinitionCollection" id="1321446483%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="node-definition-collection-">nodeDefinitionCollection</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1321446483%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="1321446483%2FProperties%2F769193423" anchor-label="nodeDefinitionCollection" id="1321446483%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="node-definition-collection-">nodeDefinitionCollection</a><span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition-collection/index-">NodeDefinitionCollection</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="1847473542%2FProperties%2F769193423" anchor-label="objectMapper" id="1847473542%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="object-mapper-">objectMapper</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1847473542%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="1847473542%2FProperties%2F769193423" anchor-label="objectMapper" id="1847473542%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="object-mapper-">objectMapper</a><span class="token operator">: </span><span data-unresolved-link="com.fasterxml.jackson.databind/ObjectMapper///PointingToDeclaration/">ObjectMapper</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',mdxType:"DokkaComponent"}))}v.isMDXComponent=!0}}]);