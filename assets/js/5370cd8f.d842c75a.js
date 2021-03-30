(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=d(n),s=r,m=p["".concat(o,".").concat(s)]||p[s]||u[s]||c;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},404:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),c=(n(0),n(1110)),o={id:"knex.knex-1.onconflictquerybuilder",title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",sidebar_label:"OnConflictQueryBuilder",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/knex.knex-1.onconflictquerybuilder",id:"version-4.5/api/interfaces/knex.knex-1.onconflictquerybuilder",isDocsHomePage:!1,title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",description:"Interface: OnConflictQueryBuilder",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.onconflictquerybuilder.md",slug:"/api/interfaces/knex.knex-1.onconflictquerybuilder",permalink:"/docs/api/interfaces/knex.knex-1.onconflictquerybuilder",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1617085817,formattedLastUpdatedAt:"3/30/2021",sidebar_label:"OnConflictQueryBuilder",sidebar:"version-4.5/API",previous:{title:"Interface: MySqlConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},next:{title:"Interface: OracleDbConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.oracledbconnectionconfig"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Methods",id:"methods",children:[{value:"ignore",id:"ignore",children:[]},{value:"merge",id:"merge",children:[]}]}],b={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-onconflictquerybuildertrecord-tresult"},"Interface: OnConflictQueryBuilder<TRecord, TResult",">"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".OnConflictQueryBuilder"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"TRecord"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"TResult"))))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"ignore"},"ignore"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"ignore"),"(): ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:456"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"merge"},"merge"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"merge"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data?"),": ",Object(c.b)("em",{parentName:"p"},"Readonly"),"<Partial<AnyOrUnknownToOther<",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#mayberawrecord"},Object(c.b)("em",{parentName:"a"},"MaybeRawRecord")),"<TRecord",">",", {}",">",">",">","): ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"data?")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"Readonly"),"<Partial<AnyOrUnknownToOther<",Object(c.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#mayberawrecord"},Object(c.b)("em",{parentName:"a"},"MaybeRawRecord")),"<TRecord",">",", {}",">",">",">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:457"))}d.isMDXComponent=!0}}]);