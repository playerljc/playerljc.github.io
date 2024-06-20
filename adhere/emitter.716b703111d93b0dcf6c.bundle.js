"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[3655],{15107:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(26322),a=n(19994),l=n(62522),o=n(80711);const c="pAHIsNx4f0T1Lwvu1QgJ",i=()=>{const e=(0,r.useRef)();return r.createElement(r.Fragment,null,r.createElement(o.Ay,{className:c,onClick:()=>{e.current&&l.A.remove("type1",e.current),e.current=()=>{alert("接到了通知")},l.A.on("type1",e.current),alert("注册成功")}},"注册通知"),r.createElement(o.Ay,{onClick:()=>{e.current?l.A.trigger("type1"):alert("还没有注册事件")}},"发出通知"))},m=()=>r.createElement(r.Fragment,null,r.createElement(o.Ay,{className:c,onClick:()=>{l.A.on("type2",(e=>{alert(e)})),alert("注册成功")}},"注册通知"),r.createElement(o.Ay,{onClick:()=>{l.A.trigger("type2","Hello World")}},"发出通知")),u=()=>r.createElement(r.Fragment,null,r.createElement(o.Ay,{className:c,onClick:()=>{document.addEventListener("customType",(e=>{alert(JSON.stringify(e.detail))})),alert("注册成功")}},"注册通知"),r.createElement(o.Ay,{onClick:()=>{l.A.dispatchEvent(document,"customType",{detail:{hazcheeseburger:!0}})}},"发出通知")),p=()=>r.createElement(r.Fragment,null,r.createElement(o.Ay,{className:c,onClick:()=>{l.A.once("type3",(()=>{alert("type3")})),l.A.once("type3",(()=>{alert("type3")}))}},"注册通知"),r.createElement(o.Ay,{onClick:()=>{l.A.trigger("type3")}},"发出通知")),d=()=>r.createElement(r.Fragment,null,r.createElement(o.Ay,{className:c,onClick:()=>{l.A.once("type4",(()=>{alert("type4")})),l.A.once("type5",(()=>{alert("type5")})),l.A.once("type6",(()=>{alert("type6")}))}},"注册通知"),r.createElement(o.Ay,{onClick:()=>{l.A.all(["type4","type5","type6"],(()=>{alert("type4,type5,type6 - changed")}));l.A.trigger("type4"),l.A.trigger("type5"),l.A.trigger("type6")}},"发出通知并监控")),s=()=>r.createElement(r.Fragment,null,r.createElement(o.Ay,{className:c,onClick:()=>{l.A.once("type7",(()=>{alert("type7")})),l.A.once("type8",(()=>{alert("type8")})),l.A.once("type9",(()=>{alert("type9")}))}},"注册通知"),r.createElement(o.Ay,{onClick:()=>{l.A.race(["type7","type8","type9"],(()=>{alert("type7,type8,type9 - changed")}));l.A.trigger("type7"),l.A.trigger("type8"),l.A.trigger("type9")}},"发出通知并监控")),y=()=>r.createElement(r.Fragment,null,r.createElement(o.Ay,{className:c,onClick:()=>{l.A.on("type10",(()=>{alert("type10")}))}},"注册通知"),r.createElement(o.Ay,{onClick:()=>{l.A.count("type10",2,(()=>{alert("type10 - called 2")}));l.A.trigger("type10"),l.A.trigger("type10")}},"发出通知并监控")),f=()=>r.createElement(a.Ay,null,r.createElement(a.wn,{title:"Emitter"},r.createElement("p",null,"发布订阅"),r.createElement("ul",null,r.createElement("li",null,"- 发布"),r.createElement("li",null,"- 订阅"),r.createElement("li",null,"- 解除订阅"))),r.createElement(a.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本的使用",mode:"code",scope:{React:r},cardProps:{description:{title:"基本的使用",info:"基本的使用"}},type:"PlayGround",codeText:"import { Button } from 'antd';\nimport React, { useRef } from 'react';\n\nimport { Emitter } from '@baifendian/adhere';\n\nimport styles from './examples.less';\n\nexport default () => {\n  const handler1 = useRef();\n\n  return (\n    <>\n      <Button\n        className={styles.Button}\n        onClick={() => {\n          if (handler1.current) {\n            Emitter.remove('type1', handler1.current);\n          }\n\n          handler1.current = () => {\n            alert('接到了通知');\n          };\n\n          Emitter.on('type1', handler1.current);\n\n          alert('注册成功');\n        }}\n      >\n        注册通知\n      </Button>\n      <Button\n        onClick={() => {\n          if (!handler1.current) {\n            alert('还没有注册事件');\n\n            return;\n          }\n\n          Emitter.trigger('type1');\n        }}\n      >\n        发出通知\n      </Button>\n    </>\n  );\n};\n",renderChildren:()=>r.createElement(i,null)},{id:"p2",name:"注册多次，并且传递参数",mode:"code",scope:{React:r},cardProps:{description:{title:"注册多次，并且传递参数",info:"注册多次，并且传递参数"}},type:"PlayGround",codeText:"import { Button } from 'antd';\nimport React from 'react';\n\nimport { Emitter } from '@baifendian/adhere';\n\nimport styles from './examples.less';\n\nexport default () => {\n  return (\n    <>\n      <Button\n        className={styles.Button}\n        onClick={() => {\n          Emitter.on('type2', (params) => {\n            alert(params);\n          });\n\n          alert('注册成功');\n        }}\n      >\n        注册通知\n      </Button>\n      <Button\n        onClick={() => {\n          Emitter.trigger('type2', 'Hello World');\n        }}\n      >\n        发出通知\n      </Button>\n    </>\n  );\n};\n",renderChildren:()=>r.createElement(m,null)},{id:"p3",name:"触发HtmlElement的自定义事件",mode:"code",scope:{React:r},cardProps:{description:{title:"触发HtmlElement的自定义事件",info:"触发HtmlElement的自定义事件"}},type:"PlayGround",codeText:"import { Button } from 'antd';\nimport React from 'react';\n\nimport { Emitter } from '@baifendian/adhere';\n\nimport styles from './examples.less';\n\nexport default () => {\n  return (\n    <>\n      <Button\n        className={styles.Button}\n        onClick={() => {\n          document.addEventListener('customType', (e) => {\n            alert(JSON.stringify(e.detail));\n          });\n\n          alert('注册成功');\n        }}\n      >\n        注册通知\n      </Button>\n      <Button\n        onClick={() => {\n          Emitter.dispatchEvent(document, 'customType', {\n            detail: {\n              hazcheeseburger: true,\n            },\n          });\n        }}\n      >\n        发出通知\n      </Button>\n    </>\n  );\n};\n",renderChildren:()=>r.createElement(u,null)},{id:"p4",name:"只执行一次",mode:"code",scope:{React:r},cardProps:{description:{title:"只执行一次",info:"只执行一次"}},type:"PlayGround",codeText:"import { Button } from 'antd';\nimport React from 'react';\n\nimport { Emitter } from '@baifendian/adhere';\n\nimport styles from './examples.less';\n\nexport default () => {\n  return (\n    <>\n      <Button\n        className={styles.Button}\n        onClick={() => {\n          Emitter.once('type3', () => {\n            alert('type3');\n          });\n\n          Emitter.once('type3', () => {\n            alert('type3');\n          });\n        }}\n      >\n        注册通知\n      </Button>\n      <Button\n        onClick={() => {\n          Emitter.trigger('type3');\n        }}\n      >\n        发出通知\n      </Button>\n    </>\n  );\n};\n",renderChildren:()=>r.createElement(p,null)},{id:"p5",name:"all",mode:"code",scope:{React:r},cardProps:{description:{title:"all",info:"all"}},type:"PlayGround",codeText:"import { Button } from 'antd';\nimport React from 'react';\n\nimport { Emitter } from '@baifendian/adhere';\n\nimport styles from './examples.less';\n\nexport default () => {\n  return (\n    <>\n      <Button\n        className={styles.Button}\n        onClick={() => {\n          Emitter.once('type4', () => {\n            alert('type4');\n          });\n\n          Emitter.once('type5', () => {\n            alert('type5');\n          });\n\n          Emitter.once('type6', () => {\n            alert('type6');\n          });\n        }}\n      >\n        注册通知\n      </Button>\n      <Button\n        onClick={() => {\n          const fun = Emitter.all(['type4', 'type5', 'type6'], () => {\n            alert('type4,type5,type6 - changed');\n          });\n\n          Emitter.trigger('type4');\n          Emitter.trigger('type5');\n          Emitter.trigger('type6');\n        }}\n      >\n        发出通知并监控\n      </Button>\n    </>\n  );\n};\n",renderChildren:()=>r.createElement(d,null)},{id:"p6",name:"race",mode:"code",scope:{React:r},cardProps:{description:{title:"race",info:"race"}},type:"PlayGround",codeText:"import { Button } from 'antd';\nimport React from 'react';\n\nimport { Emitter } from '@baifendian/adhere';\n\nimport styles from './examples.less';\n\nexport default () => {\n  return (\n    <>\n      <Button\n        className={styles.Button}\n        onClick={() => {\n          Emitter.once('type7', () => {\n            alert('type7');\n          });\n\n          Emitter.once('type8', () => {\n            alert('type8');\n          });\n\n          Emitter.once('type9', () => {\n            alert('type9');\n          });\n        }}\n      >\n        注册通知\n      </Button>\n      <Button\n        onClick={() => {\n          const fun = Emitter.race(['type7', 'type8', 'type9'], () => {\n            alert('type7,type8,type9 - changed');\n          });\n\n          Emitter.trigger('type7');\n          Emitter.trigger('type8');\n          Emitter.trigger('type9');\n        }}\n      >\n        发出通知并监控\n      </Button>\n    </>\n  );\n};\n",renderChildren:()=>r.createElement(s,null)},{id:"p7",name:"count",mode:"code",scope:{React:r},cardProps:{description:{title:"count",info:"count"}},type:"PlayGround",codeText:"import { Button } from 'antd';\nimport React from 'react';\n\nimport { Emitter } from '@baifendian/adhere';\n\nimport styles from './examples.less';\n\nexport default () => {\n  return (\n    <>\n      <Button\n        className={styles.Button}\n        onClick={() => {\n          Emitter.on('type10', () => {\n            alert('type10');\n          });\n        }}\n      >\n        注册通知\n      </Button>\n      <Button\n        onClick={() => {\n          const fun = Emitter.count('type10', 2, () => {\n            alert('type10 - called 2');\n          });\n\n          Emitter.trigger('type10');\n          Emitter.trigger('type10');\n        }}\n      >\n        发出通知并监控\n      </Button>\n    </>\n  );\n};\n",renderChildren:()=>r.createElement(y,null)}]}),r.createElement(a.I7,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"on",desc:"注册一个事件",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"() => {}",required:"true"},{name:"makStackSize",desc:"最大注册数",type:"number",defaultVal:"200",required:"false"}],returnType:"void",returnDesc:""},{name:"once",desc:"注册只执行一次的事件",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"() => {}",required:"true"}],returnType:"void",returnDesc:""},{name:"all",desc:"依赖类型都执行后的钩子",modifier:"public",params:[{name:"types",desc:"事件类型",type:"Array<String>",defaultVal:"",required:"true"},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"() => {}",required:"true"}],returnType:"Function",returnDesc:"注销的方法"},{name:"race",desc:"依赖类型任意一个执行后的钩子",modifier:"public",params:[{name:"types",desc:"事件类型",type:"Array<String>",defaultVal:"",required:"true"},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"() => {}",required:"true"}],returnType:"Function",returnDesc:"注销的方法"},{name:"count",desc:"一个类型执行了count次后的钩子",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"},{name:"count",desc:"执行次数",type:"number",defaultVal:"",required:"true"},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"() => {}",required:"true"}],returnType:"Function",returnDesc:"注销的方法"},{name:"remove",desc:"解除一个事件",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"() => {}",required:"true"}],returnType:"void",returnDesc:""},{name:"hasType",desc:"一个事件是否注册过",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"}],returnType:"boolean",returnDesc:"注册过返回true，未注册过返回false"},{name:"clear",desc:"清除一个事件类型的所有句柄",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"}],returnType:"void",returnDesc:""},{name:"clearAll",desc:"清除所有事件类型的句柄",modifier:"public",params:[],returnType:"void",returnDesc:""},{name:"trigger",desc:"触发一个事件类型的事件",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"},{name:"params",desc:"传递的参数",type:"Object",defaultVal:"",required:"true"}],returnType:"void",returnDesc:""},{name:"dispatchEvent",desc:"触发一个Html的自定义事件",modifier:"static",params:[{name:"el",desc:"触发事件的HtmlElement",type:"HtmlElement | Document",defaultVal:"document",required:"true"},{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"},{name:"params",desc:"传递的参数",type:"CustomEventInit",defaultVal:"",required:"true"}],returnType:"void",returnDesc:""}]}]}))},19994:(e,t,n)=>{n.d(t,{Ay:()=>d,I7:()=>p,Wc:()=>m,e6:()=>u,wn:()=>i});var r=n(71860),a=n(24370),l=n(26322);const{PlayGroundPageContext:o,PlayGroundPage:c}=a.A,{Section:i,CodeBoxSection:m,PropsSection:u,FunctionPropsSection:p}=c;const d=function(e){let{children:t,onScrollBottom:n,distance:a=50,...i}=e;const[m,u]=(0,l.useState)(),p=(0,l.useRef)(),d=(0,l.useRef)(!1);return(0,l.useEffect)((()=>{function e(){const e=t.scrollHeight-t.offsetHeight,r=t.scrollTop;if(n&&Math.abs(r-e)<=a){if(d.current)return;d.current=!0,null==n||n().then((()=>{d.current=!1}))}}const t=p.current.parentElement.parentElement;return t.addEventListener("scroll",e),u(t),()=>{t.removeEventListener("scroll",e)}}),[]),l.createElement(o.Provider,{value:{scrollEl:m}},l.createElement(c,(0,r.A)({ref:p},i),t))}}}]);