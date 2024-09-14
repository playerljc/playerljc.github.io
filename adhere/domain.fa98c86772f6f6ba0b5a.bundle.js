"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[3059],{51713:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var n,o=t(26322),l=t(96465),a=t(64785),c=(n=function(e,r){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,r){e.__proto__=r}:function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}))(e,r)},function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}n(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}),i=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return c(r,e),r.prototype.emitError=function(e){this.emit("error",e)},r.prototype.add=function(e){e.on("error",this.emitError)},r.prototype.bind=function(e){var r=this;return function(){var t=Array.prototype.slice.call(arguments);try{e.apply(null,t)}catch(t){r.emitError(t)}}},r.prototype.dispose=function(){return this.removeAllListeners(),this},r.prototype.enter=function(){return this},r.prototype.exit=function(){return this},r.prototype.intercept=function(e){var r=this;return function(t){if(t)r.emitError(t);else{var n=Array.prototype.slice.call(arguments,1);try{e.apply(null,n)}catch(t){r.emitError(t)}}}},r.prototype.remove=function(e){e.removeListener("error",this.emitError)},r.prototype.run=function(e){try{e()}catch(e){this.emitError(e)}return this},r}(t.n(a)());const s={createDomain:function(){return new i},create:function(){return new i}};var u=t(80711);const m="Dmb4gBjev8uJh4xY2AFS",p=()=>{const e=(0,o.useRef)();return o.createElement(o.Fragment,null,o.createElement(u.Ay,{type:"primary",onClick:()=>{const r=s.create();r.on("error",(function(r){const t=e.current.innerHTML;e.current.innerHTML="".concat(t).concat(t?"</br>":"").concat(r.toString()),e.current.scrollTop=e.current.scrollHeight-e.current.offsetHeight})),r.run((function(){noexists()}))}},"运行"),o.createElement("div",{className:m,ref:e}))},f=()=>{const e=(0,o.useRef)();return o.createElement(o.Fragment,null,o.createElement(u.Ay,{type:"primary",onClick:()=>{const r=s.create();r.on("error",(function(r){const t=e.current.innerHTML;e.current.innerHTML="".concat(t).concat(t?"</br>":"").concat(r.toString()),e.current.scrollTop=e.current.scrollHeight-e.current.offsetHeight})),new Promise(r.bind((e=>{noexists(),e()})))}},"运行"),o.createElement("div",{className:m,ref:e}))},d=()=>o.createElement(l.Ay,null,o.createElement(l.wn,{title:"Domain"},o.createElement("p",null,"Domain的浏览器端实现")),o.createElement(l.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"run方法",mode:"code",scope:{React:o},cardProps:{description:{title:"run方法",info:"基本操作(run方法)"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React, { useRef } from 'react';\r\n\r\nimport { Domain } from '@baifendian/adhere';\r\n\r\nimport styles from '../index.less';\r\n\r\nexport default () => {\r\n  const console1Ref = useRef();\r\n\r\n  return (\r\n    <>\r\n      <Button\r\n        type=\"primary\"\r\n        onClick={() => {\r\n          const d = Domain.create();\r\n\r\n          d.on('error', function (e) {\r\n            const content = console1Ref.current.innerHTML;\r\n            console1Ref.current.innerHTML = `${content}${content ? `</br>` : ''}${e.toString()}`;\r\n            console1Ref.current.scrollTop =\r\n              console1Ref.current.scrollHeight - console1Ref.current.offsetHeight;\r\n          });\r\n\r\n          d.run(function () {\r\n            noexists();\r\n          });\r\n        }}\r\n      >\r\n        运行\r\n      </Button>\r\n      <div className={styles.Console} ref={console1Ref}></div>\r\n    </>\r\n  );\r\n};\r\n",renderChildren:()=>o.createElement(p,null)},{id:"p2",name:"bind方法",mode:"code",scope:{React:o},cardProps:{description:{title:"bind方法",info:"基本操作(bind方法)"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React, { useRef } from 'react';\r\n\r\nimport { Domain } from '@baifendian/adhere';\r\n\r\nimport styles from '../index.less';\r\n\r\nexport default () => {\r\n  const console2Ref = useRef();\r\n\r\n  return (\r\n    <>\r\n      <Button\r\n        type=\"primary\"\r\n        onClick={() => {\r\n          const d = Domain.create();\r\n\r\n          d.on('error', function (e) {\r\n            const content = console2Ref.current.innerHTML;\r\n            console2Ref.current.innerHTML = `${content}${content ? `</br>` : ''}${e.toString()}`;\r\n            console2Ref.current.scrollTop =\r\n              console2Ref.current.scrollHeight - console2Ref.current.offsetHeight;\r\n          });\r\n\r\n          function run() {\r\n            return new Promise(\r\n              d.bind((resolve) => {\r\n                noexists();\r\n                resolve();\r\n              }),\r\n            );\r\n          }\r\n\r\n          run();\r\n        }}\r\n      >\r\n        运行\r\n      </Button>\r\n      <div className={styles.Console} ref={console2Ref}></div>\r\n    </>\r\n  );\r\n};\r\n",renderChildren:()=>o.createElement(f,null)}]}),o.createElement(l.I7,{title:"Api",config:[{border:!0,title:"Domain",data:[{name:"createDomain",desc:"创建Domain对象",modifier:"public",params:[],returnType:"IDomain",returnDesc:""},{name:"create",desc:"创建Domain对象",modifier:"public",params:[],returnType:"IDomain",returnDesc:""}]},{border:!0,title:"IDomain",data:[{name:"add",desc:"add",modifier:"public",params:[{name:"emitter",desc:"",type:"EventEmitter",defaultVal:"",required:""}],returnType:"void",returnDesc:""},{name:"bind",desc:"bind",modifier:"public",params:[{name:"fn",desc:"",type:"Function",defaultVal:"",required:""}],returnType:"Function",returnDesc:""},{name:"dispose",desc:"dispose",modifier:"public",params:[],returnType:"IDomain",returnDesc:""},{name:"enter",desc:"enter",modifier:"public",params:[],returnType:"IDomain",returnDesc:""},{name:"exit",desc:"exit",modifier:"public",params:[],returnType:"IDomain",returnDesc:""},{name:"intercept",desc:"intercept",modifier:"public",params:[{name:"fn",desc:"",type:"Function",defaultVal:"",required:""}],returnType:"Function",returnDesc:""},{name:"remove",desc:"remove",modifier:"public",params:[{name:"emitter",desc:"",type:"EventEmitter",defaultVal:"",required:""}],returnType:"void",returnDesc:""},{name:"run",desc:"run",modifier:"public",params:[{name:"fn",desc:"",type:"Function",defaultVal:"",required:""}],returnType:"IDomain",returnDesc:""}]}]}))},73376:(e,r,t)=>{t.d(r,{A:()=>f});var n=t(86662),o=t(86056),l=t(26322),a=t(90264),c=t(38948);const i="fdFKYQbTadYRAFXyIsyC",s="TGQfKkX166qX5wG5Oi6O",u="xoMDGjw3kWAGwRmDVR2l",m="juDjVuIAwAS6vlI_lwTq",p="s2U_wfx5rmRlV8iKcHg5",f=()=>l.createElement("ul",{className:i},l.createElement("li",{className:s},l.createElement("dl",null,l.createElement("dt",null,"相关资源"),l.createElement("dd",null,l.createElement("ul",{className:u},l.createElement("li",{className:m},"自主研发",l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"http://49.232.163.126:8084/",target:"_blank",rel:"noopener noreferrer"},"adherev")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-BUILD",target:"_blank",rel:"noopener noreferrer"},"CTSJ-BUILD")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-BUILDV",target:"_blank",rel:"noopener noreferrer"},"CTSJ-BUILDV")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-STATE",target:"_blank",rel:"noopener noreferrer"},"CTSJ-STATE")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-ROUTER",target:"_blank",rel:"noopener noreferrer"},"CTSJ-ROUTER")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-VuexGenerator",target:"_blank",rel:"noopener noreferrer"},"CTSJ-VuexGenerator")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-React-SSR",target:"_blank",rel:"noopener noreferrer"},"CTSJ-React-SSR")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-DOC",target:"_blank",rel:"noopener noreferrer"},"CTSJ-DOC")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-DvaGenerator",target:"_blank",rel:"noopener noreferrer"},"CTSJ-DvaGenerator")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/WebViewJavascriptBridge",target:"_blank",rel:"noopener noreferrer"},"WebViewJavascriptBridge")))),l.createElement("li",{className:m},"模板工程",l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/adhere",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)")),l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/polyfill",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)(支持IE)")),l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/adhere-webpack5-js-ssr",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)(SSR)")),l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/AntPro",target:"_blank",rel:"noopener noreferrer"},"AntPro(G1)")),l.createElement("li",null,l.createElement("a",{href:"http://git.baifendian.com/dongxu.guo/ReactWeb",target:"_blank",rel:"noopener noreferrer"},"ReactWeb(G3)")),l.createElement("li",null,l.createElement("a",{href:"http://git.baifendian.com/bo.li/Percent_Vue_Admin.git",target:"_blank",rel:"noopener noreferrer"},"PercentVue(G3)")),l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/VuePro",target:"_blank",rel:"noopener noreferrer"},"VuePro(G1)")))))))),l.createElement("li",{className:s},l.createElement("dl",null,l.createElement("dt",null,"帮助"),l.createElement("dd",null,l.createElement("ul",{className:u},l.createElement("li",{className:m},l.createElement("a",{href:c.Jk.O,target:"_blank",rel:"noopener noreferrer"},l.createElement(o.A,null),l.createElement("span",{className:p},"Gitlib"))),l.createElement("li",{className:m},l.createElement(a.N_,{to:"/adhere/changelog"},l.createElement(n.A,null),l.createElement("span",{className:p},"更新日志"))))))))},96465:(e,r,t)=>{t.d(r,{Wc:()=>p,I7:()=>d,e6:()=>f,wn:()=>m,Ay:()=>E});var n=t(71860),o=t(24370),l=t(26322),a=t(73376);const c="xpgSrI_YtLJ2DLwvO1Cq",i="KHCbMGLwqpj8TVQmsF1m",{PlayGroundPageContext:s,PlayGroundPage:u}=o.A,{Section:m,CodeBoxSection:p,PropsSection:f,FunctionPropsSection:d}=u;const E=function(e){let{children:r,onScrollBottom:t,distance:o=50,...m}=e;const[p,f]=(0,l.useState)(),d=(0,l.useRef)();return(0,l.useEffect)((()=>{f(d.current)}),[]),l.createElement(s.Provider,{value:{scrollEl:null!=p?p:document.body}},l.createElement(u,(0,n.A)({ref:d,className:c,anchorNavigationAutoClassName:i,anchorNavigationFixedClassName:i},m),r,l.createElement(a.A,null)))}},38948:e=>{e.exports=JSON.parse('{"rE":"2.11.0","Jk":{"O":"https://github.com/playerljc/adhere"}}')}}]);