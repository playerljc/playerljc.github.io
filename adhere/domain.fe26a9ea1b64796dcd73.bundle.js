"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[3059],{51713:(e,r,n)=>{n.r(r),n.d(r,{default:()=>d});var t,o=n(26322),c=n(19994),i=n(64785),s=(t=function(e,r){return(t=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,r){e.__proto__=r}:function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}))(e,r)},function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}),u=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return s(r,e),r.prototype.emitError=function(e){this.emit("error",e)},r.prototype.add=function(e){e.on("error",this.emitError)},r.prototype.bind=function(e){var r=this;return function(){var n=Array.prototype.slice.call(arguments);try{e.apply(null,n)}catch(n){r.emitError(n)}}},r.prototype.dispose=function(){return this.removeAllListeners(),this},r.prototype.enter=function(){return this},r.prototype.exit=function(){return this},r.prototype.intercept=function(e){var r=this;return function(n){if(n)r.emitError(n);else{var t=Array.prototype.slice.call(arguments,1);try{e.apply(null,t)}catch(n){r.emitError(n)}}}},r.prototype.remove=function(e){e.removeListener("error",this.emitError)},r.prototype.run=function(e){try{e()}catch(e){this.emitError(e)}return this},r}(n.n(i)());const a={createDomain:function(){return new u},create:function(){return new u}};var l=n(80711);const p="Dmb4gBjev8uJh4xY2AFS",m=()=>{const e=(0,o.useRef)();return o.createElement(o.Fragment,null,o.createElement(l.Ay,{type:"primary",onClick:()=>{const r=a.create();r.on("error",(function(r){const n=e.current.innerHTML;e.current.innerHTML="".concat(n).concat(n?"</br>":"").concat(r.toString()),e.current.scrollTop=e.current.scrollHeight-e.current.offsetHeight})),r.run((function(){noexists()}))}},"运行"),o.createElement("div",{className:p,ref:e}))},f=()=>{const e=(0,o.useRef)();return o.createElement(o.Fragment,null,o.createElement(l.Ay,{type:"primary",onClick:()=>{const r=a.create();r.on("error",(function(r){const n=e.current.innerHTML;e.current.innerHTML="".concat(n).concat(n?"</br>":"").concat(r.toString()),e.current.scrollTop=e.current.scrollHeight-e.current.offsetHeight})),new Promise(r.bind((e=>{noexists(),e()})))}},"运行"),o.createElement("div",{className:p,ref:e}))},d=()=>o.createElement(c.Ay,null,o.createElement(c.wn,{title:"Domain"},o.createElement("p",null,"Domain的浏览器端实现")),o.createElement(c.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"run方法",mode:"code",scope:{React:o},cardProps:{description:{title:"run方法",info:"基本操作(run方法)"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React, { useRef } from 'react';\r\n\r\nimport { Domain } from '@baifendian/adhere';\r\n\r\nimport styles from '../index.less';\r\n\r\nexport default () => {\r\n  const console1Ref = useRef();\r\n\r\n  return (\r\n    <>\r\n      <Button\r\n        type=\"primary\"\r\n        onClick={() => {\r\n          const d = Domain.create();\r\n\r\n          d.on('error', function (e) {\r\n            const content = console1Ref.current.innerHTML;\r\n            console1Ref.current.innerHTML = `${content}${content ? `</br>` : ''}${e.toString()}`;\r\n            console1Ref.current.scrollTop =\r\n              console1Ref.current.scrollHeight - console1Ref.current.offsetHeight;\r\n          });\r\n\r\n          d.run(function () {\r\n            noexists();\r\n          });\r\n        }}\r\n      >\r\n        运行\r\n      </Button>\r\n      <div className={styles.Console} ref={console1Ref}></div>\r\n    </>\r\n  );\r\n};\r\n",renderChildren:()=>o.createElement(m,null)},{id:"p2",name:"bind方法",mode:"code",scope:{React:o},cardProps:{description:{title:"bind方法",info:"基本操作(bind方法)"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React, { useRef } from 'react';\r\n\r\nimport { Domain } from '@baifendian/adhere';\r\n\r\nimport styles from '../index.less';\r\n\r\nexport default () => {\r\n  const console2Ref = useRef();\r\n\r\n  return (\r\n    <>\r\n      <Button\r\n        type=\"primary\"\r\n        onClick={() => {\r\n          const d = Domain.create();\r\n\r\n          d.on('error', function (e) {\r\n            const content = console2Ref.current.innerHTML;\r\n            console2Ref.current.innerHTML = `${content}${content ? `</br>` : ''}${e.toString()}`;\r\n            console2Ref.current.scrollTop =\r\n              console2Ref.current.scrollHeight - console2Ref.current.offsetHeight;\r\n          });\r\n\r\n          function run() {\r\n            return new Promise(\r\n              d.bind((resolve) => {\r\n                noexists();\r\n                resolve();\r\n              }),\r\n            );\r\n          }\r\n\r\n          run();\r\n        }}\r\n      >\r\n        运行\r\n      </Button>\r\n      <div className={styles.Console} ref={console2Ref}></div>\r\n    </>\r\n  );\r\n};\r\n",renderChildren:()=>o.createElement(f,null)}]}),o.createElement(c.I7,{title:"Api",config:[{border:!0,title:"Domain",data:[{name:"createDomain",desc:"创建Domain对象",modifier:"public",params:[],returnType:"IDomain",returnDesc:""},{name:"create",desc:"创建Domain对象",modifier:"public",params:[],returnType:"IDomain",returnDesc:""}]},{border:!0,title:"IDomain",data:[{name:"add",desc:"add",modifier:"public",params:[{name:"emitter",desc:"",type:"EventEmitter",defaultVal:"",required:""}],returnType:"void",returnDesc:""},{name:"bind",desc:"bind",modifier:"public",params:[{name:"fn",desc:"",type:"Function",defaultVal:"",required:""}],returnType:"Function",returnDesc:""},{name:"dispose",desc:"dispose",modifier:"public",params:[],returnType:"IDomain",returnDesc:""},{name:"enter",desc:"enter",modifier:"public",params:[],returnType:"IDomain",returnDesc:""},{name:"exit",desc:"exit",modifier:"public",params:[],returnType:"IDomain",returnDesc:""},{name:"intercept",desc:"intercept",modifier:"public",params:[{name:"fn",desc:"",type:"Function",defaultVal:"",required:""}],returnType:"Function",returnDesc:""},{name:"remove",desc:"remove",modifier:"public",params:[{name:"emitter",desc:"",type:"EventEmitter",defaultVal:"",required:""}],returnType:"void",returnDesc:""},{name:"run",desc:"run",modifier:"public",params:[{name:"fn",desc:"",type:"Function",defaultVal:"",required:""}],returnType:"IDomain",returnDesc:""}]}]}))},19994:(e,r,n)=>{n.d(r,{Ay:()=>m,I7:()=>p,Wc:()=>a,e6:()=>l,wn:()=>u});var t=n(71860),o=n(24370),c=n(26322);const{PlayGroundPageContext:i,PlayGroundPage:s}=o.A,{Section:u,CodeBoxSection:a,PropsSection:l,FunctionPropsSection:p}=s;const m=function(e){let{children:r,onScrollBottom:n,distance:o=50,...u}=e;const[a,l]=(0,c.useState)(),p=(0,c.useRef)(),m=(0,c.useRef)(!1);return(0,c.useEffect)((()=>{function e(){const e=r.scrollHeight-r.offsetHeight,t=r.scrollTop;if(n&&Math.abs(t-e)<=o){if(m.current)return;m.current=!0,null==n||n().then((()=>{m.current=!1}))}}const r=p.current.parentElement.parentElement;return r.addEventListener("scroll",e),l(r),()=>{r.removeEventListener("scroll",e)}}),[]),c.createElement(i.Provider,{value:{scrollEl:a}},c.createElement(s,(0,t.A)({ref:p},u),r))}}}]);