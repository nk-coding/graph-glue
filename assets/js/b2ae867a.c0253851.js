"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7263],{30841:function(a,n,e){e.r(n),e.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var i=e(87462),t=e(63366),s=(e(67294),e(3905)),r=e(56923),o=["components"],p={},l="queryParser",d={unversionedId:"api/io.github.graphglue.graphql/-graphglue-graph-q-l-configuration/query-parser-",id:"api/io.github.graphglue.graphql/-graphglue-graph-q-l-configuration/query-parser-",title:"queryParser",description:"",source:"@site/docs/api/io.github.graphglue.graphql/-graphglue-graph-q-l-configuration/query-parser-.mdx",sourceDirName:"api/io.github.graphglue.graphql/-graphglue-graph-q-l-configuration",slug:"/api/io.github.graphglue.graphql/-graphglue-graph-q-l-configuration/query-parser-",permalink:"/graph-glue/api/io.github.graphglue.graphql/-graphglue-graph-q-l-configuration/query-parser-",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"nodeDefinitionCollection",permalink:"/graph-glue/api/io.github.graphglue.graphql/-graphglue-graph-q-l-configuration/node-definition-collection-"},next:{title:"schemaConfig",permalink:"/graph-glue/api/io.github.graphglue.graphql/-graphglue-graph-q-l-configuration/schema-config-"}},c={},u=[],g={toc:u};function h(a){var n=a.components,e=(0,t.Z)(a,o);return(0,s.kt)("wrapper",(0,i.Z)({},g,e,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"queryparser"},"queryParser"),(0,s.kt)(r.Z,{dokkaHTML:'\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation">@</span><span data-unresolved-link="org.springframework.context.annotation/Bean///PointingToDeclaration/"><span class="token annotation">Bean</span></span></div><div class="block"><span class="token annotation">@</span><span data-unresolved-link="org.springframework.boot.autoconfigure.condition/ConditionalOnMissingBean///PointingToDeclaration/"><span class="token annotation">ConditionalOnMissingBean</span></span></div></div><span class="token keyword"></span><span class="token keyword">fun </span><a href="query-parser-"><span class="token function">queryParser</span></a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;nodeDefinitionCollection<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition-collection/index-">NodeDefinitionCollection</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;filterDefinitionCollection<span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-filter-definition-collection/index-">FilterDefinitionCollection</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;objectMapper<span class="token operator">: </span><span data-unresolved-link="com.fasterxml.jackson.databind/ObjectMapper///PointingToDeclaration/">ObjectMapper</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../io.github.graphglue.data.execution/-node-query-parser/index-">NodeQueryParser</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><p class="paragraph">Parser for incoming GraphQL queries Allows transforming (a part of) a GraphQL query into a single Cypher query</p><h4 class="">Return</h4><p class="paragraph">the generated <a href="../../io.github.graphglue.data.execution/-node-query-parser/index-">NodeQueryParser</a></p><h2 class="">Parameters</h2><div data-togglable="Parameters"><div class="table" data-togglable="Parameters"><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>node</span><wbr><span>Definition</span><wbr><span><span>Collection</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">collection of all <a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a>s</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>filter</span><wbr><span>Definition</span><wbr><span><span>Collection</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">collection of all <a href="../../io.github.graphglue.connection.filter.definition/-filter-definition/index-">FilterDefinition</a>s</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>object</span><wbr><span><span>Mapper</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">necessary for cursor serialization and deserialization</p></div></div></div></div></div></div></div></div></div>\n',mdxType:"DokkaComponent"}))}h.isMDXComponent=!0}}]);