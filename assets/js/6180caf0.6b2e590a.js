(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{1131:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=i(a),d=n,O=m["".concat(b,".").concat(d)]||m[d]||l[d]||c;return a?r.a.createElement(O,p(p({ref:t},o),{},{components:a})):r.a.createElement(O,p({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,b[1]=p;for(var o=2;o<c;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},468:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(8),c=(a(0),a(1131)),b={id:"core.requestcontext",title:"Class: RequestContext",sidebar_label:"RequestContext",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.requestcontext",id:"api/classes/core.requestcontext",isDocsHomePage:!1,title:"Class: RequestContext",description:"Class: RequestContext",source:"@site/docs/api/classes/core.requestcontext.md",slug:"/api/classes/core.requestcontext",permalink:"/docs/next/api/classes/core.requestcontext",editUrl:null,version:"current",sidebar_label:"RequestContext",sidebar:"API",previous:{title:"Class: ReflectMetadataProvider",permalink:"/docs/next/api/classes/core.reflectmetadataprovider"},next:{title:"Class: SerializationContext<T>",permalink:"/docs/next/api/classes/core.serializationcontext"}},s=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"id",id:"id",children:[]},{value:"map",id:"map",children:[]},{value:"counter",id:"counter",children:[]},{value:"storage",id:"storage",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"em",id:"em",children:[]}]},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[]},{value:"createAsync",id:"createasync",children:[]},{value:"createContext",id:"createcontext",children:[]},{value:"currentRequestContext",id:"currentrequestcontext",children:[]},{value:"getEntityManager",id:"getentitymanager",children:[]}]}],o={toc:s};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-requestcontext"},"Class: RequestContext"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".RequestContext"),Object(c.b)("p",null,"Uses ",Object(c.b)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," to create async context that holds current EM fork."),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new RequestContext"),"(",Object(c.b)("inlineCode",{parentName:"p"},"map"),": ",Object(c.b)("em",{parentName:"p"},"Map"),"<string, ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">",">","): ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.requestcontext"},Object(c.b)("em",{parentName:"a"},"RequestContext"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"map")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"Map"),"<string, ",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">",">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.requestcontext"},Object(c.b)("em",{parentName:"a"},"RequestContext"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/be27bf7/packages/core/src/utils/RequestContext.ts#L11"},"packages/core/src/utils/RequestContext.ts:11")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"id"},"id"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"id"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/be27bf7/packages/core/src/utils/RequestContext.ts#L11"},"packages/core/src/utils/RequestContext.ts:11")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"map"},"map"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"map"),": ",Object(c.b)("em",{parentName:"p"},"Map"),"<string, ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">",">"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"counter"},"counter"),Object(c.b)("p",null,"\u25aa ",Object(c.b)("inlineCode",{parentName:"p"},"Static")," ",Object(c.b)("inlineCode",{parentName:"p"},"Private")," ",Object(c.b)("strong",{parentName:"p"},"counter"),": ",Object(c.b)("em",{parentName:"p"},"number"),"= 1"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/be27bf7/packages/core/src/utils/RequestContext.ts#L10"},"packages/core/src/utils/RequestContext.ts:10")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"storage"},"storage"),Object(c.b)("p",null,"\u25aa ",Object(c.b)("inlineCode",{parentName:"p"},"Static")," ",Object(c.b)("inlineCode",{parentName:"p"},"Private")," ",Object(c.b)("strong",{parentName:"p"},"storage"),": ",Object(c.b)("em",{parentName:"p"},"AsyncLocalStorage"),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.requestcontext"},Object(c.b)("em",{parentName:"a"},"RequestContext")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/be27bf7/packages/core/src/utils/RequestContext.ts#L9"},"packages/core/src/utils/RequestContext.ts:9")),Object(c.b)("h2",{id:"accessors"},"Accessors"),Object(c.b)("h3",{id:"em"},"em"),Object(c.b)("p",null,"\u2022 get ",Object(c.b)("strong",{parentName:"p"},"em"),"(): ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">"),Object(c.b)("p",null,"Returns default EntityManager."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/be27bf7/packages/core/src/utils/RequestContext.ts#L18"},"packages/core/src/utils/RequestContext.ts:18")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"create"},"create"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"create"),"(",Object(c.b)("inlineCode",{parentName:"p"},"em"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">","[], ",Object(c.b)("inlineCode",{parentName:"p"},"next"),": (...",Object(c.b)("inlineCode",{parentName:"p"},"args"),": ",Object(c.b)("em",{parentName:"p"},"any"),"[]) => ",Object(c.b)("em",{parentName:"p"},"void"),"): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Creates new RequestContext instance and runs the code inside its domain."),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"em")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">","[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"next")),Object(c.b)("td",{parentName:"tr",align:"left"},"(...",Object(c.b)("inlineCode",{parentName:"td"},"args"),": ",Object(c.b)("em",{parentName:"td"},"any"),"[]) => ",Object(c.b)("em",{parentName:"td"},"void"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/be27bf7/packages/core/src/utils/RequestContext.ts#L25"},"packages/core/src/utils/RequestContext.ts:25")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createasync"},"createAsync"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"createAsync"),"(",Object(c.b)("inlineCode",{parentName:"p"},"em"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">","[], ",Object(c.b)("inlineCode",{parentName:"p"},"next"),": (...",Object(c.b)("inlineCode",{parentName:"p"},"args"),": ",Object(c.b)("em",{parentName:"p"},"any"),"[]) => ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">","): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Creates new RequestContext instance and runs the code inside its domain.\nAsync variant, when the ",Object(c.b)("inlineCode",{parentName:"p"},"next")," handler needs to be awaited (like in Koa)."),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"em")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">","[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"next")),Object(c.b)("td",{parentName:"tr",align:"left"},"(...",Object(c.b)("inlineCode",{parentName:"td"},"args"),": ",Object(c.b)("em",{parentName:"td"},"any"),"[]) => ",Object(c.b)("em",{parentName:"td"},"Promise"),"<void",">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/be27bf7/packages/core/src/utils/RequestContext.ts#L34"},"packages/core/src/utils/RequestContext.ts:34")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createcontext"},"createContext"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static")," ",Object(c.b)("inlineCode",{parentName:"p"},"Private"),Object(c.b)("strong",{parentName:"p"},"createContext"),"(",Object(c.b)("inlineCode",{parentName:"p"},"em"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">","[]): ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.requestcontext"},Object(c.b)("em",{parentName:"a"},"RequestContext"))),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"em")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">"," ","|"," ",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">","[]")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.requestcontext"},Object(c.b)("em",{parentName:"a"},"RequestContext"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/be27bf7/packages/core/src/utils/RequestContext.ts#L56"},"packages/core/src/utils/RequestContext.ts:56")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"currentrequestcontext"},"currentRequestContext"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"currentRequestContext"),"(): ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.requestcontext"},Object(c.b)("em",{parentName:"a"},"RequestContext"))),Object(c.b)("p",null,"Returns current RequestContext (if available)."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.requestcontext"},Object(c.b)("em",{parentName:"a"},"RequestContext"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/be27bf7/packages/core/src/utils/RequestContext.ts#L44"},"packages/core/src/utils/RequestContext.ts:44")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getentitymanager"},"getEntityManager"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"getEntityManager"),"(",Object(c.b)("inlineCode",{parentName:"p"},"name?"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">"),Object(c.b)("p",null,"Returns current EntityManager (if available)."),Object(c.b)("h4",{id:"parameters-4"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string")),Object(c.b)("td",{parentName:"tr",align:"left"},"'default'")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/be27bf7/packages/core/src/utils/RequestContext.ts#L51"},"packages/core/src/utils/RequestContext.ts:51")))}i.isMDXComponent=!0}}]);