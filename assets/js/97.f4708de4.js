(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{410:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"分离到多个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分离到多个文件"}},[s._v("#")]),s._v(" 分离到多个文件")]),s._v(" "),t("h5",{attrs:{id:"跨文件分割-splitting-across-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨文件分割-splitting-across-files"}},[s._v("#")]),s._v(" "),t("strong",[s._v("跨文件分割（Splitting Across Files）")])]),s._v(" "),t("p",[s._v("随着应用程序的增长，我们希望将代码拆分到多个文件中，以使其更容易维护。")]),s._v(" "),t("br"),s._v(" "),t("h3",{attrs:{id:"多文件命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多文件命名空间"}},[s._v("#")]),s._v(" 多文件命名空间")]),s._v(" "),t("h5",{attrs:{id:"多文件命名空间-multi-file-namespaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多文件命名空间-multi-file-namespaces"}},[s._v("#")]),s._v(" 多文件命名空间（Multi-file namespaces）")]),s._v(" "),t("p",[s._v("现在，我们需要将 "),t("strong",[s._v("Validation")]),s._v(" 命名空间分割到多个文件中。虽然是多个不同的文件，但它们依然是同一个命名空间，并且在使用时就如同它们是在同一个文件中被定义。因为不同文件之间存在依赖关系，所以我们可以通过使用引用标签来告诉编译器文件之间的关系。")]),s._v(" "),t("p",[s._v("在这里，我们将把 "),t("code",[s._v("Validation")]),s._v(" 命名空间拆分到多个文件中。尽管这些文件是分开的，但它们都可以暴露给相同的名称空间，并且可以像是在同一个地方去定义的它们一样使用它们。因为文件之间存在依赖关系，所以我们将添加引用标记来告诉编译器文件之间的关系。")]),s._v(" "),t("blockquote",[t("p",[s._v("Validation.ts")])]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" Validation "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义并导出一个接口")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringValidator")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isAcceptable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("blockquote",[t("p",[s._v("LettersOnlyValidator.ts")])]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入 Validation 命名空间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <reference path="Validation.ts" />')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" Validation "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" lettersRegexp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^[A-Za-z]+$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义并导出字符串字母验证类")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LettersOnlyValidator")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringValidator")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isAcceptable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" lettersRegexp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("blockquote",[t("p",[s._v("ZipCodeValidator.ts")])]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入 validation 命名空间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <reference path="Validation.ts" />')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" Validation "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" numberRegexp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^[0-9]+$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义并导出字符串数字验证类")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ZipCodeValidator")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringValidator")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isAcceptable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" numberRegexp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("blockquote",[t("p",[s._v("Test.ts")])]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入命名空间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <reference path="Validation.ts" />')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <reference path="LettersOnlyValidator.ts" />')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <reference path="ZipCodeValidator.ts" />')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Some samples to try (一些可以尝试的样本)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" strings "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"98052"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"101"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Validators to use（使用验证器）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" validators"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Validation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("StringValidator "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nvalidators"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ZIP code"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Validation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ZipCodeValidator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nvalidators"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Letters only"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Validation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("LettersOnlyValidator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Show whether each string passed each validator")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// （显示每个字符串是否通过了每个验证器）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" s "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" strings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" validators"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" - ')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("validators"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isAcceptable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"matches"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"does not match"')]),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v(" ")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("一旦涉及到多个文件，我们需要确保加载所有已编译的代码。有两种方法。")]),s._v(" "),t("p",[s._v("首先，我们可以使用 "),t("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#outFile",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("outFile")]),t("OutboundLink")],1),s._v(" 选项将所有的输入文件编译成一个 JavaScript 输出文件:")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[s._v("tsc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("outFile sample"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js Test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ts\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("编译器将根据文件中出现的 "),t("code",[s._v("reference tags")]),s._v(" 自动对输出文件进行排序。你也可以单独指定每个文件:")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[s._v("tsc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("outFile sample"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js Validation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ts LettersOnlyValidator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ts ZipCodeValidator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ts Test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ts\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或者，我们可以使用逐文件编译(默认)为每个输入文件生成一个 JavaScript 文件。。如果生成了多个 JS 文件，我们需要在网页上使用 "),t("code",[s._v("<script>")]),s._v(" 标签以适当的顺序加载每个生成的文件，例如:")]),s._v(" "),t("blockquote",[t("p",[s._v("MyTestPage.html")])]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Validation.js"')]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text/javascript"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"LettersOnlyValidator.js"')]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text/javascript"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ZipCodeValidator.js"')]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text/javascript"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Test.js"')]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text/javascript"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);