"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[672],{48033:function(a,n,s){s.r(n),s.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return v}});var t=s(87462),e=s(63366),i=(s(67294),s(3905)),p=s(56923),o=["components"],l={},r="SimpleObjectFilterDefinitionEntry",d={unversionedId:"api/io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry/index-",id:"api/io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry/index-",title:"SimpleObjectFilterDefinitionEntry",description:"",source:"@site/docs/api/io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry/index-.mdx",sourceDirName:"api/io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry",slug:"/api/io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry/index-",permalink:"/graph-glue/api/io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry/index-",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"toGraphQLType",permalink:"/graph-glue/api/io.github.graphglue.connection.filter.definition/-simple-filter-entry-definition/to-graph-q-l-type-"},next:{title:"SimpleObjectFilterDefinitionEntry",permalink:"/graph-glue/api/io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry/-simple-object-filter-definition-entry-"}},c={},v=[],m={toc:v};function k(a){var n=a.components,s=(0,e.Z)(a,o);return(0,i.kt)("wrapper",(0,t.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"simpleobjectfilterdefinitionentry"},"SimpleObjectFilterDefinitionEntry"),(0,i.kt)(p.Z,{dokkaHTML:'\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword">class </span><a href="index-">SimpleObjectFilterDefinitionEntry</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator"> : </span><a href="../-filter-entry-definition/index-">FilterEntryDefinition</a><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>description<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token keyword">val </span>typeName<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;fields<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span> : <a href="../-filter-entry-definition/index-">FilterEntryDefinition</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><p class="paragraph">Base lass for <a href="../-filter-entry-definition/index-">FilterEntryDefinition</a> which build a filter by joining a list of sub filters (<a href="fields-">fields</a>) Creates a filter where any amount of fields (0 to all) can be present</p></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="Constructors">Constructors</button><button class="section-tab" data-togglable="Functions">Functions</button><button class="section-tab" data-togglable="Properties">Properties</button><button class="section-tab" data-togglable="Parameters">Parameters</button><button class="section-tab" data-togglable="Inheritors">Inheritors</button></div>\n    <div class="tabs-section-body">\n      <h2 class="">Parameters</h2>\n      <div data-togglable="Parameters">\n        <div class="platform-hinted WithExtraAttributes" data-platform-hinted="data-platform-hinted" data-togglable="Parameters"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div data-togglable="Parameters"><div class="table" data-togglable="Parameters"><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>name</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">the name of the field on the <span data-unresolved-link="graphql.schema/GraphQLInputObjectType///PointingToDeclaration/">GraphQLInputObjectType</span></p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>description</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">the description of the field</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>type</span><wbr><span><span>Name</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">name of the constructed <span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span> which serves as input for the filter</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>fields</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">list of fields for the filter, when evaluating these fields are joined by AND</p></div></div></div></div></div></div></div></div></div>\n      </div>\n      <h2 class="tabbedcontent">Constructors</h2>\n      <div class="table" data-togglable="Constructors"><a data-name="717710301%2FConstructors%2F769193423" anchor-label="SimpleObjectFilterDefinitionEntry" id="717710301%2FConstructors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue TabbedContent">\n            <div class=""><span class="inline-flex">\n                <div><a href="-simple-object-filter-definition-entry-"><span>Simple</span><wbr><span>Object</span><wbr><span>Filter</span><wbr><span>Definition</span><wbr><span><span>Entry</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="717710301%2FConstructors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator"> : </span><a href="../-filter-entry-definition/index-">FilterEntryDefinition</a><span class="token operator">&gt; </span><a href="-simple-object-filter-definition-entry-"><span class="token function">SimpleObjectFilterDefinitionEntry</span></a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;description<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;typeName<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;fields<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="index-">T</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Functions</h2>\n      <div class="table" data-togglable="Functions"><a data-name="715674414%2FFunctions%2F769193423" anchor-label="parseEntry" id="715674414%2FFunctions%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../-filter-entry-definition/parse-entry-"><span>parse</span><wbr><span><span>Entry</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="715674414%2FFunctions%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword"></span><span class="token keyword">fun </span><a href="../-filter-entry-definition/parse-entry-"><span class="token function">parseEntry</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">value<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html">Any</a><span class="token operator">?</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.model/-filter-entry/index-">FilterEntry</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><p class="paragraph">Parses the entry of the provided filter</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-2486741%2FFunctions%2F769193423" anchor-label="toGraphQLType" id="-2486741%2FFunctions%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="to-graph-q-l-type-"><span>to</span><wbr><span>Graph</span><wbr><span><span>QLType</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-2486741%2FFunctions%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">fun </span><a href="to-graph-q-l-type-"><span class="token function">toGraphQLType</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">inputTypeCache<span class="token operator">: </span><a href="../../io.github.graphglue.util/-cache-map/index-">CacheMap</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><span class="token keyword"></span><span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><p class="paragraph">Transforms this into a <span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span></p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Properties</h2>\n      <div class="table" data-togglable="Properties"><a data-name="451512523%2FProperties%2F769193423" anchor-label="description" id="451512523%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../-filter-entry-definition/description-">description</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="451512523%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="451512523%2FProperties%2F769193423" anchor-label="description" id="451512523%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="../-filter-entry-definition/description-">description</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-602548285%2FProperties%2F769193423" anchor-label="fields" id="-602548285%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="fields-">fields</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-602548285%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="-602548285%2FProperties%2F769193423" anchor-label="fields" id="-602548285%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="fields-">fields</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html">Map</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><span class="token keyword"></span><a href="index-">T</a><span class="token operator">&gt;</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><a data-name="-602548285%2FProperties%2F769193423" anchor-label="fields" id="-602548285%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><p class="paragraph">Fields associated by name</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="1492262216%2FProperties%2F769193423" anchor-label="name" id="1492262216%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../-filter-entry-definition/name-">name</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1492262216%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="1492262216%2FProperties%2F769193423" anchor-label="name" id="1492262216%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="../-filter-entry-definition/name-">name</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="841147223%2FProperties%2F769193423" anchor-label="typeName" id="841147223%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="type-name-">typeName</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="841147223%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="841147223%2FProperties%2F769193423" anchor-label="typeName" id="841147223%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="type-name-">typeName</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Inheritors</h2>\n      <div class="table" data-togglable="Inheritors"><a data-name="-2067579378%2FInheritors%2F769193423" anchor-label="NodeSetFilterDefinition" id="-2067579378%2FInheritors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../-node-set-filter-definition/index-">NodeSetFilterDefinition</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-2067579378%2FInheritors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div></div>\n          </div>\n        </div>\n<a data-name="1268459435%2FInheritors%2F769193423" anchor-label="ScalarFilterDefinition" id="1268459435%2FInheritors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../../io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-definition/index-">ScalarFilterDefinition</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1268459435%2FInheritors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',mdxType:"DokkaComponent"}))}k.isMDXComponent=!0}}]);