"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[7421],{8600:(e,n,r)=>{r.r(n),r.d(n,{default:()=>s});var t=r(26322),o=r(19994),a=r(44165),l=r(80711);const c=()=>t.createElement(l.Ay,{type:"primary",onClick:()=>{a.A.openWarnMessage("操作异常")}},"显示警告提示"),i=()=>t.createElement(l.Ay,{type:"primary",onClick:()=>{a.A.openWarnDialog({title:"提示",content:"操作异常"})}},"显示警告提示"),s=()=>t.createElement(o.Ay,null,t.createElement(o.wn,{title:"WarnPrompt"},t.createElement("p",null,t.createElement("p",null,"警告的提示(就是为了全局统一)"))),t.createElement(o.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:t},cardProps:{description:{title:"使用message",info:"openWarnMessage"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { WarnPrompt } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  return (\r\n    <Button\r\n      type=\"primary\"\r\n      onClick={() => {\r\n        WarnPrompt.openWarnMessage('操作异常');\r\n      }}\r\n    >\r\n      显示警告提示\r\n    </Button>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(c,null)},{id:"p2",name:"使用Dialog",mode:"code",scope:{React:t},cardProps:{description:{title:"使用Dialog",info:"openWarnDialog"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { WarnPrompt } from '@baifendian/adhere';\r\n\r\nexport default () => (\r\n  <Button\r\n    type=\"primary\"\r\n    onClick={() => {\r\n      WarnPrompt.openWarnDialog({\r\n        title: '提示',\r\n        content: '操作异常',\r\n      });\r\n    }}\r\n  >\r\n    显示警告提示\r\n  </Button>\r\n);\r\n",renderChildren:()=>t.createElement(i,null)}]}),t.createElement(o.I7,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"openWarnMessage",desc:"显示警告提示",modifier:"global",params:[{name:"content",desc:"提示的文本",type:"JointContent",defaultVal:"",required:"false"},{name:"duration",desc:"显示的时间",type:"number | VoidFunction",defaultVal:"",required:"false"},{name:"onClose",desc:"关闭的事件",type:"VoidFunction",defaultVal:"",required:"false"}],returnType:"MessageType",returnDesc:""},{name:"openWarnDialog",desc:"显示警告提示",modifier:"global",params:[{name:"title",desc:"提示的标题",type:"React.ReactNode",defaultVal:"",required:"false"},{name:"content",desc:"提示的内容",type:"React.ReactNode",defaultVal:"",required:"false"},{name:"mask",desc:"是否显示遮罩",type:"boolean",defaultVal:"",required:"false"},{name:"maskClosable",desc:"遮罩是否可以点击",type:"boolean",defaultVal:"",required:"true"},{name:"duration",desc:"持续的时间",type:"number",defaultVal:"3000",required:"false"}],returnType:"MessageType",returnDesc:""}]}]}))},19994:(e,n,r)=>{r.d(n,{Ay:()=>p,I7:()=>d,Wc:()=>s,e6:()=>u,wn:()=>i});var t=r(71860),o=r(24370),a=r(26322);const{PlayGroundPageContext:l,PlayGroundPage:c}=o.A,{Section:i,CodeBoxSection:s,PropsSection:u,FunctionPropsSection:d}=c;const p=function(e){let{children:n,onScrollBottom:r,distance:o=50,...i}=e;const[s,u]=(0,a.useState)(),d=(0,a.useRef)(),p=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{function e(){const e=n.scrollHeight-n.offsetHeight,t=n.scrollTop;if(r&&Math.abs(t-e)<=o){if(p.current)return;p.current=!0,null==r||r().then((()=>{p.current=!1}))}}const n=d.current.parentElement.parentElement;return n.addEventListener("scroll",e),u(n),()=>{n.removeEventListener("scroll",e)}}),[]),a.createElement(l.Provider,{value:{scrollEl:s}},a.createElement(c,(0,t.A)({ref:d},i),n))}},44165:(e,n,r)=>{r.d(n,{A:()=>s});var t,o=r(74713),a=r(27476),l=r(59418),c=function(){return(c=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},i=function(e,n){var r={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(r[o[t]]=e[o[t]]);return r};const s={openWarnMessage:function(e,n,r){return o.Ay.warning(e,n,r)},openWarnDialog:function(e){var n=void 0===(n=e.duration)?3e3:n,r=(e=i(e,["duration"]),a.A.warning(c({title:l.Ay.v("提示"),mask:!1,maskClosable:!0,footer:null},null!=e?e:{})));return n&&(t&&clearTimeout(t),t=setTimeout((function(){r.destroy()}),n)),r}}}}]);