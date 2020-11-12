(window.webpackJsonp=window.webpackJsonp||[]).push([[505],{563:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(1),a=n(6),i=(n(0),n(807)),r={title:"Working with Entity Manager",sidebar_label:"Entity Manager"},s={unversionedId:"entity-manager",id:"version-4.2/entity-manager",isDocsHomePage:!1,title:"Working with Entity Manager",description:"Persist and Flush",source:"@site/versioned_docs/version-4.2/entity-manager.md",slug:"/entity-manager",permalink:"/docs/entity-manager",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/entity-manager.md",version:"4.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1605169364,sidebar_label:"Entity Manager",sidebar:"version-4.2/docs",previous:{title:"Modeling Entity Relationships",permalink:"/docs/relationships"},next:{title:"Unit of Work and Transactions",permalink:"/docs/unit-of-work"}},l=[{value:"Persist and Flush",id:"persist-and-flush",children:[]},{value:"Persisting and Cascading",id:"persisting-and-cascading",children:[]},{value:"Fetching Entities with EntityManager",id:"fetching-entities-with-entitymanager",children:[{value:"Conditions Object (<code>FilterQuery&lt;T&gt;</code>)",id:"conditions-object-filterqueryt",children:[]},{value:"Searching by referenced entity fields",id:"searching-by-referenced-entity-fields",children:[]},{value:"Fetching Partial Entities",id:"fetching-partial-entities",children:[]},{value:"Fetching Paginated Results",id:"fetching-paginated-results",children:[]},{value:"Handling Not Found Entities",id:"handling-not-found-entities",children:[]}]},{value:"Type of Fetched Entities",id:"type-of-fetched-entities",children:[]},{value:"Entity Repositories",id:"entity-repositories",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"persist-and-flush"},"Persist and Flush"),Object(i.b)("p",null,"There are 2 methods we should first describe to understand how persisting works in MikroORM:\n",Object(i.b)("inlineCode",{parentName:"p"},"em.persist()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"em.flush()"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"em.persist(entity)")," is used to mark new entities for future persisting.\nIt will make the entity managed by given ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager")," and once ",Object(i.b)("inlineCode",{parentName:"p"},"flush")," will be called, it\nwill be written to the database. "),Object(i.b)("p",null,"To understand ",Object(i.b)("inlineCode",{parentName:"p"},"flush"),", lets first define what managed entity is: An entity is managed if\nit\u2019s fetched from the database (via ",Object(i.b)("inlineCode",{parentName:"p"},"em.find()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"em.findOne()")," or via other managed entity)\nor registered as new through ",Object(i.b)("inlineCode",{parentName:"p"},"em.persist()"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"em.flush()")," will go through all managed entities, compute appropriate change sets and\nperform according database queries. As an entity loaded from database becomes managed\nautomatically, you do not have to call persist on those, and flush is enough to update\nthem."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const book = await orm.em.findOne(Book, 1);\nbook.title = 'How to persist things...';\n\n// no need to persist `book` as its already managed by the EM\nawait orm.em.flush();\n")),Object(i.b)("h2",{id:"persisting-and-cascading"},"Persisting and Cascading"),Object(i.b)("p",null,"To save entity state to database, you need to persist it. Persist takes care or deciding\nwhether to use ",Object(i.b)("inlineCode",{parentName:"p"},"insert")," or ",Object(i.b)("inlineCode",{parentName:"p"},"update")," and computes appropriate change-set. Entity references\nthat are not persisted yet (does not have identifier) will be cascade persisted automatically. "),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// use constructors in your entities for required parameters\nconst author = new Author('Jon Snow', 'snow@wall.st');\nauthor.born = new Date();\n\nconst publisher = new Publisher('7K publisher');\n\nconst book1 = new Book('My Life on The Wall, part 1', author);\nbook1.publisher = publisher;\nconst book2 = new Book('My Life on The Wall, part 2', author);\nbook2.publisher = publisher;\nconst book3 = new Book('My Life on The Wall, part 3', author);\nbook3.publisher = publisher;\n\n// just persist books, author and publisher will be automatically cascade persisted\nawait orm.em.persistAndFlush([book1, book2, book3]);\n\n// or one by one\norm.em.persist(book1);\norm.em.persist(book2);\norm.em.persist(book3); \nawait orm.em.flush(); // flush everything to database at once\n")),Object(i.b)("h2",{id:"fetching-entities-with-entitymanager"},"Fetching Entities with EntityManager"),Object(i.b)("p",null,"To fetch entities from database you can use ",Object(i.b)("inlineCode",{parentName:"p"},"find()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"findOne()")," of ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager"),": "),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const author = await orm.em.findOne(Author, '...id...');\nconst books = await orm.em.find(Book, {});\n\nfor (const author of authors) {\n  console.log(author.name); // Jon Snow\n\n  for (const book of author.books) {\n    console.log(book.title); // initialized\n    console.log(book.author.isInitialized()); // true\n    console.log(book.author.id);\n    console.log(book.author.name); // Jon Snow\n    console.log(book.publisher); // just reference\n    console.log(book.publisher.isInitialized()); // false\n    console.log(book.publisher.id);\n    console.log(book.publisher.name); // undefined\n  }\n}\n")),Object(i.b)("p",null,"To populate entity relations, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"populate")," parameter."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const books = await orm.em.find(Book, { foo: 1 }, ['author.friends']);\n")),Object(i.b)("p",null,"You can also use ",Object(i.b)("inlineCode",{parentName:"p"},"em.populate()")," helper to populate relations (or to ensure they\nare fully populated) on already loaded entities. This is also handy when loading\nentities via ",Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const authors = await orm.em.createQueryBuilder(Author).select('*').getResult();\nawait em.populate(authors, ['books.tags']);\n\n// now your Author entities will have `books` collections populated, \n// as well as they will have their `tags` collections populated.\nconsole.log(authors[0].books[0].tags[0]); // initialized BookTag\n")),Object(i.b)("h3",{id:"conditions-object-filterqueryt"},"Conditions Object (",Object(i.b)("inlineCode",{parentName:"h3"},"FilterQuery<T>"),")"),Object(i.b)("p",null,"Querying entities via conditions object (",Object(i.b)("inlineCode",{parentName:"p"},"where")," in ",Object(i.b)("inlineCode",{parentName:"p"},"em.find(Entity, where: FilterQuery<T>)"),")\nsupports many different ways:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// search by entity properties\nconst users = await orm.em.find(User, { firstName: 'John' });\n\n// for searching by reference you can use primary key directly\nconst id = 1;\nconst users = await orm.em.find(User, { organization: id });\n\n// or pass unpopulated reference (including `Reference` wrapper)\nconst ref = await orm.em.getReference(Organization, id);\nconst users = await orm.em.find(User, { organization: ref });\n\n// fully populated entities as also supported\nconst ent = await orm.em.findOne(Organization, id);\nconst users = await orm.em.find(User, { organization: ent });\n\n// complex queries with operators\nconst users = await orm.em.find(User, { $and: [{ id: { $nin: [3, 4] } }, { id: { $gt: 2 } }] });\n\n// you can also search for array of primary keys directly\nconst users = await orm.em.find(User, [1, 2, 3, 4, 5]);\n\n// and in findOne all of this works, plus you can search by single primary key\nconst user1 = await orm.em.findOne(User, 1);\n")),Object(i.b)("p",null,"As you can see in the fifth example, one can also use operators like ",Object(i.b)("inlineCode",{parentName:"p"},"$and"),", ",Object(i.b)("inlineCode",{parentName:"p"},"$or"),", ",Object(i.b)("inlineCode",{parentName:"p"},"$gte"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"$gt"),", ",Object(i.b)("inlineCode",{parentName:"p"},"$lte"),", ",Object(i.b)("inlineCode",{parentName:"p"},"$lt"),", ",Object(i.b)("inlineCode",{parentName:"p"},"$in"),", ",Object(i.b)("inlineCode",{parentName:"p"},"$nin"),", ",Object(i.b)("inlineCode",{parentName:"p"},"$eq"),", ",Object(i.b)("inlineCode",{parentName:"p"},"$ne"),", ",Object(i.b)("inlineCode",{parentName:"p"},"$like"),", ",Object(i.b)("inlineCode",{parentName:"p"},"$re"),". More about that can be found in\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/query-conditions"}),"Query Conditions")," section. "),Object(i.b)("h4",{id:"mitigating-type-instantiation-is-excessively-deep-and-possibly-infinitets2589-error"},"Mitigating ",Object(i.b)("inlineCode",{parentName:"h4"},"Type instantiation is excessively deep and possibly infinite.ts(2589)")," error"),Object(i.b)("p",null,"Sometimes you might be facing TypeScript errors caused by too complex query for it to\nproperly infer all types. Usually it can be solved by providing the type argument\nexplicitly."),Object(i.b)("p",null,"You can also opt in to use repository instead, as there the type inference should not be\nproblematic. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"As a last resort, you can always type cast the query to ",Object(i.b)("inlineCode",{parentName:"p"},"any"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const books = await orm.em.find<Book>(Book, { ... your complex query ... });\n// or\nconst books = await orm.em.getRepository(Book).find({ ... your complex query ... });\n// or\nconst books = await orm.em.find<any>(Book, { ... your complex query ... }) as Book[];\n")),Object(i.b)("p",null,"Another problem you might be facing is ",Object(i.b)("inlineCode",{parentName:"p"},"RangeError: Maximum call stack size exceeded")," error\nthrown during TypeScript compilation (usually from file ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/typescript/lib/typescript.js"),").\nThe solution to this is the same, just provide the type argument explicitly."),Object(i.b)("h3",{id:"searching-by-referenced-entity-fields"},"Searching by referenced entity fields"),Object(i.b)("p",null,"You can also search by referenced entity properties. Simply pass nested where condition like\nthis and all requested relationships will be automatically joined. Currently it will only join\nthem so you can search and sort by those. To populate entities, do not forget to pass the populate\nparameter as well. "),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// find author of a book that has tag specified by name\nconst author = await orm.em.findOne(Author, { books: { tags: { name: 'Tag name' } } });\nconsole.log(author.books.isInitialized()); // false, as it only works for query and sort\n\nconst author = await orm.em.findOne(Author, { books: { tags: { name: 'Tag name' } } }, ['books.tags']);\nconsole.log(author.books.isInitialized()); // true, because it was populated\nconsole.log(author.books[0].tags.isInitialized()); // true, because it was populated\nconsole.log(author.books[0].tags[0].isInitialized()); // true, because it was populated\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This feature is fully available only for SQL drivers. In MongoDB always you need to\nquery from the owning side - so in the example above, first load book tag by name,\nthen associated book, then the author. Another option is to denormalize the schema.  ")),Object(i.b)("h3",{id:"fetching-partial-entities"},"Fetching Partial Entities"),Object(i.b)("p",null,"When fetching single entity, you can choose to select only parts of an entity via ",Object(i.b)("inlineCode",{parentName:"p"},"options.fields"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const author = await orm.em.findOne(Author, '...', { fields: ['name', 'born'] });\nconsole.log(author.id); // PK is always selected\nconsole.log(author.name); // Jon Snow\nconsole.log(author.email); // undefined\n")),Object(i.b)("h3",{id:"fetching-paginated-results"},"Fetching Paginated Results"),Object(i.b)("p",null,"If you are going to paginate your results, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"em.findAndCount()")," that will return\ntotal count of entities before applying limit and offset."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const [authors, count] = await orm.em.findAndCount(Author, { ... }, { limit: 10, offset: 50 });\nconsole.log(authors.length); // based on limit parameter, e.g. 10\nconsole.log(count); // total count, e.g. 1327\n")),Object(i.b)("h3",{id:"handling-not-found-entities"},"Handling Not Found Entities"),Object(i.b)("p",null,"When you call ",Object(i.b)("inlineCode",{parentName:"p"},"em.findOne()")," and no entity is found based on your criteria, ",Object(i.b)("inlineCode",{parentName:"p"},"null")," will be\nreturned. If you rather have an ",Object(i.b)("inlineCode",{parentName:"p"},"Error")," instance thrown, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"em.findOneOrFail()"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const author = await orm.em.findOne(Author, { name: 'does-not-exist' });\nconsole.log(author === null); // true\n\ntry {\n  const author = await orm.em.findOneOrFail(Author, { name: 'does-not-exist' });\n  // author will be always found here\n} catch (e) {\n  console.error('Not found', e);\n}\n")),Object(i.b)("p",null,"You can customize the error either globally via ",Object(i.b)("inlineCode",{parentName:"p"},"findOneOrFailHandler")," option, or locally via\n",Object(i.b)("inlineCode",{parentName:"p"},"failHandler")," option in ",Object(i.b)("inlineCode",{parentName:"p"},"findOneOrFail")," call."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"try {\n  const author = await orm.em.findOneOrFail(Author, { name: 'does-not-exist' }, {\n    failHandler: (entityName: string, where: Record<string, any> | IPrimaryKey) => new Error(`Failed: ${entityName} in ${util.inspect(where)}`)\n  });\n} catch (e) {\n  console.error(e); // your custom error\n}\n")),Object(i.b)("h2",{id:"type-of-fetched-entities"},"Type of Fetched Entities"),Object(i.b)("p",null,"Both ",Object(i.b)("inlineCode",{parentName:"p"},"em.find")," and ",Object(i.b)("inlineCode",{parentName:"p"},"em.findOne()")," methods have generic return types.\nAll of following examples are equal and will let typescript correctly infer the entity type:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const author1 = await orm.em.findOne<Author>(Author.name, '...id...');\nconst author2 = await orm.em.findOne<Author>('Author', '...id...');\nconst author3 = await orm.em.findOne(Author, '...id...');\n")),Object(i.b)("p",null,"As the last one is the least verbose, it should be preferred. "),Object(i.b)("h2",{id:"entity-repositories"},"Entity Repositories"),Object(i.b)("p",null,"Although you can use ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager")," directly, much more convenient way is to use\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://mikro-orm.io/repositories/"}),Object(i.b)("inlineCode",{parentName:"a"},"EntityRepository")," instead"),". You can register\nyour repositories in dependency injection container like ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://inversify.io/"}),"InversifyJS"),"\nso you do not need to get them from ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager")," each time."),Object(i.b)("p",null,"For more examples, take a look at\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"}),Object(i.b)("inlineCode",{parentName:"a"},"tests/EntityManager.mongo.test.ts")),"\nor ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mysql.test.ts"}),Object(i.b)("inlineCode",{parentName:"a"},"tests/EntityManager.mysql.test.ts")),"."))}p.isMDXComponent=!0},807:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=o,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);