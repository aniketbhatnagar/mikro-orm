(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{1112:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),o=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=o(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=o(a),O=n,d=l["".concat(c,".").concat(O)]||l[O]||s[O]||b;return a?r.a.createElement(d,i(i({ref:t},m),{},{components:a})):r.a.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var m=2;m<b;m++)c[m]=a[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},517:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),b=(a(0),a(1112)),c={id:"core.entityassigner",title:"Class: EntityAssigner",sidebar_label:"EntityAssigner",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/classes/core.entityassigner",id:"version-4.5/api/classes/core.entityassigner",isDocsHomePage:!1,title:"Class: EntityAssigner",description:"Class: EntityAssigner",source:"@site/versioned_docs/version-4.5/api/classes/core.entityassigner.md",slug:"/api/classes/core.entityassigner",permalink:"/docs/api/classes/core.entityassigner",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1616397629,formattedLastUpdatedAt:"3/22/2021",sidebar_label:"EntityAssigner",sidebar:"version-4.5/API",previous:{title:"Class: DriverException",permalink:"/docs/api/classes/core.driverexception"},next:{title:"Class: EntityCaseNamingStrategy",permalink:"/docs/api/classes/core.entitycasenamingstrategy"}},p=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"assignCollection",id:"assigncollection",children:[]},{value:"assignEmbeddable",id:"assignembeddable",children:[]},{value:"assignReference",id:"assignreference",children:[]},{value:"autoWireOneToOne",id:"autowireonetoone",children:[]},{value:"createCollectionItem",id:"createcollectionitem",children:[]},{value:"validateEM",id:"validateem",children:[]}]}],m={toc:p};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-entityassigner"},"Class: EntityAssigner"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".EntityAssigner"),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new EntityAssigner"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entityassigner"},Object(b.b)("em",{parentName:"a"},"EntityAssigner"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entityassigner"},Object(b.b)("em",{parentName:"a"},"EntityAssigner"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"assign"},"assign"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"assign"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")),"): T"),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:"left"},"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L15"},"packages/core/src/entity/EntityAssigner.ts:15")),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"assign"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"onlyProperties?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): T"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:"left"},"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"onlyProperties?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L16"},"packages/core/src/entity/EntityAssigner.ts:16")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"assigncollection"},"assignCollection"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"assignCollection"),"<T, U",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"collection"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.collection"},Object(b.b)("em",{parentName:"a"},"Collection")),"<U, unknown",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"any"),"[], ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"em"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"U")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<U",">"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<any",">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:"left"},"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"collection")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.collection"},Object(b.b)("em",{parentName:"a"},"Collection")),"<U, unknown",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<any",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"em")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L126"},"packages/core/src/entity/EntityAssigner.ts:126")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"assignembeddable"},"assignEmbeddable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"assignEmbeddable"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"em"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:"left"},"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<any",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"em")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L138"},"packages/core/src/entity/EntityAssigner.ts:138")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"assignreference"},"assignReference"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"assignReference"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"em"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:"left"},"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<any",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"em")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L109"},"packages/core/src/entity/EntityAssigner.ts:109")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"autowireonetoone"},"autoWireOneToOne"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"autoWireOneToOne"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"auto-wire 1:1 inverse side with owner as in no-sql drivers it can't be joined\nalso makes sure the link is bidirectional when creating new entities from nested structures"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"internal"))," "),Object(b.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<any",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:"left"},"T")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L83"},"packages/core/src/entity/EntityAssigner.ts:83")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createcollectionitem"},"createCollectionItem"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"createCollectionItem"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"item"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"em"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"invalid"),": ",Object(b.b)("em",{parentName:"p"},"any"),"[], ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")),"): T"),Object(b.b)("h4",{id:"type-parameters-6"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"item")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"em")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<any",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"invalid")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L159"},"packages/core/src/entity/EntityAssigner.ts:159")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"validateem"},"validateEM"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"validateEM"),"(",Object(b.b)("inlineCode",{parentName:"p"},"em?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"em?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityAssigner.ts#L101"},"packages/core/src/entity/EntityAssigner.ts:101")))}o.isMDXComponent=!0}}]);