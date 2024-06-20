"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[4506],{24506:(e,t,n)=>{n.d(t,{A:()=>ct});var r=n(26322),o=n(31934),a=n.n(o),l=n(21410),i=n(48287),s=n(89600),c=n(24985),d=n(36009),u=n(92940),p=n(47931),g=n(93023),m=n(59673),h=n(8062),b=n(41339),f=n(16556),v=n(99742);const $=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:r,lineWidth:o,textPaddingInline:a,orientationMargin:l,verticalMarginInline:i}=e;return{[t]:Object.assign(Object.assign({},(0,b.dF)(e)),{borderBlockStart:`${(0,h.zA)(o)} solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:i,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,h.zA)(o)} solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,h.zA)(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,h.zA)(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,h.zA)(o)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:`calc(${l} * 100%)`},"&::after":{width:`calc(100% - ${l} * 100%)`}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:`calc(100% - ${l} * 100%)`},"&::after":{width:`calc(${l} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:a},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${(0,h.zA)(o)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}},C=(0,f.OF)("Divider",(e=>{const t=(0,v.h1)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[$(t)]}),(e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS})),{unitless:{orientationMargin:!0}});var x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const y=e=>{const{getPrefixCls:t,direction:n,divider:o}=r.useContext(c.QO),{prefixCls:l,type:i="horizontal",orientation:s="center",orientationMargin:d,className:u,rootClassName:p,children:g,dashed:m,plain:h,style:b}=e,f=x(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),v=t("divider",l),[$,y,S]=C(v),O=s.length>0?`-${s}`:s,A=!!g,w="left"===s&&null!=d,E="right"===s&&null!=d,k=a()(v,null==o?void 0:o.className,y,S,`${v}-${i}`,{[`${v}-with-text`]:A,[`${v}-with-text${O}`]:A,[`${v}-dashed`]:!!m,[`${v}-plain`]:!!h,[`${v}-rtl`]:"rtl"===n,[`${v}-no-default-orientation-margin-left`]:w,[`${v}-no-default-orientation-margin-right`]:E},u,p),I=r.useMemo((()=>"number"==typeof d?d:/^\d+$/.test(d)?Number(d):d),[d]),N=Object.assign(Object.assign({},w&&{marginLeft:I}),E&&{marginRight:I});return $(r.createElement("div",Object.assign({className:k,style:Object.assign(Object.assign({},null==o?void 0:o.style),b)},f,{role:"separator"}),g&&"vertical"!==i&&r.createElement("span",{className:`${v}-inner-text`,style:N},g)))};var S=n(75062);const O=r.createContext({}),A=r.createContext({}),{Provider:w}=O,{Provider:E}=A;var k=n(71873),I=n(87113);const N=(e,t)=>(null==e?void 0:e.replace(/[^\w/]/gi,"").slice(0,t?8:6))||"";let P=function(){return(0,I.A)((function e(t){(0,k.A)(this,e),this.cleared=!1,this.metaColor=new S.Q1(t),t||(this.metaColor.setAlpha(0),this.cleared=!0)}),[{key:"toHsb",value:function(){return this.metaColor.toHsb()}},{key:"toHsbString",value:function(){return this.metaColor.toHsbString()}},{key:"toHex",value:function(){return e=this.toHexString(),t=this.metaColor.getAlpha()<1,e?N(e,t):"";var e,t}},{key:"toHexString",value:function(){return 1===this.metaColor.getAlpha()?this.metaColor.toHexString():this.metaColor.toHex8String()}},{key:"toRgb",value:function(){return this.metaColor.toRgb()}},{key:"toRgbString",value:function(){return this.metaColor.toRgbString()}}])}();const z=e=>e instanceof P?e:new P(e),j=e=>Math.round(Number(e||0)),H=e=>j(100*e.toHsb().a),R=(e,t)=>{const n=e.toHsb();return n.a=t||1,z(n)},M=e=>{let{prefixCls:t,value:n,onChange:o}=e;return r.createElement("div",{className:`${t}-clear`,onClick:()=>{if(n&&!n.cleared){const e=n.toHsb();e.a=0;const t=z(e);t.cleared=!0,null==o||o(t)}}})};var B,W=n(87318);!function(e){e.hex="hex",e.rgb="rgb",e.hsb="hsb"}(B||(B={}));var T=n(97930);const F=e=>{let{prefixCls:t,min:n=0,max:o=100,value:l,onChange:i,className:s,formatter:c}=e;const d=`${t}-steppers`,[u,p]=(0,r.useState)(l);return(0,r.useEffect)((()=>{Number.isNaN(l)||p(l)}),[l]),r.createElement(T.A,{className:a()(d,s),min:n,max:o,value:u,formatter:c,size:"small",onChange:e=>{l||p(e||0),null==i||i(e)}})},X=e=>{let{prefixCls:t,value:n,onChange:o}=e;const a=`${t}-alpha-input`,[l,i]=(0,r.useState)(z(n||"#000"));(0,r.useEffect)((()=>{n&&i(n)}),[n]);return r.createElement(F,{value:H(l),prefixCls:t,formatter:e=>`${e}%`,className:a,onChange:e=>{const t=l.toHsb();t.a=(e||0)/100;const r=z(t);n||i(r),null==o||o(r)}})};var L=n(48305);const G=/(^#[\da-f]{6}$)|(^#[\da-f]{8}$)/i,q=e=>G.test(`#${e}`),D=e=>{let{prefixCls:t,value:n,onChange:o}=e;const a=`${t}-hex-input`,[l,i]=(0,r.useState)(null==n?void 0:n.toHex());(0,r.useEffect)((()=>{const e=null==n?void 0:n.toHex();q(e)&&n&&i(N(e))}),[n]);return r.createElement(L.A,{className:a,value:l,prefix:"#",onChange:e=>{const t=e.target.value;i(N(t)),q(N(t,!0))&&(null==o||o(z(t)))},size:"small"})},K=e=>{let{prefixCls:t,value:n,onChange:o}=e;const a=`${t}-hsb-input`,[l,i]=(0,r.useState)(z(n||"#000"));(0,r.useEffect)((()=>{n&&i(n)}),[n]);const s=(e,t)=>{const r=l.toHsb();r[t]="h"===t?e:(e||0)/100;const a=z(r);n||i(a),null==o||o(a)};return r.createElement("div",{className:a},r.createElement(F,{max:360,min:0,value:Number(l.toHsb().h),prefixCls:t,className:a,formatter:e=>j(e||0).toString(),onChange:e=>s(Number(e),"h")}),r.createElement(F,{max:100,min:0,value:100*Number(l.toHsb().s),prefixCls:t,className:a,formatter:e=>`${j(e||0)}%`,onChange:e=>s(Number(e),"s")}),r.createElement(F,{max:100,min:0,value:100*Number(l.toHsb().b),prefixCls:t,className:a,formatter:e=>`${j(e||0)}%`,onChange:e=>s(Number(e),"b")}))},Q=e=>{let{prefixCls:t,value:n,onChange:o}=e;const a=`${t}-rgb-input`,[l,i]=(0,r.useState)(z(n||"#000"));(0,r.useEffect)((()=>{n&&i(n)}),[n]);const s=(e,t)=>{const r=l.toRgb();r[t]=e||0;const a=z(r);n||i(a),null==o||o(a)};return r.createElement("div",{className:a},r.createElement(F,{max:255,min:0,value:Number(l.toRgb().r),prefixCls:t,className:a,onChange:e=>s(Number(e),"r")}),r.createElement(F,{max:255,min:0,value:Number(l.toRgb().g),prefixCls:t,className:a,onChange:e=>s(Number(e),"g")}),r.createElement(F,{max:255,min:0,value:Number(l.toRgb().b),prefixCls:t,className:a,onChange:e=>s(Number(e),"b")}))},V=[B.hex,B.hsb,B.rgb].map((e=>({value:e,label:e.toLocaleUpperCase()}))),_=e=>{const{prefixCls:t,format:n,value:o,disabledAlpha:a,onFormatChange:i,onChange:s}=e,[c,d]=(0,l.A)(B.hex,{value:n,onChange:i}),u=`${t}-input`,p=(0,r.useMemo)((()=>{const e={value:o,prefixCls:t,onChange:s};switch(c){case B.hsb:return r.createElement(K,Object.assign({},e));case B.rgb:return r.createElement(Q,Object.assign({},e));case B.hex:default:return r.createElement(D,Object.assign({},e))}}),[c,t,o,s]);return r.createElement("div",{className:`${u}-container`},r.createElement(W.A,{value:c,variant:"borderless",getPopupContainer:e=>e,popupMatchSelectWidth:68,placement:"bottomRight",onChange:e=>{d(e)},className:`${t}-format-select`,size:"small",options:V}),r.createElement("div",{className:u},p),!a&&r.createElement(X,{prefixCls:t,value:o,onChange:s}))};var U=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Y=()=>{const e=(0,r.useContext)(O),{prefixCls:t,allowClear:n,value:o,disabledAlpha:a,onChange:l,onClear:i,onChangeComplete:s}=e,c=U(e,["prefixCls","allowClear","value","disabledAlpha","onChange","onClear","onChangeComplete"]);return r.createElement(r.Fragment,null,n&&r.createElement(M,Object.assign({prefixCls:t,value:o,onChange:e=>{null==l||l(e),null==i||i()}},c)),r.createElement(S.Ay,{prefixCls:t,value:null==o?void 0:o.toHsb(),disabledAlpha:a,onChange:(e,t)=>{null==l||l(z(e),t,!0)},onChangeComplete:e=>{null==s||s(z(e))}}),r.createElement(_,Object.assign({value:o,onChange:l,prefixCls:t,disabledAlpha:a},c)))};var Z=n(68370),J=n(71860),ee=n(41944),te=n(42804),ne=n(52888),re=n(50987),oe=n(96308),ae=n(58449),le=n(72080),ie=n(20527),se=n(67747),ce=n(59898),de=r.forwardRef((function(e,t){var n=e.prefixCls,o=e.forceRender,l=e.className,i=e.style,s=e.children,c=e.isActive,d=e.role,u=r.useState(c||o),p=(0,te.A)(u,2),g=p[0],m=p[1];return r.useEffect((function(){(o||c)&&m(!0)}),[o,c]),g?r.createElement("div",{ref:t,className:a()("".concat(n,"-content"),(0,ie.A)((0,ie.A)({},"".concat(n,"-content-active"),c),"".concat(n,"-content-inactive"),!c),l),style:i,role:d},r.createElement("div",{className:"".concat(n,"-content-box")},s)):null}));de.displayName="PanelContent";const ue=de;var pe=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"];const ge=r.forwardRef((function(e,t){var n=e.showArrow,o=void 0===n||n,l=e.headerClass,i=e.isActive,s=e.onItemClick,c=e.forceRender,d=e.className,u=e.prefixCls,p=e.collapsible,g=e.accordion,m=e.panelKey,h=e.extra,b=e.header,f=e.expandIcon,v=e.openMotion,$=e.destroyInactivePanel,C=e.children,x=(0,ae.A)(e,pe),y="disabled"===p,S="header"===p,O="icon"===p,A=null!=h&&"boolean"!=typeof h,w=function(){null==s||s(m)},E="function"==typeof f?f(e):r.createElement("i",{className:"arrow"});E&&(E=r.createElement("div",{className:"".concat(u,"-expand-icon"),onClick:["header","icon"].includes(p)?w:void 0},E));var k=a()((0,ie.A)((0,ie.A)((0,ie.A)({},"".concat(u,"-item"),!0),"".concat(u,"-item-active"),i),"".concat(u,"-item-disabled"),y),d),I={className:a()(l,(0,ie.A)((0,ie.A)((0,ie.A)({},"".concat(u,"-header"),!0),"".concat(u,"-header-collapsible-only"),S),"".concat(u,"-icon-collapsible-only"),O)),"aria-expanded":i,"aria-disabled":y,onKeyDown:function(e){"Enter"!==e.key&&e.keyCode!==ce.A.ENTER&&e.which!==ce.A.ENTER||w()}};return S||O||(I.onClick=w,I.role=g?"tab":"button",I.tabIndex=y?-1:0),r.createElement("div",(0,J.A)({},x,{ref:t,className:k}),r.createElement("div",I,o&&E,r.createElement("span",{className:"".concat(u,"-header-text"),onClick:"header"===p?w:void 0},b),A&&r.createElement("div",{className:"".concat(u,"-extra")},h)),r.createElement(se.Ay,(0,J.A)({visible:i,leavedClassName:"".concat(u,"-content-hidden")},v,{forceRender:c,removeOnLeave:$}),(function(e,t){var n=e.className,o=e.style;return r.createElement(ue,{ref:t,prefixCls:u,className:n,style:o,isActive:i,forceRender:c,role:g?"tabpanel":void 0},C)})))}));var me=["children","label","key","collapsible","onItemClick","destroyInactivePanel"];const he=function(e,t,n){return Array.isArray(e)?function(e,t){var n=t.prefixCls,o=t.accordion,a=t.collapsible,l=t.destroyInactivePanel,i=t.onItemClick,s=t.activeKey,c=t.openMotion,d=t.expandIcon;return e.map((function(e,t){var u=e.children,p=e.label,g=e.key,m=e.collapsible,h=e.onItemClick,b=e.destroyInactivePanel,f=(0,ae.A)(e,me),v=String(null!=g?g:t),$=null!=m?m:a,C=null!=b?b:l,x=!1;return x=o?s[0]===v:s.indexOf(v)>-1,r.createElement(ge,(0,J.A)({},f,{prefixCls:n,key:v,panelKey:v,isActive:x,accordion:o,openMotion:c,expandIcon:d,header:p,collapsible:$,onItemClick:function(e){"disabled"!==$&&(i(e),null==h||h(e))},destroyInactivePanel:C}),u)}))}(e,n):(0,le.A)(t).map((function(e,t){return function(e,t,n){if(!e)return null;var o=n.prefixCls,a=n.accordion,l=n.collapsible,i=n.destroyInactivePanel,s=n.onItemClick,c=n.activeKey,d=n.openMotion,u=n.expandIcon,p=e.key||String(t),g=e.props,m=g.header,h=g.headerClass,b=g.destroyInactivePanel,f=g.collapsible,v=g.onItemClick,$=!1;$=a?c[0]===p:c.indexOf(p)>-1;var C=null!=f?f:l,x={key:p,panelKey:p,header:m,headerClass:h,isActive:$,prefixCls:o,destroyInactivePanel:null!=b?b:i,openMotion:d,accordion:a,children:e.props.children,onItemClick:function(e){"disabled"!==C&&(s(e),null==v||v(e))},expandIcon:u,collapsible:C};return"string"==typeof e.type?e:(Object.keys(x).forEach((function(e){void 0===x[e]&&delete x[e]})),r.cloneElement(e,x))}(e,t,n)}))};var be=n(37311);function fe(e){var t=e;if(!Array.isArray(t)){var n=(0,ne.A)(t);t="number"===n||"string"===n?[t]:[]}return t.map((function(e){return String(e)}))}var ve=r.forwardRef((function(e,t){var n=e.prefixCls,o=void 0===n?"rc-collapse":n,l=e.destroyInactivePanel,i=void 0!==l&&l,s=e.style,c=e.accordion,d=e.className,u=e.children,p=e.collapsible,g=e.openMotion,m=e.expandIcon,h=e.activeKey,b=e.defaultActiveKey,f=e.onChange,v=e.items,$=a()(o,d),C=(0,re.A)([],{value:h,onChange:function(e){return null==f?void 0:f(e)},defaultValue:b,postState:fe}),x=(0,te.A)(C,2),y=x[0],S=x[1];(0,oe.Ay)(!u,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var O=he(v,u,{prefixCls:o,accordion:c,openMotion:g,expandIcon:m,collapsible:p,destroyInactivePanel:i,onItemClick:function(e){return S((function(){return c?y[0]===e?[]:[e]:y.indexOf(e)>-1?y.filter((function(t){return t!==e})):[].concat((0,ee.A)(y),[e])}))},activeKey:y});return r.createElement("div",(0,J.A)({ref:t,className:$,style:s,role:c?"tablist":void 0},(0,be.A)(e,{aria:!0,data:!0})),O)}));const $e=Object.assign(ve,{Panel:ge}),Ce=$e;$e.Panel;var xe=n(22593),ye=n(72762),Se=n(22137),Oe=n(38400);const Ae=r.forwardRef(((e,t)=>{const{getPrefixCls:n}=r.useContext(c.QO),{prefixCls:o,className:l,showArrow:i=!0}=e,s=n("collapse",o),d=a()({[`${s}-no-arrow`]:!i},l);return r.createElement(Ce.Panel,Object.assign({ref:t},e,{prefixCls:s,className:d}))}));var we=n(97347);const Ee=e=>{const{componentCls:t,contentBg:n,padding:r,headerBg:o,headerPadding:a,collapseHeaderPaddingSM:l,collapseHeaderPaddingLG:i,collapsePanelBorderRadius:s,lineWidth:c,lineType:d,colorBorder:u,colorText:p,colorTextHeading:g,colorTextDisabled:m,fontSizeLG:f,lineHeight:v,lineHeightLG:$,marginSM:C,paddingSM:x,paddingLG:y,paddingXS:S,motionDurationSlow:O,fontSizeIcon:A,contentPadding:w,fontHeight:E,fontHeightLG:k}=e,I=`${(0,h.zA)(c)} ${d} ${u}`;return{[t]:Object.assign(Object.assign({},(0,b.dF)(e)),{backgroundColor:o,border:I,borderRadius:s,"&-rtl":{direction:"rtl"},[`& > ${t}-item`]:{borderBottom:I,"&:last-child":{[`\n            &,\n            & > ${t}-header`]:{borderRadius:`0 0 ${(0,h.zA)(s)} ${(0,h.zA)(s)}`}},[`> ${t}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:a,color:g,lineHeight:v,cursor:"pointer",transition:`all ${O}, visibility 0s`,[`> ${t}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${t}-expand-icon`]:{height:E,display:"flex",alignItems:"center",paddingInlineEnd:C},[`${t}-arrow`]:Object.assign(Object.assign({},(0,b.Nk)()),{fontSize:A,transition:`transform ${O}`,svg:{transition:`transform ${O}`}}),[`${t}-header-text`]:{marginInlineEnd:"auto"}},[`${t}-icon-collapsible-only`]:{cursor:"unset",[`${t}-expand-icon`]:{cursor:"pointer"}}},[`${t}-content`]:{color:p,backgroundColor:n,borderTop:I,[`& > ${t}-content-box`]:{padding:w},"&-hidden":{display:"none"}},"&-small":{[`> ${t}-item`]:{[`> ${t}-header`]:{padding:l,paddingInlineStart:S,[`> ${t}-expand-icon`]:{marginInlineStart:e.calc(x).sub(S).equal()}},[`> ${t}-content > ${t}-content-box`]:{padding:x}}},"&-large":{[`> ${t}-item`]:{fontSize:f,lineHeight:$,[`> ${t}-header`]:{padding:i,paddingInlineStart:r,[`> ${t}-expand-icon`]:{height:k,marginInlineStart:e.calc(y).sub(r).equal()}},[`> ${t}-content > ${t}-content-box`]:{padding:y}}},[`${t}-item:last-child`]:{borderBottom:0,[`> ${t}-content`]:{borderRadius:`0 0 ${(0,h.zA)(s)} ${(0,h.zA)(s)}`}},[`& ${t}-item-disabled > ${t}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:m,cursor:"not-allowed"}},[`&${t}-icon-position-end`]:{[`& > ${t}-item`]:{[`> ${t}-header`]:{[`${t}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:C}}}}})}},ke=e=>{const{componentCls:t}=e,n=`> ${t}-item > ${t}-header ${t}-arrow`;return{[`${t}-rtl`]:{[n]:{transform:"rotate(180deg)"}}}},Ie=e=>{const{componentCls:t,headerBg:n,paddingXXS:r,colorBorder:o}=e;return{[`${t}-borderless`]:{backgroundColor:n,border:0,[`> ${t}-item`]:{borderBottom:`1px solid ${o}`},[`\n        > ${t}-item:last-child,\n        > ${t}-item:last-child ${t}-header\n      `]:{borderRadius:0},[`> ${t}-item:last-child`]:{borderBottom:0},[`> ${t}-item > ${t}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${t}-item > ${t}-content > ${t}-content-box`]:{paddingTop:r}}}},Ne=e=>{const{componentCls:t,paddingSM:n}=e;return{[`${t}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${t}-item`]:{borderBottom:0,[`> ${t}-content`]:{backgroundColor:"transparent",border:0,[`> ${t}-content-box`]:{paddingBlock:n}}}}}},Pe=(0,f.OF)("Collapse",(e=>{const t=(0,v.h1)(e,{collapseHeaderPaddingSM:`${(0,h.zA)(e.paddingXS)} ${(0,h.zA)(e.paddingSM)}`,collapseHeaderPaddingLG:`${(0,h.zA)(e.padding)} ${(0,h.zA)(e.paddingLG)}`,collapsePanelBorderRadius:e.borderRadiusLG});return[Ee(t),Ie(t),Ne(t),ke(t),(0,we.A)(t)]}),(e=>({headerPadding:`${e.paddingSM}px ${e.padding}px`,headerBg:e.colorFillAlter,contentPadding:`${e.padding}px 16px`,contentBg:e.colorBgContainer}))),ze=r.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:o,collapse:l}=r.useContext(c.QO),{prefixCls:i,className:s,rootClassName:d,style:u,bordered:g=!0,ghost:m,size:h,expandIconPosition:b="start",children:f,expandIcon:v}=e,$=(0,p.A)((e=>{var t;return null!==(t=null!=h?h:e)&&void 0!==t?t:"middle"})),C=n("collapse",i),x=n(),[y,S,O]=Pe(C);const A=r.useMemo((()=>"left"===b?"start":"right"===b?"end":b),[b]),w=null!=v?v:null==l?void 0:l.expandIcon,E=r.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t="function"==typeof w?w(e):r.createElement(Z.A,{rotate:e.isActive?90:void 0});return(0,Oe.Ob)(t,(()=>{var e;return{className:a()(null===(e=null==t?void 0:t.props)||void 0===e?void 0:e.className,`${C}-arrow`)}}))}),[w,C]),k=a()(`${C}-icon-position-${A}`,{[`${C}-borderless`]:!g,[`${C}-rtl`]:"rtl"===o,[`${C}-ghost`]:!!m,[`${C}-${$}`]:"middle"!==$},null==l?void 0:l.className,s,d,S,O),I=Object.assign(Object.assign({},(0,Se.A)(x)),{motionAppear:!1,leavedClassName:`${C}-content-hidden`}),N=r.useMemo((()=>f?(0,xe.A)(f).map(((e,t)=>{var n,r;if(null===(n=e.props)||void 0===n?void 0:n.disabled){const n=null!==(r=e.key)&&void 0!==r?r:String(t),{disabled:o,collapsible:a}=e.props,l=Object.assign(Object.assign({},(0,ye.A)(e.props,["disabled"])),{key:n,collapsible:null!=a?a:o?"disabled":void 0});return(0,Oe.Ob)(e,l)}return e})):null),[f]);return y(r.createElement(Ce,Object.assign({ref:t,openMotion:I},(0,ye.A)(e,["rootClassName"]),{expandIcon:E,prefixCls:C,className:k,style:Object.assign(Object.assign({},null==l?void 0:l.style),u)}),N))}));const je=Object.assign(ze,{Panel:Ae});var He=n(41485),Re=n(93270);const Me=e=>e.map((e=>(e.colors=e.colors.map(z),e))),Be=(e,t)=>{const{r:n,g:r,b:o,a}=e.toRgb(),l=new S.Q1(e.toRgbString()).onBackground(t).toHsv();return a<=.5?l.v>.5:.299*n+.587*r+.114*o>192},We=e=>{let{label:t}=e;return`panel-${t}`},Te=e=>{let{prefixCls:t,presets:n,value:o,onChange:i}=e;const[s]=(0,He.A)("ColorPicker"),[,c]=(0,Re.Ay)(),[d]=(0,l.A)(Me(n),{value:Me(n),postState:Me}),u=`${t}-presets`,p=(0,r.useMemo)((()=>d.reduce(((e,t)=>{const{defaultOpen:n=!0}=t;return n&&e.push(We(t)),e}),[])),[d]),g=d.map((e=>{var n;return{key:We(e),label:r.createElement("div",{className:`${u}-label`},null==e?void 0:e.label),children:r.createElement("div",{className:`${u}-items`},Array.isArray(null==e?void 0:e.colors)&&(null===(n=e.colors)||void 0===n?void 0:n.length)>0?e.colors.map(((e,n)=>r.createElement(S.ZC,{key:`preset-${n}-${e.toHexString()}`,color:z(e).toRgbString(),prefixCls:t,className:a()(`${u}-color`,{[`${u}-color-checked`]:e.toHexString()===(null==o?void 0:o.toHexString()),[`${u}-color-bright`]:Be(e,c.colorBgElevated)}),onClick:()=>{return t=e,void(null==i||i(t));var t}}))):r.createElement("span",{className:`${u}-empty`},s.presetEmpty))}}));return r.createElement("div",{className:u},r.createElement(je,{defaultActiveKey:p,ghost:!0,items:g}))},Fe=()=>{const{prefixCls:e,value:t,presets:n,onChange:o}=(0,r.useContext)(A);return Array.isArray(n)?r.createElement(Te,{value:t,presets:n,prefixCls:e,onChange:o}):null};var Xe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Le=e=>{const{prefixCls:t,presets:n,panelRender:o,color:a,onChange:l,onClear:i}=e,s=Xe(e,["prefixCls","presets","panelRender","color","onChange","onClear"]),c=`${t}-inner`,d=Object.assign({prefixCls:t,value:a,onChange:l,onClear:i},s),u=r.useMemo((()=>({prefixCls:t,value:a,presets:n,onChange:l})),[t,a,n,l]),p=r.createElement("div",{className:`${c}-content`},r.createElement(Y,null),Array.isArray(n)&&r.createElement(y,null),r.createElement(Fe,null));return r.createElement(w,{value:d},r.createElement(E,{value:u},r.createElement("div",{className:c},"function"==typeof o?o(p,{components:{Picker:Y,Presets:Fe}}):p)))};var Ge=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const qe=(0,r.forwardRef)(((e,t)=>{const{color:n,prefixCls:o,open:l,disabled:i,format:s,className:c,showText:d}=e,u=Ge(e,["color","prefixCls","open","disabled","format","className","showText"]),p=`${o}-trigger`,g=(0,r.useMemo)((()=>n.cleared?r.createElement(M,{prefixCls:o}):r.createElement(S.ZC,{prefixCls:o,color:n.toRgbString()})),[n,o]);return r.createElement("div",Object.assign({ref:t,className:a()(p,c,{[`${p}-active`]:l,[`${p}-disabled`]:i})},u),g,d&&r.createElement("div",{className:`${p}-text`},"function"==typeof d?d(n):d?(()=>{const e=n.toHexString().toUpperCase(),t=H(n);switch(s){case"rgb":return n.toRgbString();case"hsb":return n.toHsbString();default:return t<100?`${e.slice(0,7)},${t}%`:e}})():void 0))})),De={};function Ke(e){return void 0!==e}const Qe=(e,t)=>{const{defaultValue:n,value:o}=t,a=(0,r.useRef)(z("")),[l,i]=(0,r.useState)((()=>{let t;t=Ke(o)?o:Ke(n)?n:e;const r=z(t||"");return a.current=r,r})),s=e=>{i(e),a.current=e},c=(0,r.useRef)(De);return(0,r.useEffect)((()=>{if(c.current===o)return;c.current=o;const e=z(Ke(o)?o||"":a.current);!0===a.current.cleared&&(e.cleared="controlled"),s(e)}),[o]),[l,s,a]},Ve=(e,t)=>({backgroundImage:`conic-gradient(${t} 0 25%, transparent 0 50%, ${t} 0 75%, transparent 0)`,backgroundSize:`${e} ${e}`}),_e=(e,t)=>{const{componentCls:n,borderRadiusSM:r,colorPickerInsetShadow:o,lineWidth:a,colorFillSecondary:l}=e;return{[`${n}-color-block`]:Object.assign(Object.assign({position:"relative",borderRadius:r,width:t,height:t,boxShadow:o},Ve("50%",e.colorFillSecondary)),{[`${n}-color-block-inner`]:{width:"100%",height:"100%",border:`${(0,h.zA)(a)} solid ${l}`,borderRadius:"inherit"}})}},Ue=e=>{const{componentCls:t,antCls:n,fontSizeSM:r,lineHeightSM:o,colorPickerAlphaInputWidth:a,marginXXS:l,paddingXXS:i,controlHeightSM:s,marginXS:c,fontSizeIcon:d,paddingXS:u,colorTextPlaceholder:p,colorPickerInputNumberHandleWidth:g,lineWidth:m}=e;return{[`${t}-input-container`]:{display:"flex",[`${t}-steppers${n}-input-number`]:{fontSize:r,lineHeight:o,[`${n}-input-number-input`]:{paddingInlineStart:i,paddingInlineEnd:0},[`${n}-input-number-handler-wrap`]:{width:g}},[`${t}-steppers${t}-alpha-input`]:{flex:`0 0 ${(0,h.zA)(a)}`,marginInlineStart:l},[`${t}-format-select${n}-select`]:{marginInlineEnd:c,width:"auto","&-single":{[`${n}-select-selector`]:{padding:0,border:0},[`${n}-select-arrow`]:{insetInlineEnd:0},[`${n}-select-selection-item`]:{paddingInlineEnd:e.calc(d).add(l).equal(),fontSize:r,lineHeight:`${(0,h.zA)(s)}`},[`${n}-select-item-option-content`]:{fontSize:r,lineHeight:o},[`${n}-select-dropdown`]:{[`${n}-select-item`]:{minHeight:"auto"}}}},[`${t}-input`]:{gap:l,alignItems:"center",flex:1,width:0,[`${t}-hsb-input,${t}-rgb-input`]:{display:"flex",gap:l,alignItems:"center"},[`${t}-steppers`]:{flex:1},[`${t}-hex-input${n}-input-affix-wrapper`]:{flex:1,padding:`0 ${(0,h.zA)(u)}`,[`${n}-input`]:{fontSize:r,textTransform:"uppercase",lineHeight:(0,h.zA)(e.calc(s).sub(e.calc(m).mul(2)).equal())},[`${n}-input-prefix`]:{color:p}}}}}},Ye=e=>{const{componentCls:t,controlHeightLG:n,borderRadiusSM:r,colorPickerInsetShadow:o,marginSM:a,colorBgElevated:l,colorFillSecondary:i,lineWidthBold:s,colorPickerHandlerSize:c,colorPickerHandlerSizeSM:d,colorPickerSliderHeight:u}=e;return{[`${t}-select`]:{[`${t}-palette`]:{minHeight:e.calc(n).mul(4).equal(),overflow:"hidden",borderRadius:r},[`${t}-saturation`]:{position:"absolute",borderRadius:"inherit",boxShadow:o,inset:0},marginBottom:a},[`${t}-handler`]:{width:c,height:c,border:`${(0,h.zA)(s)} solid ${l}`,position:"relative",borderRadius:"50%",cursor:"pointer",boxShadow:`${o}, 0 0 0 1px ${i}`,"&-sm":{width:d,height:d}},[`${t}-slider`]:{borderRadius:e.calc(u).div(2).equal(),[`${t}-palette`]:{height:u},[`${t}-gradient`]:{borderRadius:e.calc(u).div(2).equal(),boxShadow:o},"&-alpha":Ve(`${(0,h.zA)(u)}`,e.colorFillSecondary),"&-hue":{marginBottom:a}},[`${t}-slider-container`]:{display:"flex",gap:a,marginBottom:a,[`${t}-slider-group`]:{flex:1,"&-disabled-alpha":{display:"flex",alignItems:"center",[`${t}-slider`]:{flex:1,marginBottom:0}}}}}},Ze=e=>{const{componentCls:t,antCls:n,colorTextQuaternary:r,paddingXXS:o,colorPickerPresetColorSize:a,fontSizeSM:l,colorText:i,lineHeightSM:s,lineWidth:c,borderRadius:d,colorFill:u,colorWhite:p,marginXXS:g,paddingXS:m,fontHeightSM:b}=e;return{[`${t}-presets`]:{[`${n}-collapse-item > ${n}-collapse-header`]:{padding:0,[`${n}-collapse-expand-icon`]:{height:b,color:r,paddingInlineEnd:o}},[`${n}-collapse`]:{display:"flex",flexDirection:"column",gap:g},[`${n}-collapse-item > ${n}-collapse-content > ${n}-collapse-content-box`]:{padding:`${(0,h.zA)(m)} 0`},"&-label":{fontSize:l,color:i,lineHeight:s},"&-items":{display:"flex",flexWrap:"wrap",gap:e.calc(g).mul(1.5).equal(),[`${t}-presets-color`]:{position:"relative",cursor:"pointer",width:a,height:a,"&::before":{content:'""',pointerEvents:"none",width:e.calc(a).add(e.calc(c).mul(4)).equal(),height:e.calc(a).add(e.calc(c).mul(4)).equal(),position:"absolute",top:e.calc(c).mul(-2).equal(),insetInlineStart:e.calc(c).mul(-2).equal(),borderRadius:d,border:`${(0,h.zA)(c)} solid transparent`,transition:`border-color ${e.motionDurationMid} ${e.motionEaseInBack}`},"&:hover::before":{borderColor:u},"&::after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.calc(a).div(13).mul(5).equal(),height:e.calc(a).div(13).mul(8).equal(),border:`${(0,h.zA)(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`},[`&${t}-presets-color-checked`]:{"&::after":{opacity:1,borderColor:p,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`transform ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`},[`&${t}-presets-color-bright`]:{"&::after":{borderColor:"rgba(0, 0, 0, 0.45)"}}}}},"&-empty":{fontSize:l,color:r}}}},Je=(e,t,n)=>({borderInlineEndWidth:e.lineWidth,borderColor:t,boxShadow:`0 0 0 ${(0,h.zA)(e.controlOutlineWidth)} ${n}`,outline:0}),et=e=>{const{componentCls:t}=e;return{"&-rtl":{[`${t}-presets-color`]:{"&::after":{direction:"ltr"}},[`${t}-clear`]:{"&::after":{direction:"ltr"}}}}},tt=(e,t,n)=>{const{componentCls:r,borderRadiusSM:o,lineWidth:a,colorSplit:l,colorBorder:i,red6:s}=e;return{[`${r}-clear`]:Object.assign(Object.assign({width:t,height:t,borderRadius:o,border:`${(0,h.zA)(a)} solid ${l}`,position:"relative",overflow:"hidden",cursor:"pointer",transition:`all ${e.motionDurationFast}`},n),{"&::after":{content:'""',position:"absolute",insetInlineEnd:a,top:0,display:"block",width:40,height:2,transformOrigin:"right",transform:"rotate(-45deg)",backgroundColor:s},"&:hover":{borderColor:i}})}},nt=e=>{const{componentCls:t,colorError:n,colorWarning:r,colorErrorHover:o,colorWarningHover:a,colorErrorOutline:l,colorWarningOutline:i}=e;return{[`&${t}-status-error`]:{borderColor:n,"&:hover":{borderColor:o},[`&${t}-trigger-active`]:Object.assign({},Je(e,n,l))},[`&${t}-status-warning`]:{borderColor:r,"&:hover":{borderColor:a},[`&${t}-trigger-active`]:Object.assign({},Je(e,r,i))}}},rt=e=>{const{componentCls:t,controlHeightLG:n,controlHeightSM:r,controlHeight:o,controlHeightXS:a,borderRadius:l,borderRadiusSM:i,borderRadiusXS:s,borderRadiusLG:c,fontSizeLG:d}=e;return{[`&${t}-lg`]:{minWidth:n,height:n,borderRadius:c,[`${t}-color-block, ${t}-clear`]:{width:o,height:o,borderRadius:l},[`${t}-trigger-text`]:{fontSize:d}},[`&${t}-sm`]:{minWidth:r,height:r,borderRadius:i,[`${t}-color-block, ${t}-clear`]:{width:a,height:a,borderRadius:s}}}},ot=e=>{const{antCls:t,componentCls:n,colorPickerWidth:r,colorPrimary:o,motionDurationMid:a,colorBgElevated:l,colorTextDisabled:i,colorText:s,colorBgContainerDisabled:c,borderRadius:d,marginXS:u,marginSM:p,controlHeight:g,controlHeightSM:m,colorBgTextActive:b,colorPickerPresetColorSize:f,colorPickerPreviewSize:v,lineWidth:$,colorBorder:C,paddingXXS:x,fontSize:y,colorPrimaryHover:S,controlOutline:O}=e;return[{[n]:Object.assign({[`${n}-inner`]:Object.assign(Object.assign(Object.assign(Object.assign({"&-content":{display:"flex",flexDirection:"column",width:r,[`& > ${t}-divider`]:{margin:`${(0,h.zA)(p)} 0 ${(0,h.zA)(u)}`}},[`${n}-panel`]:Object.assign({},Ye(e))},_e(e,v)),Ue(e)),Ze(e)),tt(e,f,{marginInlineStart:"auto",marginBottom:u})),"&-trigger":Object.assign(Object.assign(Object.assign(Object.assign({minWidth:g,height:g,borderRadius:d,border:`${(0,h.zA)($)} solid ${C}`,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",transition:`all ${a}`,background:l,padding:e.calc(x).sub($).equal(),[`${n}-trigger-text`]:{marginInlineStart:u,marginInlineEnd:e.calc(u).sub(e.calc(x).sub($)).equal(),fontSize:y,color:s},"&:hover":{borderColor:S},[`&${n}-trigger-active`]:Object.assign({},Je(e,o,O)),"&-disabled":{color:i,background:c,cursor:"not-allowed","&:hover":{borderColor:b},[`${n}-trigger-text`]:{color:i}}},tt(e,m)),_e(e,m)),nt(e)),rt(e))},et(e))}]},at=(0,f.OF)("ColorPicker",(e=>{const{colorTextQuaternary:t,marginSM:n}=e,r=(0,v.h1)(e,{colorPickerWidth:234,colorPickerHandlerSize:16,colorPickerHandlerSizeSM:12,colorPickerAlphaInputWidth:44,colorPickerInputNumberHandleWidth:16,colorPickerPresetColorSize:18,colorPickerInsetShadow:`inset 0 0 1px 0 ${t}`,colorPickerSliderHeight:8,colorPickerPreviewSize:e.calc(8).mul(2).add(n).equal()});return[ot(r)]}));var lt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const it=e=>{const{value:t,defaultValue:n,format:o,defaultFormat:i,allowClear:h=!1,presets:b,children:f,trigger:v="click",open:$,disabled:C,placement:x="bottomLeft",arrow:y=!0,panelRender:S,showText:O,style:A,className:w,size:E,rootClassName:k,prefixCls:I,styles:N,disabledAlpha:P=!1,onFormatChange:j,onChange:M,onClear:B,onOpenChange:W,onChangeComplete:T,getPopupContainer:F,autoAdjustOverflow:X=!0,destroyTooltipOnHide:L}=e,G=lt(e,["value","defaultValue","format","defaultFormat","allowClear","presets","children","trigger","open","disabled","placement","arrow","panelRender","showText","style","className","size","rootClassName","prefixCls","styles","disabledAlpha","onFormatChange","onChange","onClear","onOpenChange","onChangeComplete","getPopupContainer","autoAdjustOverflow","destroyTooltipOnHide"]),{getPrefixCls:q,direction:D,colorPicker:K}=(0,r.useContext)(c.QO),Q=(0,r.useContext)(d.A),V=null!=C?C:Q,[_,U,Y]=Qe("",{value:t,defaultValue:n}),[Z,J]=(0,l.A)(!1,{value:$,postState:e=>!V&&e,onChange:W}),[ee,te]=(0,l.A)(o,{value:o,defaultValue:i,onChange:j}),ne=q("color-picker",I),re=(0,r.useMemo)((()=>H(_)<100),[_]),{status:oe}=r.useContext(g.$W),ae=(0,p.A)(E),le=(0,u.A)(ne),[ie,se,ce]=at(ne,le),de={[`${ne}-rtl`]:D},ue=a()(k,ce,le,de),pe=a()((0,s.L)(ne,oe),{[`${ne}-sm`]:"small"===ae,[`${ne}-lg`]:"large"===ae},null==K?void 0:K.className,ue,w,se),ge=a()(ne,ue),me=(0,r.useRef)(!0);const he=e=>{me.current=!0;let t=z(e);P&&re&&(t=R(e)),null==T||T(t)},be={open:Z,trigger:v,placement:x,arrow:y,rootClassName:k,getPopupContainer:F,autoAdjustOverflow:X,destroyTooltipOnHide:L},fe={prefixCls:ne,color:_,allowClear:h,disabled:V,disabledAlpha:P,presets:b,panelRender:S,format:ee,onFormatChange:te,onChangeComplete:he},ve=Object.assign(Object.assign({},null==K?void 0:K.style),A);return ie(r.createElement(m.A,Object.assign({style:null==N?void 0:N.popup,overlayInnerStyle:null==N?void 0:N.popupOverlayInner,onOpenChange:e=>{me.current&&!V&&J(e)},content:r.createElement(g.XB,{override:!0,status:!0},r.createElement(Le,Object.assign({},fe,{onChange:(e,r,o)=>{var a;let l=z(e);const i=null===t||!t&&null===n;((null===(a=Y.current)||void 0===a?void 0:a.cleared)||i)&&0===H(_)&&"alpha"!==r&&(l=R(l)),P&&re&&(l=R(l)),o?me.current=!1:null==T||T(l),U(l),null==M||M(l,l.toHexString())},onChangeComplete:he,onClear:()=>{null==B||B()}}))),overlayClassName:ge},be),f||r.createElement(qe,Object.assign({open:Z,className:pe,style:ve,prefixCls:ne,disabled:V,showText:O,format:ee},G,{color:_}))))};const st=(0,i.A)(it,"color-picker",(e=>e),(e=>Object.assign(Object.assign({},e),{placement:"bottom",autoAdjustOverflow:!1})));it._InternalPanelDoNotUseOrYouWillBeFired=st;const ct=it}}]);