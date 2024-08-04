"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[568],{68202:(e,r,n)=>{n.d(r,{A:()=>g});var t=n(79073),o=n.n(t),c=n(88724),a=n(54043),l=function(e,r,n){if(n||2===arguments.length)for(var t,o=0,c=r.length;o<c;o++)!t&&o in r||((t=t||Array.prototype.slice.call(r,0,o))[o]=r[o]);return e.concat(t||Array.prototype.slice.call(r))},i=a.A.Events,u={},s="__",d=["".concat(s,"parentName").concat(s),"".concat(s,"parent").concat(s)],m=["$",s],p=[s];function f(e){return!(m.some((function(r){return e.startsWith(r)}))||p.some((function(r){return e.endsWith(r)})))}function h(e,r,n){var t,a=new Proxy(e,{set:function(e,t,a,l){if(f(t)){var i,u,s,m;if(c.A.isArray(e))return m=e.length,i=Reflect.set(e,t,a,l),u=c.A.getPropertyVisitPathStr(e,t),r[u]=o()(e),s=e.length,n.trigger(u,t,a),s<m||!c.A.isObject(a)&&!c.A.isArray(a)||d[0]in a||((a=h(a,r,n))[d[0]]="[".concat(t,"]"),a[d[1]]=e,i=Reflect.set(e,t,a,l)),i;c.A.isObject(e)&&(u=c.A.getPropertyVisitPathStr(e,t),s=void 0,m=o()(a),n.trigger(u,a,m),s=s||o()(a),r[u]=s,!c.A.isObject(a)&&!c.A.isArray(a)||d[0]in a||((a=h(a,r,n))[d[0]]=t,a[d[1]]=e))}return Reflect.set(e,t,a,l)},deleteProperty:function(e,t){var o;return f(t)&&!c.A.isArray(e)&&(o=c.A.getPropertyVisitPathStr(e,t),n.trigger(o,t),delete r[o]),Reflect.deleteProperty(e,t)}});for(t in e){var l=e[t];f(t)&&(c.A.isObject(l)||c.A.isArray(l))&&(e[t]=h(l,r,n),l[d[0]]=c.A.isArray(e)?"[".concat(t,"]"):t,l[d[1]]=e)}return a}const g={createRef:function(e){var r=Symbol.for(c.A.uuid()),n=e;return Object.defineProperty(u,r,{enumerable:!0,configurable:!0,set:function(e){var t=n;n=e,a.A.trigger(Symbol.keyFor(r),{oldValue:t,newValue:e})},get:function(){return n}}),[function(){return u[r]},function(e){u[r]=e},r]},memoized:{watch:{all:function(e,r){r=Array.from(new Set(l([],r,!0)));var n=[],t=[];function o(r){var n=t.find((function(e){return e.type===r}));n&&(n.isChange=!0),t.every((function(e){return e.isChange}))&&(t.forEach((function(e){return e.isChange=!1})),e())}return r.forEach((function(e){var r;function l(n){var t,a=n.oldValue;n=n.newValue;c.A.isSymbol(e)?a!==n&&o(r):"light"===(t=e).mode?Object.is(a,n)||o(r):"deep"===t.mode?c.A.isRef(a)&&c.A.isRef(n)?JSON.stringify(a)!==JSON.stringify(n)&&o(r):Object.is(a,n)||o(r):c.A.isFunction(t.mode)&&!t.mode(a,n)&&o(r)}r=c.A.isSymbol(e)?Symbol.keyFor(e):Symbol.keyFor(e.property),t.push({type:r,isChange:!1}),n.push({type:r,handler:l}),a.A.on(r,l)})),function(){n.forEach((function(e){var r=e.type;e=e.handler;a.A.remove(r,e)}))}},race:function(e,r){r=Array.from(new Set(l([],r,!0)));var n=[];return r.forEach((function(r){var t;function o(n){var t,o=n.oldValue;n=n.newValue;c.A.isSymbol(r)?o!==n&&e():"light"===(t=r).mode?Object.is(o,n)||e():"deep"===t.mode?c.A.isRef(o)&&c.A.isRef(n)?JSON.stringify(o)!==JSON.stringify(n)&&e():Object.is(o,n)||e():c.A.isFunction(t.mode)&&!t.mode(o,n)&&e()}t=c.A.isSymbol(r)?Symbol.keyFor(r):Symbol.keyFor(r.property),n.push({type:t,handler:o}),a.A.on(t,o)})),function(){n.forEach((function(e){var r=e.type;e=e.handler;a.A.remove(r,e)}))}}},createMemoFun:function(e,r){void 0===r&&(r=10);var n=[],t=[function(e,r){return e.length===r.length},function(e,r){for(var n=!0,t=0;t<e.length;t++){var a=e[t],l=r[t];if(!(n=c.A.isRef(a)&&c.A.isRef(l)?JSON.stringify(o()(a))===JSON.stringify(o()(l)):a===l))break}return n}];return function(){for(var o=[],c=0;c<arguments.length;c++)o[c]=arguments[c];return function(o){if(!(a=function(e){void 0===e&&(e=[]);for(var r=null,o=0;o<n.length;o++){var c=n[o],a=c.resultVal;if(function(e,r){for(var n=!0,o=0;o<t.length&&(n=(0,t[o])(e,r));o++);return n}(c.depends,e)){r=a;break}}return r}(o=void 0===o?[]:o))){var c,a=e.apply(this,o);if(n.length>=r&&n.shift(),a instanceof Promise)return c=a.then((function(e){return e})),n.push({depends:o,resultVal:c}),c;n.push({depends:o,resultVal:a})}return a}.call(this,o||[])}}},watch:{create:function(e,r){var n=new i;if(!c.A.isEmpty(r))for(var t in r)n.on(t,r[t]);return{value:h(e,o()(e),n),on:function(e,r){n.on(e,r)},remove:function(e,r){n.remove(e,r)}}}}}},75287:(e,r,n)=>{n.r(r),n.d(r,{default:()=>A});var t=n(26322),o=n(19994),c=n(32517);const a=n(68202).A;var l=n(80711);const{createRef:i,memoized:u}=a,s=()=>{const[e,r,n]=i([{a:1}]);console.log("srcValue1",e()),u.watch.race((()=>{console.log("changeValue",e())}),[{property:n,mode:"light"}]);const[o,a,s]=i({a:1});console.log("srcValue2",o()),u.watch.race((()=>{console.log("changeValue",o())}),[{property:s,mode:"deep"}]);const[d,m,p]=i({a:1});return console.log("srcValue3",d()),u.watch.race((()=>{console.log("changeValue",d())}),[{property:p,mode:function(e,r){return e===r}}]),t.createElement(c.A.Group,{direction:"horizontal",size:10},t.createElement(l.Ay,{onClick:()=>{r([{a:1}])}},"light比较"),t.createElement(l.Ay,{onClick:()=>{a({a:2})}},"deep比较"),t.createElement(l.Ay,{onClick:()=>{m({a:2})}},"自定义比较"))},{createRef:d,memoized:m}=a,p=()=>{const[e,r,n]=d([{a:1}]),[o,a,i]=d([{a:2}]);return console.log("srcValue4",e()),console.log("srcValue5",o()),m.watch.all((()=>{console.log("changeValue",e()),console.log("changeValue",o())}),[{property:n,mode:"light"},{property:i,mode:"light"}]),t.createElement(c.A.Group,{direction:"horizontal",size:10},t.createElement(l.Ay,{onClick:()=>{r([{a:1}]),a([{a:2}])}},"light比较"))},{watch:f}=a,h=()=>{const e=f.create({},{a:()=>{console.log("a改变了")},b:()=>{console.log("b改变了")},c:()=>{console.log("c改变了")},"c.c1":()=>{console.log("c.c1改变了")},"c.c1.c111.c1111":e=>{console.log("c.c1.c111.c1111改变了",e)}});return e.on("c.c1.c111",(()=>{console.log("c.c1.c111改变了")})),t.createElement(c.A.Group,{direction:"horizontal",size:10},t.createElement(l.Ay,{onClick:()=>{e.value.a="a",e.value.b="b",e.value.c={gl:1},e.value.c.c1={g2:2},e.value.c.c1.c111={g3:3,c1111:"1"},delete e.value.c.c1.c111.c1111}},"对obj1进行监控"))},{memoized:g}=a,y=()=>{const e=g.createMemoFun((function(){console.log("callSumFun");for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.reduce(((e,r)=>e+r),0)}));return t.createElement(c.A.Group,{direction:"horizontal",size:10},t.createElement(l.Ay,{onClick:()=>{console.log("subFun",e({a:1},2,3)),console.log("subFun",e({a:1},2,3))}},"调用memoized函数"))},{memoized:V}=a,b=()=>{const e=V.createMemoFun((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return console.log("callAnyncFun"),new Promise((e=>{e(r.reduce(((e,r)=>e+r),0))}))}));return t.createElement(c.A.Group,{direction:"horizontal",size:10},t.createElement(l.Ay,{onClick:()=>{e(1,2,3).then((e=>{console.log("asyncFun",e)})),console.log("asyncFun",e(1,2,3)),console.log("asyncFun",e(1,2,4)),console.log("asyncFun",e(1,2,4))}},"调用memoized函数"))},A=()=>t.createElement(o.Ay,null,t.createElement(o.wn,{title:"WatchMemoized"},t.createElement("p",null,"对值的监控和缓存"),t.createElement("p",null,"缓存"),t.createElement("ul",null,t.createElement("li",null,"支持多值监控"),t.createElement("li",null,"支持deep、light和自定义三种比较是否修改的方式"),t.createElement("li",null,"支持all和race两种触发修改的方式"),t.createElement("li",null,"支持函数调用返回值的缓存")),t.createElement("p",null,"监控"),t.createElement("p",null,"支持类似与Vue的watch监控")),t.createElement(o.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"单值缓存监控",mode:"code",scope:{React:t},cardProps:{description:{title:"单值缓存监控",info:"单值缓存监控"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { Space, WatchMemoized } from '@baifendian/adhere';\r\n\r\nconst { createRef, memoized } = WatchMemoized;\r\n\r\nexport default () => {\r\n  // 单值监控light比较\r\n  const [get1Value, set1Value, property1] = createRef([{ a: 1 }]);\r\n  console.log('srcValue1', get1Value());\r\n  memoized.watch.race(() => {\r\n    console.log('changeValue', get1Value());\r\n  }, [\r\n    {\r\n      property: property1,\r\n      mode: 'light',\r\n    },\r\n  ]);\r\n\r\n  // 单值监控deep比较\r\n  const [get2Value, set2Value, property2] = createRef({ a: 1 });\r\n  console.log('srcValue2', get2Value());\r\n  memoized.watch.race(() => {\r\n    console.log('changeValue', get2Value());\r\n  }, [\r\n    {\r\n      property: property2,\r\n      mode: 'deep',\r\n    },\r\n  ]);\r\n\r\n  // 单值监控自定义比较\r\n  const [get3Value, set3Value, property3] = createRef({ a: 1 });\r\n  console.log('srcValue3', get3Value());\r\n  memoized.watch.race(() => {\r\n    console.log('changeValue', get3Value());\r\n  }, [\r\n    {\r\n      property: property3,\r\n      mode: function (oldValue, newValue) {\r\n        return oldValue === newValue;\r\n      },\r\n    },\r\n  ]);\r\n\r\n  return (\r\n    <Space.Group direction=\"horizontal\" size={10}>\r\n      <Button\r\n        onClick={() => {\r\n          set1Value([{ a: 1 }]);\r\n        }}\r\n      >\r\n        light比较\r\n      </Button>\r\n\r\n      <Button\r\n        onClick={() => {\r\n          set2Value({ a: 2 });\r\n        }}\r\n      >\r\n        deep比较\r\n      </Button>\r\n\r\n      <Button\r\n        onClick={() => {\r\n          set3Value({ a: 2 });\r\n        }}\r\n      >\r\n        自定义比较\r\n      </Button>\r\n    </Space.Group>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(s,null)},{id:"p2",name:"多值缓存监控",mode:"code",scope:{React:t},cardProps:{description:{title:"多值缓存监控",info:"多值缓存监控"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { Space, WatchMemoized } from '@baifendian/adhere';\r\n\r\nconst { createRef, memoized } = WatchMemoized;\r\n\r\nexport default () => {\r\n  // 多值监控light比较\r\n  const [get4Value, set4Value, property4] = createRef([{ a: 1 }]);\r\n  const [get5Value, set5Value, property5] = createRef([{ a: 2 }]);\r\n  console.log('srcValue4', get4Value());\r\n  console.log('srcValue5', get5Value());\r\n  memoized.watch.all(() => {\r\n    console.log('changeValue', get4Value());\r\n    console.log('changeValue', get5Value());\r\n  }, [\r\n    {\r\n      property: property4,\r\n      mode: 'light',\r\n    },\r\n    {\r\n      property: property5,\r\n      mode: 'light',\r\n    },\r\n  ]);\r\n\r\n  return (\r\n    <Space.Group direction=\"horizontal\" size={10}>\r\n      <Button\r\n        onClick={() => {\r\n          set4Value([{ a: 1 }]);\r\n          set5Value([{ a: 2 }]);\r\n        }}\r\n      >\r\n        light比较\r\n      </Button>\r\n    </Space.Group>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(p,null)},{id:"p3",name:"watch对象的变化",mode:"code",scope:{React:t},cardProps:{description:{title:"watch对象的变化",info:"watch对象的变化"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { Space, WatchMemoized } from '@baifendian/adhere';\r\n\r\nconst { watch } = WatchMemoized;\r\n\r\nexport default () => {\r\n  // watch监控对象的变化\r\n  const srcObj1 = {};\r\n  const watchObj1 = watch.create(srcObj1, {\r\n    a: () => {\r\n      console.log('a改变了');\r\n    },\r\n    b: () => {\r\n      console.log('b改变了');\r\n    },\r\n    c: () => {\r\n      console.log('c改变了');\r\n    },\r\n    'c.c1': () => {\r\n      console.log('c.c1改变了');\r\n    },\r\n    'c.c1.c111.c1111': (property) => {\r\n      console.log('c.c1.c111.c1111改变了', property);\r\n    },\r\n  });\r\n  watchObj1.on('c.c1.c111', () => {\r\n    console.log('c.c1.c111改变了');\r\n  });\r\n\r\n  return (\r\n    <Space.Group direction=\"horizontal\" size={10}>\r\n      <Button\r\n        onClick={() => {\r\n          watchObj1.value.a = 'a';\r\n          watchObj1.value.b = 'b';\r\n          watchObj1.value.c = { gl: 1 };\r\n          watchObj1.value.c.c1 = {\r\n            g2: 2,\r\n          };\r\n          watchObj1.value.c.c1.c111 = {\r\n            g3: 3,\r\n            c1111: '1',\r\n          };\r\n\r\n          delete watchObj1.value.c.c1.c111.c1111;\r\n        }}\r\n      >\r\n        对obj1进行监控\r\n      </Button>\r\n    </Space.Group>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(h,null)},{id:"p4",name:"创建一个memoized的普通函数",mode:"code",scope:{React:t},cardProps:{description:{title:"创建一个memoized的普通函数",info:"创建一个memoized的普通函数"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { Space, WatchMemoized } from '@baifendian/adhere';\r\n\r\nconst { memoized } = WatchMemoized;\r\n\r\nexport default () => {\r\n  // 创建一个memoized的函数\r\n  const sumFun = memoized.createMemoFun((...params) => {\r\n    console.log('callSumFun');\r\n    return params.reduce((pre, current) => pre + current, 0);\r\n  });\r\n\r\n  return (\r\n    <Space.Group direction=\"horizontal\" size={10}>\r\n      <Button\r\n        onClick={() => {\r\n          console.log('subFun', sumFun({ a: 1 }, 2, 3));\r\n          console.log('subFun', sumFun({ a: 1 }, 2, 3));\r\n        }}\r\n      >\r\n        调用memoized函数\r\n      </Button>\r\n    </Space.Group>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(y,null)},{id:"p5",name:"创建一个memoized的Promise函数",mode:"code",scope:{React:t},cardProps:{description:{title:"创建一个memoized的Promise函数",info:"创建一个memoized的Promise函数"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { Space, WatchMemoized } from '@baifendian/adhere';\r\n\r\nconst { memoized } = WatchMemoized;\r\n\r\nexport default () => {\r\n  // 创建一个memoized的Promise函数\r\n  const asyncFun = memoized.createMemoFun((...params) => {\r\n    console.log('callAnyncFun');\r\n    return new Promise((resolve) => {\r\n      resolve(params.reduce((pre, current) => pre + current, 0));\r\n    });\r\n  });\r\n\r\n  return (\r\n    <Space.Group direction=\"horizontal\" size={10}>\r\n      <Button\r\n        onClick={() => {\r\n          asyncFun(1, 2, 3).then((res) => {\r\n            console.log('asyncFun', res);\r\n          });\r\n\r\n          console.log('asyncFun', asyncFun(1, 2, 3));\r\n\r\n          console.log('asyncFun', asyncFun(1, 2, 4));\r\n          console.log('asyncFun', asyncFun(1, 2, 4));\r\n        }}\r\n      >\r\n        调用memoized函数\r\n      </Button>\r\n    </Space.Group>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(b,null)}]}),t.createElement(o.I7,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"createRef",desc:"创建一个值(其实就是在srcObj中创建一个属性)",modifier:"public",params:[{name:"defaultValue",desc:"缺省值",type:"any",defaultVal:"",required:"true"}],returnType:"[getData, setData, property]",returnDesc:""},{name:"memoized.watch.all",desc:"对依赖项的监控(所有依赖项全部发生改变才执行handler)",modifier:"public",params:[{name:"handler",desc:"函数句柄",type:"Function",defaultVal:"",required:"true"},{name:"depends",desc:"依赖项",type:"Array<Symbol | {property,mode}>",defaultVal:"[]",required:"true"}],returnType:"Function",returnDesc:"返回清空所有订阅句柄的方法"},{name:"memoized.watch.race",desc:"对依赖项的监控(只要有一个依赖项发生改变的时候就执行handler)",modifier:"public",params:[{name:"handler",desc:"函数句柄",type:"Function",defaultVal:"",required:"true"},{name:"depends",desc:"依赖项",type:"Array<Symbol | {property,mode}>",defaultVal:"[]",required:"true"}],returnType:"Function",returnDesc:"返回清空所有订阅句柄的方法"},{name:"memoized.createMemoFun",desc:"创建一个memo的Function",modifier:"public",params:[{name:"handler",desc:"函数实现",type:"Function",defaultVal:"",required:"true"},{name:"stackMaxSize",desc:"最大缓存栈的大小",type:"number",defaultVal:"10",required:"true"}],returnType:"Function",returnDesc:"返回一个可以调用的函数"},{name:"watch.create",desc:"create - 创建一个watch对象",modifier:"public",params:[{name:"srcObj",desc:"原始对象",type:"Object",defaultVal:"",required:"true"},{name:"listeners",desc:"监控对象",type:"Object",defaultVal:"",required:"true"}],returnType:"{value,on:(expression,handler),remove:(expression,handler)}",returnDesc:""}]}]}))},19994:(e,r,n)=>{n.d(r,{Ay:()=>m,I7:()=>d,Wc:()=>u,e6:()=>s,wn:()=>i});var t=n(71860),o=n(24370),c=n(26322);const{PlayGroundPageContext:a,PlayGroundPage:l}=o.A,{Section:i,CodeBoxSection:u,PropsSection:s,FunctionPropsSection:d}=l;const m=function(e){let{children:r,onScrollBottom:n,distance:o=50,...i}=e;const[u,s]=(0,c.useState)(),d=(0,c.useRef)(),m=(0,c.useRef)(!1);return(0,c.useEffect)((()=>{function e(){const e=r.scrollHeight-r.offsetHeight,t=r.scrollTop;if(n&&Math.abs(t-e)<=o){if(m.current)return;m.current=!0,null==n||n().then((()=>{m.current=!1}))}}const r=d.current.parentElement.parentElement;return r.addEventListener("scroll",e),s(r),()=>{r.removeEventListener("scroll",e)}}),[]),c.createElement(a.Provider,{value:{scrollEl:u}},c.createElement(l,(0,t.A)({ref:d},i),r))}},32517:(e,r,n)=>{n.d(r,{A:()=>t});const t=n(2382).A}}]);