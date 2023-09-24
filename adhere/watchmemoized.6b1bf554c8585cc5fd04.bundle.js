"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[6131],{7678:function(e,n,t){t.d(n,{Z:function(){return y}});var o=t(42865),r=t.n(o),c=t(33240),a=t(77646),l=function(e,n,t){if(t||2===arguments.length)for(var o,r=0,c=n.length;r<c;r++)!o&&r in n||((o=o||Array.prototype.slice.call(n,0,r))[r]=n[r]);return e.concat(o||Array.prototype.slice.call(n))},i=a.Z.Events,u={},s="__",d=["".concat(s,"parentName").concat(s),"".concat(s,"parent").concat(s)],m=["$",s],p=[s];function f(e){return!(m.some((function(n){return e.startsWith(n)}))||p.some((function(n){return e.endsWith(n)})))}function h(e,n,t){var o,a=new Proxy(e,{set:function(e,o,a,l){if(f(o)){var i,u,s,m;if(c.Z.isArray(e))return m=e.length,i=Reflect.set(e,o,a,l),u=c.Z.getPropertyVisitPathStr(e,o),n[u]=r()(e),s=e.length,t.trigger(u,o,a),s<m||!c.Z.isObject(a)&&!c.Z.isArray(a)||d[0]in a||((a=h(a,n,t))[d[0]]="[".concat(o,"]"),a[d[1]]=e,i=Reflect.set(e,o,a,l)),i;c.Z.isObject(e)&&(u=c.Z.getPropertyVisitPathStr(e,o),s=void 0,m=r()(a),t.trigger(u,a,m),s=s||r()(a),n[u]=s,!c.Z.isObject(a)&&!c.Z.isArray(a)||d[0]in a||((a=h(a,n,t))[d[0]]=o,a[d[1]]=e))}return Reflect.set(e,o,a,l)},deleteProperty:function(e,o){var r;return f(o)&&!c.Z.isArray(e)&&(r=c.Z.getPropertyVisitPathStr(e,o),t.trigger(r,o),delete n[r]),Reflect.deleteProperty(e,o)}});for(o in e){var l=e[o];f(o)&&(c.Z.isObject(l)||c.Z.isArray(l))&&(e[o]=h(l,n,t),l[d[0]]=c.Z.isArray(e)?"[".concat(o,"]"):o,l[d[1]]=e)}return a}var g={createRef:function(e){var n=Symbol.for(c.Z.uuid()),t=e;return Object.defineProperty(u,n,{enumerable:!0,configurable:!0,set:function(e){var o=t;t=e,a.Z.trigger(Symbol.keyFor(n),{oldValue:o,newValue:e})},get:function(){return t}}),[function(){return u[n]},function(e){u[n]=e},n]},memoized:{watch:{all:function(e,n){n=Array.from(new Set(l([],n,!0)));var t=[],o=[];function r(n){var t=o.find((function(e){return e.type===n}));t&&(t.isChange=!0),o.every((function(e){return e.isChange}))&&(o.forEach((function(e){return e.isChange=!1})),e())}return n.forEach((function(e){var n;function l(t){var o,a=t.oldValue;t=t.newValue;c.Z.isSymbol(e)||"light"===(o=e).mode?a!==t&&r(n):"deep"===o.mode?c.Z.isRef(a)&&c.Z.isRef(t)?JSON.stringify(a)!==JSON.stringify(t)&&r(n):a!==t&&r(n):c.Z.isFunction(o.mode)&&!o.mode(a,t)&&r(n)}n=c.Z.isSymbol(e)?Symbol.keyFor(e):Symbol.keyFor(e.property),o.push({type:n,isChange:!1}),t.push({type:n,handler:l}),a.Z.on(n,l)})),function(){t.forEach((function(e){var n=e.type;e=e.handler;a.Z.remove(n,e)}))}},race:function(e,n){n=Array.from(new Set(l([],n,!0)));var t=[];return n.forEach((function(n){var o;function r(t){var o,r=t.oldValue;t=t.newValue;c.Z.isSymbol(n)||"light"===(o=n).mode?r!==t&&e():"deep"===o.mode?c.Z.isRef(r)&&c.Z.isRef(t)?JSON.stringify(r)!==JSON.stringify(t)&&e():r!==t&&e():c.Z.isFunction(o.mode)&&!o.mode(r,t)&&e()}o=c.Z.isSymbol(n)?Symbol.keyFor(n):Symbol.keyFor(n.property),t.push({type:o,handler:r}),a.Z.on(o,r)})),function(){t.forEach((function(e){var n=e.type;e=e.handler;a.Z.remove(n,e)}))}}},createMemoFun:function(e,n){void 0===n&&(n=10);var t=[],o=[function(e,n){return e.length===n.length},function(e,n){for(var t=!0,o=0;o<e.length;o++){var a=e[o],l=n[o];if(!(t=c.Z.isRef(a)&&c.Z.isRef(l)?JSON.stringify(r()(a))===JSON.stringify(r()(l)):a===l))break}return t}];return function(){for(var r=[],c=0;c<arguments.length;c++)r[c]=arguments[c];return function(r){if(!(a=function(e){void 0===e&&(e=[]);for(var n=null,r=0;r<t.length;r++){var c=t[r],a=c.resultVal;if(function(e,n){for(var t=!0,r=0;r<o.length&&(t=(0,o[r])(e,n));r++);return t}(c.depends,e)){n=a;break}}return n}(r=void 0===r?[]:r))){var c,a=e.apply(this,r);if(t.length>=n&&t.shift(),a instanceof Promise)return c=a.then((function(e){return e})),t.push({depends:r,resultVal:c}),c;t.push({depends:r,resultVal:a})}return a}.call(this,r||[])}}},watch:{create:function(e,n){var t=new i;if(!c.Z.isEmpty(n))for(var o in n)t.on(o,n[o]);return{value:h(e,r()(e),t),on:function(e,n){t.on(e,n)},remove:function(e,n){t.remove(e,n)}}}}},y=g},53329:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var o=t(91098),r=t(7678).Z,c=t(17464),a=t(90171),l=t(96032);const{createRef:i,memoized:u,watch:s}=r;var d=()=>{const[e,n,t]=i([{a:1}]);console.log("srcValue1",e()),u.watch.race((()=>{console.log("changeValue",e())}),[{property:t,mode:"light"}]);const[r,d,m]=i([{a:1}]);console.log("srcValue2",r()),u.watch.race((()=>{console.log("changeValue",r())}),[{property:m,mode:"deep"}]);const[p,f,h]=i([{a:1}]);console.log("srcValue3",p()),u.watch.race((()=>{console.log("changeValue",p())}),[{property:h,mode:e=>{let{oldValue:n,newValue:t}=e;return n===t}}]);const[g,y,b]=i([{a:1}]),[V,v,z]=i([{a:2}]);console.log("srcValue4",g()),console.log("srcValue5",V()),u.watch.all((()=>{console.log("changeValue",g()),console.log("changeValue",V())}),[{property:b,mode:"light"},{property:z,mode:"light"}]);const w=s.create({},{a:()=>{console.log("a改变了")},b:()=>{console.log("b改变了")},c:()=>{console.log("c改变了")},"c.c1":()=>{console.log("c.c1改变了")},"c.c1.c111.c1111":e=>{console.log("c.c1.c111.c1111改变了",e)}});w.on("c.c1.c111",(()=>{console.log("c.c1.c111改变了")}));const Z=u.createMemoFun((function(){console.log("callSumFun");for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce(((e,n)=>e+n),0)})),S=u.createMemoFun((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return console.log("callAnyncFun"),new Promise((e=>{e(n.reduce(((e,n)=>e+n),0))}))}));return a.createElement(l.ZP,null,a.createElement(l.$0,{title:"WatchMemoized"},a.createElement("p",null,"对值的监控和缓存"),a.createElement("p",null,"缓存"),a.createElement("ul",null,a.createElement("li",null,"支持多值监控"),a.createElement("li",null,"支持deep、light和自定义三种比较是否修改的方式"),a.createElement("li",null,"支持all和race两种触发修改的方式"),a.createElement("li",null,"支持函数调用返回值的缓存")),a.createElement("p",null,"监控"),a.createElement("p",null,"支持类似与Vue的watch监控")),a.createElement(l.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"单值缓存监控",mode:"code",scope:{React:a},cardProps:{description:{title:"单值缓存监控",info:"单值缓存监控"}},codeText:"\n  import { WatchMemoized, Space } from '@baifendian/adhere';\n\n  const { createRef, memoized } = WatchMemoized;\n\n  // 单值监控light比较\n  const [get1Value, set1Value, property1] = createRef([{ a: 1 }]);\n  console.log('srcValue1', get1Value());\n  memoized.watch.race(() => {\n    console.log('changeValue', get1Value());\n  }, [\n    {\n      property: property1,\n      mode: 'light',\n    },\n  ]);\n\n  // 单值监控deep比较\n  const [get2Value, set2Value, property2] = createRef([{ a: 1 }]);\n  console.log('srcValue2', get2Value());\n  memoized.watch.race(() => {\n    console.log('changeValue', get2Value());\n  }, [\n    {\n      property: property2,\n      mode: 'deep',\n    },\n  ]);\n\n  // 单值监控自定义比较\n  const [get3Value, set3Value, property3] = createRef([{ a: 1 }]);\n  console.log('srcValue3', get3Value());\n  memoized.watch.race(() => {\n    console.log('changeValue', get3Value());\n  }, [\n    {\n      property: property3,\n      mode: ({ oldValue, newValue }) => {\n        return oldValue === newValue;\n      },\n    },\n  ]);\n\n  <Space.Group direction=\"horizontal\" size={10}>\n    <Button\n      onClick={() => {\n        set1Value([{ a: 1 }]);\n      }}\n    >\n      light比较\n    </Button>\n\n    <Button\n      onClick={() => {\n        set2Value([{ a: 1 }]);\n      }}\n    >\n      deep比较\n    </Button>\n\n    <Button\n      onClick={() => {\n        set3Value([{ a: 1 }]);\n      }}\n    >\n      自定义比较\n    </Button>\n  </Space.Group>\n        ",type:"PlayGround",renderChildren:()=>a.createElement(o.Z.Group,{direction:"horizontal",size:10},a.createElement(c.ZP,{onClick:()=>{n([{a:1}])}},"light比较"),a.createElement(c.ZP,{onClick:()=>{d([{a:1}])}},"deep比较"),a.createElement(c.ZP,{onClick:()=>{f([{a:1}])}},"自定义比较"))},{id:"p2",name:"多值缓存监控",mode:"code",scope:{React:a},cardProps:{description:{title:"多值缓存监控",info:"多值缓存监控"}},codeText:"\n  import React from 'react';\n  import { Button } from 'antd';\n  import { WatchMemoized, Space } from '@baifendian/adhere';\n\n  const { createRef, memoized } = WatchMemoized;\n\n  // 多值监控light比较\n  const [get4Value, property4] = createRef([{ a: 1 }]);\n  const [get5Value, property5] = createRef([{ a: 2 }]);\n  console.log('srcValue4', get4Value());\n  console.log('srcValue5', get5Value());\n  memoized.watch.all(() => {\n    console.log('changeValue', get4Value());\n    console.log('changeValue', get5Value());\n  }, [\n    {\n      property: property4,\n      mode: 'light',\n    },\n    {\n      property: property5,\n      mode: 'light',\n    },\n  ]);\n\n  <Space.Group direction=\"horizontal\" size={10}>\n    <Button\n      onClick={() => {\n        watchObj1.value.a = 'a';\n        watchObj1.value.b = 'b';\n        watchObj1.value.c = { gl: 1 };\n        watchObj1.value.c.c1 = {\n          g2: 2,\n        };\n        watchObj1.value.c.c1.c111 = {\n          g3: 3,\n          c1111: '1',\n        };\n\n        delete watchObj1.value.c.c1.c111.c1111;\n      }}\n    >\n      对obj1进行监控\n    </Button>\n  </Space.Group>\n        ",type:"PlayGround",renderChildren:()=>a.createElement(o.Z.Group,{direction:"horizontal",size:10},a.createElement(c.ZP,{onClick:()=>{y([{a:1}]),v([{a:2}])}},"light比较"))},{id:"p3",name:"watch对象的变化",mode:"code",scope:{React:a},cardProps:{description:{title:"watch对象的变化",info:"watch对象的变化"}},codeText:"\n  import React from 'react';\n  import { Button } from 'antd';\n  import { WatchMemoized, Space } from '@baifendian/adhere';\n\n  const { watch } = WatchMemoized;\n\n  // watch监控对象的变化\n  const srcObj1 = {};\n  const watchObj1 = watch.create(srcObj1, {\n    a: () => {\n      console.log('a改变了');\n    },\n    b: () => {\n      console.log('b改变了');\n    },\n    c: () => {\n      console.log('c改变了');\n    },\n    'c.c1': () => {\n      console.log('c.c1改变了');\n    },\n    'c.c1.c111.c1111': (property) => {\n      console.log('c.c1.c111.c1111改变了', property);\n    },\n  });\n  watchObj1.on('c.c1.c111', () => {\n    console.log('c.c1.c111改变了');\n  });\n\n  <Space.Group direction=\"horizontal\" size={10}>\n    <Button\n      onClick={() => {\n        watchObj1.value.a = 'a';\n        watchObj1.value.b = 'b';\n        watchObj1.value.c = { gl: 1 };\n        watchObj1.value.c.c1 = {\n          g2: 2,\n        };\n        watchObj1.value.c.c1.c111 = {\n          g3: 3,\n          c1111: '1',\n        };\n\n        delete watchObj1.value.c.c1.c111.c1111;\n      }}\n    >\n      对obj1进行监控\n    </Button>\n  </Space.Group>\n        ",type:"PlayGround",renderChildren:()=>a.createElement(o.Z.Group,{direction:"horizontal",size:10},a.createElement(c.ZP,{onClick:()=>{w.value.a="a",w.value.b="b",w.value.c={gl:1},w.value.c.c1={g2:2},w.value.c.c1.c111={g3:3,c1111:"1"},delete w.value.c.c1.c111.c1111}},"对obj1进行监控"))},{id:"p4",name:"创建一个memoized的普通函数",mode:"code",scope:{React:a},cardProps:{description:{title:"创建一个memoized的普通函数",info:"创建一个memoized的普通函数"}},codeText:"\n  import React from 'react';\n  import { Button } from 'antd';\n  import { WatchMemoized, Space } from '@baifendian/adhere';\n\n  const {  memoized } = WatchMemoized;\n\n  // 创建一个memoized的函数\n  const sumFun = memoized.createMemoFun((...params) => {\n    console.log('callSumFun');\n    return params.reduce((pre, current) => pre + current, 0);\n  });\n\n  <Space.Group direction=\"horizontal\" size={10}>\n    <Button\n      onClick={() => {\n        console.log('subFun', sumFun({ a: 1 }, 2, 3));\n        console.log('subFun', sumFun({ a: 1 }, 2, 3));\n      }}\n    >\n      调用memoized函数\n    </Button>\n  </Space.Group>\n        ",type:"PlayGround",renderChildren:()=>a.createElement(o.Z.Group,{direction:"horizontal",size:10},a.createElement(c.ZP,{onClick:()=>{console.log("subFun",Z({a:1},2,3)),console.log("subFun",Z({a:1},2,3))}},"调用memoized函数"))},{id:"p5",name:"创建一个memoized的Promise函数",mode:"code",scope:{React:a},cardProps:{description:{title:"创建一个memoized的Promise函数",info:"创建一个memoized的Promise函数"}},codeText:"\n  import React from 'react';\n  import { Button } from 'antd';\n  import { WatchMemoized, Space } from '@baifendian/adhere';\n\n  const { memoized } = WatchMemoized;\n\n  // 创建一个memoized的Promise函数\n  const anyncFun = memoized.createMemoFun((...params) => {\n    console.log('callAnyncFun');\n    return new Promise((resolve) => {\n      resolve(params.reduce((pre, current) => pre + current, 0));\n    });\n  });\n\n  <Space.Group direction=\"horizontal\" size={10}>\n    <Button\n      onClick={() => {\n        anyncFun(1, 2, 3).then((res) => {\n          console.log('asyncFun', res);\n        });\n\n        console.log('asyncFun', anyncFun(1, 2, 3));\n\n        console.log('asyncFun', anyncFun(1, 2, 4));\n        console.log('asyncFun', anyncFun(1, 2, 4));\n      }}\n    >\n      调用memoized函数\n    </Button>\n  </Space.Group>\n        ",type:"PlayGround",renderChildren:()=>a.createElement(o.Z.Group,{direction:"horizontal",size:10},a.createElement(c.ZP,{onClick:()=>{S(1,2,3).then((e=>{console.log("asyncFun",e)})),console.log("asyncFun",S(1,2,3)),console.log("asyncFun",S(1,2,4)),console.log("asyncFun",S(1,2,4))}},"调用memoized函数"))}]}),a.createElement(l.ae,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"createRef",desc:"创建一个值(其实就是在srcObj中创建一个属性)",modifier:"public",params:[{name:"defaultValue",desc:"缺省值",type:"any",defaultVal:"",required:"true"}],returnType:"[getData, setData, property]",returnDesc:""},{name:"memoized.watch.all",desc:"对依赖项的监控(所有依赖项全部发生改变才执行handler)",modifier:"public",params:[{name:"handler",desc:"函数句柄",type:"Function",defaultVal:"",required:"true"},{name:"depends",desc:"依赖项",type:"Array<Symbol | {property,mode}>",defaultVal:"[]",required:"true"}],returnType:"Function",returnDesc:"返回清空所有订阅句柄的方法"},{name:"memoized.watch.race",desc:"对依赖项的监控(只要有一个依赖项发生改变的时候就执行handler)",modifier:"public",params:[{name:"handler",desc:"函数句柄",type:"Function",defaultVal:"",required:"true"},{name:"depends",desc:"依赖项",type:"Array<Symbol | {property,mode}>",defaultVal:"[]",required:"true"}],returnType:"Function",returnDesc:"返回清空所有订阅句柄的方法"},{name:"memoized.createMemoFun",desc:"创建一个memo的Function",modifier:"public",params:[{name:"handler",desc:"函数实现",type:"Function",defaultVal:"",required:"true"},{name:"stackMaxSize",desc:"最大缓存栈的大小",type:"number",defaultVal:"10",required:"true"}],returnType:"Function",returnDesc:"返回一个可以调用的函数"},{name:"watch.create",desc:"create - 创建一个watch对象",modifier:"public",params:[{name:"srcObj",desc:"原始对象",type:"Object",defaultVal:"",required:"true"},{name:"listeners",desc:"监控对象",type:"Object",defaultVal:"",required:"true"}],returnType:"{value,on:(expression,handler),remove:(expression,handler)}",returnDesc:""}]}]}))}},96032:function(e,n,t){t.d(n,{$0:function(){return i},ae:function(){return d},e0:function(){return u},sB:function(){return s}});var o=t(70517),r=t(6692),c=t(90171);const{PlayGroundPageContext:a,PlayGroundPage:l}=r.default,{Section:i,CodeBoxSection:u,PropsSection:s,FunctionPropsSection:d}=l;n.ZP=function(e){let{children:n,...t}=e;const[r,i]=(0,c.useState)(),u=(0,c.useRef)();return(0,c.useEffect)((()=>{i(u.current.parentElement.parentElement)}),[]),c.createElement(a.Provider,{value:{scrollEl:r}},c.createElement(l,(0,o.Z)({ref:u},t),n))}},91098:function(e,n,t){var o=t(58014);n.Z=o.Z}}]);