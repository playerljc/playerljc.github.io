"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[3754],{83754:function(e,n,t){var s=t(35481),o=t(90171),r=t(84261),c=t(42639),i=t(948),l=t(43852),a=t(192);let u=null,f=e=>e(),p=[],d={};function g(){const{prefixCls:e,getContainer:n,duration:t,rtl:s,maxCount:o,top:r}=d,i=null!=e?e:(0,c.w6)().getPrefixCls("message"),l=(null==n?void 0:n())||document.body;return{prefixCls:i,getContainer:()=>l,duration:t,rtl:s,maxCount:o,top:r}}const y=o.forwardRef(((e,n)=>{const[t,s]=o.useState(g),[r,i]=(0,l.K)(t),a=(0,c.w6)(),u=a.getRootPrefixCls(),f=a.getIconPrefixCls(),p=a.getTheme(),d=()=>{s(g)};return o.useEffect(d,[]),o.useImperativeHandle(n,(()=>{const e=Object.assign({},r);return Object.keys(e).forEach((n=>{e[n]=function(){return d(),r[n].apply(r,arguments)}})),{instance:e,sync:d}})),o.createElement(c.ZP,{prefixCls:u,iconPrefixCls:f,theme:p},i)}));function C(){if(!u){const e=document.createDocumentFragment(),n={fragment:e};return u=n,void f((()=>{(0,r.s)(o.createElement(y,{ref:e=>{const{instance:t,sync:s}=e||{};Promise.resolve().then((()=>{!n.instance&&t&&(n.instance=t,n.sync=s,C())}))}}),e)}))}u.instance&&(p.forEach((e=>{const{type:n,skipped:t}=e;if(!t)switch(n){case"open":f((()=>{const n=u.instance.open(Object.assign(Object.assign({},d),e.config));null==n||n.then(e.resolve),e.setCloseFn(n)}));break;case"destroy":f((()=>{null==u||u.instance.destroy(e.key)}));break;default:f((()=>{var t;const o=(t=u.instance)[n].apply(t,(0,s.Z)(e.args));null==o||o.then(e.resolve),e.setCloseFn(o)}))}})),p=[])}const h={open:function(e){const n=(0,a.J)((n=>{let t;const s={type:"open",config:e,resolve:n,setCloseFn:e=>{t=e}};return p.push(s),()=>{t?f((()=>{t()})):s.skipped=!0}}));return C(),n},destroy:function(e){p.push({type:"destroy",key:e}),C()},config:function(e){d=Object.assign(Object.assign({},d),e),f((()=>{var e;null===(e=null==u?void 0:u.sync)||void 0===e||e.call(u)}))},useMessage:l.Z,_InternalPanelDoNotUseOrYouWillBeFired:i.ZP};["success","info","warning","error","loading"].forEach((e=>{h[e]=function(){for(var n=arguments.length,t=new Array(n),s=0;s<n;s++)t[s]=arguments[s];return function(e,n){const t=(0,a.J)((t=>{let s;const o={type:e,args:n,resolve:t,setCloseFn:e=>{s=e}};return p.push(o),()=>{s?f((()=>{s()})):o.skipped=!0}}));return C(),t}(e,t)}}));n.ZP=h}}]);