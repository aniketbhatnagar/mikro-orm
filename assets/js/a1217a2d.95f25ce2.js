(window.webpackJsonp=window.webpackJsonp||[]).push([[636],{1110:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return t?o.a.createElement(m,c(c({ref:n},s),{},{components:t})):o.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},709:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(8),r=(t(0),t(1110)),i={title:"Cascading persist, merge and remove",sidebar_label:"Cascading"},c={unversionedId:"cascading",id:"cascading",isDocsHomePage:!1,title:"Cascading persist, merge and remove",description:"From v4.2, cascade merging is no longer configurable (and is kept enabled for all relations).",source:"@site/docs/cascading.md",slug:"/cascading",permalink:"/docs/next/cascading",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/cascading.md",version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1617085817,formattedLastUpdatedAt:"3/30/2021",sidebar_label:"Cascading",sidebar:"docs",previous:{title:"Inheritance Mapping",permalink:"/docs/next/inheritance-mapping"},next:{title:"Filters",permalink:"/docs/next/filters"}},l=[{value:"Cascade persist",id:"cascade-persist",children:[]},{value:"Cascade remove",id:"cascade-remove",children:[]},{value:"Orphan removal",id:"orphan-removal",children:[]},{value:"Declarative Referential Integrity",id:"declarative-referential-integrity",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"From v4.2, cascade merging is no longer configurable (and is kept enabled for all relations).")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This section is about application level cascading. For that to work, we need\nto have relations populated. ")),Object(r.b)("p",null,"When persisting or removing entity, all your references are by default cascade persisted.\nThis means that by persisting any entity, ORM will automatically persist all of its\nassociations. "),Object(r.b)("p",null,"You can control this behaviour via ",Object(r.b)("inlineCode",{parentName:"p"},"cascade")," attribute of ",Object(r.b)("inlineCode",{parentName:"p"},"@ManyToOne"),", ",Object(r.b)("inlineCode",{parentName:"p"},"@ManyToMany"),",\n",Object(r.b)("inlineCode",{parentName:"p"},"@OneToMany")," and ",Object(r.b)("inlineCode",{parentName:"p"},"@OneToOne")," fields."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"New entities without primary key will be always persisted, regardless of ",Object(r.b)("inlineCode",{parentName:"p"},"cascade")," value. ")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"// cascade persist is default value\n@OneToMany({ entity: () => Book, mappedBy: 'author' })\nbooks = new Collection<Book>(this);\n\n// same as previous definition\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.PERSIST] })\nbooks = new Collection<Book>(this);\n\n// only cascade remove\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.REMOVE] })\nbooks = new Collection<Book>(this);\n\n// no cascade\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [] })\nbooks = new Collection<Book>(this);\n\n// cascade all (persist and remove)\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.ALL] })\nbooks = new Collection<Book>(this);\n\n// same as previous definition\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.PERSIST, Cascade.REMOVE] })\nbooks = new Collection<Book>(this);\n")),Object(r.b)("h2",{id:"cascade-persist"},"Cascade persist"),Object(r.b)("p",null,"Here is example of how cascade persist works:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 'id', ['author', 'tags']);\nbook.author.name = 'Foo Bar';\nbook.tags[0].name = 'new name 1';\nbook.tags[1].name = 'new name 2';\nawait orm.em.persistAndFlush(book); // all book tags and author will be persisted too\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"When cascade persisting collections, keep in mind only fully initialized collections\nwill be cascade persisted.")),Object(r.b)("h2",{id:"cascade-remove"},"Cascade remove"),Object(r.b)("p",null,"Cascade remove works same way as cascade persist, just for removing entities. Following\nexample assumes that ",Object(r.b)("inlineCode",{parentName:"p"},"Book.publisher")," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"Cascade.REMOVE"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note that cascade remove for collections can be inefficient as it will fire 1 query\nfor each entity in collection.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"await orm.em.remove(book).flush(); // this will also remove book.publisher\n")),Object(r.b)("p",null,"Keep in mind that cascade remove ",Object(r.b)("strong",{parentName:"p"},"can be dangerous")," when used on ",Object(r.b)("inlineCode",{parentName:"p"},"@ManyToOne")," fields,\nas cascade removed entity can stay referenced in another entities that were not removed."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const publisher = new Publisher(...);\n// all books with same publisher\nbook1.publisher = book2.publisher = book3.publisher = publisher;\nawait orm.em.remove(book1).flush(); // this will remove book1 and its publisher\n\n// but we still have reference to removed publisher here\nconsole.log(book2.publisher, book3.publisher);\n")),Object(r.b)("h2",{id:"orphan-removal"},"Orphan removal"),Object(r.b)("p",null,"In addition to ",Object(r.b)("inlineCode",{parentName:"p"},"Cascade.REMOVE"),", there is also additional and more aggressive remove\ncascading mode which can be specified using the ",Object(r.b)("inlineCode",{parentName:"p"},"orphanRemoval")," flag of the ",Object(r.b)("inlineCode",{parentName:"p"},"@OneToOne"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"@OneToMany")," properties:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Author {\n\n  @OneToMany({ entity: () => Book, mappedBy: 'author', orphanRemoval: true })\n  books = new Collection<Book>(this);\n\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"orphanRemoval")," flag behaves just like ",Object(r.b)("inlineCode",{parentName:"p"},"Cascade.REMOVE")," for remove operation, so specifying\nboth is redundant.")),Object(r.b)("p",null,"With simple ",Object(r.b)("inlineCode",{parentName:"p"},"Cascade.REMOVE"),", you would need to remove the ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," entity to cascade\nthe operation down to all loaded ",Object(r.b)("inlineCode",{parentName:"p"},"Book"),"s. By enabling orphan removal on the collection,\n",Object(r.b)("inlineCode",{parentName:"p"},"Book"),"s will be also removed when they get disconnected from the collection (either via\n",Object(r.b)("inlineCode",{parentName:"p"},"remove()"),", or by replacing collection items via ",Object(r.b)("inlineCode",{parentName:"p"},"set()"),"):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"await author.books.set([book1, book2]); // replace whole collection\nawait author.books.remove(book1); // remove book from collection\nawait orm.em.persistAndFlush(author); // book1 will be removed, as well as all original items (before we called `set()`)\n")),Object(r.b)("p",null,"In this example, no ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," would be removed with simple ",Object(r.b)("inlineCode",{parentName:"p"},"Cascade.REMOVE")," as no remove operation\nwas executed. "),Object(r.b)("h2",{id:"declarative-referential-integrity"},"Declarative Referential Integrity"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This is only supported in SQL drivers.")),Object(r.b)("p",null,"As opposed to the application level cascading controlled by the ",Object(r.b)("inlineCode",{parentName:"p"},"cascade")," option, we can\nalso define database level referential integrity actions: ",Object(r.b)("inlineCode",{parentName:"p"},"on update")," and ",Object(r.b)("inlineCode",{parentName:"p"},"on delete"),"."),Object(r.b)("p",null,"Their values are automatically inferred from the ",Object(r.b)("inlineCode",{parentName:"p"},"cascade")," option value. You can also\ncontrol the value manually via ",Object(r.b)("inlineCode",{parentName:"p"},"onUpdateIntegrity")," and ",Object(r.b)("inlineCode",{parentName:"p"},"onDelete")," options. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @ManyToOne({ onUpdateIntegrity: 'set null', onDelete: 'cascade' })\n  author?: Author;\n\n}\n")))}p.isMDXComponent=!0}}]);