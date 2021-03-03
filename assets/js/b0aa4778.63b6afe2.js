(window.webpackJsonp=window.webpackJsonp||[]).push([[666],{1052:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,O=m["".concat(b,".").concat(d)]||m[d]||s[d]||i;return a?r.a.createElement(O,c(c({ref:t},o),{},{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<i;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},738:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),i=(a(0),a(1052)),b={id:"migrations",title:"Module: migrations",sidebar_label:"migrations",hide_title:!0},c={unversionedId:"api/modules/migrations",id:"version-4.4/api/modules/migrations",isDocsHomePage:!1,title:"Module: migrations",description:"Module: migrations",source:"@site/versioned_docs/version-4.4/api/modules/migrations.md",slug:"/api/modules/migrations",permalink:"/docs/api/modules/migrations",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/modules/migrations.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1614758315,sidebar_label:"migrations"},l=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Classes",id:"classes",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"MigrateOptions",id:"migrateoptions",children:[]},{value:"MigrationResult",id:"migrationresult",children:[]},{value:"MigrationRow",id:"migrationrow",children:[]},{value:"Query",id:"query",children:[]},{value:"UmzugMigration",id:"umzugmigration",children:[]}]}],o={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"module-migrations"},"Module: migrations"),Object(i.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(i.b)("h3",{id:"classes"},"Classes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/api/classes/migrations.migration"},"Migration")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/api/classes/migrations.migrationgenerator"},"MigrationGenerator")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/api/classes/migrations.migrationrunner"},"MigrationRunner")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/api/classes/migrations.migrationstorage"},"MigrationStorage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/api/classes/migrations.migrator"},"Migrator"))),Object(i.b)("h2",{id:"type-aliases"},"Type aliases"),Object(i.b)("h3",{id:"migrateoptions"},"MigrateOptions"),Object(i.b)("p",null,"\u01ac ",Object(i.b)("strong",{parentName:"p"},"MigrateOptions"),": { ",Object(i.b)("inlineCode",{parentName:"p"},"from?"),": ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"migrations?"),": ",Object(i.b)("em",{parentName:"p"},"string"),"[] ; ",Object(i.b)("inlineCode",{parentName:"p"},"to?"),": ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"transaction?"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/core#transaction"},Object(i.b)("em",{parentName:"a"},"Transaction")),"  }"),Object(i.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"from?")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"string")," ","|"," ",Object(i.b)("em",{parentName:"td"},"number"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"migrations?")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"string"),"[]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"to?")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"string")," ","|"," ",Object(i.b)("em",{parentName:"td"},"number"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"transaction?")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/docs/api/modules/core#transaction"},Object(i.b)("em",{parentName:"a"},"Transaction")))))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/typings.ts#L4"},"packages/migrations/src/typings.ts:4")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"migrationresult"},"MigrationResult"),Object(i.b)("p",null,"\u01ac ",Object(i.b)("strong",{parentName:"p"},"MigrationResult"),": { ",Object(i.b)("inlineCode",{parentName:"p"},"code"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"diff"),": ",Object(i.b)("em",{parentName:"p"},"string"),"[] ; ",Object(i.b)("inlineCode",{parentName:"p"},"fileName"),": ",Object(i.b)("em",{parentName:"p"},"string"),"  }"),Object(i.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"code")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"string"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"diff")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"string"),"[]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"fileName")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"string"))))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/typings.ts#L5"},"packages/migrations/src/typings.ts:5")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"migrationrow"},"MigrationRow"),Object(i.b)("p",null,"\u01ac ",Object(i.b)("strong",{parentName:"p"},"MigrationRow"),": { ",Object(i.b)("inlineCode",{parentName:"p"},"executed_at"),": Date ; ",Object(i.b)("inlineCode",{parentName:"p"},"name"),": ",Object(i.b)("em",{parentName:"p"},"string"),"  }"),Object(i.b)("h4",{id:"type-declaration-2"},"Type declaration:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"executed_at")),Object(i.b)("td",{parentName:"tr",align:null},"Date")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"string"))))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/typings.ts#L6"},"packages/migrations/src/typings.ts:6")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"query"},"Query"),Object(i.b)("p",null,"\u01ac ",Object(i.b)("strong",{parentName:"p"},"Query"),": ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.querybuilder"},Object(i.b)("em",{parentName:"a"},"QueryBuilder"))," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.raw"},Object(i.b)("em",{parentName:"a"},"Raw"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/Migration.ts#L4"},"packages/migrations/src/Migration.ts:4")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"umzugmigration"},"UmzugMigration"),Object(i.b)("p",null,"\u01ac ",Object(i.b)("strong",{parentName:"p"},"UmzugMigration"),": { ",Object(i.b)("inlineCode",{parentName:"p"},"file"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"name?"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"path?"),": ",Object(i.b)("em",{parentName:"p"},"string"),"  }"),Object(i.b)("h4",{id:"type-declaration-3"},"Type declaration:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"file")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"string"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"name?")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"string"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"path?")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"string"))))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/migrations/src/typings.ts#L3"},"packages/migrations/src/typings.ts:3")))}p.isMDXComponent=!0}}]);