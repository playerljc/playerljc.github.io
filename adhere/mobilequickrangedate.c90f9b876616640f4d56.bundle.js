"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[5721],{59408:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(62076),r=a(43760),l=a(26322),o=a(86675),s=a(19994);const c=()=>{const e=(0,o.S)("quickrangedate/examples/p1.jsx"),t=(0,o.S)("quickrangedate/examples/p2.jsx"),{media:a}=(0,l.useContext)(r.A.Context);return l.createElement(s.Ay,null,l.createElement(s.wn,{title:"MobileQuickRangeDate"},l.createElement("p",null,"快速时间选取")),l.createElement(s.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",cardProps:{description:{title:"基本使用",info:"基本使用"}},active:"p1.jsx",displayBodyStyle:{width:450},config:[{key:"p1.jsx",title:"p1.jsx",style:{maxHeight:n.A.pxToRem(500,a.designWidth,a)},theme:"eclipse",codeText:e},{key:"p2.jsx",title:"p2.jsx",style:{maxHeight:n.A.pxToRem(500,a.designWidth,a)},theme:"eclipse",codeText:t}],type:"PlayGroundTabMobile",url:"".concat(Constent({mode:"production",environment:"pe",publicPath:"adhere",router:"hash",media:void 0}).mobileOrigin,"/#/adhere/component/ui/quickrangedate")}]}),l.createElement(s.e6,{title:"Props",config:[{border:!0,title:"QuickRangeDateProps",data:[{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"",type:"CSSProperties",defaultVal:""},{params:"innerClassName",desc:"",type:"string",defaultVal:""},{params:"innerStyle",desc:"",type:"CSSProperties",defaultVal:""},{params:"calendarModalProps",desc:"",type:"CalendarModalProps",defaultVal:""},{params:"checkboxCheckListProps",desc:"",type:"CheckboxCheckListProps",defaultVal:""},{params:"modalTriggerPromptProps",desc:"",type:"ModalTriggerPromptProps<string>",defaultVal:""},{params:"children",desc:"",type:"\n                  (params: {\n                    originDefaultElement: ReactNode;\n                    defaultElement: ReactNode;\n                    value?: DateValue;\n                    onChange?: QuickRangeDateChange;\n                  }) => ReactNode\n                ",defaultVal:""}]}]}))}},86675:(e,t,a)=>{a.d(t,{S:()=>l});var n=a(26322),r=a(46855);function l(e){const[t,a]=(0,n.useState)("");return(0,n.useEffect)((()=>{r.A.getMobileCodeText(e).then(a)}),[e]),t}},19994:(e,t,a)=>{a.d(t,{Ay:()=>u,I7:()=>p,Wc:()=>i,e6:()=>d,wn:()=>c});var n=a(71860),r=a(24370),l=a(26322);const{PlayGroundPageContext:o,PlayGroundPage:s}=r.A,{Section:c,CodeBoxSection:i,PropsSection:d,FunctionPropsSection:p}=s;const u=function(e){let{children:t,onScrollBottom:a,distance:r=50,...c}=e;const[i,d]=(0,l.useState)(),p=(0,l.useRef)(),u=(0,l.useRef)(!1);return(0,l.useEffect)((()=>{function e(){const e=t.scrollHeight-t.offsetHeight,n=t.scrollTop;if(a&&Math.abs(n-e)<=r){if(u.current)return;u.current=!0,null==a||a().then((()=>{u.current=!1}))}}const t=p.current.parentElement.parentElement;return t.addEventListener("scroll",e),d(t),()=>{t.removeEventListener("scroll",e)}}),[]),l.createElement(o.Provider,{value:{scrollEl:i}},l.createElement(s,(0,n.A)({ref:p},c),t))}}}]);