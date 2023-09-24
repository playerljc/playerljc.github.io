"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[5087],{12694:function(e,t,n){n.d(t,{Z:function(){return ke}});var r=n(1821),o=n.n(r),i=n(90171),a=n(4134),s=n(20725);function c(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function l(e){return e instanceof c(e).Element||e instanceof Element}function f(e){return e instanceof c(e).HTMLElement||e instanceof HTMLElement}function u(e){return"undefined"!=typeof ShadowRoot&&(e instanceof c(e).ShadowRoot||e instanceof ShadowRoot)}var p=Math.max,d=Math.min,m=Math.round;function v(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function h(){return!/^((?!chrome|android).)*safari/i.test(v())}function y(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&f(e)&&(o=e.offsetWidth>0&&m(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&m(r.height)/e.offsetHeight||1);var a=(l(e)?c(e):window).visualViewport,s=!h()&&n,u=(r.left+(s&&a?a.offsetLeft:0))/o,p=(r.top+(s&&a?a.offsetTop:0))/i,d=r.width/o,v=r.height/i;return{width:d,height:v,top:p,right:u+d,bottom:p+v,left:u,x:u,y:p}}function g(e){var t=c(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function b(e){return e?(e.nodeName||"").toLowerCase():null}function w(e){return((l(e)?e.ownerDocument:e.document)||window.document).documentElement}function x(e){return y(w(e)).left+g(e).scrollLeft}function O(e){return c(e).getComputedStyle(e)}function E(e){var t=O(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function j(e,t,n){void 0===n&&(n=!1);var r,o,i=f(t),a=f(t)&&function(e){var t=e.getBoundingClientRect(),n=m(t.width)/e.offsetWidth||1,r=m(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=w(t),l=y(e,a,n),u={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(i||!i&&!n)&&(("body"!==b(t)||E(s))&&(u=(r=t)!==c(r)&&f(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:g(r)),f(t)?((p=y(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=x(s))),{x:l.left+u.scrollLeft-p.x,y:l.top+u.scrollTop-p.y,width:l.width,height:l.height}}function L(e){var t=y(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function k(e){return"html"===b(e)?e:e.assignedSlot||e.parentNode||(u(e)?e.host:null)||w(e)}function A(e){return["html","body","#document"].indexOf(b(e))>=0?e.ownerDocument.body:f(e)&&E(e)?e:A(k(e))}function D(e,t){var n;void 0===t&&(t=[]);var r=A(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=c(r),a=o?[i].concat(i.visualViewport||[],E(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(D(k(a)))}function P(e){return["table","td","th"].indexOf(b(e))>=0}function M(e){return f(e)&&"fixed"!==O(e).position?e.offsetParent:null}function C(e){for(var t=c(e),n=M(e);n&&P(n)&&"static"===O(n).position;)n=M(n);return n&&("html"===b(n)||"body"===b(n)&&"static"===O(n).position)?t:n||function(e){var t=/firefox/i.test(v());if(/Trident/i.test(v())&&f(e)&&"fixed"===O(e).position)return null;var n=k(e);for(u(n)&&(n=n.host);f(n)&&["html","body"].indexOf(b(n))<0;){var r=O(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var T="top",S="bottom",W="right",H="left",N="auto",B=[T,S,W,H],R="start",_="end",V="clippingParents",q="viewport",I="popper",U="reference",F=B.reduce((function(e,t){return e.concat([t+"-"+R,t+"-"+_])}),[]),Z=[].concat(B,[N]).reduce((function(e,t){return e.concat([t,t+"-"+R,t+"-"+_])}),[]),z=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function G(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var X={placement:"bottom",modifiers:[],strategy:"absolute"};function Y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function $(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?X:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},X,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],f=!1,u={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;p(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:l(e)?D(e):e.contextElement?D(e.contextElement):[],popper:D(t)};var a,f,d=function(e){var t=G(e);return z.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),f=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(f).map((function(e){return f[e]}))));return s.orderedModifiers=d.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!f){var e=s.elements,t=e.reference,n=e.popper;if(Y(t,n)){s.rects={reference:j(t,C(n),"fixed"===s.options.strategy),popper:L(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,c=void 0===a?{}:a,l=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:l,instance:u})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){p(),f=!0}};if(!Y(e,t))return u;function p(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var J={passive:!0};function K(e){return e.split("-")[0]}function Q(e){return e.split("-")[1]}function ee(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function te(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?K(o):null,a=o?Q(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case T:t={x:s,y:n.y-r.height};break;case S:t={x:s,y:n.y+n.height};break;case W:t={x:n.x+n.width,y:c};break;case H:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var l=i?ee(i):null;if(null!=l){var f="y"===l?"height":"width";switch(a){case R:t[l]=t[l]-(n[f]/2-r[f]/2);break;case _:t[l]=t[l]+(n[f]/2-r[f]/2)}}return t}var ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,f=e.adaptive,u=e.roundOffsets,p=e.isFixed,d=a.x,v=void 0===d?0:d,h=a.y,y=void 0===h?0:h,g="function"==typeof u?u({x:v,y:y}):{x:v,y:y};v=g.x,y=g.y;var b=a.hasOwnProperty("x"),x=a.hasOwnProperty("y"),E=H,j=T,L=window;if(f){var k=C(n),A="clientHeight",D="clientWidth";if(k===c(n)&&"static"!==O(k=w(n)).position&&"absolute"===s&&(A="scrollHeight",D="scrollWidth"),o===T||(o===H||o===W)&&i===_)j=S,y-=(p&&k===L&&L.visualViewport?L.visualViewport.height:k[A])-r.height,y*=l?1:-1;if(o===H||(o===T||o===S)&&i===_)E=W,v-=(p&&k===L&&L.visualViewport?L.visualViewport.width:k[D])-r.width,v*=l?1:-1}var P,M=Object.assign({position:s},f&&ne),N=!0===u?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:m(n*o)/o||0,y:m(r*o)/o||0}}({x:v,y:y},c(n)):{x:v,y:y};return v=N.x,y=N.y,l?Object.assign({},M,((P={})[j]=x?"0":"",P[E]=b?"0":"",P.transform=(L.devicePixelRatio||1)<=1?"translate("+v+"px, "+y+"px)":"translate3d("+v+"px, "+y+"px, 0)",P)):Object.assign({},M,((t={})[j]=x?y+"px":"",t[E]=b?v+"px":"",t.transform="",t))}var oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=Z.reduce((function(e,n){return e[n]=function(e,t,n){var r=K(e),o=[H,T].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[H,W].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=a}},ie={left:"right",right:"left",bottom:"top",top:"bottom"};function ae(e){return e.replace(/left|right|bottom|top/g,(function(e){return ie[e]}))}var se={start:"end",end:"start"};function ce(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function le(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&u(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ue(e,t,n){return t===q?fe(function(e,t){var n=c(e),r=w(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;var f=h();(f||!f&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s+x(e),y:l}}(e,n)):l(t)?function(e,t){var n=y(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):fe(function(e){var t,n=w(e),r=g(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=p(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=p(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+x(e),c=-r.scrollTop;return"rtl"===O(o||n).direction&&(s+=p(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(w(e)))}function pe(e,t,n,r){var o="clippingParents"===t?function(e){var t=D(k(e)),n=["absolute","fixed"].indexOf(O(e).position)>=0&&f(e)?C(e):e;return l(n)?t.filter((function(e){return l(e)&&le(e,n)&&"body"!==b(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=ue(e,n,r);return t.top=p(o.top,t.top),t.right=d(o.right,t.right),t.bottom=d(o.bottom,t.bottom),t.left=p(o.left,t.left),t}),ue(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function de(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function me(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ve(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,c=void 0===s?V:s,f=n.rootBoundary,u=void 0===f?q:f,p=n.elementContext,d=void 0===p?I:p,m=n.altBoundary,v=void 0!==m&&m,h=n.padding,g=void 0===h?0:h,b=de("number"!=typeof g?g:me(g,B)),x=d===I?U:I,O=e.rects.popper,E=e.elements[v?x:d],j=pe(l(E)?E:E.contextElement||w(e.elements.popper),c,u,a),L=y(e.elements.reference),k=te({reference:L,element:O,strategy:"absolute",placement:o}),A=fe(Object.assign({},O,k)),D=d===I?A:L,P={top:j.top-D.top+b.top,bottom:D.bottom-j.bottom+b.bottom,left:j.left-D.left+b.left,right:D.right-j.right+b.right},M=e.modifiersData.offset;if(d===I&&M){var C=M[o];Object.keys(P).forEach((function(e){var t=[W,S].indexOf(e)>=0?1:-1,n=[T,S].indexOf(e)>=0?"y":"x";P[e]+=C[n]*t}))}return P}function he(e,t,n){return p(e,d(t,n))}var ye={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,l=n.rootBoundary,f=n.altBoundary,u=n.padding,m=n.tether,v=void 0===m||m,h=n.tetherOffset,y=void 0===h?0:h,g=ve(t,{boundary:c,rootBoundary:l,padding:u,altBoundary:f}),b=K(t.placement),w=Q(t.placement),x=!w,O=ee(b),E="x"===O?"y":"x",j=t.modifiersData.popperOffsets,k=t.rects.reference,A=t.rects.popper,D="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,P="number"==typeof D?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,N={x:0,y:0};if(j){if(i){var B,_="y"===O?T:H,V="y"===O?S:W,q="y"===O?"height":"width",I=j[O],U=I+g[_],F=I-g[V],Z=v?-A[q]/2:0,z=w===R?k[q]:A[q],G=w===R?-A[q]:-k[q],X=t.elements.arrow,Y=v&&X?L(X):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=$[_],te=$[V],ne=he(0,k[q],Y[q]),re=x?k[q]/2-Z-ne-J-P.mainAxis:z-ne-J-P.mainAxis,oe=x?-k[q]/2+Z+ne+te+P.mainAxis:G+ne+te+P.mainAxis,ie=t.elements.arrow&&C(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(B=null==M?void 0:M[O])?B:0,ce=I+oe-se,le=he(v?d(U,I+re-se-ae):U,I,v?p(F,ce):F);j[O]=le,N[O]=le-I}if(s){var fe,ue="x"===O?T:H,pe="x"===O?S:W,de=j[E],me="y"===E?"height":"width",ye=de+g[ue],ge=de-g[pe],be=-1!==[T,H].indexOf(b),we=null!=(fe=null==M?void 0:M[E])?fe:0,xe=be?ye:de-k[me]-A[me]-we+P.altAxis,Oe=be?de+k[me]+A[me]-we-P.altAxis:ge,Ee=v&&be?function(e,t,n){var r=he(e,t,n);return r>n?n:r}(xe,de,Oe):he(v?xe:ye,de,v?Oe:ge);j[E]=Ee,N[E]=Ee-de}t.modifiersData[r]=N}},requiresIfExists:["offset"]};var ge={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=K(n.placement),c=ee(s),l=[H,W].indexOf(s)>=0?"height":"width";if(i&&a){var f=function(e,t){return de("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:me(e,B))}(o.padding,n),u=L(i),p="y"===c?T:H,d="y"===c?S:W,m=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],v=a[c]-n.rects.reference[c],h=C(i),y=h?"y"===c?h.clientHeight||0:h.clientWidth||0:0,g=m/2-v/2,b=f[p],w=y-u[l]-f[d],x=y/2-u[l]/2+g,O=he(b,x,w),E=c;n.modifiersData[r]=((t={})[E]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&le(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function be(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function we(e){return[T,W,S,H].some((function(t){return e[t]>=0}))}var xe=$({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,l=c(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",n.update,J)})),s&&l.addEventListener("resize",n.update,J),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",n.update,J)})),s&&l.removeEventListener("resize",n.update,J)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=te({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,l={placement:K(t.placement),variation:Q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];f(o)&&b(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});f(r)&&b(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},oe,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,l=n.padding,f=n.boundary,u=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,m=void 0===d||d,v=n.allowedAutoPlacements,h=t.options.placement,y=K(h),g=c||(y===h||!m?[ae(h)]:function(e){if(K(e)===N)return[];var t=ae(e);return[ce(e),t,ce(t)]}(h)),b=[h].concat(g).reduce((function(e,n){return e.concat(K(n)===N?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?Z:c,f=Q(r),u=f?s?F:F.filter((function(e){return Q(e)===f})):B,p=u.filter((function(e){return l.indexOf(e)>=0}));0===p.length&&(p=u);var d=p.reduce((function(t,n){return t[n]=ve(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[K(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:f,rootBoundary:u,padding:l,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,j=b[0],L=0;L<b.length;L++){var k=b[L],A=K(k),D=Q(k)===R,P=[T,S].indexOf(A)>=0,M=P?"width":"height",C=ve(t,{placement:k,boundary:f,rootBoundary:u,altBoundary:p,padding:l}),_=P?D?W:H:D?S:T;w[M]>x[M]&&(_=ae(_));var V=ae(_),q=[];if(i&&q.push(C[A]<=0),s&&q.push(C[_]<=0,C[V]<=0),q.every((function(e){return e}))){j=k,E=!1;break}O.set(k,q)}if(E)for(var I=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},U=m?3:1;U>0;U--){if("break"===I(U))break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ye,ge,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ve(t,{elementContext:"reference"}),s=ve(t,{altBoundary:!0}),c=be(a,r),l=be(s,o,i),f=we(c),u=we(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":u})}}]}),Oe=function(){return(Oe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Ee=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||((r=r||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},je="adhere-ui-ellipsis",Le=function(e){function t(e){return i.createElement("div",{onClick:function(){k(!L)}},e.children)}var n=e.className,r=e.style,c=void 0!==(d=e.wrap)&&d,l=void 0===(d=e.wrapLines)?2:d,f=e.tooltip,u=void 0===(d=e.tooltipMaxLength)?1024:d,p=void 0===(d=e.isUseNativeTooltip)||d,d=void 0===(d=(e.trigger,e.tooltipClassName))?"":d,m=void 0===(m=e.tooltipStyle)?{}:m,v=void 0===(v=e.tooltipArrowClassName)?"":v,h=void 0===(h=e.tooltipArrowStyle)?{}:h,y=e.tooltipClose,g=e.tooltipMore,b=void 0===(P=e.customTooltipOptions)?{}:P,w=e.dangerouslySetInnerHTML,x=e.children,O=(0,i.useRef)(),E=(0,i.useRef)(),j=(0,i.useRef)(null),L=(P=(0,i.useState)(!1))[0],k=P[1],A=(0,i.useMemo)((function(){var e;return f||x||(null!=w&&w.__html?((e=document.createElement("div")).innerHTML=w.__html,e.innerText):"")}),[f,x,w]),D=(0,i.useCallback)((function(){return A.length>u}),[f,x,w,u]),P=(0,i.useMemo)((function(){var t={};return D()?t.WebkitLineClamp=!L&&"wrapLines"in e&&2<=l?l:"unset":t.WebkitLineClamp="wrapLines"in e&&2<=l?l:"unset",t}),[L,l,f,x,w,u]),M=(0,i.useCallback)((function(){return!D()&&"isUseNativeTooltip"in e&&!p}),[f,x,w,u,p]),C=(0,i.useCallback)((function(){return!D()&&(!("isUseNativeTooltip"in e)||p)}),[f,x,w,u,p]),T=(0,i.useCallback)((function(){return D()?!(L||"warp"in e&&c):!("warp"in e&&c)}),[L,c,f,x,w,u]),S=(0,i.useCallback)((function(){return D()?!L&&"wrap"in e&&c:"wrap"in e&&c}),[L,c,f,x,w,u]),W=(0,i.useCallback)((function(){return!!D()&&L}),[l,L,f,x,w,u]);(0,i.useEffect)((function(){var e,t,n=["mouseenter","focus"],r=["mouseleave","blur"];function o(){var e,t;null!=(t=null==(e=j.current)?void 0:e.setAttribute)&&t.call(e,"data-show",""),null!=(e=null==(t=E.current)?void 0:t.setOptions)&&e.call(t,(function(e){return Oe(Oe({},e),{modifiers:Ee(Ee([],null!=(e=e.modifiers)?e:[],!0),[{name:"eventListeners",enabled:!0}],!1)})})),null!=(t=null==(e=E.current)?void 0:e.update)&&t.call(e)}function i(){var e,t;null!=(e=null==(t=j.current)?void 0:t.removeAttribute)&&e.call(t,"data-show"),null!=(t=null==(e=E.current)?void 0:e.setOptions)&&t.call(e,(function(e){return Oe(Oe({},e),{modifiers:Ee(Ee([],null!=(e=e.modifiers)?e:[],!0),[{name:"eventListeners",enabled:!1}],!1)})}))}return M()&&(E.current&&null!=(t=null==(e=E.current)?void 0:e.destroy)&&t.call(e),E.current=xe(O.current,j.current,null!=b?b:{placement:"auto",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),n.forEach((function(e){var t,n;null!=(n=null==(t=O.current)?void 0:t.addEventListener)&&n.call(t,e,o)})),r.forEach((function(e){var t,n;null!=(n=null==(t=O.current)?void 0:t.addEventListener)&&n.call(t,e,i)}))),function(){n.forEach((function(e){var t,n;null!=(n=null==(t=O.current)?void 0:t.removeEventListener)&&n.call(t,e,o)})),r.forEach((function(e){var t,n;null!=(n=null==(t=O.current)?void 0:t.removeEventListener)&&n.call(t,e,i)}))}}),[f,x,w,u,p,b]),T={className:o()("".concat(je,"-inner"),null!=n?n:"",((n={})["".concat(je,"-line-ellipsis")]=T(),n["".concat(je,"-multi-line-ellipsis")]=S(),n["".concat(je,"-wrap")]=W(),n)),style:Oe(Oe({},P),null!=r?r:{})};return w&&w.__html&&(T.dangerouslySetInnerHTML=w),C()&&(T.title=A),i.createElement(i.Fragment,null,i.createElement("div",{className:"".concat(je)},i.createElement("div",Oe({ref:O},T),x),D()&&i.createElement(a.Z,{conditional:L,noMatch:function(){return i.createElement(t,null,null!=g?g:i.createElement("div",{className:"".concat(je,"-show-more")},s.ZP.v("展开")))}},(function(){return i.createElement(t,null,null!=y?y:i.createElement("div",{className:"".concat(je,"-hide-more")},s.ZP.v("收起")))}))),M()&&i.createElement("div",{ref:j,className:o()("".concat(je,"-custom-tool-tip"),null!=d?d:""),style:null!=m?m:{}},i.createElement("div",{className:o()("".concat(je,"-custom-tool-tip-inner"))},A),i.createElement("div",{className:o()("".concat(je,"-custom-tool-tip-arrow"),null!=v?v:""),style:null!=h?h:{},"data-popper-arrow":!0})))},ke=(0,i.memo)(Le)},96032:function(e,t,n){n.d(t,{$0:function(){return c},ae:function(){return u},e0:function(){return l},sB:function(){return f}});var r=n(70517),o=n(6692),i=n(90171);const{PlayGroundPageContext:a,PlayGroundPage:s}=o.default,{Section:c,CodeBoxSection:l,PropsSection:f,FunctionPropsSection:u}=s;t.ZP=function(e){let{children:t,...n}=e;const[o,c]=(0,i.useState)(),l=(0,i.useRef)();return(0,i.useEffect)((()=>{c(l.current.parentElement.parentElement)}),[]),i.createElement(a.Provider,{value:{scrollEl:o}},i.createElement(s,(0,r.Z)({ref:l},n),t))}}}]);