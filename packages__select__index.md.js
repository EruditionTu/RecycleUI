(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[102],{K22Z:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("Zxc8"),o=a("dMo/"),i=l.a.memo((e=>{var t=e.demos,a=t["select-basic"].component,n=t["select-disabled"].component,i=t["select-size"].component,u=t["select-group"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"select"},l.a.createElement(r["AnchorLink"],{to:"#select","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Select"),l.a.createElement("p",null,"Select component to select value from options."),l.a.createElement("h2",{id:"when-to-use"},l.a.createElement(r["AnchorLink"],{to:"#when-to-use","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"When To Use"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"A dropdown menu for displaying choices - an elegant alternative to the native ",l.a.createElement("code",null,"<select>")," element.")),l.a.createElement("li",null,l.a.createElement("p",null,"Utilizing ",l.a.createElement("code",null,"Radio")," is recommended when there are fewer total options (less than 5)."))),l.a.createElement("h2",{id:"basic-usage"},l.a.createElement(r["AnchorLink"],{to:"#basic-usage","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Basic Usage")),l.a.createElement(c["default"],t["select-basic"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"disabled"},l.a.createElement(r["AnchorLink"],{to:"#disabled","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Disabled")),l.a.createElement(c["default"],t["select-disabled"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"size"},l.a.createElement(r["AnchorLink"],{to:"#size","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Size")),l.a.createElement(c["default"],t["select-size"].previewerProps,l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"option-group"},l.a.createElement(r["AnchorLink"],{to:"#option-group","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Option Group")),l.a.createElement(c["default"],t["select-group"].previewerProps,l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("h3",{id:"select-api"},l.a.createElement(r["AnchorLink"],{to:"#select-api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Select API"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"value"),l.a.createElement("td",null,"During control, the value of ",l.a.createElement("code",null,"select")," must be used with the ",l.a.createElement("code",null,"onChange")," function to update the value of ",l.a.createElement("code",null,"select")),l.a.createElement("td",null,l.a.createElement("code",null,"any")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))),l.a.createElement("tr",null,l.a.createElement("td",null,"disabled"),l.a.createElement("td",null,"Disable selector"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"defaultValue"),l.a.createElement("td",null,"Compare with ",l.a.createElement("code",null,"value")," to determine whether it is selected"),l.a.createElement("td",null,l.a.createElement("code",null,"any")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))),l.a.createElement("tr",null,l.a.createElement("td",null,"size"),l.a.createElement("td",null,"Select box size"),l.a.createElement("td",null,l.a.createElement("code",null,"large | default | small")),l.a.createElement("td",null,l.a.createElement("code",null,"default"))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:a})}},MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")},WpQk:function(e,t,a){},"dMo/":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("hKI/"),c=a.n(r);a("WpQk");function o(e,t){return s(e)||m(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function m(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),i=o(r,2),u=i[0],d=i[1],m=Object(n["useState"])(!1),s=o(m,2),E=s[0],h=s[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){d(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":u||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E}}]);