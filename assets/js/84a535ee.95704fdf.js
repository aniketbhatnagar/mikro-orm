(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{1110:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return O}));var n=t(0),r=t.n(n);function b(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){b(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)t=b[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)t=b[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=r.a.createContext({}),l=function(e){var a=r.a.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},i=function(e){var a=l(e.components);return r.a.createElement(m.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),i=l(t),d=n,O=i["".concat(c,".").concat(d)]||i[d]||o[d]||b;return t?r.a.createElement(O,s(s({ref:a},m),{},{components:t})):r.a.createElement(O,s({ref:a},m))}));function O(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var b=t.length,c=new Array(b);c[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var m=2;m<b;m++)c[m]=t[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},596:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return l}));var n=t(3),r=t(8),b=(t(0),t(1110)),c={id:"knex.databaseschema",title:"Class: DatabaseSchema",sidebar_label:"DatabaseSchema",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/classes/knex.databaseschema",id:"api/classes/knex.databaseschema",isDocsHomePage:!1,title:"Class: DatabaseSchema",description:"Class: DatabaseSchema",source:"@site/docs/api/classes/knex.databaseschema.md",slug:"/api/classes/knex.databaseschema",permalink:"/docs/next/api/classes/knex.databaseschema",editUrl:null,version:"current",sidebar_label:"DatabaseSchema",sidebar:"API",previous:{title:"Class: CriteriaNodeFactory",permalink:"/docs/next/api/classes/knex.criterianodefactory"},next:{title:"Class: DatabaseTable",permalink:"/docs/next/api/classes/knex.databasetable"}},p=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"tables",id:"tables",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addTable",id:"addtable",children:[]},{value:"getTable",id:"gettable",children:[]},{value:"getTables",id:"gettables",children:[]},{value:"create",id:"create",children:[]}]}],m={toc:p};function l(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-databaseschema"},"Class: DatabaseSchema"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".DatabaseSchema"),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new DatabaseSchema"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databaseschema"},Object(b.b)("em",{parentName:"a"},"DatabaseSchema"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databaseschema"},Object(b.b)("em",{parentName:"a"},"DatabaseSchema"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"tables"},"tables"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"tables"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databasetable"},Object(b.b)("em",{parentName:"a"},"DatabaseTable")),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/3efe3e9/packages/knex/src/schema/DatabaseSchema.ts#L9"},"packages/knex/src/schema/DatabaseSchema.ts:9")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"addtable"},"addTable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addTable"),"(",Object(b.b)("inlineCode",{parentName:"p"},"name"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"schema"),": ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"p"},"null")," ","|"," ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databasetable"},Object(b.b)("em",{parentName:"a"},"DatabaseTable"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"schema")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(b.b)("em",{parentName:"td"},"null")," ","|"," ",Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databasetable"},Object(b.b)("em",{parentName:"a"},"DatabaseTable"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/3efe3e9/packages/knex/src/schema/DatabaseSchema.ts#L11"},"packages/knex/src/schema/DatabaseSchema.ts:11")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettable"},"getTable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTable"),"(",Object(b.b)("inlineCode",{parentName:"p"},"name"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databasetable"},Object(b.b)("em",{parentName:"a"},"DatabaseTable"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databasetable"},Object(b.b)("em",{parentName:"a"},"DatabaseTable"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/3efe3e9/packages/knex/src/schema/DatabaseSchema.ts#L22"},"packages/knex/src/schema/DatabaseSchema.ts:22")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettables"},"getTables"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTables"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databasetable"},Object(b.b)("em",{parentName:"a"},"DatabaseTable")),"[]"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databasetable"},Object(b.b)("em",{parentName:"a"},"DatabaseTable")),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/3efe3e9/packages/knex/src/schema/DatabaseSchema.ts#L18"},"packages/knex/src/schema/DatabaseSchema.ts:18")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"create"),"(",Object(b.b)("inlineCode",{parentName:"p"},"connection"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.abstractsqlconnection"},Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")),", ",Object(b.b)("inlineCode",{parentName:"p"},"helper"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.schemahelper"},Object(b.b)("em",{parentName:"a"},"SchemaHelper")),", ",Object(b.b)("inlineCode",{parentName:"p"},"config"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databaseschema"},Object(b.b)("em",{parentName:"a"},"DatabaseSchema")),">"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"connection")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/knex.abstractsqlconnection"},Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"helper")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/knex.schemahelper"},Object(b.b)("em",{parentName:"a"},"SchemaHelper")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"config")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.configuration"},Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.databaseschema"},Object(b.b)("em",{parentName:"a"},"DatabaseSchema")),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/3efe3e9/packages/knex/src/schema/DatabaseSchema.ts#L26"},"packages/knex/src/schema/DatabaseSchema.ts:26")))}l.isMDXComponent=!0}}]);