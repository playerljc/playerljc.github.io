"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[2037],{39228:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(91098),a=n(1821),l=n.n(a),c=n(19665),i=n.n(c),s=n(90171),u=n(4134),o=n(62984),d=n(33240),m=n(20725),f=n(67712),p="adhere-ui-pullrefresh",g=o.Z.useSetState,y=function(e,t){var n=void 0===(n=e.className)?"":n,r=void 0===(r=e.style)?{}:r,a=void 0===(a=e.scrollClassName)?"":a,c=void 0===(c=e.scrollStyle)?{}:c,o=e.renderIcon,y=void 0===(I=e.renderLabel)?function(){return m.ZP.v("下拉刷新")}:I,M=void 0===(I=e.renderCanLabel)?function(){return m.ZP.v("松开刷新")}:I,h=void 0===(I=e.renderLoadingAnimation)?"la-ball-circus la-dark":I,v=void 0===(I=e.isShowUpdateTime)||I,E=void 0===(I=e.updateTimeFormat)?f.Z.Dict.value.ResourceMomentFormat18.value():I,I=e.children,T=(G=g(!1))[0],L=G[1],N=(G=g(i()().valueOf()))[0],D=G[1],b=(0,s.useRef)(null),R=(0,s.useRef)(null),A=(0,s.useRef)(null),x=(0,s.useRef)(null),z=(0,s.useRef)(null),j=(0,s.useRef)(null),C=(0,s.useRef)(null),P=(0,s.useRef)(null),Z=(0,s.useRef)(null),w=(0,s.useRef)(null),S=(0,s.useRef)(!0),k=(0,s.useRef)(200),O=(0,s.useRef)(-1),Y=(0,s.useRef)(!1),B=(0,s.useRef)(0),G=(0,s.useCallback)((function(){return s.createElement(u.Z,{conditional:!!o,noMatch:function(){return s.createElement("div",{className:"".concat(p,"-trigger-icon")},s.createElement("img",{className:"".concat(p,"-trigger-icon-inner"),src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHN0eWxlPSJ3aWR0aDozMDhweDtoZWlnaHQ6MzA4cHg7IiB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lvaIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VjZjBmMSIgZD0iTTc5Ny43NjQ0MiAzMjYuNTU4NDFjLTguODg0MTk5LTE1LjU2MzMyNy0yNTIuODgwMS0yODYuODE5MDE5LTI2OC4zNzk1MTItMzEzLjU2NzQ4OS0xMC4xMzA1NDQtMTcuNDQ4ODIzLTM0LjI1ODQ5NS0xNy4xOTMxNjItNDQuMzg5MDM4IDBDNDczLjY1MDkzOSAzMi4yNjEzMjQgMjMwLjk5NzI1NSAzMDQuNjM1NTMgMjE4LjM3NDAyMyAzMjcuNDIxMjY0Yy05LjIzNTczMiAxNi41NTQwMTEgMC45NTg3MjcgMzguMzgxMDE5IDIxLjk1NDgzNyAzOC4zODEwMTlsMTE5LjkwNDczMSAwIDAgMjU2LjQ5MTMwMyAwIDM2Ljc4MzE0MSAyOTEuODM2MzU0IDAgMC0yOTMuMzA2NDAyIDEyMy41Nzk4NDkgMEM3OTQuNjk2NDk1IDM2NS43NzAzMjUgODA4Ljk0OTU2MiAzNDYuMTE2NDMxIDc5Ny43NjQ0MiAzMjYuNTU4NDF6IiAvPg0KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMSIgZmlsbD0iI2VjZjBmMSIgZD0iTTM2MC4yMDE2MzMgNjg5LjY5MjA2MWwyOTIuMzE1NzE4IDAgMCA5MC45MTkyMzItMjkyLjMxNTcxOCAwIDAtOTAuOTE5MjMyWiIgLz4NCjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzIiIGZpbGw9IiNlY2YwZjEiIGQ9Ik0zNjAuMjAxNjMzIDg0MC45MTUxOTFsMjkyLjMxNTcxOCAwIDAgNjAuNTkxNTE2LTI5Mi4zMTU3MTggMCAwLTYwLjU5MTUxNloiIC8+DQo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWNmMGYxIiBkPSJNMzYwLjIwMTYzMyA5OTIuMzkzOTgybDI5MC40MzAyMjIgMCAwIDMwLjI5NTc1OC0yOTAuNDMwMjIyIDAgMC0zMC4yOTU3NThaIiAvPg0KDQo8L3N2Zz4NCg==",alt:"",ref:A}))}},(function(){return s.createElement("div",{className:"".concat(p,"-trigger-icon")},s.createElement("div",{className:"".concat(p,"-trigger-icon-inner"),ref:A},null==o?void 0:o()))}))}),[o]),V=(0,s.useCallback)((function(){return s.createElement("p",{className:"".concat(p,"-trigger-label")},s.createElement(u.Z,{conditional:T,noMatch:function(){return null==y?void 0:y()}},(function(){return null==M?void 0:M()})))}),[T,y,M]),U=(0,s.useCallback)((function(){return s.createElement(u.Z,{conditional:v},(function(){return s.createElement("p",{className:"".concat(p,"-trigger-update")},m.ZP.v("更新时间"),"：",s.createElement("span",{className:"".concat(p,"-trigger-update-label")},i()(N).format(E)))}))}),[v,N,E]),H=(0,s.useCallback)((function(){return s.createElement(u.Z,{conditional:!!h},(function(){return s.createElement(u.Z,{conditional:d.Z.isString(h),noMatch:function(){return s.createElement("div",{className:"".concat(p,"-trigger-refresh"),ref:x},h())}},(function(){return s.createElement("div",{className:l()("".concat(p,"-trigger-refresh"),h),ref:x},s.createElement("div",null),s.createElement("div",null),s.createElement("div",null),s.createElement("div",null),s.createElement("div",null))}))}))}),[h]);function X(t,n){e[t]&&e[t](n)}function F(e,t,n){e.style.transition=e.style.webkitTransition="transform ".concat(n=void 0===n?0:n,"ms ease"),e.style.transform=e.style.webkitTransform="translate3d(0,".concat(t,",0)")}function W(){Q(),Y.current=!1,S.current=!0,j.current.style.display="flex",x.current.style.display="none",Z.current.style.display="flex",K(P.current,180,0),C.current.style.overflowY="auto",w.current.style.display="none"}function Q(){var e;null!=(e=C.current)&&e.removeEventListener("mousemove",te),null!=(e=C.current)&&e.removeEventListener("mouseup",ne),null!=(e=C.current)&&e.removeEventListener("touchmove",te),null!=(e=C.current)&&e.removeEventListener("touchend",ne)}function J(){var e;w.current.style.display="block",Q(),null!=(e=C.current)&&e.addEventListener("transitionend",(function e(){var t;Z.current.style.display="none",x.current.style.display="block",X("onPullRefresh"),null!=(t=C.current)&&t.removeEventListener("transitionend",e),D(i()().valueOf())})),F(C.current,"".concat(B.current,"px"),500),F(j.current,"calc(-100% + ".concat(B.current,"px)"),500),K(P.current,180,300)}function q(){var e;W(),null!=(e=C.current)&&e.addEventListener("transitionend",(function e(){var t;null!=(t=C.current)&&t.removeEventListener("transitionend",e),Z.current.style.display="flex"})),F(C.current,"0px",200),F(j.current,"calc(-100% + 0px)",200)}function _(e){return new Promise((function(t){return D(e||i()().valueOf(),(function(){return t()}))}))}function $(){return N}function K(e,t,n){e.style.transition=e.style.webkitTransition="transform ".concat(n=void 0===n?0:n,"ms linear"),e.style.transform=e.style.webkitTransform="rotate(".concat(t,"deg)")}function ee(e){X("onPullStart"),O.current=(e.changedTouches?e.changedTouches[0]:e).pageY,null!=(e=C.current)&&e.addEventListener("touchmove",te),null!=(e=C.current)&&e.addEventListener("mousemove",te),null!=(e=C.current)&&e.addEventListener("touchend",ne),null!=(e=C.current)&&e.addEventListener("mouseup",ne)}function te(e){C.current.style.overflow="hidden";var t=(e.changedTouches?e.changedTouches[0]:e).pageY-O.current,n=Math.abs(t);0<t?(e.preventDefault(),Y.current=!0,n<k.current?(F(C.current,"".concat(n,"px"),0),F(j.current,"calc(-100% + ".concat(n,"px)"),0),n>=B.current+80?(K(P.current,0,150),L(!0,(function(){return X("onPullCanRefresh")}))):(K(P.current,180,150),L(!1)),j.current.style.display="flex"):(F(C.current,"".concat(k.current,"px"),0),F(j.current,"calc(-100% + ".concat(k.current,"px)"),0),K(P.current,0,150),L(!0,(function(){return X("onPullBottom")})))):Y.current?(e.preventDefault(),F(C.current,"0px",0),F(j.current,"calc(-100% + 0px)",0),K(P.current,180,0)):W()}function ne(e){e=(e.changedTouches?e.changedTouches[0]:e).pageY-O.current;var t=Math.abs(e);(0<e?!(t<k.current)||t>=B.current+80?J:(X("onPullRebound"),q):W)()}function re(e){0===e.target.scrollTop?(S.current=!0,null!=(e=C.current)&&e.addEventListener("touchstart",ee),null!=(e=C.current)&&e.addEventListener("mousedown",ee)):S.current&&(S.current=!1,null!=(e=C.current)&&e.removeEventListener("touchstart",ee),null!=(e=C.current))&&e.removeEventListener("mousedown",ee)}return(0,s.useImperativeHandle)(t,(function(){return{refresh:J,reset:q,resetUpdateTime:_,getUpdateTime:$}})),(0,s.useEffect)((function(){D(e.updateTime||i()().valueOf())}),[e.updateTime]),(0,s.useEffect)((function(){w.current=document.querySelector(".".concat(p,"-mask")),w.current||(w.current=document.createElement("div"),w.current.className="".concat(p,"-mask"),document.body.appendChild(w.current))}),[]),(0,s.useLayoutEffect)((function(){var t;j.current=b.current,P.current=A.current,C.current=R.current,Z.current=z.current,k.current=((t=void 0===(t=e.pullHeight)?200:t)||200)<=0?200:(t||200)>C.current.clientHeight?C.current.clientHeight:t||200,B.current=j.current.clientHeight}),[]),(0,s.useLayoutEffect)((function(){var e;return null!=(e=C.current)&&e.addEventListener("touchstart",ee),null!=(e=C.current)&&e.addEventListener("mousedown",ee),null!=(e=C.current)&&e.addEventListener("scroll",re),Q})),s.createElement("div",{className:l()(p,null!=n?n:""),style:null!=r?r:{}},s.createElement("div",{className:l()("".concat(p,"-scroll"),null!=a?a:""),style:null!=c?c:{},ref:R},I),s.createElement("div",{className:"".concat(p,"-trigger"),ref:b},s.createElement("div",{className:"".concat(p,"-trigger-inner"),ref:z},G(),V(),U()),H()))},M=(0,s.memo)((0,s.forwardRef)(y)),h=n(78862),v=n(10566),E=n(17464),I=n(96032),T=n.p+"4e779984cefd8b946673.svg",L="SyiTiOh511llJ3to0z48",N="Hi3QfhRDymx23L0DOmGc";let D=[];D.length=100,D.fill(0),D=D.map(((e,t)=>`Ant Design Title ${t+1}`));var b=()=>{const e=(0,s.useRef)(),t=(0,s.useRef)(),n=(0,s.useRef)();return s.createElement(I.ZP,null,s.createElement(I.$0,{title:"PullRefresh"},s.createElement("p",null,"下拉刷新"),s.createElement("ul",null,s.createElement("li",null,"- 支持mobile和pc"))),s.createElement(I.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:s},cardProps:{description:{title:"基本使用",info:"基本使用"}},codeText:'\n  import React from \'react\';\n  import { List, Avatar } from \'antd\';\n  import { PullRefresh  } from \'@baifendian/adhere\';\n\n  import styles from \'./index.less\';\n\n  let data = [];\n  data.length = 100;\n  data.fill(0);\n  data = data.map((t, index) => "Ant Design Title" + (index + 1));\n\n  <PullRefresh\n    className={styles.Wrap}\n    onPullRefresh={(ins) => {\n      setTimeout(() => {\n        ins.reset();\n      }, 1000 * 3);\n    }}\n  >\n    <List\n      itemLayout="horizontal"\n      dataSource={[].concat(data)}\n      renderItem={(item) => (\n        <List.Item>\n          <List.Item.Meta\n            avatar={\n              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n            }\n            title={<a href="https://ant.design">{item.title}</a>}\n            description="Ant Design, a design language for background applications, is refined by Ant UED Team"\n          />\n        </List.Item>\n      )}\n    />\n  </PullRefresh>\n    ',type:"PlayGround",renderChildren:()=>s.createElement(M,{ref:e,className:L,onPullRefresh:()=>{setTimeout((()=>{e.current.reset()}),3e3)}},s.createElement(h.Z,{itemLayout:"horizontal",dataSource:[].concat(D),renderItem:e=>s.createElement(h.Z.Item,null,s.createElement(h.Z.Item.Meta,{avatar:s.createElement(v.C,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:s.createElement("a",{href:"https://ant.design"},e.title),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}))}))},{id:"p2",name:"Api触发刷新",mode:"code",scope:{React:s},cardProps:{description:{title:"Api触发刷新",info:"Api触发刷新"}},codeText:'\n  import React from \'react\';\n  import { List, Avatar, Button } from \'antd\';\n  import { PullRefresh, Space } from \'@baifendian/adhere\';\n\n  import styles from \'./index.less\';\n\n  let data = [];\n  data.length = 100;\n  data.fill(0);\n  data = data.map((t, index) => "Ant Design Title" + (index + 1));\n\n  const ref = React.createRef();\n\n  <PullRefresh\n    className={styles.Wrap}\n    ref={ref}\n    onPullRefresh={(ins) => {\n      setTimeout(() => {\n        ins.reset();\n      }, 1000 * 3);\n    }}\n  >\n    <List\n      itemLayout="horizontal"\n      dataSource={[].concat(data)}\n      renderItem={(item) => (\n        <List.Item>\n          <List.Item.Meta\n            avatar={\n              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n            }\n            title={<a href="https://ant.design">{item.title}</a>}\n            description="Ant Design, a design language for background applications, is refined by Ant UED Team"\n          />\n        </List.Item>\n      )}\n    />\n  </PullRefresh>\n  <Space direction="vertical" />\n\n  <Button\n    type="primary"\n    onClick={() => {\n      ref.current.refresh();\n    }}\n  >\n    触发下拉刷新\n  </Button>\n    ',type:"PlayGround",renderChildren:()=>s.createElement(s.Fragment,null,s.createElement(M,{className:L,ref:t,onPullRefresh:()=>{setTimeout((()=>{t.current.reset()}),3e3)}},s.createElement(h.Z,{itemLayout:"horizontal",dataSource:[].concat(D),renderItem:e=>s.createElement(h.Z.Item,null,s.createElement(h.Z.Item.Meta,{avatar:s.createElement(v.C,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:s.createElement("a",{href:"https://ant.design"},e.title),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}))})),s.createElement(r.Z,{direction:"vertical"}),s.createElement(E.ZP,{type:"primary",onClick:()=>{t.current.refresh()}},"触发下拉刷新"))},{id:"p3",name:"自定义图标和文本",cardProps:{description:{title:"自定义图标和文本",info:"自定义图标和文本"}},config:[{title:"index.jsx",mode:"code",scope:{React:s},codeText:"\n  import React from 'react';\n  import { List, Avatar } from 'antd';\n  import { PullRefresh } from '@baifendian/adhere';\n\n  import refreshIcon from './refresh.svg';\n\n  import styles from './index.less';\n\n  let data = [];\n  data.length = 100;\n  data.fill(0);\n  data = data.map((t, index) => \"Ant Design Title\" + (index + 1));\n\n  <PullRefresh\n    className={styles.Wrap}\n    isShowUpdateTime={false}\n    renderIcon={() => (\n      <div>\n        <img src={refreshIcon} alt=\"\" />\n      </div>\n    )}\n    renderLabel={() => '下拉可刷新'}\n    renderCanLabel={() => '释放可刷新'}\n    renderLoadingAnimation={() => (\n      <div className={styles.RefreshCustom1}>\n        <img src={refreshIcon} alt=\"\" />\n        <div>刷新中...</div>\n      </div>\n    )}\n    onPullRefresh={(ins) => {\n      setTimeout(() => {\n        ins.reset();\n      }, 1000 * 3);\n    }}\n  >\n    <List\n      itemLayout=\"horizontal\"\n      dataSource={[].concat(data)}\n      renderItem={(item) => (\n        <List.Item>\n          <List.Item.Meta\n            avatar={\n              <Avatar src=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\" />\n            }\n            title={<a href=\"https://ant.design\">{item.title}</a>}\n            description=\"Ant Design, a design language for background applications, is refined by Ant UED Team\"\n          />\n        </List.Item>\n      )}\n    />\n  </PullRefresh>\n          "},{title:"index.less",mode:"code",scope:{React:s},codeText:"\n  .Wrap {\n    height: 300px;\n  }\n\n  .RefreshCustom1 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #000;\n\n    img {\n      margin-right: 15px;\n      :local {\n        animation: RefreshCustom1 1.2s infinite linear;\n      }\n    }\n  }\n\n  @keyframes RefreshCustom1 {\n    to {\n      transform: rotate(405deg);\n      transform-origin: center center;\n    }\n  }\n          "}],type:"PlayGroundMulit",renderChildren:()=>s.createElement(M,{ref:n,className:L,isShowUpdateTime:!1,renderIcon:()=>s.createElement("div",null,s.createElement("img",{src:T,alt:""})),renderLabel:()=>"下拉可刷新",renderCanLabel:()=>"释放可刷新",renderLoadingAnimation:()=>s.createElement("div",{className:N},s.createElement("img",{src:T,alt:""}),s.createElement("div",null,"刷新中...")),onPullRefresh:()=>{setTimeout((()=>{n.current.reset()}),3e3)}},s.createElement(h.Z,{itemLayout:"horizontal",dataSource:[].concat(D),renderItem:e=>s.createElement(h.Z.Item,null,s.createElement(h.Z.Item.Meta,{avatar:s.createElement(v.C,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:s.createElement("a",{href:"https://ant.design"},e.title),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}))}))}]}),s.createElement(I.sB,{title:"Props",config:[{border:!0,title:"PullRefresh",data:[{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"scrollClassName",desc:"附加的样式表",type:"string",defaultVal:""},{params:"scrollStyle",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"pullHeight",desc:"拉取的高度",type:"number",defaultVal:"target返回的元素高度"},{params:"renderIcon",desc:"图标的渲染",type:"() => React.ReactElement",defaultVal:""},{params:"renderLabel",desc:"默认文字的渲染",type:"() => React.ReactElement",defaultVal:""},{params:"renderCanLabel",desc:"可以刷新文本的渲染",type:"() => React.ReactElement",defaultVal:""},{params:"renderLoadingAnimation",desc:"拉取后的loading效果，如果是string可选的值可以参考load-awesome库",type:"() => React.ReactElement | string",defaultVal:""},{params:"isShowUpdateTime",desc:"是否显示更新时间",type:"boolean",defaultVal:""},{params:"updateTime",desc:"默认的更新时间(毫秒)",type:"number",defaultVal:"当前时间的毫秒"},{params:"updateTimeFormat",desc:"更新时间的格式化",type:"string",defaultVal:"YYYY-MM-DD HH:mm:ss"},{params:"onPullStart",desc:"拖动开始",type:"Function",defaultVal:""},{params:"onPullCanRefresh",desc:"可以进行刷新操作",type:"Function",defaultVal:""},{params:"onPullRefresh",desc:"执行了刷新",type:"Function",defaultVal:""},{params:"onPullBottom",desc:"拉动到了底部",type:"Function",defaultVal:""},{params:"onPullRebound",desc:"弹回了",type:"Function",defaultVal:""}]}]}),s.createElement(I.ae,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"refresh",desc:"执行刷新操作",modifier:"public",params:[],returnType:"void",returnDesc:""},{name:"reset",desc:"重置",modifier:"public",params:[],returnType:"void",returnDesc:""},{name:"resetUpdateTime",desc:"重置更新时间",modifier:"public",params:[{name:"updateTime",desc:"更新时间(毫秒)",type:"number",defaultVal:"当前时间的毫秒",required:""}],returnType:"Promise",returnDesc:""},{name:"getUpdateTime",desc:"获取更新时间(毫秒)",modifier:"public",params:[],returnType:"number",returnDesc:"当前时间的毫秒"}]}]}))}},96032:function(e,t,n){n.d(t,{$0:function(){return s},ae:function(){return d},e0:function(){return u},sB:function(){return o}});var r=n(70517),a=n(6692),l=n(90171);const{PlayGroundPageContext:c,PlayGroundPage:i}=a.default,{Section:s,CodeBoxSection:u,PropsSection:o,FunctionPropsSection:d}=i;t.ZP=function(e){let{children:t,...n}=e;const[a,s]=(0,l.useState)(),u=(0,l.useRef)();return(0,l.useEffect)((()=>{s(u.current.parentElement.parentElement)}),[]),l.createElement(c.Provider,{value:{scrollEl:a}},l.createElement(i,(0,r.Z)({ref:u},n),t))}},91098:function(e,t,n){var r=n(58014);t.Z=r.Z}}]);