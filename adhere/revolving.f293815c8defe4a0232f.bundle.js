"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[8418],{29471:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var n=l(91098),i=l(1821),o=l.n(i),r=l(90171),m=l(96767),v=l(28322),d=function(e){var t=void 0===(t=e.className)?"":t,l=void 0===(l=e.style)?{}:l;e=e.children;return r.createElement("div",{className:o()("adhere-ui-revolving-item","swiper-slide",null!=t?t:""),style:null!=l?l:{}},e)},a=function(){return(a=Object.assign||function(e){for(var t,l=1,n=arguments.length;l<n;l++)for(var i in t=arguments[l])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},c="adhere-ui-revolving",u=function(e,t){var l,n=void 0===(n=e.className)?"":n,i=void 0===(i=e.style)?{}:i,d=void 0===(d=e.classNameWrapper)?"":d,u=void 0===(u=e.styleWrapper)?{}:u,I=e.children,g=void 0===(l=e.speed)?1e3:l,R=void 0===(l=e.delay)?1e3:l,s=void 0===(l=e.direction)?"top":l,p=void 0===(l=e.loop)||l,S=void 0!==(l=e.stopOnLastSlide)&&l,f=void 0===(l=e.listeners)?{}:l,E=void 0===(l=e.swiperConfig)?{}:l,y=(m.t.use([v.pt]),(0,r.useRef)(null)),h=(e=(0,r.useRef)(null),(0,r.useRef)(null));function b(){var e,t;null!=(t=null==(e=null==(e=h.current)?void 0:e.autoplay)?void 0:e.start)&&t.call(e)}function P(){var e,t;null!=(t=null==(e=null==(e=h.current)?void 0:e.autoplay)?void 0:e.stop)&&t.call(e)}function C(){var e;return null==(e=null==(e=h.current)?void 0:e.autoplay)?void 0:e.running}return(0,r.useImperativeHandle)(t,(function(){return{start:b,stop:P,isRunning:C}})),(0,r.useEffect)((function(){var e;h.current&&("destory"in h.current&&h.current.destory instanceof Function&&h.current.destory(),h.current=null),h.current=new m.t(y.current,a({allowTouchMove:!1,direction:"left"===(e=s)||"right"===e?"horizontal":"vertical",loop:p,speed:g,autoplay:{delay:R,stopOnLastSlide:S,reverseDirection:"right"===s||"bottom"===s},on:f},null!=E?E:{}))}),[g,R,s,p,S,f]),r.createElement("div",{className:o()(c,"swiper",null!=n?n:""),style:null!=i?i:{},ref:y},r.createElement("div",{className:o()("".concat(c,"-wrapper"),"swiper-wrapper",null!=d?d:""),style:null!=u?u:{},ref:e},I))},I=(0,r.memo)((0,r.forwardRef)(u));I.Item=d;var g=I,R=l(17464),s=l(96032),p=()=>{const e=(0,r.useRef)();return r.createElement(s.ZP,null,r.createElement(s.$0,{title:"Revolving"},r.createElement("p",null,"走马灯"),r.createElement("p",null,"此组件是基于Swiper编写的")),r.createElement(s.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"left",mode:"code",scope:{React:r},cardProps:{description:{title:"left",info:"direction - left"}},codeText:"\n  import { Revolving, Space } from '@baifendian/adhere';\n\n  <Revolving direction=\"left\">\n    <Revolving.Item>Slide 1</Revolving.Item>\n    <Revolving.Item>Slide 2</Revolving.Item>\n    <Revolving.Item>Slide 3</Revolving.Item>\n    <Revolving.Item>Slide 4</Revolving.Item>\n    <Revolving.Item>Slide 5</Revolving.Item>\n    <Revolving.Item>Slide 6</Revolving.Item>\n    <Revolving.Item>Slide 7</Revolving.Item>\n    <Revolving.Item>Slide 8</Revolving.Item>\n    <Revolving.Item>Slide 9</Revolving.Item>\n    <Revolving.Item>Slide 10</Revolving.Item>\n  </Revolving>\n        ",type:"PlayGround",renderChildren:()=>r.createElement(g,{direction:"left"},r.createElement(g.Item,null,"Slide 1"),r.createElement(g.Item,null,"Slide 2"),r.createElement(g.Item,null,"Slide 3"),r.createElement(g.Item,null,"Slide 4"),r.createElement(g.Item,null,"Slide 5"),r.createElement(g.Item,null,"Slide 6"),r.createElement(g.Item,null,"Slide 7"),r.createElement(g.Item,null,"Slide 8"),r.createElement(g.Item,null,"Slide 9"),r.createElement(g.Item,null,"Slide 10"))},{id:"p2",name:"right",mode:"code",scope:{React:r},cardProps:{description:{title:"right",info:"direction - right"}},codeText:"\n  import { Revolving, Space } from '@baifendian/adhere';\n\n  <Revolving direction=\"right\">\n    <Revolving.Item>Slide 1</Revolving.Item>\n    <Revolving.Item>Slide 2</Revolving.Item>\n    <Revolving.Item>Slide 3</Revolving.Item>\n    <Revolving.Item>Slide 4</Revolving.Item>\n    <Revolving.Item>Slide 5</Revolving.Item>\n    <Revolving.Item>Slide 6</Revolving.Item>\n    <Revolving.Item>Slide 7</Revolving.Item>\n    <Revolving.Item>Slide 8</Revolving.Item>\n    <Revolving.Item>Slide 9</Revolving.Item>\n    <Revolving.Item>Slide 10</Revolving.Item>\n  </Revolving>\n        ",type:"PlayGround",renderChildren:()=>r.createElement(g,{direction:"right"},r.createElement(g.Item,null,"Slide 1"),r.createElement(g.Item,null,"Slide 2"),r.createElement(g.Item,null,"Slide 3"),r.createElement(g.Item,null,"Slide 4"),r.createElement(g.Item,null,"Slide 5"),r.createElement(g.Item,null,"Slide 6"),r.createElement(g.Item,null,"Slide 7"),r.createElement(g.Item,null,"Slide 8"),r.createElement(g.Item,null,"Slide 9"),r.createElement(g.Item,null,"Slide 10"))},{id:"p3",name:"top",mode:"code",scope:{React:r},cardProps:{description:{title:"top",info:"direction - top"}},codeText:"\n  import { Revolving, Space } from '@baifendian/adhere';\n\n  <Revolving direction=\"top\" style={{ height: 50 }}>\n    <Revolving.Item>Slide 1</Revolving.Item>\n    <Revolving.Item>Slide 2</Revolving.Item>\n    <Revolving.Item>Slide 3</Revolving.Item>\n    <Revolving.Item>Slide 4</Revolving.Item>\n    <Revolving.Item>Slide 5</Revolving.Item>\n    <Revolving.Item>Slide 6</Revolving.Item>\n    <Revolving.Item>Slide 7</Revolving.Item>\n    <Revolving.Item>Slide 8</Revolving.Item>\n    <Revolving.Item>Slide 9</Revolving.Item>\n    <Revolving.Item>Slide 10</Revolving.Item>\n  </Revolving>\n        ",type:"PlayGround",renderChildren:()=>r.createElement(g,{direction:"top",style:{height:50}},r.createElement(g.Item,null,"Slide 1"),r.createElement(g.Item,null,"Slide 2"),r.createElement(g.Item,null,"Slide 3"),r.createElement(g.Item,null,"Slide 4"),r.createElement(g.Item,null,"Slide 5"),r.createElement(g.Item,null,"Slide 6"),r.createElement(g.Item,null,"Slide 7"),r.createElement(g.Item,null,"Slide 8"),r.createElement(g.Item,null,"Slide 9"),r.createElement(g.Item,null,"Slide 10"))},{id:"p4",name:"bottom",mode:"code",scope:{React:r},cardProps:{description:{title:"bottom",info:"direction - bottom"}},codeText:"\n  import { Revolving, Space } from '@baifendian/adhere';\n\n  <Revolving direction=\"bottom\" style={{ height: 50 }}>\n    <Revolving.Item>Slide 1</Revolving.Item>\n    <Revolving.Item>Slide 2</Revolving.Item>\n    <Revolving.Item>Slide 3</Revolving.Item>\n    <Revolving.Item>Slide 4</Revolving.Item>\n    <Revolving.Item>Slide 5</Revolving.Item>\n    <Revolving.Item>Slide 6</Revolving.Item>\n    <Revolving.Item>Slide 7</Revolving.Item>\n    <Revolving.Item>Slide 8</Revolving.Item>\n    <Revolving.Item>Slide 9</Revolving.Item>\n    <Revolving.Item>Slide 10</Revolving.Item>\n  </Revolving>\n        ",type:"PlayGround",renderChildren:()=>r.createElement(g,{direction:"bottom",style:{height:50}},r.createElement(g.Item,null,"Slide 1"),r.createElement(g.Item,null,"Slide 2"),r.createElement(g.Item,null,"Slide 3"),r.createElement(g.Item,null,"Slide 4"),r.createElement(g.Item,null,"Slide 5"),r.createElement(g.Item,null,"Slide 6"),r.createElement(g.Item,null,"Slide 7"),r.createElement(g.Item,null,"Slide 8"),r.createElement(g.Item,null,"Slide 9"),r.createElement(g.Item,null,"Slide 10"))},{id:"p5",name:"speed",mode:"code",scope:{React:r},cardProps:{description:{title:"speed",info:"speed - 过度时间"}},codeText:"\n  import { Revolving, Space } from '@baifendian/adhere';\n\n  <Revolving direction=\"bottom\" speed={1000 * 3} style={{ height: 50 }}>\n    <Revolving.Item>Slide 1</Revolving.Item>\n    <Revolving.Item>Slide 2</Revolving.Item>\n    <Revolving.Item>Slide 3</Revolving.Item>\n    <Revolving.Item>Slide 4</Revolving.Item>\n    <Revolving.Item>Slide 5</Revolving.Item>\n    <Revolving.Item>Slide 6</Revolving.Item>\n    <Revolving.Item>Slide 7</Revolving.Item>\n    <Revolving.Item>Slide 8</Revolving.Item>\n    <Revolving.Item>Slide 9</Revolving.Item>\n    <Revolving.Item>Slide 10</Revolving.Item>\n  </Revolving>\n        ",type:"PlayGround",renderChildren:()=>r.createElement(g,{direction:"bottom",speed:3e3,style:{height:50}},r.createElement(g.Item,null,"Slide 1"),r.createElement(g.Item,null,"Slide 2"),r.createElement(g.Item,null,"Slide 3"),r.createElement(g.Item,null,"Slide 4"),r.createElement(g.Item,null,"Slide 5"),r.createElement(g.Item,null,"Slide 6"),r.createElement(g.Item,null,"Slide 7"),r.createElement(g.Item,null,"Slide 8"),r.createElement(g.Item,null,"Slide 9"),r.createElement(g.Item,null,"Slide 10"))},{id:"p6",name:"delay",mode:"code",scope:{React:r},cardProps:{description:{title:"delay",info:"delay - 转换时间"}},codeText:"\n  import { Revolving, Space } from '@baifendian/adhere';\n\n  <Revolving direction=\"bottom\" delay={1000 * 3} style={{ height: 50 }}>\n    <Revolving.Item>Slide 1</Revolving.Item>\n    <Revolving.Item>Slide 2</Revolving.Item>\n    <Revolving.Item>Slide 3</Revolving.Item>\n    <Revolving.Item>Slide 4</Revolving.Item>\n    <Revolving.Item>Slide 5</Revolving.Item>\n    <Revolving.Item>Slide 6</Revolving.Item>\n    <Revolving.Item>Slide 7</Revolving.Item>\n    <Revolving.Item>Slide 8</Revolving.Item>\n    <Revolving.Item>Slide 9</Revolving.Item>\n    <Revolving.Item>Slide 10</Revolving.Item>\n  </Revolving>\n        ",type:"PlayGround",renderChildren:()=>r.createElement(g,{direction:"bottom",delay:3e3,style:{height:50}},r.createElement(g.Item,null,"Slide 1"),r.createElement(g.Item,null,"Slide 2"),r.createElement(g.Item,null,"Slide 3"),r.createElement(g.Item,null,"Slide 4"),r.createElement(g.Item,null,"Slide 5"),r.createElement(g.Item,null,"Slide 6"),r.createElement(g.Item,null,"Slide 7"),r.createElement(g.Item,null,"Slide 8"),r.createElement(g.Item,null,"Slide 9"),r.createElement(g.Item,null,"Slide 10"))},{id:"p7",name:"api控制",mode:"code",scope:{React:r},cardProps:{description:{title:"api控制",info:"api控制"}},codeText:"\n  import React, { useRef } from 'react';\n  import { Button } from 'antd';\n  import { Revolving, Space } from '@baifendian/adhere';\n\n  const ref = useRef();\n\n  <div style={{ display: 'flex', alignItems: 'center' }}>\n    <Space.Group direction=\"horizontal\">\n      <Button\n        type=\"primary\"\n        onClick={() => {\n          ref.current.start();\n        }}\n      >\n        start\n      </Button>\n      <Button\n        onClick={() => {\n          ref.current.stop();\n        }}\n      >\n        stop\n      </Button>\n    </Space.Group>\n  </div>\n\n  <Space direction=\"vertical\" />\n\n  <Revolving direction=\"bottom\" delay={1000 * 3} style={{ height: 50 }} ref={ref}>\n    <Revolving.Item>Slide 1</Revolving.Item>\n    <Revolving.Item>Slide 2</Revolving.Item>\n    <Revolving.Item>Slide 3</Revolving.Item>\n    <Revolving.Item>Slide 4</Revolving.Item>\n    <Revolving.Item>Slide 5</Revolving.Item>\n    <Revolving.Item>Slide 6</Revolving.Item>\n    <Revolving.Item>Slide 7</Revolving.Item>\n    <Revolving.Item>Slide 8</Revolving.Item>\n    <Revolving.Item>Slide 9</Revolving.Item>\n    <Revolving.Item>Slide 10</Revolving.Item>\n  </Revolving>\n        ",type:"PlayGround",renderChildren:()=>r.createElement(r.Fragment,null,r.createElement("div",{style:{display:"flex",alignItems:"center"}},r.createElement(n.Z.Group,{direction:"horizontal"},r.createElement(R.ZP,{type:"primary",onClick:()=>{e.current.start()}},"start"),r.createElement(R.ZP,{onClick:()=>{e.current.stop()}},"stop"))),r.createElement(n.Z,{direction:"vertical"}),r.createElement(g,{direction:"bottom",delay:3e3,style:{height:50},ref:e},r.createElement(g.Item,null,"Slide 1"),r.createElement(g.Item,null,"Slide 2"),r.createElement(g.Item,null,"Slide 3"),r.createElement(g.Item,null,"Slide 4"),r.createElement(g.Item,null,"Slide 5"),r.createElement(g.Item,null,"Slide 6"),r.createElement(g.Item,null,"Slide 7"),r.createElement(g.Item,null,"Slide 8"),r.createElement(g.Item,null,"Slide 9"),r.createElement(g.Item,null,"Slide 10")))}]}),r.createElement(s.sB,{title:"Props",config:[{border:!0,title:"Revolving",data:[{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"classNameWrapper",desc:"wrapper附加的样式表",type:"string",defaultVal:""},{params:"styleWrapper",desc:"wrapper附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"speed",desc:"速度",type:"number",defaultVal:"1000"},{params:"delay",desc:"过度的时间",type:"number",defaultVal:"1000"},{params:"direction",desc:"方向 top | right | bottom | left",type:"string",defaultVal:"top"},{params:"loop",desc:"是否循环播放",type:"boolean",defaultVal:"true"},{params:"stopOnLastSlide",desc:"启用此参数并在到达最后一张幻灯片时停止自动播放",type:"boolean",defaultVal:"false"},{params:"listeners",desc:"事件注册句柄，具体型参考Swiper的事件",type:"Object",defaultVal:"{}"}]},{border:!0,title:"Revolving.Item",data:[{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""}]}]}),r.createElement(s.ae,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"start",desc:"开始播放",modifier:"public",params:[],returnType:"void",returnDesc:""},{name:"stop",desc:"停止播放",modifier:"public",params:[],returnType:"void",returnDesc:""},{name:"isRunning",desc:"是否处于播放状态",modifier:"public",params:[],returnType:"boolean",returnDesc:"播放返回true,为播放返回false"}]}]}))}},96032:function(e,t,l){l.d(t,{$0:function(){return v},ae:function(){return c},e0:function(){return d},sB:function(){return a}});var n=l(70517),i=l(6692),o=l(90171);const{PlayGroundPageContext:r,PlayGroundPage:m}=i.default,{Section:v,CodeBoxSection:d,PropsSection:a,FunctionPropsSection:c}=m;t.ZP=function(e){let{children:t,...l}=e;const[i,v]=(0,o.useState)(),d=(0,o.useRef)();return(0,o.useEffect)((()=>{v(d.current.parentElement.parentElement)}),[]),o.createElement(r.Provider,{value:{scrollEl:i}},o.createElement(m,(0,n.Z)({ref:d},l),t))}},91098:function(e,t,l){var n=l(58014);t.Z=n.Z}}]);