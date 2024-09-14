"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[6919],{16919:(e,t,n)=>{function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function i(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,a,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=i.call(n)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,r=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return l}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==l(t)?t:t+""}function c(e,t,n){return(t=s(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&o.push.apply(o,Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach((function(t){c(e,t,n[t])}))}return e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,s(o.key),o)}}function h(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}n.d(t,{q6:()=>re,Zj:()=>le,D:()=>$});var x=n(26322),b=n(63987),w=n(78809),S=n.n(w);function O(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=n(93266),T=n.n(C),I=function(){function e(){d(this,e),c(this,"refs",{})}return h(e,[{key:"add",value:function(e,t){this.refs[e]||(this.refs[e]=[]),this.refs[e].push(t)}},{key:"remove",value:function(e,t){var n=this.getIndex(e,t);-1!==n&&this.refs[e].splice(n,1)}},{key:"isActive",value:function(){return this.active}},{key:"getActive",value:function(){var e=this;return this.refs[this.active.collection].find((function(t){return t.node.sortableInfo.index==e.active.index}))}},{key:"getIndex",value:function(e,t){return this.refs[e].indexOf(t)}},{key:"getOrderedRefs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.active.collection;return this.refs[e].sort(k)}}]),e}();function k(e,t){return e.node.sortableInfo.index-t.node.sortableInfo.index}function E(e,t){return Object.keys(e).reduce((function(n,o){return-1===t.indexOf(o)&&(n[o]=e[o]),n}),{})}var R={end:["touchend","touchcancel","mouseup"],move:["touchmove","mousemove"],start:["touchstart","mousedown"]},D=function(){if("undefined"==typeof window||"undefined"==typeof document)return"";var e=window.getComputedStyle(document.documentElement,"")||["-moz-hidden-iframe"],t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return"ms"===t?"ms":t&&t.length?t[0].toUpperCase()+t.substr(1):""}();function A(e,t){Object.keys(t).forEach((function(n){e.style[n]=t[n]}))}function N(e,t){e.style["".concat(D,"Transform")]=null==t?"":"translate3d(".concat(t.x,"px,").concat(t.y,"px,0)")}function j(e,t){e.style["".concat(D,"TransitionDuration")]=null==t?"":"".concat(t,"ms")}function M(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}function W(e,t,n){return Math.max(e,Math.min(n,t))}function P(e){return"px"===e.substr(-2)?parseFloat(e):0}function L(e,t){var n=t.displayName||t.name;return n?"".concat(e,"(").concat(n,")"):e}function H(e,t){var n=e.getBoundingClientRect();return{top:n.top+t.top,left:n.left+t.left}}function K(e){return e.touches&&e.touches.length?{x:e.touches[0].pageX,y:e.touches[0].pageY}:e.changedTouches&&e.changedTouches.length?{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}:{x:e.pageX,y:e.pageY}}function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{left:0,top:0};if(e){var o={left:n.left+e.offsetLeft,top:n.top+e.offsetTop};return e.parentNode===t?o:_(e.parentNode,t,o)}}function G(e){var t=e.lockOffset,n=e.width,o=e.height,r=t,i=t,a="px";if("string"==typeof t){var l=/^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);S()(null!==l,'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',t),r=parseFloat(t),i=parseFloat(t),a=l[1]}return S()(isFinite(r)&&isFinite(i),"lockOffset value should be a finite. Given %s",t),"%"===a&&(r=r*n/100,i=i*o/100),{x:r,y:i}}function B(e){return e instanceof HTMLElement?function(e){var t=window.getComputedStyle(e),n=/(auto|scroll)/;return["overflow","overflowX","overflowY"].find((function(e){return n.test(t[e])}))}(e)?e:B(e.parentNode):null}var U=27,X=32,Y=37,F=38,V=39,q=40,z={Anchor:"A",Button:"BUTTON",Canvas:"CANVAS",Input:"INPUT",Option:"OPTION",Textarea:"TEXTAREA",Select:"SELECT"};function $(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(){var e,t;d(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return c(p(p(t=y(this,(e=g(n)).call.apply(e,[this].concat(r))))),"wrappedInstance",(0,x.createRef)()),t}return m(n,t),h(n,[{key:"componentDidMount",value:function(){(0,b.findDOMNode)(this).sortableHandle=!0}},{key:"getWrappedInstance",value:function(){return S()(r.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"),this.wrappedInstance.current}},{key:"render",value:function(){var t=r.withRef?this.wrappedInstance:null;return(0,x.createElement)(e,o({ref:t},this.props))}}]),n}(x.Component),c(t,"displayName",L("sortableHandle",e)),n}function Z(e){return null!=e.sortableHandle}var J=function(){function e(t,n){d(this,e),this.container=t,this.onScrollCallback=n}return h(e,[{key:"clear",value:function(){null!=this.interval&&(clearInterval(this.interval),this.interval=null)}},{key:"update",value:function(e){var t=this,n=e.translate,o=e.minTranslate,r=e.maxTranslate,i=e.width,a=e.height,l={x:0,y:0},s={x:1,y:1},c=10,u=10,d=this.container,f=d.scrollTop,h=d.scrollLeft,p=d.scrollHeight,y=d.scrollWidth,g=0===f,v=p-f-d.clientHeight==0,m=0===h,x=y-h-d.clientWidth==0;n.y>=r.y-a/2&&!v?(l.y=1,s.y=u*Math.abs((r.y-a/2-n.y)/a)):n.x>=r.x-i/2&&!x?(l.x=1,s.x=c*Math.abs((r.x-i/2-n.x)/i)):n.y<=o.y+a/2&&!g?(l.y=-1,s.y=u*Math.abs((n.y-a/2-o.y)/a)):n.x<=o.x+i/2&&!m&&(l.x=-1,s.x=c*Math.abs((n.x-i/2-o.x)/i)),this.interval&&(this.clear(),this.isAutoScrolling=!1),0===l.x&&0===l.y||(this.interval=setInterval((function(){t.isAutoScrolling=!0;var e={left:s.x*l.x,top:s.y*l.y};t.container.scrollTop+=e.top,t.container.scrollLeft+=e.left,t.onScrollCallback(e)}),5))}}]),e}();var Q={axis:T().oneOf(["x","y","xy"]),contentWindow:T().any,disableAutoscroll:T().bool,distance:T().number,getContainer:T().func,getHelperDimensions:T().func,helperClass:T().string,helperContainer:T().oneOfType([T().func,"undefined"==typeof HTMLElement?T().any:T().instanceOf(HTMLElement)]),hideSortableGhost:T().bool,keyboardSortingTransitionDuration:T().number,lockAxis:T().string,lockOffset:T().oneOfType([T().number,T().string,T().arrayOf(T().oneOfType([T().number,T().string]))]),lockToContainerEdges:T().bool,onSortEnd:T().func,onSortMove:T().func,onSortOver:T().func,onSortStart:T().func,pressDelay:T().number,pressThreshold:T().number,keyCodes:T().shape({lift:T().arrayOf(T().number),drop:T().arrayOf(T().number),cancel:T().arrayOf(T().number),up:T().arrayOf(T().number),down:T().arrayOf(T().number)}),shouldCancelStart:T().func,transitionDuration:T().number,updateBeforeSortStart:T().func,useDragHandle:T().bool,useWindowAsScrollContainer:T().bool},ee={lift:[X],drop:[X],cancel:[U],up:[F,Y],down:[q,V]},te={axis:"y",disableAutoscroll:!1,distance:0,getHelperDimensions:function(e){var t=e.node;return{height:t.offsetHeight,width:t.offsetWidth}},hideSortableGhost:!0,lockOffset:"50%",lockToContainerEdges:!1,pressDelay:0,pressThreshold:5,keyCodes:ee,shouldCancelStart:function(e){return-1!==[z.Input,z.Textarea,z.Select,z.Option,z.Button].indexOf(e.target.tagName)||!!M(e.target,(function(e){return"true"===e.contentEditable}))},transitionDuration:300,useWindowAsScrollContainer:!1},ne=Object.keys(Q);var oe=(0,x.createContext)({manager:{}});function re(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(e){var t;d(this,n),c(p(p(t=y(this,g(n).call(this,e)))),"state",{}),c(p(p(t)),"handleStart",(function(e){var n=t.props,o=n.distance,r=n.shouldCancelStart;if(2!==e.button&&!r(e)){t.touched=!0,t.position=K(e);var i=M(e.target,(function(e){return null!=e.sortableInfo}));if(i&&i.sortableInfo&&t.nodeIsChild(i)&&!t.state.sorting){var a=t.props.useDragHandle,l=i.sortableInfo,s=l.index,c=l.collection;if(l.disabled)return;if(a&&!M(e.target,Z))return;t.manager.active={collection:c,index:s},function(e){return e.touches&&e.touches.length||e.changedTouches&&e.changedTouches.length}(e)||e.target.tagName!==z.Anchor||e.preventDefault(),o||(0===t.props.pressDelay?t.handlePress(e):t.pressTimer=setTimeout((function(){return t.handlePress(e)}),t.props.pressDelay))}}})),c(p(p(t)),"nodeIsChild",(function(e){return e.sortableInfo.manager===t.manager})),c(p(p(t)),"handleMove",(function(e){var n=t.props,o=n.distance,r=n.pressThreshold;if(!t.state.sorting&&t.touched&&!t._awaitingUpdateBeforeSortStart){var i=K(e),a={x:t.position.x-i.x,y:t.position.y-i.y},l=Math.abs(a.x)+Math.abs(a.y);t.delta=a,o||r&&!(l>=r)?o&&l>=o&&t.manager.isActive()&&t.handlePress(e):(clearTimeout(t.cancelTimer),t.cancelTimer=setTimeout(t.cancel,0))}})),c(p(p(t)),"handleEnd",(function(){t.touched=!1,t.cancel()})),c(p(p(t)),"cancel",(function(){var e=t.props.distance;t.state.sorting||(e||clearTimeout(t.pressTimer),t.manager.active=null)})),c(p(p(t)),"handlePress",(function(e){try{var n=t.manager.getActive(),o=function(){if(n){var o=function(){var n,o,r,c,g,v,m=h.sortableInfo.index,x=(n=h,{bottom:P((o=window.getComputedStyle(n)).marginBottom),left:P(o.marginLeft),right:P(o.marginRight),top:P(o.marginTop)}),b=function(e){var t=window.getComputedStyle(e);return"grid"===t.display?{x:P(t.gridColumnGap),y:P(t.gridRowGap)}:{x:0,y:0}}(t.container),w=t.scrollContainer.getBoundingClientRect(),S=a({index:m,node:h,collection:p});if(t.node=h,t.margin=x,t.gridGap=b,t.width=S.width,t.height=S.height,t.marginOffset={x:t.margin.left+t.margin.right+t.gridGap.x,y:Math.max(t.margin.top,t.margin.bottom,t.gridGap.y)},t.boundingClientRect=h.getBoundingClientRect(),t.containerBoundingRect=w,t.index=m,t.newIndex=m,t.axis={x:i.indexOf("x")>=0,y:i.indexOf("y")>=0},t.offsetEdge=_(h,t.container),t.initialOffset=K(y?u({},e,{pageX:t.boundingClientRect.left,pageY:t.boundingClientRect.top}):e),t.initialScroll={left:t.scrollContainer.scrollLeft,top:t.scrollContainer.scrollTop},t.initialWindowScroll={left:window.pageXOffset,top:window.pageYOffset},t.helper=t.helperContainer.appendChild((c="input, textarea, select, canvas, [contenteditable]",g=(r=h).querySelectorAll(c),O((v=r.cloneNode(!0)).querySelectorAll(c)).forEach((function(e,t){"file"!==e.type&&(e.value=g[t].value),"radio"===e.type&&e.name&&(e.name="__sortableClone__".concat(e.name)),e.tagName===z.Canvas&&g[t].width>0&&g[t].height>0&&e.getContext("2d").drawImage(g[t],0,0)})),v)),A(t.helper,{boxSizing:"border-box",height:"".concat(t.height,"px"),left:"".concat(t.boundingClientRect.left-x.left,"px"),pointerEvents:"none",position:"fixed",top:"".concat(t.boundingClientRect.top-x.top,"px"),width:"".concat(t.width,"px")}),y&&t.helper.focus(),s&&(t.sortableGhost=h,A(h,{opacity:0,visibility:"hidden"})),t.minTranslate={},t.maxTranslate={},y){var C=f?{top:0,left:0,width:t.contentWindow.innerWidth,height:t.contentWindow.innerHeight}:t.containerBoundingRect,T=C.top,I=C.left,k=C.width,E=T+C.height,D=I+k;t.axis.x&&(t.minTranslate.x=I-t.boundingClientRect.left,t.maxTranslate.x=D-(t.boundingClientRect.left+t.width)),t.axis.y&&(t.minTranslate.y=T-t.boundingClientRect.top,t.maxTranslate.y=E-(t.boundingClientRect.top+t.height))}else t.axis.x&&(t.minTranslate.x=(f?0:w.left)-t.boundingClientRect.left-t.width/2,t.maxTranslate.x=(f?t.contentWindow.innerWidth:w.left+w.width)-t.boundingClientRect.left-t.width/2),t.axis.y&&(t.minTranslate.y=(f?0:w.top)-t.boundingClientRect.top-t.height/2,t.maxTranslate.y=(f?t.contentWindow.innerHeight:w.top+w.height)-t.boundingClientRect.top-t.height/2);l&&l.split(" ").forEach((function(e){return t.helper.classList.add(e)})),t.listenerNode=e.touches?e.target:t.contentWindow,y?(t.listenerNode.addEventListener("wheel",t.handleKeyEnd,!0),t.listenerNode.addEventListener("mousedown",t.handleKeyEnd,!0),t.listenerNode.addEventListener("keydown",t.handleKeyDown)):(R.move.forEach((function(e){return t.listenerNode.addEventListener(e,t.handleSortMove,!1)})),R.end.forEach((function(e){return t.listenerNode.addEventListener(e,t.handleSortEnd,!1)}))),t.setState({sorting:!0,sortingIndex:m}),d&&d({node:h,index:m,collection:p,isKeySorting:y,nodes:t.manager.getOrderedRefs(),helper:t.helper},e),y&&t.keyMove(0)},r=t.props,i=r.axis,a=r.getHelperDimensions,l=r.helperClass,s=r.hideSortableGhost,c=r.updateBeforeSortStart,d=r.onSortStart,f=r.useWindowAsScrollContainer,h=n.node,p=n.collection,y=t.manager.isKeySorting,g=function(){if("function"==typeof c){t._awaitingUpdateBeforeSortStart=!0;var n=function(e,t){try{var n=e()}catch(e){return t(!0,e)}return n&&n.then?n.then(t.bind(null,!1),t.bind(null,!0)):t(!1,value)}((function(){var t=h.sortableInfo.index;return Promise.resolve(c({collection:p,index:t,node:h,isKeySorting:y},e)).then((function(){}))}),(function(e,n){if(t._awaitingUpdateBeforeSortStart=!1,e)throw n;return n}));if(n&&n.then)return n.then((function(){}))}}();return g&&g.then?g.then(o):o()}}();return Promise.resolve(o&&o.then?o.then((function(){})):void 0)}catch(e){return Promise.reject(e)}})),c(p(p(t)),"handleSortMove",(function(e){var n=t.props.onSortMove;"function"==typeof e.preventDefault&&e.cancelable&&e.preventDefault(),t.updateHelperPosition(e),t.animateNodes(),t.autoscroll(),n&&n(e)})),c(p(p(t)),"handleSortEnd",(function(e){var n=t.props,o=n.hideSortableGhost,r=n.onSortEnd,i=t.manager,a=i.active.collection,l=i.isKeySorting,s=t.manager.getOrderedRefs();t.listenerNode&&(l?(t.listenerNode.removeEventListener("wheel",t.handleKeyEnd,!0),t.listenerNode.removeEventListener("mousedown",t.handleKeyEnd,!0),t.listenerNode.removeEventListener("keydown",t.handleKeyDown)):(R.move.forEach((function(e){return t.listenerNode.removeEventListener(e,t.handleSortMove)})),R.end.forEach((function(e){return t.listenerNode.removeEventListener(e,t.handleSortEnd)})))),t.helper.parentNode.removeChild(t.helper),o&&t.sortableGhost&&A(t.sortableGhost,{opacity:"",visibility:""});for(var c=0,u=s.length;c<u;c++){var d=s[c],f=d.node;d.edgeOffset=null,d.boundingClientRect=null,N(f,null),j(f,null),d.translate=null}t.autoScroller.clear(),t.manager.active=null,t.manager.isKeySorting=!1,t.setState({sorting:!1,sortingIndex:null}),"function"==typeof r&&r({collection:a,newIndex:t.newIndex,oldIndex:t.index,isKeySorting:l,nodes:s},e),t.touched=!1})),c(p(p(t)),"autoscroll",(function(){var e=t.props.disableAutoscroll,n=t.manager.isKeySorting;if(e)t.autoScroller.clear();else{if(n){var o=u({},t.translate),r=0,i=0;return t.axis.x&&(o.x=Math.min(t.maxTranslate.x,Math.max(t.minTranslate.x,t.translate.x)),r=t.translate.x-o.x),t.axis.y&&(o.y=Math.min(t.maxTranslate.y,Math.max(t.minTranslate.y,t.translate.y)),i=t.translate.y-o.y),t.translate=o,N(t.helper,t.translate),t.scrollContainer.scrollLeft+=r,void(t.scrollContainer.scrollTop+=i)}t.autoScroller.update({height:t.height,maxTranslate:t.maxTranslate,minTranslate:t.minTranslate,translate:t.translate,width:t.width})}})),c(p(p(t)),"onAutoScroll",(function(e){t.translate.x+=e.left,t.translate.y+=e.top,t.animateNodes()})),c(p(p(t)),"handleKeyDown",(function(e){var n=e.keyCode,o=t.props,r=o.shouldCancelStart,i=o.keyCodes,a=u({},ee,void 0===i?{}:i);t.manager.active&&!t.manager.isKeySorting||!(t.manager.active||a.lift.includes(n)&&!r(e)&&t.isValidSortingTarget(e))||(e.stopPropagation(),e.preventDefault(),a.lift.includes(n)&&!t.manager.active?t.keyLift(e):a.drop.includes(n)&&t.manager.active?t.keyDrop(e):a.cancel.includes(n)?(t.newIndex=t.manager.active.index,t.keyDrop(e)):a.up.includes(n)?t.keyMove(-1):a.down.includes(n)&&t.keyMove(1))})),c(p(p(t)),"keyLift",(function(e){var n=e.target,o=M(n,(function(e){return null!=e.sortableInfo})).sortableInfo,r=o.index,i=o.collection;t.initialFocusedNode=n,t.manager.isKeySorting=!0,t.manager.active={index:r,collection:i},t.handlePress(e)})),c(p(p(t)),"keyMove",(function(e){var n=t.manager.getOrderedRefs(),o=n[n.length-1].node.sortableInfo.index,r=t.newIndex+e,i=t.newIndex;if(!(r<0||r>o)){t.prevIndex=i,t.newIndex=r;var a=function(e,t,n){return e<n&&e>t?e-1:e>n&&e<t?e+1:e}(t.newIndex,t.prevIndex,t.index),l=n.find((function(e){return e.node.sortableInfo.index===a})),s=l.node,c=t.containerScrollDelta,u=l.boundingClientRect||H(s,c),d=l.translate||{x:0,y:0},f=u.top+d.y-c.top,h=u.left+d.x-c.left,p=i<r,y=p&&t.axis.x?s.offsetWidth-t.width:0,g=p&&t.axis.y?s.offsetHeight-t.height:0;t.handleSortMove({pageX:h+y,pageY:f+g,ignoreTransition:0===e})}})),c(p(p(t)),"keyDrop",(function(e){t.handleSortEnd(e),t.initialFocusedNode&&t.initialFocusedNode.focus()})),c(p(p(t)),"handleKeyEnd",(function(e){t.manager.active&&t.keyDrop(e)})),c(p(p(t)),"isValidSortingTarget",(function(e){var n=t.props.useDragHandle,o=e.target,r=M(o,(function(e){return null!=e.sortableInfo}));return r&&r.sortableInfo&&!r.sortableInfo.disabled&&(n?Z(o):o.sortableInfo)}));var o=new I;return function(e){S()(!(e.distance&&e.pressDelay),"Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")}(e),t.manager=o,t.wrappedInstance=(0,x.createRef)(),t.sortableContextValue={manager:o},t.events={end:t.handleEnd,move:t.handleMove,start:t.handleStart},t}return m(n,t),h(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.useWindowAsScrollContainer,n=this.getContainer();Promise.resolve(n).then((function(n){e.container=n,e.document=e.container.ownerDocument||document;var o=e.props.contentWindow||e.document.defaultView||window;e.contentWindow="function"==typeof o?o():o,e.scrollContainer=t?e.document.scrollingElement||e.document.documentElement:B(e.container)||e.container,e.autoScroller=new J(e.scrollContainer,e.onAutoScroll),Object.keys(e.events).forEach((function(t){return R[t].forEach((function(n){return e.container.addEventListener(n,e.events[t],!1)}))})),e.container.addEventListener("keydown",e.handleKeyDown)}))}},{key:"componentWillUnmount",value:function(){var e=this;this.helper&&this.helper.parentNode&&this.helper.parentNode.removeChild(this.helper),this.container&&(Object.keys(this.events).forEach((function(t){return R[t].forEach((function(n){return e.container.removeEventListener(n,e.events[t])}))})),this.container.removeEventListener("keydown",this.handleKeyDown))}},{key:"updateHelperPosition",value:function(e){var t=this.props,n=t.lockAxis,o=t.lockOffset,r=t.lockToContainerEdges,i=t.transitionDuration,l=t.keyboardSortingTransitionDuration,s=void 0===l?i:l,c=this.manager.isKeySorting,u=e.ignoreTransition,d=K(e),f={x:d.x-this.initialOffset.x,y:d.y-this.initialOffset.y};if(f.y-=window.pageYOffset-this.initialWindowScroll.top,f.x-=window.pageXOffset-this.initialWindowScroll.left,this.translate=f,r){var h=function(e){var t=e.height,n=e.width,o=e.lockOffset,r=Array.isArray(o)?o:[o,o];S()(2===r.length,"lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s",o);var i=a(r,2),l=i[0],s=i[1];return[G({height:t,lockOffset:l,width:n}),G({height:t,lockOffset:s,width:n})]}({height:this.height,lockOffset:o,width:this.width}),p=a(h,2),y=p[0],g=p[1],v={x:this.width/2-y.x,y:this.height/2-y.y},m={x:this.width/2-g.x,y:this.height/2-g.y};f.x=W(this.minTranslate.x+v.x,this.maxTranslate.x-m.x,f.x),f.y=W(this.minTranslate.y+v.y,this.maxTranslate.y-m.y,f.y)}"x"===n?f.y=0:"y"===n&&(f.x=0),c&&s&&!u&&j(this.helper,s),N(this.helper,f)}},{key:"animateNodes",value:function(){var e=this.props,t=e.transitionDuration,n=e.hideSortableGhost,o=e.onSortOver,r=this.containerScrollDelta,i=this.windowScrollDelta,a=this.manager.getOrderedRefs(),l=this.offsetEdge.left+this.translate.x+r.left,s=this.offsetEdge.top+this.translate.y+r.top,c=this.manager.isKeySorting,u=this.newIndex;this.newIndex=null;for(var d=0,f=a.length;d<f;d++){var h=a[d].node,p=h.sortableInfo.index,y=h.offsetWidth,g=h.offsetHeight,v={height:this.height>g?g/2:this.height/2,width:this.width>y?y/2:this.width/2},m=c&&p>this.index&&p<=u,x=c&&p<this.index&&p>=u,b={x:0,y:0},w=a[d].edgeOffset;w||(w=_(h,this.container),a[d].edgeOffset=w,c&&(a[d].boundingClientRect=H(h,r)));var S=d<a.length-1&&a[d+1],O=d>0&&a[d-1];S&&!S.edgeOffset&&(S.edgeOffset=_(S.node,this.container),c&&(S.boundingClientRect=H(S.node,r))),p!==this.index?(t&&j(h,t),this.axis.x?this.axis.y?x||p<this.index&&(l+i.left-v.width<=w.left&&s+i.top<=w.top+v.height||s+i.top+v.height<=w.top)?(b.x=this.width+this.marginOffset.x,w.left+b.x>this.containerBoundingRect.width-v.width&&S&&(b.x=S.edgeOffset.left-w.left,b.y=S.edgeOffset.top-w.top),null===this.newIndex&&(this.newIndex=p)):(m||p>this.index&&(l+i.left+v.width>=w.left&&s+i.top+v.height>=w.top||s+i.top+v.height>=w.top+g))&&(b.x=-(this.width+this.marginOffset.x),w.left+b.x<this.containerBoundingRect.left+v.width&&O&&(b.x=O.edgeOffset.left-w.left,b.y=O.edgeOffset.top-w.top),this.newIndex=p):m||p>this.index&&l+i.left+v.width>=w.left?(b.x=-(this.width+this.marginOffset.x),this.newIndex=p):(x||p<this.index&&l+i.left<=w.left+v.width)&&(b.x=this.width+this.marginOffset.x,null==this.newIndex&&(this.newIndex=p)):this.axis.y&&(m||p>this.index&&s+i.top+v.height>=w.top?(b.y=-(this.height+this.marginOffset.y),this.newIndex=p):(x||p<this.index&&s+i.top<=w.top+v.height)&&(b.y=this.height+this.marginOffset.y,null==this.newIndex&&(this.newIndex=p))),N(h,b),a[d].translate=b):n&&(this.sortableGhost=h,A(h,{opacity:0,visibility:"hidden"}))}null==this.newIndex&&(this.newIndex=this.index),c&&(this.newIndex=u);var C=c?this.prevIndex:u;o&&this.newIndex!==C&&o({collection:this.manager.active.collection,index:this.index,newIndex:this.newIndex,oldIndex:C,isKeySorting:c,nodes:a,helper:this.helper})}},{key:"getWrappedInstance",value:function(){return S()(r.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"),this.wrappedInstance.current}},{key:"getContainer",value:function(){var e=this.props.getContainer;return"function"!=typeof e?(0,b.findDOMNode)(this):e(r.withRef?this.getWrappedInstance():void 0)}},{key:"render",value:function(){var t=r.withRef?this.wrappedInstance:null;return(0,x.createElement)(oe.Provider,{value:this.sortableContextValue},(0,x.createElement)(e,o({ref:t},E(this.props,ne))))}},{key:"helperContainer",get:function(){var e=this.props.helperContainer;return"function"==typeof e?e():this.props.helperContainer||this.document.body}},{key:"containerScrollDelta",get:function(){return this.props.useWindowAsScrollContainer?{left:0,top:0}:{left:this.scrollContainer.scrollLeft-this.initialScroll.left,top:this.scrollContainer.scrollTop-this.initialScroll.top}}},{key:"windowScrollDelta",get:function(){return{left:this.contentWindow.pageXOffset-this.initialWindowScroll.left,top:this.contentWindow.pageYOffset-this.initialWindowScroll.top}}}]),n}(x.Component),c(t,"displayName",L("sortableList",e)),c(t,"defaultProps",te),c(t,"propTypes",Q),n}var ie={index:T().number.isRequired,collection:T().oneOfType([T().number,T().string]),disabled:T().bool},ae=Object.keys(ie);function le(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return n=t=function(t){function n(){var e,t;d(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return c(p(p(t=y(this,(e=g(n)).call.apply(e,[this].concat(r))))),"wrappedInstance",(0,x.createRef)()),t}return m(n,t),h(n,[{key:"componentDidMount",value:function(){this.register()}},{key:"componentDidUpdate",value:function(e){this.node&&(e.index!==this.props.index&&(this.node.sortableInfo.index=this.props.index),e.disabled!==this.props.disabled&&(this.node.sortableInfo.disabled=this.props.disabled)),e.collection!==this.props.collection&&(this.unregister(e.collection),this.register())}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"register",value:function(){var e=this.props,t=e.collection,n=e.disabled,o=e.index,r=(0,b.findDOMNode)(this);r.sortableInfo={collection:t,disabled:n,index:o,manager:this.context.manager},this.node=r,this.ref={node:r},this.context.manager.add(t,this.ref)}},{key:"unregister",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.collection;this.context.manager.remove(e,this.ref)}},{key:"getWrappedInstance",value:function(){return S()(r.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"),this.wrappedInstance.current}},{key:"render",value:function(){var t=r.withRef?this.wrappedInstance:null;return(0,x.createElement)(e,o({ref:t},E(this.props,ae)))}}]),n}(x.Component),c(t,"displayName",L("sortableElement",e)),c(t,"contextType",oe),c(t,"propTypes",ie),c(t,"defaultProps",{collection:0}),n}}}]);