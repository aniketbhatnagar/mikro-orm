(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||a;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},513:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(1253)),c={id:"core.nodestate",title:"Enumeration: NodeState",sidebar_label:"NodeState",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/enums/core.nodestate",id:"api/enums/core.nodestate",isDocsHomePage:!1,title:"Enumeration: NodeState",description:"Enumeration: NodeState",source:"@site/docs/api/enums/core.nodestate.md",slug:"/api/enums/core.nodestate",permalink:"/docs/next/api/enums/core.nodestate",editUrl:null,version:"current",sidebar_label:"NodeState",sidebar:"API",previous:{title:"Enumeration: LockMode",permalink:"/docs/next/api/enums/core.lockmode"},next:{title:"Enumeration: QueryFlag",permalink:"/docs/next/api/enums/core.queryflag"}},u=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"IN_PROGRESS",id:"in_progress",children:[]},{value:"NOT_VISITED",id:"not_visited",children:[]},{value:"VISITED",id:"visited",children:[]}]}],l={toc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"enumeration-nodestate"},"Enumeration: NodeState"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".NodeState"),Object(a.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(a.b)("h3",{id:"in_progress"},"IN","_","PROGRESS"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"IN","_","PROGRESS"),": = 1"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/e3093d4/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L6"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:6")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"not_visited"},"NOT","_","VISITED"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"NOT","_","VISITED"),": = 0"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/e3093d4/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L5"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:5")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"visited"},"VISITED"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"VISITED"),": = 2"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/e3093d4/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L7"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:7")))}s.isMDXComponent=!0}}]);