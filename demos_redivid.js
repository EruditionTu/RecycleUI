(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"/DUr":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("jF7U");t["default"]=()=>i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),i.a.createElement(a["a"],null),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),i.a.createElement(a["a"],{dashed:!0}),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."))},"1RwU":function(e,t,n){"use strict";n("Wze+")},NVu2:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("jF7U");t["default"]=()=>i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),i.a.createElement(a["a"],null,"Text"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),i.a.createElement(a["a"],{align:"left"},"Left Text"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),i.a.createElement(a["a"],{align:"right"},"Right Text"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),i.a.createElement(a["a"],{align:"left",orientationMargin:0},"Left Text with 0 orientationMargin"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),i.a.createElement(a["a"],{align:"right",orientationMargin:50},"Right Text with 50px orientationMargin"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."))},PfKU:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("jF7U");t["default"]=()=>i.a.createElement(i.a.Fragment,null,"Text",i.a.createElement(a["a"],{type:"vertical"}),i.a.createElement("a",{href:"#"},"Link"),i.a.createElement(a["a"],{type:"vertical"}),i.a.createElement("a",{href:"#"},"Link"))},PpiC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function i(e,t){if(null==e)return{};var n,i,a=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return i}))},QLaP:function(e,t,n){"use strict";var r=function(e,t,n,r,i,a,o,c){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,a,o,c],s=0;l=new Error(t.replace(/%s/g,(function(){return u[s++]}))),l.name="Invariant Violation"}throw l.framesToPop=1,l}};e.exports=r},TSYQ:function(e,t,n){var r,i;(function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a["default"]=a,e.exports=a):(r=[],i=function(){return a}.apply(t,r),void 0===i||(e.exports=i))})()},"Wze+":function(e,t,n){},jF7U:function(e,t,n){"use strict";var r=n("0Owb"),i=n("k1fw"),a=n("PpiC"),o=n("TSYQ"),c=n.n(o),l=n("q1tI"),u=n.n(l),s=n("QLaP"),m=n.n(s),p=(n("1RwU"),["className","children","dashed","type","align","orientationMargin"]),d=Object(l["forwardRef"])(((e,t)=>{var n=e.className,o=void 0===n?"":n,s=e.children,d=e.dashed,f=void 0!==d&&d,g=e.type,b=void 0===g?"horizontal":g,h=e.align,v=void 0===h?"center":h,O=e.orientationMargin,y=Object(a["a"])(e,p),j="left"===v&&"number"===typeof O,E="right"===v&&"number"===typeof O;m()("center"===v||"left"===v||"right"===v,"align must be included in left,right or center"),m()("horizontal"===b||"vertical"===b,"type must be included in horizontal or vertical");var w=Object(l["useMemo"])((()=>"recycle-ui-divider"),[]),q=Object(l["useMemo"])((()=>c()(o,w,{["".concat(w,"-").concat(b)]:b,["".concat(w,"-").concat(v)]:v,["".concat(w,"-with-text")]:s,["".concat(w,"-dashed")]:f,["".concat(w,"-no-default-orientation-margin-left")]:j,["".concat(w,"-no-default-orientation-margin-right")]:E})),[o,w,b,v,s,f,j,E]),S=Object(i["a"])(Object(i["a"])({},j&&{marginLeft:O}),E&&{marginRight:O});return u.a.createElement("div",Object(r["a"])({ref:t,className:q},y),s&&"horizontal"===b&&u.a.createElement("span",{className:"".concat(w,"-inner-text"),style:S},s))}));t["a"]=d},k1fw:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return a}))}}]);