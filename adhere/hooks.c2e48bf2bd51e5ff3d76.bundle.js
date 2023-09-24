"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[6471],{87059:function(e,n,t){t.r(n);var o=t(91098),c=t(39203),u=t(17464),r=t(90171),l=t(96032);const{useFirst:s,useForceUpdate:i,usePrevious:a,useSetState:d}=c.default;n.default=()=>{const[e,n]=d(0),[t,c]=d(0),[p,f]=d(0),[m,E]=s(),C=a(3);console.log(C);const v=i();return(0,r.useEffect)((()=>{console.log("isFirst",m),E(!0)}),[]),r.createElement(l.ZP,null,r.createElement(l.$0,{title:"Hooks"},r.createElement("ul",null,r.createElement("li",null,"- useFirst"),r.createElement("li",null,"- useForceUpdate"),r.createElement("li",null,"- usePrevious"))),r.createElement(l.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"useForceUpdate",mode:"code",scope:{React:r},cardProps:{description:{title:"基本的使用",info:"基本的使用"}},codeText:"\n  import React, { useEffect } from 'react';\n  import { Button } from 'antd';\n  import { Hooks } from '@baifendian/adhere';\n\n  const { useFirst, useForceUpdate, usePrevious } = Hooks;\n\n  return () => {\n    const [isFirst, updateFirst] = useFirst();\n\n    const val = usePrevious(3);\n\n    console.log(val);\n\n    const forceUpdate = useForceUpdate();\n\n    useEffect(() => {\n      console.log('isFirst', isFirst);\n      updateFirst(true);\n    }, []);\n\n    return (\n       <Button\n        type=\"primary\"\n        onClick={() => {\n          forceUpdate();\n        }}\n      >\n        forceUpdate\n      </Button>\n    );\n  };\n        ",type:"PlayGround",renderChildren:()=>r.createElement(u.ZP,{type:"primary",onClick:()=>{v()}},"forceUpdate")},{id:"p2",name:"useSetState",mode:"code",scope:{React:r},cardProps:{description:{title:"基本的使用",info:"基本的使用"}},codeText:"\n  import React, { useEffect } from 'react';\n  import { Button, Space } from 'antd';\n  import { Hooks } from '@baifendian/adhere';\n\n  const { useSetState } = Hooks;\n\n  export default () => {\n    const [count1, setCount1] = useSetState(0);\n\n    const [count2, setCount2] = useSetState(0);\n\n    const [count3, setCount3] = useSetState(0);\n\n    return (\n      <div>\n        <div>\n          <Space.Group direction=\"horizontal\">\n            <Button\n              onClick={() => {\n                setCount1(count1 + 1, () => console.log('count1更新完成'));\n              }}\n            >\n              setCount1\n            </Button>\n            <Button\n              onClick={() => {\n                setCount2(count2 + 1, () => console.log('count2更新完成'));\n              }}\n            >\n              setCount2\n            </Button>\n            <Button\n              onClick={() => {\n                setCount3(\n                  (count) => count + 1,\n                  () => console.log('count3更新完成'),\n                );\n              }}\n            >\n              setCount3\n            </Button>\n          </Space.Group>\n        </div>\n        <div>\n          <p>count1: {count1}</p>\n          <p>count2: {count2}</p>\n          <p>count3: {count3}</p>\n        </div>\n      </div>\n    )\n  }\n        ",type:"PlayGround",renderChildren:()=>r.createElement("div",null,r.createElement("div",null,r.createElement(o.Z.Group,{direction:"horizontal"},r.createElement(u.ZP,{onClick:()=>{n(e+1,(()=>console.log("count1更新完成")))}},"setCount1"),r.createElement(u.ZP,{onClick:()=>{c(t+1,(()=>console.log("count2更新完成")))}},"setCount2"),r.createElement(u.ZP,{onClick:()=>{f((e=>e+1),(()=>console.log("count3更新完成")))}},"setCount3"))),r.createElement("div",null,r.createElement("p",null,"count1: ",e),r.createElement("p",null,"count2: ",t),r.createElement("p",null,"count3: ",p)))}]}))}},96032:function(e,n,t){t.d(n,{$0:function(){return s},ae:function(){return d},e0:function(){return i},sB:function(){return a}});var o=t(70517),c=t(6692),u=t(90171);const{PlayGroundPageContext:r,PlayGroundPage:l}=c.default,{Section:s,CodeBoxSection:i,PropsSection:a,FunctionPropsSection:d}=l;n.ZP=function(e){let{children:n,...t}=e;const[c,s]=(0,u.useState)(),i=(0,u.useRef)();return(0,u.useEffect)((()=>{s(i.current.parentElement.parentElement)}),[]),u.createElement(r.Provider,{value:{scrollEl:c}},u.createElement(l,(0,o.Z)({ref:i},t),n))}},39203:function(e,n,t){var o=t(62984);n.default=o.Z},91098:function(e,n,t){var o=t(58014);n.Z=o.Z}}]);