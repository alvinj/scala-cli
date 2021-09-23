(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||s;return n?r.a.createElement(d,o(o({ref:t},l),{},{components:n})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),s=(n(0),n(103)),i={title:"Test",sidebar_position:7},o={unversionedId:"test",id:"test",isDocsHomePage:!1,title:"Test",description:"The test command allows to run test suites.",source:"@site/docs/test.md",sourceDirName:".",slug:"/test",permalink:"/scala-cli/docs/test",editUrl:"https://github.com/VirtuslabRnD/scala-cli/edit/master/website/docs/test.md",version:"current",sidebarPosition:7,frontMatter:{title:"Test",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Run",permalink:"/scala-cli/docs/run"},next:{title:"Package",permalink:"/scala-cli/docs/package"}},c=[{value:"Test framework",id:"test-framework",children:[]},{value:"Test arguments",id:"test-arguments",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"test")," command allows to run test suites."),Object(s.b)("h2",{id:"test-framework"},"Test framework"),Object(s.b)("p",null,"In order to run tests with it, add a testing framework dependency to your\napplication. Some of the most popular testing frameworks in Scala are"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://scalameta.org/munit"},"munit"),": ",Object(s.b)("inlineCode",{parentName:"li"},"org.scalameta::munit::0.7.27")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/com-lihaoyi/utest"},"utest"),": ",Object(s.b)("inlineCode",{parentName:"li"},"com.lihaoyi::utest::0.7.10")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://www.scalatest.org"},"ScalaTest"),": ",Object(s.b)("inlineCode",{parentName:"li"},"org.scalatest::scalatest::3.2.9")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://junit.org/junit4"},"JUnit 4"),", that can be used via a ",Object(s.b)("a",{parentName:"li",href:"https://github.com/sbt/junit-interface"},"dedicated interface"),": ",Object(s.b)("inlineCode",{parentName:"li"},"com.github.sbt:junit-interface:0.13.2"))),Object(s.b)("p",null,"For example, let's run a simple munit-based test suite:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"cat MyTests.scala\n# import $ivy.`org.scalameta::munit::0.7.27`\n#\n# class MyTests extends munit.FunSuite {\n#   test(\"foo\") {\n#     assert(2 + 2 == 4)\n#   }\n# }\n\nscala-cli test MyTests.scala\n# Compiling project_8686a5fa42 (1 Scala source)\n# Compiled 'project_8686a5fa42'\n# MyTests:\n#   + foo 0.143s\n")),Object(s.b)("h2",{id:"test-arguments"},"Test arguments"),Object(s.b)("p",null,"You can pass test arguments to your test framework, by passing them after a ",Object(s.b)("inlineCode",{parentName:"p"},"--"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'cat MyTests.scala\n# import $ivy.`org.scalatest::scalatest::3.2.9`\n# \n# import org.scalatest._\n# import org.scalatest.flatspec._\n# import org.scalatest.matchers._\n#\n# class Tests extends AnyFlatSpec with should.Matchers {\n#   "A thing" should "thing" in {\n#     assert(2 + 2 == 4)\n#   }\n# }\n\nscala-cli test MyTests.scala -- -oD\n# Compiling project_8686a5fa42-4bae49baeb (1 Scala source)\n# Compiled \'project_8686a5fa42-4bae49baeb\'\n# Tests:\n# A thing\n# - should thing (22 milliseconds)\n# Run completed in 359 milliseconds.\n# Total number of tests run: 1\n# Suites: completed 1, aborted 0\n# Tests: succeeded 1, failed 0, canceled 0, ignored 0, pending 0\n# All tests passed.\n')))}u.isMDXComponent=!0}}]);