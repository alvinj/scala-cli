(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{103:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),b=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=b(t),d=i,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||r;return t?a.a.createElement(m,l(l({ref:n},o),{},{components:t})):a.a.createElement(m,l({ref:n},o))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,c=new Array(r);c[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var o=2;o<r;o++)c[o]=t[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var i=t(3),a=t(7),r=(t(0),t(103)),c={title:"Directives",sidebar_position:2},l={unversionedId:"reference/directives",id:"reference/directives",isDocsHomePage:!1,title:"Directives",description:"using directives",source:"@site/docs/reference/directives.md",sourceDirName:"reference",slug:"/reference/directives",permalink:"/scala-cli/docs/reference/directives",editUrl:"https://github.com/VirtuslabRnD/scala-cli/edit/master/website/docs/reference/directives.md",version:"current",sidebarPosition:2,frontMatter:{title:"Directives",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Command-line options",permalink:"/scala-cli/docs/reference/cli-options"},next:{title:"Directives",permalink:"/scala-cli/docs/reference/using-directives"}},p=[{value:"using directives",id:"using-directives",children:[{value:"Compiler options",id:"compiler-options",children:[]},{value:"Dependency",id:"dependency",children:[]},{value:"Java home",id:"java-home",children:[]},{value:"Java options",id:"java-options",children:[]},{value:"Platform",id:"platform",children:[]},{value:"Repository",id:"repository",children:[]},{value:"Scala version",id:"scala-version",children:[]}]},{value:"require directives",id:"require-directives",children:[{value:"Platform",id:"platform-1",children:[]},{value:"Scala version",id:"scala-version-1",children:[]}]}],o={toc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"using-directives"},"using directives"),Object(r.b)("h3",{id:"compiler-options"},"Compiler options"),Object(r.b)("p",null,"Add Scala compiler options"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using option "),Object(r.b)("em",{parentName:"p"},"option")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using options "),Object(r.b)("em",{parentName:"p"},"option1")," ",Object(r.b)("em",{parentName:"p"},"option2")," \u2026"),Object(r.b)("h4",{id:"examples"},"Examples"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using option -Xasync")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using options -Xasync -Xfatal-warnings")),Object(r.b)("h3",{id:"dependency"},"Dependency"),Object(r.b)("p",null,"Adds dependencies"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using "),Object(r.b)("em",{parentName:"p"},"org"),Object(r.b)("inlineCode",{parentName:"p"},":"),"name",Object(r.b)("inlineCode",{parentName:"p"},":"),"ver"),Object(r.b)("h4",{id:"examples-1"},"Examples"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using org.typelevel::cats-effect:3.2.9")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using dev.zio::zio:1.0.12")),Object(r.b)("h3",{id:"java-home"},"Java home"),Object(r.b)("p",null,"Sets Java home used to run your application or tests"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using java-home "),Object(r.b)("em",{parentName:"p"},"path")," | ",Object(r.b)("inlineCode",{parentName:"p"},"using javaHome "),Object(r.b)("em",{parentName:"p"},"path")),Object(r.b)("h4",{id:"examples-2"},"Examples"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'using java-home "/Users/Me/jdks/11"')),Object(r.b)("h3",{id:"java-options"},"Java options"),Object(r.b)("p",null,"Adds Java options"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using java-opt "),Object(r.b)("em",{parentName:"p"},"options")," | ",Object(r.b)("inlineCode",{parentName:"p"},"using javaOpt "),Object(r.b)("em",{parentName:"p"},"options")),Object(r.b)("h4",{id:"examples-3"},"Examples"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using javaOpt -Xmx2g -Dsomething=a")),Object(r.b)("h3",{id:"platform"},"Platform"),Object(r.b)("p",null,"Set the default platform to Scala.JS or Scala Native"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using scala-js"),"|",Object(r.b)("inlineCode",{parentName:"p"},"scala-native")),Object(r.b)("h4",{id:"examples-4"},"Examples"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using scala-js")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using scala-native")),Object(r.b)("h3",{id:"repository"},"Repository"),Object(r.b)("p",null,"Adds a repository for dependency resolution"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using repository "),Object(r.b)("em",{parentName:"p"},"repository")),Object(r.b)("h4",{id:"examples-5"},"Examples"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using repository jitpack")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using repository sonatype:snapshots")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using repository https://maven-central.storage-download.googleapis.com/maven2")),Object(r.b)("h3",{id:"scala-version"},"Scala version"),Object(r.b)("p",null,"Sets the default Scala version"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using scala "),Object(r.b)("em",{parentName:"p"},"version")),Object(r.b)("h4",{id:"examples-6"},"Examples"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using scala 3.0.2")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using scala 2.13")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"using scala 2")),Object(r.b)("h2",{id:"require-directives"},"require directives"),Object(r.b)("h3",{id:"platform-1"},"Platform"),Object(r.b)("p",null,"Require a Scala platform for the current file"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"require "),Object(r.b)("em",{parentName:"p"},"platform")),Object(r.b)("h4",{id:"examples-7"},"Examples"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"require scala-js")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"require scala-js scala-native")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"require jvm")),Object(r.b)("h3",{id:"scala-version-1"},"Scala version"),Object(r.b)("p",null,"Require a Scala version for the current file"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"require scala "),Object(r.b)("em",{parentName:"p"},"version")),Object(r.b)("h4",{id:"examples-8"},"Examples"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"require scala 3")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"require scala 2.13")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"require scala 3.0.2")))}b.isMDXComponent=!0}}]);