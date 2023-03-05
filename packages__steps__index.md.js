(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[106],{MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")},"W4H+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("Zxc8"),o=a("dMo/"),i=l.a.memo((e=>{var t=e.demos,a=t["steps-basic"].component,n=t["steps-easy"].component,i=t["steps-error"].component,s=t["steps-dot"].component,m=t["steps-steps"].component,u=t["steps-vertical"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"steps"},l.a.createElement(r["AnchorLink"],{to:"#steps","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Steps"),l.a.createElement("p",null,l.a.createElement("code",null,"Steps")," is a navigation bar that guides users through the steps of a task."),l.a.createElement("h2",{id:"when-to-use"},l.a.createElement(r["AnchorLink"],{to:"#when-to-use","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"When To Use"),l.a.createElement("p",null,"When a given task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier."),l.a.createElement("h2",{id:"basic-usage"},l.a.createElement(r["AnchorLink"],{to:"#basic-usage","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Basic Usage"),l.a.createElement("p",null,"Simple step bar.")),l.a.createElement(c["default"],t["steps-basic"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"no-details"},l.a.createElement(r["AnchorLink"],{to:"#no-details","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"No details"),l.a.createElement("p",null,"Simple step bar.")),l.a.createElement(c["default"],t["steps-easy"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"step-operation-error"},l.a.createElement(r["AnchorLink"],{to:"#step-operation-error","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Step operation error"),l.a.createElement("p",null,"Use the ",l.a.createElement("code",null,"status")," attribute of ",l.a.createElement("code",null,"Steps")," to specify the status of the current step.")),l.a.createElement(c["default"],t["steps-error"].previewerProps,l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"dot-step-bar"},l.a.createElement(r["AnchorLink"],{to:"#dot-step-bar","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Dot step bar"),l.a.createElement("p",null,"A progress bar containing step points.")),l.a.createElement(c["default"],t["steps-dot"].previewerProps,l.a.createElement(s,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"step-switching"},l.a.createElement(r["AnchorLink"],{to:"#step-switching","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Step switching"),l.a.createElement("p",null,"It is usually used with content and buttons to indicate the processing progress of a process.")),l.a.createElement(c["default"],t["steps-steps"].previewerProps,l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"step-bar-in-vertical-direction"},l.a.createElement(r["AnchorLink"],{to:"#step-bar-in-vertical-direction","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Step bar in vertical direction"),l.a.createElement("p",null,"Simple vertical step bar.")),l.a.createElement(c["default"],t["steps-vertical"].previewerProps,l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("h3",{id:"steps-api"},l.a.createElement(r["AnchorLink"],{to:"#steps-api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Steps API"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"current"),l.a.createElement("td",null,"Specify the current step, counting from 0."),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"0"))),l.a.createElement("tr",null,l.a.createElement("td",null,"status"),l.a.createElement("td",null,"The status of the current step. The optional values are ",l.a.createElement("code",null,"wait"),"\u3001",l.a.createElement("code",null,"process"),"\u3001",l.a.createElement("code",null,"finish"),"\u3001",l.a.createElement("code",null,"error")),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"process"))),l.a.createElement("tr",null,l.a.createElement("td",null,"direction"),l.a.createElement("td",null,"Specify step bar direction, support horizontal",l.a.createElement("code",null,"vertical"),"\u3001",l.a.createElement("code",null,"horizontal")),l.a.createElement("td",null,"Specify step bar direction, support horizontal",l.a.createElement("code",null,"vertical | horizontal")),l.a.createElement("td",null,l.a.createElement("code",null,"horizontal"))),l.a.createElement("tr",null,l.a.createElement("td",null,"progressDot"),l.a.createElement("td",null,"Dot step bar"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))))),l.a.createElement("h3",{id:"stepsstep-api"},l.a.createElement(r["AnchorLink"],{to:"#stepsstep-api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Steps.Step API"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"status"),l.a.createElement("td",null,"Specify the status. When this attribute is not configured, the ",l.a.createElement("code",null,"current")," of 'Steps' will be used to automatically specify the status.\u53ef\u9009\uff1a",l.a.createElement("code",null,"wait")," ",l.a.createElement("code",null,"process")," ",l.a.createElement("code",null,"finish")," ",l.a.createElement("code",null,"error")),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"wait"))),l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,"Specify each step title"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))),l.a.createElement("tr",null,l.a.createElement("td",null,"direction"),l.a.createElement("td",null,"Detailed description of steps, optional"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))),l.a.createElement("tr",null,l.a.createElement("td",null,"icon"),l.a.createElement("td",null,"Icon for step"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:a})}},WpQk:function(e,t,a){},"dMo/":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("hKI/"),c=a.n(r);a("WpQk");function o(e,t){return d(e)||u(e,t)||s(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function u(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw l}}return r}}function d(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),i=o(r,2),s=i[0],m=i[1],u=Object(n["useState"])(!1),d=o(u,2),E=d[0],p=d[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){m(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":s||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E}}]);