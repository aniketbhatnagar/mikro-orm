(window.webpackJsonp=window.webpackJsonp||[]).push([[553],{1253:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=r,f=b["".concat(c,".").concat(u)]||b[u]||d[u]||a;return t?i.a.createElement(f,o(o({ref:n},s),{},{components:t})):i.a.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},623:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),a=(t(0),t(1253)),c={id:"knex.knex.sqlnative",title:"Interface: SqlNative",sidebar_label:"SqlNative",hide_title:!0},o={unversionedId:"api/interfaces/knex.knex.sqlnative",id:"version-4.4/api/interfaces/knex.knex.sqlnative",isDocsHomePage:!1,title:"Interface: SqlNative",description:"Interface: SqlNative",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.sqlnative.md",slug:"/api/interfaces/knex.knex.sqlnative",permalink:"/docs/api/interfaces/knex.knex.sqlnative",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.sqlnative.md",version:"4.4",lastUpdatedBy:"Gary Griffin",lastUpdatedAt:1612028041,sidebar_label:"SqlNative",sidebar:"version-4.4/API",previous:{title:"Interface: Sql",permalink:"/docs/api/interfaces/knex.knex.sql"},next:{title:"Interface: Sqlite3ConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.sqlite3connectionconfig"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"bindings",id:"bindings",children:[]},{value:"sql",id:"sql",children:[]}]}],s={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-sqlnative"},"Interface: SqlNative"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".SqlNative"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"SqlNative"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"bindings"},"bindings"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"bindings"),": readonly ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1#value"}),Object(a.b)("em",{parentName:"a"},"Value")),"[]"),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1625"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"sql"},"sql"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"sql"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1626"))}p.isMDXComponent=!0}}]);