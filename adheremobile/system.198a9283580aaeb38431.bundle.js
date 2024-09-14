"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[5959],{85959:(e,t,n)=>{n.d(t,{A:()=>V});var l=n(26322),a=n(7429),r=n(72687),u=n(99815),o=n(32115),c=n(36488),s=n(24585),i=n.n(s),m=n(57907),d=n(97756),v=n(472);var f=n(17242),p=n(31934),g=n.n(p);const h="adm-picker-view",b=(0,l.memo)((e=>{const{value:t,column:n,renderLabel:a}=e;function s(t){e.onSelect(t,e.index)}const[{y:i},p]=(0,r.useSpring)((()=>({from:{y:0},config:{tension:400,mass:.8}}))),b=(0,l.useRef)(!1),y=(0,l.useRef)(null),w=(0,l.useRef)(null),E=(0,l.useRef)(34);function $(e){const t=e*-E.current;p.start({y:t});const l=n[e];l&&s(l.value)}(0,m.A)((()=>{const e=w.current;e&&(E.current=function(e){if(null==e||""===e)return d.C&&(0,v.SZ)("Global","Something went wrong when calculating CSS length. Please report an issue at https://github.com/ant-design/ant-design-mobile/issues/new/choose"),0;const t=e.trim();return t.endsWith("px")?parseFloat(t):t.endsWith("rem")?parseFloat(t)*parseFloat(window.getComputedStyle(document.documentElement).fontSize):t.endsWith("vw")?parseFloat(t)*window.innerWidth/100:(d.C&&(0,v.SZ)("Global",`You are using a not supported CSS unit in \`${e}\`. Only \`px\` \`rem\` and \`vw\` are supported.`),0)}(window.getComputedStyle(e).getPropertyValue("height")))})),(0,m.A)((()=>{if(b.current)return;if(null===t)return;const e=n.findIndex((e=>e.value===t));if(e<0)return;const l=e*-E.current;p.start({y:l,immediate:i.goal!==l})}),[t,n]),(0,m.A)((()=>{if(0===n.length)null!==t&&s(null);else if(!n.some((e=>e.value===t))){s(n[0].value)}}),[n,t]);const k=e=>{const{direction:[,t],distance:[,n],velocity:[,l],offset:[,a],last:r}=e;return{direction:t,distance:n,velocity:l,offset:a,last:r}};(0,u.useDrag)((e=>{e.event.stopPropagation(),(e=>{b.current=!0;const t=-(n.length-1)*E.current,{direction:l,last:a,velocity:r,offset:u}=k(e);if(a){b.current=!1;const e=u+r*l*50,n=(0,c.$)(e,t,0);$(-Math.round(n/E.current))}else{const e=u;p.start({y:(0,o.B)(e,t,0,50*E.current,.2)})}})(e)}),{axis:"y",from:()=>[0,i.get()],filterTaps:!0,pointer:{touch:!0},target:y}),(0,u.useWheel)((e=>{e.event.stopPropagation(),(e=>{b.current=!0;const t=-(n.length-1)*E.current,{direction:l,last:a,velocity:r,distance:u}=k(e),s=-l,m=i.get();if(a){b.current=!1;const e=m+u*s+r*s*50,n=(0,c.$)(e,t,0);$(-Math.round(n/E.current))}else{const e=m+u*s;p.start({y:(0,o.B)(e,t,0,50*E.current,.2)})}})(e)}),{target:e.mouseWheel?y:void 0,axis:"y",from:()=>[0,i.get()],preventDefault:!0,eventOptions:f.C?{passive:!1}:void 0});let N=null;return l.createElement("div",{className:`${h}-column`},l.createElement("div",{className:`${h}-item-height-measure`,ref:w}),l.createElement(r.animated.div,{ref:y,style:{translateY:i},className:`${h}-column-wheel`,"aria-hidden":!0},n.map(((t,n)=>{var r;const u=e.value===t.value;return u&&(N=n),l.createElement("div",{key:null!==(r=t.key)&&void 0!==r?r:t.value,"data-selected":u,className:g()(`${h}-column-item`,{[`${h}-column-item-active`]:u}),onClick:function(){b.current=!1,$(n)},"aria-hidden":!u,"aria-label":u?"active":""},l.createElement("div",{className:`${h}-column-item-label`},a(t)))}))),function(){if(null===N)return null;const e=n[N],t=N-1,a=N+1,r=n[t],u=n[a];return l.createElement("div",{className:`${h}-column-accessible`},l.createElement("div",{className:`${h}-column-accessible-current`,role:"button","aria-label":e?`当前选择的是：${e.label}`:"当前未选择"},"-"),l.createElement("div",{className:`${h}-column-accessible-button`,onClick:()=>{r&&$(t)},role:r?"button":"text","aria-label":r?`选择上一项：${r.label}`:"没有上一项"},"-"),l.createElement("div",{className:`${h}-column-accessible-button`,onClick:()=>{u&&$(a)},role:u?"button":"text","aria-label":u?`选择下一项：${u.label}`:"没有下一项"},"-"))}())}),((e,t)=>e.index===t.index&&(e.value===t.value&&(e.onSelect===t.onSelect&&(e.renderLabel===t.renderLabel&&(e.mouseWheel===t.mouseWheel&&!!i()(e.column,t.column)))))));function y(e){let t=null;return()=>(null===t&&(t=e()),t)}function w(e,t){return(0,l.useMemo)((()=>function(e,t){const n=y((()=>("function"==typeof e?e(t):e).map((e=>e.map((e=>"string"==typeof e?{label:e,value:e}:e)))))),l=y((()=>t.map(((e,t)=>{var l;const a=n()[t];return a&&null!==(l=a.find((t=>t.value===e)))&&void 0!==l?l:null}))));return{get columns(){return n()},get items(){return l()}}}(e,t)),[e,t])}b.displayName="Wheel";var E=n(92314),$=n(78127),k=n(247),N=n.n(k),S=n(83270),C=n(83907),x=n(79711),W=n(92056);const A=function(e,t){var n;W.A&&((0,x.Tn)(e)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof e)));var a=(0,S.A)(e),r=null!==(n=null==t?void 0:t.wait)&&void 0!==n?n:1e3,u=(0,l.useMemo)((function(){return N()((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a.current.apply(a,(0,$.fX)([],(0,$.zs)(e),!1))}),r,t)}),[]);return(0,C.A)((function(){u.cancel()})),{run:u,cancel:u.cancel,flush:u.flush}};var F=n(72521);const L=function(e,t,n){var a=(0,$.zs)((0,l.useState)({}),2),r=a[0],u=a[1],o=A((function(){u({})}),n).run;(0,l.useEffect)((function(){return o()}),t),(0,F.A)(e,[r])};var P=n(50378);const M="adm-picker-view",R={defaultValue:[],renderLabel:e=>e.label,mouseWheel:!1,loadingContent:l.createElement("div",{className:`${M}-loading-content`},l.createElement(P.A,null))},T=(0,l.memo)((e=>{const t=(0,a.v)(R,e),[n,r]=(0,l.useState)(void 0===t.value?t.defaultValue:t.value);(0,l.useEffect)((()=>{void 0!==t.value&&t.value!==n&&r(t.value)}),[t.value]),(0,l.useEffect)((()=>{if(t.value===n)return;const e=window.setTimeout((()=>{void 0!==t.value&&t.value!==n&&r(t.value)}),1e3);return()=>{window.clearTimeout(e)}}),[t.value,n]);const u=w(t.columns,n),o=u.columns;L((()=>{var e;t.value!==n&&(null===(e=t.onChange)||void 0===e||e.call(t,n,u))}),[n],{wait:0,leading:!1,trailing:!0});const c=(0,l.useCallback)(((e,t)=>{r((n=>{const l=[...n];return l[t]=e,l}))}),[]);return(0,E.q)(t,l.createElement("div",{className:`${M}`},t.loading?t.loadingContent:l.createElement(l.Fragment,null,o.map(((e,a)=>l.createElement(b,{key:a,index:a,column:e,value:n[a],onSelect:c,renderLabel:t.renderLabel,mouseWheel:t.mouseWheel}))),l.createElement("div",{className:`${M}-mask`},l.createElement("div",{className:`${M}-mask-top`}),l.createElement("div",{className:`${M}-mask-middle`}),l.createElement("div",{className:`${M}-mask-bottom`})))))}));T.displayName="PickerView";const V=T}}]);