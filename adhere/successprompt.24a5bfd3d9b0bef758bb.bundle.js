"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[8911],{64206:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(83754),c=n(28484),o=n(20725),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},a={openSuccessMessage:function(e,t,n){return r.ZP.success(e||o.ZP.v("操作成功"),t,n)},openSuccessDialog:function(e){return c.Z.success(u({title:o.ZP.v("提示"),content:o.ZP.v("操作成功"),mask:!1,maskClosable:!0},null!=e?e:{}))}},s=n(17464),l=n(90171),i=n(96032),p=()=>l.createElement(i.ZP,null,l.createElement(i.$0,{title:"SuccessPrompt"},l.createElement("p",null,l.createElement("p",null,"成功的提示(就是为了全局统一)"))),l.createElement(i.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:l},cardProps:{description:{title:"基本使用",info:"基本使用"}},codeText:"\n  import React from 'react';\n  import { Button } from 'antd';\n  import { SuccessPrompt } from '@baifendian/adhere';\n\n  <Button\n    type=\"primary\"\n    onClick={() => {\n      SuccessPrompt.openSuccessMessage('操作成功');\n    }}\n  >\n    显示成功提示\n  </Button>\n    ",type:"PlayGround",renderChildren:()=>l.createElement(s.ZP,{type:"primary",onClick:()=>{a.openSuccessMessage("操作成功")}},"显示成功提示")}]}),l.createElement(i.ae,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"SuccessPrompt",desc:"显示成功提示",modifier:"global",params:[{name:"text",desc:"提示的文本",type:"string | React.ReactElement",defaultVal:"",required:"true"}],returnType:"void",returnDesc:""}]}]}))},96032:function(e,t,n){n.d(t,{$0:function(){return s},ae:function(){return p},e0:function(){return l},sB:function(){return i}});var r=n(70517),c=n(6692),o=n(90171);const{PlayGroundPageContext:u,PlayGroundPage:a}=c.default,{Section:s,CodeBoxSection:l,PropsSection:i,FunctionPropsSection:p}=a;t.ZP=function(e){let{children:t,...n}=e;const[c,s]=(0,o.useState)(),l=(0,o.useRef)();return(0,o.useEffect)((()=>{s(l.current.parentElement.parentElement)}),[]),o.createElement(u.Provider,{value:{scrollEl:c}},o.createElement(a,(0,r.Z)({ref:l},n),t))}}}]);