"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8494],{26423:function(e,a,t){t.r(a),t.d(a,{assets:function(){return k},contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return b}});var n=t(87462),l=t(63366),r=t(67294),i=t(3905),o=t(72389),u=t(77556),s=t(86010),p="tabItem_LplD";function d(e){var a,t,l,i=e.lazy,o=e.block,d=e.defaultValue,c=e.values,m=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:h.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),f=(0,u.lx)(g,(function(e,a){return e.value===a.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(a=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(l=h[0])?void 0:l.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,u.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,r.useState)(k),T=w[0],I=w[1],x=[],G=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=N[m];null!=E&&E!==T&&g.some((function(e){return e.value===E}))&&I(E)}var D=function(e){var a=e.currentTarget,t=x.indexOf(a),n=g[t].value;n!==T&&(G(a),I(n),null!=m&&y(m,n))},C=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break;case"ArrowLeft":var l=x.indexOf(e.currentTarget)-1;t=x[l]||x[x.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},v)},g.map((function(e){var a=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:D,onClick:D},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===a})}),null!=t?t:a)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==T})}))))}function c(e){var a=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(a)},e))}function m(e){var a=e.children,t=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}var v=["components"],h={sidebar_position:1,slug:"/"},g="Getting started",f={unversionedId:"docs/docs",id:"docs/docs",title:"Getting started",description:"About",source:"@site/docs/docs/docs.mdx",sourceDirName:"docs",slug:"/",permalink:"/graph-glue/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"docSidebar",next:{title:"Modeling",permalink:"/graph-glue/docs/modeling"}},k={},b=[{value:"About",id:"about",level:2},{value:"Installation",id:"installation",level:2},{value:"Features",id:"features",level:2},{value:"Building locally",id:"building-locally",level:2}],N={toc:b};function y(e){var a=e.components,t=(0,l.Z)(e,v);return(0,i.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("h2",{id:"about"},"About"),(0,i.kt)("p",null,"GraphGlue is a library to develop annotation-based code-first GraphQL servers using GraphQL Kotlin, Spring Boot and Neo4j."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(c,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,i.kt)(m,{value:"gradle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kts"},'implementation("io.github.graphglue", "graphglue", "1.0.0")\n'))),(0,i.kt)(m,{value:"maven",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.github.graphglue</groupId>\n    <artifactId>graphglue</artifactId>\n    <version>1.0.0</version>\n</dependency>\n")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to use Spring Data Repositories, please make sure to annotate your ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," class with ",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableGraphGlueRepositories")))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Declare relations in Kotlin",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Many side of relations are automatically transformed to connections in GraphQL"),(0,i.kt)("li",{parentName:"ul"},"Lazy loading support in Kotlin for easy algorithm implementation"))),(0,i.kt)("li",{parentName:"ul"},"GraphQL queries directly translated into Neo4j Cypher",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"One GraphQL query maps to one Cypher query (in almost all cases)"))),(0,i.kt)("li",{parentName:"ul"},"Declarative & extensible authorization aproach",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Specify Node-based authorization using annotations"),(0,i.kt)("li",{parentName:"ul"},"Implement custom logic using Spring beans"),(0,i.kt)("li",{parentName:"ul"},'"Inherit" permissions from other nodes via relations'),(0,i.kt)("li",{parentName:"ul"},"Automatic permission checking when using relations"))),(0,i.kt)("li",{parentName:"ul"},"Automatic ",(0,i.kt)("inlineCode",{parentName:"li"},"node")," GraphQL query and connection-like queries if specified"),(0,i.kt)("li",{parentName:"ul"},"Ordering & Filtering",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Filter by properties, and even across relations"),(0,i.kt)("li",{parentName:"ul"},"Add custom, property-independent filter using annotations and Spring beans"),(0,i.kt)("li",{parentName:"ul"},"Order by properties"),(0,i.kt)("li",{parentName:"ul"},"Always performed directly in the database"))),(0,i.kt)("li",{parentName:"ul"},"Use your favorite ",(0,i.kt)("a",{parentName:"li",href:"https://opensource.expediagroup.com/graphql-kotlin"},"GraphQL Kotlin")," and ",(0,i.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-data-neo4j"},"Spring Data Neo4j")," features")),(0,i.kt)("h2",{id:"building-locally"},"Building locally"),(0,i.kt)("p",null,"Build the project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew clean build\n")),(0,i.kt)("p",null,"Deploy to the local maven repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew publishToMavenLocal\n")))}y.isMDXComponent=!0}}]);