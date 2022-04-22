"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6386],{56585:function(a,n,s){s.r(n),s.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return k}});var t=s(87462),e=s(63366),o=(s(67294),s(3905)),i=s(56923),p=["components"],l={},r="Authorization",d={unversionedId:"api/io.github.graphglue.model/-authorization/index-",id:"api/io.github.graphglue.model/-authorization/index-",title:"Authorization",description:"",source:"@site/docs/api/io.github.graphglue.model/-authorization/index-.mdx",sourceDirName:"api/io.github.graphglue.model/-authorization",slug:"/api/io.github.graphglue.model/-authorization/index-",permalink:"/graph-glue/api/io.github.graphglue.model/-authorization/index-",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"beanName",permalink:"/graph-glue/api/io.github.graphglue.model/-additional-filter/bean-name-"},next:{title:"Authorization",permalink:"/graph-glue/api/io.github.graphglue.model/-authorization/-authorization-"}},c={},k=[],v={toc:k};function m(a){var n=a.components,s=(0,e.Z)(a,p);return(0,o.kt)("wrapper",(0,t.Z)({},v,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authorization"},"Authorization"),(0,o.kt)(i.Z,{dokkaHTML:'\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><div class="block"><div class="block"><span class="token annotation">@</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.annotation/-target/index.html"><span class="token annotation">Target</span></a><span class="token punctuation">(</span><span>allowedTargets<span class="token operator"> = </span><span class="token punctuation">[</span><span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.annotation/-annotation-target/-c-l-a-s-s/index.html">AnnotationTarget.CLASS</a></span><wbr><span class="token punctuation">]</span></span><wbr><span class="token punctuation">)</span></div></div><span class="token keyword">annotation class </span><a href="index-">Authorization</a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>allow<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="../-rule/index-">Rule</a><span class="token operator">&gt;</span><span class="token operator"> = </span>[]<span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>allowFromRelated<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span><span class="token operator"> = </span>[]<span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>disallow<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="../-rule/index-">Rule</a><span class="token operator">&gt;</span><span class="token operator"> = </span>[]</span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><p class="paragraph">Defines an authorization permission for a <a href="../-node/index-">Node</a> To get the authorization definition for a specific <a href="../-node/index-">Node</a>, the annotations on the class and all subclasses are merged.</p></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="Constructors">Constructors</button><button class="section-tab" data-togglable="Properties">Properties</button><button class="section-tab" data-togglable="Parameters">Parameters</button></div>\n    <div class="tabs-section-body">\n      <h2 class="">Parameters</h2>\n      <div data-togglable="Parameters">\n        <div class="platform-hinted WithExtraAttributes" data-platform-hinted="data-platform-hinted" data-togglable="Parameters"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div data-togglable="Parameters"><div class="table" data-togglable="Parameters"><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>name</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">defines which authorization permission is defined (e.g. READ)</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>allow</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">rules which allow access, access is only granted if any of the rules evaluates to <code class="lang-kotlin">true</code>.     Works in combination with <code class="lang-kotlin">allowFromRelated</code></p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>allow</span><wbr><span>From</span><wbr><span><span>Related</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">allow access can also be inherited from related nodes, must be equal to a relation property     name. Works in combination with <code class="lang-kotlin">allow</code></p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>disallow</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">rules which disallow access, if any rule evaluates to <code class="lang-kotlin">true</code>, access is not granted (independent of     <code class="lang-kotlin">allow</code> and <code class="lang-kotlin">allowFromRelated</code>)</p></div></div></div></div></div></div></div></div></div>\n      </div>\n      <h2 class="tabbedcontent">Constructors</h2>\n      <div class="table" data-togglable="Constructors"><a data-name="-325882527%2FConstructors%2F769193423" anchor-label="Authorization" id="-325882527%2FConstructors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue TabbedContent">\n            <div class=""><span class="inline-flex">\n                <div><a href="-authorization-"><span><span>Authorization</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-325882527%2FConstructors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="-authorization-"><span class="token function">Authorization</span></a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;allow<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="../-rule/index-">Rule</a><span class="token operator">&gt;</span><span class="token operator"> = </span>[]<span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;allowFromRelated<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span><span class="token operator"> = </span>[]<span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;disallow<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="../-rule/index-">Rule</a><span class="token operator">&gt;</span><span class="token operator"> = </span>[]</span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Properties</h2>\n      <div class="table" data-togglable="Properties"><a data-name="1579189982%2FProperties%2F769193423" anchor-label="allow" id="1579189982%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="allow-">allow</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1579189982%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="1579189982%2FProperties%2F769193423" anchor-label="allow" id="1579189982%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="allow-">allow</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="../-rule/index-">Rule</a><span class="token operator">&gt;</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-611716069%2FProperties%2F769193423" anchor-label="allowFromRelated" id="-611716069%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="allow-from-related-">allowFromRelated</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-611716069%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="-611716069%2FProperties%2F769193423" anchor-label="allowFromRelated" id="-611716069%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="allow-from-related-">allowFromRelated</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token operator">&gt;</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-107110888%2FProperties%2F769193423" anchor-label="disallow" id="-107110888%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="disallow-">disallow</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-107110888%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="-107110888%2FProperties%2F769193423" anchor-label="disallow" id="-107110888%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="disallow-">disallow</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html">Array</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="../-rule/index-">Rule</a><span class="token operator">&gt;</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="129542152%2FProperties%2F769193423" anchor-label="name" id="129542152%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="name-">name</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="129542152%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="129542152%2FProperties%2F769193423" anchor-label="name" id="129542152%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="name-">name</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',mdxType:"DokkaComponent"}))}m.isMDXComponent=!0}}]);