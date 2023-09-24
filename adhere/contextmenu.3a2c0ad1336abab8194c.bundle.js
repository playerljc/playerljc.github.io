"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[8608],{48712:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(30485).Z,r=t(17464),d=t(29529),i=t(90171),l=t(22070),o=t(61215),u=t(22342),c=t(17599),p=t(44233),s=t(64839),m=t(76674),f=t(28984),b=t(95278),y=t(96032);const h=[{name:"add",id:"add",icon:i.createElement(l.Z,null),separation:!1,attribute:{},children:[{name:"folder",id:"folder",icon:i.createElement(o.Z,null),separation:!1,attribute:{},children:[]},{name:"Add page above",id:"addpageabove",icon:i.createElement(u.Z,null),separation:!1,attribute:{},children:[]},{name:"Add page below",id:"addpagebelow",icon:i.createElement(u.Z,null),separation:!1,attribute:{},children:[]},{name:"subpage",id:"subpage",icon:i.createElement(u.Z,null),separation:!1,attribute:{},children:[]}]},{name:"move",id:"move",icon:i.createElement(c.Z,null),separation:!1,attribute:{},children:[{name:"Move up",id:"moveup",icon:"fa fa-long-arrow-alt-up",separation:!1,attribute:{},children:[]},{name:"Move down",id:"movedown",icon:i.createElement(p.Z,null),separation:!1,attribute:{},children:[]},{name:"upgrade",id:"upgrade",icon:i.createElement(s.Z,null),separation:!1,attribute:{},children:[]},{name:"downgrade",id:"downgrade",icon:i.createElement(m.Z,null),separation:!1,attribute:{},children:[]}]},{name:"delete",id:"delete",icon:i.createElement(f.Z,null),separation:!1,attribute:{},children:[]},{name:"rename",id:"rename",icon:i.createElement(b.Z,null),separation:!1,attribute:{},children:[]}];var g=()=>i.createElement(y.ZP,null,i.createElement(y.$0,{title:"ContextMenu"},i.createElement("p",null,"上下文菜单")),i.createElement(y.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"菜单的数据",mode:"code",scope:{React:i},cardProps:{description:{title:"菜单的数据",info:"菜单的数据"}},codeText:"\n  import {\n    FolderAddOutlined,\n    FileAddOutlined,\n    ArrowsAltOutlined,\n    ArrowDownOutlined,\n    ArrowUpOutlined,\n    DownloadOutlined,\n    DeleteOutlined,\n    EditOutlined,\n    FolderOutlined,\n  } from '@ant-design/icons';\n\n /**\n  * 上下文菜单数据\n  * @return - {Array}\n  */\n  const contextMenuData = [\n  {\n    name: 'add',\n    id: 'add',\n    icon: <FolderAddOutlined />,\n    separation: false,\n    attribute: {},\n    children: [\n      {\n        name: 'folder',\n        id: 'folder',\n        icon: <FolderOutlined />,\n        separation: false,\n        attribute: {},\n        children: [],\n      },\n      {\n        name: 'Add page above',\n        id: 'addpageabove',\n        icon: <FileAddOutlined />,\n        separation: false,\n        attribute: {},\n        children: [],\n      },\n      {\n        name: 'Add page below',\n        id: 'addpagebelow',\n        icon: <FileAddOutlined />,\n        separation: false,\n        attribute: {},\n        children: [],\n      },\n      {\n        name: 'subpage',\n        id: 'subpage',\n        icon: <FileAddOutlined />,\n        separation: false,\n        attribute: {},\n        children: [],\n      },\n    ],\n  },\n  {\n    name: 'move',\n    id: 'move',\n    icon: <ArrowsAltOutlined />,\n    separation: false,\n    attribute: {},\n    children: [\n      {\n        name: 'Move up',\n        id: 'moveup',\n        icon: 'fa fa-long-arrow-alt-up',\n        separation: false,\n        attribute: {},\n        children: [],\n      },\n      {\n        name: 'Move down',\n        id: 'movedown',\n        icon: <ArrowUpOutlined />,\n        separation: false,\n        attribute: {},\n        children: [],\n      },\n      {\n        name: 'upgrade',\n        id: 'upgrade',\n        icon: <ArrowDownOutlined />,\n        separation: false,\n        attribute: {},\n        children: [],\n      },\n      {\n        name: 'downgrade',\n        id: 'downgrade',\n        icon: <DownloadOutlined />,\n        separation: false,\n        attribute: {},\n        children: [],\n      },\n    ],\n  },\n  {\n    name: 'delete',\n    id: 'delete',\n    icon: <DeleteOutlined />,\n    separation: false,\n    attribute: {},\n    children: [],\n  },\n  {\n    name: 'rename',\n    id: 'rename',\n    icon: <EditOutlined />,\n    separation: false,\n    attribute: {},\n    children: [],\n  },\n  ];\n      ",type:"PlayGround"},{id:"p2",name:"基本使用",mode:"code",scope:{React:i},cardProps:{description:{title:"基本使用",info:"基本使用"}},codeText:"\n  import { ContextMenu } from '@baifendian/adhere';\n  import { Button } from 'antd';\n\n  <Button\n    type=\"primary\"\n    onClick={(e) => {\n      ContextMenu.open([].concat(contextMenuData), {\n        width: 200,\n        x: e.clientX,\n        y: e.clientY,\n        maskClosable: true,\n        handler: (id, attribute) => {\n          // folder 添加目录\n          // addpageabove 向上添加页面\n          // addpagebelow 向下添加页面\n          // subpage 添加子页面\n          // delete 删除\n          // rename 重命名\n        },\n      });\n    }}\n  >\n    点击弹出\n  </Button>\n      ",type:"PlayGround",renderChildren:()=>i.createElement(r.ZP,{type:"primary",onClick:e=>{a.open([].concat(h),{width:200,x:e.clientX,y:e.clientY,maskClosable:!0,handler:(e,n)=>{}})}},"点击弹出")},{id:"p3",name:"右键弹出",mode:"code",scope:{React:i},cardProps:{description:{title:"右键弹出",info:"右键弹出"}},codeText:"\n import { ContextMenu } from '@baifendian/adhere';\n import { Button } from 'antd';\n\n <Button\n    type=\"primary\"\n    onContextMenu={(e) => {\n      e.preventDefault();\n\n      ContextMenu.open([].concat(contextMenuData), {\n        width: 200,\n        x: e.clientX,\n        y: e.clientY,\n        maskClosable: true,\n        handler: (id, attribute) => {\n          // folder 添加目录\n          // addpageabove 向上添加页面\n          // addpagebelow 向下添加页面\n          // subpage 添加子页面\n          // delete 删除\n          // rename 重命名\n        },\n      });\n    }}\n  >\n    右键弹出\n  </Button>\n      ",type:"PlayGround",renderChildren:()=>i.createElement(r.ZP,{type:"primary",onContextMenu:e=>{e.preventDefault(),a.open([].concat(h),{width:200,x:e.clientX,y:e.clientY,maskClosable:!0,handler:(e,n)=>{}})}},"右键弹出")},{id:"p4",name:"多项按钮",mode:"code",scope:{React:i},cardProps:{description:{title:"多项按钮",info:"多项按钮"}},codeText:'\n import { ContextMenu } from \'@baifendian/adhere\';\n import { Radio } from \'antd\';\n\n <Radio.Group\n    value="large"\n    onChange={(e) => {\n      e.preventDefault();\n\n      ContextMenu.open([].concat(contextMenuData), {\n        width: 200,\n        x: e.nativeEvent.clientX,\n        y: e.nativeEvent.clientY,\n        maskClosable: true,\n        handler: (id, attribute) => {\n          // folder 添加目录\n          // addpageabove 向上添加页面\n          // addpagebelow 向下添加页面\n          // subpage 添加子页面\n          // delete 删除\n          // rename 重命名\n          alert("id:"+id+"attribute:"+attribute);\n        },\n      });\n    }}\n  >\n    <Radio.Button value="file">File</Radio.Button>\n    <Radio.Button value="edit">Edit</Radio.Button>\n    <Radio.Button value="view">View</Radio.Button>\n  </Radio.Group>\n      ',type:"PlayGround",renderChildren:()=>i.createElement(d.ZP.Group,{value:"large",onChange:e=>{e.preventDefault(),a.open([].concat(h),{width:200,x:e.nativeEvent.clientX,y:e.nativeEvent.clientY,maskClosable:!0,handler:(e,n)=>{alert(`${e},${n}`)}})}},i.createElement(d.ZP.Button,{value:"file"},"File"),i.createElement(d.ZP.Button,{value:"edit"},"Edit"),i.createElement(d.ZP.Button,{value:"view"},"View"))}]}),i.createElement(y.sB,{title:"Props",config:[{border:!0,title:"IData",data:[{params:"name",desc:"菜单名称",type:"string",defaultVal:""},{params:"icon",desc:"菜单图标",type:"string",defaultVal:""},{params:"id",desc:"菜单的唯一id",type:"string",defaultVal:""},{params:"disabled",desc:"是否可用",type:"boolean",defaultVal:"true"},{params:"separation",desc:"是否是分割线",type:"boolean",defaultVal:"false"},{params:"attribute",desc:"自定义参数",type:"Object",defaultVal:""},{params:"children",desc:"孩子",type:"Array<IData>",defaultVal:"[]"},{params:"className",desc:"附加样式",type:"string",defaultVal:""},{params:"style",desc:"附加样式",type:"Object",defaultVal:""},{params:"subMenuClassName",desc:"附加样式",type:"string",defaultVal:""},{params:"subMenuStyle",desc:"附加样式",type:"Object",defaultVal:""}]},{border:!0,title:"IConfig",data:[{params:"x",desc:"菜单显示的x坐标，现对于视口",type:"number",defaultVal:""},{params:"y",desc:"菜单显示的y坐标，现对于视口",type:"number",defaultVal:""},{params:"width",desc:"菜单宽度",type:"number",defaultVal:""},{params:"maskClosable",desc:"是否点击遮罩消失",type:"boolean",defaultVal:"true"},{params:"handler",desc:"点击菜单项的钩子",type:"Function",defaultVal:""},{params:"className",desc:"附加样式",type:"string",defaultVal:""},{params:"style",desc:"附加样式",type:"Object",defaultVal:""}]}]}),i.createElement(y.ae,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"open",desc:"显示一个上下文菜单",modifier:"public",params:[{name:"data",desc:"菜单的数据",type:"IData",defaultVal:"",required:""},{name:"config",desc:"配置",type:"IConfig",defaultVal:"{}",required:""}],returnType:"HtmlElement",returnDesc:"上下文菜单的el"},{name:"close",desc:"关闭一个上下文菜单",modifier:"public",params:[{name:"el",desc:"使用open方法返回的参数",type:"HtmlElement",defaultVal:"",required:""}],returnType:"",returnDesc:""}]}]}))},96032:function(e,n,t){t.d(n,{$0:function(){return o},ae:function(){return p},e0:function(){return u},sB:function(){return c}});var a=t(70517),r=t(6692),d=t(90171);const{PlayGroundPageContext:i,PlayGroundPage:l}=r.default,{Section:o,CodeBoxSection:u,PropsSection:c,FunctionPropsSection:p}=l;n.ZP=function(e){let{children:n,...t}=e;const[r,o]=(0,d.useState)(),u=(0,d.useRef)();return(0,d.useEffect)((()=>{o(u.current.parentElement.parentElement)}),[]),d.createElement(i.Provider,{value:{scrollEl:r}},d.createElement(l,(0,a.Z)({ref:u},t),n))}}}]);