(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{374:function(t,v,e){"use strict";e.r(v);var _=e(7),s=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"基本使用-basic-usage"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本使用-basic-usage"}},[t._v("#")]),t._v(" 基本使用（Basic usage）")]),t._v(" "),v("p",[t._v("如果使用 JSX，必须要做两件事。")]),t._v(" "),v("ul",[v("li",[t._v("添加一个 "),v("strong",[v("code",[t._v(".tsx")])]),t._v(" 后缀的文件")]),t._v(" "),v("li",[t._v("在 "),v("strong",[v("code",[t._v("tsconfig.json")])]),t._v(" 启用 "),v("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#jsx",target:"_blank",rel:"noopener noreferrer"}},[v("code",[t._v("jsx")]),v("OutboundLink")],1),t._v(" 选项")])]),t._v(" "),v("p",[t._v("在 "),v("strong",[t._v("TypeScript")]),t._v("中，有三种 "),v("strong",[t._v("JSX模式")]),t._v("："),v("strong",[t._v("preserve，react 和 react-native")]),t._v("。 这些模式只在代码生成阶段（emit stage）起作用 - 类型检查并不受影响。")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("preserve")]),t._v("："),v("code",[t._v("preserve")]),t._v(" 模式将保持 JSX 作为输出的一部分，以便由另一个转换步骤（例如: Babel）进一步使用。此外，输出文件扩展名为 "),v("code",[t._v(".jsx")]),t._v("。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("react")]),t._v("： "),v("code",[t._v("react")]),t._v(" 模式会生成 "),v("code",[t._v("React.createElement")]),t._v("，在使用之前不需要经过 JSX 转换，并且输出将具有 "),v("code",[t._v(".js")]),t._v(" 文件扩展名。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("react-native")]),t._v("："),v("code",[t._v("react-native")]),t._v(" 模式等价于 "),v("code",[t._v("preserve")]),t._v("，因为它保留了所有 JSX，但输出的文件扩展名为 "),v("code",[t._v(".js")]),t._v("。")])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Mode")]),t._v(" "),v("th",[t._v("Input")]),t._v(" "),v("th",[t._v("Output")]),t._v(" "),v("th",[t._v("Output File Extension")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("preserve")])]),t._v(" "),v("td",[v("code",[t._v("<div />")])]),t._v(" "),v("td",[v("code",[t._v("<div />")])]),t._v(" "),v("td",[t._v(".jsx")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("react")])]),t._v(" "),v("td",[v("code",[t._v("<div />")])]),t._v(" "),v("td",[v("code",[t._v('React.createElement("div")')])]),t._v(" "),v("td",[t._v(".js")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("react-native")])]),t._v(" "),v("td",[v("code",[t._v("<div />")])]),t._v(" "),v("td",[v("code",[t._v("<div />")])]),t._v(" "),v("td",[t._v(".js")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("react-jsx")])]),t._v(" "),v("td",[v("code",[t._v("<div />")])]),t._v(" "),v("td",[v("code",[t._v('_jax("div", {}, void 0)')])]),t._v(" "),v("td",[t._v(".js")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("react-jsxdev")])]),t._v(" "),v("td",[v("code",[t._v("<div />")])]),t._v(" "),v("td",[v("code",[t._v('_jsxDEV("div", {}, void 0, false, {...}, this)')])]),t._v(" "),v("td",[t._v(".js")])])])]),t._v(" "),v("p",[t._v("您可以使用 "),v("strong",[t._v("jsx 命令行标志")]),t._v(" 或指定 "),v("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#jsx",target:"_blank",rel:"noopener noreferrer"}},[v("code",[t._v("tsconfig.json")]),v("OutboundLink")],1),t._v(" 文件中的相应选项 jsx 来指定这种模式。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("*注意: 你可以通过 "),v("code",[t._v("jsxFactory")]),t._v(" 选项指定 JSX 工厂函数，当目标是"),v("code",[t._v("react")]),t._v(" JSX emit 时使用(默认为 "),v("code",[t._v("React.createElement")]),t._v(")")])])])}),[],!1,null,null,null);v.default=s.exports}}]);