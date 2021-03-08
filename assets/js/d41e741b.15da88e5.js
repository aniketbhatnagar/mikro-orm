(window.webpackJsonp=window.webpackJsonp||[]).push([[797],{1052:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},870:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(1052)),l={title:"Filters"},o={unversionedId:"filters",id:"version-4.3/filters",isDocsHomePage:!1,title:"Filters",description:"MikroORM has the ability to pre-define filter criteria and attach those filters",source:"@site/versioned_docs/version-4.3/filters.md",slug:"/filters",permalink:"/docs/4.3/filters",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/filters.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1615189969,sidebar:"version-4.3/docs",previous:{title:"Cascading persist, merge and remove",permalink:"/docs/4.3/cascading"},next:{title:"Deployment",permalink:"/docs/4.3/deployment"}},s=[{value:"Properties of filter",id:"properties-of-filter",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Filters without parameters",id:"filters-without-parameters",children:[]}]},{value:"Global filters",id:"global-filters",children:[]},{value:"Using filters",id:"using-filters",children:[]},{value:"Filters and populating of relationships",id:"filters-and-populating-of-relationships",children:[]},{value:"Naming of filters",id:"naming-of-filters",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"MikroORM has the ability to pre-define filter criteria and attach those filters\nto given entities. The application can then decide at runtime whether certain\nfilters should be enabled and what their parameter values should be. Filters\ncan be used like database views, but they are parameterized inside the application."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Filter can be defined at the entity level, dynamically via EM (global filters)\nor in the ORM configuration.")),Object(i.b)("p",null,"Filters are applied to those methods of ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager"),": ",Object(i.b)("inlineCode",{parentName:"p"},"find()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"findOne()"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"findAndCount()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"findOneOrFail()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"count()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"nativeUpdate()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"nativeDelete()"),". "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"cond")," parameter can be a callback, possibly asynchronous.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\n@Filter({ name: 'expensive', cond: { price: { $gt: 1000 } } })\n@Filter({ name: 'long', cond: { 'length(text)': { $gt: 10000 } } })\n@Filter({ name: 'hasAuthor', cond: { author: { $ne: null } }, default: true })\n@Filter({ name: 'writtenBy', cond: args => ({ author: { name: args.name } }) })\nexport class Book {\n  ...\n}\n\nconst books1 = await orm.em.find(Book, {}, {\n  filters: ['long', 'expensive'],\n});\nconst books2 = await orm.em.find(Book, {}, {\n  filters: { hasAuthor: false, long: true, writtenBy: { name: 'God' } },\n});\n")),Object(i.b)("h2",{id:"properties-of-filter"},"Properties of filter"),Object(i.b)("p",null,"There are three parameters you can use:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," - can be used to enable a filter on the query can also used to pass a parameter"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cond")," - is the condition that should be added to the query when the filter is enabled. This can be a callback, even async"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"default")," - indicates if the filter is enabled by default on the query")),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"You can define the ",Object(i.b)("inlineCode",{parentName:"p"},"cond")," dynamically as a callback. This callback can be also\nasynchronous. It will get two arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"args")," - dictionary of parameters provided by user"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type")," - type of operation that is being filtered, one of ",Object(i.b)("inlineCode",{parentName:"li"},"'read'"),", ",Object(i.b)("inlineCode",{parentName:"li"},"'update'"),", ",Object(i.b)("inlineCode",{parentName:"li"},"'delete'"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\n@Filter({ name: 'writtenBy', cond: async (args, type) => {\n  if (type === 'update') {\n    return {}; // do not apply when updating\n  }\n\n  return { author: { name: args.name } };\n} })\nexport class Book {\n  ...\n}\n\nconst books = await orm.em.find(Book, {}, {\n  filters: { writtenBy: { name: 'God' } },\n});\n")),Object(i.b)("h3",{id:"filters-without-parameters"},"Filters without parameters"),Object(i.b)("p",null,"If we want to have a filter condition that do not need arguments, but we want\nto access the ",Object(i.b)("inlineCode",{parentName:"p"},"type")," parameter, we will need to explicitly set ",Object(i.b)("inlineCode",{parentName:"p"},"args: false"),",\notherwise error will be raised due to missing parameters:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"@Filter({\n  name: 'withoutParams',\n  cond(_, type) {\n    return { ... };\n  },\n  args: false,\n  default: true,\n})\n")),Object(i.b)("h2",{id:"global-filters"},"Global filters"),Object(i.b)("p",null,"We can also register filters dynamically via ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager")," API. We call such filters\nglobal. They are enabled by default (unless disabled via last parameter in ",Object(i.b)("inlineCode",{parentName:"p"},"addFilter()"),"\nmethod), and applied to all entities. You can limit the global filter to only specified\nentities. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Filters as well as filter params set on the EM will be copied to all its forks.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"// bound to entity, enabled by default\nem.addFilter('writtenBy', args => ({ author: args.id }), Book);\n\n// global, enabled by default, for all entities\nem.addFilter('tenant', args => { ... });\n\n// global, enabled by default, for only specified entities\nem.addFilter('tenant', args => { ... }, [Author, Book]);\n...\n\n// set params (probably in some middleware)\nem.setFilterParams('tenant', { tenantId: 123 });\nem.setFilterParams('writtenBy', { id: 321 });\n")),Object(i.b)("p",null,"Global filters can be also registered via ORM configuration:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"MikroORM.init({\n  filters: { tenant: { cond: args => ({ tenant: args.tenant }), entity: ['Author', 'User'] } },\n  ...\n})\n")),Object(i.b)("h2",{id:"using-filters"},"Using filters"),Object(i.b)("p",null,"We can control what filters will be applied via ",Object(i.b)("inlineCode",{parentName:"p"},"filter")," parameter in ",Object(i.b)("inlineCode",{parentName:"p"},"FindOptions"),".\nWe can either provide an array of names of filters you want to enable, or options\nobject, where we can also disable a filter (that was enabled by default), or pass some\nparameters to those that are expecting them."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"By passing ",Object(i.b)("inlineCode",{parentName:"p"},"filters: false")," we can also disable all the filters for given call. ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"em.find(Book, {}); // same as `{ tenantId: 123 }`\nem.find(Book, {}, { filters: ['writtenBy'] }); // same as `{ author: 321, tenantId: 123 }`\nem.find(Book, {}, { filters: { tenant: false } }); // disabled tenant filter, so truly `{}`\nem.find(Book, {}, { filters: false }); // disabled all filters, so truly `{}`\n")),Object(i.b)("h2",{id:"filters-and-populating-of-relationships"},"Filters and populating of relationships"),Object(i.b)("p",null,"When populating relationships, filters will be applied only to the root entity of\ngiven query, but not to those that are auto-joined. On the other hand, this means that\nwhen you use the default loading strategy - ",Object(i.b)("inlineCode",{parentName:"p"},"LoadStrategy.SELECT_IN")," - filters will\nbe applied to every entity populated this way, as the child entities will become\nroot entities in their respective load calls."),Object(i.b)("h2",{id:"naming-of-filters"},"Naming of filters"),Object(i.b)("p",null,"When toggling filters via ",Object(i.b)("inlineCode",{parentName:"p"},"FindOptions"),", we do not care about the entity name. This\nmeans that when you have multiple filters defined on different entities, but with\nthe same name, they will be controlled via single toggle in the ",Object(i.b)("inlineCode",{parentName:"p"},"FindOptions"),". "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\n@Filter({ name: 'tenant', cond: args => ({ tenant: args.tenant }) })\nexport class Author {\n  ...\n}\n\n@Entity()\n@Filter({ name: 'tenant', cond: args => ({ tenant: args.tenant }) })\nexport class Book {\n  ...\n}\n\n// this will apply the tenant filter to both Author and Book entities (with SELECT_IN loading strategy)\nconst authors = await orm.em.find(Author, {}, {\n  populate: ['books'],\n  filters: { tenant: 123 },\n});\n")))}p.isMDXComponent=!0}}]);