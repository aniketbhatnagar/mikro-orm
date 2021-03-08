(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1052:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},l=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(a),d=r,u=l["".concat(o,".").concat(d)]||l[d]||m[d]||c;return a?n.a.createElement(u,b(b({ref:t},p),{},{components:a})):n.a.createElement(u,b({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var p=2;p<c;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},268:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),c=(a(0),a(1052)),o={id:"core.configurationloader",title:"Class: ConfigurationLoader",sidebar_label:"ConfigurationLoader",hide_title:!0},b={unversionedId:"api/classes/core.configurationloader",id:"version-4.4/api/classes/core.configurationloader",isDocsHomePage:!1,title:"Class: ConfigurationLoader",description:"Class: ConfigurationLoader",source:"@site/versioned_docs/version-4.4/api/classes/core.configurationloader.md",slug:"/api/classes/core.configurationloader",permalink:"/docs/api/classes/core.configurationloader",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.configurationloader.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1615189969,sidebar_label:"ConfigurationLoader",sidebar:"version-4.4/API",previous:{title:"Class: Configuration<D>",permalink:"/docs/api/classes/core.configuration"},next:{title:"Class: Connection",permalink:"/docs/api/classes/core.connection"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getConfigPaths",id:"getconfigpaths",children:[]},{value:"getConfiguration",id:"getconfiguration",children:[]},{value:"getPackageConfig",id:"getpackageconfig",children:[]},{value:"getSettings",id:"getsettings",children:[]},{value:"getTsConfig",id:"gettsconfig",children:[]},{value:"registerTsNode",id:"registertsnode",children:[]}]}],p={toc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-configurationloader"},"Class: ConfigurationLoader"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ConfigurationLoader"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"ConfigurationLoader"))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new ConfigurationLoader"),"(): ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.configurationloader"},Object(c.b)("em",{parentName:"a"},"ConfigurationLoader"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.configurationloader"},Object(c.b)("em",{parentName:"a"},"ConfigurationLoader"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"getconfigpaths"},"getConfigPaths"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"getConfigPaths"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"string"),"[]",">"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"string"),"[]",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/ConfigurationLoader.ts#L41"},"packages/core/src/utils/ConfigurationLoader.ts:41")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getconfiguration"},"getConfiguration"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"getConfiguration"),"<D",">","(",Object(c.b)("inlineCode",{parentName:"p"},"validate?"),": ",Object(c.b)("em",{parentName:"p"},"boolean"),", ",Object(c.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(c.b)("em",{parentName:"p"},"Partial"),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(c.b)("em",{parentName:"a"},"Configuration")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">",">","): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(c.b)("em",{parentName:"a"},"Configuration")),"<D",">",">"),Object(c.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"D")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),", D",">"),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),"\\",">")))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Default value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"validate")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"boolean")),Object(c.b)("td",{parentName:"tr",align:null},"true")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"Partial"),"<",Object(c.b)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},Object(c.b)("em",{parentName:"a"},"Configuration")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(c.b)("em",{parentName:"a"},"Connection")),">",">",">"),Object(c.b)("td",{parentName:"tr",align:null},"...")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},Object(c.b)("em",{parentName:"a"},"Configuration")),"<D",">",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/ConfigurationLoader.ts#L11"},"packages/core/src/utils/ConfigurationLoader.ts:11")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getpackageconfig"},"getPackageConfig"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"getPackageConfig"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("em",{parentName:"p"},"any"),">",">"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("em",{parentName:"p"},"any"),">",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/ConfigurationLoader.ts#L28"},"packages/core/src/utils/ConfigurationLoader.ts:28")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getsettings"},"getSettings"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"getSettings"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.settings"},Object(c.b)("em",{parentName:"a"},"Settings")),">"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.settings"},Object(c.b)("em",{parentName:"a"},"Settings")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/ConfigurationLoader.ts#L36"},"packages/core/src/utils/ConfigurationLoader.ts:36")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"gettsconfig"},"getTsConfig"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"getTsConfig"),"(",Object(c.b)("inlineCode",{parentName:"p"},"tsConfigPath"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("em",{parentName:"p"},"any"),">",">"),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"tsConfigPath")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("em",{parentName:"p"},"any"),">",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/ConfigurationLoader.ts#L83"},"packages/core/src/utils/ConfigurationLoader.ts:83")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"registertsnode"},"registerTsNode"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"registerTsNode"),"(",Object(c.b)("inlineCode",{parentName:"p"},"configPath?"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Default value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"configPath")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("em",{parentName:"td"},"string")),Object(c.b)("td",{parentName:"tr",align:null},"'tsconfig.json'")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("em",{parentName:"p"},"void"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/ConfigurationLoader.ts#L61"},"packages/core/src/utils/ConfigurationLoader.ts:61")))}s.isMDXComponent=!0}}]);