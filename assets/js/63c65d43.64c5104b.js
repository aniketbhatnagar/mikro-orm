(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33878],{3905:function(e,o,t){"use strict";t.d(o,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},c=function(e){var o=p(e.components);return n.createElement(s.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,i(i({ref:o},c),{},{components:t})):n.createElement(f,i({ref:o},c))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57319:function(e,o,t){"use strict";t.r(o),t.d(o,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var n=t(74034),r=t(79973),a=(t(67294),t(3905)),i={title:"Propagation"},l={unversionedId:"propagation",id:"version-4.0/propagation",isDocsHomePage:!1,title:"Propagation",description:"By default MikroORM will propagate all changes made to one side of bi-directional relations",source:"@site/versioned_docs/version-4.0/propagation.md",sourceDirName:".",slug:"/propagation",permalink:"/docs/4.0/propagation",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.0/propagation.md",version:"4.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1620631479,formattedLastUpdatedAt:"5/10/2021",frontMatter:{title:"Propagation"},sidebar:"version-4.0/docs",previous:{title:"Smart Query Conditions",permalink:"/docs/4.0/query-conditions"},next:{title:"Serializing",permalink:"/docs/4.0/serializing"}},s=[{value:"Propagation of Collection&#39;s add() and remove() operations",id:"propagation-of-collections-add-and-remove-operations",children:[]}],p={toc:s};function c(e){var o=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default MikroORM will propagate all changes made to one side of bi-directional relations\nto the other side, keeping them in sync. This works for all relations, including M:1 and 1:1.\nAs part of the discovery process, all M:1 and 1:1 properties are re-defined as getter/setter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = new Author(...);\nconst book = new Book(...);\nbook.author = author;\nconsole.log(author.books.contains(book)); // true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can disable this behaviour via ",(0,a.kt)("inlineCode",{parentName:"p"},"propagateToOneOwner")," option.")),(0,a.kt)("h2",{id:"propagation-of-collections-add-and-remove-operations"},"Propagation of Collection's add() and remove() operations"),(0,a.kt)("p",null,"When you use one of ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection.add()")," method, the item is added to given collection,\nand this action is also propagated to its counterpart. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// one to many\nconst author = new Author(...);\nconst book = new Book(...);\n\nauthor.books.add(book);\nconsole.log(book.author); // author will be set thanks to the propagation\n")),(0,a.kt)("p",null,"For M:N this works in both ways, either from owning side, or from inverse side. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// many to many works both from owning side and from inverse side\nconst book = new Book(...);\nconst tag = new BookTag(...);\n\nbook.tags.add(tag);\nconsole.log(tag.books.contains(book)); // true\n\ntag.books.add(book);\nconsole.log(book.tags.contains(tag)); // true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Collections on both sides have to be initialized, otherwise propagation won't work.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Although this propagation works also for M:N inverse side, you should always use owning\nside to manipulate the collection.")),(0,a.kt)("p",null,"Same applies for ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection.remove()"),"."))}c.isMDXComponent=!0}}]);