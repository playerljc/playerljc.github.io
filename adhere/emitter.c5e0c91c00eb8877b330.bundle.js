"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[192],{810897:function(e,t,n){n.r(t);var r=n(942177),a=n(5254),i=n(690171),l=n(296032);t.default=()=>{const e=(0,i.useRef)();return i.createElement(l.ZP,null,i.createElement(l.$0,{title:"Emitter"},i.createElement("p",null,"发布订阅"),i.createElement("ul",null,i.createElement("li",null,"- 发布"),i.createElement("li",null,"- 订阅"),i.createElement("li",null,"- 解除订阅"))),i.createElement(l.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本的使用",mode:"code",scope:{React:i},cardProps:{description:{title:"基本的使用",info:"基本的使用"}},codeText:"\n  import { Emitter } from '@baifendian/adhere';\n\n  <Button\n    style={{ marginRight: 20 }}\n    onClick={() => {\n      if (handler1.current) {\n        Emitter.remove('type1', handler1.current);\n      }\n\n      handler1.current = () => {\n        alert('接到了通知');\n      };\n\n      Emitter.on('type1', handler1.current);\n\n      alert('注册成功');\n    }}\n  >\n    注册通知\n  </Button>\n  <Button\n    onClick={() => {\n      if (!handler1.current) {\n        alert('还没有注册事件');\n\n        return;\n      }\n\n      Emitter.trigger('type1');\n    }}\n  >\n    发出通知\n  </Button>\n        ",type:"PlayGround",renderChildren:()=>i.createElement(i.Fragment,null,i.createElement(a.ZP,{style:{marginRight:20},onClick:()=>{e.current&&r.Z.remove("type1",e.current),e.current=()=>{alert("接到了通知")},r.Z.on("type1",e.current),alert("注册成功")}},"注册通知"),i.createElement(a.ZP,{onClick:()=>{e.current?r.Z.trigger("type1"):alert("还没有注册事件")}},"发出通知"))},{id:"p2",name:"注册多次，并且传递参数",mode:"code",scope:{React:i},cardProps:{description:{title:"注册多次，并且传递参数",info:"注册多次，并且传递参数"}},codeText:"\n  import { Emitter } from '@baifendian/adhere';\n\n  <Button\n    style={{ marginRight: 20 }}\n    onClick={() => {\n      Emitter.on('type2', (params) => {\n        alert(params);\n      });\n\n      alert('注册成功');\n    }}\n  >\n    注册通知\n  </Button>\n  <Button\n    onClick={() => {\n      Emitter.trigger('type2', 'Hello World');\n    }}\n  >\n    发出通知\n  </Button>\n        ",type:"PlayGround",renderChildren:()=>i.createElement(i.Fragment,null,i.createElement(a.ZP,{style:{marginRight:20},onClick:()=>{r.Z.on("type2",(e=>{alert(e)})),alert("注册成功")}},"注册通知"),i.createElement(a.ZP,{onClick:()=>{r.Z.trigger("type2","Hello World")}},"发出通知"))},{id:"p3",name:"触发HtmlElement的自定义事件",mode:"code",scope:{React:i},cardProps:{description:{title:"触发HtmlElement的自定义事件",info:"触发HtmlElement的自定义事件"}},codeText:"\n  import { Emitter } from '@baifendian/adhere';\n\n  <Button\n    style={{ marginRight: 20 }}\n    onClick={() => {\n      document.addEventListener('customType', (e) => {\n        alert(JSON.stringify(e.detail));\n      });\n\n      alert('注册成功');\n    }}\n  >\n    注册通知\n  </Button>\n  <Button\n    onClick={() => {\n      Emitter.dispatchEvent(document, 'customType', {\n        detail: {\n          hazcheeseburger: true,\n        },\n      });\n    }}\n  >\n    发出通知\n  </Button>\n        ",type:"PlayGround",renderChildren:()=>i.createElement(i.Fragment,null,i.createElement(a.ZP,{style:{marginRight:20},onClick:()=>{document.addEventListener("customType",(e=>{alert(JSON.stringify(e.detail))})),alert("注册成功")}},"注册通知"),i.createElement(a.ZP,{onClick:()=>{r.Z.dispatchEvent(document,"customType",{detail:{hazcheeseburger:!0}})}},"发出通知"))},{id:"p4",name:"只执行一次",mode:"code",scope:{React:i},cardProps:{description:{title:"只执行一次",info:"只执行一次"}},codeText:"\n  import { Emitter } from '@baifendian/adhere';\n\n  <Button\n    style={{ marginRight: 20 }}\n    onClick={() => {\n      Emitter.once('type3', () => {\n        alert('type3');\n      });\n\n      Emitter.once('type3', () => {\n        alert('type3');\n      });\n    }}\n  >\n    注册通知\n  </Button>\n  <Button\n    onClick={() => {\n      Emitter.trigger('type3');\n    }}\n  >\n    发出通知\n  </Button>\n      ",type:"PlayGround",renderChildren:()=>i.createElement(i.Fragment,null,i.createElement(a.ZP,{style:{marginRight:20},onClick:()=>{r.Z.once("type3",(()=>{alert("type3")})),r.Z.once("type3",(()=>{alert("type3")}))}},"注册通知"),i.createElement(a.ZP,{onClick:()=>{r.Z.trigger("type3")}},"发出通知"))},{id:"p5",name:"all",mode:"code",scope:{React:i},cardProps:{description:{title:"all",info:"all"}},codeText:"\n  import { Emitter } from '@baifendian/adhere';\n\n  <Button\n      style={{ marginRight: 20 }}\n      onClick={() => {\n        Emitter.once('type4', () => {\n          alert('type4');\n        });\n\n        Emitter.once('type5', () => {\n          alert('type5');\n        });\n\n        Emitter.once('type6', () => {\n          alert('type6');\n        });\n      }}\n    >\n      注册通知\n    </Button>\n    <Button\n      onClick={() => {\n        const fun = Emitter.all(['type4', 'type5', 'type6'], () => {\n          alert('type4,type5,type6 - changed');\n        });\n\n        Emitter.trigger('type4');\n        Emitter.trigger('type5');\n        Emitter.trigger('type6');\n      }}\n    >\n      发出通知并监控\n    </Button>\n      ",type:"PlayGround",renderChildren:()=>i.createElement(i.Fragment,null,i.createElement(a.ZP,{style:{marginRight:20},onClick:()=>{r.Z.once("type4",(()=>{alert("type4")})),r.Z.once("type5",(()=>{alert("type5")})),r.Z.once("type6",(()=>{alert("type6")}))}},"注册通知"),i.createElement(a.ZP,{onClick:()=>{r.Z.all(["type4","type5","type6"],(()=>{alert("type4,type5,type6 - changed")})),r.Z.trigger("type4"),r.Z.trigger("type5"),r.Z.trigger("type6")}},"发出通知并监控"))},{id:"p6",name:"race",mode:"code",scope:{React:i},cardProps:{description:{title:"race",info:"race"}},codeText:"\n  import { Emitter } from '@baifendian/adhere';\n\n  <Button\n    style={{ marginRight: 20 }}\n    onClick={() => {\n      Emitter.once('type7', () => {\n        alert('type7');\n      });\n\n      Emitter.once('type8', () => {\n        alert('type8');\n      });\n\n      Emitter.once('type9', () => {\n        alert('type9');\n      });\n    }}\n  >\n    注册通知\n  </Button>\n  <Button\n    onClick={() => {\n      const fun = Emitter.race(['type7', 'type8', 'type9'], () => {\n        alert('type7,type8,type9 - changed');\n      });\n\n      Emitter.trigger('type7');\n      Emitter.trigger('type8');\n      Emitter.trigger('type9');\n    }}\n  >\n    发出通知并监控\n  </Button>\n      ",type:"PlayGround",renderChildren:()=>i.createElement(i.Fragment,null,i.createElement(a.ZP,{style:{marginRight:20},onClick:()=>{r.Z.once("type7",(()=>{alert("type7")})),r.Z.once("type8",(()=>{alert("type8")})),r.Z.once("type9",(()=>{alert("type9")}))}},"注册通知"),i.createElement(a.ZP,{onClick:()=>{r.Z.race(["type7","type8","type9"],(()=>{alert("type7,type8,type9 - changed")})),r.Z.trigger("type7"),r.Z.trigger("type8"),r.Z.trigger("type9")}},"发出通知并监控"))},{id:"p7",name:"count",mode:"code",scope:{React:i},cardProps:{description:{title:"count",info:"count"}},codeText:"\n  import { Emitter } from '@baifendian/adhere';\n\n  <Button\n    style={{ marginRight: 20 }}\n    onClick={() => {\n      Emitter.on('type10', () => {\n        alert('type10');\n      });\n    }}\n  >\n    注册通知\n  </Button>\n  <Button\n    onClick={() => {\n      const fun = Emitter.count('type10', 2, () => {\n        alert('type10 - called 2');\n      });\n\n      Emitter.trigger('type10');\n      Emitter.trigger('type10');\n    }}\n  >\n    发出通知并监控\n  </Button>\n      ",type:"PlayGround",renderChildren:()=>i.createElement(i.Fragment,null,i.createElement(a.ZP,{style:{marginRight:20},onClick:()=>{r.Z.on("type10",(()=>{alert("type10")}))}},"注册通知"),i.createElement(a.ZP,{onClick:()=>{r.Z.count("type10",2,(()=>{alert("type10 - called 2")})),r.Z.trigger("type10"),r.Z.trigger("type10")}},"发出通知并监控"))}]}),i.createElement(l.ae,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"on",desc:"注册一个事件",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"() => {}",required:"true"},{name:"makStackSize",desc:"最大注册数",type:"number",defaultVal:"200",required:"false"}],returnType:"void",returnDesc:""},{name:"once",desc:"注册只执行一次的事件",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"() => {}",required:"true"}],returnType:"void",returnDesc:""},{name:"all",desc:"依赖类型都执行后的钩子",modifier:"public",params:[{name:"types",desc:"事件类型",type:"Array<String>",defaultVal:"",required:"true"},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"() => {}",required:"true"}],returnType:"Function",returnDesc:"注销的方法"},{name:"race",desc:"依赖类型任意一个执行后的钩子",modifier:"public",params:[{name:"types",desc:"事件类型",type:"Array<String>",defaultVal:"",required:"true"},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"() => {}",required:"true"}],returnType:"Function",returnDesc:"注销的方法"},{name:"count",desc:"一个类型执行了count次后的钩子",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"},{name:"count",desc:"执行次数",type:"number",defaultVal:"",required:"true"},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"() => {}",required:"true"}],returnType:"Function",returnDesc:"注销的方法"},{name:"remove",desc:"解除一个事件",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"() => {}",required:"true"}],returnType:"void",returnDesc:""},{name:"hasType",desc:"一个事件是否注册过",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"}],returnType:"boolean",returnDesc:"注册过返回true，未注册过返回false"},{name:"clear",desc:"清除一个事件类型的所有句柄",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"}],returnType:"void",returnDesc:""},{name:"clearAll",desc:"清除所有事件类型的句柄",modifier:"public",params:[],returnType:"void",returnDesc:""},{name:"trigger",desc:"触发一个事件类型的事件",modifier:"public",params:[{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"},{name:"params",desc:"传递的参数",type:"Object",defaultVal:"",required:"true"}],returnType:"void",returnDesc:""},{name:"dispatchEvent",desc:"触发一个Html的自定义事件",modifier:"static",params:[{name:"el",desc:"触发事件的HtmlElement",type:"HtmlElement | Document",defaultVal:"document",required:"true"},{name:"type",desc:"事件类型",type:"String",defaultVal:"",required:"true"},{name:"params",desc:"传递的参数",type:"CustomEventInit",defaultVal:"",required:"true"}],returnType:"void",returnDesc:""}]}]}))}},296032:function(e,t,n){n.d(t,{$0:function(){return o},ae:function(){return d},e0:function(){return u},sB:function(){return p}});var r=n(570517),a=n(153757),i=n(690171);const{PlayGroundPageContext:l,PlayGroundPage:c}=a.default,{Section:o,CodeBoxSection:u,PropsSection:p,FunctionPropsSection:d}=c;t.ZP=function(e){let{children:t,...n}=e;const[a,o]=(0,i.useState)(),u=(0,i.useRef)();return(0,i.useEffect)((()=>{o(u.current.parentElement.parentElement)}),[]),i.createElement(l.Provider,{value:{scrollEl:a}},i.createElement(c,(0,r.Z)({ref:u},n),t))}}}]);