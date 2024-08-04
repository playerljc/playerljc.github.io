"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[8880],{22755:(e,r,n)=>{n.r(r),n.d(r,{default:()=>y});var t=n(26322),o=n(19994),a=n(41283),l=n(89765),m=n(80711);const s=()=>t.createElement(l.A,{name:"textDemo",onFinish:e=>{console.log("success",e)},onFinishFailed:e=>{console.log("failed",e)}},t.createElement(a.A,{columns:[{label:"就是一个查看",name:"name",initialValue:"我就是一个查看",type:a.A.TEXT}],layout:{labelCol:{span:4},wrapperCol:{span:12}}}),t.createElement(l.A.Item,{wrapperCol:{offset:4}},t.createElement(m.Ay,{type:"primary",htmlType:"submit"},"提交"))),i=()=>t.createElement(l.A,{name:"inputDemo",onFinish:e=>{console.log("success",e)},onFinishFailed:e=>{console.log("failed",e)}},t.createElement(a.A,{columns:[{label:"输入框",name:"name",type:a.A.INPUT,rules:[{required:!0,message:"请输入"}],contentProps:{placeholder:"请输入关键词"}},{label:"密码框",name:"password",type:a.A.PASSWORD,rules:[{required:!0,message:"请输入"}],contentProps:{placeholder:"请输入密码"}},{label:"文本域",name:"des",type:a.A.TEXTAREA,contentProps:{rows:8}},{label:"数值输入框",name:"number",type:a.A.NUMBER,contentProps:{min:10}}],layout:{labelCol:{span:4},wrapperCol:{span:12}}}),t.createElement(l.A.Item,{wrapperCol:{offset:4}},t.createElement(m.Ay,{type:"primary",htmlType:"submit"},"提交"))),p=()=>t.createElement(l.A,{name:"selectDemo",onFinish:e=>{console.log("success",e)},onFinishFailed:e=>{console.log("failed",e)}},t.createElement(a.A,{columns:[{label:"单选框1",name:"radio1",type:a.A.RADIO,contentProps:{options:[{label:"单选1",value:1},{label:"单选2",value:2}]}},{label:"单选框2-按钮形式",name:"radio2",type:a.A.RADIO,contentProps:{optionType:"button",options:[{label:"单选1",value:1},{label:"单选2",value:2}]}},{label:"复选框",name:"checkbox1",type:a.A.CHECKBOX,contentProps:{options:[{label:"复选1",value:1},{label:"复选2",value:2}]}},{label:"下拉",name:"select1",type:a.A.SELECT,contentProps:{options:[{label:"下拉1",value:1},{label:"下拉2",value:2}]}},{label:"多选下拉",name:"select2",type:a.A.SELECT,contentProps:{mode:"multiple",options:[{label:"下拉1",value:1},{label:"下拉2",value:2}]}}],layout:{labelCol:{span:4},wrapperCol:{span:12}}}),t.createElement(l.A.Item,{wrapperCol:{offset:4}},t.createElement(m.Ay,{type:"primary",htmlType:"submit"},"提交"))),c=()=>t.createElement(l.A,{name:"switchDemo",onFinish:e=>{console.log("success",e)},onFinishFailed:e=>{console.log("failed",e)}},t.createElement(a.A,{columns:[{label:"开关",name:"switch",type:a.A.SWITCH,contentProps:{checkedChildren:"开启"}},{label:"滑动条",name:"slider",type:a.A.SLIDER,contentProps:{range:!0}},{label:"评分",name:"rate",type:a.A.RATE,contentProps:{allowHalf:!0}}],layout:{labelCol:{span:4},wrapperCol:{span:12}}}),t.createElement(l.A.Item,{wrapperCol:{offset:4}},t.createElement(m.Ay,{type:"primary",htmlType:"submit"},"提交"))),u=()=>t.createElement(l.A,{name:"pickerDemo",onFinish:e=>{console.log("success",e)},onFinishFailed:e=>{console.log("failed",e)}},t.createElement(a.A,{columns:[{label:"选择日期",name:"date",type:a.A.DATEPICKER,contentProps:{}},{label:"选择年份",name:"year",type:a.A.DATEPICKER,contentProps:{picker:"year"}},{label:"选择月份",name:"month",type:a.A.DATEPICKER,contentProps:{picker:"month"}},{label:"选择季度",name:"quarter",type:a.A.DATEPICKER,contentProps:{picker:"quarter"}},{label:"选择周",name:"week",type:a.A.DATEPICKER,contentProps:{picker:"week"}},{label:"选择日期范围",name:"rangedate",type:a.A.RANGEPICKER,contentProps:{}},{label:"选择时间",name:"time",type:a.A.TIMEPICKER,contentProps:{}}],layout:{labelCol:{span:4},wrapperCol:{span:12}}}),t.createElement(l.A.Item,{wrapperCol:{offset:4}},t.createElement(m.Ay,{type:"primary",htmlType:"submit"},"提交"))),d=()=>t.createElement(l.A,{name:"uploadDemo",onFinish:e=>{console.log("success",e)},onFinishFailed:e=>{console.log("failed",e)}},t.createElement(a.A,{columns:[{label:"上传头像",name:"image",type:a.A.UPLOAD,contentProps:{children:t.createElement(m.Ay,null,"Upload")}},{label:"自己定义的表单项",name:"my",type:a.A.DEFINE,content:t.createElement("div",null,"我就是自定义的"),contentProps:{}}],layout:{labelCol:{span:4},wrapperCol:{span:12}}}),t.createElement(l.A.Item,{wrapperCol:{offset:4}},t.createElement(m.Ay,{type:"primary",htmlType:"submit"},"提交"))),F=()=>t.createElement(l.A,{name:"skipDemo",onFinish:e=>{console.log("success",e)},onFinishFailed:e=>{console.log("failed",e)}},t.createElement(a.A,{columns:[{label:"是否显示下拉",name:"showSelect",type:a.A.RADIO,contentProps:{options:[{label:"是",value:1},{label:"否",value:2}],onChange:e=>setSkip(2===e.target.value)}},{label:"下拉",name:"isSelect",type:a.A.SELECT,skip,contentProps:{options:[{label:"下拉1",value:1},{label:"下拉2",value:2}]}}],layout:{labelCol:{span:4},wrapperCol:{span:12}}}),t.createElement(l.A.Item,{wrapperCol:{offset:4}},t.createElement(m.Ay,{type:"primary",htmlType:"submit"},"提交"))),y=()=>t.createElement(o.Ay,null,t.createElement(o.wn,{title:"FormItemCreator"},t.createElement("p",null,"表单配置")),t.createElement(o.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:t},cardProps:{description:{title:"基本使用",info:"【type=FormItemCreator.TEXT】"}},type:"PlayGround",codeText:"import { Button, Form } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { FormItemCreator } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  const layout = {\r\n    labelCol: { span: 4 },\r\n    wrapperCol: { span: 12 },\r\n  };\r\n\r\n  const onFinish = (values) => {\r\n    console.log('success', values);\r\n  };\r\n\r\n  const onFinishFailed = (errorInfo) => {\r\n    console.log('failed', errorInfo);\r\n  };\r\n\r\n  return (\r\n    <Form name=\"textDemo\" onFinish={onFinish} onFinishFailed={onFinishFailed}>\r\n      <FormItemCreator\r\n        columns={[\r\n          {\r\n            label: '就是一个查看',\r\n            name: 'name',\r\n            initialValue: '我就是一个查看',\r\n            type: FormItemCreator.TEXT,\r\n          },\r\n        ]}\r\n        layout={layout}\r\n      />\r\n      <Form.Item wrapperCol={{ offset: 4 }}>\r\n        <Button type=\"primary\" htmlType=\"submit\">\r\n          提交\r\n        </Button>\r\n      </Form.Item>\r\n    </Form>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(s,null)},{id:"p2",name:"文本框",mode:"code",scope:{React:t},cardProps:{description:{title:"文本框",info:"\n              【type=FormItemCreator.TEXT | FormItemCreator.PASSWORD | FormItemCreator.TEXTAREA |\n        FormItemCreator.NUMBER】\n            "}},type:"PlayGround",codeText:"import { Button, Form } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { FormItemCreator } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  const layout = {\r\n    labelCol: { span: 4 },\r\n    wrapperCol: { span: 12 },\r\n  };\r\n\r\n  const onFinish = (values) => {\r\n    console.log('success', values);\r\n  };\r\n\r\n  const onFinishFailed = (errorInfo) => {\r\n    console.log('failed', errorInfo);\r\n  };\r\n\r\n  return (\r\n    <Form name=\"inputDemo\" onFinish={onFinish} onFinishFailed={onFinishFailed}>\r\n      <FormItemCreator\r\n        columns={[\r\n          {\r\n            label: '输入框',\r\n            name: 'name',\r\n            type: FormItemCreator.INPUT,\r\n            rules: [{ required: true, message: '请输入' }],\r\n            contentProps: { placeholder: '请输入关键词' },\r\n          },\r\n          {\r\n            label: '密码框',\r\n            name: 'password',\r\n            type: FormItemCreator.PASSWORD,\r\n            rules: [{ required: true, message: '请输入' }],\r\n            contentProps: { placeholder: '请输入密码' },\r\n          },\r\n          {\r\n            label: '文本域',\r\n            name: 'des',\r\n            type: FormItemCreator.TEXTAREA,\r\n            contentProps: { rows: 8 },\r\n          },\r\n          {\r\n            label: '数值输入框',\r\n            name: 'number',\r\n            type: FormItemCreator.NUMBER,\r\n            contentProps: { min: 10 },\r\n          },\r\n        ]}\r\n        layout={layout}\r\n      />\r\n      <Form.Item wrapperCol={{ offset: 4 }}>\r\n        <Button type=\"primary\" htmlType=\"submit\">\r\n          提交\r\n        </Button>\r\n      </Form.Item>\r\n    </Form>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(i,null)},{id:"p3",name:"选择控件",mode:"code",scope:{React:t},cardProps:{description:{title:"选择控件",info:"\n              【type=radio | checkbox | select】\r\n\n              均是通过contentProps.options: [&lt;'label', 'value'&gt;]来配置选择项\n            "}},type:"PlayGround",codeText:"import { Button, Form } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { FormItemCreator } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  const layout = {\r\n    labelCol: { span: 4 },\r\n    wrapperCol: { span: 12 },\r\n  };\r\n\r\n  const onFinish = (values) => {\r\n    console.log('success', values);\r\n  };\r\n\r\n  const onFinishFailed = (errorInfo) => {\r\n    console.log('failed', errorInfo);\r\n  };\r\n\r\n  return (\r\n    <Form name=\"selectDemo\" onFinish={onFinish} onFinishFailed={onFinishFailed}>\r\n      <FormItemCreator\r\n        columns={[\r\n          {\r\n            label: '单选框1',\r\n            name: 'radio1',\r\n            type: FormItemCreator.RADIO,\r\n            contentProps: {\r\n              options: [\r\n                { label: '单选1', value: 1 },\r\n                { label: '单选2', value: 2 },\r\n              ],\r\n            },\r\n          },\r\n          {\r\n            label: '单选框2-按钮形式',\r\n            name: 'radio2',\r\n            type: FormItemCreator.RADIO,\r\n            contentProps: {\r\n              optionType: 'button',\r\n              options: [\r\n                { label: '单选1', value: 1 },\r\n                { label: '单选2', value: 2 },\r\n              ],\r\n            },\r\n          },\r\n          {\r\n            label: '复选框',\r\n            name: 'checkbox1',\r\n            type: FormItemCreator.CHECKBOX,\r\n            contentProps: {\r\n              options: [\r\n                { label: '复选1', value: 1 },\r\n                { label: '复选2', value: 2 },\r\n              ],\r\n            },\r\n          },\r\n          {\r\n            label: '下拉',\r\n            name: 'select1',\r\n            type: FormItemCreator.SELECT,\r\n            contentProps: {\r\n              options: [\r\n                { label: '下拉1', value: 1 },\r\n                { label: '下拉2', value: 2 },\r\n              ],\r\n            },\r\n          },\r\n          {\r\n            label: '多选下拉',\r\n            name: 'select2',\r\n            type: FormItemCreator.SELECT,\r\n            contentProps: {\r\n              mode: 'multiple',\r\n              options: [\r\n                { label: '下拉1', value: 1 },\r\n                { label: '下拉2', value: 2 },\r\n              ],\r\n            },\r\n          },\r\n        ]}\r\n        layout={layout}\r\n      />\r\n      <Form.Item wrapperCol={{ offset: 4 }}>\r\n        <Button type=\"primary\" htmlType=\"submit\">\r\n          提交\r\n        </Button>\r\n      </Form.Item>\r\n    </Form>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(p,null)},{id:"p4",name:"滑动控件",mode:"code",scope:{React:t},cardProps:{description:{title:"滑动控件",info:"\n              【type=switch | slider | Rate】\n            "}},type:"PlayGround",codeText:"import { Button, Form } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { FormItemCreator } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  const layout = {\r\n    labelCol: { span: 4 },\r\n    wrapperCol: { span: 12 },\r\n  };\r\n\r\n  const onFinish = (values) => {\r\n    console.log('success', values);\r\n  };\r\n\r\n  const onFinishFailed = (errorInfo) => {\r\n    console.log('failed', errorInfo);\r\n  };\r\n\r\n  return (\r\n    <Form name=\"switchDemo\" onFinish={onFinish} onFinishFailed={onFinishFailed}>\r\n      <FormItemCreator\r\n        columns={[\r\n          {\r\n            label: '开关',\r\n            name: 'switch',\r\n            type: FormItemCreator.SWITCH,\r\n            contentProps: {\r\n              // antd switch支持的属性\r\n              checkedChildren: '开启',\r\n            },\r\n          },\r\n          {\r\n            label: '滑动条',\r\n            name: 'slider',\r\n            type: FormItemCreator.SLIDER,\r\n            contentProps: {\r\n              // antd slider支持的属性\r\n              range: true,\r\n            },\r\n          },\r\n          {\r\n            label: '评分',\r\n            name: 'rate',\r\n            type: FormItemCreator.RATE,\r\n            contentProps: {\r\n              // antd rate支持的属性\r\n              allowHalf: true,\r\n            },\r\n          },\r\n        ]}\r\n        layout={layout}\r\n      />\r\n      <Form.Item wrapperCol={{ offset: 4 }}>\r\n        <Button type=\"primary\" htmlType=\"submit\">\r\n          提交\r\n        </Button>\r\n      </Form.Item>\r\n    </Form>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(c,null)},{id:"p5",name:"时间控件",mode:"code",scope:{React:t},cardProps:{description:{title:"时间控件",info:"\n              【type=FormItemCreator.DATEPICKER | FormItemCreator.RANGEPICKER | FormItemCreator.TIMEPICKER\n            "}},type:"PlayGround",codeText:"import { Button, Form } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { FormItemCreator } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  const layout = {\r\n    labelCol: { span: 4 },\r\n    wrapperCol: { span: 12 },\r\n  };\r\n\r\n  const onFinish = (values) => {\r\n    console.log('success', values);\r\n  };\r\n\r\n  const onFinishFailed = (errorInfo) => {\r\n    console.log('failed', errorInfo);\r\n  };\r\n\r\n  return (\r\n    <Form name=\"pickerDemo\" onFinish={onFinish} onFinishFailed={onFinishFailed}>\r\n      <FormItemCreator\r\n        columns={[\r\n          {\r\n            label: '选择日期',\r\n            name: 'date',\r\n            type: FormItemCreator.DATEPICKER,\r\n            contentProps: {\r\n              // antd DatePicker支持的属性\r\n            },\r\n          },\r\n          {\r\n            label: '选择年份',\r\n            name: 'year',\r\n            type: FormItemCreator.DATEPICKER,\r\n            contentProps: {\r\n              // antd DatePicker支持的属性\r\n              picker: 'year',\r\n            },\r\n          },\r\n          {\r\n            label: '选择月份',\r\n            name: 'month',\r\n            type: FormItemCreator.DATEPICKER,\r\n            contentProps: {\r\n              // antd DatePicker支持的属性\r\n              picker: 'month',\r\n            },\r\n          },\r\n          {\r\n            label: '选择季度',\r\n            name: 'quarter',\r\n            type: FormItemCreator.DATEPICKER,\r\n            contentProps: {\r\n              // antd DatePicker支持的属性\r\n              picker: 'quarter',\r\n            },\r\n          },\r\n          {\r\n            label: '选择周',\r\n            name: 'week',\r\n            type: FormItemCreator.DATEPICKER,\r\n            contentProps: {\r\n              // antd DatePicker支持的属性\r\n              picker: 'week',\r\n            },\r\n          },\r\n          {\r\n            label: '选择日期范围',\r\n            name: 'rangedate',\r\n            type: FormItemCreator.RANGEPICKER,\r\n            contentProps: {\r\n              // antd DatePicker.RangePicker支持的属性\r\n            },\r\n          },\r\n          {\r\n            label: '选择时间',\r\n            name: 'time',\r\n            type: FormItemCreator.TIMEPICKER,\r\n            contentProps: {\r\n              // antd TimePicker支持的属性\r\n            },\r\n          },\r\n        ]}\r\n        layout={layout}\r\n      />\r\n      <Form.Item wrapperCol={{ offset: 4 }}>\r\n        <Button type=\"primary\" htmlType=\"submit\">\r\n          提交\r\n        </Button>\r\n      </Form.Item>\r\n    </Form>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(u,null)},{id:"p6",name:"上传",mode:"code",scope:{React:t},cardProps:{description:{title:"上传",info:"\n              【type=FormItemCreator.UPLOAD | FormItemCreator.DEFINE】\n            "}},type:"PlayGround",codeText:"import { Button, Form } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { FormItemCreator } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  const layout = {\r\n    labelCol: { span: 4 },\r\n    wrapperCol: { span: 12 },\r\n  };\r\n\r\n  const onFinish = (values) => {\r\n    console.log('success', values);\r\n  };\r\n\r\n  const onFinishFailed = (errorInfo) => {\r\n    console.log('failed', errorInfo);\r\n  };\r\n\r\n  return (\r\n    <Form name=\"uploadDemo\" onFinish={onFinish} onFinishFailed={onFinishFailed}>\r\n      <FormItemCreator\r\n        columns={[\r\n          {\r\n            label: '上传头像',\r\n            name: 'image',\r\n            type: FormItemCreator.UPLOAD,\r\n            contentProps: {\r\n              // antd Upload支持的属性\r\n              // children 是upload组件包括的组件\r\n              children: <Button>Upload</Button>,\r\n            },\r\n          },\r\n          {\r\n            label: '自己定义的表单项',\r\n            name: 'my',\r\n            type: FormItemCreator.DEFINE,\r\n            content: <div>我就是自定义的</div>,\r\n            contentProps: {\r\n              // 传给content的属性\r\n            },\r\n          },\r\n        ]}\r\n        layout={layout}\r\n      />\r\n      <Form.Item wrapperCol={{ offset: 4 }}>\r\n        <Button type=\"primary\" htmlType=\"submit\">\r\n          提交\r\n        </Button>\r\n      </Form.Item>\r\n    </Form>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(d,null)},{id:"p7",name:"Skip",mode:"code",scope:{React:t},cardProps:{description:{title:"Skip",info:"\n              【Skip使用例子】\n            "}},type:"PlayGround",codeText:"import { Button, Form } from 'antd';\r\nimport React from 'react';\r\n\r\nimport { FormItemCreator } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  const layout = {\r\n    labelCol: { span: 4 },\r\n    wrapperCol: { span: 12 },\r\n  };\r\n\r\n  const onFinish = (values) => {\r\n    console.log('success', values);\r\n  };\r\n\r\n  const onFinishFailed = (errorInfo) => {\r\n    console.log('failed', errorInfo);\r\n  };\r\n\r\n  return (\r\n    <Form name=\"skipDemo\" onFinish={onFinish} onFinishFailed={onFinishFailed}>\r\n      <FormItemCreator\r\n        columns={[\r\n          {\r\n            label: '是否显示下拉',\r\n            name: 'showSelect',\r\n            type: FormItemCreator.RADIO,\r\n            contentProps: {\r\n              options: [\r\n                { label: '是', value: 1 },\r\n                { label: '否', value: 2 },\r\n              ],\r\n              onChange: (e) => setSkip(e.target.value === 2),\r\n            },\r\n          },\r\n          {\r\n            label: '下拉',\r\n            name: 'isSelect',\r\n            type: FormItemCreator.SELECT,\r\n            skip,\r\n            contentProps: {\r\n              options: [\r\n                { label: '下拉1', value: 1 },\r\n                { label: '下拉2', value: 2 },\r\n              ],\r\n            },\r\n          },\r\n        ]}\r\n        layout={layout}\r\n      />\r\n      <Form.Item wrapperCol={{ offset: 4 }}>\r\n        <Button type=\"primary\" htmlType=\"submit\">\r\n          提交\r\n        </Button>\r\n      </Form.Item>\r\n    </Form>\r\n  );\r\n};\r\n",renderChildren:()=>t.createElement(F,null)}]}),t.createElement(o.e6,{title:"Props",config:[{border:!0,title:"属性",data:[{params:"columns",desc:"配置数组",type:"array",defaultVal:""},{params:"layout",desc:"{labelCol, wrapperCol} 配置布局会应用到每一个item中，如果需要单独特殊配置，columns里面会覆盖此配置",type:"object",defaultVal:""}]},{border:!0,title:"表单中每一项的配置",data:[{params:"type",desc:"表单项类型, 可选【\n\n              FormItemCreator.INPUT, FormItemCreator.PASSWORD, FormItemCreator.TEXTAREA, FormItemCreator.NUMBER, FormItemCreator.RADIO, FormItemCreator.CHECKBOX, FormItemCreator.SELECT, \n\n              FormItemCreator.SWITCH, FormItemCreator.SLIDER, FormItemCreator.RATE, FormItemCreator.DATEPICKER, FormItemCreator.RANGEPICKER, FormItemCreator.TIMEPICKER, FormItemCreator.DEFINE \n\n            】",type:"string",defaultVal:""},{params:"skip",desc:"是否跳过此项，如果为true，则不渲染此项内容",type:"boolean",defaultVal:"false"},{params:"content",desc:"type为FormItemCreator.DEFINE时需配置此项，自定义Form.item中包裹的组件 ",type:"ReactNode",defaultVal:""},{params:"contentProps",desc:"传入被Form.Item包裹的组件的属性，\n 例如type为input则是antd中Input支持的属性，以此类推",type:"ReactNode",defaultVal:""},{params:"......",desc:t.createElement("div",null,"支持antd中Form.Item的属性",t.createElement("a",{href:"https://ant.design/components/form-cn/#Form.Item",target:"_blank",rel:"noreferrer"},"https://ant.design/components/form-cn/#Form.Item")),type:"",defaultVal:""}]}]}))},19994:(e,r,n)=>{n.d(r,{Ay:()=>u,I7:()=>c,Wc:()=>i,e6:()=>p,wn:()=>s});var t=n(71860),o=n(24370),a=n(26322);const{PlayGroundPageContext:l,PlayGroundPage:m}=o.A,{Section:s,CodeBoxSection:i,PropsSection:p,FunctionPropsSection:c}=m;const u=function(e){let{children:r,onScrollBottom:n,distance:o=50,...s}=e;const[i,p]=(0,a.useState)(),c=(0,a.useRef)(),u=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{function e(){const e=r.scrollHeight-r.offsetHeight,t=r.scrollTop;if(n&&Math.abs(t-e)<=o){if(u.current)return;u.current=!0,null==n||n().then((()=>{u.current=!1}))}}const r=c.current.parentElement.parentElement;return r.addEventListener("scroll",e),p(r),()=>{r.removeEventListener("scroll",e)}}),[]),a.createElement(l.Provider,{value:{scrollEl:i}},a.createElement(m,(0,t.A)({ref:c},s),r))}},41283:(e,r,n)=>{n.d(r,{A:()=>t});const t=n(53473).A}}]);