(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{572:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Maven的一大功能是管理项目依赖，避免了我们手动去下载依赖添加到项目中。本文就来探讨一下Maven是如何管理依赖的。")]),s._v(" "),t("h2",{attrs:{id:"项目的坐标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目的坐标"}},[s._v("#")]),s._v(" 项目的坐标")]),s._v(" "),t("p",[s._v("为了标识每一个项目，Maven引入了坐标的概念，在Maven的世界里一个确定的坐标是独一无二的，犹如在三维空间中"),t("eq",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("P")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("a")]),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("mi",[s._v("b")]),t("mo",{attrs:{separator:"true"}},[s._v(",")]),t("mi",[s._v("c")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("P(a, b, c)")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.13889em"}},[s._v("P")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathdefault"},[s._v("a")]),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),t("span",{staticClass:"mord mathdefault"},[s._v("b")]),t("span",{staticClass:"mpunct"},[s._v(",")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),t("span",{staticClass:"mord mathdefault"},[s._v("c")]),t("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v("坐标唯一标识一个点一样。就像三位坐标系规定了横纵轴坐标元素一样，Maven坐标也由很多元素定义：")],1),s._v(" "),t("ul",[t("li",[t("code",[s._v("groupId")]),s._v("：定义当前Maven项目隶属的实际项目，当前项目有可能只是实际项目中的其中一个模块。比如"),t("code",[s._v("spring-core")]),s._v("（当前项目）就是"),t("code",[s._v("SpringFramework")]),s._v("（实际项目）的一个模块。")]),s._v(" "),t("li",[t("code",[s._v("artifactId")]),s._v("：定义实际项目中的一个Maven项目。推荐使用实际项目名称作为"),t("code",[s._v("artifactId")]),s._v("的前缀。")]),s._v(" "),t("li",[t("code",[s._v("version")]),s._v("：当前Maven项目所处的版本。Maven定义一套版本规范，最好遵循该规范。")]),s._v(" "),t("li",[t("code",[s._v("packaging")]),s._v("：该元素定义Maven项目的打包方式，当不定义该元素时，Maven会使用默认值jar。")]),s._v(" "),t("li",[t("code",[s._v("classifier")]),s._v("：该元素用来帮助定义构建输出的一些附属构件。注意，不能直接定义项目的"),t("code",[s._v("classfier")]),s._v("，因为项目的附属构件不是项目直接默认生成的，而是由附加的插件帮助生成的。")])]),s._v(" "),t("p",[s._v("上面5个元素中，"),t("strong",[s._v("前三个是必须的，属于坐标中的基本元素")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"依赖的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖的配置"}},[s._v("#")]),s._v(" 依赖的配置")]),s._v(" "),t("p",[s._v("下面是一个简单的依赖配置：")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("project")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\t...\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  \t"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    \t"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("..."),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("..."),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("..."),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("..."),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("scope")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("..."),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("scope")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("optional")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("..."),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("optional")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("exclusions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      \t"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("exclusion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n          ...\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("exclusion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        ...\n      "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("exclusions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    ...\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  ...\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("project")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("groupId")]),s._v("，"),t("code",[s._v("artifactId")]),s._v("，"),t("code",[s._v("version")]),s._v("，这三个元素是配置依赖是最重要的。")]),s._v(" "),t("li",[t("code",[s._v("type")]),s._v("，依赖的类型对应于项目坐标定义中的"),t("code",[s._v("packaging")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("scope")]),s._v("，依赖的范围。")]),s._v(" "),t("li",[t("code",[s._v("optional")]),s._v("，标记依赖是否可选。")]),s._v(" "),t("li",[t("code",[s._v("exclusions")]),s._v("，用来排除传递性依赖，见下文。")])]),s._v(" "),t("h2",{attrs:{id:"依赖的范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖的范围"}},[s._v("#")]),s._v(" 依赖的范围")]),s._v(" "),t("p",[s._v("依赖范围是用来控制依赖与三种classpath的关系（编译classpath，测试classpath，运行classpath）。")]),s._v(" "),t("p",[s._v("Maven中有以下几种依赖范围：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("compile")]),s._v("：编译依赖范围。如果没有指定，就会默认使用该依赖范围。这种范围对于编译，测试和运行三种classpath都有效。")]),s._v(" "),t("li",[t("code",[s._v("test")]),s._v("：测试依赖范围。使用此依赖范围的Maven依赖，只对于测试classpath有效。如JUnit，只在测试的时候需要。")]),s._v(" "),t("li",[t("code",[s._v("provided")]),s._v("：已提供依赖范围。使用此依赖范围的Maven依赖，对于编译和测试classpath有效，但在运行时无效。如servlet-api，编译和测试项目的时候需要该依赖，项目部署后，由于Servlet容器已经提供了，所以就不需要重复引入该依赖了。")]),s._v(" "),t("li",[t("code",[s._v("runtime")]),s._v("：运行时依赖范围。对于测试和运行classpath有效，但对编译classpath无效。如JDBC驱动，在编译时只需要提供JDK提供的JDBC相关接口即可，只有在指向测试或者运行项目的时候才会需要具体的JDBC驱动实现。")]),s._v(" "),t("li",[t("code",[s._v("system")]),s._v("：系统依赖范围。与classpath的关系和"),t("code",[s._v("provided")]),s._v("一样，但是使用这种类型的范围时，必须通过systemPath元素显式地指定依赖文件的路径。此类依赖不是maven仓库解析的，往往从本机系统导入。")]),s._v(" "),t("li",[t("code",[s._v("import")]),s._v("：导入依赖范围。该范围不会对三种classpath产生实际的影响。")])]),s._v(" "),t("h2",{attrs:{id:"传递性依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传递性依赖"}},[s._v("#")]),s._v(" 传递性依赖")]),s._v(" "),t("p",[s._v("假如项目A依赖了项目B，项目B又依赖了项目C，那么A传递性依赖了项目C，B对于A是第一直接依赖，C对于B是第二直接依赖，C对于A就是传递性依赖。第一直接依赖的范围和第二直接依赖的范围决定了传递性依赖的范围。")]),s._v(" "),t("ul",[t("li",[s._v("当第二直接依的赖范围是"),t("code",[s._v("compile")]),s._v("的时候，传递性依赖的范围与第一直接依赖的范围一致。")]),s._v(" "),t("li",[s._v("当第二直接依赖的范围是"),t("code",[s._v("test")]),s._v("的时候，依赖不会得以传递，也就是不会产生传递性依赖。")]),s._v(" "),t("li",[s._v("当第二直接依赖的范围是"),t("code",[s._v("provided")]),s._v("的时候，只有在第一直接依赖范围也为"),t("code",[s._v("provided")]),s._v("的时候才产生传递依赖。")]),s._v(" "),t("li",[s._v("当第二直接依赖的范围是"),t("code",[s._v("runtime")]),s._v("的时候，传递性依赖的范围与第一直接依赖的范围一致，但"),t("code",[s._v("compile")]),s._v("例外，此时传递性依赖的范围为"),t("code",[s._v("runtime")]),s._v("。")])]),s._v(" "),t("p",[s._v("关于后两种确实不好理解，需要多想一下。")]),s._v(" "),t("h2",{attrs:{id:"依赖调解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖调解"}},[s._v("#")]),s._v(" 依赖调解")]),s._v(" "),t("p",[s._v("我们通常只用考虑第一直接依赖，一般情况下是不会重复引入的，但是传递性依赖可能会导致依赖冲突。比如对于下面两条依赖路径：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("X")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("D")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("X")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("X属于A的传递性依赖，但是两条路径上有两个版本的X，此时就产生了冲突。所以需要Maven来进行依赖调解。")]),s._v(" "),t("p",[s._v("Maven的第一原则是，路径最近者优先。在上例中，会引入2.0版本的X。但是第一原则不能解决所有的问题，比如路径长度相等时。")]),s._v(" "),t("p",[s._v("Maven的第二原则是第一声明者优先，在依赖路径长度相等的情况下，在POM中依赖声明中顺序靠前的会被解析使用。")]),s._v(" "),t("h2",{attrs:{id:"可选依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可选依赖"}},[s._v("#")]),s._v(" 可选依赖")]),s._v(" "),t("p",[s._v("可选依赖是指在POM中声明了多个依赖，但是在使用中只会依赖其中一种依赖。可以将依赖的"),t("code",[s._v("optional")]),s._v("选项的值设置为true。假设项目B引入了MySQL和Oracle的可选依赖，项目A依赖项目B，这两个可选依赖不会传递，A中需要显式地声明所用的依赖。")]),s._v(" "),t("h2",{attrs:{id:"排除依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排除依赖"}},[s._v("#")]),s._v(" 排除依赖")]),s._v(" "),t("p",[s._v("当项目A依赖项目B，项目B依赖项目C（v1.0.0），但是我们想使用C(v2.0.0)，则可以在A项目中引入项目B时排除掉C（v1.0.0），同时在项目A中引入项目C（v2.0.0）。下面是在Spring Boot中移除内嵌tomcat的示例：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("boot"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("boot"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("starter"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 去除内嵌tomcat "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("exclusions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("exclusion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("boot"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("boot"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("starter"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("tomcat"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("exclusion"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("exclusions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dependency"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"归类依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#归类依赖"}},[s._v("#")]),s._v(" 归类依赖")]),s._v(" "),t("p",[s._v("在声明依赖时，有很多某一类的依赖，可以将这一类的依赖版本进行统一，使用属性来代替显式的版本参数。如下面的例子所示，三个依赖使用同一个版本，将来升级时，只需要改一个地方就可以了。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("properties"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("jackson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.9")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".8")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jackson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("properties"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependencies"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fasterxml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jackson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("core"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("jackson"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("core"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("jackson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dependency"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fasterxml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jackson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("core"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("jackson"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("databind"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("jackson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dependency"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fasterxml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jackson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("datatype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("jackson"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("datatype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("jsr310"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("jackson"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dependency"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dependencies"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h2",{attrs:{id:"优化依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化依赖"}},[s._v("#")]),s._v(" 优化依赖")]),s._v(" "),t("p",[s._v("Maven会自动解析所有项目的直接依赖和传递性依赖，并且根据规则正确判断每个依赖的范围，对于一些依赖冲突也能进行调节，以确保任何一个构件只有唯一的版本在依赖中存在。最后得到的依赖被称为已解析依赖。")]),s._v(" "),t("p",[s._v("可以使用下列命令查看已解析依赖：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mvn dependency:list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("该命令会列出被maven解析的依赖（包括直接和传递性依赖）。另外，还可以通过下列命令查看依赖树：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mvn dependency:tree\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("会已树形结构列出maven已解析的依赖。")]),s._v(" "),t("p",[s._v("另外，还可以使用下列命令进行依赖分析：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mvn dependency:analyze\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以查看到有哪些手动直接引入的依赖，有哪些引入了但没有使用的依赖等信息。")])])}),[],!1,null,null,null);a.default=e.exports}}]);