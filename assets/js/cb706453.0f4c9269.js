"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13244],{67896:(a,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=s(87462),n=(s(67294),s(3905)),r=s(56923);const i={},p="DefaultSchemaTransformer",l={unversionedId:"api/graphglue-core/io.github.graphglue.graphql.schema/-default-schema-transformer/-default-schema-transformer-",id:"api/graphglue-core/io.github.graphglue.graphql.schema/-default-schema-transformer/-default-schema-transformer-",title:"DefaultSchemaTransformer",description:"",source:"@site/docs/api/graphglue-core/io.github.graphglue.graphql.schema/-default-schema-transformer/-default-schema-transformer-.mdx",sourceDirName:"api/graphglue-core/io.github.graphglue.graphql.schema/-default-schema-transformer",slug:"/api/graphglue-core/io.github.graphglue.graphql.schema/-default-schema-transformer/-default-schema-transformer-",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.graphql.schema/-default-schema-transformer/-default-schema-transformer-",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"DefaultSchemaTransformer",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.graphql.schema/-default-schema-transformer/index-"},next:{title:"dataFetcherFactoryProvider",permalink:"/graph-glue/api/graphglue-core/io.github.graphglue.graphql.schema/-default-schema-transformer/data-fetcher-factory-provider-"}},o={},d=[],c={toc:d};function u(a){let{components:e,...s}=a;return(0,n.kt)("wrapper",(0,t.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"defaultschematransformer"},"DefaultSchemaTransformer"),(0,n.kt)(r.Z,{dokkaHTML:'\n  \n  <div class="cover ">\n    \n  </div>\n  <div class="platform-hinted " data-platform-hinted="data-platform-hinted"><div class="content sourceset-depenent-content" data-active="" data-togglable=":graphglue-core:dokkaHtmlPartial/main"><div class="symbol monospace"><span class="token keyword"></span><span class="token keyword">fun </span><a href="-default-schema-transformer-"><span class="token function">DefaultSchemaTransformer</span></a><span class="token punctuation">(</span><span class="parameters wrapped"><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;oldSchema<span class="token operator">: </span><span data-unresolved-link="graphql.schema/GraphQLSchema///PointingToDeclaration/">GraphQLSchema</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;mappingContext<span class="token operator">: </span><span data-unresolved-link="org.springframework.data.neo4j.core.mapping/Neo4jMappingContext///PointingToDeclaration/">Neo4jMappingContext</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;nodeDefinitionCollection<span class="token operator">: </span><a href="../../io.github.graphglue.definition/-node-definition-collection/index-">NodeDefinitionCollection</a><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;dataFetcherFactoryProvider<span class="token operator">: </span><span data-unresolved-link="com.expediagroup.graphql.generator.execution/KotlinDataFetcherFactoryProvider///PointingToDeclaration/">KotlinDataFetcherFactoryProvider</span><span class="token punctuation">, </span></span><span class="parameter indented">&nbsp;&nbsp;&nbsp;&nbsp;subFilterGenerator<span class="token operator">: </span><a href="../../io.github.graphglue.connection.filter.definition/-sub-filter-generator/index-">SubFilterGenerator</a></span></span><span class="token punctuation">)</span><span class="top-right-position"><span class="copy-icon"></span><div class="copy-popup-wrapper popup-to-left"><span class="copy-popup-icon"></span><span>Content copied to clipboard</span></div></span></div><h2 class="">Parameters</h2><div data-togglable="Parameters"><div class="table" data-togglable="Parameters"><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>old</span><wbr><span><span>Schema</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">the schema to transform</p></div></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>mapping</span><wbr><span><span>Context</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">mapping context used to get type information from Neo4j</p></div></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>node</span><wbr><span>Definition</span><wbr><span><span>Collection</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">collection of all <a href="../../io.github.graphglue.definition/-node-definition/index-">NodeDefinition</a>s</p></div></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>data</span><wbr><span>Fetcher</span><wbr><span>Factory</span><wbr><span><span>Provider</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">provides function and property data fetchers</p></div></div></div></div></div><div class="table-row" data-filterable-current=":graphglue-core:dokkaHtmlPartial/main" data-filterable-set=":graphglue-core:dokkaHtmlPartial/main"><div class="main-subrow keyValue WithExtraAttributes"><div class=""><span class="inline-flex"><div><span>sub</span><wbr><span>Filter</span><wbr><span><span>Generator</span></span></div></span></div><div><div class="title"><div data-togglable="Parameters"><p class="paragraph">used to generate the filter entries</p></div></div></div></div></div></div></div></div></div>\n',mdxType:"DokkaComponent"}))}u.isMDXComponent=!0}}]);