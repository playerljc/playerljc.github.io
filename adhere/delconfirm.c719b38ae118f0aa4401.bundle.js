"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[3494],{64997:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(26322),o=t(39407),c=t(28264),a=function(){return(a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},l=c.A.useSetState,u=(0,r.forwardRef)((function(e,n){e=e.children;var t=l((0,o.A)()),c=t[0],u=t[1];return(0,r.useImperativeHandle)(n,(function(){return{reMount:function(){return new Promise((function(e){return u((0,o.A)(),(function(){return e()}))}))}}})),(0,r.cloneElement)(e,a({key:c.current},null!=(t=e.props)?t:{}))}));u.displayName="ForceUpdate";const i=u},28517:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var r=t(26322),o=t(19994),c=t(58278);const a=()=>r.createElement(c.A,{success:()=>new Promise((e=>{alert("点击了确认"),e()}))},r.createElement("a",null,"删除")),l=()=>r.createElement("a",{onClick:()=>{c.A.open({success:()=>new Promise((e=>{alert("点击了确认"),e()}))})}},"删除"),u=()=>r.createElement(o.Ay,null,r.createElement(o.wn,{title:"DelConfirm"},r.createElement("p",null,"删除确认提示(使用的是antd的Modal)"),r.createElement("p",null,"删除的时候弹出提示，确认后在执行操作")),r.createElement(o.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:r},cardProps:{description:{title:"基本使用",info:"基本使用"}},codeText:"import React from 'react';\r\n\r\nimport { DelConfirm } from '@baifendian/adhere';\r\n\r\nexport default () => (\r\n  <DelConfirm\r\n    success={() => {\r\n      return new Promise((resolve) => {\r\n        alert('点击了确认');\r\n\r\n        resolve();\r\n      });\r\n    }}\r\n  >\r\n    <a>删除</a>\r\n  </DelConfirm>\r\n);\r\n",type:"PlayGround",renderChildren:()=>r.createElement(a,null)},{id:"p2",name:"Confirm.open",mode:"code",scope:{React:r},cardProps:{description:{title:"Confirm.open",info:"Confirm.open"}},codeText:"import React from 'react';\r\n\r\nimport { DelConfirm } from '@baifendian/adhere';\r\n\r\nexport default () => (\r\n  <a\r\n    onClick={() => {\r\n      DelConfirm.open({\r\n        success: () =>\r\n          new Promise((resolve) => {\r\n            alert('点击了确认');\r\n\r\n            resolve();\r\n          }),\r\n      });\r\n    }}\r\n  >\r\n    删除\r\n  </a>\r\n);\r\n",type:"PlayGround",renderChildren:()=>r.createElement(l,null)}]}),r.createElement(o.e6,{title:"Props",config:[{border:!0,title:"属性",data:[{params:"zIndex",desc:"显示的层级",type:"number",defaultVal:"19999"},{params:"className",desc:"附加的样式",type:"string",defaultVal:""},{params:"success",desc:"确认后的回调，此方法需要返回Promise对象",type:"Function",defaultVal:"() => {}"},{name:"title",desc:"标题",type:"string",defaultVal:""},{name:"text",desc:"文本",type:"string",defaultVal:""},{params:"children",desc:"子组件",type:"React.ReactElement",defaultVal:"null"}]}]}),r.createElement(o.I7,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"open",desc:"打开确认对话框",modifier:"static",params:[{name:"success",desc:"成功的回调，此方法需要返回Promise对象",type:"Function",defaultVal:"() => {}",required:"true"},{name:"title",desc:"标题",type:"string",defaultVal:"",required:"false"},{name:"text",desc:"文本",type:"string",defaultVal:"",required:"false"},{name:"zIndex",desc:"显示层级",type:"number",defaultVal:"19999",required:"false"}],returnType:"void",returnDesc:""}]}]}))},27585:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var r=t(26322),o=t(19994),c=t(46439),a=t(32517),l=t(61444),u=t(80711);const i=e=>((0,r.useEffect)((()=>{console.log("子组件挂载")}),[]),(0,r.useEffect)((()=>{console.log("子组件更新")})),r.createElement("div",null,"子组件:",e.count)),{useSetState:s}=l.A,d=()=>{const e=(0,r.useRef)(),[n,t]=s(0);return r.createElement(c.A,{ref:e},r.createElement("div",null,r.createElement(a.A.Group,{direction:"horizontal"},r.createElement(u.Ay,{type:"primary",onClick:()=>t((e=>e+1))},"递增"),r.createElement(u.Ay,{type:"primary",onClick:()=>{t(0,(()=>e.current.reMount()))}},"重置")),r.createElement(i,{count:n.current})))},p=()=>r.createElement(d,null),f=()=>r.createElement(o.Ay,null,r.createElement(o.wn,{title:"ForceUpdate"},r.createElement("p",null,"强制刷新组件及其子组件")),r.createElement(o.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"强制刷新组件及其子组件",type:"PlayGroundTab",active:"p1.jsx",config:[{key:"p1.jsx",title:"p1.jsx",codeText:"import React from 'react';\r\n\r\nimport Parent from '../parent';\r\n\r\nexport default () => <Parent />;\r\n"},{key:"parent.jsx",title:"parent.jsx",codeText:"import { Button } from 'antd';\nimport React, { useRef } from 'react';\n\nimport { ForceUpdate, Hooks, Space } from '@baifendian/adhere';\n\nimport Sub from './sub';\n\nconst { useSetState } = Hooks;\n\nexport default () => {\n  const ref = useRef();\n  const [countRef, setCount] = useSetState(0);\n\n  return (\n    <ForceUpdate ref={ref}>\n      <div>\n        <Space.Group direction=\"horizontal\">\n          <Button type=\"primary\" onClick={() => setCount((_count) => _count + 1)}>\n            递增\n          </Button>\n          <Button\n            type=\"primary\"\n            onClick={() => {\n              setCount(0, () => ref.current.reMount());\n            }}\n          >\n            重置\n          </Button>\n        </Space.Group>\n        <Sub count={countRef.current} />\n      </div>\n    </ForceUpdate>\n  );\n};\n"},{key:"sub.jsx",title:"sub.jsx",codeText:"import React, { useEffect } from 'react';\r\n\r\nexport default (props) => {\r\n  useEffect(() => {\r\n    console.log('子组件挂载');\r\n  }, []);\r\n\r\n  useEffect(() => {\r\n    console.log('子组件更新');\r\n  });\r\n  return <div>子组件:{props.count}</div>;\r\n};\r\n"}],renderChildren:()=>r.createElement(p,null)}]}))},19994:(e,n,t)=>{t.d(n,{Ay:()=>p,I7:()=>d,Wc:()=>i,e6:()=>s,wn:()=>u});var r=t(71860),o=t(24370),c=t(26322);const{PlayGroundPageContext:a,PlayGroundPage:l}=o.A,{Section:u,CodeBoxSection:i,PropsSection:s,FunctionPropsSection:d}=l;const p=function(e){let{children:n,onScrollBottom:t,distance:o=50,...u}=e;const[i,s]=(0,c.useState)(),d=(0,c.useRef)(),p=(0,c.useRef)(!1);return(0,c.useEffect)((()=>{function e(){const e=n.scrollHeight-n.offsetHeight,r=n.scrollTop;if(t&&Math.abs(r-e)<=o){if(p.current)return;p.current=!0,null==t||t().then((()=>{p.current=!1}))}}const n=d.current.parentElement.parentElement;return n.addEventListener("scroll",e),s(n),()=>{n.removeEventListener("scroll",e)}}),[]),c.createElement(a.Provider,{value:{scrollEl:i}},c.createElement(l,(0,r.A)({ref:d},u),n))}},58278:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(26322),o=t(81703),c=t(59418),a=t(85820),l=function(){return(l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},u=function(e,n){var t={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t},i=(0,r.memo)((function(e){var n=e.className,t=e.style,o=e.children;return r.createElement("div",{className:"".concat("adhere-ui-del-confirm"," ").concat(null!=n?n:""),style:null!=t?t:{},onClick:function(n){n.stopPropagation(),e.children,n=u(e,["children"]),i.open(l({},n))}},o)}));i.displayName="DelConform",i.open=function(e){var n=e.success;e=u(e,["success"]);o.A.Confirm(l(l({},e),{title:e.title||c.Ay.v("提示"),text:e.text||"".concat(c.Ay.v("确定删除吗"),"?"),zIndex:"zIndex"in e?e.zIndex:a.A.Dict.value.ResourceNormalMaxZIndex.value,onSuccess:function(){return new Promise((function(e,t){n?n().then((function(){return e()})).catch((function(){return t()})):e()}))}}))};const s=i},46439:(e,n,t)=>{t.d(n,{A:()=>r});const r=t(64997).A},61444:(e,n,t)=>{t.d(n,{A:()=>r});const r=t(28264).A},32517:(e,n,t)=>{t.d(n,{A:()=>r});const r=t(2382).A}}]);