(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0lXx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){for(var t=0<arguments.length&&void 0!==e?e:8,n=new Array(t),i=0;i<t;i++)n.push("x");return n.join("").replace(/x/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}},"1XHM":function(e,t,n){"use strict";(function(e){e.fn.pin=function(t){var n=0,i=[],r=!1,a=e(window);t=t||{};var s=function(){for(var n=0,s=i.length;n<s;n++){var o=i[n];if(t.minWidth&&a.width()<=t.minWidth)o.parent().is(".pin-wrapper")&&o.unwrap(),o.css({width:"",left:"",top:"",position:""}),t.activeClass&&o.removeClass(t.activeClass),r=!0;else{r=!1;var l=t.containerSelector?o.closest(t.containerSelector):e(document.body),u=o.offset(),f=l.offset(),c=o.offsetParent().offset();o.parent().is(".pin-wrapper")||o.wrap("<div class='pin-wrapper'>");var d=e.extend({top:0,bottom:0},t.padding||{});o.data("pin",{pad:d,from:(t.containerSelector?f.top:u.top)-d.top,to:f.top+l.height()-o.outerHeight()-d.bottom,end:f.top+l.height(),parentTop:c.top}),o.css({width:o.outerWidth()}),o.parent().css("height",o.outerHeight())}}},o=function(){if(!r){n=a.scrollTop();for(var s=[],o=0,l=i.length;o<l;o++){var u=e(i[o]),f=u.data("pin");if(f){s.push(u);var c=f.from-f.pad.bottom,d=f.to-f.pad.top;c+u.outerHeight()>f.end?u.css("position",""):c<n&&n<d?("fixed"!=u.css("position")&&u.css({left:u.offset().left,top:f.pad.top}).css("position","fixed"),t.activeClass&&u.addClass(t.activeClass)):d<=n?(u.css({left:"",top:d-f.parentTop+f.pad.top}).css("position","absolute"),t.activeClass&&u.addClass(t.activeClass)):(u.css({position:"",top:"",left:""}),t.activeClass&&u.removeClass(t.activeClass))}}i=s}},l=function(){s(),o()};return this.each(function(){var t=e(this),n=e(this).data("pin")||{};n&&n.update||(i.push(t),e("img",this).one("load",s),n.update=l,e(this).data("pin",n))}),a.scroll(o),a.resize(function(){s()}),s(),window.onload=l,this}}).call(this,n("D65U"))},"4y83":function(e,t,n){"use strict";var i=n("21kx");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return new o(e,t)};var r=i(n("/b4r")),a=i(n("OWjs"));function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"change",t=1<arguments.length?arguments[1]:void 0;this.events[e]&&this.events[e](t)}var o=function(){function e(t,n){(0,r.default)(this,e);var i=this;this.el=t,this.events={},this.config=n,function(){this.el.innerHTML=function(){return 0<arguments.length&&void 0!==arguments[0]&&arguments[0],'<div class="ct-fontsizesetting-rangeWrap">\n      <div class="ct-fontsizesetting-separatedtool">\n        <div class="ct-fontsizesetting-separated"><span>小</span></div>\n        <div class="ct-fontsizesetting-separated"><span>中</span></div>\n        <div class="ct-fontsizesetting-separated"><span>大</span></div>\n        <div class="ct-fontsizesetting-separated"><span>特大</span></div>\n      </div>\n      <input type="range" ...config>\n    </div>'}(this.config)}.call(this),this.range=this.el.querySelector('input[type="range"]'),this.range.addEventListener("change",function(){i.events.change&&s.call(i,"change",this.value)},!1)}return(0,a.default)(e,[{key:"setMin",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;this.range.setAttribute("min",e)}},{key:"setMax",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"100";this.range.setAttribute("max",e)}},{key:"setSetp",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"1";this.range.setAttribute("setp",e)}},{key:"setValue",value:function(e){this.range.value=e,this.events.change&&s.call(this,"change",this.range.value)}},{key:"getValue",value:function(){return this.range.value}},{key:"on",value:function(e,t){this.events[e]=t}}]),e}()},"7uHn":function(e,t){},aLSh:function(e,t,n){"use strict";var i=n("k0ZZ");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Bone",{enumerable:!0,get:function(){return s.default}}),t.default=void 0;var r=i(n("D65U")),a=i(n("UGPu")),s=i(n("rl/T"));n("1XHM");var o={initial:function(){for(var e=document.getElementsByClassName("html"),t=0;t<e.length;t++){var n=e[t];n.innerText=n.innerHTML}a.default.initHighlightingOnLoad(),(0,r.default)(".ctmobile-ui-doc-demo-device").pin({containerSelector:".with-device"})}};t.default=o},fhqh:function(e,t,n){"use strict";var i=n("Mw6/");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Dom6",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Events",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"uuid",{enumerable:!0,get:function(){return s.default}});var r=i(n("rWWo")),a=i(n("htub")),s=i(n("0lXx"))},htub:function(e,t,n){"use strict";var i=n("Mw6/");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("5Sus")),a=i(n("SX43")),s=function(){function e(){(0,r.default)(this,e),this.events={}}return(0,a.default)(e,[{key:"remove",value:function(e,t){if(this.events[e]){var n=this.events[e].handlers.findIndex(function(e){return e===t});-1!==n&&this.events[e].handlers.splice(n,1)}}},{key:"hasType",value:function(e){return-1!==Object.keys(this.events).indexOf(e)}},{key:"clear",value:function(e){this.events[e]&&(this.events[e].handlers=[])}},{key:"clearAll",value:function(){this.events={}}},{key:"on",value:function(e,t){this.events[e]||(this.events[e]={handlers:[]}),this.events[e].handlers.push(t)}},{key:"trigger",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.events[e]&&this.events[e].handlers.forEach(function(e){e.apply(void 0,n)})}}],[{key:"trigger",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];document.dispatchEvent(new CustomEvent(e,{bubbles:"true",cancelable:"true",detail:n}))}}]),e}();t.default=s},my22:function(e,t,n){"use strict";n.r(t),function(e){var t=n("4y83"),i=n.n(t),r=n("aLSh"),a=n.n(r);n("n/bl"),n("7uHn");a.a.initial();var s=e("#font")[0],o=e("#setCurValue")[0];o.addEventListener("input",function(){l.setValue(o.value)});var l=i()(e("#ct-fontsizesetting-demo")[0],{min:"0",max:"100",setp:"1",value:"33.3"});l.on("change",function(t){var n=parseInt(t);0===n&&(n=1),s.style.fontSize="".concat(.7*t/33.3,"rem"),e("#curValue")[0].innerText=l.getValue()})}.call(this,n("uHxQ"))},rWWo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;new Map;var i={getTopDom:function(e,t){if(!e||!t)return null;if(-1!==e.className.indexOf(t))return e;for(var n=e;(n=n.parentNode)&&-1===n.className.indexOf(t)&&n!==document.body;);return n||null},off:function(){},on:function(){},once:function(){},addClass:function(e,t){for(var n=(1<arguments.length&&void 0!==t?t:"").split(" "),i=0;i<n.length;i++)e.classList.add(n[i])},removeClass:function(e,t){for(var n=(1<arguments.length&&void 0!==t?t:"").split(" "),i=0;i<n.length;i++)e.classList.remove(n[i])},hasClass:function(e,t){return e.classList.contains(t)},attr:function(e,t,n){},insertAfter:function(e,t){var n=t.parentNode;n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling)},append:function(e,t){var n;n=t instanceof String?this.createElement(t):t,e.appendChild(n)},prepend:function(e,t){var n;n=t instanceof String?this.createElement(t):t;var i=e.firstChild;e.insertBefore(n,i)},remove:function(e){e.parentNode.removeChild(e)},createElement:function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},prevSibling:function(e){var t,n=-1;if(!e||!e.parentNode)return t;for(var i=e.parentNode.children,r=0;r<i.length;r++)if(e===i[r]){n=r;break}return-1!==n&&(t=0===n?i[0]:i[n-1]),t},nextSibling:function(e){var t,n=-1;if(!e||!e.parentNode)return t;for(var i=e.parentNode.children,r=0;r<i.length;r++)if(e===i[r]){n=r;break}return-1!==n&&(t=n===i.length-1?i[0]:i[n+1]),t},getParentElementByTag:function(e,t){if(!t)return null;var n,i=e;return function e(){if(!(i=i.parentElement))return null;var r=i.tagName.toLocaleLowerCase();r===t?n=i:"body"===r?n=null:e()}(),n},children:function(e,t){return Array.prototype.filter.call(e.children,function(e){return 1===e.nodeType}).filter(function(e){return e.classList.contains(t)})},isTouch:function(){return"ontouchend"in document},objectToDataSet:function(e,t){for(var n in e)t.dataset[n]=e[n]},dataSetToObject:function(e){var t={};for(var n in e.dataset)t[n]=e.dataset[n];return t},getPageLeft:function(e){for(var t=e.offsetLeft,n=null;n=e.offsetParent;)t+=n.offsetLeft;return t},getPageTop:function(e){for(var t=e.offsetTop,n=null;n=e.offsetParent;)t+=n.offsetTop;return t},getPageRect:function(e){for(var t=e.offsetTop,n=e.offsetLeft,i=null;i=e.offsetParent;)t+=i.offsetTop,n+=i.offsetLeft;return{top:t,left:n}}};t.default=i},"rl/T":function(e,t,n){"use strict";var i=n("k0ZZ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("Lpow")),a=i(n("75SU")),s=i(n("QWKF")),o=n("fhqh");function l(e){if("a"!==e.tagName.toLocaleLowerCase()&&!(e=o.Dom6.getParentElementByTag(e,"a")))return!1;var t=e.dataset.donekey;if(!t)return!1;var n=this.findIndexByKey(t);return-1!==n&&(this.swiper.slideTo(n),this.history.push(n),console.log("historyStart",this.history),!0)}function u(e){if(-1===e.className.indexOf("ctmobile-ui-demo-done-page-header-backicon"))return!1;if(this.history.length<=1)return!1;var t=this.history.length-2;return console.log("backIndex:",t),this.swiper.slideTo(t),this.history.pop(),console.log("historyEnd",this.history),!0}var f,c=(f=[l,u],function(){var e=this;this.el.firstElementChild.addEventListener("click",function(t){t.preventDefault();var n=t.target;if(!n)return!1;for(var i=0;i<f.length&&!f[i].call(e,n);i++);})}),d=function(){function e(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];(0,r.default)(this,e),this.el=t,this.classed=new Map(n),this.slideInstances=new Map,this.history=[],c.call(this),this.onInit=this.onInit.bind(this),this.onSlideChange=this.onSlideChange.bind(this),this.onSlideChangeTransitionStart=this.onSlideChangeTransitionStart.bind(this),this.swiper=new s.default(this.el,{allowTouchMove:!1,on:{init:this.onInit()}}),function(){this.swiper.on("slideChange",this.onSlideChange),this.swiper.on("slideChangeTransitionStart",this.onSlideChangeTransitionStart)}.call(this)}return(0,a.default)(e,[{key:"onInit",value:function(){var e=this;this.classed.forEach(function(t,n){if(!t)return!1;var i=new t({context:e,key:n,el:e.getElByKey(n)});i.onInit&&i.onInit(),e.slideInstances.set(n,i)}),this.onSlideChange(),this.history.push(0)}},{key:"onSlideChangeTransitionStart",value:function(){this.preIndex=this.swiper.activeIndex}},{key:"onSlideChange",value:function(){var e=this.swiper?this.swiper.activeIndex:0,t=this.findKeyByIndex(e),n=this.slideInstances.get(t);n&&n.onShow&&n.onShow()}},{key:"findKeyByIndex",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=this.el.firstElementChild.children[e];if(t)return t.dataset.key}},{key:"findIndexByKey",value:function(e){var t=this.getElByKey(e);if(!t)return-1;for(var n=-1,i=this.swiper.$wrapperEl.children(),r=0;r<i.length;r++)if(i[r]===t){n=r;break}return n}},{key:"getElByKey",value:function(e){return this.el.firstElementChild.querySelector('[data-key="'.concat(e,'"]'))}}]),e}();t.default=d}},[["my22",1,2]]]);