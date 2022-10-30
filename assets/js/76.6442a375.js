(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{389:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"package-json-中的类型和新扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-json-中的类型和新扩展"}},[s._v("#")]),s._v(" "),t("code",[s._v("package.json")]),s._v(" 中的类型和新扩展")]),s._v(" "),t("h4",{attrs:{id:"package-json-中的类型和新扩展-type-in-package-json-and-new-extensions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-json-中的类型和新扩展-type-in-package-json-and-new-extensions"}},[s._v("#")]),s._v(" "),t("code",[s._v("package.json")]),s._v(" 中的类型和新扩展（"),t("code",[s._v("type")]),s._v(" in "),t("code",[s._v("package.json")]),s._v(" and New Extensions）")]),s._v(" "),t("br"),s._v(" "),t("p",[s._v("Node.js 在 "),t("strong",[s._v("package.json")]),s._v(" 中支持名为 "),t("code",[s._v("type")]),s._v(" 的 "),t("a",{attrs:{href:"https://nodejs.org/api/packages.html#packages_package_json_and_file_extensions",target:"_blank",rel:"noopener noreferrer"}},[s._v("新设置"),t("OutboundLink")],1),s._v("。"),t("code",[s._v('"type"')]),s._v(" 可以设置为 "),t("code",[s._v('"module"')]),s._v(" 或 "),t("code",[s._v('"commonjs"')]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my-package"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"//"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"..."')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("该设置控制 "),t("code",[s._v(".js")]),s._v(" 文件是被解释为 ES 模块还是 CommonJS 模块，如果没有设置，默认为 CommonJS。当一个文件被认为是 ES 模块时，与 CommonJS 相比，有一些不同的规则起作用，如下:")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("可以使用 "),t("code",[s._v("import/export")]),s._v(" 语句和顶级 "),t("code",[s._v("await")]),s._v("。")])]),s._v(" "),t("li",[t("p",[s._v("相对导入路径需要完整的扩展(例如：我们必须写 "),t("code",[s._v('import "./foo.js"')]),s._v(" 而不是 "),t("code",[s._v('import "./foo"')]),s._v(")")])]),s._v(" "),t("li",[t("p",[s._v("导入的解析可能与 "),t("code",[s._v("node_modules")]),s._v(" 中的依赖关系不同")])]),s._v(" "),t("li",[t("p",[s._v("某些类全局值，如 "),t("code",[s._v("require()")]),s._v(" 和 "),t("code",[s._v("__dirname")]),s._v(" 不能直接使用")])]),s._v(" "),t("li",[t("p",[s._v("CommonJS 模块在某些特殊规则下被导入")])])]),s._v(" "),t("br"),s._v(" "),t("p",[s._v("覆盖 TypeScript 在这个系统中的工作方式，"),t("code",[s._v(".ts")]),s._v(" 和 "),t("code",[s._v(".tsx")]),s._v(" 文件现在以相同的方式工作。当 TypeScript 查找到一个 "),t("code",[s._v(".ts")]),s._v("、"),t("code",[s._v(".tsx")]),s._v("，"),t("code",[s._v(".js")]),s._v("、或者 "),t("code",[s._v(".jsx")]),s._v(" 文件时，它会去查找一个 "),t("code",[s._v("package.json")]),s._v(" 并查看该文件是否是一个 ES 模块，并使用该文件来确定：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("如何找到该文件导入的其他模块")])]),s._v(" "),t("li",[t("p",[s._v("以及如何转换该文件，如果产生输出")])])]),s._v(" "),t("p",[s._v("当一个 "),t("code",[s._v(".ts")]),s._v(" 文件被编译为 ES 模块时，在 "),t("code",[s._v(".js")]),s._v(" 输出中会单独保留 ECMAScript "),t("code",[s._v("import/export")]),s._v(" 语法；当它被编译为 CommonJS 模块时，它将产生与在 "),t("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#module",target:"_blank",rel:"noopener noreferrer"}},[s._v("module"),t("OutboundLink")],1),s._v(": "),t("code",[s._v("commonjs")]),s._v(" 下相同的输出。")]),s._v(" "),t("p",[s._v("这也意味着在 ES 模块和 CJS 模块的 "),t("code",[s._v(".ts")]),s._v(" 文件之间的路径解析是不同的。例如有以下代码：")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./foo.ts")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("helper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./bar.ts")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" helper "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// only works in CJS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("helper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("这段代码在 CommonJS 模块中工作，但在 ES 模块中会失败，因为相对导入路径需要使用扩展。因此，它必须重写以使用 "),t("code",[s._v("foo.ts")]),s._v(" 输出的扩展名 —— 因此 "),t("code",[s._v("bar.ts")]),s._v(" 将不得不从 "),t("code",[s._v("./foo.js")]),s._v(" 导入。")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./bar.ts")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" helper "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./foo.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// works in ESM & CJS")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("helper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("刚开始可能会觉得有点麻烦，但是像自动导入和路径补全这样的 TypeScript 工具通常会帮你完成这些工作。")]),s._v(" "),t("p",[s._v("另外要提到的一点是，这也适用于 "),t("code",[s._v(".d.ts")]),s._v(" 文件。当 TypeScript 在包中找到一个 "),t("code",[s._v(".d.ts")]),s._v(" 文件时，它是被视为 ESM 文件还是 CommonJS 文件取决于包含的包。")])])}),[],!1,null,null,null);t.default=e.exports}}]);