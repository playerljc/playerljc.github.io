"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[2927],{2927:(e,l,s)=>{s.d(l,{A:()=>E});var a=s(72687),o=s(78043),n=s(57907),t=s(31934),i=s.n(t),c=s(26322),r=s(92314),d=s(39378),v=s(14877),p=s(21765),b=s(51698),m=s(7429),u=s(48276),y=s(54148),C=s(69984),k=s(59995);const f="adm-center-popup",g=Object.assign(Object.assign({},k.p),{getContainer:null}),E=e=>{const{popup:l={}}=(0,y.UK)(),s=(0,m.v)(g,l,e),t=(0,o.A)(),k=(0,a.useSpring)({scale:s.visible?1:.8,opacity:s.visible?1:0,config:{mass:1.2,tension:200,friction:25,clamp:!0},onRest:()=>{var e,l;t.current||(O(s.visible),s.visible?null===(e=s.afterShow)||void 0===e||e.call(s):null===(l=s.afterClose)||void 0===l||l.call(s))}}),[E,O]=(0,c.useState)(s.visible);(0,n.A)((()=>{s.visible&&O(!0)}),[s.visible]);const h=(0,c.useRef)(null);(0,b.G)(h,s.disableBodyScroll&&E);const N=(0,p.c)(E&&s.visible),S=c.createElement("div",{className:i()(`${f}-body`,s.bodyClassName),style:s.bodyStyle},s.children),j=(0,u.r)(s.stopPropagation,(0,r.q)(s,c.createElement("div",{className:f,style:{display:E?void 0:"none",pointerEvents:E?void 0:"none"}},s.mask&&c.createElement(C.A,{visible:N,forceRender:s.forceRender,destroyOnClose:s.destroyOnClose,onMaskClick:e=>{var l,a;null===(l=s.onMaskClick)||void 0===l||l.call(s,e),s.closeOnMaskClick&&(null===(a=s.onClose)||void 0===a||a.call(s))},style:s.maskStyle,className:i()(`${f}-mask`,s.maskClassName),disableBodyScroll:!1,stopPropagation:s.stopPropagation}),c.createElement("div",{className:`${f}-wrap`,role:s.role,"aria-label":s["aria-label"]},c.createElement(a.animated.div,{style:Object.assign(Object.assign({},k),{pointerEvents:k.opacity.to((e=>1===e?"unset":"none"))}),ref:h},s.showCloseButton&&c.createElement("a",{className:i()(`${f}-close`,"adm-plain-anchor"),onClick:()=>{var e;null===(e=s.onClose)||void 0===e||e.call(s)}},s.closeIcon),S)))));return c.createElement(v.W,{active:E,forceRender:s.forceRender,destroyOnClose:s.destroyOnClose},(0,d.r)(s.getContainer,j))}}}]);