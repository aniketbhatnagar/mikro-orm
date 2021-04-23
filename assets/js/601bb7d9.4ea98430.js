(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{1026:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),f=n,d=l["".concat(a,".").concat(f)]||l[f]||b[f]||c;return t?o.a.createElement(d,i(i({ref:r},p),{},{components:t})):o.a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},416:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(8),c=(t(0),t(1026)),a={id:"core.queryresult",title:"Interface: QueryResult",sidebar_label:"QueryResult",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.queryresult",id:"api/interfaces/core.queryresult",isDocsHomePage:!1,title:"Interface: QueryResult",description:"Interface: QueryResult",source:"@site/docs/api/interfaces/core.queryresult.md",slug:"/api/interfaces/core.queryresult",permalink:"/docs/next/api/interfaces/core.queryresult",editUrl:null,version:"current",sidebar_label:"QueryResult",sidebar:"API",previous:{title:"Interface: QueryOrderMap",permalink:"/docs/next/api/interfaces/core.queryordermap"},next:{title:"Interface: ReferenceOptions<T, O>",permalink:"/docs/next/api/interfaces/core.referenceoptions"}},s=[{value:"Properties",id:"properties",children:[{value:"affectedRows",id:"affectedrows",children:[]},{value:"insertId",id:"insertid",children:[]},{value:"row",id:"row",children:[]},{value:"rows",id:"rows",children:[]}]}],p={toc:s};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-queryresult"},"Interface: QueryResult"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".QueryResult"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"affectedrows"},"affectedRows"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"affectedRows"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/20ffb6f/packages/core/src/connections/Connection.ts#L131"},"packages/core/src/connections/Connection.ts:131")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"insertid"},"insertId"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"insertId"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/20ffb6f/packages/core/src/connections/Connection.ts#L132"},"packages/core/src/connections/Connection.ts:132")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"row"},"row"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"row"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/20ffb6f/packages/core/src/connections/Connection.ts#L133"},"packages/core/src/connections/Connection.ts:133")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"rows"},"rows"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"rows"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<any",">","[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/20ffb6f/packages/core/src/connections/Connection.ts#L134"},"packages/core/src/connections/Connection.ts:134")))}u.isMDXComponent=!0}}]);