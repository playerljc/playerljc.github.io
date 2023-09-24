"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[2352],{57123:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(30811),l=t(67712),a="adhere-ui-globalindicator",o=l.Z.Dict.value.ResourceNormalMaxZIndex.value,r=new Set,d={show:function(e,n,t,l){void 0===e&&(e=document.body),void 0===n&&(n=""),void 0===t&&(t=o),void 0===l&&(l="default");var d=(n=((d=document.createElement("div")).innerHTML='\n      <div class="'.concat(a,'" style="z-index: ').concat(t||o,'">\n       <span class="').concat(a,'-dot"></span>\n       ').concat(n&&'<div class="'.concat(a,'-text">').concat(n,"</div>"),"\n      </div>"),d.firstElementChild)).querySelector(".".concat(a,"-dot")),c=(l=new Map([["small",.1],["default",.2],["large",.3]]).get(l),document.documentElement.style.getPropertyValue("--adhere-color-primary"));return new i.$({lines:4,length:0,width:52,radius:29,scale:l,corners:1,speed:2.1,rotate:19,animation:"spinner-line-fade-quick",direction:1,color:c,fadeColor:"transparent",top:"46%",left:"50%",shadow:"0 0 1px transparent",zIndex:t,className:"".concat(a,"-spinner"),position:"absolute"}).spin(d),e===document.body&&(n.style.position="fixed"),e.appendChild(n),r.add(n),n},hide:function(e){var n,t;if(e)try{null!=(t=null==(n=null==e?void 0:e.parentElement)?void 0:n.removeChild)&&t.call(n,e),r.delete(e)}catch(e){}},hideAll:function(){Array.from(r.values()).forEach((function(e){var n,t;try{null!=(t=null==(n=null==e?void 0:e.parentElement)?void 0:n.removeChild)&&t.call(n,e)}catch(e){}})),r.clear()}}},97317:function(e,n,t){t.r(n);var i=t(91098),l=t(89002),a=t(17464),o=t(22613),r=t(90171),d=t(96032);n.default=()=>{const e=(0,r.useRef)(),n=(0,r.useRef)(),[t,c]=(0,r.useState)("default");let s=null,u=null;return r.createElement(d.ZP,null,r.createElement(d.$0,{title:"GlobalIndicator"},r.createElement("p",null,"全局无侵入的遮罩")),r.createElement(d.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:r},cardProps:{description:{title:"基本使用",info:"基本使用"}},codeText:"\n  import React from 'react';\n  import { Button } from 'antd';\n  import { GlobalIndicator } from '@baifendian/adhere';\n\n  <Button\n    onClick={() => {\n      setTimeout(() => {\n        // eslint-disable-next-line no-use-before-define\n        GlobalIndicator.hide(el);\n      }, 2000);\n\n      const el = GlobalIndicator.show(document.body, '全局的遮罩');\n    }}\n  >\n    显示遮罩\n  </Button>\n      ",type:"PlayGround",renderChildren:()=>r.createElement(a.ZP,{onClick:()=>{setTimeout((()=>{l.Z.hide(e)}),2e3);const e=l.Z.show(document.body,"全局的遮罩")}},"显示遮罩")},{id:"p2",name:"使用parent属性遮罩局部元素",mode:"code",scope:{React:r},cardProps:{description:{title:"使用parent属性遮罩局部元素",info:"使用parent属性遮罩局部元素"}},codeText:"\n  import React, { useRef } from 'react';\n  import { Button } from 'antd';\n  import { GlobalIndicator, Space } from '@baifendian/adhere';\n\n  let handler = null;\n  const ref = useRef();\n\n  <div>\n    <div\n      ref={ref}\n      style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}\n    >\n      In the process of internal desktop applications development, many different design specs\n      and implementations would be involved, which might cause designers and developers\n      difficulties and duplication and reduce the efficiency of development.\n    </div>\n\n    <div>\n      <Space.Group direction=\"horizontal\" size={5}>\n        <Button\n          type=\"primary\"\n          onClick={() => {\n            handler1 = GlobalIndicator.show(ref1.current, '处理中...');\n          }}\n        >\n          显示\n        </Button>\n\n        <Button\n          onClick={() => {\n            GlobalIndicator.hide(handler1);\n          }}\n        >\n          取消\n        </Button>\n      </Space.Group>\n    </div>\n  </div>\n      ",type:"PlayGround",renderChildren:()=>r.createElement("div",null,r.createElement("div",{ref:e,style:{position:"relative",width:200,height:200,wordBreak:"break-all"}},"In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development."),r.createElement("div",null,r.createElement(i.Z.Group,{direction:"horizontal",size:5},r.createElement(a.ZP,{type:"primary",onClick:()=>{s=l.Z.show(e.current,"处理中...")}},"显示"),r.createElement(a.ZP,{onClick:()=>{l.Z.hide(s)}},"取消"))))},{id:"p3",name:"各种大小",mode:"code",scope:{React:r},cardProps:{description:{title:"各种大小",info:"各种大小"}},codeText:"\n  import React, { useRef, useState } from 'react';\n  import { Button, Select } from 'antd';\n  import { GlobalIndicator, Space } from '@baifendian/adhere';\n\n  let handler = null;\n  const ref = useRef();\n  const [size, setSize] = useState('default');\n\n  <div>\n    <div\n      ref={ref}\n      style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}\n    >\n      In the process of internal desktop applications development, many different design specs\n      and implementations would be involved, which might cause designers and developers\n      difficulties and duplication and reduce the efficiency of development.\n    </div>\n\n    <div>\n      <Space.Group direction=\"horizontal\" size={5}>\n        <Select value={size} onChange={(e) => setSize(e)}>\n          <Select.Option value=\"small\">small</Select.Option>\n          <Select.Option value=\"default\">default</Select.Option>\n          <Select.Option value=\"large\">large</Select.Option>\n        </Select>\n\n        <Button\n          type=\"primary\"\n          onClick={() => {\n            handler2 = GlobalIndicator.show(ref2.current, '处理中...', undefined, size);\n          }}\n        >\n          显示\n        </Button>\n\n        <Button\n          onClick={() => {\n            GlobalIndicator.hide(handler2);\n          }}\n        >\n          取消\n        </Button>\n      </Space.Group>\n    </div>\n  </div>\n      ",type:"PlayGround",renderChildren:()=>r.createElement("div",null,r.createElement("div",{ref:n,style:{position:"relative",width:200,height:200,wordBreak:"break-all"}},"In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development."),r.createElement("div",null,r.createElement(i.Z.Group,{direction:"horizontal",size:5},r.createElement(o.default,{value:t,onChange:e=>c(e)},r.createElement(o.default.Option,{value:"small"},"small"),r.createElement(o.default.Option,{value:"default"},"default"),r.createElement(o.default.Option,{value:"large"},"large")),r.createElement(a.ZP,{type:"primary",onClick:()=>{u=l.Z.show(n.current,"处理中...",void 0,t)}},"显示"),r.createElement(a.ZP,{onClick:()=>{l.Z.hide(u)}},"取消"))))}]}),r.createElement(d.ae,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"show",desc:"显示遮罩",modifier:"public",params:[{name:"parent",desc:"遮罩挂载的元素，这个元素需要有position:relative",type:"HtmlElement",defaultVal:"document.body",required:"false"},{name:"text",desc:"显示的文本",type:"string",defaultVal:"19999",required:"false"},{name:"zIndex",desc:"遮罩的层级",type:"number",defaultVal:"19999",required:"false"},{name:"size",desc:"大小",type:"default | small | large",defaultVal:"default",required:"false"}],returnType:"HtmlElement",returnDesc:"返回遮罩的Html对象"},{name:"hide",desc:"取消遮罩",modifier:"public",params:[{name:"indicatorDom",desc:"取消的HtmlElement元素,是show的返回值",type:"HtmlElement",defaultVal:"",required:"true"}],returnType:"",returnDesc:""}]}]}))}},96032:function(e,n,t){t.d(n,{$0:function(){return d},ae:function(){return u},e0:function(){return c},sB:function(){return s}});var i=t(70517),l=t(6692),a=t(90171);const{PlayGroundPageContext:o,PlayGroundPage:r}=l.default,{Section:d,CodeBoxSection:c,PropsSection:s,FunctionPropsSection:u}=r;n.ZP=function(e){let{children:n,...t}=e;const[l,d]=(0,a.useState)(),c=(0,a.useRef)();return(0,a.useEffect)((()=>{d(c.current.parentElement.parentElement)}),[]),a.createElement(o.Provider,{value:{scrollEl:l}},a.createElement(r,(0,i.Z)({ref:c},t),n))}},89002:function(e,n,t){var i=t(57123);n.Z=i.Z},91098:function(e,n,t){var i=t(58014);n.Z=i.Z}}]);