"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[6388],{23782:(e,t,r)=>{r.d(t,{tb:()=>W});var n,o=[],i="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(n||(n={}));var a,l=function(e){return Object.freeze(e)},c=function(e,t){this.inlineSize=e,this.blockSize=t,l(this)},s=function(){function e(e,t,r,n){return this.x=e,this.y=t,this.width=r,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,l(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),u=function(e){return e instanceof SVGElement&&"getBBox"in e},h=function(e){if(u(e)){var t=e.getBBox(),r=t.width,n=t.height;return!r&&!n}var o=e,i=o.offsetWidth,a=o.offsetHeight;return!(i||a||e.getClientRects().length)},f=function(e){var t;if(e instanceof Element)return!0;var r=null===(t=null==e?void 0:e.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},p="undefined"!=typeof window?window:{},d=new WeakMap,g=/auto|scroll/,m=/^tb|vertical/,v=/msie|trident/i.test(p.navigator&&p.navigator.userAgent),b=function(e){return parseFloat(e||"0")},E=function(e,t,r){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=!1),new c((r?t:e)||0,(r?e:t)||0)},T=l({devicePixelContentBoxSize:E(),borderBoxSize:E(),contentBoxSize:E(),contentRect:new s(0,0,0,0)}),S=function(e,t){if(void 0===t&&(t=!1),d.has(e)&&!t)return d.get(e);if(h(e))return d.set(e,T),T;var r=getComputedStyle(e),n=u(e)&&e.ownerSVGElement&&e.getBBox(),o=!v&&"border-box"===r.boxSizing,i=m.test(r.writingMode||""),a=!n&&g.test(r.overflowY||""),c=!n&&g.test(r.overflowX||""),f=n?0:b(r.paddingTop),p=n?0:b(r.paddingRight),S=n?0:b(r.paddingBottom),w=n?0:b(r.paddingLeft),y=n?0:b(r.borderTopWidth),x=n?0:b(r.borderRightWidth),R=n?0:b(r.borderBottomWidth),C=w+p,B=f+S,k=(n?0:b(r.borderLeftWidth))+x,z=y+R,_=c?e.offsetHeight-z-e.clientHeight:0,O=a?e.offsetWidth-k-e.clientWidth:0,N=o?C+k:0,P=o?B+z:0,A=n?n.width:b(r.width)-N-O,D=n?n.height:b(r.height)-P-_,j=A+C+O+k,G=D+B+_+z,J=l({devicePixelContentBoxSize:E(Math.round(A*devicePixelRatio),Math.round(D*devicePixelRatio),i),borderBoxSize:E(j,G,i),contentBoxSize:E(A,D,i),contentRect:new s(w,f,A,D)});return d.set(e,J),J},w=function(e,t,r){var o=S(e,r),i=o.borderBoxSize,a=o.contentBoxSize,l=o.devicePixelContentBoxSize;switch(t){case n.DEVICE_PIXEL_CONTENT_BOX:return l;case n.BORDER_BOX:return i;default:return a}},y=function(e){var t=S(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=l([t.borderBoxSize]),this.contentBoxSize=l([t.contentBoxSize]),this.devicePixelContentBoxSize=l([t.devicePixelContentBoxSize])},x=function(e){if(h(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},R=function(){var e=1/0,t=[];o.forEach((function(r){if(0!==r.activeTargets.length){var n=[];r.activeTargets.forEach((function(t){var r=new y(t.target),o=x(t.target);n.push(r),t.lastReportedSize=w(t.target,t.observedBox),o<e&&(e=o)})),t.push((function(){r.callback.call(r.observer,n,r.observer)})),r.activeTargets.splice(0,r.activeTargets.length)}}));for(var r=0,n=t;r<n.length;r++){(0,n[r])()}return e},C=function(e){o.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(r){r.isActive()&&(x(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))}))}))},B=function(){var e,t=0;for(C(t);o.some((function(e){return e.activeTargets.length>0}));)t=R(),C(t);return o.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:i}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=i),window.dispatchEvent(e)),t>0},k=[],z=function(e){if(!a){var t=0,r=document.createTextNode("");new MutationObserver((function(){return k.splice(0).forEach((function(e){return e()}))})).observe(r,{characterData:!0}),a=function(){r.textContent="".concat(t?t--:t++)}}k.push(e),a()},_=0,O={attributes:!0,characterData:!0,childList:!0,subtree:!0},N=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],P=function(e){return void 0===e&&(e=0),Date.now()+e},A=!1,D=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!A){A=!0;var r,n=P(e);r=function(){var r=!1;try{r=B()}finally{if(A=!1,e=n-P(),!_)return;r?t.run(1e3):e>0?t.run(e):t.start()}},z((function(){requestAnimationFrame(r)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,O)};document.body?t():p.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),N.forEach((function(t){return p.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),N.forEach((function(t){return p.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),j=function(e){!_&&e>0&&D.start(),!(_+=e)&&D.stop()},G=function(){function e(e,t){this.target=e,this.observedBox=t||n.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=w(this.target,this.observedBox,!0);return e=this.target,u(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),J=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},V=new WeakMap,I=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},L=function(){function e(){}return e.connect=function(e,t){var r=new J(e,t);V.set(e,r)},e.observe=function(e,t,r){var n=V.get(e),i=0===n.observationTargets.length;I(n.observationTargets,t)<0&&(i&&o.push(n),n.observationTargets.push(new G(t,r&&r.box)),j(1),D.schedule())},e.unobserve=function(e,t){var r=V.get(e),n=I(r.observationTargets,t),i=1===r.observationTargets.length;n>=0&&(i&&o.splice(o.indexOf(r),1),r.observationTargets.splice(n,1),j(-1))},e.disconnect=function(e){var t=this,r=V.get(e);r.observationTargets.slice().forEach((function(r){return t.unobserve(e,r.target)})),r.activeTargets.splice(0,r.activeTargets.length)},e}(),W=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");L.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");L.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");L.unobserve(this,e)},e.prototype.disconnect=function(){L.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}()},73376:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(86662),o=r(86056),i=r(26322),a=r(90264),l=r(38948);const c="fdFKYQbTadYRAFXyIsyC",s="TGQfKkX166qX5wG5Oi6O",u="xoMDGjw3kWAGwRmDVR2l",h="juDjVuIAwAS6vlI_lwTq",f="s2U_wfx5rmRlV8iKcHg5",p=()=>i.createElement("ul",{className:c},i.createElement("li",{className:s},i.createElement("dl",null,i.createElement("dt",null,"相关资源"),i.createElement("dd",null,i.createElement("ul",{className:u},i.createElement("li",{className:h},"自主研发",i.createElement("ul",null,i.createElement("li",null,i.createElement("a",{href:"http://49.232.163.126:8084/",target:"_blank",rel:"noopener noreferrer"},"adherev")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-BUILD",target:"_blank",rel:"noopener noreferrer"},"CTSJ-BUILD")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-BUILDV",target:"_blank",rel:"noopener noreferrer"},"CTSJ-BUILDV")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-STATE",target:"_blank",rel:"noopener noreferrer"},"CTSJ-STATE")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-ROUTER",target:"_blank",rel:"noopener noreferrer"},"CTSJ-ROUTER")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-VuexGenerator",target:"_blank",rel:"noopener noreferrer"},"CTSJ-VuexGenerator")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-React-SSR",target:"_blank",rel:"noopener noreferrer"},"CTSJ-React-SSR")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-DOC",target:"_blank",rel:"noopener noreferrer"},"CTSJ-DOC")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-DvaGenerator",target:"_blank",rel:"noopener noreferrer"},"CTSJ-DvaGenerator")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/WebViewJavascriptBridge",target:"_blank",rel:"noopener noreferrer"},"WebViewJavascriptBridge")))),i.createElement("li",{className:h},"模板工程",i.createElement("ul",null,i.createElement("li",null,i.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/adhere",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)")),i.createElement("li",null,i.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/polyfill",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)(支持IE)")),i.createElement("li",null,i.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/adhere-webpack5-js-ssr",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)(SSR)")),i.createElement("li",null,i.createElement("a",{href:"https://gitee.com/playerljc/AntPro",target:"_blank",rel:"noopener noreferrer"},"AntPro(G1)")),i.createElement("li",null,i.createElement("a",{href:"http://git.baifendian.com/dongxu.guo/ReactWeb",target:"_blank",rel:"noopener noreferrer"},"ReactWeb(G3)")),i.createElement("li",null,i.createElement("a",{href:"http://git.baifendian.com/bo.li/Percent_Vue_Admin.git",target:"_blank",rel:"noopener noreferrer"},"PercentVue(G3)")),i.createElement("li",null,i.createElement("a",{href:"https://gitee.com/playerljc/VuePro",target:"_blank",rel:"noopener noreferrer"},"VuePro(G1)")))))))),i.createElement("li",{className:s},i.createElement("dl",null,i.createElement("dt",null,"帮助"),i.createElement("dd",null,i.createElement("ul",{className:u},i.createElement("li",{className:h},i.createElement("a",{href:l.Jk.O,target:"_blank",rel:"noopener noreferrer"},i.createElement(o.A,null),i.createElement("span",{className:f},"Gitlib"))),i.createElement("li",{className:h},i.createElement(a.N_,{to:"/adhere/changelog"},i.createElement(n.A,null),i.createElement("span",{className:f},"更新日志"))))))))},96465:(e,t,r)=>{r.d(t,{Wc:()=>f,I7:()=>d,e6:()=>p,wn:()=>h,Ay:()=>g});var n=r(71860),o=r(24370),i=r(26322),a=r(73376);const l="xpgSrI_YtLJ2DLwvO1Cq",c="KHCbMGLwqpj8TVQmsF1m",{PlayGroundPageContext:s,PlayGroundPage:u}=o.A,{Section:h,CodeBoxSection:f,PropsSection:p,FunctionPropsSection:d}=u;const g=function(e){let{children:t,onScrollBottom:r,distance:o=50,...h}=e;const[f,p]=(0,i.useState)(),d=(0,i.useRef)();return(0,i.useEffect)((()=>{p(d.current)}),[]),i.createElement(s.Provider,{value:{scrollEl:null!=f?f:document.body}},i.createElement(u,(0,n.A)({ref:d,className:l,anchorNavigationAutoClassName:c,anchorNavigationFixedClassName:c},h),t,i.createElement(a.A,null)))}}}]);