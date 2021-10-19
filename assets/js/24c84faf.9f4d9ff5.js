"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1318],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5950:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o={title:"Scala.JS",sidebar_position:21},c=void 0,l={unversionedId:"guides/scala-js",id:"guides/scala-js",isDocsHomePage:!1,title:"Scala.JS",description:"Scala CLI can compile, run, package, etc. Scala.JS sources.",source:"@site/docs/guides/scala-js.md",sourceDirName:"guides",slug:"/guides/scala-js",permalink:"/docs/guides/scala-js",editUrl:"https://github.com/Virtuslab/scala-cli/edit/master/website/docs/guides/scala-js.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"Scala.JS",sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Scripts",permalink:"/docs/guides/scripts"},next:{title:"Scala Native",permalink:"/docs/guides/scala-native"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Scala CLI can compile, run, package, etc. Scala.JS sources."),(0,i.kt)("p",null,"It doesn't have support for JS linkers, such as ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org"},"webpack"),",\nlike ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/scalajs-bundler"},"scalajs-bundler")," has. You'll have to\nhandling linking yourself, with the ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," file generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," ."),(0,i.kt)("p",null,"In order to run Scala.JS sources, ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," is required."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Enable Scala.JS support either by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--js")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli")," , like ",(0,i.kt)("inlineCode",{parentName:"p"},"scala Test.scala --js")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"beware platform dependencies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"run")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"package")," should all work"))))}u.isMDXComponent=!0}}]);