"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[4913],{54763:(e,n,t)=>{t.d(n,{A:()=>d});var l=t(75745),r=t(85820),a="adhere-ui-global-indicator",o=r.A.Dict.value.ResourceNormalMaxZIndex.value,i=new Set;const d={show:function(e,n,t,r){void 0===e&&(e=document.body),void 0===n&&(n=""),void 0===t&&(t=o),void 0===r&&(r="default");var d=(n=((d=document.createElement("div")).innerHTML='\n      <div class="'.concat(a,'" style="z-index: ').concat(t||o,'">\n       <span class="').concat(a,'-dot"></span>\n       ').concat(n&&'<div class="'.concat(a,'-text">').concat(n,"</div>"),"\n      </div>"),d.firstElementChild)).querySelector(".".concat(a,"-dot")),c=(r=new Map([["small",.1],["default",.2],["large",.3]]).get(r),document.documentElement.style.getPropertyValue("--adhere-color-primary"));return new l.y({lines:4,length:0,width:52,radius:29,scale:r,corners:1,speed:2.1,rotate:19,animation:"spinner-line-fade-quick",direction:1,color:c,fadeColor:"transparent",top:"46%",left:"50%",shadow:"0 0 1px transparent",zIndex:t,className:"".concat(a,"-spinner"),position:"absolute"}).spin(d),e===document.body&&(n.style.position="fixed"),e.appendChild(n),i.add(n),n},hide:function(e){var n,t;if(e)try{null!=(t=null==(n=null==e?void 0:e.parentElement)?void 0:n.removeChild)&&t.call(n,e),i.delete(e)}catch(e){}},hideAll:function(){Array.from(i.values()).forEach((function(e){var n,t;try{null!=(t=null==(n=null==e?void 0:e.parentElement)?void 0:n.removeChild)&&t.call(n,e)}catch(e){}})),i.clear()}}},15062:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var l=t(26322),r=t(19994),a=t(18647),o=t(80711);const i=()=>l.createElement(o.Ay,{onClick:()=>{setTimeout((()=>{a.A.hide(e)}),2e3);const e=a.A.show(document.body,"全局的遮罩")}},"显示遮罩");var d=t(32517);const c="lKHXuRADjkY0pg6c4Ieg",s=()=>{const e=(0,l.useRef)();let n=null;return l.createElement("div",null,l.createElement("div",{ref:e,className:c,style:{position:"relative",wordBreak:"break-all"}},"In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development."),l.createElement("div",null,l.createElement(d.A.Group,{direction:"horizontal",size:5},l.createElement(o.Ay,{type:"primary",onClick:()=>{n=a.A.show(e.current,"处理中...")}},"显示"),l.createElement(o.Ay,{onClick:()=>{a.A.hide(n)}},"取消"))))};var u=t(87318);const p=()=>{let e=null;const n=(0,l.useRef)(),[t,r]=(0,l.useState)("default");return l.createElement("div",null,l.createElement("div",{ref:n,className:c,style:{position:"relative",wordBreak:"break-all"}},"In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development."),l.createElement("div",null,l.createElement(d.A.Group,{direction:"horizontal",size:5},l.createElement(u.A,{value:t,onChange:e=>r(e)},l.createElement(u.A.Option,{value:"small"},"small"),l.createElement(u.A.Option,{value:"default"},"default"),l.createElement(u.A.Option,{value:"large"},"large")),l.createElement(o.Ay,{type:"primary",onClick:()=>{e=a.A.show(n.current,"处理中...",void 0,t)}},"显示"),l.createElement(o.Ay,{onClick:()=>{a.A.hide(e)}},"取消"))))},m=()=>l.createElement(r.Ay,null,l.createElement(r.wn,{title:"GlobalIndicator"},l.createElement("p",null,"全局无侵入的遮罩")),l.createElement(r.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:l},cardProps:{description:{title:"基本使用",info:"基本使用"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { GlobalIndicator } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  return (\r\n    <Button\r\n      onClick={() => {\r\n        setTimeout(() => {\r\n          GlobalIndicator.hide(el);\r\n        }, 2000);\r\n\r\n        const el = GlobalIndicator.show(document.body, '全局的遮罩');\r\n      }}\r\n    >\r\n      显示遮罩\r\n    </Button>\r\n  );\r\n};\r\n",renderChildren:()=>l.createElement(i,null)},{id:"p2",name:"使用parent属性遮罩局部元素",mode:"code",scope:{React:l},cardProps:{description:{title:"使用parent属性遮罩局部元素",info:"使用parent属性遮罩局部元素"}},type:"PlayGround",codeText:"import { Button } from 'antd';\nimport React, { useRef } from 'react';\n\nimport { GlobalIndicator, Space } from '@baifendian/adhere';\n\nimport styles from './examples.less';\n\nexport default () => {\n  const ref = useRef();\n  let handler = null;\n\n  return (\n    <div>\n      <div\n        ref={ref}\n        className={styles.Wrapper}\n        style={{ position: 'relative', wordBreak: 'break-all' }}\n      >\n        In the process of internal desktop applications development, many different design specs and\n        implementations would be involved, which might cause designers and developers difficulties\n        and duplication and reduce the efficiency of development.\n      </div>\n\n      <div>\n        <Space.Group direction=\"horizontal\" size={5}>\n          <Button\n            type=\"primary\"\n            onClick={() => {\n              handler = GlobalIndicator.show(ref.current, '处理中...');\n            }}\n          >\n            显示\n          </Button>\n\n          <Button\n            onClick={() => {\n              GlobalIndicator.hide(handler);\n            }}\n          >\n            取消\n          </Button>\n        </Space.Group>\n      </div>\n    </div>\n  );\n};\n",renderChildren:()=>l.createElement(s,null)},{id:"p3",name:"各种大小",mode:"code",scope:{React:l},cardProps:{description:{title:"各种大小",info:"各种大小"}},type:"PlayGround",codeText:"import { Button, Select } from 'antd';\nimport React, { useRef, useState } from 'react';\n\nimport { GlobalIndicator, Space } from '@baifendian/adhere';\n\nimport styles from './examples.less';\n\nexport default () => {\n  let handler = null;\n\n  const ref = useRef();\n\n  const [size, setSize] = useState('default');\n\n  return (\n    <div>\n      <div\n        ref={ref}\n        className={styles.Wrapper}\n        style={{ position: 'relative', wordBreak: 'break-all' }}\n      >\n        In the process of internal desktop applications development, many different design specs and\n        implementations would be involved, which might cause designers and developers difficulties\n        and duplication and reduce the efficiency of development.\n      </div>\n\n      <div>\n        <Space.Group direction=\"horizontal\" size={5}>\n          <Select value={size} onChange={(e) => setSize(e)}>\n            <Select.Option value=\"small\">small</Select.Option>\n            <Select.Option value=\"default\">default</Select.Option>\n            <Select.Option value=\"large\">large</Select.Option>\n          </Select>\n\n          <Button\n            type=\"primary\"\n            onClick={() => {\n              handler = GlobalIndicator.show(ref.current, '处理中...', undefined, size);\n            }}\n          >\n            显示\n          </Button>\n\n          <Button\n            onClick={() => {\n              GlobalIndicator.hide(handler);\n            }}\n          >\n            取消\n          </Button>\n        </Space.Group>\n      </div>\n    </div>\n  );\n};\n",renderChildren:()=>l.createElement(p,null)}]}),l.createElement(r.I7,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"show",desc:"显示遮罩",modifier:"public",params:[{name:"parent",desc:"遮罩挂载的元素，这个元素需要有position:relative",type:"HtmlElement",defaultVal:"document.body",required:"false"},{name:"text",desc:"显示的文本",type:"string",defaultVal:"19999",required:"false"},{name:"zIndex",desc:"遮罩的层级",type:"number",defaultVal:"19999",required:"false"},{name:"size",desc:"大小",type:"default | small | large",defaultVal:"default",required:"false"}],returnType:"HtmlElement",returnDesc:"返回遮罩的Html对象"},{name:"hide",desc:"取消遮罩",modifier:"public",params:[{name:"indicatorDom",desc:"取消的HtmlElement元素,是show的返回值",type:"HtmlElement",defaultVal:"",required:"true"}],returnType:"",returnDesc:""},{name:"hideAll",desc:"取消所有遮罩",modifier:"public",params:[],returnType:"",returnDesc:""}]}]}))},19994:(e,n,t)=>{t.d(n,{Ay:()=>p,I7:()=>u,Wc:()=>c,e6:()=>s,wn:()=>d});var l=t(71860),r=t(24370),a=t(26322);const{PlayGroundPageContext:o,PlayGroundPage:i}=r.A,{Section:d,CodeBoxSection:c,PropsSection:s,FunctionPropsSection:u}=i;const p=function(e){let{children:n,onScrollBottom:t,distance:r=50,...d}=e;const[c,s]=(0,a.useState)(),u=(0,a.useRef)(),p=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{function e(){const e=n.scrollHeight-n.offsetHeight,l=n.scrollTop;if(t&&Math.abs(l-e)<=r){if(p.current)return;p.current=!0,null==t||t().then((()=>{p.current=!1}))}}const n=u.current.parentElement.parentElement;return n.addEventListener("scroll",e),s(n),()=>{n.removeEventListener("scroll",e)}}),[]),a.createElement(o.Provider,{value:{scrollEl:c}},a.createElement(i,(0,l.A)({ref:u},d),n))}},18647:(e,n,t)=>{t.d(n,{A:()=>l});const l=t(54763).A},32517:(e,n,t)=>{t.d(n,{A:()=>l});const l=t(2382).A}}]);