(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{1052:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1053:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1060:function(e,t,n){"use strict";var r=n(0),a=n(1061);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1061:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},1064:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1060),i=n(1053),c=n(58),l=n.n(c),s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,d=e.values,u=e.groupId,b=e.className,m=Object(o.a)(),f=m.tabGroupChoices,y=m.setTabGroupChoices,h=Object(r.useState)(c),O=h[0],g=h[1],j=r.Children.toArray(e.children),k=[];if(null!=u){var w=f[u];null!=w&&w!==O&&d.some((function(e){return e.value===w}))&&g(w)}var v=function(e){var t=e.target,n=k.indexOf(t),r=j[n].props.value;g(r),null!=u&&y(u,r)},N=function(e){var t,n;switch(e.keyCode){case p:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case s:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:v,onClick:v},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},1065:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},529:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(1052)),i=n(1064),c=n(1065),l={title:"Entity References",sidebar_label:"Entity References and Reference<T> Wrapper"},s={unversionedId:"entity-references",id:"entity-references",isDocsHomePage:!1,title:"Entity References",description:"Every single entity relation is mapped to an entity reference. Reference is an entity that has",source:"@site/docs/entity-references.md",slug:"/entity-references",permalink:"/docs/next/entity-references",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/entity-references.md",version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1614758315,sidebar_label:"Entity References and Reference<T> Wrapper",sidebar:"docs",previous:{title:"Identity Map and Request Context",permalink:"/docs/next/identity-map"},next:{title:"Collections",permalink:"/docs/next/collections"}},p=[{value:"Better Type-safety with <code>Reference&lt;T&gt;</code> Wrapper",id:"better-type-safety-with-referencet-wrapper",children:[{value:"Assigning to Reference Properties",id:"assigning-to-reference-properties",children:[]},{value:"What is IdentifiedReference?",id:"what-is-identifiedreference",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Every single entity relation is mapped to an entity reference. Reference is an entity that has\nonly its identifier. This reference is stored in identity map so you will get the same object\nreference when fetching the same document from database."),Object(o.b)("p",null,"You can call ",Object(o.b)("inlineCode",{parentName:"p"},"await wrap(entity).init()")," to initialize the entity. This will trigger database call\nand populate itself, keeping the same reference in identity map. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const author = orm.em.getReference('...id...');\nconsole.log(author.id); // accessing the id will not trigger any db call\nconsole.log(author.isInitialized()); // false\nconsole.log(author.name); // undefined\n\nawait wrap(author).init(); // this will trigger db call\nconsole.log(author.isInitialized()); // true\nconsole.log(author.name); // defined\n")),Object(o.b)("h2",{id:"better-type-safety-with-referencet-wrapper"},"Better Type-safety with ",Object(o.b)("inlineCode",{parentName:"h2"},"Reference<T>")," Wrapper"),Object(o.b)("p",null,"When you define ",Object(o.b)("inlineCode",{parentName:"p"},"@ManyToOne")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@OneToOne")," properties on your entity, TypeScript compiler\nwill think that desired entities are always loaded:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  author!: Author;\n\n  constructor(author: Author) {\n    this.author = author;\n  }\n\n}\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Author); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.name); // undefined as `Author` is not loaded yet\n")),Object(o.b)("p",null,"You can overcome this issue by using the ",Object(o.b)("inlineCode",{parentName:"p"},"Reference<T>")," wrapper. It simply wraps the entity,\ndefining ",Object(o.b)("inlineCode",{parentName:"p"},"load(): Promise<T>")," method that will first lazy load the association if not already\navailable. You can also use ",Object(o.b)("inlineCode",{parentName:"p"},"unwrap(): T")," method to access the underlying entity without loading\nit."),Object(o.b)("p",null,"You can also use ",Object(o.b)("inlineCode",{parentName:"p"},"get<K extends keyof T>(prop: K): Promise<T[K]>")," helper, that will call ",Object(o.b)("inlineCode",{parentName:"p"},"load()"),"\nfor you, making sure the entity is initialized first, then returning the value of given property\ndirectly. "),Object(o.b)(i.a,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"reflect-metadata",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"import { Entity, IdentifiedReference, ManyToOne, PrimaryKey, Reference } from '@mikro-orm/core';\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne(() => Author, { wrappedReference: true })\n  author: IdentifiedReference<Author>;\n\n  constructor(author: Author) {\n    this.author = Reference.create(author);\n  }\n\n}\n"))),Object(o.b)(c.a,{value:"ts-morph",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"import { Entity, IdentifiedReference, ManyToOne, PrimaryKey, Reference } from '@mikro-orm/core';\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  author: IdentifiedReference<Author>;\n\n  constructor(author: Author) {\n    this.author = Reference.create(author);\n  }\n\n}\n"))),Object(o.b)(c.a,{value:"entity-schema",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"export interface IBook {\n  id: number;\n  author: IdentifiedReference<Author>;\n}\n\nexport const Book = new EntitySchema<IBook>({\n  name: 'Book',\n  properties: {\n    id: { type: Number, primary: true },\n    author: { entity: () => Author, wrappedReference: true },\n  },\n});\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Reference); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.name); // type error, there is no `name` property\nconsole.log(book.author.unwrap().name); // undefined as author is not loaded\nconsole.log((await book.author.load('name'))); // ok, loading the author first\nconsole.log((await book.author.load()).name); // ok, author already loaded\nconsole.log(book.author.unwrap().name); // ok, author already loaded\n")),Object(o.b)("p",null,"There are also ",Object(o.b)("inlineCode",{parentName:"p"},"getEntity()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"getProperty()")," methods that are synchronous getters,\nthat will first check if the wrapped entity is initialized, and if not, it will throw\nand error."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Reference); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.getEntity()); // Error: Reference<Author> 123 not initialized\nconsole.log(book.author.getProperty('name')); // Error: Reference<Author> 123 not initialized\nconsole.log((await book.author.load('name'))); // ok, loading the author first\nconsole.log(book.author.getProperty('name')); // ok, author already loaded\n")),Object(o.b)("p",null,"If you use different metadata provider than ",Object(o.b)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),"\n(e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"ReflectMetadataProvider"),"), you will also need to explicitly set ",Object(o.b)("inlineCode",{parentName:"p"},"wrappedReference"),"\nparameter:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@ManyToOne(() => Author, { wrappedReference: true })\nauthor!: IdentifiedReference<Author>;\n")),Object(o.b)("h3",{id:"assigning-to-reference-properties"},"Assigning to Reference Properties"),Object(o.b)("p",null,"When you define the property as ",Object(o.b)("inlineCode",{parentName:"p"},"Reference")," wrapper, you will need to assign the ",Object(o.b)("inlineCode",{parentName:"p"},"Reference"),"\nto it instead of the entity. You can create it via ",Object(o.b)("inlineCode",{parentName:"p"},"Reference.create()")," factory, or use ",Object(o.b)("inlineCode",{parentName:"p"},"wrapped"),"\nparameter of ",Object(o.b)("inlineCode",{parentName:"p"},"em.getReference()"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nconst repo = orm.em.getRepository(Author);\n\nbook.author = repo.getReference(2, true);\n\n// same as:\nbook.author = Reference.create(repo.getReference(2));\nawait orm.em.flush();\n")),Object(o.b)("p",null,"Another way is to use ",Object(o.b)("inlineCode",{parentName:"p"},"toReference()")," method available as part of\n",Object(o.b)("a",{parentName:"p",href:"/docs/next/entity-helper#wrappedentity-and-wrap-helper"},Object(o.b)("inlineCode",{parentName:"a"},"WrappedEntity")," interface"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const author = new Author(...)\nbook.author = wrap(author).toReference();\n")),Object(o.b)("p",null,"If the reference already exist, you can also re-assign to it via ",Object(o.b)("inlineCode",{parentName:"p"},"set()")," method:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"book.author.set(new Author(...));\n")),Object(o.b)("h3",{id:"what-is-identifiedreference"},"What is IdentifiedReference?"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"IdentifiedReference")," is an intersection type that adds primary key property to the ",Object(o.b)("inlineCode",{parentName:"p"},"Reference"),"\ninterface. It allows to get the primary key from ",Object(o.b)("inlineCode",{parentName:"p"},"Reference")," instance directly."),Object(o.b)("p",null,"By default, we try to detect the PK by checking if a property with a known name exists.\nWe check for those in order: ",Object(o.b)("inlineCode",{parentName:"p"},"_id"),", ",Object(o.b)("inlineCode",{parentName:"p"},"uuid"),", ",Object(o.b)("inlineCode",{parentName:"p"},"id")," - with a way to manually set the property\nname via ",Object(o.b)("inlineCode",{parentName:"p"},"PrimaryKeyProp")," symbol (",Object(o.b)("inlineCode",{parentName:"p"},"[PrimaryKeyProp]?: 'foo';"),"). "),Object(o.b)("p",null,"We can also override this via second generic type argument."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.id); // ok, returns the PK\n")),Object(o.b)("p",null,"You can also have non-standard primary key:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"author: IdentifiedReference<Author, 'myPrimaryKey'>;\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.myPrimaryKey); // ok, returns the PK\n")),Object(o.b)("p",null,"For MongoDB, defined the PK generic type argument as ",Object(o.b)("inlineCode",{parentName:"p"},"'id' | '_id'")," to access both ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"ObjectId")," PK values:"),Object(o.b)(i.a,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"reflect-metadata",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @SerializedPrimaryKey()\n  id!: string;\n\n  @ManyToOne(() => Author, { wrappedReference: true })\n  author!: IdentifiedReference<Author, 'id' | '_id'>;\n\n}\n"))),Object(o.b)(c.a,{value:"ts-morph",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @SerializedPrimaryKey()\n  id!: string;\n\n  @ManyToOne()\n  author!: IdentifiedReference<Author, 'id' | '_id'>;\n\n}\n"))),Object(o.b)(c.a,{value:"entity-schema",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"export interface IBook {\n  _id: ObjectId;\n  id: string;\n  author: IdentifiedReference<IAuthor, 'id' | '_id'>;\n}\n\nexport const Book = new EntitySchema<IBook>({\n  name: 'Book',\n  properties: {\n    _id: { type: 'ObjectId', primary: true },\n    id: { type: String, serializedPrimaryKey: true },\n    author: { entity: 'Author', wrappedReference: true },\n  },\n});\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.id); // ok, returns string PK\nconsole.log(book.author._id); // ok, returns ObjectId PK\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"As opposed to ",Object(o.b)("inlineCode",{parentName:"p"},"EntityHelper.init()")," which always refreshes the entity, ",Object(o.b)("inlineCode",{parentName:"p"},"Reference.load()"),"\nmethod will query the database only if the entity is not already loaded in Identity Map. ")))}u.isMDXComponent=!0}}]);