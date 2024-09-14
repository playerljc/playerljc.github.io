"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[2335],{92038:(e,r,n)=>{n.r(r),n.d(r,{default:()=>b});var t=n(26322),a=n(96465),l=n(1224),i=n(53516),s=n(66003),o=n(48305),c=n(80711),d=n(7235),u=n(12375);const m="cybF6IrTckM7_AsQXpLZ",p="x23SWzoyoeQ9agDOVBAG",f="jKXgUPs3Kx8Wm0nQZZmA",g="GW0_Pl78HWq_mgIpHzPv",y="LVaJXoW064FcjEBYA4on",{Fetch:h}=l.A;function E(){const[e,r]=(0,t.useState)(""),[n,a]=(0,t.useState)([]),[l,E]=(0,t.useState)(!1),b=(0,t.useRef)(),v=window.location.origin,S=window.location.origin,x=(0,t.useRef)(new h(window,v));return t.createElement("div",{className:m},l&&t.createElement("div",{className:p},t.createElement(i.A,{direction:"vertical",size:"middle",style:{display:"flex"}},t.createElement(s.A,{title:"将输入框值设置到iframe里"},t.createElement(o.A.Group,{compact:!0},t.createElement(o.A,{value:e,className:y,onChange:e=>r(e.target.value)}),t.createElement(c.Ay,{type:"primary",onClick:function(){var r;x.current.put(null==b||null===(r=b.current)||void 0===r?void 0:r.contentWindow,S,"/display",{data:e})}},"发送"))),t.createElement(s.A,{title:"获取iframe文档内容"},t.createElement(c.Ay,{type:"primary",onClick:function(){var r;x.current.get(null==b||null===(r=b.current)||void 0===r?void 0:r.contentWindow,S,"/getDoc",{data:e}).then((e=>{alert(e.getBody())}))}},"获取")),t.createElement(s.A,{title:"上传图片到iframe里面进行显示"},t.createElement(o.A,{id:"uploadImgFile",type:"file",onChange:function(e){const r=e.target.files[0],n=new FileReader;n.addEventListener("load",(e=>{var r;x.current.put(null==b||null===(r=b.current)||void 0===r?void 0:r.contentWindow,S,"/uploadImg",{data:e.target.result})})),n.readAsDataURL(r)}})),t.createElement(s.A,{title:"带有进度的上传一个文件给iframe"},t.createElement(o.A,{id:"uploadProgressFile",type:"file",onChange:function(e){const r=e.target.files[0],n=(0,u.A)(),t={file:r,completeSize:0,status:"active",fileId:n};a((e=>[...e,t]));const l=new FileReader;l.addEventListener("load",(e=>{const t=e.target.result,l=1024,i=Math.floor(t.byteLength/l)+(t.byteLength%l==0?0:1);console.log("文件名称",r.name),console.log("文件大小",r.size),console.log("上传次数",i);let s=0;const o=()=>{var e;if(s>=i)return a((e=>(e.find((e=>e.fileId===n)).status="success",[...e]))),void console.log("文件".concat(r.name,"上传完成!"));const c=t.slice(s*l,(s+1)*l);console.log("第".concat(s+1,"次上传开始")),x.current.get(null==b||null===(e=b.current)||void 0===e?void 0:e.contentWindow,S,"/progressUploadFile",{data:{segmentSize:l,segmentCount:i,currentIndex:s,fileId:n,fileName:r.name,size:r.size,buffer:c}}).then((()=>{a((e=>{console.log("第".concat(s+1,"次上传结束"));const r=e.find((e=>e.fileId===n));return r.status="active",r.completeSize=(s+1)*l,[...e]})),s++,o()}))};o()})),l.readAsArrayBuffer(r)}}),t.createElement("ul",null,t.createElement(i.A,{direction:"vertical",size:"middle",style:{display:"flex"}},n.map((e=>(console.log("进度条:",Number((e.completeSize/e.file.size*100).toFixed(2)),e.status),t.createElement("li",{key:e.fileId},t.createElement("span",null,e.file.name),t.createElement(d.A,{percent:Number((e.completeSize/e.file.size*100).toFixed(2)),status:e.status})))))))))),t.createElement("div",{className:f},t.createElement("h1",{style:{textAlign:"center"}},"Iframe"),t.createElement("iframe",{name:"server",ref:b,className:g,src:"/#/iframeServer",onLoad:function(){E(!0)}})))}const b=()=>t.createElement(a.Ay,null,t.createElement(a.wn,{title:"IframeIO"},t.createElement("p",null,"iframe的通信客户端和服务端")),t.createElement(a.Wc,{title:"代码演示",config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:t},cardProps:{description:{title:"基本使用",info:"基本使用"}},active:"client.jsx",config:[{key:"client.jsx",title:"client.jsx",codeText:"import { Button, Card, Input, Progress, Space } from 'antd';\r\nimport React, { useRef, useState } from 'react';\r\nimport { v4 } from 'uuid';\r\n\r\nimport { IframeIO } from '@baifendian/adhere';\r\n\r\nimport styles from './client.less';\r\n\r\n// type UpLoadItem = {\r\n//   file: any;\r\n//   completeSize: number;\r\n//   status: 'success' | 'exception' | 'normal' | 'active';\r\n//   fileId: string;\r\n// };\r\n\r\nconst { Fetch } = IframeIO;\r\n\r\nexport default function () {\r\n  const [value, setValue] = useState('');\r\n  const [uploadList, setUploadList] = useState([]);\r\n\r\n  const [iframeReady, setIframeReady] = useState(false);\r\n  const iframeRef = useRef();\r\n\r\n  const sourceOrigin = window.location.origin;\r\n  const targetOrigin = window.location.origin;\r\n\r\n  const fetch = useRef(new Fetch(window, sourceOrigin));\r\n\r\n  /**\r\n   * onSend\r\n   * @description 将输入框值设置到iframe里\r\n   */\r\n  function onSend() {\r\n    fetch.current.put(iframeRef?.current?.contentWindow, targetOrigin, '/display', {\r\n      data: value,\r\n    });\r\n  }\r\n\r\n  /**\r\n   * onGetDoc\r\n   */\r\n  function onGetDoc() {\r\n    fetch.current\r\n\r\n      .get(iframeRef?.current?.contentWindow, targetOrigin, '/getDoc', {\r\n        data: value,\r\n      })\r\n      .then((res) => {\r\n        alert(res.getBody());\r\n      });\r\n  }\r\n\r\n  /**\r\n   * onUploadChange\r\n   * @param e\r\n   */\r\n  function onUploadChange(e) {\r\n    const fileEl = e.target;\r\n\r\n    const file = fileEl.files[0];\r\n\r\n    const reader = new FileReader();\r\n\r\n    reader.addEventListener('load', (e1) => {\r\n      fetch.current.put(iframeRef?.current?.contentWindow, targetOrigin, '/uploadImg', {\r\n        data: e1.target.result,\r\n      });\r\n    });\r\n\r\n    reader.readAsDataURL(file);\r\n  }\r\n\r\n  /**\r\n   * onUploadProgressFile\r\n   * @param e\r\n   */\r\n  function onUploadProgressFile(e) {\r\n    const file = e.target.files[0];\r\n\r\n    const fileId = v4();\r\n    const uploadItem = {\r\n      file,\r\n      completeSize: 0,\r\n      status: 'active',\r\n      fileId,\r\n    };\r\n\r\n    setUploadList((list) => [...list, uploadItem]);\r\n\r\n    const reader = new FileReader();\r\n    reader.addEventListener('load', (e1) => {\r\n      const buffer = e1.target.result;\r\n\r\n      // 段的大小 1kb\r\n      const segmentSize = 1024;\r\n\r\n      // 段数\r\n      const segmentCount =\r\n        Math.floor(buffer.byteLength / segmentSize) +\r\n        (buffer.byteLength % segmentSize === 0 ? 0 : 1);\r\n\r\n      console.log('文件名称', file.name);\r\n      console.log('文件大小', file.size);\r\n      console.log('上传次数', segmentCount);\r\n\r\n      let index = 0;\r\n\r\n      // 传递数据就是多次调用接口进行文件上传\r\n      const upload = () => {\r\n        if (index >= segmentCount) {\r\n          setUploadList((list) => {\r\n            const item = list.find((t) => t.fileId === fileId);\r\n            item.status = 'success';\r\n            return [...list];\r\n          });\r\n\r\n          console.log(`文件${file.name}上传完成!`);\r\n          return;\r\n        }\r\n\r\n        const uploadBuffer = buffer.slice(index * segmentSize, (index + 1) * segmentSize);\r\n\r\n        console.log(`第${index + 1}次上传开始`);\r\n\r\n        fetch.current\r\n\r\n          .get(iframeRef?.current?.contentWindow, targetOrigin, '/progressUploadFile', {\r\n            data: {\r\n              segmentSize,\r\n              segmentCount,\r\n              currentIndex: index,\r\n              fileId,\r\n              fileName: file.name,\r\n              size: file.size,\r\n              buffer: uploadBuffer,\r\n            },\r\n          })\r\n          .then(() => {\r\n            // 更新进度\r\n            setUploadList((list) => {\r\n              console.log(`第${index + 1}次上传结束`);\r\n              const item = list.find((t) => t.fileId === fileId);\r\n              item.status = 'active';\r\n              item.completeSize = (index + 1) * segmentSize;\r\n              return [...list];\r\n            });\r\n\r\n            index++;\r\n\r\n            upload();\r\n          });\r\n      };\r\n\r\n      upload();\r\n    });\r\n    reader.readAsArrayBuffer(file);\r\n  }\r\n\r\n  function onIframeLoad() {\r\n    setIframeReady(true);\r\n  }\r\n\r\n  return (\r\n    <div className={styles.Wrap}>\r\n      {iframeReady && (\r\n        <div className={styles.Inner}>\r\n          <Space direction=\"vertical\" size=\"middle\" style={{ display: 'flex' }}>\r\n            <Card title=\"将输入框值设置到iframe里\">\r\n              <Input.Group compact>\r\n                <Input\r\n                  value={value}\r\n                  className={styles.InputWrapper}\r\n                  onChange={(e) => setValue(e.target.value)}\r\n                />\r\n                <Button type=\"primary\" onClick={onSend}>\r\n                  发送\r\n                </Button>\r\n              </Input.Group>\r\n            </Card>\r\n\r\n            <Card title=\"获取iframe文档内容\">\r\n              <Button type=\"primary\" onClick={onGetDoc}>\r\n                获取\r\n              </Button>\r\n            </Card>\r\n\r\n            <Card title=\"上传图片到iframe里面进行显示\">\r\n              <Input id=\"uploadImgFile\" type=\"file\" onChange={onUploadChange} />\r\n            </Card>\r\n\r\n            <Card title=\"带有进度的上传一个文件给iframe\">\r\n              <Input id=\"uploadProgressFile\" type=\"file\" onChange={onUploadProgressFile} />\r\n              <ul>\r\n                <Space direction=\"vertical\" size=\"middle\" style={{ display: 'flex' }}>\r\n                  {uploadList.map((t) => {\r\n                    console.log(\r\n                      '进度条:',\r\n                      Number(((t.completeSize / t.file.size) * 100).toFixed(2)),\r\n                      t.status,\r\n                    );\r\n\r\n                    return (\r\n                      <li key={t.fileId}>\r\n                        <span>{t.file.name}</span>\r\n                        <Progress\r\n                          percent={Number(((t.completeSize / t.file.size) * 100).toFixed(2))}\r\n                          status={t.status}\r\n                        />\r\n                      </li>\r\n                    );\r\n                  })}\r\n                </Space>\r\n              </ul>\r\n            </Card>\r\n          </Space>\r\n        </div>\r\n      )}\r\n\r\n      <div className={styles.IframeWrap}>\r\n        <h1 style={{ textAlign: 'center' }}>Iframe</h1>\r\n        <iframe\r\n          name=\"server\"\r\n          ref={iframeRef}\r\n          className={styles.Iframe}\r\n          src=\"/#/iframeServer\"\r\n          onLoad={onIframeLoad}\r\n        />\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n"},{key:"client.less",title:"client.less",codeText:".Wrap {\r\n  border: 1px solid #ccc;\r\n\r\n  > .Inner {\r\n    padding: 20px;\r\n  }\r\n\r\n  .IframeWrap {\r\n    padding: 20px;\r\n\r\n    .Iframe {\r\n      width: 100%;\r\n      height: 800px;\r\n      border: 1px solid #ccc;\r\n    }\r\n  }\r\n}\r\n\r\n.InputWrapper {\r\n  width: calc(100% - 200px);\r\n}\r\n"},{key:"server.jsx",title:"server.jsx",codeText:"import { Card, Progress, Space } from 'antd';\r\nimport FileSaver from 'file-saver';\r\nimport React, { useEffect, useRef, useState } from 'react';\r\n\r\nimport { IframeIO } from '@baifendian/adhere';\r\n\r\nimport styles from './server.less';\r\n\r\n// type FileUpLoad = {\r\n//   // 段大小\r\n//   segmentSize: number;\r\n//   // 段数\r\n//   segmentCount: number;\r\n//   // 当前段数\r\n//   currentIndex: number;\r\n//   fileId: string;\r\n//   fileName: string;\r\n//   size: number;\r\n//   status: 'success' | 'exception' | 'normal' | 'active';\r\n//   // 一次传过来的buffer\r\n//   buffer: ArrayBuffer;\r\n//   // 总的buffer\r\n//   fileBuffer: ArrayBuffer[];\r\n// };\r\n\r\nconst { Router, Server } = IframeIO;\r\n\r\nexport default function () {\r\n  const [displayValue, setDisplayValue] = useState('');\r\n  const [image, setImage] = useState('');\r\n  const [uploadList, setUploadList] = useState([]);\r\n\r\n  const ref = useRef();\r\n  const server = useRef();\r\n  const router = useRef();\r\n\r\n  const sourceOrigin = window.location.origin;\r\n  const whiteList = [sourceOrigin];\r\n\r\n  useEffect(() => {\r\n    router.current = new Router();\r\n\r\n    // @ts-ignore\r\n    router.current\r\n      /**\r\n       * /display\r\n       */\r\n      .controller('/display', (ctx, next) => {\r\n        const body = ctx.request.getBody();\r\n        setDisplayValue(body);\r\n        ctx.response.setStatusCode(200);\r\n        ctx.response.setStatusMessage('ok');\r\n        next();\r\n      })\r\n      /**\r\n       * /getDoc\r\n       */\r\n      .controller('/getDoc', (ctx, next) => {\r\n        ctx.response.setBody(ref.current.outerHTML);\r\n        ctx.response.setStatusCode(200);\r\n        ctx.response.setStatusMessage('ok');\r\n        next();\r\n      })\r\n      /**\r\n       * uploadImg\r\n       */\r\n      .controller('/uploadImg', (ctx, next) => {\r\n        const body = ctx.request.getBody();\r\n        setImage(body);\r\n        ctx.response.setStatusCode(200);\r\n        ctx.response.setStatusMessage('ok');\r\n        next();\r\n      })\r\n      /**\r\n       * progressUploadFile\r\n       */\r\n      .controller('/progressUploadFile', (ctx, next) => {\r\n        const fileUpload = ctx.request.getBody();\r\n\r\n        // 一个文件的开始\r\n        if (fileUpload.currentIndex === 0) {\r\n          setUploadList((list) => {\r\n            list.push({\r\n              ...fileUpload,\r\n              status: 'active',\r\n              fileBuffer: [fileUpload.buffer],\r\n            });\r\n            return [...list];\r\n          });\r\n        }\r\n        // 一个文件的结束\r\n        else if (fileUpload.currentIndex === fileUpload.segmentCount - 1) {\r\n          setUploadList((list) => {\r\n            const index = list.findIndex((t) => t.fileId === fileUpload.fileId);\r\n\r\n            list[index] = {\r\n              ...fileUpload,\r\n              status: 'success',\r\n              fileBuffer: [...list[index].fileBuffer, fileUpload.buffer],\r\n            };\r\n            return [...list];\r\n          });\r\n        }\r\n        // 中间过程\r\n        else {\r\n          setUploadList((list) => {\r\n            const index = list.findIndex((t) => t.fileId === fileUpload.fileId);\r\n\r\n            list[index] = {\r\n              ...fileUpload,\r\n              fileBuffer: [...list[index].fileBuffer, fileUpload.buffer],\r\n            };\r\n            return [...list];\r\n          });\r\n        }\r\n\r\n        ctx.response.setStatusCode(200);\r\n        ctx.response.setStatusMessage('ok');\r\n        next();\r\n      });\r\n\r\n    server.current = new Server(whiteList, window, sourceOrigin);\r\n\r\n    server.current.use(router.current.routers());\r\n\r\n    server.current.start();\r\n  }, []);\r\n\r\n  return (\r\n    // @ts-ignore\r\n    <div className={styles.Wrap} ref={ref}>\r\n      <Space direction=\"vertical\" size=\"middle\" style={{ display: 'flex' }}>\r\n        <Card title=\"将输入框值设置到iframe里\">\r\n          <div>{displayValue}</div>\r\n        </Card>\r\n\r\n        <Card title=\"上传图片到iframe里面进行显示\">\r\n          <div>{image && <img src={image} alt=\"\" />}</div>\r\n        </Card>\r\n\r\n        <Card title=\"带有进度的上传一个文件给iframe\">\r\n          <ul>\r\n            <Space direction=\"vertical\" size=\"middle\" style={{ display: 'flex' }}>\r\n              {uploadList.map((t) => {\r\n                const percent = Number(\r\n                  (\r\n                    (t.fileBuffer.reduce((pre, val) => pre + val.byteLength, 0) / t.size) *\r\n                    100\r\n                  ).toFixed(2),\r\n                );\r\n\r\n                return (\r\n                  <li\r\n                    className={t.status === 'success' ? styles.Hover : null}\r\n                    key={t.fileId}\r\n                    onClick={() => {\r\n                      if (t.status === 'success') {\r\n                        const blob = new Blob(t.fileBuffer, { type: 'application/octet-stream' });\r\n                        FileSaver.saveAs(blob, t.fileName);\r\n                      }\r\n                    }}\r\n                  >\r\n                    <span>{t.fileName}</span>\r\n                    <Progress percent={percent} status={t.status} />\r\n                  </li>\r\n                );\r\n              })}\r\n            </Space>\r\n          </ul>\r\n        </Card>\r\n      </Space>\r\n    </div>\r\n  );\r\n}\r\n"},{key:"server.less",title:"server.less",codeText:".Wrap {\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  .Hover {\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n}\r\n"}],type:"PlayGroundTab",renderChildren:()=>t.createElement(E,null)}]}),t.createElement(a.I7,{title:"Api",config:[{border:!0,title:"Fetch",data:[{name:"constructor",desc:"构造函数",modifier:"public",params:[{name:"source",desc:"客户端的window对象",type:"MessageEventSource",defaultVal:"",required:""},{name:"origin",desc:"客户端的origin",type:"string",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"get",desc:"get请求",modifier:"public",params:[{name:"targetWindow",desc:"服务端的window",type:"MessageEventSource",defaultVal:"",required:""},{name:"targetOrigin",desc:"服务端的origin",type:"string",defaultVal:"",required:""},{name:"pathname",desc:"pathname",type:"string",defaultVal:"",required:""},{name:"options",desc:"配置",type:"{\n                      data: any,\n                      headers: {\n                        [prop: string]: string;\n                      }\n                    }",defaultVal:"",required:""}],returnType:"Promise<Response>",returnDesc:""},{name:"put",desc:"put请求",modifier:"public",params:[{name:"targetWindow",desc:"服务端的window",type:"MessageEventSource",defaultVal:"",required:""},{name:"targetOrigin",desc:"服务端的origin",type:"string",defaultVal:"",required:""},{name:"pathname",desc:"pathname",type:"string",defaultVal:"",required:""},{name:"options",desc:"配置",type:"{\n                      data: any,\n                      headers: {\n                        [prop: string]: string;\n                      }\n                    }",defaultVal:"",required:""}],returnType:"Promise<Response>",returnDesc:""},{name:"delete",desc:"delete请求",modifier:"public",params:[{name:"targetWindow",desc:"服务端的window",type:"MessageEventSource",defaultVal:"",required:""},{name:"targetOrigin",desc:"服务端的origin",type:"string",defaultVal:"",required:""},{name:"pathname",desc:"pathname",type:"string",defaultVal:"",required:""},{name:"options",desc:"配置",type:"{\n                      data: any,\n                      headers: {\n                        [prop: string]: string;\n                      }\n                    }",defaultVal:"",required:""}],returnType:"Promise<Response>",returnDesc:""}]},{border:!0,title:"Server",data:[{name:"constructor",desc:"构造函数",modifier:"public",params:[{name:"whitelist",desc:"白名单",type:"string[]",defaultVal:"[]",required:""},{name:"source",desc:"服务端的window",type:"MessageEventSource",defaultVal:"",required:""},{name:"sourceOrigin",desc:"服务端的origin",type:"string",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"start",desc:"启动服务",modifier:"public",params:[],returnType:"Promise<void>",returnDesc:""},{name:"close",desc:"关闭服务",modifier:"public",params:[],returnType:"Promise<void>",returnDesc:""},{name:"use",desc:"添加中间件",modifier:"public",params:[{name:"middleWare",desc:"中间件",type:"MiddleWare | MiddleWare[]",defaultVal:"",required:""}],returnType:"self",returnDesc:""}]},{border:!0,title:"Router(路由)",data:[{name:"controller",desc:"添加控制器",modifier:"public",params:[{name:"path",desc:"路由地址",type:"string",defaultVal:"",required:""},{name:"middleWare",desc:"处理请求的中间件",type:"MiddleWare",defaultVal:"",required:""}],returnType:"self",returnDesc:""},{name:"routers",desc:"获取所有的中间件",modifier:"public",params:[],returnType:"MiddleWare[]",returnDesc:""}]},{border:!0,title:"Compose(中间件组合)",data:[{name:"Compose",desc:"构造函数",modifier:"public",params:[{name:"middleWares",desc:"中间件集合",type:"MiddleWare[]",defaultVal:"",required:""}],returnType:"(ctx, next?: () => Promise<void> | void) => Promise<void></void>",returnDesc:""}]},{border:!0,title:"Request",data:[{name:"constructor",desc:"构造函数",modifier:"public",params:[{name:"options",desc:"",type:"\n                      {\n                        pathname: string;\n                        headers?: {\n                          [prop: string]: string;\n                        };\n                        statusCode?: stateCode;\n                        stateMessage?: string;\n                        body?: any;\n                      }\n                    ",defaultVal:"",required:""}],returnType:"",returnDesc:""}]},{border:!0,title:"Response",data:[{name:"constructor",desc:"构造函数",modifier:"public",params:[{name:"options",desc:"",type:"\n                      {\n                        requestId: string;\n                        headers: {\n                          [prop: string]: string;\n                        };\n                        statusCode: stateCode;\n                        stateMessage: string;\n                        body: any;\n                      }\n                    ",defaultVal:"",required:""}],returnType:"",returnDesc:""}]}]}))},73376:(e,r,n)=>{n.d(r,{A:()=>p});var t=n(86662),a=n(86056),l=n(26322),i=n(90264),s=n(38948);const o="fdFKYQbTadYRAFXyIsyC",c="TGQfKkX166qX5wG5Oi6O",d="xoMDGjw3kWAGwRmDVR2l",u="juDjVuIAwAS6vlI_lwTq",m="s2U_wfx5rmRlV8iKcHg5",p=()=>l.createElement("ul",{className:o},l.createElement("li",{className:c},l.createElement("dl",null,l.createElement("dt",null,"相关资源"),l.createElement("dd",null,l.createElement("ul",{className:d},l.createElement("li",{className:u},"自主研发",l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"http://49.232.163.126:8084/",target:"_blank",rel:"noopener noreferrer"},"adherev")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-BUILD",target:"_blank",rel:"noopener noreferrer"},"CTSJ-BUILD")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-BUILDV",target:"_blank",rel:"noopener noreferrer"},"CTSJ-BUILDV")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-STATE",target:"_blank",rel:"noopener noreferrer"},"CTSJ-STATE")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-ROUTER",target:"_blank",rel:"noopener noreferrer"},"CTSJ-ROUTER")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-VuexGenerator",target:"_blank",rel:"noopener noreferrer"},"CTSJ-VuexGenerator")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-React-SSR",target:"_blank",rel:"noopener noreferrer"},"CTSJ-React-SSR")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-DOC",target:"_blank",rel:"noopener noreferrer"},"CTSJ-DOC")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/CTSJ-DvaGenerator",target:"_blank",rel:"noopener noreferrer"},"CTSJ-DvaGenerator")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/playerljc/WebViewJavascriptBridge",target:"_blank",rel:"noopener noreferrer"},"WebViewJavascriptBridge")))),l.createElement("li",{className:u},"模板工程",l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/adhere",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)")),l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/polyfill",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)(支持IE)")),l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/adhere-webpack5-js-ssr",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)(SSR)")),l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/AntPro",target:"_blank",rel:"noopener noreferrer"},"AntPro(G1)")),l.createElement("li",null,l.createElement("a",{href:"http://git.baifendian.com/dongxu.guo/ReactWeb",target:"_blank",rel:"noopener noreferrer"},"ReactWeb(G3)")),l.createElement("li",null,l.createElement("a",{href:"http://git.baifendian.com/bo.li/Percent_Vue_Admin.git",target:"_blank",rel:"noopener noreferrer"},"PercentVue(G3)")),l.createElement("li",null,l.createElement("a",{href:"https://gitee.com/playerljc/VuePro",target:"_blank",rel:"noopener noreferrer"},"VuePro(G1)")))))))),l.createElement("li",{className:c},l.createElement("dl",null,l.createElement("dt",null,"帮助"),l.createElement("dd",null,l.createElement("ul",{className:d},l.createElement("li",{className:u},l.createElement("a",{href:s.Jk.O,target:"_blank",rel:"noopener noreferrer"},l.createElement(a.A,null),l.createElement("span",{className:m},"Gitlib"))),l.createElement("li",{className:u},l.createElement(i.N_,{to:"/adhere/changelog"},l.createElement(t.A,null),l.createElement("span",{className:m},"更新日志"))))))))},96465:(e,r,n)=>{n.d(r,{Wc:()=>m,I7:()=>f,e6:()=>p,wn:()=>u,Ay:()=>g});var t=n(71860),a=n(24370),l=n(26322),i=n(73376);const s="xpgSrI_YtLJ2DLwvO1Cq",o="KHCbMGLwqpj8TVQmsF1m",{PlayGroundPageContext:c,PlayGroundPage:d}=a.A,{Section:u,CodeBoxSection:m,PropsSection:p,FunctionPropsSection:f}=d;const g=function(e){let{children:r,onScrollBottom:n,distance:a=50,...u}=e;const[m,p]=(0,l.useState)(),f=(0,l.useRef)();return(0,l.useEffect)((()=>{p(f.current)}),[]),l.createElement(c.Provider,{value:{scrollEl:null!=m?m:document.body}},l.createElement(d,(0,t.A)({ref:f,className:s,anchorNavigationAutoClassName:o,anchorNavigationFixedClassName:o},u),r,l.createElement(i.A,null)))}},38948:e=>{e.exports=JSON.parse('{"rE":"2.11.0","Jk":{"O":"https://github.com/playerljc/adhere"}}')}}]);