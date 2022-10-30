(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{407:function(e,o,s){"use strict";s.r(o);var t=s(7),a=Object(t.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"不要在模块中使用命名空间"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#不要在模块中使用命名空间"}},[e._v("#")]),e._v(" 不要在模块中使用命名空间")]),e._v(" "),o("h4",{attrs:{id:"不要在模块中使用命名空间-do-not-use-namespaces-in-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#不要在模块中使用命名空间-do-not-use-namespaces-in-modules"}},[e._v("#")]),e._v(" 不要在模块中使用命名空间（Do not use namespaces in modules）")]),e._v(" "),o("p",[e._v("当第一次转移到基于模块的组织时，一个常见的趋势是将导出包装在额外的一层命名空间中。模块有自己的作用域，只有导出的声明在模块外部是可见的。考虑到这一点，在使用模块时，命名空间提供的价值非常少。")]),e._v(" "),o("p",[e._v("在组织方面，命名空间在全局作用域中将逻辑相关的对象和类型分组在一起是很方便的。例如，在 c# 中，你会在 "),o("code",[e._v("System.Collections")]),e._v(" 中找到所有的集合类型。通过将类型有层次地组织在命名空间里，可以方便用户找到与使用那些类型。另一方面，模块必须已经存在于文件系统中。我们必须通过路径和文件名来解析它们，因此有一个逻辑组织方案供我们使用。我们可以有一个结构为 "),o("code",[e._v("/collections/generic/")]),e._v(" 的文件夹，其中包含一个相应的列表模块。")]),e._v(" "),o("p",[e._v("命名空间对于避免全局作用域中的命名冲突非常重要。例如，您可能有 "),o("code",[e._v("My.Application.Customer.AddForm")]),e._v(" 和 "),o("code",[e._v("My.Application.Order.AddForm")]),e._v(" ---- 这两种类型具有相同的名称，但具有不同的命名空间。然而，这对于模块来说不是问题。在模块内，没有合理的理由拥有两个名称相同的对象。从模块的使用角度来说，任何给定模块的使用者都可以选择它们将用于引用模块的名称，因此不可能出现意外命名冲突。")]),e._v(" "),o("br"),e._v(" "),o("h3",{attrs:{id:"危险信号-red-flags"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#危险信号-red-flags"}},[e._v("#")]),e._v(" 危险信号（Red Flags）")]),e._v(" "),o("p",[e._v("下面所有的都是模块结构的危险信号。仔细检查你是否试图命名你的外部模块，如果这些应用到你的文件:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("一个文件，其唯一的顶级声明是 "),o("code",[e._v("export namespace Foo {…}")]),e._v(" (删除 "),o("code",[e._v("Foo")]),e._v(" 并把所有内容向上层移动一层)")])]),e._v(" "),o("li",[o("p",[e._v("在顶层有相同 "),o("code",[e._v("export namespace Foo {")]),e._v(" 的多个文件(不要认为这些文件会合并成一个 "),o("code",[e._v("Foo")]),e._v(" !)")])])])])}),[],!1,null,null,null);o.default=a.exports}}]);