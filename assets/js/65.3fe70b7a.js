(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{377:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"子类型检查-children-type-checking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子类型检查-children-type-checking"}},[s._v("#")]),s._v(" 子类型检查（Children Type Checking）")]),s._v(" "),t("p",[s._v("在 TypeScript 2.3 中，TS 引入了子类型检查（type checking of children）。"),t("code",[s._v("children")]),s._v(" 是元素属性类型中的一个特殊属性，其中子 "),t("code",[s._v("JSXExpression")]),s._v(" 被插入属性中。与 TS 如何使用 "),t("code",[s._v("JSX.ElementAttributesProperty")]),s._v(" 来确定 "),t("code",[s._v("props")]),s._v(" 的名称类似，TS 使用 "),t("code",[s._v("JSX.ElementChildrenAttribute")]),s._v(" 来确定这些 "),t("code",[s._v("props")]),s._v(" 中的子元素的名称。"),t("code",[s._v("JSX.ElementChildrenAttribute")]),s._v(" 应该用单个属性声明。")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSX")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ElementChildrenAttribute")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    children"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// specify children name to use")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Hello"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Hello"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  World\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("CustomComp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("children"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CustomComp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Hello World"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is just a JS expression..."')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("CustomComp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ul",[t("li",[s._v("您可以像指定其他属性一样指定子属性的类型。这将覆盖默认类型，例如: 如果你使用 "),t("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[s._v("React typings")]),t("OutboundLink")],1),s._v("。")])]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PropsType")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  children"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Element\n  name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Component")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("React")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Component"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PropsType"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("children"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// OK")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Component name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Hello World"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Component"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Error: children is of type JSX.Element not array of JSX.Element")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// (children 是类型 JSX.Element 而不是数组 JSX.Element)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Component name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bar"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Hello World"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Hello World"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Component"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Error: children is of type JSX.Element not array of JSX.Element or string.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// (children的类型是 JSX.Element 而不是 JSX.Element 的数组或 string。)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Component name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"baz"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Hello"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  World\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Component"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);