(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{103:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return m}));var n=t(0),l=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var b=l.a.createContext({}),s=function(e){var a=l.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=s(e.components);return l.a.createElement(b.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},d=l.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return t?l.a.createElement(m,c(c({ref:a},b),{},{components:t})):l.a.createElement(m,c({ref:a},b))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<r;b++)i[b]=t[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return s}));var n=t(3),l=t(7),r=(t(0),t(103)),i={title:"Package",sidebar_position:8},c={unversionedId:"package",id:"package",isDocsHomePage:!1,title:"Package",description:"The package command packages your Scala code in various formats, such as",source:"@site/docs/package.md",sourceDirName:".",slug:"/package",permalink:"/scala-cli/docs/package",editUrl:"https://github.com/VirtuslabRnD/scala-cli/edit/master/website/docs/package.md",version:"current",sidebarPosition:8,frontMatter:{title:"Package",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Test",permalink:"/scala-cli/docs/test"},next:{title:"REPL",permalink:"/scala-cli/docs/repl"}},o=[{value:"Default package format",id:"default-package-format",children:[]},{value:"Library JARs",id:"library-jars",children:[]},{value:"Assemblies",id:"assemblies",children:[]},{value:"Scala.JS",id:"scalajs",children:[]},{value:"Scala Native",id:"scala-native",children:[]},{value:"OS-specific packages",id:"os-specific-packages",children:[]},{value:"Native package",id:"native-package",children:[{value:"Debian",id:"debian",children:[]},{value:"Run",id:"run",children:[]},{value:"Mandatory arguments",id:"mandatory-arguments",children:[]},{value:"Optional arguments",id:"optional-arguments",children:[]},{value:"RedHat",id:"redhat",children:[]},{value:"Run",id:"run-1",children:[]},{value:"Mandatory arguments",id:"mandatory-arguments-1",children:[]},{value:"Optional arguments",id:"optional-arguments-1",children:[]},{value:"MacOs - Pkg",id:"macos---pkg",children:[]},{value:"Run",id:"run-2",children:[]},{value:"Mandatory arguments",id:"mandatory-arguments-2",children:[]},{value:"Optional arguments",id:"optional-arguments-2",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Run",id:"run-3",children:[]},{value:"Mandatory arguments",id:"mandatory-arguments-3",children:[]},{value:"Optional arguments",id:"optional-arguments-3",children:[]}]}],b={toc:o};function s(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"package")," command packages your Scala code in various formats, such as"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#default-package-format"},'"bootstrap" JARs')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#library-jars"},"standard library JARs")),Object(r.b)("li",{parentName:"ul"},"so called ",Object(r.b)("a",{parentName:"li",href:"#assemblies"},'"assemblies" or "fat JARs"')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#scalajs"},"JavaScript files")," for Scala.JS code"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#scala-native"},"native executables")," for Scala Native code"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#os-specific-packages"},"OS-specific formats"),", such as deb or rpm (Linux), pkg (macOS), or MSI (Windows)")),Object(r.b)("h2",{id:"default-package-format"},"Default package format"),Object(r.b)("p",null,'The default package format writes a "bootstrap" JAR, like the ones\n',Object(r.b)("a",{parentName:"p",href:"https://get-coursier.io/docs/cli-bootstrap#bootstraps"},"generated by coursier"),". These\nJARs tend to have a small size (they mostly only contain the byte code of your own sources),\ncan be generated fast,\nand download their dependencies upon first launch, via ",Object(r.b)("a",{parentName:"p",href:"https://get-coursier.io"},"coursier"),"."),Object(r.b)("p",null,"These can be copied on other machines, and run fine there. Their only requirement is\nthat the ",Object(r.b)("inlineCode",{parentName:"p"},"java")," command needs to be available in the ",Object(r.b)("inlineCode",{parentName:"p"},"PATH"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'cat Hello.scala\n# object Hello {\n#   def main(args: Array[String]): Unit =\n#     println("Hello")\n# }\nscala-cli package Hello.scala -o hello\n./hello\n# Hello\n')),Object(r.b)("h2",{id:"library-jars"},"Library JARs"),Object(r.b)("p",null,"Library JARs are suitable if you plan to put the resulting JAR in a class path, rather than running it as is.\nThese follow the same format as the JARs of libraries published to Maven Central for example."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'cat MyLibrary.scala\n# package mylib\n# class MyLibrary {\n#   def message = "Hello"\n# }\nscala-cli package MyLibrary.scala -o my-library.jar --library\njavap -cp my-library.jar mylib.MyLibrary\n# Compiled from "MyLibrary.scala"\n# public class mylib.MyLibrary {\n#   public java.lang.String message();\n#   public mylib.MyLibrary();\n# }\n')),Object(r.b)("h2",{id:"assemblies"},"Assemblies"),Object(r.b)("p",null,"Assemblies blend your dependencies and your sources' byte code together in a single JAR. As a result,\nassemblies can be run as is, just like ",Object(r.b)("a",{parentName:"p",href:"#default-package-format"},"bootstraps"),", but don't need to download\nanything upon first launch. Because of that, assemblies also tend to be bigger, and somewhat slower to generate."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'cat Hello.scala\n# object Hello {\n#   def main(args: Array[String]): Unit =\n#     println("Hello")\n# }\nscala-cli package Hello.scala -o hello --assembly\n./hello\n# Hello\n')),Object(r.b)("h2",{id:"scalajs"},"Scala.JS"),Object(r.b)("p",null,"Packaging Scala.JS applications results in a ",Object(r.b)("inlineCode",{parentName:"p"},".js")," file, that can be run with ",Object(r.b)("inlineCode",{parentName:"p"},"node")," for example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'cat Hello.scala\n# object Hello {\n#   def main(args: Array[String]): Unit =\n#     println("Hello")\n# }\nscala-cli package --js Hello.scala -o hello.js\nnode hello.js\n# Hello\n')),Object(r.b)("p",null,"Note that the Scala CLI doesn't offer to link the resulting JavaScript with linkers, such as Webpack, yet."),Object(r.b)("h2",{id:"scala-native"},"Scala Native"),Object(r.b)("p",null,"Package Scala Native applications results in a native executable:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'cat Hello.scala\n# object Hello {\n#   def main(args: Array[String]): Unit =\n#     println("Hello")\n# }\nscala-cli package --native Hello.scala -o hello\nfile hello\n# hello: Mach-O 64-bit executable x86_64\n./hello\n# Hello\n')),Object(r.b)("h2",{id:"os-specific-packages"},"OS-specific packages"),Object(r.b)("p",null,"The Scala CLI also offers to package Scala code as OS-specific packages. This feature is somewhat experimental,\nand supports the following formats, provided they're compatible with the operating system you're running ",Object(r.b)("inlineCode",{parentName:"p"},"scala-cli")," on:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"DEB (Linux)"),Object(r.b)("li",{parentName:"ul"},"RPM (Linux)"),Object(r.b)("li",{parentName:"ul"},"PKG (macOS)"),Object(r.b)("li",{parentName:"ul"},"MSI (Windows)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'cat Hello.scala\n# object Hello {\n#   def main(args: Array[String]): Unit =\n#     println("Hello")\n# }\nscala-cli package --deb Hello.scala -o hello.deb\nfile hello\n# hello: Mach-O 64-bit executable x86_64\n./hello\n# Hello\n')),Object(r.b)("h2",{id:"native-package"},"Native package"),Object(r.b)("h3",{id:"debian"},"Debian"),Object(r.b)("p",null,"The software package format for GNU\\Linux distribution Debian."),Object(r.b)("h4",{id:"to-build-a-debian-package-you-will-need-to-have-these-applications-installed"},"To build a Debian package, you will need to have these applications installed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"dpkg-deb")),Object(r.b)("h3",{id:"run"},"Run"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"./mill -i scala package ..arguments... --deb --output 'path.deb`\n")),Object(r.b)("h3",{id:"mandatory-arguments"},"Mandatory arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"version"),Object(r.b)("li",{parentName:"ul"},"maintainer"),Object(r.b)("li",{parentName:"ul"},"description"),Object(r.b)("li",{parentName:"ul"},"output-path")),Object(r.b)("h3",{id:"optional-arguments"},"Optional arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"force"),Object(r.b)("li",{parentName:"ul"},"launcher-app"),Object(r.b)("li",{parentName:"ul"},"debian-conflicts"),Object(r.b)("li",{parentName:"ul"},"debian-dependencies"),Object(r.b)("li",{parentName:"ul"},"architecture")),Object(r.b)("h3",{id:"redhat"},"RedHat"),Object(r.b)("p",null,"The software package format for RedHat distributions."),Object(r.b)("h4",{id:"to-build-a-redhat-package-you-will-need-to-have-these-applications-installed"},"To build a RedHat Package, you will need to have these applications installed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"rpmbuild")),Object(r.b)("h3",{id:"run-1"},"Run"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"./mill -i scala package ..arguments... --rpm --output 'path.rpm`\n")),Object(r.b)("h3",{id:"mandatory-arguments-1"},"Mandatory arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"version"),Object(r.b)("li",{parentName:"ul"},"description"),Object(r.b)("li",{parentName:"ul"},"license"),Object(r.b)("li",{parentName:"ul"},"output-path")),Object(r.b)("h3",{id:"optional-arguments-1"},"Optional arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"force"),Object(r.b)("li",{parentName:"ul"},"launcher-app"),Object(r.b)("li",{parentName:"ul"},"release"),Object(r.b)("li",{parentName:"ul"},"rpm-architecture")),Object(r.b)("h3",{id:"macos---pkg"},"MacOs - Pkg"),Object(r.b)("p",null,"The software package format for macOs."),Object(r.b)("h4",{id:"to-build-a-pkg-you-will-need-to-have-these-applications-installed"},"To build a Pkg, you will need to have these applications installed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"pkgbuild")),Object(r.b)("h3",{id:"run-2"},"Run"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"`./mill -i scala package ..arguments... --pkg --output 'path.pkg`\n")),Object(r.b)("h3",{id:"mandatory-arguments-2"},"Mandatory arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"version"),Object(r.b)("li",{parentName:"ul"},"identifier"),Object(r.b)("li",{parentName:"ul"},"output-path")),Object(r.b)("h3",{id:"optional-arguments-2"},"Optional arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"force"),Object(r.b)("li",{parentName:"ul"},"launcher-app")),Object(r.b)("h3",{id:"windows"},"Windows"),Object(r.b)("p",null,"The software package format for Windows distributions."),Object(r.b)("h4",{id:"to-build-a-windows-installer-you-will-need-to-have-these-applications-installed"},"To build a Windows installer, you will need to have these applications installed"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"WIX Toolset ")),Object(r.b)("h3",{id:"run-3"},"Run"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"./mill -i scala package ..arguments... --msi --output 'path.msi`\n")),Object(r.b)("h3",{id:"mandatory-arguments-3"},"Mandatory arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"version"),Object(r.b)("li",{parentName:"ul"},"maintainer"),Object(r.b)("li",{parentName:"ul"},"licence-path"),Object(r.b)("li",{parentName:"ul"},"product-name"),Object(r.b)("li",{parentName:"ul"},"output-path")),Object(r.b)("h3",{id:"optional-arguments-3"},"Optional arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"force"),Object(r.b)("li",{parentName:"ul"},"launcher-app"),Object(r.b)("li",{parentName:"ul"},"exit-dialog"),Object(r.b)("li",{parentName:"ul"},"logo-path")))}s.isMDXComponent=!0}}]);