"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[9201],{97221:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var t,o=r(69103),i=(t=function(e,n){return(t=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,n){e.__proto__=n}:function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}))(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),c=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return i(n,e),n.prototype.emitError=function(e){this.emit("error",e)},n.prototype.add=function(e){e.on("error",this.emitError)},n.prototype.bind=function(e){var n=this;return function(){var r=Array.prototype.slice.call(arguments);try{e.apply(null,r)}catch(r){n.emitError(r)}}},n.prototype.dispose=function(){return this.removeAllListeners(),this},n.prototype.enter=function(){return this},n.prototype.exit=function(){return this},n.prototype.intercept=function(e){var n=this;return function(r){if(r)n.emitError(r);else{var t=Array.prototype.slice.call(arguments,1);try{e.apply(null,t)}catch(r){n.emitError(r)}}}},n.prototype.remove=function(e){e.removeListener("error",this.emitError)},n.prototype.run=function(e){try{e()}catch(e){this.emitError(e)}return this},n}(r.n(o)()),u={createDomain:function(){return new c},create:function(){return new c}},a=r(17464),s=r(90171),l=r(96032),p="h4ihZPUv1rDiVvBArfhl",m=()=>{const e=(0,s.useRef)(),n=(0,s.useRef)();return s.createElement(l.ZP,null,s.createElement(l.$0,{title:"Domain"},s.createElement("p",null,"Domain的浏览器端实现")),s.createElement(l.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"run方法",mode:"code",scope:{React:s},cardProps:{description:{title:"run方法",info:"基本操作(run方法)"}},codeText:"\n  import React,{useRef} from 'react';\n  import { Button } from 'antd';\n  import { Domain } from '@baifendian/adhere';\n\n  const console1Ref = useRef();\n\n  <Button\n    type=\"primary\"\n    onClick={() => {\n      const d = Domain.create();\n\n      d.on('error', function (e) {\n        const content = console1Ref.current.innerHTML;\n        console1Ref.current.innerHTML = `${content}${content ? '</br>' : ''}${e.toString()}`;\n        console1Ref.current.scrollTop = console1Ref.current.scrollHeight - console1Ref.current.offsetHeight;\n      });\n\n      d.run(function () {\n        noexists();\n      });\n    }}\n  >\n    运行\n  </Button>\n      ",type:"PlayGround",renderChildren:()=>s.createElement(s.Fragment,null,s.createElement(a.ZP,{type:"primary",onClick:()=>{const n=u.create();n.on("error",(function(n){const r=e.current.innerHTML;e.current.innerHTML=`${r}${r?"</br>":""}${n.toString()}`,e.current.scrollTop=e.current.scrollHeight-e.current.offsetHeight})),n.run((function(){noexists()}))}},"运行"),s.createElement("div",{className:p,ref:e}))},{id:"p2",name:"bind方法",mode:"code",scope:{React:s},cardProps:{description:{title:"bind方法",info:"基本操作(bind方法)"}},codeText:"\n  import React,{useRef} from 'react';\n  import { Button } from 'antd';\n  import { Domain } from '@baifendian/adhere';\n\n  const console2Ref = useRef();\n\n  <Button\n    type=\"primary\"\n    onClick={() => {\n      const d = Domain.create();\n\n      d.on('error', function (e) {\n        const content = console1Ref.current.innerHTML;\n        console2Ref.current.innerHTML = `${content}${content ? '</br>' : ''}${e.toString()}`;\n        console2Ref.current.scrollTop = console2Ref.current.scrollHeight - console2Ref.current.offsetHeight;\n      });\n\n      function run() {\n        return new Promise(\n          d.bind((resolve) => {\n            noexists();\n            resolve();\n          }),\n        );\n      }\n\n      run();\n    }}\n  >\n    运行\n  </Button>\n        ",type:"PlayGround",renderChildren:()=>s.createElement(s.Fragment,null,s.createElement(a.ZP,{type:"primary",onClick:()=>{const e=u.create();e.on("error",(function(e){const r=n.current.innerHTML;n.current.innerHTML=`${r}${r?"</br>":""}${e.toString()}`,n.current.scrollTop=n.current.scrollHeight-n.current.offsetHeight})),new Promise(e.bind((e=>{noexists(),e()})))}},"运行"),s.createElement("div",{className:p,ref:n}))}]}),s.createElement(l.ae,{title:"Api",config:[{border:!0,title:"Domain",data:[{name:"createDomain",desc:"创建Domain对象",modifier:"public",params:[],returnType:"IDomain",returnDesc:""},{name:"create",desc:"创建Domain对象",modifier:"public",params:[],returnType:"IDomain",returnDesc:""}]},{border:!0,title:"IDomain",data:[{name:"add",desc:"add",modifier:"public",params:[{name:"emitter",desc:"",type:"EventEmitter",defaultVal:"",required:""}],returnType:"void",returnDesc:""},{name:"bind",desc:"bind",modifier:"public",params:[{name:"fn",desc:"",type:"Function",defaultVal:"",required:""}],returnType:"Function",returnDesc:""},{name:"dispose",desc:"dispose",modifier:"public",params:[],returnType:"IDomain",returnDesc:""},{name:"enter",desc:"enter",modifier:"public",params:[],returnType:"IDomain",returnDesc:""},{name:"exit",desc:"exit",modifier:"public",params:[],returnType:"IDomain",returnDesc:""},{name:"intercept",desc:"intercept",modifier:"public",params:[{name:"fn",desc:"",type:"Function",defaultVal:"",required:""}],returnType:"Function",returnDesc:""},{name:"remove",desc:"remove",modifier:"public",params:[{name:"emitter",desc:"",type:"EventEmitter",defaultVal:"",required:""}],returnType:"void",returnDesc:""},{name:"run",desc:"run",modifier:"public",params:[{name:"fn",desc:"",type:"Function",defaultVal:"",required:""}],returnType:"IDomain",returnDesc:""}]}]}))}},96032:function(e,n,r){r.d(n,{$0:function(){return a},ae:function(){return p},e0:function(){return s},sB:function(){return l}});var t=r(70517),o=r(6692),i=r(90171);const{PlayGroundPageContext:c,PlayGroundPage:u}=o.default,{Section:a,CodeBoxSection:s,PropsSection:l,FunctionPropsSection:p}=u;n.ZP=function(e){let{children:n,...r}=e;const[o,a]=(0,i.useState)(),s=(0,i.useRef)();return(0,i.useEffect)((()=>{a(s.current.parentElement.parentElement)}),[]),i.createElement(c.Provider,{value:{scrollEl:o}},i.createElement(u,(0,t.Z)({ref:s},r),n))}}}]);