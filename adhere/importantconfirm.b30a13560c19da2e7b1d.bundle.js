"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[9645],{655669:function(e,t,n){var r=n(690171),a=n(609613),c=n(355360),i=n(458860),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},u=function(e){var t=e.className,n=e.style,a=e.children;return r.createElement("div",{className:"".concat("adhere-ui-importantconfirm"," ").concat(null!=t?t:""),style:null!=n?n:{},onClick:function(t){t.stopPropagation(),e.children,t=l(e,["children"]),u.open(o({},t))}},a)};u.open=function(e){var t=e.success;e=l(e,["success"]);a.Z.Confirm(o(o({},e),{title:e.title||c.ZP.v("提示"),text:e.text||"".concat(c.ZP.v("真的要执行此操作码"),"?"),zIndex:"zIndex"in e?e.zIndex:i.Z.Dict.value.ResourceNormalMaxZIndex.value,icon:r.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjEwNDIzMTA1Mjk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyLjMgOTI4LjRDMjgzIDkyOC40IDk3LjIgNzQyLjUgOTcuMiA1MTMuM1MyODMgOTguMiA1MTIuMyA5OC4yIDkyNy40IDI4NCA5MjcuNCA1MTMuMyA3NDEuNSA5MjguNCA1MTIuMyA5MjguNHogbTAtNjc0LjVjLTI4LjQgMC01MS4xIDIzLjUtNTAuMiA1MS45bDguMiAyNDguNWMwLjggMjIuNiAxOS4zIDQwLjYgNDEuOSA0MC42IDIyLjYgMCA0MS4yLTE3LjkgNDEuOS00MC42bDguMi0yNDguNWMxLjEtMjguNC0yMS42LTUxLjktNTAtNTEuOXogbTAgNDE1LjFjLTEzLjctMC4yLTI2LjkgNS4yLTM2LjYgMTQuOS0xMCA5LjQtMTUuNSAyMi41LTE1LjMgMzYuMiAwIDE0LjUgNS4xIDI2LjYgMTUuMyAzNi40IDkuNyA5LjYgMjIuOSAxNC45IDM2LjYgMTQuNyAxMy43IDAuMiAyNi44LTUuMSAzNi42LTE0LjcgMTAtOS40IDE1LjYtMjIuNyAxNS4zLTM2LjQgMC4yLTEzLjctNS4zLTI2LjgtMTUuMy0zNi4yLTkuNy05LjgtMjIuOS0xNS4xLTM2LjYtMTQuOXoiIHAtaWQ9IjIxMjQiIGZpbGw9IiNkODFlMDYiPjwvcGF0aD48L3N2Zz4=",alt:"",width:32}),onSuccess:function(){return new Promise((function(e,n){t?t().then((function(){return e()})).catch((function(){return n()})):e()}))}}))},t.Z=u},46841:function(e,t,n){var r=n(655669);t.Z=r.Z},610122:function(e,t,n){n.r(t);var r=n(400959),a=n(690171),c=n(296032);t.default=()=>a.createElement(c.ZP,null,a.createElement(c.$0,{title:"ImportantConfirm"},a.createElement("p",null,"重要操作确认提示(使用的是antd的Modal)"),a.createElement("p",null,"重要操作确认提示，确认后在执行操作")),a.createElement(c.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:a},cardProps:{description:{title:"基本使用",info:"基本使用"}},codeText:"\n  import React from 'react';\n  import { ImportantConfirm } from '@baifendian/adhere';\n\n  <ImportantConfirm\n    success={() => {\n      return new Promise((resolve) => {\n        alert('点击了确认');\n\n        resolve();\n      });\n    }}\n  >\n    <a>删除</a>\n  </ImportantConfirm>\n      ",type:"PlayGround",renderChildren:()=>a.createElement(r.Z,{success:()=>new Promise((e=>{alert("点击了确认"),e()}))},a.createElement("a",null,"删除"))},{id:"p2",name:"ImportantConfirm.open",mode:"code",scope:{React:a},cardProps:{description:{title:"ImportantConfirm.open",info:"ImportantConfirm.open"}},codeText:"\n  import React from 'react';\n  import { ImportantConfirm } from '@baifendian/adhere';\n\n  <a\n    onClick={() => {\n      ImportantConfirm.open(() => {\n        return new Promise((resolve) => {\n          alert('点击了确认');\n\n          resolve();\n        });\n      });\n    }}\n  >\n    删除\n  </a>\n      ",type:"PlayGround",renderChildren:()=>a.createElement("a",{onClick:()=>{r.Z.open({success:()=>new Promise((e=>{alert("点击了确认"),e()}))})}},"删除")}]}),a.createElement(c.sB,{title:"Props",config:[{border:!0,title:"属性",data:[{params:"zIndex",desc:"显示的层级",type:"number",defaultVal:"19999"},{params:"className",desc:"附加的样式",type:"string",defaultVal:""},{params:"success",desc:"确认后的回调，此方法需要返回Promise对象",type:"Function",defaultVal:"() => {}"},{name:"title",desc:"标题",type:"string",defaultVal:""},{name:"text",desc:"文本",type:"string",defaultVal:""},{name:"icon",desc:"图标",type:"string",defaultVal:""},{params:"children",desc:"子组件",type:"React.ReactElement",defaultVal:"null"}]}]}),a.createElement(c.ae,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"open",desc:"打开确认对话框",modifier:"static",params:[{name:"success",desc:"成功的回调，此方法需要返回Promise对象",type:"Function",defaultVal:"() => {}",required:"true"},{name:"title",desc:"标题",type:"string",defaultVal:"",required:"false"},{name:"text",desc:"文本",type:"string",defaultVal:"",required:"false"},{name:"icon",desc:"图标",type:"string",defaultVal:"",required:"false"},{name:"zIndex",desc:"显示层级",type:"number",defaultVal:"19999",required:"false"}],returnType:"void",returnDesc:""}]}]}))},296032:function(e,t,n){n.d(t,{$0:function(){return l},ae:function(){return d},e0:function(){return u},sB:function(){return s}});var r=n(570517),a=n(153757),c=n(690171);const{PlayGroundPageContext:i,PlayGroundPage:o}=a.default,{Section:l,CodeBoxSection:u,PropsSection:s,FunctionPropsSection:d}=o;t.ZP=function(e){let{children:t,...n}=e;const[a,l]=(0,c.useState)(),u=(0,c.useRef)();return(0,c.useEffect)((()=>{l(u.current.parentElement.parentElement)}),[]),c.createElement(i.Provider,{value:{scrollEl:a}},c.createElement(o,(0,r.Z)({ref:u},n),t))}},400959:function(e,t,n){var r=n(46841);t.Z=r.Z}}]);