"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8016],{53048:function(a,n,s){s.r(n),s.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return v}});var t=s(87462),i=s(63366),e=(s(67294),s(3905)),p=s(56923),o=["components"],l={},r="<span>Scalar</span><wbr/><span>Filter</span><wbr/><span><span>Definition</span></span>",d={unversionedId:"api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-definition/index-",id:"api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-definition/index-",title:"<span>Scalar</span><wbr/><span>Filter</span><wbr/><span><span>Definition</span></span>",description:"",source:"@site/docs/api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-definition/index-.mdx",sourceDirName:"api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-definition",slug:"/api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-definition/index-",permalink:"/graph-glue/api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-definition/index-",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"<span>Int</span><wbr/><span>Filter</span><wbr/><span><span>Definition</span></span>",permalink:"/graph-glue/api/io.github.graphglue.connection.filter.definition.scalars/-int-filter-definition/-int-filter-definition-"},next:{title:"<span>Scalar</span><wbr/><span>Filter</span><wbr/><span><span>Definition</span></span>",permalink:"/graph-glue/api/io.github.graphglue.connection.filter.definition.scalars/-scalar-filter-definition/-scalar-filter-definition-"}},c={},v=[],b={toc:v};function f(a){var n=a.components,s=(0,i.Z)(a,o);return(0,e.kt)("wrapper",(0,t.Z)({},b,s,{components:n,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"scalarfilterdefinition"},(0,e.kt)("span",null,"Scalar"),(0,e.kt)("wbr",null),(0,e.kt)("span",null,"Filter"),(0,e.kt)("wbr",null),(0,e.kt)("span",null,(0,e.kt)("span",null,"Definition"))),(0,e.kt)(p.Z,{dokkaHTML:'\n  \n  <div class="cover ">\n    \n    <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword">abstract </span><span class="token keyword">class </span><a href="index-">ScalarFilterDefinition</a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;description<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;typeName<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;scalarType<span class="token operator">: </span><span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;neo4jName<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;entries<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="../-scalar-filter-entry-base/index-">ScalarFilterEntryBase</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span> : <a href="../../io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry/index-">SimpleObjectFilterDefinitionEntry</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="../../io.github.graphglue.connection.filter.definition/-filter-entry-definition/index-">FilterEntryDefinition</a><span class="token operator">&gt; </span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><p class="paragraph">Filter for a scalar property. Defines a list of fields how the property can be filtered (e.g. eq, in, startsWith, ...). If multiple fields are provided, these are joined by AND Already defines <code class="lang-kotlin">eq</code> and <code class="lang-kotlin">in</code> entries</p></div></div>\n  </div>\n  <div class="tabbedcontent">\n    <div class="tabs-section" tabs-section="tabs-section"><button class="section-tab" data-active="" data-togglable="Constructors">Constructors</button><button class="section-tab" data-togglable="Functions">Functions</button><button class="section-tab" data-togglable="Properties">Properties</button><button class="section-tab" data-togglable="Parameters">Parameters</button><button class="section-tab" data-togglable="Inheritors">Inheritors</button></div>\n    <div class="tabs-section-body">\n      <h2 class="">Parameters</h2>\n      <div data-togglable="Parameters">\n        <div class="platform-hinted WithExtraAttributes" data-platform-hinted="data-platform-hinted" data-togglable="Parameters"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div data-togglable="Parameters"><div class="table" data-togglable="Parameters"><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>name</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">the name of the field on the <span data-unresolved-link="graphql.schema/GraphQLInputObjectType///PointingToDeclaration/">GraphQLInputObjectType</span></p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>description</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">the description of the field</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>type</span><wbr><span><span>Name</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">name of the constructed <span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span> which serves as input for the filter</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>scalar</span><wbr><span><span>Type</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">the <span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span> for the field inputs (e.g. for eq, startsWith, ...)</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>neo4j</span><wbr><span><span>Name</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">the name of the property of the node in the database (might be different from <span data-unresolved-link="io.github.graphglue.connection.filter.definition.scalars/ScalarFilterDefinition/name/#/PointingToDeclaration/">name</span>)</p></div></div></div></div></div><div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span><span>entries</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">additional fields of this filter, define how the property can be filtered (e.g. startsWith, ...)</p></div></div></div></div></div></div></div></div></div>\n      </div>\n      <h2 class="tabbedcontent">Constructors</h2>\n      <div class="table" data-togglable="Constructors"><a data-name="-605516092%2FConstructors%2F769193423" anchor-label="ScalarFilterDefinition" id="-605516092%2FConstructors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue TabbedContent">\n            <div class=""><span class="inline-flex">\n                <div><a href="-scalar-filter-definition-"><span>Scalar</span><wbr><span>Filter</span><wbr><span><span>Definition</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-605516092%2FConstructors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="-scalar-filter-definition-"><span class="token function">ScalarFilterDefinition</span></a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;name<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;description<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;typeName<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;scalarType<span class="token operator">: </span><span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;neo4jName<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;entries<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="../-scalar-filter-entry-base/index-">ScalarFilterEntryBase</a><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Functions</h2>\n      <div class="table" data-togglable="Functions"><a data-name="1980506637%2FFunctions%2F769193423" anchor-label="parseEntry" id="1980506637%2FFunctions%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="parse-entry-"><span>parse</span><wbr><span><span>Entry</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1980506637%2FFunctions%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">fun </span><a href="parse-entry-"><span class="token function">parseEntry</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">value<span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html">Any</a><span class="token operator">?</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.model/-filter-entry/index-">FilterEntry</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><p class="paragraph">Parses the entry of the provided filter</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-2486741%2FFunctions%2F769193423" anchor-label="toGraphQLType" id="-2486741%2FFunctions%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../../io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry/to-graph-q-l-type-"><span>to</span><wbr><span>Graph</span><wbr><span><span>QLType</span></span></a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-2486741%2FFunctions%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><div class="symbol monospace"><span class="token keyword">open </span><span class="token keyword">override </span><span class="token keyword">fun </span><a href="../../io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry/to-graph-q-l-type-"><span class="token function">toGraphQLType</span></a><span class="token punctuation">(</span><span class="parameters "><span class="parameter ">inputTypeCache<span class="token operator">: </span><a href="../../io.github.graphglue.util/-cache-map/index-">CacheMap</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><span class="token keyword"></span><span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">)</span><span class="token operator">: </span><span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><p class="paragraph">Transforms this into a <span data-unresolved-link="graphql.schema/GraphQLInputType///PointingToDeclaration/">GraphQLInputType</span></p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Properties</h2>\n      <div class="table" data-togglable="Properties"><a data-name="451512523%2FProperties%2F769193423" anchor-label="description" id="451512523%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../../io.github.graphglue.connection.filter.definition/-filter-entry-definition/description-">description</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="451512523%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="451512523%2FProperties%2F769193423" anchor-label="description" id="451512523%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="../../io.github.graphglue.connection.filter.definition/-filter-entry-definition/description-">description</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="-602548285%2FProperties%2F769193423" anchor-label="fields" id="-602548285%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../../io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry/fields-">fields</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="-602548285%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="-602548285%2FProperties%2F769193423" anchor-label="fields" id="-602548285%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="../../io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry/fields-">fields</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html">Map</a><span class="token operator">&lt;</span><span class="token keyword"></span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="token punctuation">, </span><span class="token keyword"></span><a href="../../io.github.graphglue.connection.filter.definition/-filter-entry-definition/index-">FilterEntryDefinition</a><span class="token operator">&gt;</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><div class="brief "><a data-name="-602548285%2FProperties%2F769193423" anchor-label="fields" id="-602548285%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><p class="paragraph">Fields associated by name</p></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="1492262216%2FProperties%2F769193423" anchor-label="name" id="1492262216%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../../io.github.graphglue.connection.filter.definition/-filter-entry-definition/name-">name</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1492262216%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="1492262216%2FProperties%2F769193423" anchor-label="name" id="1492262216%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="../../io.github.graphglue.connection.filter.definition/-filter-entry-definition/name-">name</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n<a data-name="841147223%2FProperties%2F769193423" anchor-label="typeName" id="841147223%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../../io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry/type-name-">typeName</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="841147223%2FProperties%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div>\n              <div class="title">\n                <div class="platform-hinted " data-platform-hinted="data-platform-hinted" data-togglable="Properties"><div class="content sourceset-depenent-content" data-active="" data-togglable=":dokkaHtml/main"><a data-name="841147223%2FProperties%2F769193423" anchor-label="typeName" id="841147223%2FProperties%2F769193423" data-filterable-set=":dokkaHtml/main"></a><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">val </span><a href="../../io.github.graphglue.connection.filter.definition/-simple-object-filter-definition-entry/type-name-">typeName</a><span class="token operator">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div></div></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class="">Inheritors</h2>\n      <div class="table" data-togglable="Inheritors"><a data-name="243613677%2FInheritors%2F769193423" anchor-label="BooleanFilterDefinition" id="243613677%2FInheritors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../-boolean-filter-definition/index-">BooleanFilterDefinition</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="243613677%2FInheritors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div></div>\n          </div>\n        </div>\n<a data-name="1617031677%2FInheritors%2F769193423" anchor-label="ComparableFilterDefinition" id="1617031677%2FInheritors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../-comparable-filter-definition/index-">ComparableFilterDefinition</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="1617031677%2FInheritors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div></div>\n          </div>\n        </div>\n<a data-name="2135877628%2FInheritors%2F769193423" anchor-label="IDFilterDefinition" id="2135877628%2FInheritors%2F769193423" data-filterable-set=":dokkaHtml/main"></a>\n        <div class="table-row" data-filterable-current=":dokkaHtml/main" data-filterable-set=":dokkaHtml/main">\n          <div class="main-subrow keyValue ">\n            <div class=""><span class="inline-flex">\n                <div><a href="../-i-d-filter-definition/index-">IDFilterDefinition</a></div>\n<span class="anchor-wrapper"><span class="anchor-icon" pointing-to="2135877628%2FInheritors%2F769193423"></span>\n                  <div class="copy-popup-wrapper "><span class="copy-popup-icon"></span><span>Link copied to clipboard</span></div>\n                </span></span></div>\n            <div></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',mdxType:"DokkaComponent"}))}f.isMDXComponent=!0}}]);