"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[7277],{72097:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(26322),l=r(96465),a=r(81703),c=r(59418),o=r(85820),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},m=function(e,t){var r={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(r[l[n]]=e[l[n]]);return r},u=(0,n.memo)((function(e){var t=e.className,r=e.style,l=e.children;return n.createElement("div",{className:"".concat("adhere-ui-important-confirm"," ").concat(null!=t?t:""),style:null!=r?r:{},onClick:function(t){t.stopPropagation(),e.children,t=m(e,["children"]),u.open(i({},t))}},l)}));u.displayName="ImportantConfirm",u.open=function(e){var t=e.success;e=m(e,["success"]);a.A.Confirm(i(i({},e),{title:e.title||c.Ay.v("提示"),text:e.text||"".concat(c.Ay.v("真的要执行此操作吗"),"?"),zIndex:"zIndex"in e?e.zIndex:o.A.Dict.value.ResourceNormalMaxZIndex.value,icon:n.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjEwNDIzMTA1Mjk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyLjMgOTI4LjRDMjgzIDkyOC40IDk3LjIgNzQyLjUgOTcuMiA1MTMuM1MyODMgOTguMiA1MTIuMyA5OC4yIDkyNy40IDI4NCA5MjcuNCA1MTMuMyA3NDEuNSA5MjguNCA1MTIuMyA5MjguNHogbTAtNjc0LjVjLTI4LjQgMC01MS4xIDIzLjUtNTAuMiA1MS45bDguMiAyNDguNWMwLjggMjIuNiAxOS4zIDQwLjYgNDEuOSA0MC42IDIyLjYgMCA0MS4yLTE3LjkgNDEuOS00MC42bDguMi0yNDguNWMxLjEtMjguNC0yMS42LTUxLjktNTAtNTEuOXogbTAgNDE1LjFjLTEzLjctMC4yLTI2LjkgNS4yLTM2LjYgMTQuOS0xMCA5LjQtMTUuNSAyMi41LTE1LjMgMzYuMiAwIDE0LjUgNS4xIDI2LjYgMTUuMyAzNi40IDkuNyA5LjYgMjIuOSAxNC45IDM2LjYgMTQuNyAxMy43IDAuMiAyNi44LTUuMSAzNi42LTE0LjcgMTAtOS40IDE1LjYtMjIuNyAxNS4zLTM2LjQgMC4yLTEzLjctNS4zLTI2LjgtMTUuMy0zNi4yLTkuNy05LjgtMjIuOS0xNS4xLTM2LjYtMTQuOXoiIHAtaWQ9IjIxMjQiIGZpbGw9IiNkODFlMDYiPjwvcGF0aD48L3N2Zz4=",alt:"",width:32}),onSuccess:function(){return new Promise((function(e,r){t?t().then((function(){return e()})).catch((function(){return r()})):e()}))}}))};const s=u,p=()=>n.createElement(s,{success:()=>new Promise((e=>{alert("点击了确认"),e()}))},n.createElement("a",null,"删除")),d=()=>n.createElement("a",{onClick:()=>{s.open({success:()=>new Promise((e=>{alert("点击了确认"),e()}))})}},"删除"),f=()=>n.createElement(l.Ay,null,n.createElement(l.wn,{title:"ImportantConfirm"},n.createElement("p",null,"重要操作确认提示(使用的是antd的Modal)"),n.createElement("p",null,"重要操作确认提示，确认后在执行操作")),n.createElement(l.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:n},cardProps:{description:{title:"基本使用",info:"基本使用"}},type:"PlayGround",codeText:"import React from 'react';\r\n\r\nimport { ImportantConfirm } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  return (\r\n    <ImportantConfirm\r\n      success={() => {\r\n        return new Promise((resolve) => {\r\n          alert('点击了确认');\r\n\r\n          resolve();\r\n        });\r\n      }}\r\n    >\r\n      <a>删除</a>\r\n    </ImportantConfirm>\r\n  );\r\n};\r\n",renderChildren:()=>n.createElement(p,null)},{id:"p2",name:"ImportantConfirm.open",mode:"code",scope:{React:n},cardProps:{description:{title:"ImportantConfirm.open",info:"ImportantConfirm.open"}},type:"PlayGround",codeText:"import React from 'react';\r\n\r\nimport { ImportantConfirm } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  return (\r\n    <a\r\n      onClick={() => {\r\n        ImportantConfirm.open({\r\n          success: () =>\r\n            new Promise((resolve) => {\r\n              alert('点击了确认');\r\n\r\n              resolve();\r\n            }),\r\n        });\r\n      }}\r\n    >\r\n      删除\r\n    </a>\r\n  );\r\n};\r\n",renderChildren:()=>n.createElement(d,null)}]}),n.createElement(l.e6,{title:"Props",config:[{border:!0,title:"属性",data:[{params:"zIndex",desc:"显示的层级",type:"number",defaultVal:"19999"},{params:"className",desc:"附加的样式",type:"string",defaultVal:""},{params:"success",desc:"确认后的回调，此方法需要返回Promise对象",type:"Function",defaultVal:"() => {}"},{name:"title",desc:"标题",type:"string",defaultVal:""},{name:"text",desc:"文本",type:"string",defaultVal:""},{name:"icon",desc:"图标",type:"string",defaultVal:""},{params:"children",desc:"子组件",type:"React.ReactElement",defaultVal:"null"}]}]}),n.createElement(l.I7,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"open",desc:"打开确认对话框",modifier:"static",params:[{name:"success",desc:"成功的回调，此方法需要返回Promise对象",type:"Function",defaultVal:"() => {}",required:"true"},{name:"title",desc:"标题",type:"string",defaultVal:"",required:"false"},{name:"text",desc:"文本",type:"string",defaultVal:"",required:"false"},{name:"icon",desc:"图标",type:"string",defaultVal:"",required:"false"},{name:"zIndex",desc:"显示层级",type:"number",defaultVal:"19999",required:"false"}],returnType:"void",returnDesc:""}]}]}))},73376:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(86662),l=r(86056),a=r(26322),c=r(90264),o=r(38948);const i="fdFKYQbTadYRAFXyIsyC",m="TGQfKkX166qX5wG5Oi6O",u="xoMDGjw3kWAGwRmDVR2l",s="juDjVuIAwAS6vlI_lwTq",p="s2U_wfx5rmRlV8iKcHg5",d=()=>a.createElement("ul",{className:i},a.createElement("li",{className:m},a.createElement("dl",null,a.createElement("dt",null,"相关资源"),a.createElement("dd",null,a.createElement("ul",{className:u},a.createElement("li",{className:s},"自主研发",a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:"http://49.232.163.126:8084/",target:"_blank",rel:"noopener noreferrer"},"adherev")),a.createElement("li",null,a.createElement("a",{href:"https://github.com/playerljc/CTSJ-BUILD",target:"_blank",rel:"noopener noreferrer"},"CTSJ-BUILD")),a.createElement("li",null,a.createElement("a",{href:"https://github.com/playerljc/CTSJ-BUILDV",target:"_blank",rel:"noopener noreferrer"},"CTSJ-BUILDV")),a.createElement("li",null,a.createElement("a",{href:"https://github.com/playerljc/CTSJ-STATE",target:"_blank",rel:"noopener noreferrer"},"CTSJ-STATE")),a.createElement("li",null,a.createElement("a",{href:"https://github.com/playerljc/CTSJ-ROUTER",target:"_blank",rel:"noopener noreferrer"},"CTSJ-ROUTER")),a.createElement("li",null,a.createElement("a",{href:"https://github.com/playerljc/CTSJ-VuexGenerator",target:"_blank",rel:"noopener noreferrer"},"CTSJ-VuexGenerator")),a.createElement("li",null,a.createElement("a",{href:"https://github.com/playerljc/CTSJ-React-SSR",target:"_blank",rel:"noopener noreferrer"},"CTSJ-React-SSR")),a.createElement("li",null,a.createElement("a",{href:"https://github.com/playerljc/CTSJ-DOC",target:"_blank",rel:"noopener noreferrer"},"CTSJ-DOC")),a.createElement("li",null,a.createElement("a",{href:"https://github.com/playerljc/CTSJ-DvaGenerator",target:"_blank",rel:"noopener noreferrer"},"CTSJ-DvaGenerator")),a.createElement("li",null,a.createElement("a",{href:"https://github.com/playerljc/WebViewJavascriptBridge",target:"_blank",rel:"noopener noreferrer"},"WebViewJavascriptBridge")))),a.createElement("li",{className:s},"模板工程",a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/adhere",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)")),a.createElement("li",null,a.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/polyfill",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)(支持IE)")),a.createElement("li",null,a.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/adhere-webpack5-js-ssr",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)(SSR)")),a.createElement("li",null,a.createElement("a",{href:"https://gitee.com/playerljc/AntPro",target:"_blank",rel:"noopener noreferrer"},"AntPro(G1)")),a.createElement("li",null,a.createElement("a",{href:"http://git.baifendian.com/dongxu.guo/ReactWeb",target:"_blank",rel:"noopener noreferrer"},"ReactWeb(G3)")),a.createElement("li",null,a.createElement("a",{href:"http://git.baifendian.com/bo.li/Percent_Vue_Admin.git",target:"_blank",rel:"noopener noreferrer"},"PercentVue(G3)")),a.createElement("li",null,a.createElement("a",{href:"https://gitee.com/playerljc/VuePro",target:"_blank",rel:"noopener noreferrer"},"VuePro(G1)")))))))),a.createElement("li",{className:m},a.createElement("dl",null,a.createElement("dt",null,"帮助"),a.createElement("dd",null,a.createElement("ul",{className:u},a.createElement("li",{className:s},a.createElement("a",{href:o.Jk.O,target:"_blank",rel:"noopener noreferrer"},a.createElement(l.A,null),a.createElement("span",{className:p},"Gitlib"))),a.createElement("li",{className:s},a.createElement(c.N_,{to:"/adhere/changelog"},a.createElement(n.A,null),a.createElement("span",{className:p},"更新日志"))))))))},96465:(e,t,r)=>{r.d(t,{Wc:()=>p,I7:()=>f,e6:()=>d,wn:()=>s,Ay:()=>g});var n=r(71860),l=r(24370),a=r(26322),c=r(73376);const o="xpgSrI_YtLJ2DLwvO1Cq",i="KHCbMGLwqpj8TVQmsF1m",{PlayGroundPageContext:m,PlayGroundPage:u}=l.A,{Section:s,CodeBoxSection:p,PropsSection:d,FunctionPropsSection:f}=u;const g=function(e){let{children:t,onScrollBottom:r,distance:l=50,...s}=e;const[p,d]=(0,a.useState)(),f=(0,a.useRef)();return(0,a.useEffect)((()=>{d(f.current)}),[]),a.createElement(m.Provider,{value:{scrollEl:null!=p?p:document.body}},a.createElement(u,(0,n.A)({ref:f,className:o,anchorNavigationAutoClassName:i,anchorNavigationFixedClassName:i},s),t,a.createElement(c.A,null)))}},38948:e=>{e.exports=JSON.parse('{"rE":"2.11.0","Jk":{"O":"https://github.com/playerljc/adhere"}}')}}]);