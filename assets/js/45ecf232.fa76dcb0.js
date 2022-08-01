"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41460],{26489:(a,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>p,metadata:()=>r,toc:()=>c});var e=s(87462),t=(s(67294),s(3905)),o=s(56923);const p={},i="Edge",r={unversionedId:"api/graphglue-core/io.github.graphglue.connection.model/-edge/index-",id:"api/graphglue-core/io.github.graphglue.connection.model/-edge/index-",title:"Edge",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.connection.model/-edge/index-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.connection.model/-edge",slug:"/api/graphglue-core/io.github.graphglue.connection.model/-edge/index-",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.connection.model/-edge/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"totalCount",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.connection.model/-connection/total-count-"},next:{title:"Edge",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.connection.model/-edge/-edge-"}},l={},c=[],d={toc:c};function g(a){let{components:n,...s}=a;return(0,t.kt)("wrapper",(0,e.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"edge"},"Edge"),(0,t.kt)(o.Z,{dokkaHTML:'\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">class </span><a href="index-">Edge</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator"> : </span><a href="../../io.github.graphglue.model/-node/index-">Node</a><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="index-">T</a><span class="token punctuation">, </span></span><span class="parameter ">order<span class="token operator">: </span><a href="../../io.github.graphglue.connection.order/-order/index-">Order</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><p class="paragraph">Edge returned in the GraphQL API Consists of a Node and a Cursor The cursor is only valid in a specific connection context. Cursors can only be used, if the ordering of nodes is not changed. Cursors should not be used for long term storage.</p></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="Constructors">Constructors</button><button class="section-tab" data-togglable="Functions">Functions</button><button class="section-tab" data-togglable="Parameters">Parameters</button></div>\n    <div class="tabs-section-body">\n      <h2 class="">Parameters</h2>\n      <div data-togglable="Parameters">\n        <div class="platform-hinted WithExtraAttributes" data-platform-hinted="data-platform-hinted" data-togglable="Parameters"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div data-togglable="Parameters"><div class="table" data-togglable="Parameters"><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>node</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">the <a href="../../io.github.graphglue.model/-node/index-">Node</a> at the start of the edge</p></div></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>order</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">necessary for Cursor generation</p></div></div></div></div></div></div></div></div></div>\n      </div>\n      <h2 class="tabbedcontent">Constructors</h2>\n      <div class="table" data-togglable="Constructors"><a data-name="-1060849875%2FConstructors%2F-1005884737" anchor-label="Edge" id="-1060849875%2FConstructors%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n        <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n          <div class="main-subrow keyValue TabbedContent">\n            <div class=""><span class="inline-flex">\n                <div><a href="-edge-"><span><span>Edge</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1060849875%2FConstructors%2F-1005884737"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator"> : </span><a href="../../io.github.graphglue.model/-node/index-">Node</a><span class="token operator">&gt; </span><a href="-edge-"><span class="token function">Edge</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="index-">T</a><span class="token punctuation">, </span></span><span class="parameter ">order<span class="token operator">: </span><a href="../../io.github.graphglue.connection.order/-order/index-">Order</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Functions</h2>\n      <div class="table" data-togglable="Functions"><a data-name="1414597670%2FFunctions%2F-1005884737" anchor-label="cursor" id="1414597670%2FFunctions%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n        <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="cursor-"><span><span>cursor</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1414597670%2FFunctions%2F-1005884737"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="cursor-"><span class="token function">cursor</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter "><span><span class="token annotation">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation">Autowired</span></span>&nbsp;</span>objectMapper<span class="token operator">: </span><span data-unresolved-link="com.fasterxml.jackson.databind/ObjectMapper///PointingToDeclaration/">ObjectMapper</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><p class="paragraph">Generates the cursor associated with the edge</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="530379448%2FFunctions%2F-1005884737" anchor-label="node" id="530379448%2FFunctions%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n        <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="node-"><span><span>node</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="530379448%2FFunctions%2F-1005884737"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="node-"><span class="token function">node</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">dataFetchingEnvironment<span class="token operator">: </span><span data-unresolved-link="graphql.schema/DataFetchingEnvironment///PointingToDeclaration/">DataFetchingEnvironment</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><span data-unresolved-link="graphql.execution/DataFetcherResult///PointingToDeclaration/">DataFetcherResult</span><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator">&gt;</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><p class="paragraph">Returns the node of the edge and sets the local context necessary to use caching</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',mdxType:"DokkaComponent"}))}g.isMDXComponent=!0}}]);