"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[1309],{14777:(e,r,n)=>{n.r(r),n.d(r,{default:()=>b});var t=n(26322),a=n(96465),l=n(32517),o=n(31934),c=n.n(o),i=n(88724),d="adhere-ui-surnames",u=(0,t.memo)((0,t.forwardRef)((function(e,r){var n=void 0===(a=e.position)?"right":a,a=void 0===(a=e.className)?"":a,l=void 0===(l=e.style)?{}:l,o=void 0===(o=e.indexClassName)?"":o,u=void 0===(u=e.indexStyle)?{}:u,s=void 0===(s=e.contentClassName)?"":s,m=e.contentStyle,p=void 0===(g=e.indexes)?[]:g,f=void 0===(g=e.dataSource)?[]:g,h=e.onScroll,x=e.onBeforeScroll,C=(0,t.useRef)(null),v=(0,t.useRef)(null),y=(0,t.useRef)(null),g=(0,t.useRef)(null),E=(0,t.useRef)(null),S=(0,t.useRef)(null),A=(0,t.useRef)(!1),b=(0,t.useRef)(!1),T=(0,t.useRef)(!1),k=(0,t.useRef)(0),R=(0,t.useRef)(0),w=(0,t.useRef)(""),N=(0,t.useRef)([]);function P(){return"left"===n||"right"===n?"vertical":"horizontal"}function D(){"vertical"===P()?(C.current.style.height="".concat(E.current.offsetHeight+50,"px"),C.current.style.width="100%"):C.current.style.height="100%"}e=(0,t.useCallback)((function(){return f.map((function(e){var r=p.find((function(r){return r.index===e.index}));return t.createElement("div",{key:e.index,className:"".concat(d,"-group")},t.createElement("a",{className:"".concat(d,"-group-title"),"data-name":e.index},null!=r&&r.renderTitle?r.renderTitle(e):null==r?void 0:r.index),t.createElement("div",{className:"".concat(d,"-group-inner")},null!=r&&r.renderContent?null==r?void 0:r.renderContent(e):null))}))}),[f,p]);var G=(0,t.useCallback)((function(){return p.map((function(e){return t.createElement("a",{key:e.index,className:"".concat(d,"-index-item"),"data-name":e.index},e.renderIndex?e.renderIndex(e):e.index)}))}),[p]);function V(){var e,r,n=null==(r=null==(e=E.current)?void 0:e.querySelectorAll)?void 0:r.call(e,".".concat(d,"-index-item"));N.current=[];for(var t=0;t<n.length;t++){var a=n[t],l=a.dataset.name,o=a.getBoundingClientRect();N.current.push({name:l,top:o.top,bottom:o.bottom,left:o.left,right:o.right,offsetTop:a.offsetTop,offsetLeft:a.offsetLeft,width:a.offsetWidth,height:a.offsetHeight})}}function I(e){var r=e.target;e.preventDefault(),A.current||(A.current=!0,S.current.style.display="block",_(r.dataset.name))}function L(e,r){e=function(e,r){for(var n,t=P(),a="vertical"===t?r-k.current:e-R.current,l=N.current.find((function(e){return e.name===w.current})),o=0,c=N.current.length-1;o<=c&&o<=N.current.length-1&&c<=N.current.length-1;){var i,d=N.current[i=c+o>>1],u=void 0,s=void 0,m="vertical"===t?(u=l.top+a,l.bottom,s=d.top,d.bottom):(u=l.left+a,l.right,s=d.left,d.right);if(s<=u&&u<=m){n=d;break}u<s?c=i-1:o=1+i}return n||null}(e,r),e&&(v.current.innerText=e.name,v.current.style.display="block","vertical"===P()?(r=e.offsetTop+Math.floor(e.height/2),v.current.style.transform="translate3d(0,".concat(r,"px,0)")):(r=e.offsetLeft+e.width,v.current.style.transform="translate3d(".concat(r,"px,0,0)")),j(e.name))}function _(e,r){void 0===r&&(r=100);var n=null==(n=null==(o=y.current)?void 0:o.querySelector)?void 0:n.call(o,".".concat(d,"-group-title[data-name='").concat(e,"']")),t=null==(o=y.current)?void 0:o.scrollTop,a=t,l=n.offsetTop,o=screen.updateInterval,c=C.current.scrollHeight/((100|r)/(o||16.7)+((100|r)%(o||16.7)!=0?1:0));x&&x(e),"undefined"!=typeof window&&window.requestAnimationFrame((function r(){function n(){A.current=!1,b.current=!1,S.current.style.display="none",h&&h(e)}t<l?l<a+c?a=l:a+=c:a-c<l?a=l:a-=c,y.current.scrollTop=a,t<l?l<=a?n():"undefined"!=typeof window&&window.requestAnimationFrame(r):a<=l?n():"undefined"!=typeof window&&window.requestAnimationFrame(r)}))}function j(e){var r,n;y.current.scrollTop=(null==(n=null==(r=y.current)?void 0:r.querySelector)?void 0:n.call(r,".".concat(d,"-group-title[data-name='").concat(e,"']"))).offsetTop,h&&h(e)}function J(e){e.preventDefault(),e.stopPropagation(),I(e)}function B(e){e.preventDefault();var r=e.changedTouches[0].pageY,n=e.changedTouches[0].pageX;e=e.target,e=i.A.getTopDom(e,"".concat(d,"-index-item"));w.current=e.dataset.name,L(n,r)}function q(){v.current.style.display="none",v.current.innerText="",v.current.style.transform="translate3d(0,0,0)"}function F(e){e.preventDefault(),k.current=e.pageY,R.current=e.pageX,e=e.target,e=i.A.getTopDom(e,"".concat(d,"-index-item")),w.current=null==e?void 0:e.dataset.name,b.current=!0}function W(e){if(!b.current)return!1;T.current=!0,e.preventDefault();var r=e.pageY;L(e.pageX,r)}function Z(){b.current=!1,T.current=!1,v.current.style.display="none",v.current.innerText="",v.current.style.transform="translate3d(0,0,0)"}function O(e){if(T.current)return b.current=!1,T.current=!1,v.current.style.display="none",v.current.innerText="",!(v.current.style.transform="translate3d(0,0,0)");e.preventDefault(),I(e)}function z(){D(),V()}return(0,t.useImperativeHandle)(r,(function(){return{scrollToAnimation:_,scrollTo:j}})),(0,t.useLayoutEffect)((function(){var e;return(e=document.createElement("div")).innerHTML="<div class='".concat(d,"-mask'></div>"),S.current=e.firstElementChild,document.body.appendChild(S.current),D(),V(),function(){var e,r;null!=(r=null==(e=null==(e=S.current)?void 0:e.parentElement)?void 0:e.removeChild)&&r.call(e,S.current)}}),[]),(0,t.useLayoutEffect)((function(){var e,r;return i.A.isTouch()?(null!=(r=null==(e=E.current)?void 0:e.addEventListener)&&r.call(e,"click",J),null!=(e=null==(r=E.current)?void 0:r.addEventListener)&&e.call(r,"touchmove",B),null!=(r=null==(e=E.current)?void 0:e.addEventListener)&&r.call(e,"touchend",q)):(null!=(e=null==(r=E.current)?void 0:r.addEventListener)&&e.call(r,"mousedown",F),null!=(r=null==(e=E.current)?void 0:e.addEventListener)&&r.call(e,"mousemove",W),null!=(e=null==(r=E.current)?void 0:r.addEventListener)&&e.call(r,"mouseleave",Z),null!=(r=null==(e=E.current)?void 0:e.addEventListener)&&r.call(e,"mouseup",O),"undefined"!=typeof window&&window.addEventListener("resize",z)),D(),V(),function(){var e,r;null!=(r=null==(e=E.current)?void 0:e.removeEventListener)&&r.call(e,"click",J),null!=(e=null==(r=E.current)?void 0:r.removeEventListener)&&e.call(r,"touchmove",B),null!=(r=null==(e=E.current)?void 0:e.removeEventListener)&&r.call(e,"touchend",q),null!=(e=null==(r=E.current)?void 0:r.removeEventListener)&&e.call(r,"mousedown",F),null!=(r=null==(e=E.current)?void 0:e.removeEventListener)&&r.call(e,"mousemove",W),null!=(e=null==(r=E.current)?void 0:r.removeEventListener)&&e.call(r,"mouseleave",Z),null!=(r=null==(e=E.current)?void 0:e.removeEventListener)&&r.call(e,"mouseup",O),"undefined"!=typeof window&&window.removeEventListener("resize",z)}})),t.createElement("div",{className:c()(d,"".concat(d,"-config-position-").concat(n),null!=a?a:""),style:null!=l?l:{},ref:C},t.createElement("div",{className:"".concat(d,"-highlighted"),ref:v}),t.createElement("div",{className:c()("".concat(d,"-content"),s),style:null!=m?m:{},ref:y},e()),t.createElement("div",{className:c()("".concat(d,"-index"),o),style:null!=u?u:{},ref:g},t.createElement("div",{className:"".concat(d,"-index-inner"),ref:E},G())))})));u.displayName="Surnames";const s=u,m="tcRxr7RaVAwM4DCAktAp",p="C3AGVgf0qAKQWDgRuM7w";function f(){const e="A".charCodeAt(),r="Z".charCodeAt(),n=[],a=[];a.length=10,a.fill(1);for(let l=e;l<=r;l++)n.push({index:String.fromCharCode(l),renderIndex:e=>e.index,renderTitle:e=>e.index,renderContent:e=>t.createElement("ul",{key:e.index},a.map(((r,n)=>t.createElement("li",{key:n+1},"".concat(e.index).concat(n+1)))))});return n}function h(){const e="A".charCodeAt(),r="Z".charCodeAt(),n=[];for(let t=e;t<=r;t++)n.push({index:String.fromCharCode(t),data:[]});return n}const x=()=>t.createElement("div",{style:{display:"flex"}},t.createElement(l.A.Group,{direction:"horizontal"},t.createElement("div",{className:m},t.createElement(s,{style:{border:"1px solid #ccc"},indexes:f(),dataSource:h()})),t.createElement("div",{className:m},t.createElement(s,{position:"left",style:{border:"1px solid #ccc"},indexes:f(),dataSource:h()}))));function C(){const e="A".charCodeAt(),r="Z".charCodeAt(),n=[],a=[];a.length=10,a.fill(1);for(let l=e;l<=r;l++)n.push({index:String.fromCharCode(l),renderIndex:e=>e.index,renderTitle:e=>e.index,renderContent:e=>t.createElement("ul",{key:e.index},a.map(((r,n)=>t.createElement("li",{key:n+1},"".concat(e.index).concat(n+1)))))});return n}function v(){const e="A".charCodeAt(),r="Z".charCodeAt(),n=[];for(let t=e;t<=r;t++)n.push({index:String.fromCharCode(t),data:[]});return n}const y=()=>t.createElement("div",{style:{display:"flex"}},t.createElement(l.A.Group,{direction:"horizontal"},t.createElement("div",{className:p},t.createElement(s,{position:"top",style:{border:"1px solid #ccc"},indexes:C(),dataSource:v()})),t.createElement("div",{className:p},t.createElement(s,{position:"bottom",style:{border:"1px solid #ccc"},indexes:C(),dataSource:v()}))));var g=n(80711);function E(){const e="A".charCodeAt(),r="Z".charCodeAt(),n=[],a=[];a.length=10,a.fill(1);for(let l=e;l<=r;l++)n.push({index:String.fromCharCode(l),renderIndex:e=>e.index,renderTitle:e=>e.index,renderContent:e=>t.createElement("ul",{key:e.index},a.map(((r,n)=>t.createElement("li",{key:n+1},"".concat(e.index).concat(n+1)))))});return n}function S(){const e="A".charCodeAt(),r="Z".charCodeAt(),n=[];for(let t=e;t<=r;t++)n.push({index:String.fromCharCode(t),data:[]});return n}const A=()=>{const e=(0,t.useRef)();return t.createElement(t.Fragment,null,t.createElement(l.A.Group,{direction:"horizontal"},t.createElement(g.Ay,{type:"primary",onClick:()=>{e.current.scrollToAnimation("Z")}},"滚动到底部"),t.createElement(g.Ay,{onClick:()=>{e.current.scrollToAnimation("A")}},"滚动到顶部")),t.createElement(l.A,{direction:"vertical"}),t.createElement("div",{className:m},t.createElement(s,{ref:e,style:{border:"1px solid #ccc"},indexes:E(),dataSource:S()})))},b=()=>t.createElement(a.Ay,{className:"Surnames"},t.createElement(a.wn,{title:"Surnames"},t.createElement("p",null,"姓名面板")),t.createElement(a.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:t},cardProps:{description:{title:"基本使用",info:"基本使用"}},type:"PlayGround",codeText:"import React from 'react';\r\n\r\nimport { Space, Surnames } from '@baifendian/adhere';\r\n\r\nimport styles from './examples.less';\r\n\r\nfunction getIndexesProps() {\r\n  const startCharCode = 'A'.charCodeAt();\r\n  const endCharCode = 'Z'.charCodeAt();\r\n\r\n  const indexes = [];\r\n\r\n  const count = [];\r\n  count.length = 10;\r\n  count.fill(1);\r\n\r\n  for (let i = startCharCode; i <= endCharCode; i++) {\r\n    indexes.push({\r\n      index: String.fromCharCode(i),\r\n      renderIndex: (index) => index.index,\r\n      renderTitle: (record) => record.index,\r\n      renderContent: (record) => (\r\n        <ul key={record.index}>\r\n          {count.map((t, index) => (\r\n            // eslint-disable-next-line react/no-array-index-key\r\n            <li key={index + 1}>{`${record.index}${index + 1}`}</li>\r\n          ))}\r\n        </ul>\r\n      ),\r\n    });\r\n  }\r\n\r\n  return indexes;\r\n}\r\n\r\nfunction getDataSource() {\r\n  const startCharCode = 'A'.charCodeAt();\r\n  const endCharCode = 'Z'.charCodeAt();\r\n\r\n  const dataSource = [];\r\n\r\n  for (let i = startCharCode; i <= endCharCode; i++) {\r\n    dataSource.push({\r\n      index: String.fromCharCode(i),\r\n      data: [],\r\n    });\r\n  }\r\n\r\n  return dataSource;\r\n}\r\n\r\nexport default () => (\r\n  <div style={{ display: 'flex' }}>\r\n    <Space.Group direction=\"horizontal\">\r\n      <div className={styles.Wrapper}>\r\n        <Surnames\r\n          style={{ border: '1px solid #ccc' }}\r\n          indexes={getIndexesProps()}\r\n          dataSource={getDataSource()}\r\n        />\r\n      </div>\r\n\r\n      <div className={styles.Wrapper}>\r\n        <Surnames\r\n          position=\"left\"\r\n          style={{ border: '1px solid #ccc' }}\r\n          indexes={getIndexesProps()}\r\n          dataSource={getDataSource()}\r\n        />\r\n      </div>\r\n    </Space.Group>\r\n  </div>\r\n);\r\n",renderChildren:()=>t.createElement(x,null)},{id:"p2",name:"上下结构",mode:"code",scope:{React:t},cardProps:{description:{title:"上下结构",info:"上下结构"}},type:"PlayGround",codeText:"import React from 'react';\r\n\r\nimport { Space, Surnames } from '@baifendian/adhere';\r\n\r\nimport styles from './examples.less';\r\n\r\nfunction getIndexesProps() {\r\n  const startCharCode = 'A'.charCodeAt();\r\n  const endCharCode = 'Z'.charCodeAt();\r\n\r\n  const indexes = [];\r\n\r\n  const count = [];\r\n  count.length = 10;\r\n  count.fill(1);\r\n\r\n  for (let i = startCharCode; i <= endCharCode; i++) {\r\n    indexes.push({\r\n      index: String.fromCharCode(i),\r\n      renderIndex: (index) => index.index,\r\n      renderTitle: (record) => record.index,\r\n      renderContent: (record) => (\r\n        <ul key={record.index}>\r\n          {count.map((t, index) => (\r\n            // eslint-disable-next-line react/no-array-index-key\r\n            <li key={index + 1}>{`${record.index}${index + 1}`}</li>\r\n          ))}\r\n        </ul>\r\n      ),\r\n    });\r\n  }\r\n\r\n  return indexes;\r\n}\r\n\r\nfunction getDataSource() {\r\n  const startCharCode = 'A'.charCodeAt();\r\n  const endCharCode = 'Z'.charCodeAt();\r\n\r\n  const dataSource = [];\r\n\r\n  for (let i = startCharCode; i <= endCharCode; i++) {\r\n    dataSource.push({\r\n      index: String.fromCharCode(i),\r\n      data: [],\r\n    });\r\n  }\r\n\r\n  return dataSource;\r\n}\r\n\r\nexport default () => (\r\n  <div style={{ display: 'flex' }}>\r\n    <Space.Group direction=\"horizontal\">\r\n      <div className={styles.Wrapper1}>\r\n        <Surnames\r\n          position=\"top\"\r\n          style={{ border: '1px solid #ccc' }}\r\n          indexes={getIndexesProps()}\r\n          dataSource={getDataSource()}\r\n        />\r\n      </div>\r\n\r\n      <div className={styles.Wrapper1}>\r\n        <Surnames\r\n          position=\"bottom\"\r\n          style={{ border: '1px solid #ccc' }}\r\n          indexes={getIndexesProps()}\r\n          dataSource={getDataSource()}\r\n        />\r\n      </div>\r\n    </Space.Group>\r\n  </div>\r\n);\r\n",renderChildren:()=>t.createElement(y,null)},{id:"p3",name:"使用api",mode:"code",scope:{React:t},cardProps:{description:{title:"使用api",info:"使用api"}},type:"PlayGround",codeText:"import { Button } from 'antd';\r\nimport React, { useRef } from 'react';\r\n\r\nimport { Space, Surnames } from '@baifendian/adhere';\r\n\r\nimport styles from './examples.less';\r\n\r\nfunction getIndexesProps() {\r\n  const startCharCode = 'A'.charCodeAt();\r\n  const endCharCode = 'Z'.charCodeAt();\r\n\r\n  const indexes = [];\r\n\r\n  const count = [];\r\n  count.length = 10;\r\n  count.fill(1);\r\n\r\n  for (let i = startCharCode; i <= endCharCode; i++) {\r\n    indexes.push({\r\n      index: String.fromCharCode(i),\r\n      renderIndex: (index) => index.index,\r\n      renderTitle: (record) => record.index,\r\n      renderContent: (record) => (\r\n        <ul key={record.index}>\r\n          {count.map((t, index) => (\r\n            // eslint-disable-next-line react/no-array-index-key\r\n            <li key={index + 1}>{`${record.index}${index + 1}`}</li>\r\n          ))}\r\n        </ul>\r\n      ),\r\n    });\r\n  }\r\n\r\n  return indexes;\r\n}\r\n\r\nfunction getDataSource() {\r\n  const startCharCode = 'A'.charCodeAt();\r\n  const endCharCode = 'Z'.charCodeAt();\r\n\r\n  const dataSource = [];\r\n\r\n  for (let i = startCharCode; i <= endCharCode; i++) {\r\n    dataSource.push({\r\n      index: String.fromCharCode(i),\r\n      data: [],\r\n    });\r\n  }\r\n\r\n  return dataSource;\r\n}\r\n\r\nexport default () => {\r\n  const ref = useRef();\r\n\r\n  return (\r\n    <>\r\n      <Space.Group direction=\"horizontal\">\r\n        <Button\r\n          type=\"primary\"\r\n          onClick={() => {\r\n            ref.current.scrollToAnimation('Z');\r\n          }}\r\n        >\r\n          滚动到底部\r\n        </Button>\r\n        <Button\r\n          onClick={() => {\r\n            ref.current.scrollToAnimation('A');\r\n          }}\r\n        >\r\n          滚动到顶部\r\n        </Button>\r\n      </Space.Group>\r\n\r\n      <Space direction=\"vertical\" />\r\n\r\n      <div className={styles.Wrapper}>\r\n        <Surnames\r\n          ref={ref}\r\n          style={{ border: '1px solid #ccc' }}\r\n          indexes={getIndexesProps()}\r\n          dataSource={getDataSource()}\r\n        />\r\n      </div>\r\n    </>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(A,null)}]}),t.createElement(a.e6,{title:"Props",config:[{border:!0,title:"Surnames",data:[{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"position",desc:"显示的位置 'top', 'right', 'bottom', 'left'",type:"string",defaultVal:"right"},{params:"indexes",desc:"索引的信息",type:"Array",defaultVal:"[]"},{params:"dataSource",desc:"数据",type:"Array",defaultVal:"[]"},{params:"onBeforeScroll",desc:"滚动之前的钩子",type:"Function",defaultVal:""},{params:"onScroll",desc:"滚动",type:"Function",defaultVal:""}]},{border:!0,title:"indexes",data:[{params:"index",desc:"索引值",type:"string",defaultVal:""},{params:"renderIndex",desc:"渲染索引的方法",type:"Function",defaultVal:""},{params:"renderTitle",desc:"渲染title的方法",type:"Function",defaultVal:""},{params:"renderContent",desc:"渲染Content的方法",type:"Function",defaultVal:""}]},{border:!0,title:"dataSource",data:[{params:"index",desc:"索引值",type:"string",defaultVal:""},{params:"data",desc:"数据",type:"Array<Object>",defaultVal:""}]}]}),t.createElement(a.I7,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"scrollToAnimation",desc:"动画的滚动到指定所引处",modifier:"public",params:[{name:"name",desc:"索引名称",type:"string",defaultVal:"",required:"true"},{name:"duration",desc:"动画的完成时间",type:"number",defaultVal:"100",required:"false"}],returnType:"",returnDesc:""},{name:"scrollTo",desc:"滚动到指定所引处",modifier:"public",params:[{name:"name",desc:"索引名称",type:"string",defaultVal:"",required:"true"}],returnType:"",returnDesc:""}]}]}))},73376:(e,r,n)=>{n.d(r,{A:()=>p});var t=n(86662),a=n(86056),l=n(26322),o=n(90264),c=n(38948);const i="fdFKYQbTadYRAFXyIsyC",d="TGQfKkX166qX5wG5Oi6O",u="xoMDGjw3kWAGwRmDVR2l",s="juDjVuIAwAS6vlI_lwTq",m="s2U_wfx5rmRlV8iKcHg5",p=()=>l.createElement("ul",{className:i},l.createElement("li",{className:d},l.createElement("dl",null,l.createElement("dt",null,"相关资源"),l.createElement("dd",null,l.createElement("ul",{className:u},l.createElement("li",{className:s},"自主研发",l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"http://49.232.163.126:8084/",target:"_blank",rel:"noopener noreferrer"},"adherev")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-BUILD",target:"_blank",rel:"noopener noreferrer"},"CTSJ-BUILD")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-BUILDV",target:"_blank",rel:"noopener noreferrer"},"CTSJ-BUILDV")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-STATE",target:"_blank",rel:"noopener noreferrer"},"CTSJ-STATE")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-ROUTER",target:"_blank",rel:"noopener noreferrer"},"CTSJ-ROUTER")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-VuexGenerator",target:"_blank",rel:"noopener noreferrer"},"CTSJ-VuexGenerator")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-React-SSR",target:"_blank",rel:"noopener noreferrer"},"CTSJ-React-SSR")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-DOC",target:"_blank",rel:"noopener noreferrer"},"CTSJ-DOC")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-DvaGenerator",target:"_blank",rel:"noopener noreferrer"},"CTSJ-DvaGenerator")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/WebViewJavascriptBridge",target:"_blank",rel:"noopener noreferrer"},"WebViewJavascriptBridge")))),l.createElement("li",{className:s},"模板工程",l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/adhere",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)")),l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/polyfill",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)(支持IE)")),l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/adhere-webpack5-js-ssr",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)(SSR)")),l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/AntPro",target:"_blank",rel:"noopener noreferrer"},"AntPro(G1)")),l.createElement("li",null,l.createElement("a",{href:"http://git.baifendian.com/dongxu.guo/ReactWeb",target:"_blank",rel:"noopener noreferrer"},"ReactWeb(G3)")),l.createElement("li",null,l.createElement("a",{href:"http://git.baifendian.com/bo.li/Percent_Vue_Admin.git",target:"_blank",rel:"noopener noreferrer"},"PercentVue(G3)")),l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/VuePro",target:"_blank",rel:"noopener noreferrer"},"VuePro(G1)")))))))),l.createElement("li",{className:d},l.createElement("dl",null,l.createElement("dt",null,"帮助"),l.createElement("dd",null,l.createElement("ul",{className:u},l.createElement("li",{className:s},l.createElement("a",{href:c.Jk.O,target:"_blank",rel:"noopener noreferrer"},l.createElement(a.A,null),l.createElement("span",{className:m},"Gitlib"))),l.createElement("li",{className:s},l.createElement(o.N_,{to:"/adhere/changelog"},l.createElement(t.A,null),l.createElement("span",{className:m},"更新日志"))))))))},96465:(e,r,n)=>{n.d(r,{Wc:()=>m,I7:()=>f,e6:()=>p,wn:()=>s,Ay:()=>h});var t=n(71860),a=n(24370),l=n(26322),o=n(73376);const c="xpgSrI_YtLJ2DLwvO1Cq",i="KHCbMGLwqpj8TVQmsF1m",{PlayGroundPageContext:d,PlayGroundPage:u}=a.A,{Section:s,CodeBoxSection:m,PropsSection:p,FunctionPropsSection:f}=u;const h=function(e){let{children:r,onScrollBottom:n,distance:a=50,...s}=e;const[m,p]=(0,l.useState)(),f=(0,l.useRef)();return(0,l.useEffect)((()=>{p(f.current)}),[]),l.createElement(d.Provider,{value:{scrollEl:null!=m?m:document.body}},l.createElement(u,(0,t.A)({ref:f,className:c,anchorNavigationAutoClassName:i,anchorNavigationFixedClassName:i},s),r,l.createElement(o.A,null)))}},32517:(e,r,n)=>{n.d(r,{A:()=>t});const t=n(2382).A},38948:e=>{e.exports=JSON.parse('{"rE":"2.11.0","Jk":{"O":"https://github.com/playerljc/adhere"}}')}}]);