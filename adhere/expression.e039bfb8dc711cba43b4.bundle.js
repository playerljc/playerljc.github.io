"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[3133],{99778:function(e,l,a){a.r(l),a.d(l,{default:function(){return Q}});var n=a(27288),t=a(52056),r=a(14651),i=a(69424),u=a(1821),y=a.n(u),b=a(90171),p=a(62984),o=a(33240),v=a(20725),c=a(12694),s=function(){return(s=Object.assign||function(e){for(var l,a=1,n=arguments.length;a<n;a++)for(var t in l=arguments[a])Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);return e}).apply(this,arguments)},d=function(e,l){var a={};for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a},m=function(e){var l=e.wrapClassName,a=e.wrapStyle,n=e.value;e=d(e,["wrapClassName","wrapStyle","value"]);return b.createElement("div",{className:y()("".concat(D,"-view"),null!=l?l:""),style:null!=a?a:{}},b.createElement(c.Z,s({},e||{},{dangerouslySetInnerHTML:{__html:null!=n?n:""}})))},f=(0,b.memo)(m),h=[{label:"()",value:"()",type:"brackets"},{label:"AND",value:"AND",type:"binary"},{label:"OR",value:"OR",type:"binary"},{label:"NOT",value:"NOT",type:"unary"}],C=o.Z.getCurrentParentElementWithCursor,E=o.Z.getCurrentElementWithCursor,g=o.Z.setCursorToEnd,x=o.Z.setCursorPositionToNode,T=o.Z.setCursorPosition,k=o.Z.getCursorIndex,S=o.Z.getCursorRectByDocument,N=o.Z.isString,w=o.Z.isFunction,P="&nbsp;",q=p.Z.useSetState,D="adhere-ui-expression",V=function(e,l){var a,u=e.className,p=e.style,o=e.editorClassName,c=e.editorStyle,s=e.operatorWrapClassName,d=e.operatorWrapStyle,m=e.quickTipWrapClassName,f=e.quickTipWrapStyle,V=e.textClassName,R=e.operatorClassName,O=e.value,M=e.placeholder,L=e.triggerCharCode,j=e.quickTipProp,H=e.quickTipDataSource,Z=e.disableQuickTip,W=e.operators,I=e.allowClear,Q=e.onChange,A=e.onContinuousTextChange,_=e.onEditorInputEnd,G=e.onEditorBlurEnd,B=e.onEditorKeyDownEnd,F=e.onEditorPasteEnd,K=(e=(0,b.useMemo)((function(){return null!=W?W:h}),[W]),(0,b.useRef)(null)),X=(0,b.useRef)(null),U=(0,b.useRef)(null),$=(0,b.useRef)(null),z=(0,b.useRef)(null),J=(0,b.useRef)(null),Y=(0,b.useRef)(null),ee=(0,b.useRef)(-1),le=(0,b.useRef)(0),ae=(0,b.useRef)(null),ne=(0,b.useRef)(""),te=(0,b.useRef)(!1),re=(a=q(!1))[0],ie=a[1],ue=(a=q(!1))[0],ye=a[1],be=(a=q(!0))[0],pe=a[1],oe=(a=q(!1))[0],ve=a[1],ce=(0,b.useMemo)((function(){return String.fromCharCode(null!=L?L:32)}),[L]);function se(){(me()?Te:ke)()}function de(){var e,l;return"font"===(null==(l=null==(e=null==(e=null==(e=null==X?void 0:X.current)?void 0:e.firstElementChild)?void 0:e.tagName)?void 0:e.toLowerCase)?void 0:l.call(e))?null==(l=null==X?void 0:X.current)?void 0:l.firstElementChild:null==X?void 0:X.current}function me(){var e,l;return""===(null==(l=null==(e=null==(e=de())?void 0:e.innerHTML)?void 0:e.trim)?void 0:l.call(e))}function fe(){var e=de();e&&(e.innerHTML="",Ee(),xe(),Te(),ve(!1))}function he(e,l){var a,n,t,r,i=S();i&&e&&(n=null==(n=K.current)?void 0:n.offsetWidth,t=null==(t=null==K?void 0:K.current)?void 0:t.offsetHeight,r=null==(r=null==(a=K.current)?void 0:a.getBoundingClientRect)?void 0:r.call(a),n)&&t&&K&&e&&r&&(0===(null==i?void 0:i.x)&&0===(null==i?void 0:i.y)?(e.style.left="".concat(r.x+20,"px"),e.style.top="".concat(r.y+t-2,"px")):((null==r?void 0:r.x)+n-(null==i?void 0:i.x)<300?e.style.left="".concat(r.x+n-300-10,"px"):e.style.left="".concat(i.x+10,"px"),e.style.top="".concat(i.y+25,"px"))),null!=l&&l()}function Ce(){he(U.current,(function(){return ie(!0,(function(){}))}))}function Ee(){ie(!1)}function ge(){he($.current,(function(){return ye(!0)}))}function xe(){ye(!1)}function Te(){pe(!0)}function ke(){pe(!1)}function Se(e){var l="",a=(N(V)?l=V:w(V)&&(l=V(e)),document.createElement("span"));return a.className=y()("text",null!=l?l:""),a.innerHTML=e,a}function Ne(e){var l="",a=(N(R)?l=R:w(R)&&(l=R(e)),document.createElement("span"));return a.className=y()("operator",null!=l?l:""),a.setAttribute("contenteditable","false"),a.innerHTML=e,a}function we(e){var l;console.log("Input"),te.current||(Y&&(Y.current=E()),J&&(J.current=C()),ee.current=k(),(me()?Te:ke)(),null!==(e=e.nativeEvent.data)?(l=e,!ae.current||ae.current===Y.current&&le.current+1===ee.current?(le.current=ee.current,ae.current=Y.current,ne.current+=l):(le.current=ee.current,ae.current=Y.current,ne.current=l),Z||null!=A&&A(ne.current)):Z||null!=A&&A(null==(l=null==Y?void 0:Y.current)?void 0:l.textContent),Z||e!==ce&&ge(),e!==ce&&null!=_&&_(e,ne.current),null!=Q&&Q(null==(e=null==X?void 0:X.current)?void 0:e.innerHTML),ve(!me()))}return(0,r.Z)((function(){var e=de();e&&(e.innerHTML=null!=O?O:""),g(e),se()})),(0,i.Z)((function(){se()}),[O]),(0,b.useImperativeHandle)(l,(function(){return{setValue:function(e){var l=de();l&&(l.innerHTML=null!=e?e:""),g(l),se()},getValue:function(){var e;return null==(e=de())?void 0:e.innerHTML},isEditorEmpty:me,showOperators:Ce,hideOperators:Ee,showQuickTip:ge,hideQuickTip:xe,clear:fe}})),b.createElement("div",{ref:K,className:y()(D,null!=u?u:""),style:null!=p?p:{}},b.createElement("div",{ref:X,className:y()("".concat(D,"-editor"),null!=o?o:"",((a={})["".concat(D,"-editor--show-clear")]=!!I,a)),style:null!=c?c:{},contentEditable:"true",onInput:we,onKeyDown:function(e){return e.keyCode===(null!=L?L:32)?(xe(),Ce(),null!=B&&B(e),!1):13===e.keyCode?(Ee(),e.stopPropagation(),e.preventDefault(),null!=B&&B(e),!1):(Ee(),void(null!=B&&B(e)))},onBlur:function(e){e.stopPropagation(),e.preventDefault(),(me()?Te:ke)(),null!=G&&G(e)},onCompositionStart:function(){te.current=!0},onCompositionEnd:function(e){te.current=!1,we(e)},onPaste:function(e){e.preventDefault(),null!=F&&F(e)}}),!!I&&oe&&b.createElement("div",{className:"".concat(D,"-editor-clear")},b.createElement(t.Z,{rev:null,onClick:function(){var e;fe(),null!=(e=de())&&e.focus()}})),b.createElement("div",{className:y()("".concat(D,"-editor-placeholder"),((l={})["".concat(D,"-editor-placeholder--show")]=be,l)),ref:z},null!=M?M:v.ZP.v("请输入关键词")),b.createElement("div",{ref:U,className:y()("".concat(D,"-operators"),null!=s?s:"",((u={})["".concat(D,"-operators--show")]=re,u)),style:null!=d?d:{}},b.createElement("div",{className:y()("".concat(D,"-operators-header"))},b.createElement("i",{onClick:Ee},b.createElement(t.Z,{rev:null}))),b.createElement("ul",{className:y()("".concat(D,"-operators-main"))},e.map((function(e){var l=e.label,a=e.value,n=e.type;return b.createElement("li",{key:a,onClick:function(){var e,l,t,r,i,u,y,b,p,o;l=n,(e=a)&&(t=de(),"brackets"===l?(l=e[0],u=e[1],/^&#\d+;/gim.test(e)&&(l=(r=e.split(";").filter((function(e){return e})))[0],u=r[1]),r=Ne(l),l=Ne(u),u=Se("".concat(P).concat(P)),J.current===t?(b=Se(null==(b=null==(y=null==(y=null==Y?void 0:Y.current)?void 0:y.textContent)?void 0:y.substring)?void 0:b.call(y,0,ee.current+1)),p=Se(null==(p=null==y?void 0:y.substring)?void 0:p.call(y,ee.current+1)),(o=document.createDocumentFragment()).appendChild(b),o.appendChild(r),o.appendChild(u),o.appendChild(l),p&&p.textContent&&0!==p.textContent.length&&o.appendChild(p),null!=(i=null==t?void 0:t.replaceChild)&&i.call(t,o,Y.current)):(b=Se(null==(i=null==(y=null==(i=null==Y?void 0:Y.current)?void 0:i.textContent)?void 0:y.substring)?void 0:i.call(y,0,ee.current)),p=Se(null==(i=null==y?void 0:y.substring)?void 0:i.call(y,ee.current)),(o=document.createDocumentFragment()).appendChild(b),o.appendChild(b),o.appendChild(r),o.appendChild(u),o.appendChild(l),p&&p.textContent&&0!==p.textContent.length&&o.appendChild(p),null!=(l=null==(r=null==(i=null==J?void 0:J.current)?void 0:i.parentElement)?void 0:r.replaceChild)&&l.call(r,o,J.current)),T(u,1)):(i=Ne(e),u=Se(P),J.current===t?(b=Se(null==(r=null==(y=null==(l=null==Y?void 0:Y.current)?void 0:l.textContent)?void 0:y.substring)?void 0:r.call(y,0,ee.current+1)),p=Se(null==(e=null==y?void 0:y.substring)?void 0:e.call(y,ee.current+1)),(o=document.createDocumentFragment()).appendChild(b),o.appendChild(i),o.appendChild(u),p&&p.textContent&&0!==p.textContent.length&&o.appendChild(p),null!=t&&t.replaceChild(o,Y.current),T(u,0)):null!=(e=null==(r=null==(l=null==J?void 0:J.current)?void 0:l.classList)?void 0:r.contains)&&e.call(r,"text")&&(b=Se(null==(l=null==(y=null==(t=null==Y?void 0:Y.current)?void 0:t.textContent)?void 0:y.substring)?void 0:l.call(y,0,ee.current)),p=Se(null==(e=null==y?void 0:y.substring)?void 0:e.call(y,ee.current)),(o=document.createDocumentFragment()).appendChild(b),o.appendChild(i),o.appendChild(u),p&&p.textContent&&0!==p.textContent.length&&o.appendChild(p),null!=(l=null==(t=null==(r=null==J?void 0:J.current)?void 0:r.parentElement)?void 0:t.replaceChild)&&l.call(t,o,J.current),T(u,0))),null!=Q)&&Q(null==(e=null==X?void 0:X.current)?void 0:e.innerHTML),Ee()},dangerouslySetInnerHTML:{__html:l}})})))),b.createElement("div",{ref:$,className:y()("".concat(D,"-quick-tips"),null!=m?m:"",((p={})["".concat(D,"-quick-tips--show")]=ue,p)),style:null!=f?f:{}},b.createElement("div",{className:y()("".concat(D,"-quick-tips-header"))},b.createElement("i",{onClick:xe},b.createElement(t.Z,{rev:null}))),!(H||[]).length&&b.createElement("div",null,b.createElement(n.Z,null)),b.createElement("ul",{className:y()("".concat(D,"-quick-tips-main"))},!!(H||[]).length&&(H||[]).map((function(e,l){return b.createElement("li",{key:e.value,onClick:function(l){return a=(a=e)[null!=j?j:"value"],u=de(),a&&(i=(t=(r=(null==(r=Y.current)?void 0:r.textContent)||"").lastIndexOf(ne.current,le.current))+ne.current.length,n=document.createDocumentFragment(),t=document.createTextNode(r.substring(0,t)),r=document.createTextNode(r.substring(i)),(i=document.createElement("div")).innerHTML=a,n.appendChild(t),Array.from(i.childNodes).forEach((function(e){n.appendChild(e)})),n.appendChild(r),K.current===J.current?(u.innerHTML="",u.appendChild(n)):u===J.current?null!=(a=null==Y?void 0:Y.current)&&a.parentElement&&Y.current.parentElement.replaceChild(n,Y.current):null!=(t=null==J?void 0:J.current)&&t.parentElement&&J.current.parentElement.replaceChild(n,J.current),x(r,0),null!=Q)&&Q(null==(i=null==X?void 0:X.current)?void 0:i.innerHTML),xe(),void ke();var a,n,t,r,i,u}},e.label)})))))},R=(0,b.memo)((0,b.forwardRef)(V));R.View=f,R.parse=function(e,l){var a;return e?((a=document.createElement("div")).innerHTML=e,"font"===(null==(e=null==(e=null==a?void 0:a.firstElementChild)?void 0:e.tagName)?void 0:e.toLowerCase())&&(a.innerHTML=a.firstElementChild.innerHTML),Array.from(a.childNodes).map((function(e){var a;if(1===e.nodeType){if(e.classList.contains("text"))return null!=(a=null==l?void 0:l({nodeType:3,value:e.textContent}))?a:"";if(e.classList.contains("operator"))return null!=(a=null==l?void 0:l({nodeType:1,value:e.textContent}))?a:""}else if(3===e.nodeType)return null!=(a=null==l?void 0:l({nodeType:3,value:e.textContent}))?a:"";return""})).join("")):""},R.validator=function(){return{validator:function(e,l){var a=document.createElement("div");return a.innerHTML=l,a.innerText?Promise.resolve():Promise.reject(new Error(v.ZP.v("请输入关键字")))}}};var O=R,M=a(63107),L=a.n(M),j=[{label:"&#43;",value:"&#43;",type:"binary"},{label:"&#8722;",value:"&#8722;",type:"binary"},{label:"&#215;",value:"&#215;",type:"binary"},{label:"&#247;",value:"&#247;",type:"binary"},{label:"&#61;",value:"&#61;",type:"binary"},{label:"&#8800;",value:"&#8800;",type:"binary"},{label:"&#177;",value:"&#177;",type:"binary"},{label:"&#172;",value:"&#172;",type:"binary"},{label:"&#60;",value:"&#60;",type:"binary"},{label:"&#62;",value:"&#62;",type:"binary"},{label:"&#8924;",value:"&#8924;",type:"binary"},{label:"&#8925;",value:"&#8925;",type:"binary"},{label:"&#176;",value:"&#176;",type:"binary"},{label:"&#185;",value:"&#185;",type:"binary"},{label:"&#178;",value:"&#178;",type:"binary"},{label:"&#179;",value:"&#179;",type:"binary"},{label:"&#402;",value:"&#402;",type:"binary"},{label:"&#37;",value:"&#37;",type:"binary"},{label:"&#137;",value:"&#137;",type:"binary"},{label:"&#8241;",value:"&#8241;",type:"binary"},{label:"&#8704;",value:"&#8704;",type:"binary"},{label:"&#8705;",value:"&#8705;",type:"binary"},{label:"&#8706;",value:"&#8706;",type:"binary"},{label:"&#8707;",value:"&#8707;",type:"binary"},{label:"&#8708;",value:"&#8708;",type:"binary"},{label:"&#8709;",value:"&#8709;",type:"binary"},{label:"&#8710;",value:"&#8710;",type:"binary"},{label:"&#8711;",value:"&#8711;",type:"binary"},{label:"&#8712;",value:"&#8712;",type:"binary"},{label:"&#8713;",value:"&#8713;",type:"binary"},{label:"&#8714;",value:"&#8714;",type:"binary"},{label:"&#8715;",value:"&#8715;",type:"binary"},{label:"&#8716;",value:"&#8716;",type:"binary"},{label:"&#8717;",value:"&#8717;",type:"binary"},{label:"&#8718;",value:"&#8718;",type:"binary"},{label:"&#8719;",value:"&#8719;",type:"binary"},{label:"&#8720;",value:"&#8720;",type:"binary"},{label:"&#8721;",value:"&#8721;",type:"binary"},{label:"&#8723;",value:"&#8723;",type:"binary"},{label:"&#8724;",value:"&#8724;",type:"binary"},{label:"&#8725;",value:"&#8725;",type:"binary"},{label:"&#8726;",value:"&#8726;",type:"binary"},{label:"&#8727;",value:"&#8727;",type:"binary"},{label:"&#8728;",value:"&#8728;",type:"binary"},{label:"&#8729;",value:"&#8729;",type:"binary"},{label:"&#8730;",value:"&#8730;",type:"binary"},{label:"&#8731;",value:"&#8731;",type:"binary"},{label:"&#8732;",value:"&#8732;",type:"binary"},{label:"&#8733;",value:"&#8733;",type:"binary"},{label:"&#8734;",value:"&#8734;",type:"binary"},{label:"&#8735;",value:"&#8735;",type:"binary"},{label:"&#8736;",value:"&#8736;",type:"binary"},{label:"&#8737;",value:"&#8737;",type:"binary"},{label:"&#8738;",value:"&#8738;",type:"binary"},{label:"&#8739;",value:"&#8739;",type:"binary"},{label:"&#8740;",value:"&#8740;",type:"binary"},{label:"&#8741;",value:"&#8741;",type:"binary"},{label:"&#8742;",value:"&#8742;",type:"binary"},{label:"&#8743;",value:"&#8743;",type:"binary"},{label:"&#8744;",value:"&#8744;",type:"binary"},{label:"&#8745;",value:"&#8745;",type:"binary"},{label:"&#8746;",value:"&#8746;",type:"binary"},{label:"&#8747;",value:"&#8747;",type:"binary"},{label:"&#8748;",value:"&#8748;",type:"binary"},{label:"&#8749;",value:"&#8749;",type:"binary"},{label:"&#8750;",value:"&#8750;",type:"binary"},{label:"&#8751;",value:"&#8751;",type:"binary"},{label:"&#8752;",value:"&#8752;",type:"binary"},{label:"&#8753;",value:"&#8753;",type:"binary"},{label:"&#8754;",value:"&#8754;",type:"binary"},{label:"&#8755;",value:"&#8755;",type:"binary"},{label:"&#8756;",value:"&#8756;",type:"binary"},{label:"&#8757;",value:"&#8757;",type:"binary"},{label:"&#8758;",value:"&#8758;",type:"binary"},{label:"&#8759;",value:"&#8759;",type:"binary"},{label:"&#8760;",value:"&#8760;",type:"binary"},{label:"&#8761;",value:"&#8761;",type:"binary"},{label:"&#8762;",value:"&#8762;",type:"binary"},{label:"&#8763;",value:"&#8763;",type:"binary"},{label:"&#8764;",value:"&#8764;",type:"binary"},{label:"&#8765;",value:"&#8765;",type:"binary"},{label:"&#8766;",value:"&#8766;",type:"binary"},{label:"&#8767;",value:"&#8767;",type:"binary"},{label:"&#8768;",value:"&#8768;",type:"binary"},{label:"&#8769;",value:"&#8769;",type:"binary"},{label:"&#8770;",value:"&#8770;",type:"binary"},{label:"&#8771;",value:"&#8771;",type:"binary"},{label:"&#8772;",value:"&#8772;",type:"binary"},{label:"&#8773;",value:"&#8773;",type:"binary"},{label:"&#8774;",value:"&#8774;",type:"binary"},{label:"&#8775;",value:"&#8775;",type:"binary"},{label:"&#8776;",value:"&#8776;",type:"binary"},{label:"&#8777;",value:"&#8777;",type:"binary"},{label:"&#8778;",value:"&#8778;",type:"binary"},{label:"&#8779;",value:"&#8779;",type:"binary"},{label:"&#8780;",value:"&#8780;",type:"binary"},{label:"&#8781;",value:"&#8781;",type:"binary"},{label:"&#8782;",value:"&#8782;",type:"binary"},{label:"&#8783;",value:"&#8783;",type:"binary"},{label:"&#8784;",value:"&#8784;",type:"binary"},{label:"&#8785;",value:"&#8785;",type:"binary"},{label:"&#8786;",value:"&#8786;",type:"binary"},{label:"&#8787;",value:"&#8787;",type:"binary"},{label:"&#8788;",value:"&#8788;",type:"binary"},{label:"&#8789;",value:"&#8789;",type:"binary"},{label:"&#8790;",value:"&#8790;",type:"binary"},{label:"&#8791;",value:"&#8791;",type:"binary"},{label:"&#8792;",value:"&#8792;",type:"binary"},{label:"&#8793;",value:"&#8793;",type:"binary"},{label:"&#8794;",value:"&#8794;",type:"binary"},{label:"&#8795;",value:"&#8795;",type:"binary"},{label:"&#8796;",value:"&#8796;",type:"binary"},{label:"&#8797;",value:"&#8797;",type:"binary"},{label:"&#8798;",value:"&#8798;",type:"binary"},{label:"&#8799;",value:"&#8799;",type:"binary"},{label:"&#8801;",value:"&#8801;",type:"binary"},{label:"&#8802;",value:"&#8802;",type:"binary"},{label:"&#8803;",value:"&#8803;",type:"binary"},{label:"&#8804;",value:"&#8804;",type:"binary"},{label:"&#8805;",value:"&#8805;",type:"binary"},{label:"&#8806;",value:"&#8806;",type:"binary"},{label:"&#8807;",value:"&#8807;",type:"binary"},{label:"&#8808;",value:"&#8808;",type:"binary"},{label:"&#8809;",value:"&#8809;",type:"binary"},{label:"&#8810;",value:"&#8810;",type:"binary"},{label:"&#8811;",value:"&#8811;",type:"binary"},{label:"&#8812;",value:"&#8812;",type:"binary"},{label:"&#8813;",value:"&#8813;",type:"binary"},{label:"&#8814;",value:"&#8814;",type:"binary"},{label:"&#8815;",value:"&#8815;",type:"binary"},{label:"&#8816;",value:"&#8816;",type:"binary"},{label:"&#8817;",value:"&#8817;",type:"binary"},{label:"&#8818;",value:"&#8818;",type:"binary"},{label:"&#8819;",value:"&#8819;",type:"binary"},{label:"&#8820;",value:"&#8820;",type:"binary"},{label:"&#8821;",value:"&#8821;",type:"binary"},{label:"&#8822;",value:"&#8822;",type:"binary"},{label:"&#8823;",value:"&#8823;",type:"binary"},{label:"&#8824;",value:"&#8824;",type:"binary"},{label:"&#8825;",value:"&#8825;",type:"binary"},{label:"&#8826;",value:"&#8826;",type:"binary"},{label:"&#8827;",value:"&#8827;",type:"binary"},{label:"&#8828;",value:"&#8828;",type:"binary"},{label:"&#8829;",value:"&#8829;",type:"binary"},{label:"&#8830;",value:"&#8830;",type:"binary"},{label:"&#8831;",value:"&#8831;",type:"binary"},{label:"&#8832;",value:"&#8832;",type:"binary"},{label:"&#8833;",value:"&#8833;",type:"binary"},{label:"&#8834;",value:"&#8834;",type:"binary"},{label:"&#8835;",value:"&#8835;",type:"binary"},{label:"&#8836;",value:"&#8836;",type:"binary"},{label:"&#8837;",value:"&#8837;",type:"binary"},{label:"&#8838;",value:"&#8838;",type:"binary"},{label:"&#8839;",value:"&#8839;",type:"binary"},{label:"&#8840;",value:"&#8840;",type:"binary"},{label:"&#8841;",value:"&#8841;",type:"binary"},{label:"&#8842;",value:"&#8842;",type:"binary"},{label:"&#8843;",value:"&#8843;",type:"binary"},{label:"&#8844;",value:"&#8844;",type:"binary"},{label:"&#8845;",value:"&#8845;",type:"binary"},{label:"&#8846;",value:"&#8846;",type:"binary"},{label:"&#8847;",value:"&#8847;",type:"binary"},{label:"&#8848;",value:"&#8848;",type:"binary"},{label:"&#8849;",value:"&#8849;",type:"binary"},{label:"&#8850;",value:"&#8850;",type:"binary"},{label:"&#8851;",value:"&#8851;",type:"binary"},{label:"&#8852;",value:"&#8852;",type:"binary"},{label:"&#8853;",value:"&#8853;",type:"binary"},{label:"&#8854;",value:"&#8854;",type:"binary"},{label:"&#8855;",value:"&#8855;",type:"binary"},{label:"&#8856;",value:"&#8856;",type:"binary"},{label:"&#8857;",value:"&#8857;",type:"binary"},{label:"&#8858;",value:"&#8858;",type:"binary"},{label:"&#8859;",value:"&#8859;",type:"binary"},{label:"&#8860;",value:"&#8860;",type:"binary"},{label:"&#8861;",value:"&#8861;",type:"binary"},{label:"&#8862;",value:"&#8862;",type:"binary"},{label:"&#8863;",value:"&#8863;",type:"binary"},{label:"&#8864;",value:"&#8864;",type:"binary"},{label:"&#8865;",value:"&#8865;",type:"binary"},{label:"&#8866;",value:"&#8866;",type:"binary"},{label:"&#8867;",value:"&#8867;",type:"binary"},{label:"&#8868;",value:"&#8868;",type:"binary"},{label:"&#8869;",value:"&#8869;",type:"binary"},{label:"&#8870;",value:"&#8870;",type:"binary"},{label:"&#8871;",value:"&#8871;",type:"binary"},{label:"&#8872;",value:"&#8872;",type:"binary"},{label:"&#8873;",value:"&#8873;",type:"binary"},{label:"&#8874;",value:"&#8874;",type:"binary"},{label:"&#8875;",value:"&#8875;",type:"binary"},{label:"&#8876;",value:"&#8876;",type:"binary"},{label:"&#8877;",value:"&#8877;",type:"binary"},{label:"&#8878;",value:"&#8878;",type:"binary"},{label:"&#8879;",value:"&#8879;",type:"binary"},{label:"&#8880;",value:"&#8880;",type:"binary"},{label:"&#8881;",value:"&#8881;",type:"binary"},{label:"&#8882;",value:"&#8882;",type:"binary"},{label:"&#8883;",value:"&#8883;",type:"binary"},{label:"&#8884;",value:"&#8884;",type:"binary"},{label:"&#8885;",value:"&#8885;",type:"binary"},{label:"&#8886;",value:"&#8886;",type:"binary"},{label:"&#8887;",value:"&#8887;",type:"binary"},{label:"&#8888;",value:"&#8888;",type:"binary"},{label:"&#8889;",value:"&#8889;",type:"binary"},{label:"&#8890;",value:"&#8890;",type:"binary"},{label:"&#8891;",value:"&#8891;",type:"binary"},{label:"&#8892;",value:"&#8892;",type:"binary"},{label:"&#8893;",value:"&#8893;",type:"binary"},{label:"&#8894;",value:"&#8894;",type:"binary"},{label:"&#8895;",value:"&#8895;",type:"binary"},{label:"&#8896;",value:"&#8896;",type:"binary"},{label:"&#8897;",value:"&#8897;",type:"binary"},{label:"&#8898;",value:"&#8898;",type:"binary"},{label:"&#8899;",value:"&#8899;",type:"binary"},{label:"&#8900;",value:"&#8900;",type:"binary"},{label:"&#8901;",value:"&#8901;",type:"binary"},{label:"&#8902;",value:"&#8902;",type:"binary"},{label:"&#8903;",value:"&#8903;",type:"binary"},{label:"&#8904;",value:"&#8904;",type:"binary"},{label:"&#8905;",value:"&#8905;",type:"binary"},{label:"&#8906;",value:"&#8906;",type:"binary"},{label:"&#8907;",value:"&#8907;",type:"binary"},{label:"&#8908;",value:"&#8908;",type:"binary"},{label:"&#8909;",value:"&#8909;",type:"binary"},{label:"&#8910;",value:"&#8910;",type:"binary"},{label:"&#8911;",value:"&#8911;",type:"binary"},{label:"&#8912;",value:"&#8912;",type:"binary"},{label:"&#8913;",value:"&#8913;",type:"binary"},{label:"&#8914;",value:"&#8914;",type:"binary"},{label:"&#8915;",value:"&#8915;",type:"binary"},{label:"&#8916;",value:"&#8916;",type:"binary"},{label:"&#8917;",value:"&#8917;",type:"binary"},{label:"&#8918;",value:"&#8918;",type:"binary"},{label:"&#8919;",value:"&#8919;",type:"binary"},{label:"&#8920;",value:"&#8920;",type:"binary"},{label:"&#8921;",value:"&#8921;",type:"binary"},{label:"&#8922;",value:"&#8922;",type:"binary"},{label:"&#8923;",value:"&#8923;",type:"binary"},{label:"&#8926;",value:"&#8926;",type:"binary"},{label:"&#8927;",value:"&#8927;",type:"binary"},{label:"&#8928;",value:"&#8928;",type:"binary"},{label:"&#8929;",value:"&#8929;",type:"binary"},{label:"&#8930;",value:"&#8930;",type:"binary"},{label:"&#8931;",value:"&#8931;",type:"binary"},{label:"&#8932;",value:"&#8932;",type:"binary"},{label:"&#8933;",value:"&#8933;",type:"binary"},{label:"&#8934;",value:"&#8934;",type:"binary"},{label:"&#8935;",value:"&#8935;",type:"binary"},{label:"&#8936;",value:"&#8936;",type:"binary"},{label:"&#8937;",value:"&#8937;",type:"binary"},{label:"&#8938;",value:"&#8938;",type:"binary"},{label:"&#8939;",value:"&#8939;",type:"binary"},{label:"&#8940;",value:"&#8940;",type:"binary"},{label:"&#8941;",value:"&#8941;",type:"binary"},{label:"&#8942;",value:"&#8942;",type:"binary"},{label:"&#8943;",value:"&#8943;",type:"binary"},{label:"&#8944;",value:"&#8944;",type:"binary"},{label:"&#8945;",value:"&#8945;",type:"binary"},{label:"&#8946;",value:"&#8946;",type:"binary"},{label:"&#8947;",value:"&#8947;",type:"binary"},{label:"&#8948;",value:"&#8948;",type:"binary"},{label:"&#8949;",value:"&#8949;",type:"binary"},{label:"&#8950;",value:"&#8950;",type:"binary"},{label:"&#8951;",value:"&#8951;",type:"binary"},{label:"&#8952;",value:"&#8952;",type:"binary"},{label:"&#8953;",value:"&#8953;",type:"binary"},{label:"&#8954;",value:"&#8954;",type:"binary"},{label:"&#8955;",value:"&#8955;",type:"binary"},{label:"&#8956;",value:"&#8956;",type:"binary"},{label:"&#8957;",value:"&#8957;",type:"binary"},{label:"&#8958;",value:"&#8958;",type:"binary"},{label:"&#8959;",value:"&#8959;",type:"binary"},{label:"&#8304;",value:"&#8304;",type:"binary"},{label:"&#8305;",value:"&#8305;",type:"binary"},{label:"&#8308;",value:"&#8308;",type:"binary"},{label:"&#8309;",value:"&#8309;",type:"binary"},{label:"&#8310;",value:"&#8310;",type:"binary"},{label:"&#8311;",value:"&#8311;",type:"binary"},{label:"&#8312;",value:"&#8312;",type:"binary"},{label:"&#8313;",value:"&#8313;",type:"binary"},{label:"&#8314;",value:"&#8314;",type:"binary"},{label:"&#8315;",value:"&#8315;",type:"binary"},{label:"&#8316;",value:"&#8316;",type:"binary"},{label:"&#8317;&#8318;",value:"&#8317;&#8318;",type:"brackets"},{label:"&#8319;",value:"&#8319;",type:"binary"},{label:"&#8320;",value:"&#8320;",type:"binary"},{label:"&#8321;",value:"&#8321;",type:"binary"},{label:"&#8322;",value:"&#8322;",type:"binary"},{label:"&#8323;",value:"&#8323;",type:"binary"},{label:"&#8324;",value:"&#8324;",type:"binary"},{label:"&#8325;",value:"&#8325;",type:"binary"},{label:"&#8326;",value:"&#8326;",type:"binary"},{label:"&#8327;",value:"&#8327;",type:"binary"},{label:"&#8328;",value:"&#8328;",type:"binary"},{label:"&#8329;",value:"&#8329;",type:"binary"},{label:"&#8330;",value:"&#8330;",type:"binary"},{label:"&#8331;",value:"&#8331;",type:"binary"},{label:"&#8332;",value:"&#8332;",type:"binary"},{label:"&#8333;&#8334;",value:"&#8333;&#8334;",type:"brackets"},{label:"&#8336;",value:"&#8336;",type:"binary"},{label:"&#8337;",value:"&#8337;",type:"binary"},{label:"&#8338;",value:"&#8338;",type:"binary"},{label:"&#8339;",value:"&#8339;",type:"binary"},{label:"&#8340;",value:"&#8340;",type:"binary"}],H=[{label:"select",value:"select",type:"binary"},{label:"from",value:"from",type:"binary"},{label:"where",value:"where",type:"binary"},{label:"and",value:"and",type:"binary"},{label:"or",value:"or",type:"binary"},{label:"in",value:"in",type:"binary"},{label:"like",value:"like",type:"binary"},{label:"distinct",value:"distinct",type:"binary"},{label:"order by",value:"order by",type:"binary"},{label:"asc",value:"asc",type:"binary"},{label:"desc",value:"desc",type:"binary"},{label:"group by",value:"group by",type:"binary"},{label:"having",value:"having",type:"binary"},{label:"exists",value:"exists",type:"binary"},{label:"between",value:"between",type:"binary"},{label:"insert into",value:"insert into",type:"binary"},{label:"update",value:"update",type:"binary"},{label:"set",value:"set",type:"binary"},{label:"delete",value:"delete",type:"binary"},{label:"join",value:"join",type:"binary"},{label:"left join",value:"left join",type:"binary"},{label:"right join",value:"right join",type:"binary"},{label:"union",value:"union",type:"binary"},{label:"create table",value:"create table",type:"binary"},{label:"drop",value:"drop",type:"binary"},{label:"alert table",value:"alert table",type:"binary"},{label:"()",value:"()",type:"brackets"},{label:"count",value:"count",type:"binary"},{label:"first",value:"first",type:"binary"},{label:"last",value:"last",type:"binary"},{label:"max",value:"max",type:"binary"},{label:"min",value:"min",type:"binary"},{label:"sum",value:"sum",type:"binary"},{label:"avg",value:"avg",type:"binary"},{label:"len",value:"len",type:"binary"},{label:"round",value:"round",type:"binary"},{label:"now",value:"now",type:"binary"},{label:"format",value:"format",type:"binary"},{label:"=",value:"=",type:"binary"},{label:"!=",value:"!=",type:"binary"},{label:"not null",value:"not null",type:"binary"},{label:"&#62;",value:"&#62;",type:"binary"},{label:"&#60;",value:"&#60;",type:"binary"},{label:"&#8924;",value:"&#8924;",type:"binary"},{label:"&#8925;",value:"&#8925;",type:"binary"}],Z=a(96032),W="eqAhKUi8bn8GXNMgdc64",I="Pxxi0s3Tv8WqyX3im_vQ",Q=()=>{const[e,l]=(0,b.useState)([]),a=L()((e=>{l(e?["java","c++","javascript","react","vue","spring"].filter((l=>l.includes(e))).map((e=>({label:e,value:e}))):[])}),150);return b.createElement(Z.ZP,null,b.createElement(Z.$0,{title:"Expression"},b.createElement("p",null,"表达式")),b.createElement(Z.e0,{title:"代码演示",config:[{id:"p1",name:"数学表达式",mode:"code",scope:{React:b},cardProps:{description:{title:"数学表达式",info:"数学表达式"}},codeText:"\n import { Expression } from '@baifendian/adhere';\n import Math from '@baifendian/adhere-ui-expression/es/operators/Math';\n\n <div>\n   <Expression operators={Math} />\n </div>\n      ",type:"PlayGround",renderChildren:()=>b.createElement("div",null,b.createElement(O,{operators:j}))},{id:"p2",name:"ElasticSearch查询表达式",mode:"code",scope:{React:b},cardProps:{description:{title:"ElasticSearch查询表达式",info:"ElasticSearch查询表达式"}},codeText:"\n import { Expression } from '@baifendian/adhere';\n import ElasticSearch from '@baifendian/adhere-ui-expression/es/operators/ElasticSearch';\n\n <div>\n   <Expression operators={ElasticSearch} />\n </div>\n      ",type:"PlayGround",renderChildren:()=>b.createElement("div",null,b.createElement(O,{operators:h}))},{id:"p3",name:"Sql查询表达式",mode:"code",scope:{React:b},cardProps:{description:{title:"Sql查询表达式",info:"Sql查询表达式"}},codeText:"\n import { Expression } from '@baifendian/adhere';\n import Sql from '@baifendian/adhere-ui-expression/es/operators/Sql';\n\n <div>\n   <Expression operators={Sql} />\n </div>\n      ",type:"PlayGround",renderChildren:()=>b.createElement("div",null,b.createElement(O,{operators:H}))},{id:"p4",name:"自定义表达式的运算符",mode:"code",scope:{React:b},cardProps:{description:{title:"自定义表达式的运算符",info:"支持html code"}},codeText:"\n import { Expression } from '@baifendian/adhere';\n\n <div>\n  <Expression\n    operators={[\n      { label: '===', value: '===', type: 'binary' },\n      { label: '++', value: '++', type: 'binary' },\n      { label: '--', value: '--', type: 'binary' },\n      { label: '&#43;', value: '&#43;', type: 'binary' },\n      { label: '+=', value: '+=', type: 'binary' },\n      { label: '[]', value: '[]', type: 'brackets' },\n      { label: '{}', value: '{}', type: 'brackets' },\n    ]}\n  />\n </div>\n      ",type:"PlayGround",renderChildren:()=>b.createElement("div",null,b.createElement(O,{operators:[{label:"===",value:"===",type:"binary"},{label:"++",value:"++",type:"binary"},{label:"--",value:"--",type:"binary"},{label:"&#43;",value:"&#43;",type:"binary"},{label:"+=",value:"+=",type:"binary"},{label:"[]",value:"[]",type:"brackets"},{label:"{}",value:"{}",type:"brackets"}]}))},{id:"p5",name:"自定义运算符和文本的样式",mode:"code",scope:{React:b},cardProps:{description:{title:"自定义运算符和文本的样式",info:"自定义运算符和文本的样式"}},codeText:"\n  import { Expression } from '@baifendian/adhere';\n  import Sql from '@baifendian/adhere-ui-expression/es/operators/Sql';\n\n  <div>\n    <Expression\n      placeholder=\"请输入表达式\"\n      operators={Sql}\n      operatorClassName={styles.operatorClassName}\n      textClassName={styles.textClassName}\n    />\n  </div>\n      ",type:"PlayGround",renderChildren:()=>b.createElement("div",null,b.createElement(O,{placeholder:"请输入表达式",operators:H,operatorClassName:W,textClassName:I}))},{id:"p6",name:"补全输入信息",mode:"code",scope:{React:b},cardProps:{description:{title:"补全输入信息",info:"补全输入信息"}},codeText:"\n  import { Expression } from '@baifendian/adhere';\n  import Sql from '@baifendian/adhere-ui-expression/es/operators/Sql';\n  import debounce from 'lodash.debounce';\n  import React, { useState } from 'react';\n\n  export default () => {\n    const [quickTipDataSource, setQuickTipDataSource] = useState([]);\n\n    const onContinuousTextChange = debounce((text) => {\n      const kws = ['java', 'c++', 'javascript', 'react', 'vue', 'spring'];\n\n      if (!text) {\n        setQuickTipDataSource([]);\n      } else {\n        setQuickTipDataSource(\n          kws\n            .filter((kw) => kw.includes(text))\n            .map((t) => ({\n              label: t,\n              value: t,\n            })),\n        );\n      }\n    }, 150);\n\n    return (\n      <div>\n        <Expression\n          placeholder=\"请输入表达式\"\n          operators={Sql}\n          allowClear\n          onContinuousTextChange={onContinuousTextChange}\n          quickTipDataSource={quickTipDataSource}\n        />\n      </div>\n    )\n  }\n      ",type:"PlayGround",renderChildren:()=>b.createElement("div",null,b.createElement(O,{placeholder:"请输入表达式",operators:H,allowClear:!0,onContinuousTextChange:a,quickTipDataSource:e}))}]}),b.createElement(Z.sB,{title:"Props",config:[{border:!0,title:"属性",data:[{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"editorClassName",desc:"editor附加的样式表",type:"string",defaultVal:""},{params:"editorStyle",desc:"editor附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"operatorWrapClassName",desc:"运算符Wrap附加的样式表",type:"string",defaultVal:""},{params:"operatorWrapStyle",desc:"运算符Wrap附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"quickTipWrapClassName",desc:"quickTipWrap附加的样式表",type:"string",defaultVal:""},{params:"quickTipWrapStyle",desc:"quickTipWrap附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"textClassName",desc:"文字的附加样式",type:"((text: string) => string) | string",defaultVal:""},{params:"operatorClassName",desc:"运算符的附加样式",type:"((text: string) => string) | string",defaultVal:""},{params:"value",desc:"值",type:"string",defaultVal:""},{params:"operators",desc:"运算符列表",type:"Operators",defaultVal:"ElasticSearchOperators"},{params:"triggerCharCode",desc:"触发弹出操作符layer的charCode",type:"number",defaultVal:"32"},{params:"placeholder",desc:"placeholder",type:"string",defaultVal:""},{params:"quickTipDataSource",desc:"快速查询的数据",type:"string",defaultVal:"Array<T extends { label: string; value: string }>"},{params:"quickTipProp",desc:"quickTip数据中哪个属性的值参与计算",type:"string",defaultVal:"value"},{params:"disableQuickTip",desc:"是否禁止使用quickTip",type:"boolean",defaultVal:"false"},{params:"allowClear",desc:"清空内容按钮",type:"boolean",defaultVal:"true"},{params:"onChange",desc:"input改变",type:"(value?: string) => void",defaultVal:""},{params:"onContinuousTextChange",desc:"连续输入字符的回调",type:"(continuousText: string) => void",defaultVal:""},{params:"onEditorInputEnd",desc:"input输入",type:"(html: string, continuousText: string) => void",defaultVal:""},{params:"onEditorBlurEnd",desc:"blur",type:"(e) => void",defaultVal:""},{params:"onEditorKeyDownEnd",desc:"EditorKeyDownEnd",type:"(e) => void",defaultVal:""},{params:"onEditorPasteEnd",desc:"EditorPasteEnd",type:"(e) => void",defaultVal:""}]},{border:!0,title:"Operators",data:[{params:"",desc:"运算符集合",type:"\n                  Array<OperatorItem>\n                ",defaultVal:""}]},{border:!0,title:"OperatorItem",data:[{params:"",desc:"运算符",type:"\n                  {\n                    // 运算符显示的内容\n                    label: string;\n                    // 运算符的值\n                    value: string;\n                    // 运算符的类型\n                    type: OperatorType;\n                  }\n                ",defaultVal:""}]}]}),b.createElement(Z.ae,{title:"Api",config:[{border:!0,title:"Editor方法",data:[{name:"setValue",desc:"设置editor的值",modifier:"public",params:[{name:"html",desc:"值",type:"string",defaultVal:"",required:""}],returnType:"void",returnDesc:""},{name:"getValue",desc:"获取editor的值",modifier:"public",params:[],returnType:"string",returnDesc:""},{name:"isEditorEmpty",desc:"判断editor是否为null",modifier:"public",params:[],returnType:"boolean",returnDesc:""},{name:"showQuickTip",desc:"显示quickTip",modifier:"public",params:[],returnType:"void",returnDesc:""},{name:"showOperators",desc:"显示operators",modifier:"public",params:[],returnType:"void",returnDesc:""},{name:"hideQuickTip",desc:"隐藏quickTip",modifier:"public",params:[],returnType:"void",returnDesc:""},{name:"hideOperators",desc:"隐藏operators",modifier:"public",params:[],returnType:"void",returnDesc:""},{name:"clear",desc:"清空editor",modifier:"public",params:[],returnType:"void",returnDesc:""}]}]}))}}}]);