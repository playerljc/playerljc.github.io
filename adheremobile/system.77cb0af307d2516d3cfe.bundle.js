"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[37],{30037:(e,o,n)=>{n.d(o,{A:()=>E});var l=n(26322),t=n(78127),a=n(7429),c=n(31934),i=n.n(c),s=n(30988),r=n(92314);const d=e=>{const{action:o}=e;return(0,r.q)(e.action,l.createElement(s.A,{key:o.key,onClick:e.onAction,className:i()("adm-dialog-button",{"adm-dialog-button-bold":o.bold}),fill:"none",shape:"rectangular",block:!0,color:o.danger?"danger":"primary",loading:"auto",disabled:o.disabled},o.text))};var m=n(1556),v=n(95976),u=n(2927);const f={actions:[],closeOnAction:!1,closeOnMaskClick:!1,getContainer:null},y=e=>{const o=(0,a.v)(f,e),n=l.createElement(l.Fragment,null,!!o.image&&l.createElement("div",{className:C("image-container")},l.createElement(m.A,{src:o.image,alt:"dialog header image",width:"100%"})),!!o.header&&l.createElement("div",{className:C("header")},l.createElement(v.A,null,o.header)),!!o.title&&l.createElement("div",{className:C("title")},o.title),l.createElement("div",{className:i()(C("content"),!o.content&&C("content-empty"))},"string"==typeof o.content?l.createElement(v.A,null,o.content):o.content),l.createElement("div",{className:C("footer")},o.actions.map(((e,n)=>{const a=Array.isArray(e)?e:[e];return l.createElement("div",{className:C("action-row"),key:n},a.map(((e,n)=>l.createElement(d,{key:e.key,action:e,onAction:()=>(0,t.sH)(void 0,void 0,void 0,(function*(){var l,t,a;yield Promise.all([null===(l=e.onClick)||void 0===l?void 0:l.call(e),null===(t=o.onAction)||void 0===t?void 0:t.call(o,e,n)]),o.closeOnAction&&(null===(a=o.onClose)||void 0===a||a.call(o))}))}))))}))));return l.createElement(u.A,{className:i()(C(),o.className),style:o.style,afterClose:o.afterClose,afterShow:o.afterShow,onMaskClick:o.closeOnMaskClick?()=>{var e;null===(e=o.onClose)||void 0===e||e.call(o)}:void 0,visible:o.visible,getContainer:o.getContainer,bodyStyle:o.bodyStyle,bodyClassName:i()(C("body"),o.image&&C("with-image"),o.bodyClassName),maskStyle:o.maskStyle,maskClassName:o.maskClassName,stopPropagation:o.stopPropagation,disableBodyScroll:o.disableBodyScroll,destroyOnClose:o.destroyOnClose,forceRender:o.forceRender,role:"dialog","aria-label":o["aria-label"]},n)};function C(e=""){return"adm-dialog"+(e&&"-")+e}var b=n(26769);const g=new Set;function k(e){const o=(0,b.s)(l.createElement(y,Object.assign({},e,{afterClose:()=>{var n;g.delete(o.close),null===(n=e.afterClose)||void 0===n||n.call(e)}})));return g.add(o.close),o}var h=n(54148);const A={confirmText:"确认",cancelText:"取消"};const E=(0,n(44073).b)(y,{show:k,alert:function(e){const o={confirmText:(0,h.Y8)().locale.Dialog.ok},n=(0,a.v)(o,e);return new Promise((e=>{k(Object.assign(Object.assign({},n),{closeOnAction:!0,actions:[{key:"confirm",text:n.confirmText}],onAction:n.onConfirm,onClose:()=>{var o;null===(o=n.onClose)||void 0===o||o.call(n),e()}}))}))},confirm:function(e){const{locale:o}=(0,h.Y8)(),n=(0,a.v)(A,{confirmText:o.common.confirm,cancelText:o.common.cancel},e);return new Promise((e=>{k(Object.assign(Object.assign({},n),{closeOnAction:!0,onClose:()=>{var o;null===(o=n.onClose)||void 0===o||o.call(n),e(!1)},actions:[[{key:"cancel",text:n.cancelText,onClick:()=>(0,t.sH)(this,void 0,void 0,(function*(){var o;yield null===(o=n.onCancel)||void 0===o?void 0:o.call(n),e(!1)}))},{key:"confirm",text:n.confirmText,bold:!0,onClick:()=>(0,t.sH)(this,void 0,void 0,(function*(){var o;yield null===(o=n.onConfirm)||void 0===o?void 0:o.call(n),e(!0)}))}]]}))}))},clear:function(){g.forEach((e=>{e()}))}})}}]);