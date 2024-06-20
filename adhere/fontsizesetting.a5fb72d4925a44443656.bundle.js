"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[7890],{86395:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(26322),r=n(19994),l=n(32517),c=n(76541);const s=()=>{const[e,t]=(0,a.useState)(12);return a.createElement(a.Fragment,null,a.createElement(c.A,{min:12,max:40,step:1,onChange:e=>{t(e)}}),a.createElement(l.A,{direction:"vertical"}),a.createElement("p",{style:{fontSize:e}},"我是一个粉刷匠"))},o=()=>a.createElement(r.Ay,null,a.createElement(r.wn,{title:"FontSizeSetting"},a.createElement("p",null,"字体设置")),a.createElement(r.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:a},cardProps:{description:{title:"基本使用",info:"基本使用"}},type:"PlayGround",codeText:"import React, { useState } from 'react';\r\n\r\nimport { FontSizeSetting, Space } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  const [fontSize, setFontSize] = useState(12);\r\n\r\n  return (\r\n    <>\r\n      <FontSizeSetting\r\n        min={12}\r\n        max={40}\r\n        step={1}\r\n        onChange={(size) => {\r\n          setFontSize(size);\r\n        }}\r\n      />\r\n\r\n      <Space direction=\"vertical\" />\r\n\r\n      <p style={{ fontSize }}>我是一个粉刷匠</p>\r\n    </>\r\n  );\r\n};\r\n",renderChildren:()=>a.createElement(s,null)}]}),a.createElement(r.e6,{title:"Props",config:[{border:!0,title:"FlexLayout",data:[{params:"className",desc:"附加的样式",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"{}",defaultVal:"{}"},{params:"min",desc:"最小值",type:"number",defaultVal:""},{params:"max",desc:"最大值",type:"number",defaultVal:""},{params:"step",desc:"步进",type:"number",defaultVal:""},{params:"onChange",desc:"数值改变",type:"Function",defaultVal:""}]}]}))},19994:(e,t,n)=>{n.d(t,{Ay:()=>d,I7:()=>m,Wc:()=>i,e6:()=>u,wn:()=>o});var a=n(71860),r=n(24370),l=n(26322);const{PlayGroundPageContext:c,PlayGroundPage:s}=r.A,{Section:o,CodeBoxSection:i,PropsSection:u,FunctionPropsSection:m}=s;const d=function(e){let{children:t,onScrollBottom:n,distance:r=50,...o}=e;const[i,u]=(0,l.useState)(),m=(0,l.useRef)(),d=(0,l.useRef)(!1);return(0,l.useEffect)((()=>{function e(){const e=t.scrollHeight-t.offsetHeight,a=t.scrollTop;if(n&&Math.abs(a-e)<=r){if(d.current)return;d.current=!0,null==n||n().then((()=>{d.current=!1}))}}const t=m.current.parentElement.parentElement;return t.addEventListener("scroll",e),u(t),()=>{t.removeEventListener("scroll",e)}}),[]),l.createElement(c.Provider,{value:{scrollEl:i}},l.createElement(s,(0,a.A)({ref:m},o),t))}},76541:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(26864),r=n(31934),l=n.n(r),c=n(67004),s=n(26322),o=n(59418),i=function(){return(i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},u="adhere-ui-font-size-setting",m=(0,s.memo)((function(e){var t=e.className,n=e.style,r=e.onChange,m=(p=(0,s.useState)(null!=(p=e.value)?p:0))[0],d=p[1],p=(0,s.useRef)(null),f=(0,s.useCallback)((function(e){d(e),null!=r&&r(e)}),[m]);return(0,s.useEffect)((function(){var t;d(null!=(t=e.value)?t:0)}),[e.value]),s.createElement("div",{className:l()(u,null!=t?t:""),style:null!=n?n:{},ref:p},s.createElement("div",{className:"".concat(u,"-range-wrap")},s.createElement("div",{className:"".concat(u,"-separated-tool")},s.createElement("div",{className:"".concat(u,"-separated")},s.createElement("span",null,o.Ay.v("小"))),s.createElement("div",{className:"".concat(u,"-separated")},s.createElement("span",null,o.Ay.v("中"))),s.createElement("div",{className:"".concat(u,"-separated")},s.createElement("span",null,o.Ay.v("大"))),s.createElement("div",{className:"".concat(u,"-separated")},s.createElement("span",null,o.Ay.v("特大")))),s.createElement(a.A,i({},(0,c.A)(e,["className","style","value","onChange"]),{value:m,onChange:f}))))}));m.displayName="FontSizeSetting";const d=m},32517:(e,t,n)=>{n.d(t,{A:()=>a});const a=n(2382).A}}]);