(window.webpackJsonp=window.webpackJsonp||[]).push([[502],{1112:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,O=m["".concat(b,".").concat(d)]||m[d]||l[d]||i;return a?n.a.createElement(O,c(c({ref:t},p),{},{components:a})):n.a.createElement(O,c({ref:t},p))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,b=new Array(i);b[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var p=2;p<i;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},575:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),i=(a(0),a(1112)),b={id:"migrations.migrationrunner",title:"Class: MigrationRunner",sidebar_label:"MigrationRunner",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/classes/migrations.migrationrunner",id:"version-4.5/api/classes/migrations.migrationrunner",isDocsHomePage:!1,title:"Class: MigrationRunner",description:"Class: MigrationRunner",source:"@site/versioned_docs/version-4.5/api/classes/migrations.migrationrunner.md",slug:"/api/classes/migrations.migrationrunner",permalink:"/docs/api/classes/migrations.migrationrunner",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1616397629,formattedLastUpdatedAt:"3/22/2021",sidebar_label:"MigrationRunner",sidebar:"version-4.5/API",previous:{title:"Class: MigrationGenerator",permalink:"/docs/api/classes/migrations.migrationgenerator"},next:{title:"Class: MigrationStorage",permalink:"/docs/api/classes/migrations.migrationstorage"}},o=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"connection",id:"connection",children:[]},{value:"driver",id:"driver",children:[]},{value:"helper",id:"helper",children:[]},{value:"masterTransaction",id:"mastertransaction",children:[]},{value:"options",id:"options",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getQueries",id:"getqueries",children:[]},{value:"run",id:"run",children:[]},{value:"setMasterMigration",id:"setmastermigration",children:[]},{value:"unsetMasterMigration",id:"unsetmastermigration",children:[]}]}],p={toc:o};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"class-migrationrunner"},"Class: MigrationRunner"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/migrations"},"migrations"),".MigrationRunner"),Object(i.b)("h2",{id:"constructors"},"Constructors"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("p",null,"+"," ",Object(i.b)("strong",{parentName:"p"},"new MigrationRunner"),"(",Object(i.b)("inlineCode",{parentName:"p"},"driver"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},Object(i.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection")),">",", ",Object(i.b)("inlineCode",{parentName:"p"},"options"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/core#migrationsoptions"},Object(i.b)("em",{parentName:"a"},"MigrationsOptions")),", ",Object(i.b)("inlineCode",{parentName:"p"},"config"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(i.b)("em",{parentName:"a"},"Configuration")),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(i.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(i.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationrunner"},Object(i.b)("em",{parentName:"a"},"MigrationRunner"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"driver")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqldriver"},Object(i.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(i.b)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqlconnection"},Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection")),">")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"options")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/docs/api/modules/core#migrationsoptions"},Object(i.b)("em",{parentName:"a"},"MigrationsOptions")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"config")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},Object(i.b)("em",{parentName:"a"},"Configuration")),"<",Object(i.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(i.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(i.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(i.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migrationrunner"},Object(i.b)("em",{parentName:"a"},"MigrationRunner"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L9"},"packages/migrations/src/MigrationRunner.ts:9")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"config"},"config"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"config"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(i.b)("em",{parentName:"a"},"Configuration")),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(i.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(i.b)("em",{parentName:"a"},"Connection")),">",">"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"connection"},"connection"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"connection"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L7"},"packages/migrations/src/MigrationRunner.ts:7")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"driver"},"driver"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"driver"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqldriver"},Object(i.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection")),">"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"helper"},"helper"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"helper"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.schemahelper"},Object(i.b)("em",{parentName:"a"},"SchemaHelper"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L8"},"packages/migrations/src/MigrationRunner.ts:8")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"mastertransaction"},"masterTransaction"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"masterTransaction"),": ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L9"},"packages/migrations/src/MigrationRunner.ts:9")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"options"},"options"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"options"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/core#migrationsoptions"},Object(i.b)("em",{parentName:"a"},"MigrationsOptions"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"getqueries"},"getQueries"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("inlineCode",{parentName:"p"},"Private"),Object(i.b)("strong",{parentName:"p"},"getQueries"),"(",Object(i.b)("inlineCode",{parentName:"p"},"migration"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migration"},Object(i.b)("em",{parentName:"a"},"Migration")),", ",Object(i.b)("inlineCode",{parentName:"p"},"method"),": ",Object(i.b)("em",{parentName:"p"},"up")," ","|"," ",Object(i.b)("em",{parentName:"p"},"down"),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#query"},Object(i.b)("em",{parentName:"a"},"Query")),"[]",">"),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"migration")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/docs/api/classes/migrations.migration"},Object(i.b)("em",{parentName:"a"},"Migration")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"method")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"up")," ","|"," ",Object(i.b)("em",{parentName:"td"},"down"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/migrations#query"},Object(i.b)("em",{parentName:"a"},"Query")),"[]",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L38"},"packages/migrations/src/MigrationRunner.ts:38")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"run"},"run"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"run"),"(",Object(i.b)("inlineCode",{parentName:"p"},"migration"),": ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/migrations.migration"},Object(i.b)("em",{parentName:"a"},"Migration")),", ",Object(i.b)("inlineCode",{parentName:"p"},"method"),": ",Object(i.b)("em",{parentName:"p"},"up")," ","|"," ",Object(i.b)("em",{parentName:"p"},"down"),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(i.b)("h4",{id:"parameters-2"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"migration")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/docs/api/classes/migrations.migration"},Object(i.b)("em",{parentName:"a"},"Migration")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"method")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"up")," ","|"," ",Object(i.b)("em",{parentName:"td"},"down"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L15"},"packages/migrations/src/MigrationRunner.ts:15")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"setmastermigration"},"setMasterMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"setMasterMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"trx"),": ",Object(i.b)("em",{parentName:"p"},"any"),"): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("h4",{id:"parameters-3"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"trx")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"any"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L30"},"packages/migrations/src/MigrationRunner.ts:30")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"unsetmastermigration"},"unsetMasterMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"unsetMasterMigration"),"(): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/migrations/src/MigrationRunner.ts#L34"},"packages/migrations/src/MigrationRunner.ts:34")))}s.isMDXComponent=!0}}]);