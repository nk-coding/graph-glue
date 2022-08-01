"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[109],{7135:(a,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var e=s(87462),t=(s(67294),s(3905)),p=s(56923);const i={},o="NodeQuery",r={unversionedId:"api/graphglue-core/io.github.graphglue.data.execution/-node-query/index-",id:"api/graphglue-core/io.github.graphglue.data.execution/-node-query/index-",title:"NodeQuery",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.data.execution/-node-query/index-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.data.execution/-node-query",slug:"/api/graphglue-core/io.github.graphglue.data.execution/-node-query/index-",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.data.execution/-node-query/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"generateCondition",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.data.execution/-cypher-condition-generator/generate-condition-"},next:{title:"NodeQuery",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.data.execution/-node-query/-node-query-"}},l={},d=[],c={toc:d};function u(a){let{components:n,...s}=a;return(0,t.kt)("wrapper",(0,e.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"nodequery"},"NodeQuery"),(0,t.kt)(p.Z,{dokkaHTML:'\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">class </span><a href="index-">NodeQuery</a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>definition<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>options<span class="token operator">: </span><a href="../-node-query-options/index-">NodeQueryOptions</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>parts<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html">Map</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><span class="token keyword"></span><a href="../-node-query-part/index-">NodeQueryPart</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><p class="paragraph">Defines a query which fetches Nodes of type <code class="lang-kotlin">definition</code></p></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="Constructors">Constructors</button><button class="section-tab" data-togglable="Properties">Properties</button><button class="section-tab" data-togglable="Parameters">Parameters</button></div>\n    <div class="tabs-section-body">\n      <h2 class="">Parameters</h2>\n      <div data-togglable="Parameters">\n        <div class="platform-hinted WithExtraAttributes" data-platform-hinted="data-platform-hinted" data-togglable="Parameters"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div data-togglable="Parameters"><div class="table" data-togglable="Parameters"><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>definition</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">defines which type of <a href="../../io.github.graphglue.model/-node/index-">Node</a> is fetched</p></div></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>options</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">options for the query, e.g. pagination</p></div></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>parts</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">subqueries partitioned into parts</p></div></div></div></div></div></div></div></div></div>\n      </div>\n      <h2 class="tabbedcontent">Constructors</h2>\n      <div class="table" data-togglable="Constructors"><a data-name="-712180592%2FConstructors%2F-1005884737" anchor-label="NodeQuery" id="-712180592%2FConstructors%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n        <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n          <div class="main-subrow keyValue TabbedContent">\n            <div class=""><span class="inline-flex">\n                <div><a href="-node-query-"><span>Node</span><wbr><span><span>Query</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-712180592%2FConstructors%2F-1005884737"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="-node-query-"><span class="token function">NodeQuery</span></a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;definition<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;options<span class="token operator">: </span><a href="../-node-query-options/index-">NodeQueryOptions</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;parts<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html">Map</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><span class="token keyword"></span><a href="../-node-query-part/index-">NodeQueryPart</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Properties</h2>\n      <div class="table" data-togglable="Properties"><a data-name="890923572%2FProperties%2F-1005884737" anchor-label="definition" id="890923572%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n        <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="definition-"><span><span>definition</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="890923572%2FProperties%2F-1005884737"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><a data-name="890923572%2FProperties%2F-1005884737" anchor-label="definition" id="890923572%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="definition-">definition</a><span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="374450869%2FProperties%2F-1005884737" anchor-label="options" id="374450869%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n        <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="options-"><span><span>options</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="374450869%2FProperties%2F-1005884737"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><a data-name="374450869%2FProperties%2F-1005884737" anchor-label="options" id="374450869%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="options-">options</a><span class="token operator">: </span><a href="../-node-query-options/index-">NodeQueryOptions</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-127925709%2FProperties%2F-1005884737" anchor-label="parts" id="-127925709%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n        <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="parts-"><span><span>parts</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-127925709%2FProperties%2F-1005884737"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><a data-name="-127925709%2FProperties%2F-1005884737" anchor-label="parts" id="-127925709%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="parts-">parts</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html">Map</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><span class="token keyword"></span><a href="../-node-query-part/index-">NodeQueryPart</a><span class="token operator">&gt;</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',mdxType:"DokkaComponent"}))}u.isMDXComponent=!0}}]);