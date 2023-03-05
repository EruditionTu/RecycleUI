(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[90],{B8yr:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq"),o=n("Zxc8"),c=n("H1Ra"),i=n("dMo/"),m=l.a.memo((e=>{var t=e.demos,n=t["overlay-basic"].component,a=t["overlay-custom"].component,m=t["overlay-portal"].component,d=t["customanimation-customanimation"].component,u=t["overlay-customcontainer"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"overlay"},l.a.createElement(r["AnchorLink"],{to:"#overlay","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Overlay"),l.a.createElement("p",null,"A basic pop-up component, and other components like Tooltip, Dawer, Alert, etc. are all derived from the encapsulation of this component."),l.a.createElement("h2",{id:"when-to-use"},l.a.createElement(r["AnchorLink"],{to:"#when-to-use","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"When to use"),l.a.createElement("p",null,"When the pop-up window provided by the component library can no longer meet the development needs, you can modify it through the basic pop-up window provided."),l.a.createElement("h2",{id:"basic-use"},l.a.createElement(r["AnchorLink"],{to:"#basic-use","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Basic Use")),l.a.createElement(o["default"],t["overlay-basic"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"customize-pop-up-content"},l.a.createElement(r["AnchorLink"],{to:"#customize-pop-up-content","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Customize pop-up content")),l.a.createElement(o["default"],t["overlay-custom"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"it-is-mounted-under-the-root-node-body-by-default"},l.a.createElement(r["AnchorLink"],{to:"#it-is-mounted-under-the-root-node-body-by-default","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"It is mounted under the root node body by default"),l.a.createElement("p",null,"`usePortal 'attribute can control whether the component uses Portal to generate nodes outside the root node.")),l.a.createElement(o["default"],t["overlay-portal"].previewerProps,l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"custom-animation"},l.a.createElement(r["AnchorLink"],{to:"#custom-animation","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Custom Animation"),l.a.createElement("p",null,"The animation of this component is encapsulated by the 'react-transition-group' component. You can define the animation of pop-up window through the attribute 'transitionName'. For details, you can view the usage of 'react-transition-group'\uff0c",l.a.createElement(r["Link"],{to:"https://github.com/reactjs/react-transition-group%E3%80%82"},"https://github.com/reactjs/react-transition-group\u3002"))),l.a.createElement(o["default"],t["customanimation-customanimation"].previewerProps,l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement(c["a"],{code:"@animation-prefix:~'animation-flipX';\n@native-prefix:~'recycle-ui-overlay';\n.@{animation-prefix}-enter .@{native-prefix}-backdrop {\n  opacity: 0.01;\n}\n.@{animation-prefix}-enter-active .@{native-prefix}-backdrop {\n  opacity: 1;\n  transition: opacity 1s ease-in;\n}\n.@{animation-prefix}-exit .@{native-prefix}-backdrop {\n  opacity: 1;\n}\n.@{animation-prefix}-exit-active .@{native-prefix}-backdrop {\n  opacity: 0.01;\n  transition: opacity 1s ease-in;\n}\n.@{animation-prefix}-enter-active .@{native-prefix}-content {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: flipInX;\n}\n.@{animation-prefix}-exit-active .@{native-prefix}-content {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: flipOutX;\n}\n\n.@{animation-prefix}-enter,\n.@{animation-prefix}-enter-done,\n.@{animation-prefix}-exit {\n  display: inherit;\n}\n\n@keyframes flipOutX {\n  0% { transform: perspective(400px); }\n  30% {\n    transform: perspective(400px) rotateX(-20deg);\n    opacity: 1;\n  }\n  to {\n    transform: perspective(400px) rotateX(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipInX {\n  0% {\n    transform: perspective(400px) rotateX(90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n  40% {\n    transform: perspective(400px) rotateX(-20deg);\n    animation-timing-function: ease-in;\n  }\n  60% {\n    transform: perspective(400px) rotateX(10deg);\n    opacity: 1;\n  }\n  80% {\n    transform: perspective(400px) rotateX(-5deg);\n  }\n  to { transform: perspective(400px); }\n}",lang:"less"}),l.a.createElement("h2",{id:"custom-mount-node"},l.a.createElement(r["AnchorLink"],{to:"#custom-mount-node","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Custom mount node"),l.a.createElement("p",null,"If the 'usePortal' attribute is true, you can use containerDom to mount the overlay component under the specified dom node.")),l.a.createElement(o["default"],t["overlay-customcontainer"].previewerProps,l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Describe"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"open"),l.a.createElement("td",null,"Whether the pop-up window is visible"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"usePortal"),l.a.createElement("td",null,"Whether to use the react16 scheme Portal to generate the modal dialog box outside the root node"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"true"))),l.a.createElement("tr",null,l.a.createElement("td",null,"containerDom"),l.a.createElement("td",null,"The dialog box generates the dom node mounted outside the node"),l.a.createElement("td",null,l.a.createElement("code",null,"HTMLElemet")),l.a.createElement("td",null,l.a.createElement("code",null,"document.body"))),l.a.createElement("tr",null,l.a.createElement("td",null,"maskClosable"),l.a.createElement("td",null,"Click whether the covering layer can be closed"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"true"))),l.a.createElement("tr",null,l.a.createElement("td",null,"portalProps"),l.a.createElement("td",null,"Set Portal Component Properties"),l.a.createElement("td",null,l.a.createElement("code",null,"{","container?:HTMLElement","}"),"\uff08At present, there is only one attribute, and other attributes may be added later\ud83d\ude02\uff09"),l.a.createElement("td",null,l.a.createElement("code",null,"{","}"))),l.a.createElement("tr",null,l.a.createElement("td",null,"backdropProps"),l.a.createElement("td",null,"Mask Layer HTML Attribute Settings"),l.a.createElement("td",null,l.a.createElement("code",null,"HTMLAttributes")),l.a.createElement("td",null,l.a.createElement("code",null,"{","}"))),l.a.createElement("tr",null,l.a.createElement("td",null,"dialogProps"),l.a.createElement("td",null,"Button Click Callback Event"),l.a.createElement("td",null,l.a.createElement("code",null,"HTMLAttributes")),l.a.createElement("td",null,l.a.createElement("code",null,"{","}"))),l.a.createElement("tr",null,l.a.createElement("td",null,"unmountOnExit"),l.a.createElement("td",null,"Exit Animation Unload Component"),l.a.createElement("td",null,l.a.createElement("code",null,"CSSProperties")),l.a.createElement("td",null,l.a.createElement("code",null,"{","}"))),l.a.createElement("tr",null,l.a.createElement("td",null,"hasBackdrop"),l.a.createElement("td",null,"Whether there is a background, whether to add a style to ",l.a.createElement("code",null,"recycle-ui-overlay-open ")," Prevent scrollbars from appearing"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"true"))),l.a.createElement("tr",null,l.a.createElement("td",null,"transitionName"),l.a.createElement("td",null,l.a.createElement("code",null,"transitionName"),"can be imported as a field of' classNames' of ",l.a.createElement("code",null,"react-transition-group"),", and customized animation"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))),l.a.createElement("tr",null,l.a.createElement("td",null,"timeout"),l.a.createElement("td",null,"Animation execution time"),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"300"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onClose"),l.a.createElement("td",null,"Click the mask layer callback function, and set open=false to close through this function. OnClosed is a callback function after the pop-up box closes the animation. There are obvious differences and it is easy to confuse."),l.a.createElement("td",null,l.a.createElement("code",null,"(evn: React.MouseEvent<HTMLElement, MouseEvent>) => void")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onEnter"),l.a.createElement("td",null,"The callback that is triggered before the 'Entering' state is applied. An additional parameter is provided to indicate whether the entry phase ",l.a.createElement("code",null," isApplying")," occurs on the initial load"),l.a.createElement("td",null,l.a.createElement("code",null,"(node: HTMLElement, isAppearing: boolean) => void")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onEntering"),l.a.createElement("td",null,'The callback that is triggered after the "Entering" state is applied. An additional parameter is provided to indicate whether the entry phase ',l.a.createElement("code",null,"isAppearing")," occurs on the initial load"),l.a.createElement("td",null,l.a.createElement("code",null,"(node: HTMLElement, isAppearing: boolean) => void")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onEntered"),l.a.createElement("td",null,'Callback triggered after the "Entered" state is applied. An additional parameter is provided to indicate whether the entry phase ',l.a.createElement("code",null,"isAppearing")," occurs on the initial load"),l.a.createElement("td",null,l.a.createElement("code",null,"(node: HTMLElement, isAppearing: boolean) => void")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onExit"),l.a.createElement("td",null,"The callback that is triggered before the Exiting state is applied."),l.a.createElement("td",null,l.a.createElement("code",null,"(node: HTMLElement) => void")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onExiting"),l.a.createElement("td",null,"The callback that is triggered after the Exiting state is applied."),l.a.createElement("td",null,l.a.createElement("code",null,"(node: HTMLElement) => void")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onExited"),l.a.createElement("td",null,"The callback that is triggered after the Exited state is applied."),l.a.createElement("td",null,l.a.createElement("code",null,"(node: HTMLElement) => void")),l.a.createElement("td",null,l.a.createElement("code",null,"--"))))),l.a.createElement("p",null,"It supports the transmission of ",l.a.createElement("code",null,"CSSTransition")," native events."))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(m,{demos:n})}},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},WpQk:function(e,t,n){},"dMo/":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("hKI/"),o=n.n(r);n("WpQk");function c(e,t){return s(e)||u(e,t)||m(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(r.push(a.value),t&&r.length===t)break}catch(i){c=!0,l=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),i=c(r,2),m=i[0],d=i[1],u=Object(a["useState"])(!1),s=c(u,2),E=s[0],p=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=o()((function(){d(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E}}]);