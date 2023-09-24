"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[5216],{227155:function(e,t){var n,o="",r="",i=-1,c=function(){},a=1,l=!1,d=!1;function s(e,t){if(void 0===t&&(t=1),l||console.error("adapterScreen.js：adapterScreen has not been initialized yet"),e||console.error("adapterScreen.js：bad selector: ".concat(e)),r=e,i=t,0==(e=document.querySelectorAll(e)).length)console.error("adapterScreen.js：elRectification found no element");else{for(var n=0,o=Array.from(e);n<o.length;n++){var c=o[n],s=(d||(c.originalWidth=c.clientWidth,c.originalHeight=c.clientHeight),1==a?1:a*t);c.style.width="".concat(c.originalWidth*s,"px"),c.style.height="".concat(c.originalHeight*s,"px"),c.style.transform="scale(".concat(1/a,")"),c.style.transformOrigin="0 0"}d=!0}}function u(e,t,n,o){var r=document.documentElement.clientHeight,i=document.documentElement.clientWidth;a=i/r<e/t?i/e:r/t,n.style.height="".concat(r/a,"px"),n.style.width="".concat(i/a,"px"),n.style.transform="scale(".concat(a,")");for(var c=0,l=o;c<l.length;c++){var d,s,u,f=l[c],p=document.querySelector("#ignoreStyle"),m=f.el||f.dom;m?(s=(d=f.scale||1/a)!=a?f.fontSize:"autofit",u=d!=a?f.width:"autofit",f=d!=a?f.height:"autofit",new RegExp("".concat(m,"( |{)"),"gm").test((null==p?void 0:p.innerHTML)||"")||p&&(p.innerHTML+="\n".concat(m," { \n        transform: scale(").concat(d,")!important;\n        transform-origin: 0 0;\n        width: ").concat(u,"px!important;\n        height: ").concat(f,"px!important;\n      }"),p.innerHTML+="\n".concat(m," div ,").concat(m," span,").concat(m," a,").concat(m," * {\n        font-size: ").concat(s,"px;\n        }"))):console.error("adapterScreen: bad selector: ".concat(m))}}var f={init:function(e,t){void 0===e&&(e={}),(t=void 0===t||t)&&console.log("%cadapterScreen.js is running","font-weight: bold; color: #ffb712; background:linear-gradient(-45deg, #bd34fe 50%, #47caff 50% );background: -webkit-linear-gradient( 120deg, #bd34fe 30%, #41d1ff );background-clip: text;-webkit-background-clip: text; -webkit-text-fill-color:linear-gradient( -45deg, #bd34fe 50%, #47caff 50% ); padding: 8px 12px; border-radius: 4px;");var a,f=(t={designWidth:1920,dw:1920,designHeight:929,dh:929,renderDom:"string"==typeof e?e:"#app",el:"string"==typeof e?e:"#app",resize:!0,ignore:[],transition:"none",delay:0}).designWidth,p=t.dw,m=t.designHeight,g=t.dh,h=(e=t.el,t.resize),y=t.ignore,v=t.transition,b=t.delay,w=(o=e||t.renderDom,document.querySelector(e));w?(t=document.createElement("style"),a=document.createElement("style"),t.lang="text/css",a.lang="text/css",t.id="autofit-style",a.id="ignoreStyle",t.innerHTML="\n      body {\n        overflow: hidden;\n      }\n    ",w.appendChild(t),w.appendChild(a),w.style.height="".concat(g||m,"px"),w.style.width="".concat(p||f,"px"),w.style.transformOrigin="0 0",u(p||f,g||m,w,y),c=function(){window.clearTimeout(n),0!=b?n=window.setTimeout((function(){u(p||f,g||m,w,y),d&&s(r,i)}),b):(u(p||f,g||m,w,y),d&&s(r,i))},h&&window.addEventListener("resize",c),l=!0,setTimeout((function(){w&&(w.style.transition="".concat(v,"s"))}))):console.error("adapterScreen: '".concat(e,"' is not exist"))},off:function(e){var t,n,i;void 0===e&&(e="#app");try{d=!1,window.removeEventListener("resize",c),null!=(i=null==(n=null==(t=null===document||void 0===document?void 0:document.querySelector)?void 0:t.call(document,"#autofit-style"))?void 0:n.remove)&&i.call(n);for(var a=document.querySelector(o||e),s=(a&&(a.style=""),document.querySelectorAll(r)),u=0,f=Array.from(s);u<f.length;u++){var p=f[u];p.style.width="",p.style.height="",p.style.transform=""}}catch(e){console.error("adapterScreen: Failed to remove normally",e),l=!1}l&&console.log("%cadapterScreen.js is off","font-weight: bold;color: #707070; background: #c9c9c9; padding: 8px 12px; border-radius: 4px;")},elRectification:s};t.Z=f},363243:function(e,t,n){var o=n(227155);t.Z=o.Z},314674:function(e,t,n){n.r(t);var o=n(502616),r=n(5254),i=n(690171),c=n(296032);t.default=()=>i.createElement(c.ZP,null,i.createElement(c.$0,{title:"AdapterScreen"},i.createElement("p",null,"对屏幕的缩放进行适配的操作")),i.createElement(c.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:i},cardProps:{description:{title:"基本使用",info:"基本使用"}},codeText:"\n  import { AdapterScreen } from '@baifendian/adhere';\n  import React from 'react';\n  import { Button } from 'antd';\n\n  <Button\n    type=\"primary\"\n    onClick={() => {\n      AdapterScreen.init();\n    }}\n  >\n    控制整体页面的缩放\n  </Button>\n      ",type:"PlayGround",renderChildren:()=>i.createElement(r.ZP,{type:"primary",onClick:()=>{o.Z.init()}},"控制整体页面的缩放")}]}),i.createElement(c.ae,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"AdapterScreen",desc:"对一个元素进行缩放的管理",modifier:"static",params:[{name:"el",desc:"控制缩放的元素",type:"HtmlElement",defaultVal:"window.document.body",required:""}],returnType:"Function",returnDesc:"注销事件的方法"}]}]}))},296032:function(e,t,n){n.d(t,{$0:function(){return l},ae:function(){return u},e0:function(){return d},sB:function(){return s}});var o=n(570517),r=n(153757),i=n(690171);const{PlayGroundPageContext:c,PlayGroundPage:a}=r.default,{Section:l,CodeBoxSection:d,PropsSection:s,FunctionPropsSection:u}=a;t.ZP=function(e){let{children:t,...n}=e;const[r,l]=(0,i.useState)(),d=(0,i.useRef)();return(0,i.useEffect)((()=>{l(d.current.parentElement.parentElement)}),[]),i.createElement(c.Provider,{value:{scrollEl:r}},i.createElement(a,(0,o.Z)({ref:d},n),t))}},502616:function(e,t,n){var o=n(363243);t.Z=o.Z}}]);