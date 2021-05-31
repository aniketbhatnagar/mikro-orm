(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29884],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return l},kt:function(){return c}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=a.createContext({}),p=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},l=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),k=p(r),c=n,u=k["".concat(m,".").concat(c)]||k[c]||g[c]||i;return r?a.createElement(u,o(o({ref:e},l),{},{components:r})):a.createElement(u,o({ref:e},l))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=k;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},45988:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m},default:function(){return l}});var a=r(74034),n=r(79973),i=(r(67294),r(3905)),o={id:"migrations.migrationstorage",title:"Class: MigrationStorage",sidebar_label:"MigrationStorage",custom_edit_url:null},s={unversionedId:"api/classes/migrations.migrationstorage",id:"api/classes/migrations.migrationstorage",isDocsHomePage:!1,title:"Class: MigrationStorage",description:"migrations.MigrationStorage",source:"@site/docs/api/classes/migrations.migrationstorage.md",sourceDirName:"api/classes",slug:"/api/classes/migrations.migrationstorage",permalink:"/docs/next/api/classes/migrations.migrationstorage",editUrl:null,version:"current",sidebar_label:"MigrationStorage",frontMatter:{id:"migrations.migrationstorage",title:"Class: MigrationStorage",sidebar_label:"MigrationStorage",custom_edit_url:null},sidebar:"API",previous:{title:"Class: MigrationRunner",permalink:"/docs/next/api/classes/migrations.migrationrunner"},next:{title:"Class: Migrator",permalink:"/docs/next/api/classes/migrations.migrator"}},m=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"ensureTable",id:"ensuretable",children:[]},{value:"executed",id:"executed",children:[]},{value:"getExecutedMigrations",id:"getexecutedmigrations",children:[]},{value:"logMigration",id:"logmigration",children:[]},{value:"setMasterMigration",id:"setmastermigration",children:[]},{value:"unlogMigration",id:"unlogmigration",children:[]},{value:"unsetMasterMigration",id:"unsetmastermigration",children:[]}]}],p={toc:m};function l(t){var e=t.components,r=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations"},"migrations"),".MigrationStorage"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new MigrationStorage"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"driver"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#migrationsoptions"},(0,i.kt)("em",{parentName:"a"},"MigrationsOptions")),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/migrations.migrationstorage"},(0,i.kt)("em",{parentName:"a"},"MigrationStorage"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"driver")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/knex.abstractsqldriver"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/knex.abstractsqlconnection"},(0,i.kt)("em",{parentName:"a"},"AbstractSqlConnection")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#migrationsoptions"},(0,i.kt)("em",{parentName:"a"},"MigrationsOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/migrations.migrationstorage"},(0,i.kt)("em",{parentName:"a"},"MigrationStorage"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/migrations/src/MigrationStorage.ts#L10"},"packages/migrations/src/MigrationStorage.ts:10")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"ensuretable"},"ensureTable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"ensureTable"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/migrations/src/MigrationStorage.ts#L38"},"packages/migrations/src/MigrationStorage.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"executed"},"executed"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"executed"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string[]",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string[]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/migrations/src/MigrationStorage.ts#L15"},"packages/migrations/src/MigrationStorage.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getexecutedmigrations"},"getExecutedMigrations"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getExecutedMigrations"),"(): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationrow"},(0,i.kt)("em",{parentName:"a"},"MigrationRow")),"[]",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/migrations#migrationrow"},(0,i.kt)("em",{parentName:"a"},"MigrationRow")),"[]",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/migrations/src/MigrationStorage.ts#L28"},"packages/migrations/src/MigrationStorage.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"logmigration"},"logMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"logMigration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/migrations/src/MigrationStorage.ts#L20"},"packages/migrations/src/MigrationStorage.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setmastermigration"},"setMasterMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setMasterMigration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"trx"),": ",(0,i.kt)("em",{parentName:"p"},"any"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"trx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"any"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/migrations/src/MigrationStorage.ts#L52"},"packages/migrations/src/MigrationStorage.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unlogmigration"},"unlogMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"unlogMigration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/migrations/src/MigrationStorage.ts#L24"},"packages/migrations/src/MigrationStorage.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unsetmastermigration"},"unsetMasterMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"unsetMasterMigration"),"(): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/migrations/src/MigrationStorage.ts#L56"},"packages/migrations/src/MigrationStorage.ts:56")))}l.isMDXComponent=!0}}]);