(window.webpackJsonp=window.webpackJsonp||[]).push([[716],{1256:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,O=s["".concat(a,".").concat(u)]||s[u]||m[u]||o;return n?c.a.createElement(O,i(i({ref:t},p),{},{components:n})):c.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},786:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(7),o=(n(0),n(1256)),a={id:"core.connectionoptions",title:"Interface: ConnectionOptions",sidebar_label:"ConnectionOptions",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.connectionoptions",id:"api/interfaces/core.connectionoptions",isDocsHomePage:!1,title:"Interface: ConnectionOptions",description:"Interface: ConnectionOptions",source:"@site/docs/api/interfaces/core.connectionoptions.md",slug:"/api/interfaces/core.connectionoptions",permalink:"/docs/next/api/interfaces/core.connectionoptions",editUrl:null,version:"current",sidebar_label:"ConnectionOptions",sidebar:"API",previous:{title:"Interface: ConnectionConfig",permalink:"/docs/next/api/interfaces/core.connectionconfig"},next:{title:"Interface: CountOptions<T>",permalink:"/docs/next/api/interfaces/core.countoptions"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"charset",id:"charset",children:[]},{value:"clientUrl",id:"clienturl",children:[]},{value:"collate",id:"collate",children:[]},{value:"dbName",id:"dbname",children:[]},{value:"host",id:"host",children:[]},{value:"multipleStatements",id:"multiplestatements",children:[]},{value:"name",id:"name",children:[]},{value:"password",id:"password",children:[]},{value:"pool",id:"pool",children:[]},{value:"port",id:"port",children:[]},{value:"user",id:"user",children:[]}]}],p={toc:b};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-connectionoptions"},"Interface: ConnectionOptions"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".ConnectionOptions"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"ConnectionOptions")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.mikroormoptions"}),Object(o.b)("em",{parentName:"a"},"MikroORMOptions"))))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"charset"},"charset"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"charset"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c8c97dd/packages/core/src/utils/Configuration.ts#L288"}),"packages/core/src/utils/Configuration.ts:288")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"clienturl"},"clientUrl"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"clientUrl"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c8c97dd/packages/core/src/utils/Configuration.ts#L283"}),"packages/core/src/utils/Configuration.ts:283")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"collate"},"collate"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"collate"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c8c97dd/packages/core/src/utils/Configuration.ts#L289"}),"packages/core/src/utils/Configuration.ts:289")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"dbname"},"dbName"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"dbName"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c8c97dd/packages/core/src/utils/Configuration.ts#L281"}),"packages/core/src/utils/Configuration.ts:281")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"host"},"host"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"host"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c8c97dd/packages/core/src/utils/Configuration.ts#L284"}),"packages/core/src/utils/Configuration.ts:284")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"multiplestatements"},"multipleStatements"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"multipleStatements"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c8c97dd/packages/core/src/utils/Configuration.ts#L290"}),"packages/core/src/utils/Configuration.ts:290")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"name"},"name"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"name"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c8c97dd/packages/core/src/utils/Configuration.ts#L282"}),"packages/core/src/utils/Configuration.ts:282")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"password"},"password"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"password"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c8c97dd/packages/core/src/utils/Configuration.ts#L287"}),"packages/core/src/utils/Configuration.ts:287")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"pool"},"pool"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"pool"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.poolconfig"}),Object(o.b)("em",{parentName:"a"},"PoolConfig"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c8c97dd/packages/core/src/utils/Configuration.ts#L291"}),"packages/core/src/utils/Configuration.ts:291")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"port"},"port"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"port"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c8c97dd/packages/core/src/utils/Configuration.ts#L285"}),"packages/core/src/utils/Configuration.ts:285")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"user"},"user"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"user"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c8c97dd/packages/core/src/utils/Configuration.ts#L286"}),"packages/core/src/utils/Configuration.ts:286")))}l.isMDXComponent=!0}}]);