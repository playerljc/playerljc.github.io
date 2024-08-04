"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[6401],{63706:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var o=t(26322),r=t(19994),c=t(61444),u=t(80711);const{useForceUpdate:l}=c.A,s=()=>{const e=l();return o.createElement(u.Ay,{type:"primary",onClick:()=>{e()}},"forceUpdate")};var i=t(32517);const{useSetState:a,useFirst:d,usePrevious:p}=c.A,f=()=>{const[e,n]=a(0),[t,r]=a(0),[c,l]=a(0),[s,f]=d(),m=p(3);return console.log(m),(0,o.useEffect)((()=>{console.log("isFirst",s),f(!0)}),[]),o.createElement("div",null,o.createElement("div",null,o.createElement(i.A.Group,{direction:"horizontal"},o.createElement(u.Ay,{onClick:()=>{n(e.current+1,(()=>console.log("count1更新完成")))}},"setCount1"),o.createElement(u.Ay,{onClick:()=>{r(t.current+1,(()=>console.log("count2更新完成")))}},"setCount2"),o.createElement(u.Ay,{onClick:()=>{l((e=>e+1),(()=>console.log("count3更新完成")))}},"setCount3"))),o.createElement("div",null,o.createElement("p",null,"count1: ",e.current),o.createElement("p",null,"count2: ",t.current),o.createElement("p",null,"count3: ",c.current)))},m=()=>o.createElement(r.Ay,null,o.createElement(r.wn,{title:"Hooks"},o.createElement("ul",null,o.createElement("li",null,"- useFirst"),o.createElement("li",null,"- useForceUpdate"),o.createElement("li",null,"- usePrevious"))),o.createElement(r.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"useForceUpdate",mode:"code",scope:{React:o},cardProps:{description:{title:"基本的使用",info:"基本的使用"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { Hooks } from '@baifendian/adhere';\r\n\r\nconst { useForceUpdate } = Hooks;\r\n\r\nexport default () => {\r\n  const forceUpdate = useForceUpdate();\r\n\r\n  return (\r\n    <Button\r\n      type=\"primary\"\r\n      onClick={() => {\r\n        forceUpdate();\r\n      }}\r\n    >\r\n      forceUpdate\r\n    </Button>\r\n  );\r\n};\r\n",renderChildren:()=>o.createElement(s,null)},{id:"p2",name:"useSetState",mode:"code",scope:{React:o},cardProps:{description:{title:"基本的使用",info:"基本的使用"}},type:"PlayGround",codeText:"import { Button } from 'antd';\nimport React, { useEffect } from 'react';\n\nimport { Hooks, Space } from '@baifendian/adhere';\n\nconst { useSetState, useFirst, usePrevious } = Hooks;\n\nexport default () => {\n  const [count1Ref, setCount1] = useSetState(0);\n\n  const [count2Ref, setCount2] = useSetState(0);\n\n  const [count3Ref, setCount3] = useSetState(0);\n\n  const [isFirst, updateFirst] = useFirst();\n\n  const val = usePrevious(3);\n\n  console.log(val);\n\n  useEffect(() => {\n    console.log('isFirst', isFirst);\n    updateFirst(true);\n  }, []);\n\n  return (\n    <div>\n      <div>\n        <Space.Group direction=\"horizontal\">\n          <Button\n            onClick={() => {\n              setCount1(count1Ref.current + 1, () => console.log('count1更新完成'));\n            }}\n          >\n            setCount1\n          </Button>\n          <Button\n            onClick={() => {\n              setCount2(count2Ref.current + 1, () => console.log('count2更新完成'));\n            }}\n          >\n            setCount2\n          </Button>\n          <Button\n            onClick={() => {\n              setCount3(\n                (count) => count + 1,\n                () => console.log('count3更新完成'),\n              );\n            }}\n          >\n            setCount3\n          </Button>\n        </Space.Group>\n      </div>\n      <div>\n        <p>count1: {count1Ref.current}</p>\n        <p>count2: {count2Ref.current}</p>\n        <p>count3: {count3Ref.current}</p>\n      </div>\n    </div>\n  );\n};\n",renderChildren:()=>o.createElement(f,null)}]}))},19994:(e,n,t)=>{t.d(n,{Ay:()=>p,I7:()=>d,Wc:()=>i,e6:()=>a,wn:()=>s});var o=t(71860),r=t(24370),c=t(26322);const{PlayGroundPageContext:u,PlayGroundPage:l}=r.A,{Section:s,CodeBoxSection:i,PropsSection:a,FunctionPropsSection:d}=l;const p=function(e){let{children:n,onScrollBottom:t,distance:r=50,...s}=e;const[i,a]=(0,c.useState)(),d=(0,c.useRef)(),p=(0,c.useRef)(!1);return(0,c.useEffect)((()=>{function e(){const e=n.scrollHeight-n.offsetHeight,o=n.scrollTop;if(t&&Math.abs(o-e)<=r){if(p.current)return;p.current=!0,null==t||t().then((()=>{p.current=!1}))}}const n=d.current.parentElement.parentElement;return n.addEventListener("scroll",e),a(n),()=>{n.removeEventListener("scroll",e)}}),[]),c.createElement(u.Provider,{value:{scrollEl:i}},c.createElement(l,(0,o.A)({ref:d},s),n))}},61444:(e,n,t)=>{t.d(n,{A:()=>o});const o=t(28264).A},32517:(e,n,t)=>{t.d(n,{A:()=>o});const o=t(2382).A}}]);