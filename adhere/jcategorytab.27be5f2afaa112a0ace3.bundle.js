"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[1131],{79839:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var a=t(9304),r=t(91098),l=t(1821),i=t.n(l),o=t(87227),c=t.n(o),s=t(90171),d=t(62984),m=function(e){var n=e.children,t=void 0===(t=e.className)?"":t;e=void 0===(e=e.style)?{}:e;return s.createElement("li",{className:i()("".concat("adhere-ui-jdcategorytab","-tab-item"),null!=t?t:""),style:null!=e?e:{}},n)},u=(0,s.memo)(m),p=function(){return(p=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},g="adhere-ui-jdcategorytab",y=d.Z.useSetState,f=function(e,n){var t=void 0===(t=e.className)?"":t,a=void 0===(a=e.style)?{}:a,r=void 0===(r=e.menuClassName)?"":r,l=void 0===(l=e.menuStyle)?{}:l,o=void 0===(o=e.menuInnerClassName)?"":o,d=void 0===(d=e.menuInnerStyle)?{}:d,m=void 0===(m=e.tabClassName)?"":m,u=void 0===(u=e.tabStyle)?{}:u,f=void 0===(E=e.menuData)?[]:E,v=void 0===(E=e.menuItemClassName)?"":E,b=void 0===(E=e.menuItemStyle)?{}:E,h=e.renderMenuItem,k=e.onBeforeChange,C=e.onChange,E=e.children,S=(x=y(e.activeKey))[0],T=x[1],I=(0,s.useRef)(c().utils.ease),x=(0,s.useRef)(null),D=(0,s.useRef)(null),A=(0,s.useRef)(null),L=(0,s.useRef)();function P(e,n,t){t=t||I.current.circular;var a,r,l=!0;(l=k?k(S,e):l)&&(null!=(r=null==(l=L.current)?void 0:l.scrollToElement)&&r.call(l,(a=e,r=f.findIndex((function(e){return e.key===a})),(l=Array.from(A.current.querySelectorAll(".".concat(g,"-menu-item")))).length?l[r]:null),n||250,null,null,t),setTimeout((function(){T(e,(function(){return C&&C(e)}))}),n||250))}return(0,s.useEffect)((function(){T(e.activeKey)}),[e.activeKey]),(0,s.useEffect)((function(){var e,n;function t(e){e.preventDefault()}return L.current||(L.current=new(c())(D.current,{mouseWheel:!0,click:!0})),null!=(n=null==(e=D.current)?void 0:e.addEventListener)&&n.call(e,"touchmove",t),function(){var e,n;return null==(n=null==(e=D.current)?void 0:e.removeEventListener)?void 0:n.call(e,"touchmove",t)}})),(0,s.useImperativeHandle)(n,(function(){return{scrollTo:P}})),s.createElement("div",{className:i()(g,null!=t?t:""),style:null!=a?a:{},ref:x},s.createElement("div",{ref:D,className:i()("".concat(g,"-menu"),null!=r?r:""),style:p({},l)},s.createElement("ul",{ref:A,className:i()("".concat(g,"-menu-inner"),null!=o?o:""),style:null!=d?d:{}},(f||[]).map((function(e){return h?s.createElement("li",{key:e.key,className:i()("".concat(g,"-menu-item"),S===e.key?"active":null,null!=v?v:""),style:null!=b?b:{}},s.createElement("a",{onClick:function(){return P(e.key)}},h(e))):s.createElement("li",{key:e.key,className:i()("".concat(g,"-menu-item"),S===e.key?"active":null,null!=v?v:""),style:null!=b?b:{}},s.createElement("a",{onClick:function(){return P(e.key)}},e.name))})))),s.createElement("ul",{className:i()("".concat(g,"-tab"),null!=m?m:""),style:null!=u?u:{}},E&&(null==(n=Array.isArray(E)?E:[E])?void 0:n.map((function(e){var n,t=e;return e.key===S?s.cloneElement(e,p(p({},null!=(n=e.props)?n:{}),{className:i()(null==e?void 0:e.className,"active")})):t})))))},v=(0,s.memo)((0,s.forwardRef)(f));v.Item=u;var b=v,h=t(86915),k=t(5592),C=t(28850),E=t(74731),S=t(78862),T=t(10566),I=t(17464),x=t(96032);const D=[];D.length=100,D.fill(0);const A=[{title:"Name",dataIndex:"name",key:"name",render:e=>s.createElement("a",null,e)},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:e=>s.createElement(s.Fragment,null,e.map((e=>{let n=e.length>5?"geekblue":"green";return"loser"===e&&(n="volcano"),s.createElement(k.Z,{color:n,key:e},e.toUpperCase())})))},{title:"Action",key:"action",render:(e,n)=>s.createElement(C.Z,{size:"middle"},s.createElement("a",null,"Invite ",n.name),s.createElement("a",null,"Delete"))}],L=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],P=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}];var R=()=>{const[e,n]=(0,s.useState)("1"),[t,l]=(0,s.useState)("1"),[i,o]=(0,s.useState)(!1),c=(0,s.useRef)();return s.createElement(x.ZP,null,s.createElement(x.$0,{title:"JDCategoryTab"},s.createElement("p",null,"京东的面板"),s.createElement("p",null,"本组件基于iscroll开发")),s.createElement(x.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"公共代码",mode:"code",scope:{React:s},cardProps:{description:{title:"公共代码",info:"公共代码"}},codeText:"\n  const data = [];\n  data.length = 100;\n  data.fill(0);\n\n  const columns = [\n    {\n      title: 'Name',\n      dataIndex: 'name',\n      key: 'name',\n      render: (text) => <a>{text}</a>,\n    },\n    {\n      title: 'Age',\n      dataIndex: 'age',\n      key: 'age',\n    },\n    {\n      title: 'Address',\n      dataIndex: 'address',\n      key: 'address',\n    },\n    {\n      title: 'Tags',\n      key: 'tags',\n      dataIndex: 'tags',\n      render: (tags) => (\n        <>\n          {tags.map((tag) => {\n            let color = tag.length > 5 ? 'geekblue' : 'green';\n            if (tag === 'loser') {\n              color = 'volcano';\n            }\n            return (\n              <Tag color={color} key={tag}>\n                {tag.toUpperCase()}\n              </Tag>\n            );\n          })}\n        </>\n      ),\n    },\n    {\n      title: 'Action',\n      key: 'action',\n      render: (text, record) => (\n        <Space size=\"middle\">\n          <a>Invite {record.name}</a>\n          <a>Delete</a>\n        </Space>\n      ),\n    },\n  ];\n\n  const tableData = [\n    {\n      key: '1',\n      name: 'John Brown',\n      age: 32,\n      address: 'New York No. 1 Lake Park',\n      tags: ['nice', 'developer'],\n    },\n    {\n      key: '2',\n      name: 'Jim Green',\n      age: 42,\n      address: 'London No. 1 Lake Park',\n      tags: ['loser'],\n    },\n    {\n      key: '3',\n      name: 'Joe Black',\n      age: 32,\n      address: 'Sidney No. 1 Lake Park',\n      tags: ['cool', 'teacher'],\n    },\n  ];\n\n  const listData = [\n    {\n      title: 'Ant Design Title 1',\n    },\n    {\n      title: 'Ant Design Title 2',\n    },\n    {\n      title: 'Ant Design Title 3',\n    },\n    {\n      title: 'Ant Design Title 4',\n    },\n];\n        ",type:"PlayGround"},{id:"p2",name:"基本使用",mode:"code",scope:{React:s},cardProps:{description:{title:"基本使用",info:"基本使用"}},codeText:'\n  import React from \'react\';\n  import { List, Avatar, Table } from \'antd\';\n  import { JdCategoryTab, ConditionalRender } from \'@baifendian/adhere\';\n\n  <div style={{ width: 600, height: 600, border: \'1px solid rgba(0,0,0,.1)\' }}>\n    <JdCategoryTab\n      menuData={data.map((t, index) => ({\n        key: String(index + 1),\n        name: "菜单:+(index + 1)",\n      }))}\n      activeKey="1"\n    >\n      {data.map((t, index) => (\n        <JdCategoryTab.Item key={String(index + 1)}>\n          <ConditionalRender\n            conditional={index % 2 === 0}\n            noMatch={\n              () => (\n                <Table\n                  style={{ padding: 20 }}\n                  columns={columns}\n                  dataSource={tableData}\n                  pagination={false}\n                />\n              )\n            }\n          >\n            () => (\n              <List\n                style={{ padding: 20 }}\n                itemLayout="horizontal"\n                dataSource={listData}\n                renderItem={(item) => (\n                  <List.Item>\n                    <List.Item.Meta\n                      avatar={\n                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n                      }\n                      title={<a href="https://ant.design">{item.title}</a>}\n                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"\n                    />\n                  </List.Item>\n                )}\n              />\n            )\n          </ConditionalRender>\n        </JdCategoryTab.Item>\n      ))}\n    </JdCategoryTab>\n  </div>\n        ',type:"PlayGround",renderChildren:()=>s.createElement("div",{style:{width:600,height:600,border:"1px solid rgba(0,0,0,.1)"}},s.createElement(b,{menuData:D.map(((e,n)=>({key:`${n+1}`,name:`菜单${n+1}`}))),activeKey:"1"},D.map(((e,n)=>s.createElement(b.Item,{key:`${n+1}`},s.createElement(h.Z,{conditional:n%2==0,noMatch:()=>s.createElement(E.Z,{style:{padding:20},columns:A,dataSource:L,pagination:!1})},(()=>s.createElement(S.Z,{style:{padding:20},itemLayout:"horizontal",dataSource:P,renderItem:e=>s.createElement(S.Z.Item,null,s.createElement(S.Z.Item.Meta,{avatar:s.createElement(T.C,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:s.createElement("a",{href:"https://ant.design"},e.title),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}))}))))))))},{id:"p3",name:"同一时刻只有一个Tab",mode:"code",scope:{React:s},cardProps:{description:{title:"同一时刻只有一个Tab",info:"tab同一时刻只有一个Tab"}},codeText:'\n  import React, { useState, useRef } from \'react\';\n  import { List, Avatar, Table, Tag, Space, Button } from \'antd\';\n  import { JdCategoryTab, ConditionalRender, Space as BSpace, Spin } from \'@baifendian/adhere\';\n\n  <div style={{ width: 600, height: 600, border: \'1px solid rgba(0,0,0,.1)\' }}>\n    <JdCategoryTab\n      menuData={data.map((t, index) => ({\n        key: String(index + 1),\n        name: "菜单" + (index + 1),\n      }))}\n      activeKey={activeKey}\n      onChange={(k) => {\n        setActiveKey(k);\n      }}\n    >\n      <JdCategoryTab.Item key={activeKey}>\n        <ConditionalRender\n          conditional={parseInt(activeKey) % 2 === 0}\n          noMatch={\n            () => (\n              <Table\n                style={{ padding: 20 }}\n                columns={columns}\n                dataSource={tableData}\n                pagination={false}\n              />\n            )\n          }\n        >\n          () => (\n            <List\n              style={{ padding: 20 }}\n              itemLayout="horizontal"\n              dataSource={listData}\n              renderItem={(item) => (\n                <List.Item>\n                  <List.Item.Meta\n                    avatar={\n                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n                    }\n                    title={<a href="https://ant.design">{item.title}</a>}\n                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"\n                  />\n                </List.Item>\n              )}\n            />\n          )\n        </ConditionalRender>\n      </JdCategoryTab.Item>\n    </JdCategoryTab>\n  </div>\n        ',type:"PlayGround",renderChildren:()=>s.createElement("div",{style:{width:600,height:600,border:"1px solid rgba(0,0,0,.1)"}},s.createElement(b,{menuData:D.map(((e,n)=>({key:`${n+1}`,name:`菜单${n+1}`}))),activeKey:e,onChange:e=>{n(e)}},s.createElement(b.Item,{key:e},s.createElement(h.Z,{conditional:parseInt(e)%2==0,noMatch:()=>s.createElement(E.Z,{style:{padding:20},columns:A,dataSource:L,pagination:!1})},(()=>s.createElement(S.Z,{style:{padding:20},itemLayout:"horizontal",dataSource:P,renderItem:e=>s.createElement(S.Z.Item,null,s.createElement(S.Z.Item.Meta,{avatar:s.createElement(T.C,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:s.createElement("a",{href:"https://ant.design"},e.title),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}))}))))))},{id:"p4",name:"置顶或置底",mode:"code",scope:{React:s},cardProps:{description:{title:"置顶或置底",info:"置顶或置底"}},codeText:`\n  import React, { useState, useRef } from 'react';\n  import { List, Avatar, Table, Tag, Space, Button } from 'antd';\n  import { JdCategoryTab, ConditionalRender, Space as BSpace, Spin } from '@baifendian/adhere';\n\n  <BSpace.Group direction="horizontal">\n    <Button\n      type="primary"\n      onClick={() => {\n        ref.current.scrollTo('1');\n      }}\n    >\n      置顶\n    </Button>\n    <Button\n      onClick={() => {\n        ref.current.scrollTo(\`${D.length}\`);\n      }}\n    >\n      置底\n    </Button>\n  </BSpace.Group>\n\n  <BSpace />\n\n  <div\n    style={{\n      position: 'relative',\n      width: 600,\n      height: 600,\n      border: '1px solid rgba(0,0,0,.1)',\n    }}\n  >\n    <Spin spinning={loading} />\n    <JdCategoryTab\n      ref={ref}\n      menuData={data.map((t, index) => ({\n        key: String(index + 1),\n        name: "菜单" + (index + 1),\n      }))}\n      activeKey={activeKey1}\n      onBeforeChange={() => {\n        setLoading(true);\n        return true;\n      }}\n      onChange={(key) => {\n        setActiveKey1(key);\n        setLoading(false);\n      }}\n    >\n      {data.map((t, index) => (\n        <JdCategoryTab.Item key={String(index + 1)}>\n          <ConditionalRender\n            conditional={index % 2 === 0}\n            noMatch={\n              () => (\n                <Table\n                  style={{ padding: 20 }}\n                  columns={columns}\n                  dataSource={tableData}\n                  pagination={false}\n                />\n              )\n            }\n          >\n            {\n              () => (\n                <List\n                  style={{ padding: 20 }}\n                  itemLayout="horizontal"\n                  dataSource={listData}\n                  renderItem={(item) => (\n                    <List.Item>\n                      <List.Item.Meta\n                        avatar={\n                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n                        }\n                        title={<a href="https://ant.design">{item.title}</a>}\n                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"\n                      />\n                    </List.Item>\n                  )}\n                />\n              )\n            }\n          </ConditionalRender>\n        </JdCategoryTab.Item>\n      ))}\n    </JdCategoryTab>\n  </div>\n        `,type:"PlayGround",renderChildren:()=>s.createElement(s.Fragment,null,s.createElement(r.Z.Group,{direction:"horizontal"},s.createElement(I.ZP,{type:"primary",onClick:()=>{c.current.scrollTo("1")}},"置顶"),s.createElement(I.ZP,{onClick:()=>{c.current.scrollTo(`${D.length}`)}},"置底")),s.createElement(r.Z,{direction:"vertical"}),s.createElement("div",{style:{position:"relative",width:600,height:600,border:"1px solid rgba(0,0,0,.1)"}},s.createElement(a.Z,{spinning:i}),s.createElement(b,{ref:c,menuData:D.map(((e,n)=>({key:`${n+1}`,name:`菜单${n+1}`}))),activeKey:t,onBeforeChange:()=>(o(!0),!0),onChange:e=>{l(e),o(!1)}},D.map(((e,n)=>s.createElement(b.Item,{key:`${n+1}`},s.createElement(h.Z,{conditional:n%2==0,noMatch:()=>s.createElement(E.Z,{style:{padding:20},columns:A,dataSource:L,pagination:!1})},(()=>s.createElement(S.Z,{style:{padding:20},itemLayout:"horizontal",dataSource:P,renderItem:e=>s.createElement(S.Z.Item,null,s.createElement(S.Z.Item.Meta,{avatar:s.createElement(T.C,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:s.createElement("a",{href:"https://ant.design"},e.title),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}))})))))))))}]}),s.createElement(x.sB,{title:"Props",config:[{border:!0,title:"JdCategoryTab",data:[{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"menuClassName",desc:"menu附加的样式表",type:"string",defaultVal:""},{params:"menuStyle",desc:"menu附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"menuInnerClassName",desc:"menuInner附加的样式表",type:"string",defaultVal:""},{params:"menuInnerStyle",desc:"menuInner附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"tabClassName",desc:"tab附加的样式表",type:"string",defaultVal:""},{params:"tabStyle",desc:"tab附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"menuItemClassName",desc:"menuItem附加的样式表",type:"string",defaultVal:""},{params:"menuItemStyle",desc:"menuItem附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"menuData",desc:"菜单数据",type:"Object{key,name}",defaultVal:"{}"},{params:"activeKey",desc:"当前激活项",type:"string",defaultVal:""},{params:"renderMenuItem",desc:"自定义渲染菜单",type:"Function",defaultVal:""},{params:"onBeforeChange",desc:"激活之前的钩子",type:"Function",defaultVal:"执行改变返回true，否则返回false"},{params:"onChange",desc:"菜单激活想发生改变",type:"Function",defaultVal:""}]},{border:!0,title:"JdCategoryTab.Item",data:[{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"key",desc:"唯一标志",type:"string",defaultVal:""}]}]}),s.createElement(x.ae,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"scrollTo",desc:"滚动到指定key",modifier:"public",params:[{name:"key",desc:"唯一标志",type:"string",defaultVal:"",required:""},{name:"time",desc:"滚动时间",type:"number",defaultVal:"250",required:""},{name:"easing",desc:"IScroll的easing",type:"string",defaultVal:"IScroll.utils.ease",required:""}],returnType:"void",returnDesc:""}]}]}))}},96032:function(e,n,t){t.d(n,{$0:function(){return c},ae:function(){return m},e0:function(){return s},sB:function(){return d}});var a=t(70517),r=t(6692),l=t(90171);const{PlayGroundPageContext:i,PlayGroundPage:o}=r.default,{Section:c,CodeBoxSection:s,PropsSection:d,FunctionPropsSection:m}=o;n.ZP=function(e){let{children:n,...t}=e;const[r,c]=(0,l.useState)(),s=(0,l.useRef)();return(0,l.useEffect)((()=>{c(s.current.parentElement.parentElement)}),[]),l.createElement(i.Provider,{value:{scrollEl:r}},l.createElement(o,(0,a.Z)({ref:s},t),n))}},86915:function(e,n,t){var a=t(4134);n.Z=a.Z},91098:function(e,n,t){var a=t(58014);n.Z=a.Z},9304:function(e,n,t){var a=t(13935);n.Z=a.Z}}]);