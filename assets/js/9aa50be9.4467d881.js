"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[464],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2175:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return N},frontMatter:function(){return v},metadata:function(){return h},toc:function(){return y}});var a=n(7462),r=n(3366),l=n(7294),i=n(3905),o=n(2389),u=n(5979),s=n(6010),p="tabItem_LplD";function c(e){var t,n,r,i=e.lazy,o=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,u.lx)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.UB)(),k=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,l.useState)(b),O=w[0],T=w[1],x=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=k[m];null!=j&&j!==O&&g.some((function(e){return e.value===j}))&&T(j)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==O&&(E(t),T(a),null!=m&&N(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},f)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:D,onClick:D},r,{className:(0,s.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,o.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}function m(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}var f=["components"],v={sidebar_position:1,slug:"/"},g="Getting started",h={unversionedId:"docs",id:"docs",title:"Getting started",description:"About",source:"@site/docs/docs.mdx",sourceDirName:".",slug:"/",permalink:"/graph-glue/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Modeling",permalink:"/graph-glue/modeling"}},b={},y=[{value:"About",id:"about",level:2},{value:"Installation",id:"installation",level:2},{value:"Features",id:"features",level:2},{value:"Building locally",id:"building-locally",level:2}],k={toc:y};function N(e){var t=e.components,n=(0,r.Z)(e,f);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("h2",{id:"about"},"About"),(0,i.kt)("p",null,"GraphGlue is a library to develop annotation-based code-first GraphQL servers using GraphQL Kotlin, Spring Boot and Neo4j."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(d,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,i.kt)(m,{value:"gradle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kts"},'implementation("io.github.graphglue", "graphglue", "1.0.0")\n'))),(0,i.kt)(m,{value:"maven",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.github.graphglue</groupId>\n    <artifactId>graphglue</artifactId>\n    <version>1.0.0</version>\n</dependency>\n")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to use Spring Data Repositories, please make sure to annotate your ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," class with ",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableGraphGlueRepositories")))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Declare relations in Kotlin",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Many side of relations are automatically transformed to connections in GraphQL"),(0,i.kt)("li",{parentName:"ul"},"Lazy loading support in Kotlin for easy algorithm implementation"))),(0,i.kt)("li",{parentName:"ul"},"GraphQL queries directly translated into Neo4j Cypher",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"One GraphQL quey maps to one Cypher query (in almost all cases)"))),(0,i.kt)("li",{parentName:"ul"},"Declarative & extensible authorization aproach",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Specify Node-based authorization using annotations"),(0,i.kt)("li",{parentName:"ul"},"Implement custom logic using Spring beans"),(0,i.kt)("li",{parentName:"ul"},'"Inherit" permissions from other nodes via relations'),(0,i.kt)("li",{parentName:"ul"},"Automatic permission checking when using relations"))),(0,i.kt)("li",{parentName:"ul"},"Automatic ",(0,i.kt)("inlineCode",{parentName:"li"},"node")," GraphQL query and connection-like queries if specified"),(0,i.kt)("li",{parentName:"ul"},"Ordering & Filtering",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Filter by properties, and even across relations"),(0,i.kt)("li",{parentName:"ul"},"Add custom, property-independent filter using annotations and Spring beans"),(0,i.kt)("li",{parentName:"ul"},"Order by properties"),(0,i.kt)("li",{parentName:"ul"},"Always performed directly in the database"))),(0,i.kt)("li",{parentName:"ul"},"Use your favorite ",(0,i.kt)("a",{parentName:"li",href:"https://opensource.expediagroup.com/graphql-kotlin"},"GraphQL Kotlin")," and ",(0,i.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-data-neo4j"},"Spring Data Neo4j")," features")),(0,i.kt)("h2",{id:"building-locally"},"Building locally"),(0,i.kt)("p",null,"Build the project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew clean build\n")),(0,i.kt)("p",null,"Deploy to the local maven repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew publishToMavenLocal\n")))}N.isMDXComponent=!0}}]);