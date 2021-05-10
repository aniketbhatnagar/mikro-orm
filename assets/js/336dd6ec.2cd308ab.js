(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28446],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,o(o({ref:t},l),{},{components:n})):r.createElement(k,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90929:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var r=n(74034),i=n(79973),a=(n(67294),n(3905)),o={id:"core.assignoptions",title:"Interface: AssignOptions",sidebar_label:"AssignOptions",custom_edit_url:null},s={unversionedId:"api/interfaces/core.assignoptions",id:"api/interfaces/core.assignoptions",isDocsHomePage:!1,title:"Interface: AssignOptions",description:"core.AssignOptions",source:"@site/docs/api/interfaces/core.assignoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.assignoptions",permalink:"/docs/next/api/interfaces/core.assignoptions",editUrl:null,version:"current",sidebar_label:"AssignOptions",frontMatter:{id:"core.assignoptions",title:"Interface: AssignOptions",sidebar_label:"AssignOptions",custom_edit_url:null},sidebar:"API",previous:{title:"Class: TsMorphMetadataProvider",permalink:"/docs/next/api/classes/reflection.tsmorphmetadataprovider"},next:{title:"Interface: CacheAdapter",permalink:"/docs/next/api/interfaces/core.cacheadapter"}},p=[{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"em",id:"em",children:[]},{value:"merge",id:"merge",children:[]},{value:"mergeObjects",id:"mergeobjects",children:[]},{value:"onlyProperties",id:"onlyproperties",children:[]},{value:"updateNestedEntities",id:"updatenestedentities",children:[]}]}],c={toc:p};function l(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".AssignOptions"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"convertCustomTypes"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/825a0ce/packages/core/src/entity/EntityAssigner.ts#L207"},"packages/core/src/entity/EntityAssigner.ts:207")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"em"},"em"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"em"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},(0,a.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},(0,a.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},(0,a.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/825a0ce/packages/core/src/entity/EntityAssigner.ts#L210"},"packages/core/src/entity/EntityAssigner.ts:210")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"merge"},"merge"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"merge"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/825a0ce/packages/core/src/entity/EntityAssigner.ts#L209"},"packages/core/src/entity/EntityAssigner.ts:209")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mergeobjects"},"mergeObjects"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"mergeObjects"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/825a0ce/packages/core/src/entity/EntityAssigner.ts#L208"},"packages/core/src/entity/EntityAssigner.ts:208")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onlyproperties"},"onlyProperties"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"onlyProperties"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/825a0ce/packages/core/src/entity/EntityAssigner.ts#L206"},"packages/core/src/entity/EntityAssigner.ts:206")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"updatenestedentities"},"updateNestedEntities"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"updateNestedEntities"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/825a0ce/packages/core/src/entity/EntityAssigner.ts#L205"},"packages/core/src/entity/EntityAssigner.ts:205")))}l.isMDXComponent=!0}}]);