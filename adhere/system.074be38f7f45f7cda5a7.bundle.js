"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[5729],{65729:(e,r,t)=>{function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,u,a,o,i=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(i.push(n.value),i.length!==r);l=!0);}catch(e){c=!0,u=e}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw u}}return i}}(e,r)||function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(r,{q6:()=>f,Ho:()=>d,NT:()=>s});var a=t(58054),o=t(1163),i=t(75948),l=t(26322),c=t(63987);function f(e){var r=l.createContext(void 0);return{Context:r,Provider:function(e){var t=e.value,n=e.children,a=l.useRef(t);a.current=t;var i=u(l.useState((function(){return{getValue:function(){return a.current},listeners:new Set}})),1)[0];return(0,o.A)((function(){(0,c.unstable_batchedUpdates)((function(){i.listeners.forEach((function(e){e(t)}))}))}),[t]),l.createElement(r.Provider,{value:i},n)},defaultValue:e}}function s(e,r){var t=(0,a.A)("function"==typeof r?r:function(e){if(void 0===r)return e;if(!Array.isArray(r))return e[r];var t={};return r.forEach((function(r){t[r]=e[r]})),t}),n=l.useContext(null==e?void 0:e.Context),c=n||{},f=c.listeners,s=c.getValue,v=l.useRef();v.current=t(n?s():null==e?void 0:e.defaultValue);var m=u(l.useState({}),2)[1];return(0,o.A)((function(){if(n)return f.add(e),function(){f.delete(e)};function e(e){var r=t(e);(0,i.A)(v.current,r,!0)||m({})}}),[n]),v.current}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},v.apply(this,arguments)}var m=t(80925);function d(){var e=l.createContext(null);function r(){return l.useContext(e)}return{makeImmutable:function(t,n){var u=(0,m.f3)(t),a=function(a,o){var i=u?{ref:o}:{},c=l.useRef(0),f=l.useRef(a);return null!==r()?l.createElement(t,v({},a,i)):(n&&!n(f.current,a)||(c.current+=1),f.current=a,l.createElement(e.Provider,{value:c.current},l.createElement(t,v({},a,i))))};return u?l.forwardRef(a):a},responseImmutable:function(e,t){var n=(0,m.f3)(e),u=function(t,u){var a=n?{ref:u}:{};return r(),l.createElement(e,v({},t,a))};return n?l.memo(l.forwardRef(u),t):l.memo(u,t)},useImmutableMark:r}}var b=d();b.makeImmutable,b.responseImmutable,b.useImmutableMark}}]);