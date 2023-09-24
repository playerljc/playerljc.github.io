"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[2541],{413719:function(e,t,n){var a=n(30811),r=n(458860),o="adhere-ui-globalindicator",i=r.Z.Dict.value.ResourceNormalMaxZIndex.value,s=new Set;t.Z={show:function(e,t,n,r){void 0===e&&(e=document.body),void 0===t&&(t=""),void 0===n&&(n=i),void 0===r&&(r="default");var d=(t=((d=document.createElement("div")).innerHTML='\n      <div class="'.concat(o,'" style="z-index: ').concat(n||i,'">\n       <span class="').concat(o,'-dot"></span>\n       ').concat(t&&'<div class="'.concat(o,'-text">').concat(t,"</div>"),"\n      </div>"),d.firstElementChild)).querySelector(".".concat(o,"-dot")),c=(r=new Map([["small",.1],["default",.2],["large",.3]]).get(r),document.documentElement.style.getPropertyValue("--adhere-color-primary"));return new a.$({lines:4,length:0,width:52,radius:29,scale:r,corners:1,speed:2.1,rotate:19,animation:"spinner-line-fade-quick",direction:1,color:c,fadeColor:"transparent",top:"46%",left:"50%",shadow:"0 0 1px transparent",zIndex:n,className:"".concat(o,"-spinner"),position:"absolute"}).spin(d),e===document.body&&(t.style.position="fixed"),e.appendChild(t),s.add(t),t},hide:function(e){var t,n;if(e)try{null!=(n=null==(t=null==e?void 0:e.parentElement)?void 0:t.removeChild)&&n.call(t,e),s.delete(e)}catch(e){}},hideAll:function(){Array.from(s.values()).forEach((function(e){var t,n;try{null!=(n=null==(t=null==e?void 0:e.parentElement)?void 0:t.removeChild)&&n.call(t,e)}catch(e){}})),s.clear()}}},757956:function(e,t,n){var a=n(413719);t.Z=a.Z},778324:function(e,t,n){var a,r,o=n(716830),i=n(757956),s=n(460467),d=n(355360),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},p=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||((a=a||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},u=!1,f=300,m=function(){function e(e,t,n){this.baseURL=e||"",this.systemManagerBaseURL=t||"",this.config=null!=n?n:{}}return e.prototype.get=function(e){var t=this,n=(e.data,l(e,["data"])),a={};e=new Promise((function(e,r){(e=(a=b.call(t,c(c(c(c({},g.call(t)),t.config),{method:"get"}),n),{resolve:e,reject:r})).xhr)&&e.send(null)}));return c(c({},a),{promise:e})},e.prototype.post=function(e){return w.call(this,"post",e)},e.prototype.path=function(e){return w.call(this,"path",e)},e.prototype.put=function(e){return w.call(this,"put",e)},e.prototype.delete=function(e){return w.call(this,"delete",e)},e.TIMEOUT=1e6,e.STATUS_SUCCESS_CODES=[200,201,202,203,204,205,206,207,208,226],e.STATUS_REDIRECT_CODES=[300,301,302,303,304,305,306,307,308],e.READY_STATE_UNSENT=0,e.READY_STATE_OPENED=1,e.READY_STATE_HEADERS_RECEIVED=2,e.READY_STATE_LOADING=3,e.READY_STATE_DONE=4,e.CONTENT_TYPE_APPLICATION_JSON="application/json",e.CONTENT_TYPE_MULTIPART_FORM_DATA="multipart/form-data",e.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED="application/x-www-form-urlencoded",e.CONTENT_TYPE_TEXT_XML="text/xml",e.CONTENT_TYPE_APPLICATION_XML="application/xml",e.CONTENT_TYPE_TEXT_PLAIN="text/plain",e}();function y(e,t){a&&(clearTimeout(a),a=null),a=setTimeout((function(){o.Z.error({message:e,description:t})}),f)}function h(e,t){r&&(clearTimeout(r),r=null),r=setTimeout((function(){o.Z.warning({message:e,description:t})}),f)}function g(){var e=this;return{timeout:m.TIMEOUT,withCredentials:!0,onLoad:function(){},onLoadsStart:function(){},onLoadend:function(){},onProgress:function(){},onTimeout:function(){h(d.ZP.v("提示"),d.ZP.v("请求超时"))},onAbort:function(){h(d.ZP.v("提示"),d.ZP.v("请求终止"))},onError:function(){y(d.ZP.v("提示"),d.ZP.v("请求发生错误"))},interceptor:function(t){switch(t.status){case 401:A.call(e);break;case 402:O.call(e);break;default:y(d.ZP.v("提示"),d.ZP.v("已提出请求，但未收到任何回复"))}},mock:!1,loading:{show:!1,text:"",el:document.body},onBeforeResponse:function(){},dataKey:"data",messageKey:"message",codeKey:"code",codeSuccess:200,showWarn:!0,responseType:""}}function T(e){var t=e.show,n=e.data,a=e.indicator;e=e.xhr;return c({xhr:e,data:n},t?{hideIndicator:function(){return i.Z.hide(a)}}:{})}function E(e){var t,n,a=e.xhr,r=e.interceptor,o=(s=e.loading).show,s=s.indicator,c=(u=e.business).messageKey,l=u.codeKey,p=u.codeSuccess,u=u.showWarn,f=e.resolve;e=e.reject;a.readyState===m.READY_STATE_DONE&&(200<=a.status&&a.status<300||304===a.status?-1!==(t=a.getResponseHeader("Content-type")).indexOf(m.CONTENT_TYPE_APPLICATION_JSON)?(n=JSON.parse(a.responseText),u&&l in n&&n[l]!==p&&h(d.ZP.v("提示"),n[c]),f(T({show:o,data:n,indicator:s,xhr:a}))):[m.CONTENT_TYPE_TEXT_XML,m.CONTENT_TYPE_TEXT_XML].includes(t)?f(T({show:o,data:a.responseXML,indicator:s,xhr:a})):f(T({show:o,data:a.response,indicator:s,xhr:a})):(r({status:a.status,statusText:a.statusText,response:a.response,responseText:a.responseText}),e({status:a.status,statusText:a.statusText,response:a.response,responseText:a.responseText}),o&&s&&i.Z.hide(s)))}function v(e){return e&&"form"in e&&"data"in e&&!s.Z.isEmpty(e.form)&&!s.Z.isEmpty(e.data)&&e.form instanceof HTMLFormElement}function b(e,t){var n,a=e.method,r=e.path,o=e.headers,c=e.data,p=e.mock,u=e.loading,f=void 0===(f=(e.onBeforeResponse,e.dataKey))?"data":f,y=void 0===(y=e.messageKey)?"message":y,h=void 0===(h=e.codeKey)?"code":h,T=void 0===(T=e.codeSuccess)?200:T,b=void 0===(b=e.showWarn)||b,P=(e=l(e,["method","path","headers","data","mock","loading","onBeforeResponse","dataKey","messageKey","codeKey","codeSuccess","showWarn"]),t.resolve),w=(t=t.reject,"".concat(d.ZP.v("加载中"),"...")),A=void 0!==(O=u.show)&&O,O=u.text;u=void 0===(u=u.el)?document.body:u;if(A&&(n=i.Z.show(u||document.body,(void 0===O?w:O)||w)),p)return setTimeout((function(){P(A?{data:r,hideIndicator:function(){i.Z.hide(n)}}:r)}),200),{xhr:null,contentType:""};u=this.baseURL,O=this.config,p=(w=Object.assign(g.call(this),O,e)).timeout,O=w.withCredentials,e=w.responseType;var _=w.interceptor,S=(w=l(w,["timeout","withCredentials","responseType","interceptor"]),new XMLHttpRequest);S.open(a,"".concat(u,"/").concat(r),!0),S.timeout=p,S.withCredentials=O,S.responseType=e||"",u="";if(!s.Z.isEmpty(o)&&s.Z.isObject(o))for(var N in"Content-Type"in o||v(c)||(o["Content-Type"]="".concat(m.CONTENT_TYPE_APPLICATION_JSON,";charset=utf-8")),u=null!=(p=o["Content-Type"])?p:"",o)S.setRequestHeader(N,o[N]);else!s.Z.isEmpty(c)&&s.Z.isRef(c)&&"get"!==a&&(v(c)?u=m.CONTENT_TYPE_MULTIPART_FORM_DATA:(u="".concat(m.CONTENT_TYPE_APPLICATION_JSON,";charset=utf-8"),S.setRequestHeader("Content-Type","".concat(m.CONTENT_TYPE_APPLICATION_JSON,";charset=utf-8"))));return function(e){var t=e.xhr,n=e.events,a=e.reject,r=n.onTimeout,o=(e=n.onLoadsStart,n.onProgress),i=n.onAbort,s=n.onError,d=n.onLoad;n=n.onLoadend,r&&t.addEventListener("timeout",(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];r.apply(void 0,null!=e?e:{}),a.apply(void 0,null!=e?e:{})})),i&&t.addEventListener("abort",(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];i.apply(void 0,null!=e?e:{}),a.apply(void 0,null!=e?e:{})})),s&&t.addEventListener("error",(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];s.apply(void 0,null!=e?e:{}),a.apply(void 0,null!=e?e:{})})),e&&t.addEventListener("loadstart",e),o&&t.addEventListener("progress",o),d&&t.addEventListener("load",d),n&&t.addEventListener("loadend",n)}({xhr:S,events:w,reject:t}),S.onreadystatechange=E.bind(this,{xhr:S,interceptor:_,loading:{show:A,indicator:n},business:{dataKey:f,messageKey:y,codeKey:h,codeSuccess:T,showWarn:b},resolve:P,reject:t}),{xhr:S,contentType:u}}function P(e){var t,n=e.data,a=void 0===(a=e.contentType)?"":a;e=e.customSendJSONStringify;if(a.startsWith(m.CONTENT_TYPE_APPLICATION_JSON)&&s.Z.isRef(n))return e?JSON.stringify(n,e):JSON.stringify(n);if(a.startsWith(m.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED)&&s.Z.isObject(n))return Array.from(Object.keys(n)).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(n[e]))})).join("&");if(s.Z.isObject(n)&&v(n))return t=new FormData(n.form),Array.from(Object.keys(n.data)).forEach((function(e){var a=r=n.data[e],r=(r instanceof Function&&(a=r()),[e]);r=Array.isArray(a)?p(p([],r,!0),a,!0):p(p([],r,!0),[a],!1);t.append.apply(t,r)})),t;if(a.startsWith(m.CONTENT_TYPE_TEXT_PLAIN)){if(s.Z.isString(n))return n;if(s.Z.isObject(n))return e?JSON.stringify(n,e):JSON.stringify(n)}return null==(a=null==n?void 0:n.toString)?void 0:a.call(n)}function w(e,t){var n=this,a={},r=new Promise((function(r,o){r=(a=b.call(n,c(c(c(c({},g.call(n)),n.config),{method:e}),t),{resolve:r,reject:o})).xhr,o=a.contentType,r&&r.send(P.call(n,{data:t.data,contentType:o,customSendJSONStringify:t.customSendJSONStringify}))}));return c(c({},a),{promise:r})}function A(){if("undefined"!=typeof window){if(window.top&&window.top!==window&&window.top.postMessage("http_status_401","*"),u)return!1;window.location.href=s.Z.casUrl({baseUrl:this.systemManagerBaseURL,enterUrl:window.location.href})}}function O(){if(u=!0,"undefined"!=typeof window)return window.parent&&window.parent!==window?(window.parent.postMessage("http_status_402","*"),!1):void(window.location.href=s.Z.casLogoutUrl({baseUrl:this.systemManagerBaseURL,enterUrl:window.location.href,params:"&code=402"}))}t.Z=m},591131:function(e,t,n){var a=n(778324);t.Z=a.Z},995546:function(e,t,n){n.r(t);var a=n(689002),r=n(991098),o=n(559614),i=n(5254),s=n(670001),d=n(925060),c=n(690171),l=n(296032);const p=new o.Z("http://k007-pe.baifendian.com");t.default=()=>{const e=(0,c.useRef)(),t=(0,c.useRef)(),[n,o]=(0,c.useState)(null),[u,f]=(0,c.useState)(0);return c.createElement(l.ZP,null,c.createElement(l.$0,{title:"Ajax"}),c.createElement(l.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"get",mode:"code",scope:{React:c},cardProps:{description:{title:"get",info:"get"}},codeText:"\n  import { Ajax, Space, GlobalIndicator } from '@baifendian/adhere';\n\n  const k007Ajax = new Ajax('http://k007-dev.baifendian.com');\n\n  k007Ajax\n    .get({\n      path:\n        '/api/securitypolice/frontend/config/namespace?kw=k007.service_address@@resource@@gis@@application',\n      loading: {\n        show: true,\n      },\n    })\n    .promise.then((res) => {\n      if (res) {\n        if (res.data.code === 200) {\n          alert(JSON.stringify(res.data.data));\n        }\n\n        res.hideIndicator();\n      }\n    });\n      ",type:"PlayGround",renderChildren:()=>c.createElement(i.ZP,{type:"primary",onClick:()=>{p.get({path:"/api/securitypolice/frontend/config/namespace?kw=k007.service_address@@resource@@gis@@application",loading:{show:!0}}).promise.then((e=>{e&&(200===e.data.code&&alert(JSON.stringify(e.data.data)),e.hideIndicator())}))}},"call")},{id:"p2",name:"post",mode:"code",scope:{React:c},cardProps:{description:{title:"post",info:"post"}},codeText:"\n  import { Ajax, Space, GlobalIndicator } from '@baifendian/adhere';\n\n  const k007Ajax = new Ajax('http://k007-dev.baifendian.com');\n\n  k007Ajax\n    .post({\n      path: '/api/controlledObject/facade/fq/queryList',\n      data: [\n        {\n          resource: '12345678',\n          type: '101',\n          uuid: '7419d8b2-76f8-11eb-ada5-b76f62efdb0c',\n        },\n        { resource: '', type: '103', uuid: '562096255732281344' },\n      ],\n      loading: {\n        show: true,\n      },\n    })\n    .promise.then((res) => {\n      if (res) {\n        if (res.data.code === 200) {\n          alert(JSON.stringify(res.data.data));\n        }\n\n        res.hideIndicator();\n      }\n    });\n      ",type:"PlayGround",renderChildren:()=>c.createElement(i.ZP,{type:"primary",onClick:()=>{p.post({path:"/api/controlledObject/facade/fq/queryList",data:[{resource:"12345678",type:"101",uuid:"7419d8b2-76f8-11eb-ada5-b76f62efdb0c"},{resource:"",type:"103",uuid:"562096255732281344"}],loading:{show:!0}}).promise.then((e=>{e&&(200===e.data.code&&alert(JSON.stringify(e.data.data)),e.hideIndicator())}))}},"call")},{id:"p3",name:"upload",mode:"code",scope:{React:c},cardProps:{description:{title:"upload",info:"upload"}},codeText:'\n  import { Ajax, Space, GlobalIndicator } from \'@baifendian/adhere\';\n\n  const k007Ajax = new Ajax(\'http://k007-dev.baifendian.com\');\n\n  <form encType="multipart/form-data" method="post" ref={uploadFormFef}>\n    <div>\n      <Avatar shape="square" size="large" icon={img ? <img src={img} alt="" /> : null} />\n\n      <Space direction="vertical" />\n\n      <input\n        type="file"\n        ref={uploadRef}\n        onChange={() => {\n          const file = uploadRef.current.files[0];\n\n          const { size } = file;\n\n          const reader = new FileReader();\n          reader.onload = (e) => {\n            setImg(e.target.result);\n          };\n\n          reader.readAsDataURL(file);\n\n          k007Ajax\n            .post({\n              path: \'/api/personControl/monitorPerson/image/upload\',\n              data: {\n                form: uploadFormFef.current,\n                data: {\n                  file,\n                },\n              },\n              loading: {\n                show: true,\n              },\n              onProgress: (e) => {\n                setPercent((e.loaded / size) * 100);\n              },\n              onLoadend: () => {\n                setPercent(100);\n              },\n            })\n            .promise.then((res) => {\n              setPercent(100);\n\n              if (res) {\n                if (res.data.code === 200) {\n                  alert(JSON.stringify(res.data.data));\n                }\n\n                res.hideIndicator();\n              }\n            });\n        }}\n      />\n\n      <Space direction="vertical" />\n\n      <Progress percent={percent} />\n    </div>\n  </form>\n      ',type:"PlayGround",renderChildren:()=>c.createElement("form",{encType:"multipart/form-data",method:"post",ref:e},c.createElement("div",null,c.createElement(s.C,{shape:"square",size:"large",icon:n?c.createElement("img",{src:n,alt:""}):null}),c.createElement(r.Z,{direction:"vertical"}),c.createElement("input",{type:"file",ref:t,onChange:()=>{const n=t.current.files[0],{size:a}=n,r=new FileReader;r.onload=e=>{o(e.target.result)},r.readAsDataURL(n),p.post({path:"/api/personControl/monitorPerson/image/upload",data:{form:e.current,data:{file:n}},loading:{show:!0},onProgress:e=>{f(e.loaded/a*100)},onLoadend:()=>{f(100)}}).promise.then((e=>{f(100),e&&(200===e.data.code&&alert(JSON.stringify(e.data.data)),e.hideIndicator())}))}}),c.createElement(r.Z,{direction:"vertical"}),c.createElement(d.Z,{percent:u})))},{id:"p4",name:"PromiseAll",mode:"code",scope:{React:c},cardProps:{description:{title:"PromiseAll",info:"PromiseAll"}},codeText:"\n  import React from 'react';\n  import { Button } from 'antd';\n  import { GlobalIndicator, Ajax } from '@baifendian/adhere';\n\n  const k007Ajax = new Ajax('http://k007-pe.baifendian.com');\n\n  <Button\n    type=\"primary\"\n    onClick={() => {\n      const globalIndicator = GlobalIndicator.show();\n\n      Promise.all([\n        k007Ajax.get({\n          path: '/api/securitypolice/frontend/config/namespace?kw=k007.service_address@@resource@@gis@@application',\n        }).promise,\n        k007Ajax.get({\n          path: '/api/SystemManager/system/role/login/list?state=&kw=&pageNum=1&pageSize=10',\n        }).promise,\n        k007Ajax.post({\n          path: '/api/controlledObject/facade/fq/queryList',\n          data: [\n            {\n              resource: '12345678',\n              type: '101',\n              uuid: '7419d8b2-76f8-11eb-ada5-b76f62efdb0c',\n            },\n            { resource: '', type: '103', uuid: '562096255732281344' },\n          ],\n        }).promise,\n      ])\n        .then((res) => {\n          GlobalIndicator.hide(globalIndicator);\n          alert(JSON.stringify(res));\n        })\n        .catch(() => {\n          GlobalIndicator.hide(globalIndicator);\n        });\n    }}\n  >\n    call\n  </Button>\n      ",type:"PlayGround",renderChildren:()=>c.createElement(i.ZP,{type:"primary",onClick:()=>{const e=a.Z.show();Promise.all([p.get({path:"/api/securitypolice/frontend/config/namespace?kw=k007.service_address@@resource@@gis@@application"}).promise,p.get({path:"/api/SystemManager/system/role/login/list?state=&kw=&pageNum=1&pageSize=10"}).promise,p.post({path:"/api/controlledObject/facade/fq/queryList",data:[{resource:"12345678",type:"101",uuid:"7419d8b2-76f8-11eb-ada5-b76f62efdb0c"},{resource:"",type:"103",uuid:"562096255732281344"}]}).promise]).then((t=>{a.Z.hide(e),alert(JSON.stringify(t))})).catch((()=>{a.Z.hide(e)}))}},"call")}]}),c.createElement(l.sB,{title:"Props",config:[{border:!0,title:"ISendArg",data:[{params:"path",desc:"请求的地址(相对的地址)",type:"string",defaultVal:""},{params:"headers",desc:"请求的头",type:"Object<key,value>",defaultVal:""},{params:"data",desc:"请求的数据",type:"{form?: HTMLFormElement;data: object;} | object",defaultVal:""},{params:"mock",desc:"是否支持mock数据",type:"boolean",defaultVal:"false"},{params:"loading",desc:"loading的配置",type:"{show:boolean;text:string;el:HtmlElement}",defaultVal:""},{params:"onBeforeResponse",desc:"和后端定义的三大业务key",type:"() => {}",defaultVal:""},{params:"dataKey",desc:"数据属性",type:"string",defaultVal:""},{params:"messageKey",desc:"消息属性",type:"string",defaultVal:""},{params:"codeKey",desc:"业务code属性",type:"number | string",defaultVal:""},{params:"codeSuccess",desc:"业务code成功属性",type:"number",defaultVal:""},{params:"showWarn",desc:"在code不等于200的时候是否使出message的warn",type:"boolean",defaultVal:""},{params:"onTimeout",desc:"超时函数",type:"Function",defaultVal:""},{params:"onLoadsStart",desc:"加载开始",type:"Function",defaultVal:""},{params:"onProgress",desc:"加载进度",type:"Function",defaultVal:""},{params:"onAbort",desc:"请求取消",type:"Function",defaultVal:""},{params:"onError",desc:"发生错误",type:"Function",defaultVal:""},{params:"onLoad",desc:"开始加载",type:"Function",defaultVal:""},{params:"onLoadend",desc:"加载完成",type:"Function",defaultVal:""},{params:"timeout",desc:"超时时间",type:"number",defaultVal:""},{params:"withCredentials",desc:"是否携带客户端信息",type:"boolean",defaultVal:"true"},{params:"interceptor",desc:"拦截器",type:"Function({status,statusText,response,responseText})",defaultVal:""}]},{border:!0,title:"IConfig",data:[{params:"onTimeout",desc:"在预设时间内没有接收到响应时触发",type:"Function",defaultVal:""},{params:"onLoadsStart",desc:"接收到响应数据时触发",type:"Function",defaultVal:""},{params:"onProgress",desc:"当请求接收到更多数据时，周期性地触发",type:"Function",defaultVal:""},{params:"onAbort",desc:"当 request 被停止时触发，例如当程序调用 XMLHttpRequest.abort() 时",type:"Function",defaultVal:""},{params:"onError",desc:"当 request 遭遇错误时触发",type:"Function",defaultVal:""},{params:"onLoad",desc:"XMLHttpRequest请求成功完成时触发",type:"Function",defaultVal:""},{params:"onLoadend",desc:"请求结束时触发, 无论请求成功 ( load) 还是失败 (abort 或 error)",type:"Function",defaultVal:""},{params:"timeout",desc:"超时时间",type:"number",defaultVal:""},{params:"withCredentials",desc:"是否携带客户端数据",type:"boolean",defaultVal:"true"},{params:"interceptor",desc:"拦截器接口定义",type:"Function({status,statusText,response,responseText})",defaultVal:""}]}]}),c.createElement(l.ae,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"constructor",desc:"构造方法",modifier:"public",params:[{name:"baseURL",desc:"基础路径",type:"string",defaultVal:"",required:""},{name:"systemManagerBaseURL",desc:"系统管理BaseURL",type:"string",defaultVal:"",required:""},{name:"config",desc:"配置",type:"IConfig",defaultVal:"",required:""}],returnType:"Ajax",returnDesc:""},{name:"get",desc:"get请求",modifier:"public",params:[{name:"params",desc:"",type:"ISendArg",defaultVal:"",required:""}],returnType:"Promise",returnDesc:""},{name:"post",desc:"post请求",modifier:"public",params:[{name:"params",desc:"",type:"ISendArg",defaultVal:"",required:""}],returnType:"Promise",returnDesc:""},{name:"path",desc:"path请求",modifier:"public",params:[{name:"params",desc:"",type:"ISendArg",defaultVal:"",required:""}],returnType:"Promise",returnDesc:""},{name:"put",desc:"put请求",modifier:"public",params:[{name:"params",desc:"",type:"ISendArg",defaultVal:"",required:""}],returnType:"Promise",returnDesc:""},{name:"delete",desc:"delete请求",modifier:"public",params:[{name:"params",desc:"",type:"ISendArg",defaultVal:"",required:""}],returnType:"Promise",returnDesc:""}]}]}))}},296032:function(e,t,n){n.d(t,{$0:function(){return d},ae:function(){return p},e0:function(){return c},sB:function(){return l}});var a=n(570517),r=n(153757),o=n(690171);const{PlayGroundPageContext:i,PlayGroundPage:s}=r.default,{Section:d,CodeBoxSection:c,PropsSection:l,FunctionPropsSection:p}=s;t.ZP=function(e){let{children:t,...n}=e;const[r,d]=(0,o.useState)(),c=(0,o.useRef)();return(0,o.useEffect)((()=>{d(c.current.parentElement.parentElement)}),[]),o.createElement(i.Provider,{value:{scrollEl:r}},o.createElement(s,(0,a.Z)({ref:c},n),t))}},559614:function(e,t,n){var a=n(591131);t.Z=a.Z},689002:function(e,t,n){var a=n(757956);t.Z=a.Z},991098:function(e,t,n){var a=n(682796);t.Z=a.Z}}]);