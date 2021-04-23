(window.webpackJsonp=window.webpackJsonp||[]).push([[675],{1026:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},747:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),i=(n(0),n(1026)),c={id:"knex.index",title:"Interface: Index",sidebar_label:"Index",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/knex.index",id:"version-4.5/api/interfaces/knex.index",isDocsHomePage:!1,title:"Interface: Index",description:"Interface: Index",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.index.md",slug:"/api/interfaces/knex.index",permalink:"/docs/api/interfaces/knex.index",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1619158182,formattedLastUpdatedAt:"4/23/2021",sidebar_label:"Index",sidebar:"version-4.5/API",previous:{title:"Interface: IQueryBuilder<T>",permalink:"/docs/api/interfaces/knex.iquerybuilder"},next:{title:"Interface: IndexDef",permalink:"/docs/api/interfaces/knex.indexdef"}},p=[{value:"Properties",id:"properties",children:[{value:"columnName",id:"columnname",children:[]},{value:"composite",id:"composite",children:[]},{value:"keyName",id:"keyname",children:[]},{value:"primary",id:"primary",children:[]},{value:"unique",id:"unique",children:[]}]}],b={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-index"},"Interface: Index"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".Index"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"columnname"},"columnName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"columnName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L54"},"packages/knex/src/typings.ts:54")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"composite"},"composite"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"composite"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L58"},"packages/knex/src/typings.ts:58")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"keyname"},"keyName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"keyName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L55"},"packages/knex/src/typings.ts:55")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"primary"},"primary"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"primary"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L57"},"packages/knex/src/typings.ts:57")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"unique"},"unique"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"unique"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L56"},"packages/knex/src/typings.ts:56")))}l.isMDXComponent=!0}}]);