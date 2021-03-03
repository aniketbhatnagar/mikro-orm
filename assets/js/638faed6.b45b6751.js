(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{1052:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),o=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},i=function(e){var t=o(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),i=o(a),O=r,j=i["".concat(c,".").concat(O)]||i[O]||d[O]||b;return a?n.a.createElement(j,p(p({ref:t},m),{},{components:a})):n.a.createElement(j,p({ref:t},m))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=O;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var m=2;m<b;m++)c[m]=a[m];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},438:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(8),b=(a(0),a(1052)),c={id:"core.objecthydrator",title:"Class: ObjectHydrator",sidebar_label:"ObjectHydrator",hide_title:!0},p={unversionedId:"api/classes/core.objecthydrator",id:"version-4.4/api/classes/core.objecthydrator",isDocsHomePage:!1,title:"Class: ObjectHydrator",description:"Class: ObjectHydrator",source:"@site/versioned_docs/version-4.4/api/classes/core.objecthydrator.md",slug:"/api/classes/core.objecthydrator",permalink:"/docs/api/classes/core.objecthydrator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.objecthydrator.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1614758315,sidebar_label:"ObjectHydrator",sidebar:"version-4.4/API",previous:{title:"Class: NullHighlighter",permalink:"/docs/api/classes/core.nullhighlighter"},next:{title:"Class: OptimisticLockError<T>",permalink:"/docs/api/classes/core.optimisticlockerror"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"hydrators",id:"hydrators",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"platform",id:"platform",children:[]}]},{value:"Methods",id:"methods",children:[{value:"createCollectionItemMapper",id:"createcollectionitemmapper",children:[]},{value:"getEntityHydrator",id:"getentityhydrator",children:[]},{value:"getProperties",id:"getproperties",children:[]},{value:"hydrate",id:"hydrate",children:[]},{value:"hydrateProperty",id:"hydrateproperty",children:[]},{value:"hydrateReference",id:"hydratereference",children:[]}]}],m={toc:l};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-objecthydrator"},"Class: ObjectHydrator"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ObjectHydrator"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator"},Object(b.b)("em",{parentName:"a"},"Hydrator"))),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"ObjectHydrator")))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new ObjectHydrator"),"(",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},Object(b.b)("em",{parentName:"a"},"MetadataStorage")),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),", ",Object(b.b)("inlineCode",{parentName:"p"},"config"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.objecthydrator"},Object(b.b)("em",{parentName:"a"},"ObjectHydrator"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.metadatastorage"},Object(b.b)("em",{parentName:"a"},"MetadataStorage")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"config")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.objecthydrator"},Object(b.b)("em",{parentName:"a"},"ObjectHydrator"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator"},"Hydrator")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/Hydrator.ts#L8"},"packages/core/src/hydration/Hydrator.ts:8")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"config"},"config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"config"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator"},"Hydrator"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator#config"},"config")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hydrators"},"hydrators"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"hydrators"),": { ",Object(b.b)("inlineCode",{parentName:"p"},"full"),": ",Object(b.b)("em",{parentName:"p"},"Map"),"<",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("em",{parentName:"p"},"EntityHydrator"),"<",Object(b.b)("em",{parentName:"p"},"any"),">",">"," ; ",Object(b.b)("inlineCode",{parentName:"p"},"reference"),": ",Object(b.b)("em",{parentName:"p"},"Map"),"<",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("em",{parentName:"p"},"EntityHydrator"),"<",Object(b.b)("em",{parentName:"p"},"any"),">",">"," ; ",Object(b.b)("inlineCode",{parentName:"p"},"returning"),": ",Object(b.b)("em",{parentName:"p"},"Map"),"<",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("em",{parentName:"p"},"EntityHydrator"),"<",Object(b.b)("em",{parentName:"p"},"any"),">",">","  }"),Object(b.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"full")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"Map"),"<",Object(b.b)("em",{parentName:"td"},"string"),", ",Object(b.b)("em",{parentName:"td"},"EntityHydrator"),"<",Object(b.b)("em",{parentName:"td"},"any"),">",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"reference")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"Map"),"<",Object(b.b)("em",{parentName:"td"},"string"),", ",Object(b.b)("em",{parentName:"td"},"EntityHydrator"),"<",Object(b.b)("em",{parentName:"td"},"any"),">",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"returning")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"Map"),"<",Object(b.b)("em",{parentName:"td"},"string"),", ",Object(b.b)("em",{parentName:"td"},"EntityHydrator"),"<",Object(b.b)("em",{parentName:"td"},"any"),">",">")))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/ObjectHydrator.ts#L13"},"packages/core/src/hydration/ObjectHydrator.ts:13")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"metadata"},"metadata"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"metadata"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},Object(b.b)("em",{parentName:"a"},"MetadataStorage"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator"},"Hydrator"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator#metadata"},"metadata")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"platform"},"platform"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform"))),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator"},"Hydrator"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator#platform"},"platform")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"createcollectionitemmapper"},"createCollectionItemMapper"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"createCollectionItemMapper"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"p"},"any"),">","): ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"td"},"any"),">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string"),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/ObjectHydrator.ts#L211"},"packages/core/src/hydration/ObjectHydrator.ts:211")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getentityhydrator"},"getEntityHydrator"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getEntityHydrator"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"type"),": ",Object(b.b)("em",{parentName:"p"},"reference")," ","|"," ",Object(b.b)("em",{parentName:"p"},"full")," ","|"," ",Object(b.b)("em",{parentName:"p"},"returning"),"): ",Object(b.b)("em",{parentName:"p"},"EntityHydrator"),"<T",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," Highly performance-sensitive method."),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"type")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"reference")," ","|"," ",Object(b.b)("em",{parentName:"td"},"full")," ","|"," ",Object(b.b)("em",{parentName:"td"},"returning"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"EntityHydrator"),"<T",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/ObjectHydrator.ts#L38"},"packages/core/src/hydration/ObjectHydrator.ts:38")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getproperties"},"getProperties"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"getProperties"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"type"),": ",Object(b.b)("em",{parentName:"p"},"reference")," ","|"," ",Object(b.b)("em",{parentName:"p"},"full")," ","|"," ",Object(b.b)("em",{parentName:"p"},"returning"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<T",">","[]"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"type")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"reference")," ","|"," ",Object(b.b)("em",{parentName:"td"},"full")," ","|"," ",Object(b.b)("em",{parentName:"td"},"returning"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<T",">","[]"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator"},"Hydrator")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/Hydrator.ts#L34"},"packages/core/src/hydration/Hydrator.ts:34")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hydrate"},"hydrate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hydrate"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"factory"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entityfactory"},Object(b.b)("em",{parentName:"a"},"EntityFactory")),", ",Object(b.b)("inlineCode",{parentName:"p"},"type"),": ",Object(b.b)("em",{parentName:"p"},"reference")," ","|"," ",Object(b.b)("em",{parentName:"p"},"full")," ","|"," ",Object(b.b)("em",{parentName:"p"},"returning"),", ",Object(b.b)("inlineCode",{parentName:"p"},"newEntity?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),", ",Object(b.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:null},"T"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"factory")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entityfactory"},Object(b.b)("em",{parentName:"a"},"EntityFactory"))),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"type")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"reference")," ","|"," ",Object(b.b)("em",{parentName:"td"},"full")," ","|"," ",Object(b.b)("em",{parentName:"td"},"returning")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"newEntity")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"convertCustomTypes")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},"false")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Overrides: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator"},"Hydrator")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/ObjectHydrator.ts#L22"},"packages/core/src/hydration/ObjectHydrator.ts:22")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hydrateproperty"},"hydrateProperty"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"hydrateProperty"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"p"},"any"),">",", ",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"factory"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entityfactory"},Object(b.b)("em",{parentName:"a"},"EntityFactory")),", ",Object(b.b)("inlineCode",{parentName:"p"},"newEntity?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),", ",Object(b.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:null},"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(b.b)("em",{parentName:"td"},"any"),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"factory")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entityfactory"},Object(b.b)("em",{parentName:"a"},"EntityFactory")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"newEntity?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"convertCustomTypes?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator"},"Hydrator")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/Hydrator.ts#L47"},"packages/core/src/hydration/Hydrator.ts:47")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hydratereference"},"hydrateReference"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hydrateReference"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"factory"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entityfactory"},Object(b.b)("em",{parentName:"a"},"EntityFactory")),", ",Object(b.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),Object(b.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:null},"T"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"factory")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entityfactory"},Object(b.b)("em",{parentName:"a"},"EntityFactory"))),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"convertCustomTypes")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",{parentName:"tr",align:null},"false")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Overrides: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator"},"Hydrator")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/hydration/ObjectHydrator.ts#L30"},"packages/core/src/hydration/ObjectHydrator.ts:30")))}o.isMDXComponent=!0}}]);