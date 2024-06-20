"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[4223],{64997:(e,n,r)=>{r.d(n,{A:()=>c});var t=r(26322),a=r(39407),i=r(45240),o=function(){return(o=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},s=i.A.useSetState,l=(0,t.forwardRef)((function(e,n){e=e.children;var r=s((0,a.A)()),i=r[0],l=r[1];return(0,t.useImperativeHandle)(n,(function(){return{reMount:function(){return new Promise((function(e){return l((0,a.A)(),(function(){return e()}))}))}}})),(0,t.cloneElement)(e,o({key:i},null!=(r=e.props)?r:{}))}));l.displayName="ForceUpdate";const c=l},75397:(e,n,r)=>{r.r(n),r.d(n,{default:()=>w});const t="import { Button, Table } from 'antd';\r\nimport faker from 'faker';\r\nimport React, { useRef } from 'react';\r\n\r\nimport { Hooks, Space, Suspense } from '@baifendian/adhere';\r\n\r\nconst { useSetState } = Hooks;\r\n\r\nexport default (props) => {\r\n  const [data, setData] = useSetState([]);\r\n\r\n  const ref = useRef();\r\n\r\n  function fetchData() {\r\n    return new Promise((resolve) => {\r\n      setTimeout(() => {\r\n        const list = [];\r\n        list.length = 10;\r\n        list.fill(0);\r\n\r\n        const dataSource = list.map((t, index) => ({\r\n          id: index + 1,\r\n          name: faker.internet.userName(),\r\n          sex: index % 2 === 0 ? '男' : '女',\r\n          age: faker.random.number(),\r\n          height: faker.random.number(),\r\n          width: faker.random.number(),\r\n        }));\r\n\r\n        setData(dataSource, () => resolve());\r\n      }, 1000 * 5);\r\n    });\r\n  }\r\n\r\n  function getColumns() {\r\n    return [\r\n      {\r\n        title: '姓名',\r\n        dataIndex: 'name',\r\n        key: 'name',\r\n      },\r\n      {\r\n        title: '性别',\r\n        key: 'sex',\r\n        dataIndex: 'sex',\r\n      },\r\n      {\r\n        title: '年龄',\r\n        key: 'age',\r\n        dataIndex: 'age',\r\n      },\r\n      {\r\n        title: '身高',\r\n        key: 'height',\r\n        dataIndex: 'height',\r\n      },\r\n      {\r\n        title: '体重',\r\n        key: 'width',\r\n        dataIndex: 'width',\r\n      },\r\n    ];\r\n  }\r\n\r\n  return (\r\n    <Suspense.ASync ref={ref} fetchData={fetchData} isEmpty={() => data.length === 0} {...props}>\r\n      <Space.Group direction=\"horizontal\">\r\n        <Button type=\"primary\" onClick={() => ref.current.reset().then(() => fetchData())}>\r\n          重置\r\n        </Button>\r\n        <Button type=\"primary\" onClick={() => ref.current.fetchData()}>\r\n          加载数据\r\n        </Button>\r\n      </Space.Group>\r\n      <Table rowKey=\"id\" columns={getColumns()} dataSource={data} pagination={false} />\r\n    </Suspense.ASync>\r\n  );\r\n};\r\n",a="import { Table } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { Suspense } from '@baifendian/adhere';\r\n\r\nclass TableWrap extends Suspense {\r\n  constructor(props) {\r\n    super(props);\r\n\r\n    this.state = {\r\n      dataSource: [],\r\n      loading: false,\r\n      pagination: {\r\n        current: 1,\r\n        pageSize: 2,\r\n      },\r\n    };\r\n  }\r\n\r\n  componentWillReceiveProps(nextProps) {\r\n    super.componentWillReceiveProps(nextProps);\r\n\r\n    if (nextProps.reset) {\r\n      this.setState(\r\n        {\r\n          pagination: {\r\n            current: 1,\r\n            pageSize: 2,\r\n          },\r\n        },\r\n        () => {\r\n          this.fetchData();\r\n        },\r\n      );\r\n    }\r\n  }\r\n\r\n  getColumns() {\r\n    return [\r\n      {\r\n        title: '姓名',\r\n        dataIndex: 'name',\r\n        key: 'name',\r\n      },\r\n      {\r\n        title: '性别',\r\n        key: 'sex',\r\n        dataIndex: 'sex',\r\n      },\r\n      {\r\n        title: '年龄',\r\n        key: 'age',\r\n        dataIndex: 'age',\r\n      },\r\n      {\r\n        title: '身高',\r\n        key: 'height',\r\n        dataIndex: 'height',\r\n      },\r\n      {\r\n        title: '体重',\r\n        key: 'width',\r\n        dataIndex: 'width',\r\n      },\r\n    ];\r\n  }\r\n\r\n  fetchData() {\r\n    const list = [];\r\n    list.length = 10;\r\n    list.fill(0);\r\n\r\n    this.setState(\r\n      {\r\n        loading: true,\r\n      },\r\n      () => {\r\n        setTimeout(() => {\r\n          const dataSource = list.map((t, index) => ({\r\n            id: index + 1,\r\n            name: `人${index + 1}`,\r\n            sex: '男',\r\n            age: 66,\r\n            height: 180,\r\n            width: 180,\r\n          }));\r\n\r\n          this.setState(\r\n            {\r\n              dataSource,\r\n            },\r\n            () => {\r\n              setTimeout(() => {\r\n                this.setState({\r\n                  loading: false,\r\n                });\r\n              }, 200);\r\n            },\r\n          );\r\n        }, 2000);\r\n      },\r\n    );\r\n  }\r\n\r\n  showLoading() {\r\n    return this.state.loading;\r\n  }\r\n\r\n  handleTableChange = (pagination) => {\r\n    this.setState(\r\n      {\r\n        pagination,\r\n      },\r\n      () => {\r\n        this.fetchData();\r\n      },\r\n    );\r\n  };\r\n\r\n  renderInner() {\r\n    return (\r\n      <div style={{ position: 'relative' }}>\r\n        <Table\r\n          rowKey=\"id\"\r\n          columns={this.getColumns()}\r\n          dataSource={this.state.dataSource}\r\n          // loading={this.showLoading()}\r\n          pagination={this.state.pagination}\r\n          onChange={this.handleTableChange}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nexport default TableWrap;\r\n";var i=r(26322),o=r(19994),s=r(46439),l=r(80711);const c=r(45745).A;var d=r(20527),u=r(10232);const p=class extends c{constructor(e){super(e),(0,d.A)(this,"handleTableChange",(e=>{this.setState({pagination:e},(()=>{this.fetchData()}))})),this.state={dataSource:[],loading:!1,pagination:{current:1,pageSize:2}}}componentWillReceiveProps(e){super.componentWillReceiveProps(e),e.reset&&this.setState({pagination:{current:1,pageSize:2}},(()=>{this.fetchData()}))}getColumns(){return[{title:"姓名",dataIndex:"name",key:"name"},{title:"性别",key:"sex",dataIndex:"sex"},{title:"年龄",key:"age",dataIndex:"age"},{title:"身高",key:"height",dataIndex:"height"},{title:"体重",key:"width",dataIndex:"width"}]}fetchData(){const e=[];e.length=10,e.fill(0),this.setState({loading:!0},(()=>{setTimeout((()=>{const n=e.map(((e,n)=>({id:n+1,name:"人".concat(n+1),sex:"男",age:66,height:180,width:180})));this.setState({dataSource:n},(()=>{setTimeout((()=>{this.setState({loading:!1})}),200)}))}),2e3)}))}showLoading(){return this.state.loading}renderInner(){return i.createElement("div",{style:{position:"relative"}},i.createElement(u.A,{rowKey:"id",columns:this.getColumns(),dataSource:this.state.dataSource,pagination:this.state.pagination,onChange:this.handleTableChange}))}},m=()=>{const e=(0,i.useRef)();return i.createElement(i.Fragment,null,i.createElement(l.Ay,{type:"primary",onClick:()=>{e.current.reMount()}},"重置"),i.createElement(s.A,{ref:e},i.createElement(p,null)))};var f=r(38848);const h=()=>{const e=(0,i.useRef)();return i.createElement(i.Fragment,null,i.createElement(l.Ay,{type:"primary",onClick:()=>{e.current.reMount()}},"重置"),i.createElement(s.A,{ref:e},i.createElement(p,{firstLoading:i.createElement("div",{style:{position:"relative"}},i.createElement(f.A,{spinning:!0}))})))};var y=r(32517),g=r(60888),x=r.n(g);const S=()=>{const[e,n]=(0,i.useState)([]),r=(0,i.useRef)();function t(){setTimeout((()=>{const e=[];e.length=10,e.fill(0);const r=e.map(((e,n)=>({id:n+1,name:x().internet.userName(),sex:n%2==0?"男":"女",age:x().random.number(),height:x().random.number(),width:x().random.number()})));n(r)}),5e3)}return(0,i.useEffect)((()=>{t()}),[]),i.createElement(c.Sync,{ref:r,data:e,isEmpty:()=>0===e.length},i.createElement(y.A.Group,{direction:"horizontal"},i.createElement(l.Ay,{type:"primary",onClick:()=>r.current.reset().then((()=>t()))},"重置"),i.createElement(l.Ay,{type:"primary",onClick:t},"加载数据")),i.createElement(u.A,{rowKey:"id",columns:[{title:"姓名",dataIndex:"name",key:"name"},{title:"性别",key:"sex",dataIndex:"sex"},{title:"年龄",key:"age",dataIndex:"age"},{title:"身高",key:"height",dataIndex:"height"},{title:"体重",key:"width",dataIndex:"width"}],dataSource:e,pagination:!1}))},k=()=>i.createElement(S,null);var b=r(71860),E=r(61444);const{useSetState:A}=E.A,v=e=>{const[n,r]=A([]),t=(0,i.useRef)();function a(){return new Promise((e=>{setTimeout((()=>{const n=[];n.length=10,n.fill(0);const t=n.map(((e,n)=>({id:n+1,name:x().internet.userName(),sex:n%2==0?"男":"女",age:x().random.number(),height:x().random.number(),width:x().random.number()})));r(t,(()=>e()))}),5e3)}))}return i.createElement(c.ASync,(0,b.A)({ref:t,fetchData:a,isEmpty:()=>0===n.length},e),i.createElement(y.A.Group,{direction:"horizontal"},i.createElement(l.Ay,{type:"primary",onClick:()=>t.current.reset().then((()=>a()))},"重置"),i.createElement(l.Ay,{type:"primary",onClick:()=>t.current.fetchData()},"加载数据")),i.createElement(u.A,{rowKey:"id",columns:[{title:"姓名",dataIndex:"name",key:"name"},{title:"性别",key:"sex",dataIndex:"sex"},{title:"年龄",key:"age",dataIndex:"age"},{title:"身高",key:"height",dataIndex:"height"},{title:"体重",key:"width",dataIndex:"width"}],dataSource:n,pagination:!1}))},T=()=>i.createElement(v,null),I=()=>i.createElement(v,{renderNormalLoading:e=>{let{children:n,loading:r}=e;return i.createElement("div",{style:{position:"relative"}},n,i.createElement(f.A,{text:"处理中...",spinning:r}))}}),w=()=>i.createElement(o.Ay,null,i.createElement(o.wn,{title:"Suspense"},i.createElement("p",null,"数据加载单元(如第一次是骷髅骨架，其他是loading)，有数据加载的单元，第一次是骷髅骨架(或其他)mount，更新是loading"),i.createElement("p",null,"此组件是一个父类，使用的时候需要写一个子类，人后重写fetchData、renderInner和showLoading三个方法，所以只能使用class的方式，不能使用hooks")),i.createElement(o.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",cardProps:{description:{title:"基本使用",info:"基本使用"}},active:"p1.jsx",config:[{title:"p1.jsx",key:"p1.jsx",codeText:"import { Button } from 'antd';\r\nimport React, { useRef } from 'react';\r\n\r\nimport { ForceUpdate } from '@baifendian/adhere';\r\n\r\nimport Table from '../table';\r\n\r\nexport default () => {\r\n  const t1 = useRef();\r\n\r\n  return (\r\n    <>\r\n      <Button\r\n        type=\"primary\"\r\n        onClick={() => {\r\n          t1.current.reMount();\r\n        }}\r\n      >\r\n        重置\r\n      </Button>\r\n\r\n      <ForceUpdate ref={t1}>\r\n        <Table />\r\n      </ForceUpdate>\r\n    </>\r\n  );\r\n};\r\n"},{title:"table.jsx",key:"table.jsx",codeText:a}],type:"PlayGroundTab",renderChildren:()=>i.createElement(m,null)},{id:"p2",name:"自定义firstLoading的UI",cardProps:{description:{title:"自定义firstLoading的UI",info:"自定义firstLoading的UI"}},active:"p2.jsx",config:[{title:"p2.jsx",key:"p2.jsx",codeText:"import { Button } from 'antd';\r\nimport React, { useRef } from 'react';\r\n\r\nimport { ForceUpdate, Spin } from '@baifendian/adhere';\r\n\r\nimport Table from '../table';\r\n\r\nexport default () => {\r\n  const t2 = useRef();\r\n\r\n  return (\r\n    <>\r\n      <Button\r\n        type=\"primary\"\r\n        onClick={() => {\r\n          t2.current.reMount();\r\n        }}\r\n      >\r\n        重置\r\n      </Button>\r\n\r\n      <ForceUpdate ref={t2}>\r\n        <Table\r\n          firstLoading={\r\n            <div style={{ position: 'relative' }}>\r\n              <Spin spinning />\r\n            </div>\r\n          }\r\n        />\r\n      </ForceUpdate>\r\n    </>\r\n  );\r\n};\r\n"},{title:"table.jsx",key:"table.jsx",codeText:a}],type:"PlayGroundTab",renderChildren:()=>i.createElement(h,null)},{id:"p3",name:"不调用接口值传递数据",cardProps:{description:{title:"不调用接口值传递数据",info:"不调用接口值传递数据"}},active:"p3.jsx",config:[{title:"p3.jsx",key:"p3.jsx",codeText:"import React from 'react';\r\n\r\nimport Sync from '../sync';\r\n\r\nexport default () => <Sync />;\r\n"},{title:"Sync.jsx",key:"Sync.jsx",codeText:"import { Button, Table } from 'antd';\r\nimport faker from 'faker';\r\nimport React, { useEffect, useRef, useState } from 'react';\r\n\r\nimport { Space, Suspense } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  const [data, setData] = useState([]);\r\n\r\n  const ref = useRef();\r\n\r\n  function fetchData() {\r\n    setTimeout(() => {\r\n      const list = [];\r\n      list.length = 10;\r\n      list.fill(0);\r\n\r\n      const dataSource = list.map((t, index) => ({\r\n        id: index + 1,\r\n        name: faker.internet.userName(),\r\n        sex: index % 2 === 0 ? '男' : '女',\r\n        age: faker.random.number(),\r\n        height: faker.random.number(),\r\n        width: faker.random.number(),\r\n      }));\r\n\r\n      setData(dataSource);\r\n    }, 1000 * 5);\r\n  }\r\n\r\n  function getColumns() {\r\n    return [\r\n      {\r\n        title: '姓名',\r\n        dataIndex: 'name',\r\n        key: 'name',\r\n      },\r\n      {\r\n        title: '性别',\r\n        key: 'sex',\r\n        dataIndex: 'sex',\r\n      },\r\n      {\r\n        title: '年龄',\r\n        key: 'age',\r\n        dataIndex: 'age',\r\n      },\r\n      {\r\n        title: '身高',\r\n        key: 'height',\r\n        dataIndex: 'height',\r\n      },\r\n      {\r\n        title: '体重',\r\n        key: 'width',\r\n        dataIndex: 'width',\r\n      },\r\n    ];\r\n  }\r\n\r\n  useEffect(() => {\r\n    fetchData();\r\n  }, []);\r\n\r\n  return (\r\n    <Suspense.Sync ref={ref} data={data} isEmpty={() => data.length === 0}>\r\n      <Space.Group direction=\"horizontal\">\r\n        <Button type=\"primary\" onClick={() => ref.current.reset().then(() => fetchData())}>\r\n          重置\r\n        </Button>\r\n        <Button type=\"primary\" onClick={fetchData}>\r\n          加载数据\r\n        </Button>\r\n      </Space.Group>\r\n      <Table rowKey=\"id\" columns={getColumns()} dataSource={data} pagination={false} />\r\n    </Suspense.Sync>\r\n  );\r\n};\r\n"}],type:"PlayGroundTab",renderChildren:()=>i.createElement(k,null)},{id:"p4",name:"调用接口传递数据",cardProps:{description:{title:"调用接口传递数据",info:"调用接口传递数据"}},active:"p4.jsx",config:[{title:"p4.jsx",key:"p4.jsx",codeText:"import React from 'react';\r\n\r\nimport ASync from '../async';\r\n\r\nexport default () => <ASync />;\r\n"},{title:"ASync.jsx",key:"ASync.jsx",codeText:t}],type:"PlayGroundTab",renderChildren:()=>i.createElement(T,null)},{id:"p5",name:"自定义renderNormalLoading",cardProps:{description:{title:"自定义renderNormalLoading",info:"自定义renderNormalLoading"}},active:"p5.jsx",config:[{title:"p5.jsx",key:"p5.jsx",codeText:"import React from 'react';\r\n\r\nimport { Spin } from '@baifendian/adhere';\r\n\r\nimport ASync from '../async';\r\n\r\nexport default () => (\r\n  <ASync\r\n    renderNormalLoading={({ children, loading }) => {\r\n      return (\r\n        <div style={{ position: 'relative' }}>\r\n          {children}\r\n          <Spin text=\"处理中...\" spinning={loading} />\r\n        </div>\r\n      );\r\n    }}\r\n  />\r\n);\r\n"},{title:"ASync.jsx",key:"ASync.jsx",codeText:t}],type:"PlayGroundTab",renderChildren:()=>i.createElement(I,null)}]}),i.createElement(o.e6,{title:"Props",config:[{border:!0,title:"SuspenseProps",data:[{params:"reset",desc:"是否重置",type:"boolean",defaultVal:"false"},{params:"firstLoading",desc:"自定义firstLoading",type:"React.ReactElement | null",defaultVal:"null"}]},{border:!0,title:"SuspenseSyncProps",data:[{params:"data",desc:"数据",type:"any",defaultVal:"{}"},{params:"isEmpty",desc:"是否是空数据",type:"() => boolean",defaultVal:""}]},{border:!0,title:"SuspenseASyncProps",data:[{params:"isEmpty",desc:"是否是空数据",type:"() => boolean",defaultVal:""},{params:"fetchData",desc:"加载数据",type:"(params?:any) => Promise<void>",defaultVal:""}]}]}),i.createElement(o.I7,{title:"Api",config:[{border:!0,title:"重写的方法",data:[{name:"fetchData",desc:"加载数据",modifier:"public",params:[],returnType:"void",returnDesc:""},{name:"renderInner",desc:"渲染的UI",modifier:"public",params:[],returnType:"React.ReactElement",returnDesc:""},{name:"showLoading",desc:"是否显示遮罩",modifier:"public",params:[],returnType:"boolean",returnDesc:""},{name:"reset",desc:"重置",modifier:"public",params:[],returnType:"Promise<void>",returnDesc:""}]}]}))},19994:(e,n,r)=>{r.d(n,{Ay:()=>p,I7:()=>u,Wc:()=>c,e6:()=>d,wn:()=>l});var t=r(71860),a=r(24370),i=r(26322);const{PlayGroundPageContext:o,PlayGroundPage:s}=a.A,{Section:l,CodeBoxSection:c,PropsSection:d,FunctionPropsSection:u}=s;const p=function(e){let{children:n,onScrollBottom:r,distance:a=50,...l}=e;const[c,d]=(0,i.useState)(),u=(0,i.useRef)(),p=(0,i.useRef)(!1);return(0,i.useEffect)((()=>{function e(){const e=n.scrollHeight-n.offsetHeight,t=n.scrollTop;if(r&&Math.abs(t-e)<=a){if(p.current)return;p.current=!0,null==r||r().then((()=>{p.current=!1}))}}const n=u.current.parentElement.parentElement;return n.addEventListener("scroll",e),d(n),()=>{n.removeEventListener("scroll",e)}}),[]),i.createElement(o.Provider,{value:{scrollEl:c}},i.createElement(s,(0,t.A)({ref:u},l),n))}},46439:(e,n,r)=>{r.d(n,{A:()=>t});const t=r(64997).A},61444:(e,n,r)=>{r.d(n,{A:()=>t});const t=r(45240).A},32517:(e,n,r)=>{r.d(n,{A:()=>t});const t=r(2382).A},38848:(e,n,r)=>{r.d(n,{A:()=>t});const t=r(68729).A}}]);