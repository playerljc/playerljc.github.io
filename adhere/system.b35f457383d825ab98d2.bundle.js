"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[1029],{712954:function(t,e,n){n.d(e,{kZ:function(){return p}});var r=n(258864),o=n(95759),i=n(884883),a=n(766122),u=n(487812),c=n(304710),f=n(511349),s=n(996311),l={placement:"bottom",modifiers:[],strategy:"absolute"};function d(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function p(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,p=void 0===n?[]:n,v=e.defaultOptions,m=void 0===v?l:v;return function(t,e,n){void 0===n&&(n=m);var v={placement:"bottom",orderedModifiers:[],options:Object.assign({},l,m),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},h=[],Z=!1,y={state:v,setOptions:function(n){var r="function"==typeof n?n(v.options):n;g(),v.options=Object.assign({},m,v.options,r),v.scrollParents={reference:(0,s.kK)(t)?(0,i.Z)(t):t.contextElement?(0,i.Z)(t.contextElement):[],popper:(0,i.Z)(e)};var o=(0,u.Z)((0,f.Z)([].concat(p,v.options.modifiers)));return v.orderedModifiers=o.filter((function(t){return t.enabled})),v.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,r=void 0===n?{}:n,o=t.effect;if("function"==typeof o){var i=o({state:v,name:e,instance:y,options:r}),a=function(){};h.push(i||a)}})),y.update()},forceUpdate:function(){if(!Z){var t=v.elements,e=t.reference,n=t.popper;if(d(e,n)){v.rects={reference:(0,r.Z)(e,(0,a.Z)(n),"fixed"===v.options.strategy),popper:(0,o.Z)(n)},v.reset=!1,v.placement=v.options.placement,v.orderedModifiers.forEach((function(t){return v.modifiersData[t.name]=Object.assign({},t.data)}));for(var i=0;i<v.orderedModifiers.length;i++)if(!0!==v.reset){var u=v.orderedModifiers[i],c=u.fn,f=u.options,s=void 0===f?{}:f,l=u.name;"function"==typeof c&&(v=c({state:v,options:s,name:l,instance:y})||v)}else v.reset=!1,i=-1}}},update:(0,c.Z)((function(){return new Promise((function(t){y.forceUpdate(),t(v)}))})),destroy:function(){g(),Z=!0}};if(!d(t,e))return y;function g(){h.forEach((function(t){return t()})),h=[]}return y.setOptions(n).then((function(t){!Z&&n.onFirstUpdate&&n.onFirstUpdate(t)})),y}}},567946:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(996311);function o(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&(0,r.Zq)(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}},969188:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(996311),o=n(773407),i=n(728381),a=n(257377);function u(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var u=t.getBoundingClientRect(),c=1,f=1;e&&(0,r.Re)(t)&&(c=t.offsetWidth>0&&(0,o.NM)(u.width)/t.offsetWidth||1,f=t.offsetHeight>0&&(0,o.NM)(u.height)/t.offsetHeight||1);var s=((0,r.kK)(t)?(0,i.Z)(t):window).visualViewport,l=!(0,a.Z)()&&n,d=(u.left+(l&&s?s.offsetLeft:0))/c,p=(u.top+(l&&s?s.offsetTop:0))/f,v=u.width/c,m=u.height/f;return{width:v,height:m,top:p,right:d+v,bottom:p+m,left:d,x:d,y:p}}},859361:function(t,e,n){n.d(e,{Z:function(){return y}});var r=n(183289),o=n(757676),i=n(981408),a=n(884883),u=n(766122),c=n(118617),f=n(112996),s=n(996311),l=n(969188),d=n(986798),p=n(567946),v=n(610425),m=n(814313),h=n(773407);function Z(t,e,n){return e===r.Pj?(0,m.Z)((0,o.Z)(t,n)):(0,s.kK)(e)?function(t,e){var n=(0,l.Z)(t,!1,"fixed"===e);return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}(e,n):(0,m.Z)((0,i.Z)((0,c.Z)(t)))}function y(t,e,n,r){var o="clippingParents"===e?function(t){var e=(0,a.Z)((0,d.Z)(t)),n=["absolute","fixed"].indexOf((0,f.Z)(t).position)>=0&&(0,s.Re)(t)?(0,u.Z)(t):t;return(0,s.kK)(n)?e.filter((function(t){return(0,s.kK)(t)&&(0,p.Z)(t,n)&&"body"!==(0,v.Z)(t)})):[]}(t):[].concat(e),i=[].concat(o,[n]),c=i[0],l=i.reduce((function(e,n){var o=Z(t,n,r);return e.top=(0,h.Fp)(o.top,e.top),e.right=(0,h.VV)(o.right,e.right),e.bottom=(0,h.VV)(o.bottom,e.bottom),e.left=(0,h.Fp)(o.left,e.left),e}),Z(t,c,r));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}},258864:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(969188),o=n(210108),i=n(610425),a=n(996311),u=n(678251),c=n(118617),f=n(865948),s=n(773407);function l(t,e,n){void 0===n&&(n=!1);var l=(0,a.Re)(e),d=(0,a.Re)(e)&&function(t){var e=t.getBoundingClientRect(),n=(0,s.NM)(e.width)/t.offsetWidth||1,r=(0,s.NM)(e.height)/t.offsetHeight||1;return 1!==n||1!==r}(e),p=(0,c.Z)(e),v=(0,r.Z)(t,d,n),m={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(l||!l&&!n)&&(("body"!==(0,i.Z)(e)||(0,f.Z)(p))&&(m=(0,o.Z)(e)),(0,a.Re)(e)?((h=(0,r.Z)(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):p&&(h.x=(0,u.Z)(p))),{x:v.left+m.scrollLeft-h.x,y:v.top+m.scrollTop-h.y,width:v.width,height:v.height}}},112996:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(728381);function o(t){return(0,r.Z)(t).getComputedStyle(t)}},118617:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(996311);function o(t){return(((0,r.kK)(t)?t.ownerDocument:t.document)||window.document).documentElement}},981408:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(118617),o=n(112996),i=n(678251),a=n(279333),u=n(773407);function c(t){var e,n=(0,r.Z)(t),c=(0,a.Z)(t),f=null==(e=t.ownerDocument)?void 0:e.body,s=(0,u.Fp)(n.scrollWidth,n.clientWidth,f?f.scrollWidth:0,f?f.clientWidth:0),l=(0,u.Fp)(n.scrollHeight,n.clientHeight,f?f.scrollHeight:0,f?f.clientHeight:0),d=-c.scrollLeft+(0,i.Z)(t),p=-c.scrollTop;return"rtl"===(0,o.Z)(f||n).direction&&(d+=(0,u.Fp)(n.clientWidth,f?f.clientWidth:0)-s),{width:s,height:l,x:d,y:p}}},991736:function(t,e,n){function r(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}n.d(e,{Z:function(){return r}})},95759:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(969188);function o(t){var e=(0,r.Z)(t),n=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}},610425:function(t,e,n){function r(t){return t?(t.nodeName||"").toLowerCase():null}n.d(e,{Z:function(){return r}})},210108:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(279333),o=n(728381),i=n(996311),a=n(991736);function u(t){return t!==(0,o.Z)(t)&&(0,i.Re)(t)?(0,a.Z)(t):(0,r.Z)(t)}},766122:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(728381),o=n(610425),i=n(112996),a=n(996311),u=n(578646),c=n(986798),f=n(846742);function s(t){return(0,a.Re)(t)&&"fixed"!==(0,i.Z)(t).position?t.offsetParent:null}function l(t){for(var e=(0,r.Z)(t),n=s(t);n&&(0,u.Z)(n)&&"static"===(0,i.Z)(n).position;)n=s(n);return n&&("html"===(0,o.Z)(n)||"body"===(0,o.Z)(n)&&"static"===(0,i.Z)(n).position)?e:n||function(t){var e=/firefox/i.test((0,f.Z)());if(/Trident/i.test((0,f.Z)())&&(0,a.Re)(t)&&"fixed"===(0,i.Z)(t).position)return null;var n=(0,c.Z)(t);for((0,a.Zq)(n)&&(n=n.host);(0,a.Re)(n)&&["html","body"].indexOf((0,o.Z)(n))<0;){var r=(0,i.Z)(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(t)||e}},986798:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(610425),o=n(118617),i=n(996311);function a(t){return"html"===(0,r.Z)(t)?t:t.assignedSlot||t.parentNode||((0,i.Zq)(t)?t.host:null)||(0,o.Z)(t)}},829657:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(986798),o=n(865948),i=n(610425),a=n(996311);function u(t){return["html","body","#document"].indexOf((0,i.Z)(t))>=0?t.ownerDocument.body:(0,a.Re)(t)&&(0,o.Z)(t)?t:u((0,r.Z)(t))}},757676:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(728381),o=n(118617),i=n(678251),a=n(257377);function u(t,e){var n=(0,r.Z)(t),u=(0,o.Z)(t),c=n.visualViewport,f=u.clientWidth,s=u.clientHeight,l=0,d=0;if(c){f=c.width,s=c.height;var p=(0,a.Z)();(p||!p&&"fixed"===e)&&(l=c.offsetLeft,d=c.offsetTop)}return{width:f,height:s,x:l+(0,i.Z)(t),y:d}}},728381:function(t,e,n){function r(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}n.d(e,{Z:function(){return r}})},279333:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(728381);function o(t){var e=(0,r.Z)(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}},678251:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(969188),o=n(118617),i=n(279333);function a(t){return(0,r.Z)((0,o.Z)(t)).left+(0,i.Z)(t).scrollLeft}},996311:function(t,e,n){n.d(e,{Re:function(){return i},Zq:function(){return a},kK:function(){return o}});var r=n(728381);function o(t){return t instanceof(0,r.Z)(t).Element||t instanceof Element}function i(t){return t instanceof(0,r.Z)(t).HTMLElement||t instanceof HTMLElement}function a(t){return"undefined"!=typeof ShadowRoot&&(t instanceof(0,r.Z)(t).ShadowRoot||t instanceof ShadowRoot)}},257377:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(846742);function o(){return!/^((?!chrome|android).)*safari/i.test((0,r.Z)())}},865948:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(112996);function o(t){var e=(0,r.Z)(t),n=e.overflow,o=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}},578646:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(610425);function o(t){return["table","td","th"].indexOf((0,r.Z)(t))>=0}},884883:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(829657),o=n(986798),i=n(728381),a=n(865948);function u(t,e){var n;void 0===e&&(e=[]);var c=(0,r.Z)(t),f=c===(null==(n=t.ownerDocument)?void 0:n.body),s=(0,i.Z)(c),l=f?[s].concat(s.visualViewport||[],(0,a.Z)(c)?c:[]):c,d=e.concat(l);return f?d:d.concat(u((0,o.Z)(l)))}},183289:function(t,e,n){n.d(e,{BL:function(){return f},Ct:function(){return h},F2:function(){return i},I:function(){return o},Pj:function(){return d},YP:function(){return v},bw:function(){return m},d7:function(){return u},k5:function(){return p},mv:function(){return c},t$:function(){return a},ut:function(){return s},we:function(){return r},xs:function(){return Z},zV:function(){return l}});var r="top",o="bottom",i="right",a="left",u="auto",c=[r,o,i,a],f="start",s="end",l="clippingParents",d="viewport",p="popper",v="reference",m=c.reduce((function(t,e){return t.concat([e+"-"+f,e+"-"+s])}),[]),h=[].concat(c,[u]).reduce((function(t,e){return t.concat([e,e+"-"+f,e+"-"+s])}),[]),Z=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},232942:function(t,e,n){var r=n(610425),o=n(996311);e.Z={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},a=e.elements[t];(0,o.Re)(a)&&(0,r.Z)(a)&&(Object.assign(a.style,n),Object.keys(i).forEach((function(t){var e=i[t];!1===e?a.removeAttribute(t):a.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var i=e.elements[t],a=e.attributes[t]||{},u=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});(0,o.Re)(i)&&(0,r.Z)(i)&&(Object.assign(i.style,u),Object.keys(a).forEach((function(t){i.removeAttribute(t)})))}))}},requires:["computeStyles"]}},520994:function(t,e,n){var r=n(615320),o=n(95759),i=n(567946),a=n(766122),u=n(240387),c=n(357931),f=n(94470),s=n(987149),l=n(183289);e.Z={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,i=t.name,d=t.options,p=n.elements.arrow,v=n.modifiersData.popperOffsets,m=(0,r.Z)(n.placement),h=(0,u.Z)(m),Z=[l.t$,l.F2].indexOf(m)>=0?"height":"width";if(p&&v){var y=function(t,e){return t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t,(0,f.Z)("number"!=typeof t?t:(0,s.Z)(t,l.mv))}(d.padding,n),g=(0,o.Z)(p),b="y"===h?l.we:l.t$,w="y"===h?l.I:l.F2,x=n.rects.reference[Z]+n.rects.reference[h]-v[h]-n.rects.popper[Z],O=v[h]-n.rects.reference[h],E=(0,a.Z)(p),k=E?"y"===h?E.clientHeight||0:E.clientWidth||0:0,j=x/2-O/2,L=y[b],P=k-g[Z]-y[w],A=k/2-g[Z]/2+j,M=(0,c.u)(L,A,P),R=h;n.modifiersData[i]=((e={})[R]=M,e.centerOffset=M-A,e)}},effect:function(t){var e=t.state,n=t.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=e.elements.popper.querySelector(r)))&&(0,i.Z)(e.elements.popper,r)&&(e.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},15029:function(t,e,n){var r=n(183289),o=n(766122),i=n(728381),a=n(118617),u=n(112996),c=n(615320),f=n(137675),s=n(773407),l={top:"auto",right:"auto",bottom:"auto",left:"auto"};function d(t){var e,n=t.popper,c=t.popperRect,f=t.placement,d=t.variation,p=t.offsets,v=t.position,m=t.gpuAcceleration,h=t.adaptive,Z=t.roundOffsets,y=t.isFixed,g=p.x,b=void 0===g?0:g,w=p.y,x=void 0===w?0:w,O="function"==typeof Z?Z({x:b,y:x}):{x:b,y:x};b=O.x,x=O.y;var E=p.hasOwnProperty("x"),k=p.hasOwnProperty("y"),j=r.t$,L=r.we,P=window;if(h){var A=(0,o.Z)(n),M="clientHeight",R="clientWidth";if(A===(0,i.Z)(n)&&(A=(0,a.Z)(n),"static"!==(0,u.Z)(A).position&&"absolute"===v&&(M="scrollHeight",R="scrollWidth")),f===r.we||(f===r.t$||f===r.F2)&&d===r.ut)L=r.I,x-=(y&&A===P&&P.visualViewport?P.visualViewport.height:A[M])-c.height,x*=m?1:-1;if(f===r.t$||(f===r.we||f===r.I)&&d===r.ut)j=r.F2,b-=(y&&A===P&&P.visualViewport?P.visualViewport.width:A[R])-c.width,b*=m?1:-1}var D,C=Object.assign({position:v},h&&l),N=!0===Z?function(t,e){var n=t.x,r=t.y,o=e.devicePixelRatio||1;return{x:(0,s.NM)(n*o)/o||0,y:(0,s.NM)(r*o)/o||0}}({x:b,y:x},(0,i.Z)(n)):{x:b,y:x};return b=N.x,x=N.y,m?Object.assign({},C,((D={})[L]=k?"0":"",D[j]=E?"0":"",D.transform=(P.devicePixelRatio||1)<=1?"translate("+b+"px, "+x+"px)":"translate3d("+b+"px, "+x+"px, 0)",D)):Object.assign({},C,((e={})[L]=k?x+"px":"",e[j]=E?b+"px":"",e.transform="",e))}e.Z={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,u=n.roundOffsets,s=void 0===u||u,l={placement:(0,c.Z)(e.placement),variation:(0,f.Z)(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,d(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:s})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,d(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}}},864309:function(t,e,n){var r=n(728381),o={passive:!0};e.Z={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,i=t.options,a=i.scroll,u=void 0===a||a,c=i.resize,f=void 0===c||c,s=(0,r.Z)(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return u&&l.forEach((function(t){t.addEventListener("scroll",n.update,o)})),f&&s.addEventListener("resize",n.update,o),function(){u&&l.forEach((function(t){t.removeEventListener("scroll",n.update,o)})),f&&s.removeEventListener("resize",n.update,o)}},data:{}}},30530:function(t,e,n){var r=n(299950),o=n(615320),i=n(443135),a=n(960478),u=n(532018),c=n(183289),f=n(137675);e.Z={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var l=n.mainAxis,d=void 0===l||l,p=n.altAxis,v=void 0===p||p,m=n.fallbackPlacements,h=n.padding,Z=n.boundary,y=n.rootBoundary,g=n.altBoundary,b=n.flipVariations,w=void 0===b||b,x=n.allowedAutoPlacements,O=e.options.placement,E=(0,o.Z)(O),k=m||(E===O||!w?[(0,r.Z)(O)]:function(t){if((0,o.Z)(t)===c.d7)return[];var e=(0,r.Z)(t);return[(0,i.Z)(t),e,(0,i.Z)(e)]}(O)),j=[O].concat(k).reduce((function(t,n){return t.concat((0,o.Z)(n)===c.d7?(0,u.Z)(e,{placement:n,boundary:Z,rootBoundary:y,padding:h,flipVariations:w,allowedAutoPlacements:x}):n)}),[]),L=e.rects.reference,P=e.rects.popper,A=new Map,M=!0,R=j[0],D=0;D<j.length;D++){var C=j[D],N=(0,o.Z)(C),F=(0,f.Z)(C)===c.BL,B=[c.we,c.I].indexOf(N)>=0,T=B?"width":"height",V=(0,a.Z)(e,{placement:C,boundary:Z,rootBoundary:y,altBoundary:g,padding:h}),S=B?F?c.F2:c.t$:F?c.I:c.we;L[T]>P[T]&&(S=(0,r.Z)(S));var W=(0,r.Z)(S),H=[];if(d&&H.push(V[N]<=0),v&&H.push(V[S]<=0,V[W]<=0),H.every((function(t){return t}))){R=C,M=!1;break}A.set(C,H)}if(M)for(var I=function(t){var e=j.find((function(e){var n=A.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return R=e,"break"},q=w?3:1;q>0;q--){if("break"===I(q))break}e.placement!==R&&(e.modifiersData[s]._skip=!0,e.placement=R,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},213616:function(t,e,n){var r=n(183289),o=n(960478);function i(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function a(t){return[r.we,r.F2,r.I,r.t$].some((function(e){return t[e]>=0}))}e.Z={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,r=e.rects.reference,u=e.rects.popper,c=e.modifiersData.preventOverflow,f=(0,o.Z)(e,{elementContext:"reference"}),s=(0,o.Z)(e,{altBoundary:!0}),l=i(f,r),d=i(s,u,c),p=a(l),v=a(d);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:d,isReferenceHidden:p,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":v})}}},925477:function(t,e,n){var r=n(615320),o=n(183289);e.Z={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,i=t.name,a=n.offset,u=void 0===a?[0,0]:a,c=o.Ct.reduce((function(t,n){return t[n]=function(t,e,n){var i=(0,r.Z)(t),a=[o.t$,o.we].indexOf(i)>=0?-1:1,u="function"==typeof n?n(Object.assign({},e,{placement:t})):n,c=u[0],f=u[1];return c=c||0,f=(f||0)*a,[o.t$,o.F2].indexOf(i)>=0?{x:f,y:c}:{x:c,y:f}}(n,e.rects,u),t}),{}),f=c[e.placement],s=f.x,l=f.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=l),e.modifiersData[i]=c}}},367173:function(t,e,n){var r=n(19628);e.Z={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=(0,r.Z)({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}}},575861:function(t,e,n){var r=n(183289),o=n(615320),i=n(240387),a=n(974120),u=n(357931),c=n(95759),f=n(766122),s=n(960478),l=n(137675),d=n(248376),p=n(773407);e.Z={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,v=t.name,m=n.mainAxis,h=void 0===m||m,Z=n.altAxis,y=void 0!==Z&&Z,g=n.boundary,b=n.rootBoundary,w=n.altBoundary,x=n.padding,O=n.tether,E=void 0===O||O,k=n.tetherOffset,j=void 0===k?0:k,L=(0,s.Z)(e,{boundary:g,rootBoundary:b,padding:x,altBoundary:w}),P=(0,o.Z)(e.placement),A=(0,l.Z)(e.placement),M=!A,R=(0,i.Z)(P),D=(0,a.Z)(R),C=e.modifiersData.popperOffsets,N=e.rects.reference,F=e.rects.popper,B="function"==typeof j?j(Object.assign({},e.rects,{placement:e.placement})):j,T="number"==typeof B?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),V=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,S={x:0,y:0};if(C){if(h){var W,H="y"===R?r.we:r.t$,I="y"===R?r.I:r.F2,q="y"===R?"height":"width",$=C[R],_=$+L[H],K=$-L[I],U=E?-F[q]/2:0,z=A===r.BL?N[q]:F[q],Y=A===r.BL?-F[q]:-N[q],G=e.elements.arrow,X=E&&G?(0,c.Z)(G):{width:0,height:0},J=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:(0,d.Z)(),Q=J[H],tt=J[I],et=(0,u.u)(0,N[q],X[q]),nt=M?N[q]/2-U-et-Q-T.mainAxis:z-et-Q-T.mainAxis,rt=M?-N[q]/2+U+et+tt+T.mainAxis:Y+et+tt+T.mainAxis,ot=e.elements.arrow&&(0,f.Z)(e.elements.arrow),it=ot?"y"===R?ot.clientTop||0:ot.clientLeft||0:0,at=null!=(W=null==V?void 0:V[R])?W:0,ut=$+nt-at-it,ct=$+rt-at,ft=(0,u.u)(E?(0,p.VV)(_,ut):_,$,E?(0,p.Fp)(K,ct):K);C[R]=ft,S[R]=ft-$}if(y){var st,lt="x"===R?r.we:r.t$,dt="x"===R?r.I:r.F2,pt=C[D],vt="y"===D?"height":"width",mt=pt+L[lt],ht=pt-L[dt],Zt=-1!==[r.we,r.t$].indexOf(P),yt=null!=(st=null==V?void 0:V[D])?st:0,gt=Zt?mt:pt-N[vt]-F[vt]-yt+T.altAxis,bt=Zt?pt+N[vt]+F[vt]-yt-T.altAxis:ht,wt=E&&Zt?(0,u.q)(gt,pt,bt):(0,u.u)(E?gt:mt,pt,E?bt:ht);C[D]=wt,S[D]=wt-pt}e.modifiersData[v]=S}},requiresIfExists:["offset"]}},96385:function(t,e,n){n.d(e,{fi:function(){return v}});var r=n(712954),o=n(864309),i=n(367173),a=n(15029),u=n(232942),c=n(925477),f=n(30530),s=n(575861),l=n(520994),d=n(213616),p=[o.Z,i.Z,a.Z,u.Z,c.Z,f.Z,s.Z,l.Z,d.Z],v=(0,r.kZ)({defaultModifiers:p})},532018:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(137675),o=n(183289),i=n(960478),a=n(615320);function u(t,e){void 0===e&&(e={});var n=e,u=n.placement,c=n.boundary,f=n.rootBoundary,s=n.padding,l=n.flipVariations,d=n.allowedAutoPlacements,p=void 0===d?o.Ct:d,v=(0,r.Z)(u),m=v?l?o.bw:o.bw.filter((function(t){return(0,r.Z)(t)===v})):o.mv,h=m.filter((function(t){return p.indexOf(t)>=0}));0===h.length&&(h=m);var Z=h.reduce((function(e,n){return e[n]=(0,i.Z)(t,{placement:n,boundary:c,rootBoundary:f,padding:s})[(0,a.Z)(n)],e}),{});return Object.keys(Z).sort((function(t,e){return Z[t]-Z[e]}))}},19628:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(615320),o=n(137675),i=n(240387),a=n(183289);function u(t){var e,n=t.reference,u=t.element,c=t.placement,f=c?(0,r.Z)(c):null,s=c?(0,o.Z)(c):null,l=n.x+n.width/2-u.width/2,d=n.y+n.height/2-u.height/2;switch(f){case a.we:e={x:l,y:n.y-u.height};break;case a.I:e={x:l,y:n.y+n.height};break;case a.F2:e={x:n.x+n.width,y:d};break;case a.t$:e={x:n.x-u.width,y:d};break;default:e={x:n.x,y:n.y}}var p=f?(0,i.Z)(f):null;if(null!=p){var v="y"===p?"height":"width";switch(s){case a.BL:e[p]=e[p]-(n[v]/2-u[v]/2);break;case a.ut:e[p]=e[p]+(n[v]/2-u[v]/2)}}return e}},304710:function(t,e,n){function r(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}n.d(e,{Z:function(){return r}})},960478:function(t,e,n){n.d(e,{Z:function(){return d}});var r=n(859361),o=n(118617),i=n(969188),a=n(19628),u=n(814313),c=n(183289),f=n(996311),s=n(94470),l=n(987149);function d(t,e){void 0===e&&(e={});var n=e,d=n.placement,p=void 0===d?t.placement:d,v=n.strategy,m=void 0===v?t.strategy:v,h=n.boundary,Z=void 0===h?c.zV:h,y=n.rootBoundary,g=void 0===y?c.Pj:y,b=n.elementContext,w=void 0===b?c.k5:b,x=n.altBoundary,O=void 0!==x&&x,E=n.padding,k=void 0===E?0:E,j=(0,s.Z)("number"!=typeof k?k:(0,l.Z)(k,c.mv)),L=w===c.k5?c.YP:c.k5,P=t.rects.popper,A=t.elements[O?L:w],M=(0,r.Z)((0,f.kK)(A)?A:A.contextElement||(0,o.Z)(t.elements.popper),Z,g,m),R=(0,i.Z)(t.elements.reference),D=(0,a.Z)({reference:R,element:P,strategy:"absolute",placement:p}),C=(0,u.Z)(Object.assign({},P,D)),N=w===c.k5?C:R,F={top:M.top-N.top+j.top,bottom:N.bottom-M.bottom+j.bottom,left:M.left-N.left+j.left,right:N.right-M.right+j.right},B=t.modifiersData.offset;if(w===c.k5&&B){var T=B[p];Object.keys(F).forEach((function(t){var e=[c.F2,c.I].indexOf(t)>=0?1:-1,n=[c.we,c.I].indexOf(t)>=0?"y":"x";F[t]+=T[n]*e}))}return F}},987149:function(t,e,n){function r(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}n.d(e,{Z:function(){return r}})},974120:function(t,e,n){function r(t){return"x"===t?"y":"x"}n.d(e,{Z:function(){return r}})},615320:function(t,e,n){function r(t){return t.split("-")[0]}n.d(e,{Z:function(){return r}})},248376:function(t,e,n){function r(){return{top:0,right:0,bottom:0,left:0}}n.d(e,{Z:function(){return r}})},240387:function(t,e,n){function r(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}n.d(e,{Z:function(){return r}})},299950:function(t,e,n){n.d(e,{Z:function(){return o}});var r={left:"right",right:"left",bottom:"top",top:"bottom"};function o(t){return t.replace(/left|right|bottom|top/g,(function(t){return r[t]}))}},443135:function(t,e,n){n.d(e,{Z:function(){return o}});var r={start:"end",end:"start"};function o(t){return t.replace(/start|end/g,(function(t){return r[t]}))}},137675:function(t,e,n){function r(t){return t.split("-")[1]}n.d(e,{Z:function(){return r}})},773407:function(t,e,n){n.d(e,{Fp:function(){return r},NM:function(){return i},VV:function(){return o}});var r=Math.max,o=Math.min,i=Math.round},511349:function(t,e,n){function r(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}n.d(e,{Z:function(){return r}})},94470:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(248376);function o(t){return Object.assign({},(0,r.Z)(),t)}},487812:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(183289);function o(t){var e=new Map,n=new Set,r=[];function o(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var r=e.get(t);r&&o(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||o(t)})),r}function i(t){var e=o(t);return r.xs.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}},814313:function(t,e,n){function r(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}n.d(e,{Z:function(){return r}})},846742:function(t,e,n){function r(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}n.d(e,{Z:function(){return r}})},357931:function(t,e,n){n.d(e,{q:function(){return i},u:function(){return o}});var r=n(773407);function o(t,e,n){return(0,r.Fp)(t,(0,r.VV)(e,n))}function i(t,e,n){var r=o(t,e,n);return r>n?n:r}},409212:function(t,e,n){var r=n(801821),o=n.n(r),i=n(690171),a=n(519344),u=n(355360),c=n(96385),f=function(){return(f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||((r=r||Array.prototype.slice.call(e,0,o))[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))},l="adhere-ui-ellipsis",d=function(t){function e(t){return i.createElement("div",{onClick:function(){M(!A)}},t.children)}var n=t.className,r=t.style,d=void 0!==(Z=t.wrap)&&Z,p=void 0===(Z=t.wrapLines)?2:Z,v=t.tooltip,m=void 0===(Z=t.tooltipMaxLength)?1024:Z,h=void 0===(Z=t.isUseNativeTooltip)||Z,Z=void 0===(Z=(t.trigger,t.tooltipClassName))?"":Z,y=void 0===(y=t.tooltipStyle)?{}:y,g=void 0===(g=t.tooltipArrowClassName)?"":g,b=void 0===(b=t.tooltipArrowStyle)?{}:b,w=t.tooltipClose,x=t.tooltipMore,O=void 0===(C=t.customTooltipOptions)?{}:C,E=t.dangerouslySetInnerHTML,k=t.children,j=(0,i.useRef)(),L=(0,i.useRef)(),P=(0,i.useRef)(null),A=(C=(0,i.useState)(!1))[0],M=C[1],R=(0,i.useMemo)((function(){var t;return v||k||(null!=E&&E.__html?((t=document.createElement("div")).innerHTML=E.__html,t.innerText):"")}),[v,k,E]),D=(0,i.useCallback)((function(){return R.length>m}),[v,k,E,m]),C=(0,i.useMemo)((function(){var e={};return D()?e.WebkitLineClamp=!A&&"wrapLines"in t&&2<=p?p:"unset":e.WebkitLineClamp="wrapLines"in t&&2<=p?p:"unset",e}),[A,p,v,k,E,m]),N=(0,i.useCallback)((function(){return!D()&&"isUseNativeTooltip"in t&&!h}),[v,k,E,m,h]),F=(0,i.useCallback)((function(){return!D()&&(!("isUseNativeTooltip"in t)||h)}),[v,k,E,m,h]),B=(0,i.useCallback)((function(){return D()?!(A||"warp"in t&&d):!("warp"in t&&d)}),[A,d,v,k,E,m]),T=(0,i.useCallback)((function(){return D()?!A&&"wrap"in t&&d:"wrap"in t&&d}),[A,d,v,k,E,m]),V=(0,i.useCallback)((function(){return!!D()&&A}),[p,A,v,k,E,m]);(0,i.useEffect)((function(){var t,e,n=["mouseenter","focus"],r=["mouseleave","blur"];function o(){var t,e;null!=(e=null==(t=P.current)?void 0:t.setAttribute)&&e.call(t,"data-show",""),null!=(t=null==(e=L.current)?void 0:e.setOptions)&&t.call(e,(function(t){return f(f({},t),{modifiers:s(s([],null!=(t=t.modifiers)?t:[],!0),[{name:"eventListeners",enabled:!0}],!1)})})),null!=(e=null==(t=L.current)?void 0:t.update)&&e.call(t)}function i(){var t,e;null!=(t=null==(e=P.current)?void 0:e.removeAttribute)&&t.call(e,"data-show"),null!=(e=null==(t=L.current)?void 0:t.setOptions)&&e.call(t,(function(t){return f(f({},t),{modifiers:s(s([],null!=(t=t.modifiers)?t:[],!0),[{name:"eventListeners",enabled:!1}],!1)})}))}return N()&&(L.current&&null!=(e=null==(t=L.current)?void 0:t.destroy)&&e.call(t),L.current=(0,c.fi)(j.current,P.current,null!=O?O:{placement:"auto",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),n.forEach((function(t){var e,n;null!=(n=null==(e=j.current)?void 0:e.addEventListener)&&n.call(e,t,o)})),r.forEach((function(t){var e,n;null!=(n=null==(e=j.current)?void 0:e.addEventListener)&&n.call(e,t,i)}))),function(){n.forEach((function(t){var e,n;null!=(n=null==(e=j.current)?void 0:e.removeEventListener)&&n.call(e,t,o)})),r.forEach((function(t){var e,n;null!=(n=null==(e=j.current)?void 0:e.removeEventListener)&&n.call(e,t,i)}))}}),[v,k,E,m,h,O]),B={className:o()("".concat(l,"-inner"),null!=n?n:"",((n={})["".concat(l,"-line-ellipsis")]=B(),n["".concat(l,"-multi-line-ellipsis")]=T(),n["".concat(l,"-wrap")]=V(),n)),style:f(f({},C),null!=r?r:{})};return E&&E.__html&&(B.dangerouslySetInnerHTML=E),F()&&(B.title=R),i.createElement(i.Fragment,null,i.createElement("div",{className:"".concat(l)},i.createElement("div",f({ref:j},B),k),D()&&i.createElement(a.Z,{conditional:A,noMatch:function(){return i.createElement(e,null,null!=x?x:i.createElement("div",{className:"".concat(l,"-show-more")},u.ZP.v("展开")))}},(function(){return i.createElement(e,null,null!=w?w:i.createElement("div",{className:"".concat(l,"-hide-more")},u.ZP.v("收起")))}))),N()&&i.createElement("div",{ref:P,className:o()("".concat(l,"-custom-tool-tip"),null!=Z?Z:""),style:null!=y?y:{}},i.createElement("div",{className:o()("".concat(l,"-custom-tool-tip-inner"))},R),i.createElement("div",{className:o()("".concat(l,"-custom-tool-tip-arrow"),null!=g?g:""),style:null!=b?b:{},"data-popper-arrow":!0})))};e.Z=(0,i.memo)(d)},175882:function(t,e,n){var r=n(409212);e.Z=r.Z},296032:function(t,e,n){n.d(e,{$0:function(){return c},ae:function(){return l},e0:function(){return f},sB:function(){return s}});var r=n(570517),o=n(153757),i=n(690171);const{PlayGroundPageContext:a,PlayGroundPage:u}=o.default,{Section:c,CodeBoxSection:f,PropsSection:s,FunctionPropsSection:l}=u;e.ZP=function(t){let{children:e,...n}=t;const[o,c]=(0,i.useState)(),f=(0,i.useRef)();return(0,i.useEffect)((()=>{c(f.current.parentElement.parentElement)}),[]),i.createElement(a.Provider,{value:{scrollEl:o}},i.createElement(u,(0,r.Z)({ref:f},n),e))}}}]);