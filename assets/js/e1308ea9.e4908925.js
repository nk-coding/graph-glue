"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7755],{89878:function(a,n,s){s.r(n),s.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return v}});var t=s(87462),e=s(63366),i=(s(67294),s(3905)),p=s(56923),o=["components"],r={},l="<span>Scalar</span><wbr/><span>Filter</span><wbr/><span>Entry</span><wbr/><span><span>Base</span></span>",c={unversionedId:"api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry-base/index-",id:"api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry-base/index-",title:"<span>Scalar</span><wbr/><span>Filter</span><wbr/><span>Entry</span><wbr/><span><span>Base</span></span>",description:"",source:"@site/docs/api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry-base/index-.mdx",sourceDirName:"api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry-base",slug:"/api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry-base/index-",permalink:"/graph-glue/api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry-base/index-",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"<span>generate</span><wbr/><span>Filter</span><wbr/><span><span>Entry</span></span>",permalink:"/graph-glue/api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry/generate-filter-entry-"},next:{title:"<span>Scalar</span><wbr/><span>Filter</span><wbr/><span>Entry</span><wbr/><span><span>Base</span></span>",permalink:"/graph-glue/api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-entry-base/-scalar-filter-entry-base-"}},d={},v=[],k={toc:v};function b(a){var n=a.components,s=(0,e.Z)(a,o);return(0,i.kt)("wrapper",(0,t.Z)({},k,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scalarfilterentrybase"},(0,i.kt)("span",null,"Scalar"),(0,i.kt)("wbr",null),(0,i.kt)("span",null,"Filter"),(0,i.kt)("wbr",null),(0,i.kt)("span",null,"Entry"),(0,i.kt)("wbr",null),(0,i.kt)("span",null,(0,i.kt)("span",null,"Base"))),(0,i.kt)(p.Z,{dokkaHTML:'\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword">class </span><a href="index-">ScalarFilterEntryBase</a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>description<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>conditionGenerator<span class="token operator">: </span><span class="token punctuation">(</span><span class="token keyword"></span>property<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Property///PointingToDeclaration/">Property</span><span class="token punctuation">, </span><span class="token keyword"></span>value<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Expression///PointingToDeclaration/">Expression</span><span class="token punctuation">)</span><span class="token operator"> -&gt; </span><span class="token keyword"></span><span data-unresolved-link="org.neo4j.cypherdsl.core/Condition///PointingToDeclaration/">Condition</span></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><p class="paragraph">Base class for scalar filter entries Can be used to define filters for a scalar property, e.g. an <code class="lang-kotlin">in</code> or <code class="lang-kotlin">eq</code> filter</p></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="Constructors">Constructors</button><button class="section-tab" data-togglable="Functions">Functions</button><button class="section-tab" data-togglable="Properties">Properties</button><button class="section-tab" data-togglable="Parameters">Parameters</button><button class="section-tab" data-togglable="Inheritors">Inheritors</button></div>\n    <div class="tabs-section-body">\n      <h2 class="">Parameters</h2>\n      <div data-togglable="Parameters">\n        <div class="platform-hinted WithExtraAttributes" data-platform-hinted="data-platform-hinted" data-togglable="Parameters"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div data-togglable="Parameters"><div class="table" data-togglable="Parameters"><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>name</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">the name of the field on the <span data-unresolved-link="graphql.schema/GraphQLInputObjectType///PointingToDeclaration/">GraphQLInputObjectType</span></p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>description</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">the description of the field</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>condition</span><wbr><span><span>Generator</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">used to generate the condition which applies the filter in the database</p></div></div></div></div></div></div></div></div></div>\n      </div>\n      <h2 class="tabbedcontent">Constructors</h2>\n      <div class="table" data-togglable="Constructors"><a data-name="1653885919%2FConstructors%2F769193423" anchor-label="ScalarFilterEntryBase" id="1653885919%2FConstructors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue TabbedContent">\n            <div class=""><span class="inline-flex">\n                <div><a href="-scalar-filter-entry-base-"><span>Scalar</span><wbr><span>Filter</span><wbr><span>Entry</span><wbr><span><span>Base</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1653885919%2FConstructors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="-scalar-filter-entry-base-"><span class="token function">ScalarFilterEntryBase</span></a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;description<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;conditionGenerator<span class="token operator">: </span><span class="token punctuation">(</span><span class="token keyword"></span>property<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Property///PointingToDeclaration/">Property</span><span class="token punctuation">, </span><span class="token keyword"></span>value<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Expression///PointingToDeclaration/">Expression</span><span class="token punctuation">)</span><span class="token operator"> -&gt; </span><span class="token keyword"></span><span data-unresolved-link="org.neo4j.cypherdsl.core/Condition///PointingToDeclaration/">Condition</span></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Functions</h2>\n      <div class="table" data-togglable="Functions"><a data-name="-2030798579%2FFunctions%2F769193423" anchor-label="generateFilterEntry" id="-2030798579%2FFunctions%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="generate-filter-entry-"><span>generate</span><wbr><span>Filter</span><wbr><span><span>Entry</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-2030798579%2FFunctions%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword"></span><span class="token keyword">fun </span><a href="generate-filter-entry-"><span class="token function">generateFilterEntry</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">scalarType<span class="token operator">: </span><span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span><span class="token punctuation">, </span></span><span class="parameter ">neo4jName<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-filter-entry-definition/index-">FilterEntryDefinition</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><p class="paragraph">Generates the <a href="../../io.github.graphglue.connection.filter.definition/-filter-entry-definition/index-">FilterEntryDefinition</a> used in the filter</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Properties</h2>\n      <div class="table" data-togglable="Properties"><a data-name="995855174%2FProperties%2F769193423" anchor-label="conditionGenerator" id="995855174%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="condition-generator-">conditionGenerator</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="995855174%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="995855174%2FProperties%2F769193423" anchor-label="conditionGenerator" id="995855174%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="condition-generator-">conditionGenerator</a><span class="token operator">: </span><span class="token punctuation">(</span><span class="token keyword"></span>property<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Property///PointingToDeclaration/">Property</span><span class="token punctuation">, </span><span class="token keyword"></span>value<span class="token operator">: </span><span data-unresolved-link="org.neo4j.cypherdsl.core/Expression///PointingToDeclaration/">Expression</span><span class="token punctuation">)</span><span class="token operator"> -&gt; </span><span class="token keyword"></span><span data-unresolved-link="org.neo4j.cypherdsl.core/Condition///PointingToDeclaration/">Condition</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="1447695840%2FProperties%2F769193423" anchor-label="description" id="1447695840%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="description-">description</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1447695840%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="1447695840%2FProperties%2F769193423" anchor-label="description" id="1447695840%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="description-">description</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="1179315667%2FProperties%2F769193423" anchor-label="name" id="1179315667%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="name-">name</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1179315667%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="1179315667%2FProperties%2F769193423" anchor-label="name" id="1179315667%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="name-">name</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Inheritors</h2>\n      <div class="table" data-togglable="Inheritors"><a data-name="-594563470%2FInheritors%2F769193423" anchor-label="ScalarFilterEntry" id="-594563470%2FInheritors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../-scalar-filter-entry/index-">ScalarFilterEntry</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-594563470%2FInheritors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div></div>\n          </div>\n        </div>\n<a data-name="1245902512%2FInheritors%2F769193423" anchor-label="ScalarListFilterEntry" id="1245902512%2FInheritors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../-scalar-list-filter-entry/index-">ScalarListFilterEntry</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1245902512%2FInheritors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',mdxType:"DokkaComponent"}))}b.isMDXComponent=!0}}]);