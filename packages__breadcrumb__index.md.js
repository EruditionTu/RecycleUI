(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")},WpQk:function(e,t,a){},"dMo/":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("hKI/"),c=a.n(r);a("WpQk");function m(e,t){return s(e)||d(e,t)||u(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,m=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(o){m=!0,l=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(m)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),o=m(r,2),u=o[0],i=o[1],d=Object(n["useState"])(!1),s=m(d,2),E=s[0],h=s[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){i(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":u||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},p5JV:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("Zxc8"),m=a("dMo/"),o=l.a.memo((e=>{var t=e.demos,a=t["breadcrumb-basic"].component,n=t["breadcrumb-withicon"].component,o=t["breadcrumb-customseq"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"breadcrumb"},l.a.createElement(r["AnchorLink"],{to:"#breadcrumb","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Breadcrumb"),l.a.createElement("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy."),l.a.createElement("h2",{id:"when-to-use"},l.a.createElement(r["AnchorLink"],{to:"#when-to-use","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"When To Use"),l.a.createElement("ul",null,l.a.createElement("li",null,"When the system has more than two layers in a hierarchy."),l.a.createElement("li",null,"When you need to inform the user of where they are."),l.a.createElement("li",null,"When the user may need to navigate back to a higher level.")),l.a.createElement("h2",{id:"basic"},l.a.createElement(r["AnchorLink"],{to:"#basic","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Basic"),l.a.createElement("p",null,"The simplest use.")),l.a.createElement(c["default"],t["breadcrumb-basic"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"with-an-icon"},l.a.createElement(r["AnchorLink"],{to:"#with-an-icon","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"With an Icon"),l.a.createElement("p",null,"The icon should be placed in front of the text.")),l.a.createElement(c["default"],t["breadcrumb-withicon"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"configuring-the-separator"},l.a.createElement(r["AnchorLink"],{to:"#configuring-the-separator","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Configuring the Separator"),l.a.createElement("p",null,"The separator can be customized by setting the separator property: ",l.a.createElement("code",null,'separator=">"'),".")),l.a.createElement(c["default"],t["breadcrumb-customseq"].previewerProps,l.a.createElement(o,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"bread-crumbs-with-drop-down-menu"},l.a.createElement(r["AnchorLink"],{to:"#bread-crumbs-with-drop-down-menu","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Bread crumbs with drop down menu"),l.a.createElement("p",null,"Breadcrumbs support drop down menu."),l.a.createElement("h2",{id:"breadcrumb-api"},l.a.createElement(r["AnchorLink"],{to:"#breadcrumb-api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Breadcrumb API"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"className"),l.a.createElement("td",null,"ClassName style of Breadcrumb"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"<></>"))),l.a.createElement("tr",null,l.a.createElement("td",null,"style"),l.a.createElement("td",null,"ClassName style of Breadcrumb"),l.a.createElement("td",null,l.a.createElement("code",null,"CSSProperties")),l.a.createElement("td",null,"``")),l.a.createElement("tr",null,l.a.createElement("td",null,"separator"),l.a.createElement("td",null,"The separator of each item in Breadcrumb"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,l.a.createElement("code",null,"/"))))),l.a.createElement("h2",{id:"breadcrumbitem-api"},l.a.createElement(r["AnchorLink"],{to:"#breadcrumbitem-api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Breadcrumb.Item API"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"className"),l.a.createElement("td",null,"ClassName style of Breadcrumb.Item"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"<></>"))),l.a.createElement("tr",null,l.a.createElement("td",null,"style"),l.a.createElement("td",null,"The style of Breadcrumb.Item"),l.a.createElement("td",null,l.a.createElement("code",null,"CSSProperties")),l.a.createElement("td",null,"``")),l.a.createElement("tr",null,l.a.createElement("td",null,"href"),l.a.createElement("td",null,"Linked Address"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,"``")),l.a.createElement("tr",null,l.a.createElement("td",null,"separator"),l.a.createElement("td",null,"Breakcrunch. Item is the separator of the previous one"),l.a.createElement("td",null,l.a.createElement("code",null,"ReactNode")),l.a.createElement("td",null,l.a.createElement("code",null,"/"))),l.a.createElement("tr",null,l.a.createElement("td",null,"dropdownProps"),l.a.createElement("td",null,"Breakcrunch. Item is the separator of the previous one"),l.a.createElement("td",null,"``"),l.a.createElement("td",null,"``")),l.a.createElement("tr",null,l.a.createElement("td",null,"menu"),l.a.createElement("td",null,"Menu item configuration"),l.a.createElement("td",null,"``"),l.a.createElement("td",null,"``")))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:a})}}}]);