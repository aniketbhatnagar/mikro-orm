(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45862],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),i=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=i(a),d=n,N=c["".concat(m,".").concat(d)]||c[d]||k[d]||p;return a?r.createElement(N,l(l({ref:t},s),{},{components:a})):r.createElement(N,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<p;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},46654:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m},default:function(){return s}});var r=a(74034),n=a(79973),p=(a(67294),a(3905)),l={id:"core.decimaltype",title:"Class: DecimalType",sidebar_label:"DecimalType",custom_edit_url:null},o={unversionedId:"api/classes/core.decimaltype",id:"api/classes/core.decimaltype",isDocsHomePage:!1,title:"Class: DecimalType",description:"core.DecimalType",source:"@site/docs/api/classes/core.decimaltype.md",sourceDirName:"api/classes",slug:"/api/classes/core.decimaltype",permalink:"/docs/next/api/classes/core.decimaltype",editUrl:null,version:"current",sidebar_label:"DecimalType",frontMatter:{id:"core.decimaltype",title:"Class: DecimalType",sidebar_label:"DecimalType",custom_edit_url:null},sidebar:"API",previous:{title:"Class: DeadlockException",permalink:"/docs/next/api/classes/core.deadlockexception"},next:{title:"Class: DoubleType",permalink:"/docs/next/api/classes/core.doubletype"}},m=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToDatabaseValueSQL",id:"converttodatabasevaluesql",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"convertToJSValueSQL",id:"converttojsvaluesql",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],i={toc:m};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".DecimalType"),(0,p.kt)("p",null,"Type that maps an SQL DECIMAL to a JS string."),(0,p.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},(0,p.kt)("em",{parentName:"a"},"Type")),"<string ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," undefined, string ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," undefined",">"),(0,p.kt)("p",{parentName:"li"},"\u21b3 ",(0,p.kt)("strong",{parentName:"p"},"DecimalType")))),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new DecimalType"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.decimaltype"},(0,p.kt)("em",{parentName:"a"},"DecimalType"))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.decimaltype"},(0,p.kt)("em",{parentName:"a"},"DecimalType"))),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"compareastype"},"compareAsType"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"compareAsType"),"(): ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Overrides: ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/core/src/types/DecimalType.ts#L14"},"packages/core/src/types/DecimalType.ts:14")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"platform"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"fromQuery?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),"): ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Converts a value from its JS representation to its database representation of this type."),(0,p.kt)("h4",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"value")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"platform")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"fromQuery?")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/core/src/types/Type.ts#L11"},"packages/core/src/types/Type.ts:11")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"converttodatabasevaluesql"},"convertToDatabaseValueSQL"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"convertToDatabaseValueSQL"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"platform"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")),"): ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Converts a value from its JS representation to its database representation of this type."),(0,p.kt)("h4",{id:"parameters-1"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"key")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"platform")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/core/src/types/Type.ts#L25"},"packages/core/src/types/Type.ts:25")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"converttojsvalue"},"convertToJSValue"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"convertToJSValue"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"platform"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")),"): ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Converts a value from its database representation to its JS representation of this type."),(0,p.kt)("h4",{id:"parameters-2"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"value")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"platform")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/core/src/types/Type.ts#L18"},"packages/core/src/types/Type.ts:18")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"converttojsvaluesql"},"convertToJSValueSQL"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,p.kt)("strong",{parentName:"p"},"convertToJSValueSQL"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"key"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"platform"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")),"): ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Modifies the SQL expression (identifier, parameter) to convert to a JS value."),(0,p.kt)("h4",{id:"parameters-3"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"key")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"platform")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/core/src/types/Type.ts#L30"},"packages/core/src/types/Type.ts:30")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getcolumntype"},"getColumnType"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getColumnType"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"platform"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")),"): ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("h4",{id:"parameters-4"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"prop")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"platform")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Overrides: ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/core/src/types/DecimalType.ts#L10"},"packages/core/src/types/DecimalType.ts:10")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"tojson"},"toJSON"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"toJSON"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"platform"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")),"): ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default uses the runtime value."),(0,p.kt)("h4",{id:"parameters-5"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"value")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"platform")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/core/src/types/Type.ts#L44"},"packages/core/src/types/Type.ts:44")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"gettype"},"getType"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,p.kt)("strong",{parentName:"p"},"getType"),"<JSType, DBType",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"cls"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#constructor"},(0,p.kt)("em",{parentName:"a"},"Constructor")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},(0,p.kt)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">","): ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},(0,p.kt)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),(0,p.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"JSType")),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"DBType")),(0,p.kt)("td",{parentName:"tr",align:"left"},"JSType")))),(0,p.kt)("h4",{id:"parameters-6"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"cls")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#constructor"},(0,p.kt)("em",{parentName:"a"},"Constructor")),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.type"},(0,p.kt)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},(0,p.kt)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},"Type")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7379f2b/packages/core/src/types/Type.ts#L55"},"packages/core/src/types/Type.ts:55")))}s.isMDXComponent=!0}}]);