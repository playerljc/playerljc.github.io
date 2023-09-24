"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[3966],{96323:function(e,n,r){r.r(n);var o=r(90171),t=r(96032);n.default=()=>o.createElement(t.ZP,null,o.createElement(t.$0,{title:"Decorators"},o.createElement("h1",null,"ReactErrorBoundaries(React错误边界处理，防止白屏操作)"),o.createElement("ul",null,o.createElement("li",null,"- class 组件使用@方式使用"),o.createElement("li",null,"- 函数组件使用高阶函数方式使用")),o.createElement("h1",null,"ReactAutoTryCatch - 为成员属性方法自动添加try/catch"),o.createElement("h1",null,"ReactAop - 为成员属性方法加入aop功能")),o.createElement(t.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"ReactErrorBoundaries - class组件的使用",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactErrorBoundaries - class组件的使用",info:"ReactErrorBoundaries - class组件的使用"}},codeText:"\n  import React from 'react';\n  import { Decorators } from '@baifendian/adhere';\n\n  @Decorators.ReactErrorBoundaries\n  class MyComponent extends React.Component {\n\n  }\n      ",type:"PlayGround"},{id:"p2",name:"ReactErrorBoundaries - 函数组件的使用",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactErrorBoundaries - 函数组件的使用",info:"ReactErrorBoundaries - 函数组件的使用"}},codeText:"\n  import React from 'react';\n  import { Decorators } from '@baifendian/adhere';\n\n  function MyComponent() {\n\n  }\n\n  export default Decorators.ReactErrorBoundaries(MyComponent);\n      ",type:"PlayGround"},{id:"p3",name:"ReactErrorBoundaries - 定义全局缺省的错误UI",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactErrorBoundaries - 定义全局缺省的错误UI",info:"ReactErrorBoundaries - 定义全局缺省的错误UI"}},codeText:"\n  import React from 'react';\n  import { Decorators } from '@baifendian/adhere';\n\n  function MyComponent() {\n\n  }\n\n  // 设置全局缺省UI\n  Decorators.ReactErrorBoundaries.setDefaultErrorUI(<div>error</div>);\n\n  export default Decorators.ReactErrorBoundaries(MyComponent);\n      ",type:"PlayGround"},{id:"p4",name:"ReactErrorBoundaries - 自定义组件的错误UI(1)",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactErrorBoundaries - 自定义组件的错误UI(1)",info:"ReactErrorBoundaries - 自定义组件的错误UI(1)"}},codeText:"\n  import React from 'react';\n  import { Decorators } from '@baifendian/adhere';\n\n  function MyComponent() {\n\n  }\n\n  // 自定义组件发生错误时候显示的UI(类组件也是一样)\n  MyComponent.getReactErrorBoundariesErrorUI = () => <div>error</div>\n\n  export default Decorators.ReactErrorBoundaries(MyComponent);\n      ",type:"PlayGround"},{id:"p5",name:"ReactErrorBoundaries - 自定义组件的错误UI(2)",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactErrorBoundaries - 自定义组件的错误UI(2)",info:"ReactErrorBoundaries - 自定义组件的错误UI(2)"}},codeText:"\n  import React from 'react';\n  import { Decorators } from '@baifendian/adhere';\n\n  @Decorators.ReactErrorBoundaries\n  class MyComponent() extends React.Component {\n    // 自定义组件发生错误时候显示的UI(类组件也是一样)\n    getReactErrorBoundariesErrorUI = () => <div>error</div>\n  }\n\n  export default MyComponent;\n      ",type:"PlayGround"},{id:"p6",name:"ReactAutoTryCatch",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactAutoTryCatch",info:"ReactAutoTryCatch"}},codeText:"\n  import React from 'react';\n  import { Decorators } from '@baifendian/adhere';\n\n  class MyComponent extends React.Component {\n    // 这里只能使用function，不能使用箭头函数，可以再function过去到this\n    @Decorators.ReactAutoTryCatch(function(e){\n       console.error(e);\n    })\n    display(name) {\n       return name;\n    }\n  }\n\n  export default MyComponent;\n      ",type:"PlayGround"},{id:"p7",name:"ReactAop",mode:"code",scope:{React:o},cardProps:{description:{title:"ReactAop",info:"ReactAop"}},codeText:"\n  import React from 'react';\n  import { Decorators } from '@baifendian/adhere';\n\n  class MyComponent extends React.Component {\n    // 这里只能使用function，不能使用箭头函数，可以再function过去到this\n    @Decorators.ReactAop(function(){\n       console.log('start');\n    }, function(){\n       console.log('end');\n    })\n    display(name) {\n       return name;\n    }\n  }\n\n  export default MyComponent;\n      ",type:"PlayGround"}]}))},96032:function(e,n,r){r.d(n,{$0:function(){return d},ae:function(){return p},e0:function(){return s},sB:function(){return u}});var o=r(70517),t=r(6692),a=r(90171);const{PlayGroundPageContext:c,PlayGroundPage:i}=t.default,{Section:d,CodeBoxSection:s,PropsSection:u,FunctionPropsSection:p}=i;n.ZP=function(e){let{children:n,...r}=e;const[t,d]=(0,a.useState)(),s=(0,a.useRef)();return(0,a.useEffect)((()=>{d(s.current.parentElement.parentElement)}),[]),a.createElement(c.Provider,{value:{scrollEl:t}},a.createElement(i,(0,o.Z)({ref:s},r),n))}}}]);