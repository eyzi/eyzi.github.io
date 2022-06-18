(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{424:function(t,s,e){"use strict";e.r(s);var a=e(54),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"conditions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conditions"}},[t._v("#")]),t._v(" Conditions")]),t._v(" "),e("p",[t._v("Let's talk about one of the common data types that we brushed over --\nboolean. A boolean is simply either "),e("code",[t._v("true")]),t._v(" or "),e("code",[t._v("false")]),t._v(". Despite only\nhaving two possible values for its type, it is more used than any other\ntype. It is a great type to use when dealing with decisions, which most\nprogram needs to do.")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isLegalAge")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("age "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("In this example, we have a function that determines whether the given\nage is legal or not, which we determine if the given age is below 18 or\nnot. If it is below 18, the age is "),e("u",[t._v("not")]),t._v(" ("),e("code",[t._v("false")]),t._v(") legal.\nOtherwise, it "),e("u",[t._v("is")]),t._v(" ("),e("code",[t._v("true")]),t._v(").")]),t._v(" "),e("p",[t._v("Inside the parenthesis ("),e("code",[t._v("()")]),t._v(") following the "),e("code",[t._v("if")]),t._v(" clause, there is a\nstatement ("),e("code",[t._v("age < 18")]),t._v("). This also returns a "),e("code",[t._v("true")]),t._v(" or "),e("code",[t._v("false")]),t._v(" value\nwhen evaluated. When it is true, the code within the "),e("code",[t._v("if")]),t._v(" block --\neverything inside the curly brackets following "),e("code",[t._v("if")]),t._v(" ("),e("code",[t._v("{}")]),t._v(") -- would\nexecute. Otherwise, it would execute the "),e("code",[t._v("else")]),t._v(" block.")]),t._v(" "),e("p",[t._v("To sum it up, if the input age is below 18, that is, if "),e("code",[t._v("age < 18")]),t._v("\nevaluates to true, then "),e("code",[t._v("return false;")]),t._v(" statement would run. If it's\nnot, then the "),e("code",[t._v("return true;")]),t._v(" statement would run instead.")]),t._v(" "),e("h2",{attrs:{id:"equality"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#equality"}},[t._v("#")]),t._v(" Equality")]),t._v(" "),e("p",[t._v("Operators for equality are common in languages. "),e("code",[t._v("<")]),t._v(" for less than, "),e("code",[t._v(">")]),t._v("\nfor greater than, "),e("code",[t._v("<=")]),t._v(" for less than or equal to, "),e("code",[t._v(">=")]),t._v(" for greater than\nor equal to. Since most language has "),e("code",[t._v("=")]),t._v(" as a variable assignment\noperator, "),e("code",[t._v("==")]),t._v(" is used to evaluate equality. And to evaluate\ninequality, a bang ("),e("code",[t._v("!")]),t._v(") is often used with it -- "),e("code",[t._v("!=")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("age < 18")]),t._v(": is age less than 18?")]),t._v(" "),e("li",[e("code",[t._v("age <= 18")]),t._v(": is age less than or equal to 18?")]),t._v(" "),e("li",[e("code",[t._v("age > 18")]),t._v(": is age greater than 18?")]),t._v(" "),e("li",[e("code",[t._v("age >= 18")]),t._v(": is age greater than or equal to 18?")]),t._v(" "),e("li",[e("code",[t._v("age == 18")]),t._v(": is age 18?")]),t._v(" "),e("li",[e("code",[t._v("age != 18")]),t._v(": is age not 18?")])]),t._v(" "),e("p",[t._v("But wait! Since "),e("code",[t._v("age < 18")]),t._v(" returns a boolean value already, can't we\njust use it as return somehow?")]),t._v(" "),e("p",[t._v("Correct! The "),e("code",[t._v("if")]),t._v(" statement in this case feels redundant. For this\nparticular case, we can just return the negated equivalent of "),e("code",[t._v("age < 18")]),t._v(". Which, instead of checking if it's below 18, let's check if it is\n18 or above.")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isLegalAge")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" age "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"multi-conditional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-conditional"}},[t._v("#")]),t._v(" Multi-conditional")]),t._v(" "),e("p",[t._v("On top of the "),e("code",[t._v("if-else")]),t._v(" statement, languages can also have support for\nmultiple conditional statements. Commonly, there would be an "),e("code",[t._v("else if")]),t._v("\nstatement or what's known as a "),e("code",[t._v("switch-case")]),t._v(" statement.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toOrdinalForm")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("singleDigit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("singleDigit "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1st"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("singleDigit "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2nd"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("singleDigit "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3rd"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" singleDigit "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"th"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("or the switch-case alternative would be something like")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toOrdinalForm")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("singleDigit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("singleDigit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1st"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2nd"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3rd"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" singleDigit "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"th"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);