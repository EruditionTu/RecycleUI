(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[74],{MZF8:function(e,t,l){"use strict";var a=l("ogwx");l.d(t,"a",(function(){return a["b"]}));l("VCU9")},WpQk:function(e,t,l){},"dMo/":function(e,t,l){"use strict";var a=l("q1tI"),n=l.n(a),r=l("hKI/"),c=l.n(r);l("WpQk");function o(e,t){return s(e)||u(e,t)||d(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return i(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}function u(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,n,r=[],c=!0,o=!1;try{for(l=l.call(e);!(c=(a=l.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(m){o=!0,n=m}finally{try{c||null==l["return"]||l["return"]()}finally{if(o)throw n}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,l=Object(a["useRef"])(),r=Object(a["useState"])(!1),m=o(r,2),d=m[0],i=m[1],u=Object(a["useState"])(!1),s=o(u,2),E=s[0],p=s[1];return Object(a["useEffect"])((function(){var e=l.current,t=c()((function(){i(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":d||void 0,"data-right-folded":E||void 0},n.a.createElement("table",null,t)))};t["a"]=E},vhRr:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),r=l("dEAq"),c=l("Zxc8"),o=l("dMo/"),m=n.a.memo((e=>{var t=e.demos,l=t["grid-basic"].component,a=t["grid-blockdivider"].component,m=t["grid-offset"].component,d=t["grid-gridsort"].component,i=t["grid-typesetting"].component,u=t["grid-alignment"].component,s=t["grid-sort"].component,E=t["grid-flex"].component,p=t["grid-meida"].component,h=t["grid-other"].component,g=t["grid-gridconfig"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"grid"},n.a.createElement(r["AnchorLink"],{to:"#grid","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Grid"),n.a.createElement("p",null,"24 Grids System."),n.a.createElement("h2",{id:"outline"},n.a.createElement(r["AnchorLink"],{to:"#outline","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Outline"),n.a.createElement("p",null,"In the grid system, we define the frame outside the information area based on ",n.a.createElement("code",null,"row")," and ",n.a.createElement("code",null,"column"),", to ensure that every area can have stable arrangement."),n.a.createElement("p",null,"Following is a brief look at how it works:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Establish a set of ",n.a.createElement("code",null,"column")," in the horizontal space defined by ",n.a.createElement("code",null,"row")," (abbreviated ",n.a.createElement("code",null,"col"),")."),n.a.createElement("li",null,"Your content elements should be placed directly in the ",n.a.createElement("code",null,"col"),", and only ",n.a.createElement("code",null,"col")," should be placed directly in ",n.a.createElement("code",null,"row"),"."),n.a.createElement("li",null,"The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by ",n.a.createElement("code",null,"<Col span=","{","8","}"," />"),"."),n.a.createElement("li",null,"If the sum of ",n.a.createElement("code",null,"col")," spans in a ",n.a.createElement("code",null,"row")," are more than 24, then the overflowing col as a whole will start a new line arrangement.")),n.a.createElement("p",null,"Our grid systems base on Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement. The Grid system also supports vertical alignment - top aligned, vertically centered, bottom-aligned. You can also define the order of elements by using order."),n.a.createElement("p",null,'Layout uses a 24 grid layout to define the width of each "box", but does not rigidly adhere to the grid layout.'),n.a.createElement("h2",{id:"basic-grid"},n.a.createElement(r["AnchorLink"],{to:"#basic-grid","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Basic Grid"),n.a.createElement("p",null,"From the stack to the horizontal arrangement."),n.a.createElement("p",null,"You can create a basic grid system by using a single set of ",n.a.createElement("code",null,"Row")," and ",n.a.createElement("code",null,"Col")," grid assembly, all of the columns (",n.a.createElement("code",null,"Col"),") must be placed in ",n.a.createElement("code",null,"Row"),".")),n.a.createElement(c["default"],t["grid-basic"].previewerProps,n.a.createElement(l,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"grid-gutter"},n.a.createElement(r["AnchorLink"],{to:"#grid-gutter","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Grid Gutter"),n.a.createElement("p",null,"You can use the gutter property of Row as grid spacing, we recommend set it to ",n.a.createElement("code",null,"(16 + 8n) px")," (n stands for natural number)."),n.a.createElement("p",null,"You can set it to a object like ",n.a.createElement("code",null,"{"," xs: 8, sm: 16, md: 24, lg: 32 ","}")," for responsive design."),n.a.createElement("p",null,"You can use an array to set vertical spacing, [horizontal, vertical] ",n.a.createElement("code",null,"[16, ","{"," xs: 8, sm: 16, md: 24, lg: 32 ","}","]"),".")),n.a.createElement(c["default"],t["grid-blockdivider"].previewerProps,n.a.createElement(a,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"column-offset"},n.a.createElement(r["AnchorLink"],{to:"#column-offset","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Column offset"),n.a.createElement("p",null,"Column offset"),n.a.createElement("p",null,n.a.createElement("code",null,"offset")," can set the column to the right side. For example, using ",n.a.createElement("code",null,"offset = ","{","4","}")," can set the element shifted to the right four columns width.")),n.a.createElement(c["default"],t["grid-offset"].previewerProps,n.a.createElement(m,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"grid-sort"},n.a.createElement(r["AnchorLink"],{to:"#grid-sort","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Grid sort"),n.a.createElement("p",null,"Grid sort."),n.a.createElement("p",null,"By using ",n.a.createElement("code",null,"push")," and ",n.a.createElement("code",null,"pull")," class you can easily change column order.")),n.a.createElement(c["default"],t["grid-gridsort"].previewerProps,n.a.createElement(d,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"typesetting"},n.a.createElement(r["AnchorLink"],{to:"#typesetting","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Typesetting"),n.a.createElement("p",null,"Child elements depending on the value of the ",n.a.createElement("code",null,"start"),", ",n.a.createElement("code",null,"center"),", ",n.a.createElement("code",null,"end"),", ",n.a.createElement("code",null,"space-between"),", ",n.a.createElement("code",null,"space-around")," and ",n.a.createElement("code",null,"space-evenly"),", which are defined in its parent node typesetting mode.\u3002")),n.a.createElement(c["default"],t["grid-typesetting"].previewerProps,n.a.createElement(i,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"alignment"},n.a.createElement(r["AnchorLink"],{to:"#alignment","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Alignment"),n.a.createElement("p",null,"Child elements vertically aligned.")),n.a.createElement(c["default"],t["grid-alignment"].previewerProps,n.a.createElement(u,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"order"},n.a.createElement(r["AnchorLink"],{to:"#order","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Order"),n.a.createElement("p",null,"To change the element sort by ",n.a.createElement("code",null,"order"),".")),n.a.createElement(c["default"],t["grid-sort"].previewerProps,n.a.createElement(s,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"flex-stretch"},n.a.createElement(r["AnchorLink"],{to:"#flex-stretch","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Flex Stretch"),n.a.createElement("p",null,n.a.createElement("code",null,"Col")," provides ",n.a.createElement("code",null,"flex")," prop to support fill rest.")),n.a.createElement(c["default"],t["grid-flex"].previewerProps,n.a.createElement(E,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"responsive"},n.a.createElement(r["AnchorLink"],{to:"#responsive","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Responsive"),n.a.createElement("p",null,"Here preset six dimensions: xs sm md lg xl xxl.")),n.a.createElement(c["default"],t["grid-meida"].previewerProps,n.a.createElement(p,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"more-responsive"},n.a.createElement(r["AnchorLink"],{to:"#more-responsive","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"More responsive"),n.a.createElement("p",null,n.a.createElement("code",null,"span")," ",n.a.createElement("code",null,"pull")," ",n.a.createElement("code",null,"push")," ",n.a.createElement("code",null,"offset")," ",n.a.createElement("code",null,"order")," property can be embedded into ",n.a.createElement("code",null,"xs")," ",n.a.createElement("code",null,"sm")," ",n.a.createElement("code",null,"md")," ",n.a.createElement("code",null,"lg")," ",n.a.createElement("code",null,"xl")," ",n.a.createElement("code",null,"xxl")," properties to use, where ",n.a.createElement("code",null,"xs=","{","6","}")," is equivalent to ",n.a.createElement("code",null,"xs=","{","{","span: 6","}","}"),".")),n.a.createElement(c["default"],t["grid-other"].previewerProps,n.a.createElement(h,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"playground"},n.a.createElement(r["AnchorLink"],{to:"#playground","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Playground"),n.a.createElement("p",null,"A simple playground for column count and gutter.")),n.a.createElement(c["default"],t["grid-gridconfig"].previewerProps,n.a.createElement(g,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"row-api"},n.a.createElement(r["AnchorLink"],{to:"#row-api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Row API"),n.a.createElement(o["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"align"),n.a.createElement("td",null,"Vertical alignment"),n.a.createElement("td",null,n.a.createElement("code",null,"top | middle | bottom | stretch | ","{","[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'top' | 'middle' | 'bottom' | 'stretch'","}")),n.a.createElement("td",null,n.a.createElement("code",null,"top"))),n.a.createElement("tr",null,n.a.createElement("td",null,"gutter"),n.a.createElement("td",null,"Spacing between grids, could be a number or a object like ",n.a.createElement("code",null,"{"," xs: 8, sm: 16, md: 24","}"),". Or you can use array to make horizontal and vertical spacing work at the same time ",n.a.createElement("code",null,"[horizontal, vertical]")),n.a.createElement("td",null,n.a.createElement("code",null,"number | object | array")),n.a.createElement("td",null,n.a.createElement("code",null,"0"))),n.a.createElement("tr",null,n.a.createElement("td",null,"justify"),n.a.createElement("td",null,"Horizontal arrangement"),n.a.createElement("td",null,n.a.createElement("code",null,"start | end | center | space-around | space-between | space-evenly | ","{","[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'","}")),n.a.createElement("td",null,n.a.createElement("code",null,"start"))),n.a.createElement("tr",null,n.a.createElement("td",null,"wrap"),n.a.createElement("td",null,"Auto wrap line"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))))),n.a.createElement("h3",{id:"col-api"},n.a.createElement(r["AnchorLink"],{to:"#col-api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Col API"),n.a.createElement(o["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"flex"),n.a.createElement("td",null,"Flex layout style"),n.a.createElement("td",null,"`string"),n.a.createElement("td",null,"number `")),n.a.createElement("tr",null,n.a.createElement("td",null,"offset"),n.a.createElement("td",null,"The number of cells to offset Col from the left"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"0"))),n.a.createElement("tr",null,n.a.createElement("td",null,"order"),n.a.createElement("td",null,"Raster order"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"0"))),n.a.createElement("tr",null,n.a.createElement("td",null,"pull"),n.a.createElement("td",null,"The number of cells that raster is moved to the left"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"0"))),n.a.createElement("tr",null,n.a.createElement("td",null,"push"),n.a.createElement("td",null,"The number of cells that raster is moved to the right"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"0"))),n.a.createElement("tr",null,n.a.createElement("td",null,"span"),n.a.createElement("td",null,"Raster number of cells to occupy, 0 corresponds to ",n.a.createElement("code",null,"display: none")),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"0"))),n.a.createElement("tr",null,n.a.createElement("td",null,"xs"),n.a.createElement("td",null,n.a.createElement("code",null,"screen < 576px")," and also default setting, could be a ",n.a.createElement("code",null,"span")," value or an object containing above props"),n.a.createElement("td",null,n.a.createElement("code",null,"string|object")),n.a.createElement("td",null,n.a.createElement("code",null,"--"))),n.a.createElement("tr",null,n.a.createElement("td",null,"sm"),n.a.createElement("td",null,n.a.createElement("code",null,"screen \u2265 576px"),", could be a ",n.a.createElement("code",null,"span")," value or an object containing above props"),n.a.createElement("td",null,n.a.createElement("code",null,"string|object")),n.a.createElement("td",null,n.a.createElement("code",null,"--"))),n.a.createElement("tr",null,n.a.createElement("td",null,"md"),n.a.createElement("td",null,n.a.createElement("code",null,"screen \u2265 768px"),", could be a ",n.a.createElement("code",null,"span")," value or an object containing above props"),n.a.createElement("td",null,n.a.createElement("code",null,"string|object")),n.a.createElement("td",null,n.a.createElement("code",null,"--"))),n.a.createElement("tr",null,n.a.createElement("td",null,"lg"),n.a.createElement("td",null,n.a.createElement("code",null,"screen \u2265 992px"),", could be a ",n.a.createElement("code",null,"span")," value or an object containing above props"),n.a.createElement("td",null,n.a.createElement("code",null,"string|object")),n.a.createElement("td",null,n.a.createElement("code",null,"--"))),n.a.createElement("tr",null,n.a.createElement("td",null,"xl"),n.a.createElement("td",null,n.a.createElement("code",null,"screen \u2265 1200px"),", could be a ",n.a.createElement("code",null,"span")," value or an object containing above props"),n.a.createElement("td",null,n.a.createElement("code",null,"string|object")),n.a.createElement("td",null,n.a.createElement("code",null,"--"))),n.a.createElement("tr",null,n.a.createElement("td",null,"xxl"),n.a.createElement("td",null,n.a.createElement("code",null,"screen \u2265 1600px"),", could be a ",n.a.createElement("code",null,"span")," value or an object containing above props"),n.a.createElement("td",null,n.a.createElement("code",null,"string|object")),n.a.createElement("td",null,n.a.createElement("code",null,"--"))))))))}));t["default"]=e=>{var t=n.a.useContext(r["context"]),l=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(m,{demos:l})}}}]);