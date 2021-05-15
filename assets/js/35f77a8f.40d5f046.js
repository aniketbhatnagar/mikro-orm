(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82036],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||i;return n?r.createElement(d,p(p({ref:t},l),{},{components:n})):r.createElement(d,p({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73786:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return l}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),p={id:"knex.index",title:"Interface: Index",sidebar_label:"Index",custom_edit_url:null},o={unversionedId:"api/interfaces/knex.index",id:"api/interfaces/knex.index",isDocsHomePage:!1,title:"Interface: Index",description:"knex.Index",source:"@site/docs/api/interfaces/knex.index.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.index",permalink:"/docs/next/api/interfaces/knex.index",editUrl:null,version:"current",sidebar_label:"Index",frontMatter:{id:"knex.index",title:"Interface: Index",sidebar_label:"Index",custom_edit_url:null},sidebar:"API",previous:{title:"Interface: ICriteriaNode",permalink:"/docs/next/api/interfaces/knex.icriterianode"},next:{title:"Interface: IQueryBuilder<T\\>",permalink:"/docs/next/api/interfaces/knex.iquerybuilder"}},s=[{value:"Properties",id:"properties",children:[{value:"columnNames",id:"columnnames",children:[]},{value:"composite",id:"composite",children:[]},{value:"expression",id:"expression",children:[]},{value:"keyName",id:"keyname",children:[]},{value:"primary",id:"primary",children:[]},{value:"type",id:"type",children:[]},{value:"unique",id:"unique",children:[]}]}],c={toc:s};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".Index"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"columnnames"},"columnNames"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"columnNames"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/222e2aa/packages/knex/src/typings.ts#L60"},"packages/knex/src/typings.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"composite"},"composite"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"composite"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/222e2aa/packages/knex/src/typings.ts#L64"},"packages/knex/src/typings.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"expression"},"expression"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"expression"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/222e2aa/packages/knex/src/typings.ts#L65"},"packages/knex/src/typings.ts:65")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"keyname"},"keyName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"keyName"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/222e2aa/packages/knex/src/typings.ts#L61"},"packages/knex/src/typings.ts:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"primary"},"primary"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"primary"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/222e2aa/packages/knex/src/typings.ts#L63"},"packages/knex/src/typings.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/222e2aa/packages/knex/src/typings.ts#L66"},"packages/knex/src/typings.ts:66")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unique"},"unique"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"unique"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/222e2aa/packages/knex/src/typings.ts#L62"},"packages/knex/src/typings.ts:62")))}l.isMDXComponent=!0}}]);