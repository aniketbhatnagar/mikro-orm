(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1110:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(r),m=n,f=l["".concat(o,".").concat(m)]||l[m]||u[m]||c;return r?a.a.createElement(f,i(i({ref:t},b),{},{components:r})):a.a.createElement(f,i({ref:t},b))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},383:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),c=(r(0),r(1110)),o={id:"core.transactioneventargs",title:"Interface: TransactionEventArgs",sidebar_label:"TransactionEventArgs",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.transactioneventargs",id:"version-4.5/api/interfaces/core.transactioneventargs",isDocsHomePage:!1,title:"Interface: TransactionEventArgs",description:"Interface: TransactionEventArgs",source:"@site/versioned_docs/version-4.5/api/interfaces/core.transactioneventargs.md",slug:"/api/interfaces/core.transactioneventargs",permalink:"/docs/api/interfaces/core.transactioneventargs",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1617085817,formattedLastUpdatedAt:"3/30/2021",sidebar_label:"TransactionEventArgs",sidebar:"version-4.5/API",previous:{title:"Interface: Settings",permalink:"/docs/api/interfaces/core.settings"},next:{title:"Interface: UniqueOptions<T>",permalink:"/docs/api/interfaces/core.uniqueoptions"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"em",id:"em",children:[]},{value:"transaction",id:"transaction",children:[]},{value:"uow",id:"uow",children:[]}]}],b={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-transactioneventargs"},"Interface: TransactionEventArgs"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".TransactionEventArgs"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"Omit"),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventargs"},Object(c.b)("em",{parentName:"a"},"EventArgs")),"<unknown",">",", ",Object(c.b)("em",{parentName:"p"},"entity")," ","|"," ",Object(c.b)("em",{parentName:"p"},"changeSet"),">"),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"TransactionEventArgs")))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"em"},"em"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"em"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">"),Object(c.b)("p",null,"Inherited from: void"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L8"},"packages/core/src/events/EventSubscriber.ts:8")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"transaction"},"transaction"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"transaction"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L17"},"packages/core/src/events/EventSubscriber.ts:17")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"uow"},"uow"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"uow"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.unitofwork"},Object(c.b)("em",{parentName:"a"},"UnitOfWork"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L18"},"packages/core/src/events/EventSubscriber.ts:18")))}p.isMDXComponent=!0}}]);