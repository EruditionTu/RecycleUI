(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{MZF8:function(e,t,l){"use strict";var a=l("ogwx");l.d(t,"a",(function(){return a["b"]}));l("VCU9")},WpQk:function(e,t,l){},aEM5:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),c=l("dEAq"),r=l("Zxc8"),o=l("dMo/"),u=n.a.memo((e=>{var t=e.demos,l=t["checkbox-basic"].component,a=t["checkbox-disabled"].component,u=t["checkbox-somegroup"].component,m=t["checkbox-behandled"].component,d=t["checkbox-allselect"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"checkbox"},n.a.createElement(c["AnchorLink"],{to:"#checkbox","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Checkbox"),n.a.createElement("p",null,"Checkbox component."),n.a.createElement("h2",{id:"when-to-use"},n.a.createElement(c["AnchorLink"],{to:"#when-to-use","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"When To Use"),n.a.createElement("ul",null,n.a.createElement("li",null,"Used for selecting multiple values from several options."),n.a.createElement("li",null,"If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.")),n.a.createElement("h2",{id:"basic"},n.a.createElement(c["AnchorLink"],{to:"#basic","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Basic"),n.a.createElement("p",null,"Basic usage of checkbox.")),n.a.createElement(r["default"],t["checkbox-basic"].previewerProps,n.a.createElement(l,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"disabled"},n.a.createElement(c["AnchorLink"],{to:"#disabled","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Disabled"),n.a.createElement("p",null,"Disabled checkbox.")),n.a.createElement(r["default"],t["checkbox-disabled"].previewerProps,n.a.createElement(a,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"checkbox-group"},n.a.createElement(c["AnchorLink"],{to:"#checkbox-group","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Checkbox Group"),n.a.createElement("p",null,"\u65b9\u4fbf\u7684\u4ece\u6570\u7ec4\u751f\u6210 Checkbox \u7ec4\u3002")),n.a.createElement(r["default"],t["checkbox-somegroup"].previewerProps,n.a.createElement(u,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"controlled-checkbox"},n.a.createElement(c["AnchorLink"],{to:"#controlled-checkbox","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Controlled Checkbox"),n.a.createElement("p",null,"Communicated with other components.")),n.a.createElement(r["default"],t["checkbox-behandled"].previewerProps,n.a.createElement(m,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"check-all"},n.a.createElement(c["AnchorLink"],{to:"#check-all","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Check all"),n.a.createElement("p",null,"Check all.")),n.a.createElement(r["default"],t["checkbox-allselect"].previewerProps,n.a.createElement(d,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"checkbox-api"},n.a.createElement(c["AnchorLink"],{to:"#checkbox-api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Checkbox API"),n.a.createElement(o["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"name"),n.a.createElement("td",null,"name attribute of ",n.a.createElement("code",null,'input[type="checkbox"]')),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"--"))),n.a.createElement("tr",null,n.a.createElement("td",null,"value"),n.a.createElement("td",null,"value attribute for ",n.a.createElement("code",null,'input[type="checkbox"]')),n.a.createElement("td",null,n.a.createElement("code",null,"any")),n.a.createElement("td",null,n.a.createElement("code",null,"--"))),n.a.createElement("tr",null,n.a.createElement("td",null,"checked"),n.a.createElement("td",null,"Specify whether it is currently selected"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultChecked"),n.a.createElement("td",null,"Initially selected"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,"Whether the checkbox is invalid"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onCheckedChange"),n.a.createElement("td",null,"Callback function when the checkbox selection status changes"),n.a.createElement("td",null,n.a.createElement("code",null,"function(e:boolean)")),n.a.createElement("td",null,n.a.createElement("code",null,"--"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onChange"),n.a.createElement("td",null,"The callback function in case of change, which is equivalent to the native event of Input"),n.a.createElement("td",null,n.a.createElement("code",null,"funciton(ChangeEvent<HTMLInputElement>)")),n.a.createElement("td",null,n.a.createElement("code",null,"--"))))),n.a.createElement("h2",{id:"checkboxgroup-api"},n.a.createElement(c["AnchorLink"],{to:"#checkboxgroup-api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Checkbox.Group API"),n.a.createElement(o["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"name"),n.a.createElement("td",null,"The ",n.a.createElement("code",null,"name")," property of all ",n.a.createElement("code",null,'input[type="checkbox"]')," children"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"--"))),n.a.createElement("tr",null,n.a.createElement("td",null,"value"),n.a.createElement("td",null,"Specify the selected option"),n.a.createElement("td",null,n.a.createElement("code",null,"Array<any>")),n.a.createElement("td",null,n.a.createElement("code",null,"[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"group"),n.a.createElement("td",null,"Specify options"),n.a.createElement("td",null,n.a.createElement("code",null,"Array<CheckboxProps>")),n.a.createElement("td",null,n.a.createElement("code",null,"[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultValue"),n.a.createElement("td",null,"Default Selected Options"),n.a.createElement("td",null,n.a.createElement("code",null,"Array<any>")),n.a.createElement("td",null,n.a.createElement("code",null,"[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,"Group failure"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onValueChange"),n.a.createElement("td",null,n.a.createElement("code",null,"Checkbox. Group ")," Callback when the selection status changes"),n.a.createElement("td",null,n.a.createElement("code",null,"(value: Array<any>) => void")),n.a.createElement("td",null,n.a.createElement("code",null,"--"))))))))}));t["default"]=e=>{var t=n.a.useContext(c["context"]),l=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(u,{demos:l})}},"dMo/":function(e,t,l){"use strict";var a=l("q1tI"),n=l.n(a),c=l("hKI/"),r=l.n(c);l("WpQk");function o(e,t){return E(e)||i(e,t)||m(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}function i(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,n,c=[],r=!0,o=!1;try{for(l=l.call(e);!(r=(a=l.next()).done);r=!0)if(c.push(a.value),t&&c.length===t)break}catch(u){o=!0,n=u}finally{try{r||null==l["return"]||l["return"]()}finally{if(o)throw n}}return c}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(a["useRef"])(),c=Object(a["useState"])(!1),u=o(c,2),m=u[0],d=u[1],i=Object(a["useState"])(!1),E=o(i,2),s=E[0],h=E[1];return Object(a["useEffect"])((function(){var e=l.current,t=r()((function(){d(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":m||void 0,"data-right-folded":s||void 0},n.a.createElement("table",null,t)))};t["a"]=s}}]);