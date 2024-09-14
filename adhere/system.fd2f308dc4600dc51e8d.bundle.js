"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[3719],{33719:(e,t,n)=>{n.d(t,{A:()=>Oe});var o=n(26322),l=n(63611),r=n(31934),i=n.n(r),a=n(36810),c=n(22593),s=n(96244),u=n(21410),d=n(72762),p=n(92858),m=n(72047),f=function(e){if((0,m.A)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1};function g(e,t){return Array.isArray(e)||void 0===t?f(e):function(e,t){if(!f(e))return!1;var n=document.createElement("div"),o=n.style[e];return n.style[e]=t,n.style[e]!==o}(e,t)}var b=n(80041),y=n(24985),v=n(41485),h=n(71103),O=n(53109),x=n(13973),E=n(38400),S=n(99294),j=n(95976),w=n(42824),k=n(11057),C=n(76940);const A=e=>{const t={};return[1,2,3,4,5].forEach((n=>{t[`\n      h${n}&,\n      div&-h${n},\n      div&-h${n} > textarea,\n      h${n}\n    `]=((e,t,n,o)=>{const{titleMarginBottom:l,fontWeightStrong:r}=o;return{marginBottom:l,color:n,fontWeight:r,fontSize:e,lineHeight:t}})(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)})),t},$=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},(0,j.Y)(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},R=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:k.bK[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),I=e=>{const{componentCls:t,paddingSM:n}=e,o=n;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(o).mul(-1).equal(),marginBottom:`calc(1em - ${(0,C.zA)(o)})`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},T=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),P=e=>{const{componentCls:t,titleMarginTop:n}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},A(e)),{[`\n      & + h1${t},\n      & + h2${t},\n      & + h3${t},\n      & + h4${t},\n      & + h5${t}\n      `]:{marginTop:n},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:n}}}),R(e)),$(e)),{[`\n        ${t}-expand,\n        ${t}-collapse,\n        ${t}-edit,\n        ${t}-copy\n      `]:Object.assign(Object.assign({},(0,j.Y)(e)),{marginInlineStart:e.marginXXS})}),I(e)),T(e)),{"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-ellipsis-single-line":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),{"&-rtl":{direction:"rtl"}})}},M=(0,w.OF)("Typography",(e=>[P(e)]),(()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}))),B=e=>{const{prefixCls:t,"aria-label":n,className:l,style:r,direction:a,maxLength:c,autoSize:s=!0,value:u,onSave:d,onCancel:p,onEnd:m,component:f,enterIcon:g=o.createElement(O.A,null)}=e,b=o.useRef(null),y=o.useRef(!1),v=o.useRef(),[h,j]=o.useState(u);o.useEffect((()=>{j(u)}),[u]),o.useEffect((()=>{var e;if(null===(e=b.current)||void 0===e?void 0:e.resizableTextArea){const{textArea:e}=b.current.resizableTextArea;e.focus();const{length:t}=e.value;e.setSelectionRange(t,t)}}),[]);const w=()=>{d(h.trim())},[k,C,A]=M(t),$=i()(t,`${t}-edit-content`,{[`${t}-rtl`]:"rtl"===a,[`${t}-${f}`]:!!f},l,C,A);return k(o.createElement("div",{className:$,style:r},o.createElement(S.A,{ref:b,maxLength:c,value:h,onChange:e=>{let{target:t}=e;j(t.value.replace(/[\n\r]/g,""))},onKeyDown:e=>{let{keyCode:t}=e;y.current||(v.current=t)},onKeyUp:e=>{let{keyCode:t,ctrlKey:n,altKey:o,metaKey:l,shiftKey:r}=e;v.current!==t||y.current||n||o||l||r||(t===x.A.ENTER?(w(),null==m||m()):t===x.A.ESC&&p())},onCompositionStart:()=>{y.current=!0},onCompositionEnd:()=>{y.current=!1},onBlur:()=>{w()},"aria-label":n,rows:1,autoSize:s}),null!==g?(0,E.Ob)(g,{className:`${t}-edit-content-confirm`}):null))};var H=n(91887),W=n.n(H),z=n(59135),D=function(e,t,n,o){return new(n||(n=Promise))((function(l,r){function i(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};const N=e=>{let{copyConfig:t,children:n}=e;const[l,r]=o.useState(!1),[i,a]=o.useState(!1),c=o.useRef(null),s=()=>{c.current&&clearTimeout(c.current)},u={};t.format&&(u.format=t.format),o.useEffect((()=>s),[]);return{copied:l,copyLoading:i,onClick:(0,z._q)((e=>D(void 0,void 0,void 0,(function*(){var o;null==e||e.preventDefault(),null==e||e.stopPropagation(),a(!0);try{const l="function"==typeof t.text?yield t.text():t.text;W()(l||String(n)||"",u),a(!1),r(!0),s(),c.current=setTimeout((()=>{r(!1)}),3e3),null===(o=t.onCopy)||void 0===o||o.call(t,e)}catch(e){throw a(!1),e}}))))}};function L(e,t){return o.useMemo((()=>{const n=!!e;return[n,Object.assign(Object.assign({},t),n&&"object"==typeof e?e:null)]}),[e])}const F=e=>{const t=(0,o.useRef)();return(0,o.useEffect)((()=>{t.current=e})),t.current},K=(e,t,n)=>(0,o.useMemo)((()=>!0===e?{title:null!=t?t:n}:(0,o.isValidElement)(e)?{title:e}:"object"==typeof e?Object.assign({title:null!=t?t:n},e):{title:e}),[e,t,n]);var q=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n};const _=o.forwardRef(((e,t)=>{const{prefixCls:n,component:l="article",className:r,rootClassName:a,setContentRef:c,children:s,direction:u,style:d}=e,m=q(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:f,direction:g,typography:b}=o.useContext(y.QO),v=null!=u?u:g,h=c?(0,p.K4)(t,c):t,O=f("typography",n);const[x,E,S]=M(O),j=i()(O,null==b?void 0:b.className,{[`${O}-rtl`]:"rtl"===v},r,a,E,S),w=Object.assign(Object.assign({},null==b?void 0:b.style),d);return x(o.createElement(l,Object.assign({className:j,style:w,ref:h},m),s))}));const X=_;var Q=n(61397),Y=n(55376),U=n(70821);function V(e){return!1===e?[!1,!1]:Array.isArray(e)?e:[e]}function G(e,t,n){return!0===e||void 0===e?t:e||n&&t}const J=e=>["string","number"].includes(typeof e),Z=e=>{let{prefixCls:t,copied:n,locale:l,iconOnly:r,tooltips:a,icon:c,tabIndex:s,onCopy:u,loading:d}=e;const p=V(a),m=V(c),{copied:f,copy:g}=null!=l?l:{},y=n?f:g,v=G(p[n?1:0],y),O="string"==typeof v?v:y;return o.createElement(h.A,{title:v},o.createElement(b.A,{className:i()(`${t}-copy`,{[`${t}-copy-success`]:n,[`${t}-copy-icon-only`]:r}),onClick:u,"aria-label":O,tabIndex:s},n?G(m[1],o.createElement(Q.A,null),!0):G(m[0],d?o.createElement(U.A,null):o.createElement(Y.A,null),!0)))};var ee=n(47507);const te=o.forwardRef(((e,t)=>{let{style:n,children:l}=e;const r=o.useRef(null);return o.useImperativeHandle(t,(()=>({isExceed:()=>{const e=r.current;return e.scrollHeight>e.clientHeight},getHeight:()=>r.current.clientHeight}))),o.createElement("span",{"aria-hidden":!0,ref:r,style:Object.assign({position:"fixed",display:"block",left:0,top:0,pointerEvents:"none",backgroundColor:"rgba(255, 0, 0, 0.65)"},n)},l)}));function ne(e,t){let n=0;const o=[];for(let l=0;l<e.length;l+=1){if(n===t)return o;const r=e[l],i=n+(J(r)?String(r).length:1);if(i>t){const e=t-n;return o.push(String(r).slice(0,e)),o}o.push(r),n=i}return e}const oe=0,le=4,re={display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical"};function ie(e){const{enableMeasure:t,width:n,text:l,children:r,rows:i,expanded:a,miscDeps:u,onEllipsis:d}=e,p=o.useMemo((()=>(0,c.A)(l)),[l]),m=o.useMemo((()=>(e=>e.reduce(((e,t)=>e+(J(t)?String(t).length:1)),0))(p)),[l]),f=o.useMemo((()=>r(p,!1)),[l]),[g,b]=o.useState(null),y=o.useRef(null),v=o.useRef(null),h=o.useRef(null),O=o.useRef(null),x=o.useRef(null),[E,S]=o.useState(!1),[j,w]=o.useState(oe),[k,C]=o.useState(0),[A,$]=o.useState(null);(0,s.A)((()=>{w(t&&n&&m?1:oe)}),[n,l,i,t,p]),(0,s.A)((()=>{var e,t,n,o;if(1===j){w(2);const e=v.current&&getComputedStyle(v.current).whiteSpace;$(e)}else if(2===j){const l=!!(null===(e=h.current)||void 0===e?void 0:e.isExceed());w(l?3:le),b(l?[0,m]:null),S(l);const r=(null===(t=h.current)||void 0===t?void 0:t.getHeight())||0,a=1===i?0:(null===(n=O.current)||void 0===n?void 0:n.getHeight())||0,c=(null===(o=x.current)||void 0===o?void 0:o.getHeight())||0,s=Math.max(r,a+c);C(s+1),d(l)}}),[j]);const R=g?Math.ceil((g[0]+g[1])/2):0;(0,s.A)((()=>{var e;const[t,n]=g||[0,0];if(t!==n){const o=((null===(e=y.current)||void 0===e?void 0:e.getHeight())||0)>k;let l=R;n-t==1&&(l=o?t:n),b(o?[t,l]:[l,n])}}),[g,R]);const I=o.useMemo((()=>{if(!t)return r(p,!1);if(3!==j||!g||g[0]!==g[1]){const e=r(p,!1);return[le,oe].includes(j)?e:o.createElement("span",{style:Object.assign(Object.assign({},re),{WebkitLineClamp:i})},e)}return r(a?p:ne(p,g[0]),E)}),[a,j,g,p].concat((0,ee.A)(u))),T={width:n,margin:0,padding:0,whiteSpace:"nowrap"===A?"normal":"inherit"};return o.createElement(o.Fragment,null,I,2===j&&o.createElement(o.Fragment,null,o.createElement(te,{style:Object.assign(Object.assign(Object.assign({},T),re),{WebkitLineClamp:i}),ref:h},f),o.createElement(te,{style:Object.assign(Object.assign(Object.assign({},T),re),{WebkitLineClamp:i-1}),ref:O},f),o.createElement(te,{style:Object.assign(Object.assign(Object.assign({},T),re),{WebkitLineClamp:1}),ref:x},r([],!0))),3===j&&g&&g[0]!==g[1]&&o.createElement(te,{style:Object.assign(Object.assign({},T),{top:400}),ref:y},r(ne(p,R),!0)),1===j&&o.createElement("span",{style:{whiteSpace:"inherit"},ref:v}))}const ae=e=>{let{enableEllipsis:t,isEllipsis:n,children:l,tooltipProps:r}=e;return(null==r?void 0:r.title)&&t?o.createElement(h.A,Object.assign({open:!!n&&void 0},r),l):l};var ce=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n};const se=o.forwardRef(((e,t)=>{var n;const{prefixCls:r,className:m,style:f,type:O,disabled:x,children:E,ellipsis:S,editable:j,copyable:w,component:k,title:C}=e,A=ce(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:$,direction:R}=o.useContext(y.QO),[I]=(0,v.A)("Text"),T=o.useRef(null),P=o.useRef(null),M=$("typography",r),H=(0,d.A)(A,["mark","code","delete","underline","strong","keyboard","italic"]),[W,z]=L(j),[D,q]=(0,u.A)(!1,{value:z.editing}),{triggerType:_=["icon"]}=z,Q=e=>{var t;e&&(null===(t=z.onStart)||void 0===t||t.call(z)),q(e)},Y=F(D);(0,s.A)((()=>{var e;!D&&Y&&(null===(e=P.current)||void 0===e||e.focus())}),[D]);const U=e=>{null==e||e.preventDefault(),Q(!0)},V=e=>{var t;null===(t=z.onChange)||void 0===t||t.call(z,e),Q(!1)},G=()=>{var e;null===(e=z.onCancel)||void 0===e||e.call(z),Q(!1)},[ee,te]=L(w),{copied:ne,copyLoading:oe,onClick:le}=N({copyConfig:te,children:E}),[re,se]=o.useState(!1),[ue,de]=o.useState(!1),[pe,me]=o.useState(!1),[fe,ge]=o.useState(!1),[be,ye]=o.useState(!0),[ve,he]=L(S,{expandable:!1,symbol:e=>e?null==I?void 0:I.collapse:null==I?void 0:I.expand}),[Oe,xe]=(0,u.A)(he.defaultExpanded||!1,{value:he.expanded}),Ee=ve&&(!Oe||"collapsible"===he.expandable),{rows:Se=1}=he,je=o.useMemo((()=>Ee&&(void 0!==he.suffix||he.onEllipsis||he.expandable||W||ee)),[Ee,he,W,ee]);(0,s.A)((()=>{ve&&!je&&(se(g("webkitLineClamp")),de(g("textOverflow")))}),[je,ve]);const[we,ke]=o.useState(Ee),Ce=o.useMemo((()=>!je&&(1===Se?ue:re)),[je,ue,re]);(0,s.A)((()=>{ke(Ce&&Ee)}),[Ce,Ee]);const Ae=Ee&&(we?fe:pe),$e=Ee&&1===Se&&we,Re=Ee&&Se>1&&we,[Ie,Te]=o.useState(0),Pe=e=>{var t;me(e),pe!==e&&(null===(t=he.onEllipsis)||void 0===t||t.call(he,e))};o.useEffect((()=>{const e=T.current;if(ve&&we&&e){const t=function(e){const t=document.createElement("em");e.appendChild(t);const n=e.getBoundingClientRect(),o=t.getBoundingClientRect();return e.removeChild(t),n.left>o.left||o.right>n.right||n.top>o.top||o.bottom>n.bottom}(e);fe!==t&&ge(t)}}),[ve,we,E,Re,be,Ie]),o.useEffect((()=>{const e=T.current;if("undefined"==typeof IntersectionObserver||!e||!we||!Ee)return;const t=new IntersectionObserver((()=>{ye(!!e.offsetParent)}));return t.observe(e),()=>{t.disconnect()}}),[we,Ee]);const Me=K(he.tooltip,z.text,E),Be=o.useMemo((()=>{if(ve&&!we)return[z.text,E,C,Me.title].find(J)}),[ve,we,C,Me.title,Ae]);if(D)return o.createElement(B,{value:null!==(n=z.text)&&void 0!==n?n:"string"==typeof E?E:"",onSave:V,onCancel:G,onEnd:z.onEnd,prefixCls:M,className:m,style:f,direction:R,component:k,maxLength:z.maxLength,autoSize:z.autoSize,enterIcon:z.enterIcon});const He=()=>{const{expandable:e,symbol:t}=he;return e?o.createElement(b.A,{key:"expand",className:`${M}-${Oe?"collapse":"expand"}`,onClick:e=>((e,t)=>{var n;xe(t.expanded),null===(n=he.onExpand)||void 0===n||n.call(he,e,t)})(e,{expanded:!Oe}),"aria-label":Oe?I.collapse:null==I?void 0:I.expand},"function"==typeof t?t(Oe):t):null},We=()=>{if(!W)return;const{icon:e,tooltip:t,tabIndex:n}=z,r=(0,c.A)(t)[0]||(null==I?void 0:I.edit),i="string"==typeof r?r:"";return _.includes("icon")?o.createElement(h.A,{key:"edit",title:!1===t?"":r},o.createElement(b.A,{ref:P,className:`${M}-edit`,onClick:U,"aria-label":i,tabIndex:n},e||o.createElement(l.A,{role:"button"}))):null},ze=e=>[e&&He(),We(),ee?o.createElement(Z,Object.assign({key:"copy"},te,{prefixCls:M,copied:ne,locale:I,onCopy:le,loading:oe,iconOnly:null==E})):null];return o.createElement(a.A,{onResize:e=>{let{offsetWidth:t}=e;Te(t)},disabled:!Ee},(n=>o.createElement(ae,{tooltipProps:Me,enableEllipsis:Ee,isEllipsis:Ae},o.createElement(X,Object.assign({className:i()({[`${M}-${O}`]:O,[`${M}-disabled`]:x,[`${M}-ellipsis`]:ve,[`${M}-ellipsis-single-line`]:$e,[`${M}-ellipsis-multiple-line`]:Re},m),prefixCls:r,style:Object.assign(Object.assign({},f),{WebkitLineClamp:Re?Se:void 0}),component:k,ref:(0,p.K4)(n,T,t),direction:R,onClick:_.includes("text")?U:void 0,"aria-label":null==Be?void 0:Be.toString(),title:C},H),o.createElement(ie,{enableMeasure:Ee&&!we,text:E,rows:Se,width:Ie,onEllipsis:Pe,expanded:Oe,miscDeps:[ne,Oe,oe,W,ee]},((t,n)=>function(e,t){let{mark:n,code:l,underline:r,delete:i,strong:a,keyboard:c,italic:s}=e,u=t;function d(e,t){t&&(u=o.createElement(e,{},u))}return d("strong",a),d("u",r),d("del",i),d("code",l),d("mark",n),d("kbd",c),d("i",s),u}(e,o.createElement(o.Fragment,null,t.length>0&&n&&!Oe&&Be?o.createElement("span",{key:"show-content","aria-hidden":!0},t):t,(e=>[e&&!Oe&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),he.suffix,ze(e)])(n)))))))))}));var ue=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n};const de=o.forwardRef(((e,t)=>{var{ellipsis:n,rel:l}=e,r=ue(e,["ellipsis","rel"]);const i=Object.assign(Object.assign({},r),{rel:void 0===l&&"_blank"===r.target?"noopener noreferrer":l});return delete i.navigate,o.createElement(se,Object.assign({},i,{ref:t,ellipsis:!!n,component:"a"}))})),pe=o.forwardRef(((e,t)=>o.createElement(se,Object.assign({ref:t},e,{component:"div"}))));var me=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n};const fe=(e,t)=>{var{ellipsis:n}=e,l=me(e,["ellipsis"]);const r=o.useMemo((()=>n&&"object"==typeof n?(0,d.A)(n,["expandable","rows"]):n),[n]);return o.createElement(se,Object.assign({ref:t},l,{ellipsis:r,component:"span"}))},ge=o.forwardRef(fe);var be=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n};const ye=[1,2,3,4,5],ve=o.forwardRef(((e,t)=>{const{level:n=1}=e,l=be(e,["level"]);const r=ye.includes(n)?`h${n}`:"h1";return o.createElement(se,Object.assign({ref:t},l,{component:r}))})),he=X;he.Text=ge,he.Link=de,he.Title=ve,he.Paragraph=pe;const Oe=he}}]);