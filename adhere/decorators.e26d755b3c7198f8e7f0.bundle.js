"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[6917],{20644:(r,e,n)=>{n.r(e),n.d(e,{default:()=>M});var t,o=n(26322),a=n(19994),c=n(1853);const d=(0,c.A.ReactErrorBoundaries)(t=class extends o.Component{render(){return o.createElement("div",null,"MyComponent")}})||t;const i=c.A.ReactErrorBoundaries((function(){return o.createElement("div",null,"MyComponent")}));c.A.ReactErrorBoundaries.setDefaultErrorUI(o.createElement("div",null,"error"));const l=c.A.ReactErrorBoundaries((function(){return o.createElement("div",null,"MyComponent")}));function s(){return o.createElement("div",null,"MyComponent")}s.getReactErrorBoundariesErrorUI=()=>o.createElement("div",null,"error");const u=c.A.ReactErrorBoundaries(s);var p,m=n(20527);const E=(0,c.A.ReactErrorBoundaries)(p=class extends o.Component{constructor(){super(...arguments),(0,m.A)(this,"getReactErrorBoundariesErrorUI",(()=>o.createElement("div",null,"error")))}render(){return o.createElement("div",null,"MyComponent")}})||p;var y,f,R=n(41501);const C=(y=c.A.ReactAutoTryCatch((function(r){console.error(r)})),f=class extends o.Component{display(r){return r}render(){return o.createElement("div",null,"MyComponent")}},(0,R.A)(f.prototype,"display",[y],Object.getOwnPropertyDescriptor(f.prototype,"display"),f.prototype),f);var v,h;const B=(v=c.A.ReactAop((function(){console.log("start")}),(function(){console.log("end")})),h=class extends o.Component{display(r){return r}render(){return o.createElement("div",null,"MyComponent")}},(0,R.A)(h.prototype,"display",[v],Object.getOwnPropertyDescriptor(h.prototype,"display"),h.prototype),h),M=()=>o.createElement(a.Ay,null,o.createElement(a.wn,{title:"Decorators"},o.createElement("h1",null,"ReactErrorBoundaries(React错误边界处理，防止白屏操作)"),o.createElement("ul",null,o.createElement("li",null,"- class 组件使用@方式使用"),o.createElement("li",null,"- 函数组件使用高阶函数方式使用")),o.createElement("h1",null,"ReactAutoTryCatch - 为成员属性方法自动添加try/catch"),o.createElement("h1",null,"ReactAop - 为成员属性方法加入aop功能")),o.createElement(a.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"ReactErrorBoundaries - class组件的使用",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactErrorBoundaries - class组件的使用",info:"ReactErrorBoundaries - class组件的使用"}},type:"PlayGround",codeText:"import React from 'react';\r\nimport { Decorators } from '@baifendian/adhere';\r\n\r\n@Decorators.ReactErrorBoundaries\r\nclass MyComponent extends React.Component {\r\n  render() {\r\n    return (\r\n      <div>\r\n        MyComponent\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nexport default MyComponent;\r\n",renderChildren:()=>o.createElement(d,null)},{id:"p2",name:"ReactErrorBoundaries - 函数组件的使用",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactErrorBoundaries - 函数组件的使用",info:"ReactErrorBoundaries - 函数组件的使用"}},type:"PlayGround",codeText:"import React from 'react';\r\n\r\nimport { Decorators } from '@baifendian/adhere';\r\n\r\n/**\r\n * MyComponent\r\n * @return {JSX.Element}\r\n * @constructor\r\n */\r\nfunction MyComponent() {\r\n  return <div>MyComponent</div>;\r\n}\r\n\r\n// 函数组件异常包装\r\nexport default Decorators.ReactErrorBoundaries(MyComponent);\r\n",renderChildren:()=>o.createElement(i,null)},{id:"p3",name:"ReactErrorBoundaries - 定义全局缺省的错误UI",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactErrorBoundaries - 定义全局缺省的错误UI",info:"ReactErrorBoundaries - 定义全局缺省的错误UI"}},type:"PlayGround",codeText:"import React from 'react';\r\n\r\nimport { Decorators } from '@baifendian/adhere';\r\n\r\nfunction MyComponent() {\r\n  return <div>MyComponent</div>;\r\n}\r\n\r\n// 设置全局缺省UI\r\nDecorators.ReactErrorBoundaries.setDefaultErrorUI(<div>error</div>);\r\n\r\nexport default Decorators.ReactErrorBoundaries(MyComponent);\r\n",renderChildren:()=>o.createElement(l,null)},{id:"p4",name:"ReactErrorBoundaries - 自定义组件的错误UI(1)",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactErrorBoundaries - 自定义组件的错误UI(1)",info:"ReactErrorBoundaries - 自定义组件的错误UI(1)"}},type:"PlayGround",codeText:"import React from 'react';\r\n\r\nimport { Decorators } from '@baifendian/adhere';\r\n\r\nfunction MyComponent() {\r\n  return <div>MyComponent</div>;\r\n}\r\n\r\n// 自定义组件发生错误时候显示的UI(类组件也是一样)\r\nMyComponent.getReactErrorBoundariesErrorUI = () => <div>error</div>;\r\n\r\nexport default Decorators.ReactErrorBoundaries(MyComponent);\r\n",renderChildren:()=>o.createElement(u,null)},{id:"p5",name:"ReactErrorBoundaries - 自定义组件的错误UI(2)",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactErrorBoundaries - 自定义组件的错误UI(2)",info:"ReactErrorBoundaries - 自定义组件的错误UI(2)"}},type:"PlayGround",codeText:"import React from 'react';\r\nimport { Decorators } from '@baifendian/adhere';\r\n\r\n@Decorators.ReactErrorBoundaries\r\nclass MyComponent extends React.Component {\r\n  // 自定义组件发生错误时候显示的UI(类组件也是一样)\r\n  getReactErrorBoundariesErrorUI = () => <div>error</div>\r\n\r\n  render() {\r\n    return <div>MyComponent</div>\r\n  }\r\n}\r\n\r\nexport default MyComponent;\r\n",renderChildren:()=>o.createElement(E,null)},{id:"p6",name:"ReactAutoTryCatch",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactAutoTryCatch",info:"ReactAutoTryCatch"}},type:"PlayGround",codeText:"import React from 'react';\r\nimport { Decorators } from '@baifendian/adhere';\r\n\r\nclass MyComponent extends React.Component {\r\n  // 这里只能使用function，不能使用箭头函数，可以再function过去到this\r\n  @Decorators.ReactAutoTryCatch(function(e){\r\n    console.error(e);\r\n  })\r\n  display(name) {\r\n    return name;\r\n  }\r\n\r\n  render() {\r\n    return <div>MyComponent</div>\r\n  }\r\n}\r\n\r\nexport default MyComponent;\r\n",renderChildren:()=>o.createElement(C,null)},{id:"p7",name:"ReactAop",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactAop",info:"ReactAop"}},type:"PlayGround",codeText:"import React from 'react';\r\nimport { Decorators } from '@baifendian/adhere';\r\n\r\nclass MyComponent extends React.Component {\r\n  // 这里只能使用function，不能使用箭头函数，可以再function过去到this\r\n  @Decorators.ReactAop(function(){\r\n    console.log('start');\r\n  }, function(){\r\n    console.log('end');\r\n  })\r\n  display(name) {\r\n    return name;\r\n  }\r\n\r\n  render() {\r\n    return <div>MyComponent</div>\r\n  }\r\n}\r\n\r\nexport default MyComponent;\r\n",renderChildren:()=>o.createElement(B,null)}]}))},19994:(r,e,n)=>{n.d(e,{Ay:()=>p,I7:()=>u,Wc:()=>l,e6:()=>s,wn:()=>i});var t=n(71860),o=n(24370),a=n(26322);const{PlayGroundPageContext:c,PlayGroundPage:d}=o.A,{Section:i,CodeBoxSection:l,PropsSection:s,FunctionPropsSection:u}=d;const p=function(r){let{children:e,onScrollBottom:n,distance:o=50,...i}=r;const[l,s]=(0,a.useState)(),u=(0,a.useRef)(),p=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{function r(){const r=e.scrollHeight-e.offsetHeight,t=e.scrollTop;if(n&&Math.abs(t-r)<=o){if(p.current)return;p.current=!0,null==n||n().then((()=>{p.current=!1}))}}const e=u.current.parentElement.parentElement;return e.addEventListener("scroll",r),s(e),()=>{e.removeEventListener("scroll",r)}}),[]),a.createElement(c.Provider,{value:{scrollEl:l}},a.createElement(d,(0,t.A)({ref:u},i),e))}}}]);