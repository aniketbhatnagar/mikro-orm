(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47242],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(a),k=n,u=m["".concat(d,".").concat(k)]||m[k]||s[k]||i;return a?r.createElement(u,o(o({ref:t},l),{},{components:a})):r.createElement(u,o({ref:t},l))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84590:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return l}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),o={id:"core.javascriptmetadataprovider",title:"Class: JavaScriptMetadataProvider",sidebar_label:"JavaScriptMetadataProvider",custom_edit_url:null},p={unversionedId:"api/classes/core.javascriptmetadataprovider",id:"api/classes/core.javascriptmetadataprovider",isDocsHomePage:!1,title:"Class: JavaScriptMetadataProvider",description:"core.JavaScriptMetadataProvider",source:"@site/docs/api/classes/core.javascriptmetadataprovider.md",sourceDirName:"api/classes",slug:"/api/classes/core.javascriptmetadataprovider",permalink:"/docs/next/api/classes/core.javascriptmetadataprovider",editUrl:null,version:"current",sidebar_label:"JavaScriptMetadataProvider",frontMatter:{id:"core.javascriptmetadataprovider",title:"Class: JavaScriptMetadataProvider",sidebar_label:"JavaScriptMetadataProvider",custom_edit_url:null},sidebar:"API",previous:{title:"Class: InvalidFieldNameException",permalink:"/docs/next/api/classes/core.invalidfieldnameexception"},next:{title:"Class: JsonType",permalink:"/docs/next/api/classes/core.jsontype"}},d=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"loadEntityMetadata",id:"loadentitymetadata",children:[]},{value:"loadFromCache",id:"loadfromcache",children:[]},{value:"useCache",id:"usecache",children:[]}]}],c={toc:d};function l(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".JavaScriptMetadataProvider"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"deprecated"))," use EntitySchema instead"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},(0,i.kt)("em",{parentName:"a"},"MetadataProvider"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"JavaScriptMetadataProvider")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new JavaScriptMetadataProvider"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iconfiguration"},(0,i.kt)("em",{parentName:"a"},"IConfiguration")),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.javascriptmetadataprovider"},(0,i.kt)("em",{parentName:"a"},"JavaScriptMetadataProvider"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.iconfiguration"},(0,i.kt)("em",{parentName:"a"},"IConfiguration")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.javascriptmetadataprovider"},(0,i.kt)("em",{parentName:"a"},"JavaScriptMetadataProvider"))),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/core/src/metadata/MetadataProvider.ts#L9"},"packages/core/src/metadata/MetadataProvider.ts:9")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"loadentitymetadata"},"loadEntityMetadata"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"loadEntityMetadata"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"meta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/core/src/metadata/JavaScriptMetadataProvider.ts#L11"},"packages/core/src/metadata/JavaScriptMetadataProvider.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loadfromcache"},"loadFromCache"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"loadFromCache"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"cache"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">","): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Re-hydrates missing attributes like ",(0,i.kt)("inlineCode",{parentName:"p"},"onUpdate")," (functions are lost when caching to JSON)"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"meta")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cache")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymetadata"},(0,i.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/core/src/metadata/JavaScriptMetadataProvider.ts#L28"},"packages/core/src/metadata/JavaScriptMetadataProvider.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"usecache"},"useCache"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useCache"),"(): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/core/src/metadata/MetadataProvider.ts#L19"},"packages/core/src/metadata/MetadataProvider.ts:19")))}l.isMDXComponent=!0}}]);