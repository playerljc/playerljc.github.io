"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[347],{46342:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(62076),o=n(43760),i=n(26322),l=n(86675),a=n(19994);const c=()=>{const e=(0,l.S)("importantconfirm/index.jsx"),t=(0,l.S)("importantconfirm/examples/p1.jsx"),n=(0,l.S)("importantconfirm/examples/p2.jsx"),{media:c}=(0,i.useContext)(o.A.Context);return i.createElement(a.Ay,null,i.createElement(a.wn,{title:"MobileImportantConfirm"},i.createElement("p",null,"重要操作确认提示")),i.createElement(a.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",cardProps:{description:{title:"基本使用",info:"基本使用"}},active:"index.jsx",displayBodyStyle:{width:450},config:[{key:"index.jsx",title:"index.jsx",style:{maxHeight:r.A.pxToRem(500,c.designWidth,c)},theme:"eclipse",codeText:e},{key:"p1.jsx",title:"p1.jsx",style:{maxHeight:r.A.pxToRem(500,c.designWidth,c)},theme:"eclipse",codeText:t},{key:"p2.jsx",title:"p2.jsx",style:{maxHeight:r.A.pxToRem(500,c.designWidth,c)},theme:"eclipse",codeText:n}],type:"PlayGroundTabMobile",url:"".concat(Constent({mode:"production",environment:"pe",publicPath:"adhere",router:"hash",media:void 0}).mobileOrigin,"/#/adhere/component/ui/importantconfirm")}]}),i.createElement(a.e6,{title:"Props",config:[{border:!0,title:"属性",data:[{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"children",desc:"children",type:"React.ReactNode",defaultVal:""}]}]}),i.createElement(a.I7,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"open",desc:"打开确认对话框",modifier:"global",params:[{name:"props",desc:"参数",type:"DialogConfirmProps",defaultVal:"",required:"true"}],returnType:"boolean",returnDesc:""}]}]}))}},86675:(e,t,n)=>{n.d(t,{S:()=>i});var r=n(26322),o=n(46855);function i(e){const[t,n]=(0,r.useState)("");return(0,r.useEffect)((()=>{o.A.getMobileCodeText(e).then(n)}),[e]),t}},19994:(e,t,n)=>{n.d(t,{Ay:()=>m,I7:()=>p,Wc:()=>s,e6:()=>d,wn:()=>c});var r=n(71860),o=n(24370),i=n(26322);const{PlayGroundPageContext:l,PlayGroundPage:a}=o.A,{Section:c,CodeBoxSection:s,PropsSection:d,FunctionPropsSection:p}=a;const m=function(e){let{children:t,onScrollBottom:n,distance:o=50,...c}=e;const[s,d]=(0,i.useState)(),p=(0,i.useRef)(),m=(0,i.useRef)(!1);return(0,i.useEffect)((()=>{function e(){const e=t.scrollHeight-t.offsetHeight,r=t.scrollTop;if(n&&Math.abs(r-e)<=o){if(m.current)return;m.current=!0,null==n||n().then((()=>{m.current=!1}))}}const t=p.current.parentElement.parentElement;return t.addEventListener("scroll",e),d(t),()=>{t.removeEventListener("scroll",e)}}),[]),i.createElement(l.Provider,{value:{scrollEl:s}},i.createElement(a,(0,r.A)({ref:p},c),t))}}}]);