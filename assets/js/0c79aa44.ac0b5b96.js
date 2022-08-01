"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72016],{42079:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var r=t(87462),s=(t(67294),t(3905)),n=t(56923);const p={},o="getFromGraphQL",i={unversionedId:"api/graphglue-core/io.github.graphglue.model.property/-base-property-delegate/get-from-graph-q-l-",id:"api/graphglue-core/io.github.graphglue.model.property/-base-property-delegate/get-from-graph-q-l-",title:"getFromGraphQL",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.model.property/-base-property-delegate/get-from-graph-q-l-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.model.property/-base-property-delegate",slug:"/api/graphglue-core/io.github.graphglue.model.property/-base-property-delegate/get-from-graph-q-l-",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.model.property/-base-property-delegate/get-from-graph-q-l-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"BasePropertyDelegate",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.model.property/-base-property-delegate/-base-property-delegate-"},next:{title:"getValue",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.model.property/-base-property-delegate/get-value-"}},l={},d=[],g={toc:d};function c(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,r.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"getfromgraphql"},"getFromGraphQL"),(0,s.kt)(n.Z,{dokkaHTML:'\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">suspend </span><span class="token keyword">fun </span><a href="get-from-graph-q-l-"><span class="token function">getFromGraphQL</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter "><span><span class="token annotation">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation">Autowired</span></span>&nbsp;</span>nodeQueryParser<span class="token operator">: </span><a href="../../io.github.graphglue.data.execution/-node-query-parser/index-">NodeQueryParser</a><span class="token punctuation">, </span></span><span class="parameter ">dataFetchingEnvironment<span class="token operator">: </span><span data-unresolved-link="graphql.schema/DataFetchingEnvironment///PointingToDeclaration/">DataFetchingEnvironment</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><span data-unresolved-link="graphql.execution/DataFetcherResult///PointingToDeclaration/">DataFetcherResult</span><span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><p class="paragraph">Gets the result of a GraphQL query Uses the cache to obtain the result, and if no cache entry was found, creates a new database query and executes it Uses <a href="../../../graphglue-core/io.github.graphglue.model.property/-base-property-delegate/construct-graph-q-l-result-">constructGraphQLResult</a> to create the final result</p><h4 class="">Return</h4><p class="paragraph">the result, including a new local context</p><h2 class="">Parameters</h2><div data-togglable="Parameters"><div class="table" data-togglable="Parameters"><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>node</span><wbr><span>Query</span><wbr><span><span>Parser</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">used to obtain the <a href="../../io.github.graphglue.definition/-node-definition-collection/index-">NodeDefinitionCollection</a> and <span data-unresolved-link="com.fasterxml.jackson.databind/ObjectMapper///PointingToDeclaration/">ObjectMapper</span></p></div></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>data</span><wbr><span>Fetching</span><wbr><span><span>Environment</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">environment to fetch data, used to parse subtree of fetched nodes</p></div></div></div></div></div></div></div></div></div>\n',mdxType:"DokkaComponent"}))}c.isMDXComponent=!0}}]);