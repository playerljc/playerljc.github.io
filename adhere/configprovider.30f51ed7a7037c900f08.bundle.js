"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[4178],{31921:(e,n,a)=>{a.r(n),a.d(n,{default:()=>g});var r=a(26322),t=a(96465),l=a(43760),o=a(25483),u=a(35696),c=a(58008);const{Label:s,Value:i}=u.A,d=()=>{const[e,n]=(0,r.useState)("zh_CN");return r.createElement(r.Fragment,null,r.createElement(c.Ay.Group,{value:e,onChange:e=>n(e.target.value),options:[{label:"中文",value:"zh_CN"},{label:"英文",value:"en_US"},{label:"葡语",value:"pt_PT"}]}),r.createElement(l.A,{intl:{lang:e,locales:{en_US:a(69007).A,zh_CN:a(34097).A,pt_PT:a(73574).A}}},(()=>r.createElement(u.A,{data:[{name:"g1",width:"100%",columnCount:3,colgroup:[,"auto",,"auto",,"auto"],data:[{key:"UserName",label:r.createElement(s,null,o.A.v("姓名"),"："),value:r.createElement(i,null,"张三")},{key:"Telephone",label:r.createElement(s,null,o.A.v("性别"),"："),value:r.createElement(i,null,"男")},{key:"Live",label:r.createElement(s,null,o.A.v("出生年月"),"："),value:r.createElement(i,null,"2020-10-09")},{key:"Address",label:r.createElement(s,null,o.A.v("详细地址"),"："),value:r.createElement(i,null,"No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China")}]}]}))))};var m=a(76541),p=a(67584);const v=()=>{const[e,n]=(0,r.useState)("#2480ff");return r.createElement("div",null,r.createElement("div",{style:{marginBottom:20}},r.createElement("input",{type:"color",value:e,onChange:e=>{n(e.target.value)}})),r.createElement(l.A,{theme:{colorPrimary:e},intl:{lang:"zh_CN",locales:Array.from(Object.values(p.A.value.SystemLang.value)).reduce(((e,n)=>(e[n.code]=n.module,e)),{})}},(()=>r.createElement(m.A,{max:20,min:12,step:1,value:12}))))},g=()=>r.createElement(t.Ay,null,r.createElement(t.wn,{title:"ConfigProvider"},r.createElement("p",null,"全局配置")),r.createElement(t.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:r},cardProps:{description:{title:"基本使用",info:"基本使用"}},codeText:"import { Radio } from 'antd';\r\nimport React, { useState } from 'react';\r\n\r\nimport { ConfigProvider, Intl, TableGridLayout } from '@baifendian/adhere';\r\n\r\nconst { Label, Value } = TableGridLayout;\r\n\r\nexport default () => {\r\n  const [lang, setLang] = useState('zh_CN');\r\n\r\n  return (\r\n    <>\r\n      <Radio.Group\r\n        value={lang}\r\n        onChange={(e) => setLang(e.target.value)}\r\n        options={[\r\n          { label: '中文', value: 'zh_CN' },\r\n          { label: '英文', value: 'en_US' },\r\n          { label: '葡语', value: 'pt_PT' },\r\n        ]}\r\n      />\r\n\r\n      <ConfigProvider\r\n        intl={{\r\n          lang,\r\n          locales: {\r\n            en_US: require('@/locales/en_US').default,\r\n            zh_CN: require('@/locales/zh_CN').default,\r\n            pt_PT: require('@/locales/pt_PT').default,\r\n          },\r\n        }}\r\n      >\r\n        {() => (\r\n          <TableGridLayout\r\n            data={[\r\n              {\r\n                name: 'g1',\r\n                width: '100%',\r\n                columnCount: 3,\r\n                colgroup: [, 'auto', , 'auto', , 'auto'],\r\n                data: [\r\n                  {\r\n                    key: 'UserName',\r\n                    label: <Label>{Intl.v('姓名')}：</Label>,\r\n                    value: <Value>张三</Value>,\r\n                  },\r\n                  {\r\n                    key: 'Telephone',\r\n                    label: <Label>{Intl.v('性别')}：</Label>,\r\n                    value: <Value>男</Value>,\r\n                  },\r\n                  {\r\n                    key: 'Live',\r\n                    label: <Label>{Intl.v('出生年月')}：</Label>,\r\n                    value: <Value>2020-10-09</Value>,\r\n                  },\r\n                  {\r\n                    key: 'Address',\r\n                    label: <Label>{Intl.v('详细地址')}：</Label>,\r\n                    value: (\r\n                      <Value>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Value>\r\n                    ),\r\n                  },\r\n                ],\r\n              },\r\n            ]}\r\n          />\r\n        )}\r\n      </ConfigProvider>\r\n    </>\r\n  );\r\n};\r\n",type:"PlayGround",renderChildren:()=>r.createElement(d,null)},{id:"p2",name:"theme",mode:"code",scope:{React:r},cardProps:{description:{title:"theme",info:"切换主题颜色"}},codeText:"import React, { useState } from 'react';\r\n\r\nimport { ConfigProvider, Dict, FontSizeSetting } from '@baifendian/adhere';\r\n\r\nexport default () => {\r\n  const [color, setColor] = useState('#2480ff');\r\n\r\n  return (\r\n    <div>\r\n      <div style={{ marginBottom: 20 }}>\r\n        <input\r\n          type=\"color\"\r\n          value={color}\r\n          onChange={(e) => {\r\n            setColor(e.target.value);\r\n          }}\r\n        />\r\n      </div>\r\n\r\n      <ConfigProvider\r\n        theme={{\r\n          colorPrimary: color,\r\n        }}\r\n        intl={{\r\n          lang: 'zh_CN',\r\n          locales: Array.from(Object.values(Dict.value.SystemLang.value)).reduce((pre, cur) => {\r\n            pre[cur.code] = cur.module;\r\n            return pre;\r\n          }, {}),\r\n        }}\r\n      >\r\n        {() => <FontSizeSetting max={20} min={12} step={1} value={12} />}\r\n      </ConfigProvider>\r\n    </div>\r\n  );\r\n};\r\n",type:"PlayGround",renderChildren:()=>r.createElement(v,null)}]}),r.createElement(t.e6,{title:"Props",config:[{border:!0,title:"属性",data:[{params:"intl",desc:"国际化",type:"\n                  {\n                    lang: 'en_US' | 'zh_CN' | 'pt_PT';\n                    locales: object;\n                    prefix: string;\n                  }\n                ",defaultVal:"{\n                  lang: 'zh_CN',\n                  locales: {},\n                  prefix: 'local',\n                }"},{params:"className",desc:"wrapperClassName",type:"string",defaultVal:""},{params:"style",desc:"style",type:"CSSProperties",defaultVal:""},{params:"theme",desc:"主题",type:"{\n                  [prop: string]: string\n                }",defaultVal:""},{params:"onIntlInit",desc:"国际化初始化完成",type:"() => void",defaultVal:""},{params:"children",desc:"children",type:"() => React.ReactNode",defaultVal:"null"}]}]}))},76541:(e,n,a)=>{a.d(n,{A:()=>m});var r=a(98505),t=a(31934),l=a.n(t),o=a(67004),u=a(26322),c=a(59418),s=function(){return(s=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++)for(var t in n=arguments[a])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}).apply(this,arguments)},i="adhere-ui-font-size-setting",d=(0,u.memo)((function(e){var n=e.className,a=e.style,t=e.onChange,d=(p=(0,u.useState)(null!=(p=e.value)?p:0))[0],m=p[1],p=(0,u.useRef)(null),v=(0,u.useCallback)((function(e){m(e),null!=t&&t(e)}),[d]);return(0,u.useEffect)((function(){var n;m(null!=(n=e.value)?n:0)}),[e.value]),u.createElement("div",{className:l()(i,null!=n?n:""),style:null!=a?a:{},ref:p},u.createElement("div",{className:"".concat(i,"-range-wrap")},u.createElement("div",{className:"".concat(i,"-separated-tool")},u.createElement("div",{className:"".concat(i,"-separated")},u.createElement("span",null,c.Ay.v("小"))),u.createElement("div",{className:"".concat(i,"-separated")},u.createElement("span",null,c.Ay.v("中"))),u.createElement("div",{className:"".concat(i,"-separated")},u.createElement("span",null,c.Ay.v("大"))),u.createElement("div",{className:"".concat(i,"-separated")},u.createElement("span",null,c.Ay.v("特大")))),u.createElement(r.A,s({},(0,o.A)(e,["className","style","value","onChange"]),{value:d,onChange:v}))))}));d.displayName="FontSizeSetting";const m=d},25483:(e,n,a)=>{a.d(n,{A:()=>r});const r=a(59418).Ay},38948:e=>{e.exports=JSON.parse('{"rE":"2.11.0","Jk":{"O":"https://github.com/playerljc/adhere"}}')}}]);