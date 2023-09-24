"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[355],{926096:function(e,n,t){var r=t(801821),a=t.n(r),l=t(74436),c=t.n(l),o=t(690171),s=t(181717),u=function(){return(u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},i="adhere-ui-cascade-compared",d=120,m=s.Z.Item;document.addEventListener("touchmove",(function(e){e.preventDefault()}),!!function(){var e=!1;try{addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){e=!0}}))}catch(e){}return e}()&&{capture:!1,passive:!1});var p=function(e,n){var t,r=void 0===(r=e.className)?"":r,l=void 0===(l=e.style)?{}:l,p=void 0===(p=e.indicatorClassName)?"":p,f=void 0===(f=e.indicatorStyle)?{}:f,y=void 0===(y=e.indicatorFixedWrapClassName)?"":y,v=void 0===(v=e.indicatorFixedWrapStyle)?{}:v,h=void 0===(h=e.indicatorAutoWrapClassName)?"":h,g=void 0===(g=e.indicatorAutoWrapStyle)?{}:g,C=void 0===(C=(x=e.indicator).columns)?[]:C,S=void 0===(x=x.dataSource)?{}:x,x=void 0===(x=e.masterClassName)?"":x,E=void 0===(E=e.masterStyle)?{}:E,b=void 0===(b=e.masterInnerClassName)?"":b,I=void 0===(I=e.masterInnerStyle)?{}:I,N=void 0===(N=e.masterStickFixedClassName)?"":N,w=void 0===(w=e.masterStickFixedStyle)?{}:w,R=void 0===(R=e.masterStickInnerClassName)?"":R,V=void 0===(V=e.masterStickInnerStyle)?{}:V,k=void 0===(k=e.master)?[]:k,B=(e=e.onStickChange,(0,o.useRef)(null)),P=(0,o.useRef)(null),T=(0,o.useRef)([]);function Z(e){return e.find((function(e){return e.isFixed}))||(e.length?e[0]:null)}function F(e,n,t,r,a){return e?e.render?e.render(n[e.dataIndex],n,t,r,a):n[e.dataIndex]:null}return(0,o.useImperativeHandle)(n,(function(){return{scrollToByIndex:function(e,n){P.current.scrollToByIndex(e,n=void 0===n?300:n)},scrollToByHeaderEl:function(e,n){P.current.scrollToByHeaderEl(e,n=void 0===n?300:n)},scrollToByColumn:function(e){var n=T.current[0];e=n.wrapper.querySelector(".".concat(i,"-item .").concat(i,"-cell:nth-of-type(").concat(e,")"));n.scrollToElement(e)}}})),(0,o.useLayoutEffect)((function(){P.current.refresh(),function(){for(var e=B.current.querySelectorAll(".".concat(i,"-auto-wrap")),n=0;n<T.current.length;n++)T.current[n].destroy();for(T.current=[],n=0;n<e.length;n++)!function(n){var t=new(c())(e[n],{probeType:3,eventPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1});T.current.push(t),t.on("scroll",(function(){for(var e=0;e<T.current.length;e++)T.current[e]!==t&&T.current[e].scrollTo(t.x,t.y)}))}(n)}()})),o.createElement("div",{className:a()(i,null!=r?r:""),style:u({},null!=l?l:{}),ref:B},(t=Z(C),o.createElement("div",{className:a()("".concat(i,"-indicator"),null!=p?p:""),style:u({},f)},o.createElement("div",{className:a()("".concat(i,"-fixed-wrap"),null!=y?y:""),style:u(u({},null!=v?v:{}),{width:(null==t?void 0:t.width)||d})},o.createElement("div",{className:"".concat(i,"-item")},o.createElement("div",{className:a()("".concat(i,"-cell"),null!=(n=null==t?void 0:t.className)?n:""),style:u({},null!=(n=null==t?void 0:t.style)?n:{})},F(t,S,-1,-1,-1)))),o.createElement("div",{className:a()("".concat(i,"-auto-wrap"),null!=h?h:""),style:u({},null!=g?g:{})},o.createElement("div",{className:"".concat(i,"-item")},C.filter((function(e){return e!==t})).map((function(e,n){var t;return o.createElement("div",{key:e.dataIndex,className:a()("".concat(i,"-cell"),null!=(t=e.className)?t:""),style:u(u({},null!=(t=e.style)?t:{}),{width:(null==e?void 0:e.width)||d})},F(e,S,-1,-1,n))})))))),(r={ref:P,className:a()("".concat(i,"-master-inner"),null!=b?b:""),style:null!=I?I:{},fixedClassName:a()(null!=N?N:""),fixedStyle:null!=w?w:{},innerClassName:a()(null!=R?R:""),innerStyle:null!=V?V:{},onChange:e},o.createElement("div",{className:a()("".concat(i,"-master"),null!=x?x:""),style:u({},null!=E?E:{})},o.createElement(s.Z,u({},r),k.map((function(e,n){var t,r,l,c,s,p=void 0===(p=e.title)?void 0:p,f=void 0===(f=e.className)?"":f,y=void 0===(y=e.style)?{}:y;return o.createElement(m,{key:n,className:a()(null!=f?f:""),style:u({},null!=y?y:{}),title:p,content:(t=n,y=void 0===(y=(f=e).dataSource)?[]:y,r=void 0===(p=f.columns)?[]:p,p=void 0===(p=f.fixedWrapClassName)?"":p,n=void 0===(n=f.fixedWrapStyle)?{}:n,e=void 0===(e=f.autoWrapClassName)?"":e,l=void 0===(l=f.autoWrapStyle)?{}:l,c=void 0===(c=f.autoInnerClassName)?"":c,f=void 0===(f=f.autoInnerStyle)?{}:f,s=Z(r),o.createElement(o.Fragment,null,o.createElement("div",{className:a()("".concat(i,"-fixed-wrap"),null!=p?p:""),style:u(u({},null!=n?n:{}),{width:(null==s?void 0:s.width)||d})},y.map((function(e,n){var r;return o.createElement("div",{key:n,className:"".concat(i,"-item")},o.createElement("div",{className:a()("".concat(i,"-cell"),null!=(r=null==s?void 0:s.className)?r:""),style:u({},null!=(r=null==s?void 0:s.style)?r:{})},F(s,e,t,n,-1)))}))),o.createElement("div",{className:a()("".concat(i,"-auto-wrap"),null!=e?e:""),style:u({},null!=l?l:{})},o.createElement("div",{className:a()("".concat(i,"-auto-inner"),null!=c?c:""),style:u({},f)},y.map((function(e,n){return o.createElement("div",{key:n,className:"".concat(i,"-item")},r.filter((function(e){return e!==s})).map((function(r,l){var c;return o.createElement("div",{key:r.dataIndex,className:a()("".concat(i,"-cell"),null!=(c=r.className)?c:""),style:u(u({},null!=(c=r.style)?c:{}),{width:(null==r?void 0:r.width)||d})},F(r,e,t,n,l))})))}))))))})}))))))};n.Z=(0,o.memo)((0,o.forwardRef)(p))},539447:function(e,n,t){var r=t(926096);n.Z=r.Z},181717:function(e,n,t){var r=t(152336);n.Z=r.Z},248994:function(e,n,t){var r=t(801821),a=t.n(r),l=t(690171),c="adhere-ui-stickuplayout-item",o=function(e){var n=e.className,t=e.style,r=e.title;e=e.content;return l.createElement("div",{className:a()(c,null!=n?n:""),style:null!=t?t:{}},l.createElement("div",{className:"".concat(c,"-header")},r),l.createElement("div",{className:"".concat(c,"-content")},e))};n.Z=(0,l.memo)(o)},152336:function(e,n,t){var r=t(801821),a=t.n(r),l=t(690171),c=t(248994),o="adhere-ui-stickuplayout",s=function(e,n){var t=e.className,r=e.style,c=e.fixedClassName,s=e.fixedStyle,u=e.innerClassName,i=e.innerStyle,d=e.onChange,m=(e=e.children,(0,l.useRef)(null)),p=(0,l.useRef)(null),f=(0,l.useRef)(null),y=(0,l.useRef)(!1),v=(0,l.useRef)([]),h=(0,l.useRef)(),g=(0,l.useRef)(null),C=(0,l.useRef)();function S(){return"updateInterval"in screen?screen.updateInterval:16.7}function x(){for(var e,n,t=f.current.scrollTop,r=0,a=v.current.length-1;r<=a&&r<=v.current.length-1&&a<=v.current.length-1;){var l,c=v.current[l=a+r>>1];if(t>=c.start&&t<c.end){n=c;break}t<c.start?a=l-1:r=1+l}!n||g.current&&(null==(e=g.current)?void 0:e.index)===n.index||(g.current=n,p.current.innerHTML=n.dom.outerHTML,d&&d(n.index))}function E(){y.current=!1,v.current=[],h.current=null==(n=m.current)?void 0:n.querySelectorAll(".".concat(o,"-item-header"));var e,n,t=0;v.current=[],g.current=null;for(var r=0,a=h.current.length;r<a;r++){var l=h.current[r],c=t,s=r!==a-1?h.current[r+1].offsetTop-l.offsetHeight:f.current.scrollHeight;if(v.current.push({start:c,end:s,dom:l,index:r}),(t=s)>f.current.scrollHeight-f.current.offsetHeight)break}x(),null!=(e=null==(n=f.current)?void 0:n.removeEventListener)&&e.call(n,"scroll",I),null!=(n=null==(e=f.current)?void 0:e.addEventListener)&&n.call(e,"scroll",I)}function b(e,n){e=e.start+h.current[e.index].offsetHeight,0===(n=void 0===n?300:n)?f.current.scrollTop=e:function(e,n){var t,r,a;void 0===e&&(e=0),void 0===n&&(n=300),y.current||("undefined"==typeof window||C.current||(C.current=document.createElement("div"),C.current.className="".concat(o,"-mask"),window.document.body.appendChild(C.current)),y.current=!0,C.current.style.display="block",t=f.current.scrollTop,r=t,a=f.current.scrollHeight/(n/S()+(n%S()!=0?1:0)),"undefined"!=typeof window&&window.requestAnimationFrame((function n(){function l(){y.current=!1,C.current.style.display="none"}t<e?e<r+a?r=e:r+=a:r-a<e?r=e:r-=a,f.current.scrollTop=r,t<e?e<=r?l():"undefined"!=typeof window&&window.requestAnimationFrame(n):r<=e?l():"undefined"!=typeof window&&window.requestAnimationFrame(n)})))}(e,n)}function I(){x()}return(0,l.useImperativeHandle)(n,(function(){return{refresh:E,scrollToByIndex:function(e,n){void 0===n&&(n=300);for(var t,r=0;r<v.current.length;r++)if(v.current[r].index===e){t=v.current[r];break}b(t=t||v.current[v.current.length-1],n)},scrollToByHeaderEl:function(e,n){void 0===n&&(n=300);for(var t,r=0;r<v.current.length;r++)if(v.current[r].dom===e){t=v.current[r];break}b(t=t||v.current[v.current.length-1],n)}}})),(0,l.useLayoutEffect)((function(){return E(),function(){var e;C.current&&null!=(e=null==(e=C.current)?void 0:e.parentElement)&&e.removeChild(C.current)}}),[]),l.createElement("div",{className:a()(o,null!=t?t:""),style:null!=r?r:{},ref:m},l.createElement("div",{className:a()("".concat(o,"-fixed"),null!=c?c:""),style:null!=s?s:{},ref:p}),l.createElement("div",{className:a()("".concat(o,"-inner"),null!=u?u:""),style:null!=i?i:{},ref:f},e))},u=(0,l.memo)((0,l.forwardRef)(s));u.Item=c.Z,n.Z=u},833980:function(e,n,t){t.r(n);var r=t(991098),a=t(707591),l=t(5254),c=t(690171),o=t(296032);const s=[];s.length=10,s.fill(0);const u=[];function i(){return{columns:s.map(((e,n)=>({dataIndex:`column${n+1}`,isFixed:0===n,width:120,render:()=>c.createElement("h2",null,`指标${n+1}`)}))),dataSource:{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10}}}function d(){return u.map(((e,n)=>({title:c.createElement("h2",{style:{padding:"15px 0 15px 15px",margin:0,borderBottom:"1px solid rgba(0,0,0,.1)"}},`header${n+1}`),columns:s.map(((e,n)=>({dataIndex:`column${n+1}`,isFixed:0===n,width:120,render:()=>c.createElement("h4",null,`厂家指导价${n+1}`)}))),dataSource:[{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10},{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10},{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10}]})))}u.length=10,u.fill(0),n.default=()=>{const e=(0,c.useRef)(),n=(0,c.useRef)(),t=(0,c.useRef)(),[u,m]=(0,c.useState)(d());return(0,c.useEffect)((()=>{e.current.scrollToByIndex(u.length-1)}),[u]),c.createElement(o.ZP,{className:"CascadeCompared"},c.createElement(o.$0,{title:"CascadeCompared"},c.createElement("p",null,"级联比较")),c.createElement(o.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"公共代码",mode:"code",scope:{React:c},cardProps:{description:{title:"公共代码",info:"下面例子公共的代码"}},codeText:'\n  const columns = [];\n  columns.length = 10;\n  columns.fill(0);\n\n  const data = [];\n  data.length = 10;\n  data.fill(0);\n\n  function getIndicator() {\n    return {\n      columns: columns.map((t, i) => ({\n        dataIndex: "column" + (i + 1),\n        isFixed: i === 0,\n        width: 120,\n        render: () => <h2>{"指标" + (i + 1)}</h2>,\n      })),\n      dataSource: {\n        columns1: 1,\n        columns2: 2,\n        columns3: 3,\n        columns4: 4,\n        columns5: 5,\n        columns6: 6,\n        columns7: 7,\n        columns8: 8,\n        columns9: 9,\n        columns10: 10,\n      },\n    };\n  }\n\n  function getMaster() {\n    return data.map((t, i) => ({\n      title: (\n        <h2\n          style={{ padding: \'15px 0 15px 15px\', margin: 0, borderBottom: \'1px solid rgba(0,0,0,.1)\' }}\n        >{"header" + (i + 1)}</h2>\n      ),\n      columns: columns.map((c, j) => ({\n        dataIndex: "column" + (j + 1),\n        isFixed: j === 0,\n        width: 120,\n        render: () => <h4>{"厂家指导价" + (j + 1)}</h4>,\n      })),\n      dataSource: [\n        {\n          columns1: 1,\n          columns2: 2,\n          columns3: 3,\n          columns4: 4,\n          columns5: 5,\n          columns6: 6,\n          columns7: 7,\n          columns8: 8,\n          columns9: 9,\n          columns10: 10,\n        },\n        {\n          columns1: 1,\n          columns2: 2,\n          columns3: 3,\n          columns4: 4,\n          columns5: 5,\n          columns6: 6,\n          columns7: 7,\n          columns8: 8,\n          columns9: 9,\n          columns10: 10,\n        },\n        {\n          columns1: 1,\n          columns2: 2,\n          columns3: 3,\n          columns4: 4,\n          columns5: 5,\n          columns6: 6,\n          columns7: 7,\n          columns8: 8,\n          columns9: 9,\n          columns10: 10,\n        },\n      ],\n    }));\n  }\n      ',type:"PlayGround"},{id:"p2",name:"基本使用",mode:"code",scope:{React:c},cardProps:{description:{title:"基本使用",info:"基本的级联操作"}},codeText:"\n  import { CascadeCompared } from '@baifendian/adhere';\n\n  <div style={{ width: 320, height: 548, border: '1px solid rgba(0,0,0,.1)' }}>\n    <CascadeCompared indicator={getIndicator()} master={getMaster()} />\n  </div>\n      ",type:"PlayGround",renderChildren:()=>c.createElement("div",{style:{width:320,height:548,border:"1px solid rgba(0,0,0,.1)"}},c.createElement(a.Z,{indicator:i(),master:d()}))},{id:"p3",name:"在底部插入",mode:"code",scope:{React:c},cardProps:{description:{title:"在底部插入",info:"在底部插入行"}},codeText:"\n  import React, { useState } from 'react';\n  import { Button } from 'antd';\n  import { CascadeCompared, Space } from '@baifendian/adhere';\n\n  const [data1, setData1] = useState(getMaster());\n\n  <Button\n    type=\"primary\"\n    onClick={() => {\n      // eslint-disable-next-line no-shadow\n      setData1((data) => {\n        return data.concat([\n          {\n            title: (\n              <h2\n                style={{\n                  padding: '15px 0 15px 15px',\n                  margin: 0,\n                  borderBottom: '1px solid rgba(0,0,0,.1)',\n                }}\n              >{\"header\" + (data.length + 1)}</h2>\n            ),\n            columns: columns.map((c, j) => ({\n              dataIndex: \"column\" + (j + 1),\n              isFixed: j === 0,\n              width: 120,\n              render: () => <h4>{\"厂家指导价\" + (j + 1)}</h4>,\n            })),\n            dataSource: [\n              {\n                columns1: 1,\n                columns2: 2,\n                columns3: 3,\n                columns4: 4,\n                columns5: 5,\n                columns6: 6,\n                columns7: 7,\n                columns8: 8,\n                columns9: 9,\n                columns10: 10,\n              },\n              {\n                columns1: 1,\n                columns2: 2,\n                columns3: 3,\n                columns4: 4,\n                columns5: 5,\n                columns6: 6,\n                columns7: 7,\n                columns8: 8,\n                columns9: 9,\n                columns10: 10,\n              },\n              {\n                columns1: 1,\n                columns2: 2,\n                columns3: 3,\n                columns4: 4,\n                columns5: 5,\n                columns6: 6,\n                columns7: 7,\n                columns8: 8,\n                columns9: 9,\n                columns10: 10,\n              },\n            ],\n          },\n        ]);\n      });\n    }}\n  >\n    插入\n  </Button>\n\n  <Space direction=\"vertical\" />\n\n  <div style={{ width: 320, height: 548, border: '1px solid rgba(0,0,0,.1)' }}>\n    <CascadeCompared ref={ref1} indicator={getIndicator()} master={data1} />\n  </div>\n      ",type:"PlayGround",renderChildren:()=>c.createElement(c.Fragment,null,c.createElement(l.ZP,{type:"primary",onClick:()=>{m((e=>e.concat([{title:c.createElement("h2",{style:{padding:"15px 0 15px 15px",margin:0,borderBottom:"1px solid rgba(0,0,0,.1)"}},`header${e.length+1}`),columns:s.map(((e,n)=>({dataIndex:`column${n+1}`,isFixed:0===n,width:120,render:()=>c.createElement("h4",null,`厂家指导价${n+1}`)}))),dataSource:[{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10},{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10},{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10}]}])))}},"插入"),c.createElement(r.Z,{direction:"vertical"}),c.createElement("div",{style:{width:320,height:548,border:"1px solid rgba(0,0,0,.1)"}},c.createElement(a.Z,{ref:e,indicator:i(),master:u})))},{id:"p4",name:"通过索引滚动",mode:"code",scope:{React:c},cardProps:{description:{title:"通过索引滚动",info:"通过索引滚动到顶部"}},codeText:"\n  import React, { useRef } from 'react';\n  import { Button } from 'antd';\n  import { CascadeCompared, Space } from '@baifendian/adhere';\n\n  const ref2 = useRef();\n\n  <Space.Group direction=\"horizontal\">\n    <Button\n      type=\"primary\"\n      onClick={() => {\n        ref2.current.scrollToByIndex(9, 0);\n      }}\n    >\n      滚动到底部(无动画)\n    </Button>\n\n    <Button\n      onClick={() => {\n        ref2.current.scrollToByIndex(9);\n      }}\n    >\n      滚动到底部(有动画)\n    </Button>\n\n    <Button\n      onClick={() => {\n        ref2.current.scrollToByIndex(0);\n      }}\n    >\n      回到顶部\n    </Button>\n  </Space.Group>\n\n  <Space direction=\"vertical\" />\n\n  <div style={{ width: 320, height: 548, border: '1px solid rgba(0,0,0,.1)' }}>\n    <CascadeCompared ref={ref2} indicator={getIndicator()} master={getMaster()} />\n  </div>\n      ",type:"PlayGround",renderChildren:()=>c.createElement(c.Fragment,null,c.createElement(r.Z.Group,{direction:"horizontal"},c.createElement(l.ZP,{type:"primary",onClick:()=>{n.current.scrollToByIndex(9,0)}},"滚动到底部(无动画)"),c.createElement(l.ZP,{onClick:()=>{n.current.scrollToByIndex(9)}},"滚动到底部(有动画)"),c.createElement(l.ZP,{onClick:()=>{n.current.scrollToByIndex(0)}},"回到顶部")),c.createElement(r.Z,{direction:"vertical"}),c.createElement("div",{style:{width:320,height:548,border:"1px solid rgba(0,0,0,.1)"}},c.createElement(a.Z,{ref:n,indicator:i(),master:d()})))},{id:"p5",name:"滚动到指定列",mode:"code",scope:{React:c},cardProps:{description:{title:"滚动到指定列",info:"滚动到指定列"}},codeText:"\n  import React, { useRef } from 'react';\n  import { Button } from 'antd';\n  import { CascadeCompared, Space } from '@baifendian/adhere';\n\n  const ref3 = useRef();\n\n  <Space.Group direction=\"horizontal\">\n    <Button\n      type=\"primary\"\n      onClick={() => {\n        ref3.current.scrollToByColumn(1);\n      }}\n    >\n      滚动到第一列\n    </Button>\n\n    <Button\n      onClick={() => {\n        ref3.current.scrollToByColumn(9);\n      }}\n    >\n      滚动到最后一列(有动画)\n    </Button>\n  </Space.Group>\n\n  <Space direction=\"vertical\" />\n\n  <div style={{ width: 320, height: 548, border: '1px solid rgba(0,0,0,.1)' }}>\n    <CascadeCompared ref={ref3} indicator={getIndicator()} master={getMaster()} />\n  </div>\n      ",type:"PlayGround",renderChildren:()=>c.createElement(c.Fragment,null,c.createElement(r.Z.Group,{direction:"horizontal"},c.createElement(l.ZP,{type:"primary",onClick:()=>{t.current.scrollToByColumn(1)}},"滚动到第一列"),c.createElement(l.ZP,{onClick:()=>{t.current.scrollToByColumn(9)}},"滚动到最后一列(有动画)")),c.createElement(r.Z,{direction:"vertical"}),c.createElement("div",{style:{width:320,height:548,border:"1px solid rgba(0,0,0,.1)"}},c.createElement(a.Z,{ref:t,indicator:i(),master:d()})))}]}),c.createElement(o.sB,{title:"Props",config:[{border:!0,title:"CascadeCompared",data:[{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"indicatorClassName",desc:"indicator附加的样式表",type:"string",defaultVal:""},{params:"indicatorStyle",desc:"indicator的样式",type:"React.CSSProperties",defaultVal:""},{params:"indicatorFixedWrapClassName",desc:"indicatorFixedWrap样式表",type:"string",defaultVal:""},{params:"indicatorFixedWrapStyle",desc:"indicatorFixedWrap附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"indicatorAutoWrapClassName",desc:"indicatorAutoWrap样式表",type:"string",defaultVal:""},{params:"indicatorAutoWrapStyle",desc:"indicatorAutoWrap附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"masterClassName",desc:"masterWrap样式表",type:"string",defaultVal:""},{params:"masterStyle",desc:"master附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"masterInnerClassName",desc:"masterInner样式表",type:"string",defaultVal:""},{params:"masterInnerStyle",desc:"masterInner附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"masterStickFixedClassName",desc:"masterStickFixed样式表",type:"string",defaultVal:""},{params:"masterStickFixedStyle",desc:"masterStickFixed附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"masterStickInnerClassName",desc:"masterStickInner样式表",type:"string",defaultVal:""},{params:"masterStickInnerStyle",desc:"masterStickInner附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"indicator",desc:"指示器数据",type:"IIndicatorTableConfig",defaultVal:""},{params:"master",desc:"主数据",type:"Array<IMasterItem>",defaultVal:""},{params:"onStickChange",desc:"滚动改变钩子",type:"Function",defaultVal:""},{params:"defaultCellWidth",desc:"缺省的列宽度",type:"number | string",defaultVal:"120"}]},{border:!0,title:"IIndicatorTableConfig",data:[{params:"columns",desc:"列配置",type:"Array<IColumnConfig>",defaultVal:"[]"},{params:"dataSource",desc:"数据",type:"Object",defaultVal:"{}"}]},{border:!0,title:"IColumnConfig",data:[{params:"dataIndex",desc:"数据索引",type:"string",defaultVal:""},{params:"isFixed",desc:"是否是固定列",type:"boolean",defaultVal:"false"},{params:"width",desc:"列的宽度",type:"number | string",defaultVal:"120"},{params:"render",desc:"渲染列的方法",type:"Function",defaultVal:"120"},{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""}]},{border:!0,title:"IMasterItem",data:[{params:"columns",desc:"列配置",type:"Array<IColumnConfig>",defaultVal:"[]"},{params:"dataSource",desc:"数据",type:"Array<Object>",defaultVal:"[]"},{params:"title",desc:"header",type:"React.ReactElement",defaultVal:""},{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:"{}"},{params:"fixedWrapClassName",desc:"附加的样式表",type:"string",defaultVal:""},{params:"fixedWrapStyle",desc:"附加的样式",type:"React.CSSProperties",defaultVal:"{}"},{params:"autoWrapClassName",desc:"附加的样式表",type:"string",defaultVal:""},{params:"autoWrapStyle",desc:"附加的样式",type:"React.CSSProperties",defaultVal:"{}"},{params:"autoInnerClassName",desc:"附加的样式表",type:"string",defaultVal:""},{params:"autoInnerStyle",desc:"附加的样式",type:"React.CSSProperties",defaultVal:"{}"}]}]}),c.createElement(o.ae,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"scrollToByIndex",desc:"滚动到指定所引出",modifier:"public",params:[{name:"index",desc:"滚动到的索引",type:"number",defaultVal:"",required:"true"},{name:"duration",desc:"滚动的时间",type:"number",defaultVal:"600",required:""}],returnType:"",returnDesc:""},{name:"scrollToByHeaderEl",desc:"滚动到指定el",modifier:"public",params:[{name:"headerEl",desc:"指定的el",type:"HtmlElement",defaultVal:"",required:"true"},{name:"duration",desc:"滚动的时间",type:"number",defaultVal:"300",required:""}],returnType:"",returnDesc:""},{name:"scrollToByColumn",desc:"滚动到指定列",modifier:"public",params:[{name:"columnIndex",desc:"列的索引从1开始",type:"number",defaultVal:"",required:"true"}],returnType:"",returnDesc:""}]}]}))}},296032:function(e,n,t){t.d(n,{$0:function(){return s},ae:function(){return d},e0:function(){return u},sB:function(){return i}});var r=t(570517),a=t(153757),l=t(690171);const{PlayGroundPageContext:c,PlayGroundPage:o}=a.default,{Section:s,CodeBoxSection:u,PropsSection:i,FunctionPropsSection:d}=o;n.ZP=function(e){let{children:n,...t}=e;const[a,s]=(0,l.useState)(),u=(0,l.useRef)();return(0,l.useEffect)((()=>{s(u.current.parentElement.parentElement)}),[]),l.createElement(c.Provider,{value:{scrollEl:a}},l.createElement(o,(0,r.Z)({ref:u},t),n))}},707591:function(e,n,t){var r=t(539447);n.Z=r.Z},991098:function(e,n,t){var r=t(682796);n.Z=r.Z}}]);