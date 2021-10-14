"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[195],{8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(9443);var i=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=a(6010),c="tabItem_1uMI",s="tabItemActive_2DSg";var o=function(e){var t,a=e.lazy,l=e.block,o=e.defaultValue,m=e.values,u=e.groupId,d=e.className,p=n.Children.toArray(e.children),g=null!=m?m:p.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=o?o:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,E=i(),v=E.tabGroupChoices,b=E.setTabGroupChoices,h=(0,n.useState)(f),w=h[0],N=h[1],S=[];if(null!=u){var y=v[u];null!=y&&y!==w&&g.some((function(e){return e.value===y}))&&N(y)}var Z=function(e){var t=e.currentTarget,a=S.indexOf(t),n=g[a].value;N(n),null!=u&&(b(u,n),setTimeout((function(){var e,a,n,l,i,r,c,o;(e=t.getBoundingClientRect(),a=e.top,n=e.left,l=e.bottom,i=e.right,r=window,c=r.innerHeight,o=r.innerWidth,a>=0&&i<=o&&l<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=S.indexOf(e.target)+1;a=S[n]||S[0];break;case"ArrowLeft":var l=S.indexOf(e.target)-1;a=S[l]||S[S.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},d)},g.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,r.Z)("tabs__item",c,{"tabs__item--active":w===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:C,onFocus:Z,onClick:Z},null!=a?a:t)}))),a?(0,n.cloneElement)(p.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},1657:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(5064),i=a(8215),r=a(2389);var c=function(e){var t=e.children,a=e.fallback;return(0,r.Z)()&&null!=t?n.createElement(n.Fragment,null,t()):a||null};function s(e){return n.createElement(c,null,(function(){return n.createElement("div",null,n.createElement(l.Z,{groupId:"operating-systems",defaultValue:(e=function(e){return-1!==window.navigator.userAgent.indexOf(e)},e("Win")?"win":e("Mac")?"mac":"linux"),values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"},{label:"Linux",value:"linux"}]},n.createElement(i.Z,{value:"win"},n.createElement("a",{className:"no_monospace",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-win32.msi"},"Download Scala CLI for Windows")),n.createElement(i.Z,{value:"linux"},n.createElement("p",null,"Run the following one-line command in your terminal"),n.createElement("code",null,"curl -sSLf https://virtuslab.github.io/scala-cli-packages/scala-setup.sh | sh")),n.createElement(i.Z,{value:"mac"},n.createElement("p",null,"Run the following one-line command in your terminal"),n.createElement("code",null,"brew install Virtuslab/scala-cli/scala-cli"))));var e}))}},1434:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){return n.createElement("div",{className:"col col--"+e.colsize},n.createElement("h1",{className:"section-title"+(e.promptsign?" with-before":"")},e.title))}},2051:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){return n.createElement("div",{className:"section-features__item col col--4"},n.createElement("div",{className:"section-features__item-wrapper"},n.createElement("div",{className:"icon"},e.icon?n.createElement("img",{src:e.icon,alt:e.title}):""),n.createElement("div",{className:"title"},e.title),n.createElement("div",{className:"desc"},e.children)))}},1260:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(8465);function i(e){return n.createElement("div",{className:"section-image-box__row row "},n.createElement("div",{className:"section-image-box__row-text col col--1 left-margin-stub"}),n.createElement("div",{className:"section-image-box__row-text col col--5 "},n.createElement("div",{className:"section-image-box__row-text-wrapper"},n.createElement("h3",null,e.title),n.createElement("div",{className:"content"},e.children))),n.createElement("div",{className:"section-image-box__row-image col col--6 "},n.createElement("div",{className:"section-image-box__row-image-wrapper"},e.image?n.createElement("div",{className:"green_border"},n.createElement(l.Z,{alt:e.image,sources:{light:"/img/"+e.image,dark:"/img/dark/"+e.image}})):"")),n.createElement("div",{className:"section-image-box__row-text col col--1 right-margin-stub"}))}},9882:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){return n.createElement("section",{className:"section "+e.className},e.children)}},115:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){return n.createElement("div",{className:"section-about__wrapper row"},n.createElement("div",{className:"col col--1 big-title pre-title"},">_"),n.createElement("div",{className:"col col--3 big-title"},n.createElement("span",{className:"pre-title-mobile"},">_")," ",e.title),n.createElement("div",{className:"col col--8 description"},e.children))}},2740:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){return n.createElement("div",{className:"section__header"},n.createElement("h2",null,e.title),n.createElement("div",{className:"section__header-description"},e.children))}},2994:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){return!!e.slug?n.createElement("a",{href:"/"+e.slug,className:"col col--4 use-box-wrapper"},n.createElement("div",{className:"use-box"},n.createElement("div",{className:"icon-wrapper"},n.createElement("img",{src:"img/ico-"+e.slug+".png",alt:e.slug+" icon"})),n.createElement("h3",null,e.title),n.createElement("p",null,e.description),n.createElement("div",{className:"read-more-wrap"},n.createElement("div",{className:"read-more with-before"},"Read more")))):n.createElement("div",{className:"col col--4 use-box-wrapper"},n.createElement("div",{className:"use-box your-case"},n.createElement("div",{className:"icon-wrapper"},n.createElement("img",{className:"light-theme",src:"img/ico-yours.png",alt:"your use case icon"}),n.createElement("img",{className:"dark-theme",src:"img/ico-yours-dark.png",alt:"your use case icon"})),n.createElement("h3",null,e.title),n.createElement("p",null,e.description)))}},3352:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(9882),i=a(8465);function r(e){return n.createElement(l.Z,{className:"section-yellow-banner"},n.createElement("div",{className:"row row--align-center"},n.createElement("div",{className:"col col--6"},n.createElement("h1",null,e.title),n.createElement("div",{className:"description"},e.children)),n.createElement("div",{className:"col col--6"},n.createElement("div",{className:"image-wrapper"},n.createElement(i.Z,{className:"image",alt:e.image,sources:{light:"img/"+e.image,dark:"img/dark/"+e.image}})))))}},604:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(1260),i=[n.createElement(l.Z,{image:"versions.svg",title:"Scala versions, dependencies and JVMs",key:"versions",projects:"true"},n.createElement("p",null,"Scala CLI is built on top of coursier",n.createElement("br",null),"This allow us to manage Scala versions, dependencies and JVMs so you can test your code in different environments by changing single option."),n.createElement("p",null,"Scala CLI ships with all its dependencies",n.createElement("br",null),"No need to fluff with installing JVM or setting up PATH.")),n.createElement(l.Z,{image:"universal_tool.svg",title:"Universal tool",key:"universal",projects:"true"},n.createElement("p",null,"If you want to use older ",n.createElement("b",null,"version of Scala")," or run your code in ",n.createElement("b",null,"JS")," or ",n.createElement("b",null,"Native")," environments we've got you covered.",n.createElement("br",null),n.createElement("i",null,"some additional ",n.createElement("a",{href:"TODO?"},"setup")," may be required for JS and Native")),n.createElement("p",null,"Switching between platforms or Scala versions is as easy as changing a parameter.")),n.createElement(l.Z,{image:"buildtools.png",title:"We do not call Scala CLI a build tool",key:"buildtool",projects:"true"},n.createElement("p",null,"Scala CLI shares some similarities with build tools, but doesn't aim at supporting multi-module projects, nor to be extended via a task system known from sbt, mill or bazel."),n.createElement("p",null,"Scala ecosystem has multiple amazing build tools, there is no need to create another one.")),n.createElement(l.Z,{image:"complete-install.svg",title:"Complete installation",key:"complete-install",education:"true"},n.createElement("p",null,"Scala CLI comes with batteries included. No additional installation is required, no more fluffing with setting up the correct Java version or ",n.createElement("code",null,"PATH")),n.createElement("p",null,"Scala CLI manages JVMs, Scala and other used tools under the hood.")),n.createElement(l.Z,{image:"defaults.svg",title:"Solid defaults",key:"defaults",education:"true"},n.createElement("p",null,"No additional configuration is needed to most Scala CLI commands."),n.createElement("p",null,"Scala CLI is configured out of the box to use the latest stable versions and other commands such as formatter or compiler contain reasonable defaults.")),n.createElement(l.Z,{image:"learning_curve.svg",title:"No learning curve",key:"curve",education:"true"},n.createElement("p",null,"Scala CLI does not use complex configuration language, its options are simple and self-explanatory"),n.createElement("p",null,"There are no big differences in running repl or .scala files so expanding the results of repl session into a small project does not require learning new concepts from Scala CLI perspective")),n.createElement(l.Z,{image:"powerful_scripts.svg",title:"Scripts are as powerful as other programs",key:"scripts-as-apps",scripting:"true"},n.createElement("p",null,"Scripts in Scala CLI can use dependencies and other features as standard Scala programs. Scala CLI is command-line first giving access to all its features without need for any configuration file or specific project structure.")),n.createElement(l.Z,{image:"embbedable_scripts.svg",title:"Embbedale Scripts",key:"embed-scripts",scripting:"true"},n.createElement("p",null,"Scala CLI can be included in shebangs making your .scala or .sc files runnable"),n.createElement("p",null,"Scala CLI support piping inputs in and is designed to be embeddable in other scripts turning Scala into proper scripting language")),n.createElement(l.Z,{image:"fast-scripts.svg",title:"Fast Scripts",key:"fast-scripts",scripting:"true"},n.createElement("p",null,"Scala CLI provides multiple ways to reduce the biggest problem of JVM-based scripting solutions: slow start time. Scala CLI aggressively caches inputs removing need for recompilations."),n.createElement("p",null,"Scripts can be packaged into the native applications (using e.g. Scala Native) for even faster cold startups.")),n.createElement(l.Z,{image:"sc-files-support.svg",title:"Support for .sc files",key:"sc-files-support",scripting:"true"},n.createElement("p",null,"Scala CLI is backwards compatible with ammonite scripts."),n.createElement("p",null,"No need to migrate your existing scripts to use all the powers of Scala CLI.")),n.createElement(l.Z,{image:"self-contained-examples.svg",title:"Self-contained examples",key:"self-contained-examples",prototyping:"true"},n.createElement("p",null,"With Scala CLI, configuration can be included in source code so complex examples can be self-contained and shipped as e.g. gist. Moreover, Scala CLI can compile, run and test gists without any manual work!"),n.createElement("p",null,"Scala CLI is a perfect tool to submit and reproduce bugs"))];function r(){return i}},2841:function(e,t,a){a.r(t);var n=a(7294),l=a(2263),i=a(308),r=a(9882),c=(a(1260),a(2740)),s=a(2051),o=a(115),m=a(2994),u=a(1434),d=a(1657),p=a(3352),g=a(604);t.default=function(e){var t=(0,l.Z)().siteConfig;return n.createElement(i.Z,{title:t.title,description:t.tagline},n.createElement("div",{className:"container content"},n.createElement(p.Z,{title:"Scala CLI is a command-line tool to interact with Scala language.",image:"demo.svg"},n.createElement("p",null,"It allows to compile, run, test, package (and more) your Scala code.")),n.createElement(r.Z,{className:"section-about"},n.createElement(o.Z,{title:"Why Scala CLI?"},n.createElement("p",null,"Scala CLI combines all the features you need to learn and use Scala in your (single-module) projects. Scala CLI is intuitive ",n.createElement("span",null,"and interactive")),n.createElement("p",null,"If you are bored with reading documentation or landing pages you can just ",n.createElement("a",{href:"#install"},"install")," and ",n.createElement("a",{href:"#enjoy"},"enjoy `scala-cli`"),"."))),n.createElement(r.Z,{className:"section-features"},n.createElement(c.Z,{title:"Caught your interest?"},"Let us convince you why Scala CLI is ",n.createElement("span",null,"worth to give it a go.")),n.createElement("div",{className:"section-features__row row"},n.createElement(s.Z,{title:"Intuitive, simple",icon:"img/hand.png"},n.createElement("strong",null,"No complicated mechanism, tasks, plugins or extension.")," Single-module only. All our commands have multiple aliases and follow well-known conventions."),n.createElement(s.Z,{title:"Fast",icon:"img/rocket.png"},n.createElement("strong",null,"Scala CLI is optimize to respond as quickly as possible.")," CLI is compiled to native code and compilations are ",n.createElement("a",{href:"#href"},"offloaded to bloop")),n.createElement(s.Z,{title:"Command-line first",icon:"img/monitor.png"},n.createElement("strong",null,"Scala CLI does not require any configuration file and all in-file configuration can be overridden by command-line.")," No additional installation or setup of environment (like specific working directory) required."))),n.createElement("div",{id:"use_cases"}),n.createElement(r.Z,{className:"section-use-tiles"},n.createElement("div",{className:"row"},n.createElement(u.Z,{title:"Who is Scala CLI designed for?",colsize:"12",promptsign:!0}),n.createElement("div",{className:"col col--12"},n.createElement("div",{className:"use-boxes row"},n.createElement(m.Z,{title:"Education",slug:"education",description:"Scala CLI is a help not a distraction while learning Scala, a library or programming in general."}),n.createElement(m.Z,{title:"Scripting",slug:"scripting",description:"Scala CLI has all tools to create or be integrated into scripts with whole power of Scala ecosystem."}),n.createElement(m.Z,{title:"Prototyping, Experimenting, Reproducing",slug:"prototyping",description:"With Scala CLI, experimenting with different libraries, Scala or JVM versions or compiler options just easy and fun."}),n.createElement(m.Z,{title:"Single-module projects",slug:"projects",description:"Scala CLI provides all tools to manage single-module project like CLI or basic web applications or sever-less lambdas."}),n.createElement(m.Z,{title:"/// your use case",slug:!1,description:"If you see other use case for Scala CLI let us know using github discussions!"}))))),n.createElement(r.Z,{className:"section-install-cli"},n.createElement("div",{className:"row"},n.createElement(u.Z,{title:"Install Scala CLI",colsize:"4",promptsign:!0}),n.createElement("div",{className:"col col--8"},n.createElement(d.Z,null)))),n.createElement(r.Z,{className:"section-image-box"},n.createElement(c.Z,{title:"Still undecided?"},"Here come our ",n.createElement("span",null,"main features")),(0,g.Z)())))}}}]);