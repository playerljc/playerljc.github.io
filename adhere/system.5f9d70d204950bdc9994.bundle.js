(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[938],{51193:(t,e,n)=>{"use strict";var r,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(26322),f=(r=i)&&r.__esModule?r:{default:r};e.A=function(t){var e=t.fill,n=void 0===e?"currentColor":e,r=t.width,i=void 0===r?24:r,s=t.height,a=void 0===s?24:s,c=t.style,u=void 0===c?{}:c,h=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["fill","width","height","style"]);return f.default.createElement("svg",o({viewBox:"0 0 24 24",style:o({fill:n,width:i,height:a},u)},h),f.default.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}},21883:(t,e,n)=>{"use strict";var r,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(26322),f=(r=i)&&r.__esModule?r:{default:r};e.A=function(t){var e=t.fill,n=void 0===e?"currentColor":e,r=t.width,i=void 0===r?24:r,s=t.height,a=void 0===s?24:s,c=t.style,u=void 0===c?{}:c,h=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["fill","width","height","style"]);return f.default.createElement("svg",o({viewBox:"0 0 24 24",style:o({fill:n,width:i,height:a},u)},h),f.default.createElement("path",{d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}))}},84027:(t,e,n)=>{"use strict";n.d(e,{A:()=>h});var r=n(78127),o=(n(35513),n(26322)),i=n(35729),f=n(29837);function s(t,e){if(f.A)return t?(0,i.Tn)(t)?t():"current"in t?t.current:t:e}var a=n(28525),c=n(86959);const u=function(t){return function(e,n,r){var i=(0,o.useRef)(!1),f=(0,o.useRef)([]),u=(0,o.useRef)([]),h=(0,o.useRef)();t((function(){var t,o=(Array.isArray(r)?r:[r]).map((function(t){return s(t)}));if(!i.current)return i.current=!0,f.current=o,u.current=n,void(h.current=e());o.length===f.current.length&&(0,c.A)(f.current,o)&&(0,c.A)(u.current,n)||(null===(t=h.current)||void 0===t||t.call(h),f.current=o,u.current=n,h.current=e())})),(0,a.A)((function(){var t;null===(t=h.current)||void 0===t||t.call(h),i.current=!1}))}}(o.useEffect);const h=function(t,e){var n=e||{},i=n.callback,f=(0,r.Tt)(n,["callback"]),a=(0,r.zs)((0,o.useState)(),2),c=a[0],h=a[1],l=(0,r.zs)((0,o.useState)(),2),d=l[0],b=l[1];return u((function(){var n=(Array.isArray(t)?t:[t]).map((function(t){return s(t)})).filter(Boolean);if(n.length){var o=new IntersectionObserver((function(t){var e,n;try{for(var o=(0,r.Ju)(t),f=o.next();!f.done;f=o.next()){var s=f.value;b(s.intersectionRatio),h(s.isIntersecting),null==i||i(s)}}catch(t){e={error:t}}finally{try{f&&!f.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}}),(0,r.Cl)((0,r.Cl)({},f),{root:s(null==e?void 0:e.root)}));return n.forEach((function(t){return o.observe(t)})),function(){o.disconnect()}}}),[null==e?void 0:e.rootMargin,null==e?void 0:e.threshold,i],t),[c,d]}},35513:()=>{!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,n=o(e);n;)n=o(e=n.ownerDocument);return e}(),e=[],n=null,r=null;f.prototype.THROTTLE_TIMEOUT=100,f.prototype.POLL_INTERVAL=null,f.prototype.USE_MUTATION_OBSERVER=!0,f._setupCrossOriginUpdater=function(){return n||(n=function(t,n){r=t&&n?h(t,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),n},f._resetCrossOriginUpdater=function(){n=null,r=null},f.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},f.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},f.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},f.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},f.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},f.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},f.prototype._monitorIntersections=function(e){var n=e.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(e)){var r=this._checkForIntersections,i=null,f=null;this.POLL_INTERVAL?i=n.setInterval(r,this.POLL_INTERVAL):(s(n,"resize",r,!0),s(e,"scroll",r,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(f=new n.MutationObserver(r)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(i&&t.clearInterval(i),a(t,"resize",r,!0)),a(e,"scroll",r,!0),f&&f.disconnect()}));var c=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=c){var u=o(e);u&&this._monitorIntersections(u.ownerDocument)}}},f.prototype._unmonitorIntersections=function(e){var n=this._monitoringDocuments.indexOf(e);if(-1!=n){var r=this.root&&(this.root.ownerDocument||this.root)||t,i=this._observationTargets.some((function(t){var n=t.element.ownerDocument;if(n==e)return!0;for(;n&&n!=r;){var i=o(n);if((n=i&&i.ownerDocument)==e)return!0}return!1}));if(!i){var f=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),f(),e!=r){var s=o(e);s&&this._unmonitorIntersections(s.ownerDocument)}}}},f.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},f.prototype._checkForIntersections=function(){if(this.root||!n||r){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(r){var o=r.element,f=c(o),s=this._rootContainsTarget(o),a=r.entry,u=t&&s&&this._computeTargetAndRootIntersection(o,f,e),h=null;this._rootContainsTarget(o)?n&&!this.root||(h=e):h={top:0,bottom:0,left:0,right:0,width:0,height:0};var l=r.entry=new i({time:window.performance&&performance.now&&performance.now(),target:o,boundingClientRect:f,rootBounds:h,intersectionRect:u});a?t&&s?this._hasCrossedThreshold(a,l)&&this._queuedEntries.push(l):a&&a.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},f.prototype._computeTargetAndRootIntersection=function(e,o,i){if("none"!=window.getComputedStyle(e).display){for(var f,s,a,u,l,b,p,g,v=o,m=d(e),_=!1;!_&&m;){var w=null,y=1==m.nodeType?window.getComputedStyle(m):{};if("none"==y.display)return null;if(m==this.root||9==m.nodeType)if(_=!0,m==this.root||m==t)n&&!this.root?!r||0==r.width&&0==r.height?(m=null,w=null,v=null):w=r:w=i;else{var E=d(m),I=E&&c(E),T=E&&this._computeTargetAndRootIntersection(E,I,i);I&&T?(m=E,w=h(I,T)):(m=null,v=null)}else{var R=m.ownerDocument;m!=R.body&&m!=R.documentElement&&"visible"!=y.overflow&&(w=c(m))}if(w&&(f=w,s=v,a=void 0,u=void 0,l=void 0,b=void 0,p=void 0,g=void 0,a=Math.max(f.top,s.top),u=Math.min(f.bottom,s.bottom),l=Math.max(f.left,s.left),b=Math.min(f.right,s.right),g=u-a,v=(p=b-l)>=0&&g>=0&&{top:a,bottom:u,left:l,right:b,width:p,height:g}||null),!v)break;m=m&&d(m)}return v}},f.prototype._getRootRect=function(){var e;if(this.root&&!b(this.root))e=c(this.root);else{var n=b(this.root)?this.root:t,r=n.documentElement,o=n.body;e={top:0,left:0,right:r.clientWidth||o.clientWidth,width:r.clientWidth||o.clientWidth,bottom:r.clientHeight||o.clientHeight,height:r.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},f.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},f.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,r=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==r)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==n||i==r||i<n!=i<r)return!0}},f.prototype._rootIsInDom=function(){return!this.root||l(t,this.root)},f.prototype._rootContainsTarget=function(e){var n=this.root&&(this.root.ownerDocument||this.root)||t;return l(n,e)&&(!this.root||n==e.ownerDocument)},f.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},f.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=f,window.IntersectionObserverEntry=i}function o(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=u(t.rootBounds),this.boundingClientRect=u(t.boundingClientRect),this.intersectionRect=u(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,r=this.intersectionRect,o=r.width*r.height;this.intersectionRatio=n?Number((o/n).toFixed(4)):this.isIntersecting?1:0}function f(t,e){var n,r,o,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType&&9!=i.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),r=this.THROTTLE_TIMEOUT,o=null,function(){o||(o=setTimeout((function(){n(),o=null}),r))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function s(t,e,n,r){"function"==typeof t.addEventListener?t.addEventListener(e,n,r||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function a(t,e,n,r){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,r||!1):"function"==typeof t.detachEvent&&t.detachEvent("on"+e,n)}function c(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function u(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function h(t,e){var n=e.top-t.top,r=e.left-t.left;return{top:n,left:r,height:e.height,width:e.width,bottom:n+e.height,right:r+e.width}}function l(t,e){for(var n=e;n;){if(n==t)return!0;n=d(n)}return!1}function d(e){var n=e.parentNode;return 9==e.nodeType&&e!=t?o(e):(n&&n.assignedSlot&&(n=n.assignedSlot.parentNode),n&&11==n.nodeType&&n.host?n.host:n)}function b(t){return t&&9===t.nodeType}}()},31720:(t,e,n)=>{"use strict";n.d(e,{$S:()=>h,D9:()=>p,EM:()=>d,Gg:()=>b,Gi:()=>g,Jc:()=>f,Q_:()=>u,T_:()=>v,U6:()=>w,Vu:()=>o,Xk:()=>_,Zp:()=>i,jr:()=>m,tD:()=>c,wL:()=>l,wv:()=>r,xV:()=>s,z1:()=>a});var r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},o={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},i={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},f={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},s={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},a={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},c={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},u={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},h={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},l={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},d={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},b={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},p={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},g={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},v={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},m={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},_={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},w={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"}},35e3:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.staged=void 0;const o=r(n(26322));function i(t){return"function"==typeof t?o.default.createElement(f,{stage:t}):t}function f(t){return i(t.stage())}e.staged=function(t){return function(e,n){return i(t(e,n))}}}}]);