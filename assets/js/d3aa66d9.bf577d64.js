"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78494],{53736:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>b,default:()=>T,frontMatter:()=>v,metadata:()=>f,toc:()=>y});var l=t(87462),n=t(67294),r=t(3905),i=t(86010),o=t(72389),s=t(67392),u=t(7094),p=t(12466);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){var a,t;const{lazy:r,block:o,defaultValue:m,values:g,groupId:h,className:k}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:v.map((e=>{let{props:{value:a,label:t,attributes:l}}=e;return{value:a,label:t,attributes:l}})),f=(0,s.l)(b,((e,a)=>e.value===a.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===m?m:null!=(a=null!=m?m:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?a:v[0].props.value;if(null!==N&&!b.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:I}=(0,u.U)(),[T,w]=(0,n.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:G}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==T&&b.some((a=>a.value===e))&&w(e)}const C=e=>{const a=e.currentTarget,t=x.indexOf(a),l=b[t].value;l!==T&&(G(a),w(l),null!=h&&I(h,String(l)))},E=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var l;const a=x.indexOf(e.currentTarget)+1;t=null!=(l=x[a])?l:x[0];break}case"ArrowLeft":{var n;const a=x.indexOf(e.currentTarget)-1;t=null!=(n=x[a])?n:x[x.length-1];break}}null==(a=t)||a.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},k)},b.map((e=>{let{value:a,label:t,attributes:r}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>x.push(e),onKeyDown:E,onFocus:C,onClick:C},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===a})}),null!=t?t:a)}))),r?(0,n.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function g(e){const a=(0,o.Z)();return n.createElement(m,(0,l.Z)({key:String(a)},e))}const h="tabItem_Ymn6";function k(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(h,l),hidden:t},a)}const v={sidebar_position:1,slug:"/"},b="Getting started",f={unversionedId:"docs/docs",id:"docs/docs",title:"Getting started",description:"About",source:"@site/docs/docs/docs.mdx",sourceDirName:"docs",slug:"/",permalink:"/graph-glue/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"docSidebar",next:{title:"Modeling",permalink:"/graph-glue/docs/modeling"}},N={},y=[{value:"About",id:"about",level:2},{value:"Installation",id:"installation",level:2},{value:"Full Installation",id:"full-installation",level:3},{value:"Core Installation",id:"core-installation",level:3},{value:"Features",id:"features",level:2},{value:"Building locally",id:"building-locally",level:2}],I={toc:y};function T(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},I,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("h2",{id:"about"},"About"),(0,r.kt)("p",null,"GraphGlue is a library to develop annotation-based code-first GraphQL servers using GraphQL Kotlin, Spring Boot and Neo4j."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"full-installation"},"Full Installation"),(0,r.kt)(g,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,r.kt)(k,{value:"gradle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kts"},'implementation("io.github.graphglue", "graphglue", "4.0.1")\n'))),(0,r.kt)(k,{value:"maven",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.github.graphglue</groupId>\n    <artifactId>graphglue</artifactId>\n    <version>4.0.1</version>\n</dependency>\n")))),(0,r.kt)("h3",{id:"core-installation"},"Core Installation"),(0,r.kt)("p",null,"This is meant to be used when the project consits of multiple modules, and the module containing the domain model should not provide the beans for the GraphQL server.\nthis has no dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"com.expediagroup:graphql-kotlin-spring-server"),", however it still depends on ",(0,r.kt)("inlineCode",{parentName:"p"},"com.expediagroup:graphql-kotlin-server"),"."),(0,r.kt)(g,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,r.kt)(k,{value:"gradle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kts"},'implementation("io.github.graphglue", "graphglue-core", "4.0.1")\n'))),(0,r.kt)(k,{value:"maven",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.github.graphglue</groupId>\n    <artifactId>graphglue-core</artifactId>\n    <version>4.0.1</version>\n</dependency>\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use Spring Data Repositories, please make sure to annotate your ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," class with ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableGraphGlueRepositories"))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Declare relations in Kotlin",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Many side of relations are automatically transformed to connections in GraphQL"),(0,r.kt)("li",{parentName:"ul"},"Lazy loading support in Kotlin for easy algorithm implementation"))),(0,r.kt)("li",{parentName:"ul"},"GraphQL queries directly translated into Neo4j Cypher",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"One GraphQL query maps to one Cypher query (in almost all cases)"))),(0,r.kt)("li",{parentName:"ul"},"Declarative & extensible authorization aproach",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specify Node-based authorization using annotations"),(0,r.kt)("li",{parentName:"ul"},"Implement custom logic using Spring beans"),(0,r.kt)("li",{parentName:"ul"},'"Inherit" permissions from other nodes via relations'),(0,r.kt)("li",{parentName:"ul"},"Automatic permission checking when using relations"))),(0,r.kt)("li",{parentName:"ul"},"Automatic ",(0,r.kt)("inlineCode",{parentName:"li"},"node")," GraphQL query and connection-like queries if specified"),(0,r.kt)("li",{parentName:"ul"},"Ordering & Filtering",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Filter by properties, and even across relations"),(0,r.kt)("li",{parentName:"ul"},"Add custom, property-independent filter using annotations and Spring beans"),(0,r.kt)("li",{parentName:"ul"},"Order by properties"),(0,r.kt)("li",{parentName:"ul"},"Always performed directly in the database"))),(0,r.kt)("li",{parentName:"ul"},"Use your favorite ",(0,r.kt)("a",{parentName:"li",href:"https://opensource.expediagroup.com/graphql-kotlin"},"GraphQL Kotlin")," and ",(0,r.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-data-neo4j"},"Spring Data Neo4j")," features")),(0,r.kt)("h2",{id:"building-locally"},"Building locally"),(0,r.kt)("p",null,"Build the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew clean build\n")),(0,r.kt)("p",null,"Deploy to the local maven repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew publishToMavenLocal\n")))}T.isMDXComponent=!0}}]);