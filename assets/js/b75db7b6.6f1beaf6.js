"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48959],{12726:(a,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var e=s(87462),t=(s(67294),s(3905)),o=s(56923);const p={},i="Node",l={unversionedId:"api/graphglue-core/io.github.graphglue.model/-node/index-",id:"api/graphglue-core/io.github.graphglue.model/-node/index-",title:"Node",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.model/-node/index-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.model/-node",slug:"/api/graphglue-core/io.github.graphglue.model/-node/index-",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.model/-node/index-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"nodeIdGenerator",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.model/-graphglue-model-configuration/node-id-generator-"},next:{title:"Node",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.model/-node/-node-"}},r={},d=[],c={toc:d};function h(a){let{components:n,...s}=a;return(0,t.kt)("wrapper",(0,e.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"node"},"Node"),(0,t.kt)(o.Z,{dokkaHTML:'\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation">@</span><a href="../-domain-node/index-"><span class="token annotation">DomainNode</span></a></div><div class="block"><span class="token annotation">@</span><a href="../-additional-filter/index-"><span class="token annotation">AdditionalFilter</span></a><span class="token punctuation">(</span><span>beanName<span class="token operator"> = </span><span class="breakable-word"><span class="token string">"idIdFilter"</span></span></span><wbr><span class="token punctuation">)</span></div></div><span class="token keyword">abstract </span><span class="token keyword">class </span><a href="index-">Node</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><p class="paragraph">Base class for all Nodes This is always added to the schema All domain entities which can be retrieved via the api and should be persisted in the database should inherit from this class Two nodes are equal iff they have the same id, or, if no id is present yet on both, if they are the same object.</p></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="Constructors">Constructors</button><button class="section-tab" data-togglable="Functions">Functions</button><button class="section-tab" data-togglable="Properties">Properties</button></div>\n    <div class="tabs-section-body">\n      <h2 class="tabbedcontent">Constructors</h2>\n      <div class="table" data-togglable="Constructors"><a data-name="-2143253630%2FConstructors%2F-1005884737" anchor-label="Node" id="-2143253630%2FConstructors%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n        <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n          <div class="main-subrow keyValue TabbedContent">\n            <div class=""><span class="inline-flex">\n                <div><a href="-node-"><span><span>Node</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-2143253630%2FConstructors%2F-1005884737"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="-node-"><span class="token function">Node</span></a><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Functions</h2>\n      <div class="table" data-togglable="Functions"><a data-name="-1601645539%2FFunctions%2F-1005884737" anchor-label="equals" id="-1601645539%2FFunctions%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n        <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="equals-"><span><span>equals</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1601645539%2FFunctions%2F-1005884737"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">operator override </span><span class="token keyword">fun </span><a href="equals-"><span class="token function">equals</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">other<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html">Any</a><span class="token operator">?</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html">Boolean</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-1204826071%2FFunctions%2F-1005884737" anchor-label="hashCode" id="-1204826071%2FFunctions%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n        <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="hash-code-"><span>hash</span><wbr><span><span>Code</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-1204826071%2FFunctions%2F-1005884737"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">fun </span><a href="hash-code-"><span class="token function">hashCode</span></a><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html">Int</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Properties</h2>\n      <div class="table" data-togglable="Properties"><a data-name="715160082%2FProperties%2F-1005884737" anchor-label="graphQLId" id="715160082%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n        <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="graph-q-l-id-"><span>graph</span><wbr><span><span>QLId</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="715160082%2FProperties%2F-1005884737"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><a data-name="715160082%2FProperties%2F-1005884737" anchor-label="graphQLId" id="715160082%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="graph-q-l-id-">graphQLId</a><span class="token operator">: </span><span data-unresolved-link="com.expediagroup.graphql.generator.scalars/ID///PointingToDeclaration/">ID</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><a data-name="715160082%2FProperties%2F-1005884737" anchor-label="graphQLId" id="715160082%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a><p class="paragraph">The id of the node as seen in the GraphQL API</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="973047539%2FProperties%2F-1005884737" anchor-label="rawId" id="973047539%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a>\n        <div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="raw-id-"><span>raw</span><wbr><span><span>Id</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="973047539%2FProperties%2F-1005884737"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><a data-name="973047539%2FProperties%2F-1005884737" anchor-label="rawId" id="973047539%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="raw-id-">rawId</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">?</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><a data-name="973047539%2FProperties%2F-1005884737" anchor-label="rawId" id="973047539%2FProperties%2F-1005884737" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"></a><p class="paragraph">Readonly wrapper for the id If <code class="lang-kotlin">null</code>, the node has not been persisted in the database yet</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',mdxType:"DokkaComponent"}))}h.isMDXComponent=!0}}]);