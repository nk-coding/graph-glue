"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1584],{43518:function(a,n,s){s.r(n),s.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return u}});var t=s(87462),e=s(63366),o=(s(67294),s(3905)),p=s(56923),i=["components"],r={},d="<span><span>Edge</span></span>",l={unversionedId:"api/io.github.graphglue.model/-edge/index-",id:"api/io.github.graphglue.model/-edge/index-",title:"<span><span>Edge</span></span>",description:"",source:"@site/docs/api/io.github.graphglue.model/-edge/index-.mdx",sourceDirName:"api/io.github.graphglue.model/-edge",slug:"/api/io.github.graphglue.model/-edge/index-",permalink:"/graph-glue/api/io.github.graphglue.model/-edge/index-",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"<span>top</span><wbr/><span>Level</span><wbr/><span>Query</span><wbr/><span><span>Name</span></span>",permalink:"/graph-glue/api/io.github.graphglue.model/-domain-node/top-level-query-name-"},next:{title:"<span><span>Edge</span></span>",permalink:"/graph-glue/api/io.github.graphglue.model/-edge/-edge-"}},c={},u=[],v={toc:u};function g(a){var n=a.components,s=(0,e.Z)(a,i);return(0,o.kt)("wrapper",(0,t.Z)({},v,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"edge"},(0,o.kt)("span",null,(0,o.kt)("span",null,"Edge"))),(0,o.kt)(p.Z,{dokkaHTML:'\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword">class </span><a href="index-">Edge</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator"> : </span><a href="../-node/index-">Node</a><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="index-">T</a><span class="token punctuation">, </span></span><span class="parameter ">order<span class="token operator">: </span><a href="../../io.github.graphglue.connection.order/-order/index-">Order</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><p class="paragraph">Edge returned in the GraphQL API Consists of a Node and a Cursor The cursor is only valid in a specific connection context. Cursors can only be used, if the ordering of nodes is not changed. Cursors should not be used for long term storage.</p></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="Constructors">Constructors</button><button class="section-tab" data-togglable="Functions">Functions</button><button class="section-tab" data-togglable="Parameters">Parameters</button></div>\n    <div class="tabs-section-body">\n      <h2 class="">Parameters</h2>\n      <div data-togglable="Parameters">\n        <div class="platform-hinted WithExtraAttributes" data-platform-hinted="data-platform-hinted" data-togglable="Parameters"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div data-togglable="Parameters"><div class="table" data-togglable="Parameters"><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>node</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">the <a href="../-node/index-">Node</a> at the start of the edge</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>order</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">necessary for Cursor generation</p></div></div></div></div></div></div></div></div></div>\n      </div>\n      <h2 class="tabbedcontent">Constructors</h2>\n      <div class="table" data-togglable="Constructors"><a data-name="1204572321%2FConstructors%2F769193423" anchor-label="Edge" id="1204572321%2FConstructors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue TabbedContent">\n            <div class=""><span class="inline-flex">\n                <div><a href="-edge-"><span><span>Edge</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1204572321%2FConstructors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator"> : </span><a href="../-node/index-">Node</a><span class="token operator">&gt; </span><a href="-edge-"><span class="token function">Edge</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">node<span class="token operator">: </span><a href="index-">T</a><span class="token punctuation">, </span></span><span class="parameter ">order<span class="token operator">: </span><a href="../../io.github.graphglue.connection.order/-order/index-">Order</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Functions</h2>\n      <div class="table" data-togglable="Functions"><a data-name="-246943846%2FFunctions%2F769193423" anchor-label="cursor" id="-246943846%2FFunctions%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="cursor-"><span><span>cursor</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-246943846%2FFunctions%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="cursor-"><span class="token function">cursor</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter "><span><span class="token annotation">@</span><span data-unresolved-link="org.springframework.beans.factory.annotation/Autowired///PointingToDeclaration/"><span class="token annotation">Autowired</span></span>&nbsp;</span>objectMapper<span class="token operator">: </span><span data-unresolved-link="com.fasterxml.jackson.databind/ObjectMapper///PointingToDeclaration/">ObjectMapper</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><p class="paragraph">Generates the cursor associated with the edge</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-745256508%2FFunctions%2F769193423" anchor-label="node" id="-745256508%2FFunctions%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="node-"><span><span>node</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-745256508%2FFunctions%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="node-"><span class="token function">node</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">dataFetchingEnvironment<span class="token operator">: </span><span data-unresolved-link="graphql.schema/DataFetchingEnvironment///PointingToDeclaration/">DataFetchingEnvironment</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><span data-unresolved-link="graphql.execution/DataFetcherResult///PointingToDeclaration/">DataFetcherResult</span><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator">&gt;</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><p class="paragraph">Returns the node of the edge and sets the local context necessary to use caching</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',mdxType:"DokkaComponent"}))}g.isMDXComponent=!0}}]);