"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[5077],{10819:(e,l,n)=>{n.r(l),n.d(l,{default:()=>q});var t=n(26322),a=n(65011),o=n(71860),r=n(42438),c=n(2438),s=n(39407);const u=n.p+"09c5eaa763a5abea63d3.png",d="iyprOGdmk65KXBfqjuAa",p="MEyLC2vbyAyeEk5fZG1C",i="SEMnbFY6iAkURjZY9UyA",m="K7mYkBNnnvNgdju07yGj",b="Fa6i3AwWnpIiF_0Ld76G",f="gVtc34U1Nn02zmF1mSLA",I="DxWVeZhPKe1DF88Gig8x",v=e=>{let{center:l=[820,420],size:n=68,color:a="linear-gradient(90deg, #D84930 0%, #CC412B 100%)",className:o="",style:r={},detail:c=null,onClick:s=null,onCompanyClick:u=null}=e;const v=2*n,y=l[0]-n,h=l[1]-n;return t.createElement("div",{className:"".concat(d," ").concat(o),style:{...r,width:v,height:v,left:y,top:h,background:a}},t.createElement("div",{className:p,style:{width:.8*v,height:.8*v,cursor:s?"pointer":"auto",pointerEvents:s?"auto":"none"},onClick:()=>{s&&s(c)}}),c?t.createElement("div",{className:i},t.createElement("p",{className:m},Number(null==c?void 0:c.totalScore).toFixed(1)||"--","分"),t.createElement("p",{className:b},(null==c?void 0:c.name)||"--"),t.createElement("p",{className:f},t.createElement("span",null,(null==c?void 0:c.age)||"--","岁"),t.createElement("span",null,"从业",(null==c?void 0:c.workingYear)||"--","年")),t.createElement("p",{className:I,style:{cursor:u?"pointer":"auto",pointerEvents:u?"auto":"none"},onClick:e=>{e.stopPropagation(),u&&u(c)},title:c.envName},c.envName||"--")):null)},y={carouel:"NtknPfugpQrCQeFrNv7E",title:"vBcMNRmYEZ9QfClBn4Ex",carouelContainer:"wLf6M5chFIEn7NMd5ChQ",carouelItem:"WwY3IQLwljYkKZG8SlW5",arrow:"pDwOJrMmt9IoZnp93hpf"},h=e=>{let{defaultIndex:l=0,data:n=[],onChange:a=(()=>{})}=e;const[o,r]=(0,t.useState)(l),c=n.map(((e,l)=>{const n=o===l;return t.createElement("div",{key:e.key,className:"".concat(y.carouelItem," ").concat(n?y.active:""),onClick:()=>{((e,l)=>{r(l),a(e,l)})(e,l)}},t.createElement(v,{detail:e.detail,center:[70,70],size:70,color:n?"#D45130":"#5D81C7"}))}));return t.createElement("div",{className:y.carouel},t.createElement("p",{className:y.title}),t.createElement("div",{className:y.carouelContainer},c,(()=>{const e=180*o+70;return t.createElement("div",{className:y.arrow,style:{top:e,transition:"top 0.6s ease-out"}},t.createElement("img",{src:u,alt:""}))})()))};var j=n(34419),g=n.n(j);const E=n.p+"cdbe031e0d7a484b8967.png",x=n.p+"831241ad780e71d4fea7.png",w=n.p+"8c85d1d44c60f06d024b.png",T=n.p+"0cf7bf4c993b5fe898cb.png",N=function(e,l,n,a){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return t.createElement("span",{style:{width:l,height:l,backgroundColor:a,borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",...o}},t.createElement("img",{src:e,alt:"",style:{width:n,height:n}}))},C="#062C79",k="#7EAAEC",S="#A5C7F3",A="#D2E5FA",P=[{name:"合作保荐人",color:C},{name:"律师事务所",color:k},{name:"会计师事务所",color:S},{name:"资评公司",color:A}],M={1:"#F08755",2:"#BF190E",3:"#69BCA6"},R={1:"进行中",2:"成功",3:"失败"},V={1:N(x,46,24,M[1]),2:N(w,60,32,M[2]),3:N(E,46,24,M[3])},W=N(T,18,18,"transparent"),F={1:{details:{startRotate:-90},projects:{startRotate:-180,lineWidth:0,textDirection:"row",textMaxWidths:[[72,69],[84,70],[96,84]]},collaborator:{startRotate:-180,lineWidth:0}},2:{details:{startRotate:-45},projects:{startRotate:-45,textDirection:"row",textMaxWidths:[[72,69],[84,70],[96,84]]},collaborator:{startRotate:-45}},3:{details:{startRotate:-30},projects:{startRotate:-30,textMaxWidths:[[96,84],[120,126],[144,140]]},collaborator:{startRotate:-30}},4:{projects:{textMaxWidths:[[96,84],[120,126],[144,140]]}},5:{details:{startRotate:-18},projects:{startRotate:-18,textMaxWidths:[[96,84],[120,126],[144,140]]},collaborator:{startRotate:-18}},6:{projects:{textMaxWidths:[[96,84],[120,126],[144,140]]}},7:{details:{startRotate:-11},projects:{startRotate:-11,textMaxWidths:[[96,84],[120,126],[144,140]]},collaborator:{startRotate:-11}},8:{projects:{textMaxWidths:[[96,84],[120,126],[144,140]]}},9:{details:{startRotate:-10},projects:{startRotate:-10,textMaxWidths:[[84,69],[120,112],[144,140]]},collaborator:{startRotate:-10}},10:{projects:{textMaxWidths:[[72,69],[108,98],[132,112]]}},11:{projects:{textMaxWidths:[[72,56],[96,84],[120,112]]}},12:{projects:{textMaxWidths:[[60,56],[84,70],[96,84]]}}},Y={container:"AtngMzaMiMGHVwc9fyhO",content:"NwElU5vy8J96VXMmFmwS",father:"fywbreBg1I_z8FqpW6KC",child:"Smar_MqVwSGH0CqxvGa2",texts:"F3ymcn1GeeoANSmxdKbB",column:"kDLLdjmYBoNGCO_rcwx7",row:"IMCicsfdKusHByg9Rrpz",top:"CRBgehnsXFp2vt6M7SOU",line:"dlY1OO2AgiKO3wjgpBGQ",bottom:"rMhUegvfdjLjXCLDYhL7",detail:"FUF9JQqy9a0FVJ9Nyhjj",detailContainer:"zPHia8hZSvdsz_vjkDLi",detailContent:"U2_n43A_3BLUXHACnyY8",name:"SdH9W_RRoaaxClLySRRf",time:"k2xEA_1Iy419Na1jTNRq"},z=e=>{var l;let{center:n=[820,420],size:a=400,startRotate:o=0,rotate:r=0,angle:c=30,color:s="#f00",borderWidth:u=0,borderColor:d="",textHeight:p=37,textMaxWidth:i=[72,56],className:m="",style:b={},texts:f=[],textDirection:I="column",textColors:v=["rgba(61, 65, 67, 0.7)","#3D4143"],lineColor:y="#F7F6F6",lineWidth:h=6,detail:j=null,showAnimate:E=!1,onClick:x=null,onClickCompany:w=null,onClickPerson:T=null}=e;const[N,C]=(0,t.useState)(0),[k,S]=(0,t.useState)(0),A=2*a,P=n[0]-a,F=n[1]-a;let z;u>0&&""!==d&&(z="".concat(u,"px solid ").concat(d));return(0,t.useEffect)((()=>{setTimeout((()=>{C(r),S(1)}))}),[r]),t.createElement("div",{className:"".concat(Y.container," ").concat(m),style:{...b,width:A,height:A,transition:E?"transform 1s ease-out":"none",transform:"rotate(".concat(o+N+c/2,"deg) translateZ(0)"),left:P,top:F}},(()=>{const e=()=>t.createElement("div",{className:Y.line,style:{backgroundColor:y,width:h}});return c<=180?t.createElement("div",{className:Y.content,style:{transform:"rotate(".concat(-c/2,"deg) translateZ(0)")}},t.createElement("div",{className:Y.father,style:{clip:"rect(0, ".concat(A,"px, ").concat(A,"px, ").concat(a,"px)")}},t.createElement("div",{className:Y.child,style:{backgroundColor:s,border:z,transform:"rotate(".concat(c,"deg)"),clip:"rect(0, ".concat(a,"px, ").concat(A,"px, 0)"),cursor:x?"pointer":"auto",pointerEvents:x?"auto":"none"},onClick:e=>{e.stopPropagation(),x&&x()}})),e()):t.createElement(t.Fragment,null,t.createElement("div",{className:Y.content,style:{transform:"rotate(0deg) translateZ(0)"}},t.createElement("div",{className:Y.father,style:{clip:"rect(0, ".concat(A,"px, ").concat(A,"px, ").concat(a-1,"px)")}},t.createElement("div",{className:Y.child,style:{backgroundColor:s,border:z,transform:"rotate(".concat(c/2,"deg)"),clip:"rect(0, ".concat(a+1,"px, ").concat(A,"px, 0)"),cursor:x?"pointer":"auto",pointerEvents:x?"auto":"none"},onClick:e=>{e.stopPropagation(),x&&x()}}))),t.createElement("div",{className:Y.content,style:{transform:"rotate(".concat(-c/2,"deg) translateZ(0)")}},t.createElement("div",{className:Y.father,style:{clip:"rect(0, ".concat(A,"px, ").concat(A,"px, ").concat(a-1,"px)")}},t.createElement("div",{className:Y.child,style:{backgroundColor:s,border:z,transform:"rotate(".concat(c/2,"deg)"),clip:"rect(0, ".concat(a+1,"px, ").concat(A,"px, 0)"),cursor:x?"pointer":"auto",pointerEvents:x?"auto":"none"},onClick:e=>{e.stopPropagation(),x&&x()}})),e()))})(),(()=>{if(j){const e=N>=178.5,l=e?180-o-N-c/2:-N-o-c/2,n=()=>V[j.status],a=e=>t.createElement(t.Fragment,null,e&&t.createElement("span",{className:Y.detailText},1===j.status&&"拟",1===j.status?j.yme||"--":j.sme||"--",1===j.status?j.yme&&"亿":j.sme&&"亿"));return t.createElement("div",{className:Y.detail,style:{transform:"translate(".concat(100,"px, -",40,"px) rotate(",l,"deg)"),transformOrigin:"-".concat(100,"px ",40,"px"),transition:"opacity 1s ease-out",opacity:k}},t.createElement("div",{className:Y.detailContainer,style:{transform:e?"rotate(180deg)":"",textAlign:e?"right":"",justifyContent:e?"right":""}},!e&&n(),t.createElement("div",{className:Y.detailContent,style:{margin:e?"0 ".concat(10,"px 0 0"):"0 0 0 ".concat(10,"px")}},t.createElement("p",{className:Y.name},j.projName||"--"),t.createElement("p",null,a(e),t.createElement("span",{className:Y.statusText,style:{color:M[j.status],margin:e?"0 0 0 ".concat(20,"px"):"0 ".concat(20,"px 0 0")}},R[j.status]),a(!e)),t.createElement("p",{className:Y.time,style:{justifyContent:e?"right":""}},!e&&W,t.createElement("span",{style:{margin:e?"0 ".concat(8,"px 0 0"):"0 0 0 ".concat(8,"px")}},1===j.status?j.startTime?g()(j.startTime).format("YYYY-MM-DD"):"--":j.endTime?g()(j.endTime).format("YYYY-MM-DD"):"--",1===j.status&&"(申报)"),e&&W)),e&&n()))}return null})(),t.createElement("span",{className:"".concat(Y.texts," ").concat(Y[I]),style:{top:p/2+2,transition:E?"opacity 1s ease-out":"none",opacity:k,marginLeft:h/2}},t.createElement("span",{className:Y.top,style:{maxWidth:i[0],color:v[0],cursor:w?"pointer":"auto",pointerEvents:w?"auto":"none"}},f.map(((e,l)=>t.createElement(t.Fragment,null,l>0&&t.createElement("span",null,"|"),t.createElement("span",{key:null==e?void 0:e.envId,onClick:l=>{l.stopPropagation(),w&&w(null==e?void 0:e.envId)},title:e.name},e.name||"--"))))),(null===(l=f[0])||void 0===l?void 0:l.person)&&t.createElement("span",{className:Y.bottom,style:{maxWidth:i[1],color:v[1],cursor:T?"pointer":"auto",pointerEvents:T?"auto":"none"},onClick:e=>{e.stopPropagation(),T&&T()}},f.map(((e,l)=>t.createElement(t.Fragment,null,l>0&&t.createElement("span",null,"|"),t.createElement("span",{key:null==e?void 0:e.pplId,title:e.person,onClick:l=>{l.stopPropagation(),T&&T(null==e?void 0:e.pplId)}},e.person||"--")))))))},D=e=>{let{size:l=300,bottomEmptySize:n=110,data:a={},textMaxWidths:r=[],onClick:c=null,...s}=e;const u=(l-n)/3,{lawyer:d,accountant:p,certifiedPublicValuer:i}=a;return t.createElement(t.Fragment,null,t.createElement(z,(0,o.A)({size:l,color:A,textMaxWidth:r[2],textHeight:Math.ceil(u),onClickPerson:e=>{e&&window.open("/person/".concat(e,"?occType=4"))},onClickCompany:e=>{e&&window.open("/company/".concat(e,"?entType=4"))},texts:i},s)),t.createElement(z,(0,o.A)({size:Math.floor(l-u),color:S,textMaxWidth:r[1],textHeight:Math.ceil(u),onClickPerson:e=>{e&&window.open("/person/".concat(e,"?occType=3"))},onClickCompany:e=>{e&&window.open("/company/".concat(e,"?entType=3"))},texts:p},s)),t.createElement(z,(0,o.A)({size:Math.floor(l-2*u),color:k,textMaxWidth:r[0],textHeight:Math.ceil(u),onClickPerson:e=>{e&&window.open("/person/".concat(e,"?occType=2"))},onClickCompany:e=>{e&&window.open("/company/".concat(e,"?entType=2"))},texts:d},s)))},L=[{pplId:"2becf096-ad80-4151-9a14-d51b58cc59f5",envId:"0a3700bf-55b4-4202-82cb-57b13460873f",age:null,name:"谢良宁",totalScore:"9.30",workingYear:"",envName:"国泰君安证券股份有限公司",collaborator:[{name:"刘秋芬",id:"86b620c0-c828-498c-98b1-223ad3151da2"},{name:"王平",id:"6e06b9e4-313d-4fe3-92cf-dc59688b7a3a"},{name:"曾大成",id:"164a879e-5bf6-4038-a389-537449beb008"},{name:"张奇英",id:"fc4b96fb-d7c7-45ff-ac0e-7db87e9a6f77"},{name:null,id:null},{name:"彭凯",id:"e7e311e6-a775-4d92-ae59-b33225c09d31"},{name:"彭晗",id:"ad967919-95d4-4e54-bef5-55ceffd3d277"},{name:"潘云松",id:"387e3183-48b5-4537-8654-80604fee111c"}],projects:[{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"6e06b9e4-313d-4fe3-92cf-dc59688b7a3a",envId:"0a3700bf-55b4-4202-82cb-57b13460873f",projType:2,status:2,sector:null,startTime:14376672e5,endTime:14379264e5,pps:null,yme:50,sme:48.73,bjf:"12500",projName:"国海证券增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"ad967919-95d4-4e54-bef5-55ceffd3d277",envId:"0a3700bf-55b4-4202-82cb-57b13460873f",projType:2,status:2,sector:null,startTime:14265216e5,endTime:1426608e6,pps:null,yme:12.72,sme:12.44,bjf:"2744.67",projName:"中金岭南增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"164a879e-5bf6-4038-a389-537449beb008",envId:"0a3700bf-55b4-4202-82cb-57b13460873f",projType:2,status:2,sector:null,startTime:13649184e5,endTime:13662144e5,pps:null,yme:8.29,sme:8.07,bjf:"2157.99",projName:"中航光电增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"164a879e-5bf6-4038-a389-537449beb008",envId:"0a3700bf-55b4-4202-82cb-57b13460873f",projType:2,status:2,sector:null,startTime:13649184e5,endTime:13662144e5,pps:null,yme:8.29,sme:8.07,bjf:"2157.99",projName:"中航光电增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"387e3183-48b5-4537-8654-80604fee111c",envId:"0a3700bf-55b4-4202-82cb-57b13460873f",projType:2,status:2,sector:null,startTime:1309104e6,endTime:13097088e5,pps:null,yme:null,sme:null,bjf:null,projName:"深粮控股增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"387e3183-48b5-4537-8654-80604fee111c",envId:"0a3700bf-55b4-4202-82cb-57b13460873f",projType:2,status:2,sector:null,startTime:1309104e6,endTime:13097088e5,pps:null,yme:null,sme:null,bjf:null,projName:"深粮控股增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:null,envId:"0a3700bf-55b4-4202-82cb-57b13460873f",projType:1,status:2,sector:null,startTime:12716064e5,endTime:12976992e5,pps:null,yme:1.81,sme:4.95,bjf:"2680",projName:"四方达IPO",publicSector:null,ambo:null,share:null,sort:0},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"e7e311e6-a775-4d92-ae59-b33225c09d31",envId:"0a3700bf-55b4-4202-82cb-57b13460873f",projType:2,status:2,sector:null,startTime:11689632e5,endTime:1169568e6,pps:null,yme:5.07,sme:4.98,bjf:"880",projName:"天健集团增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"fc4b96fb-d7c7-45ff-ac0e-7db87e9a6f77",envId:"0a3700bf-55b4-4202-82cb-57b13460873f",projType:2,status:2,sector:null,startTime:11636064e5,endTime:11640384e5,pps:null,yme:null,sme:null,bjf:null,projName:"中金岭南增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"86b620c0-c828-498c-98b1-223ad3151da2",envId:"0a3700bf-55b4-4202-82cb-57b13460873f",projType:2,status:2,sector:null,startTime:null,endTime:15797088e5,pps:null,yme:null,sme:null,bjf:null,projName:"国海证券增发",publicSector:null,ambo:null,share:null,sort:1}]},{pplId:"8ac42b8a-8fff-40d3-b04c-0f6052e22b76",envId:"6ba96c68-556f-42c7-9bd2-a03d5881b96d",age:null,name:"罗翔",totalScore:"8.90",workingYear:"",envName:"中国国际金融股份有限公司",collaborator:[{name:"李扬",id:"6a68b889-23d5-4ac4-a0a6-0dfc3dc6a4a4"},{name:"李吉喆",id:"303913a9-6620-40f8-8d87-7244e6aaff8c"}],projects:[{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"6a68b889-23d5-4ac4-a0a6-0dfc3dc6a4a4",envId:"6ba96c68-556f-42c7-9bd2-a03d5881b96d",projType:3,status:2,sector:null,startTime:null,endTime:16081344e5,pps:null,yme:7.8,sme:7.71,bjf:"700",projName:"南京健友生化制药股份有限公司可转债",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"6a68b889-23d5-4ac4-a0a6-0dfc3dc6a4a4",envId:"6ba96c68-556f-42c7-9bd2-a03d5881b96d",projType:3,status:2,sector:null,startTime:null,endTime:15875712e5,pps:null,yme:5.03,sme:4.95,bjf:"628.99",projName:"南京健友生化制药股份有限公司可转债",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:"北京德恒律师事务所",pplId:"17462e81-f0e8-416d-815e-f895ce5b8d34",envId:"bdf185fa-0a21-4b4d-ae56-bdf937afc46d",person:"李晓新"},{name:"北京德恒律师事务所",pplId:"e0419f6b-71cb-4154-be16-8dcc99ae4970",envId:"bdf185fa-0a21-4b4d-ae56-bdf937afc46d",person:"王浚哲"}],accountant:[{name:"天职国际会计师事务所（特殊普通合伙）",pplId:"0e7ab5fd-3a26-4a1b-90f6-01e7df843b74",envId:"fadfdc0a-c529-46af-8a2a-30043c6448d0",person:"文冬梅"},{name:"天职国际会计师事务所（特殊普通合伙）",pplId:"d3430c26-f348-4981-a9b7-7d11c84bc2b9",envId:"fadfdc0a-c529-46af-8a2a-30043c6448d0",person:"张居忠"}],certifiedPublicValuer:[{name:"沃克森（北京）国际资产评估有限公司",pplId:"6ac60f58-6c54-4e50-ba0a-17fbe8393718",envId:"d199fb27-79a5-46ad-9351-e10aee58d5fc",person:"张基昌"}],collaboratorId:"303913a9-6620-40f8-8d87-7244e6aaff8c",envId:"6ba96c68-556f-42c7-9bd2-a03d5881b96d",projType:1,status:2,sector:null,startTime:null,endTime:null,pps:null,yme:7.05,sme:null,bjf:"5643.45",projName:"壹石通IPO",publicSector:null,ambo:null,share:null,sort:0}]},{pplId:"a1d056fe-19f8-4208-a885-cdac33cf686c",envId:"7345adf8-bd4b-416e-9622-819afbc32365",age:null,name:"唐亮",totalScore:null,workingYear:"",envName:"中信证券股份有限公司",collaborator:[{name:"林郁松",id:"f3717152-9796-48c4-a4e2-91c0b81c4d76"},{name:"韩昆仑",id:"75f79ce1-4385-4446-a108-e4dddd1bbbcd"},{name:"赵启",id:"3542c8d0-7d25-49c0-a1d1-47cfcd083b7f"},{name:null,id:null},{name:"安勇",id:"e1161a73-4839-4c7c-b86e-18dc9f76c5a0"},{name:"计玲玲",id:"55e86edf-76de-4803-9868-7ac2eea4a9f3"}],projects:[{lawyer:[{name:"北京市嘉源律师事务所",pplId:"8b6baf8e-8fad-473d-8970-ecacc0e49836",envId:"60702601-bd41-4b1d-a2a4-1e35ba9e0f33",person:"易建胜"}],accountant:[{name:"致同会计师事务所(特殊普通合伙)",pplId:"8bc56bf4-876d-446b-bd56-acd09ea3df76",envId:"f4e46f97-a75a-4254-9d7c-0e1071e67951",person:"李力"}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:null,envId:"7345adf8-bd4b-416e-9622-819afbc32365",projType:1,status:2,sector:null,startTime:15991488e5,endTime:null,pps:null,yme:12.5,sme:null,bjf:null,projName:"菜百股份IPO",publicSector:null,ambo:null,share:null,sort:0},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"75f79ce1-4385-4446-a108-e4dddd1bbbcd",envId:"7345adf8-bd4b-416e-9622-819afbc32365",projType:2,status:2,sector:null,startTime:15922368e5,endTime:159336e7,pps:null,yme:null,sme:null,bjf:null,projName:"日海智能增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:null,envId:"7345adf8-bd4b-416e-9622-819afbc32365",projType:2,status:2,sector:null,startTime:15796224e5,endTime:15796224e5,pps:null,yme:3.5,sme:3.36,bjf:"1319.5",projName:"乐凯胶片增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:"国浩律师（上海）事务所",pplId:"97ebc3f1-9194-4197-bbad-966dfd8098f2",envId:"19957e42-53ba-42a3-a4c4-2dcdbcd4d4fa",person:"张泽传"},{name:"国浩律师（上海）事务所",pplId:"2c427de3-6e98-4711-af1b-b948d3d2ae76",envId:"19957e42-53ba-42a3-a4c4-2dcdbcd4d4fa",person:"夏斌斌"}],accountant:[{name:"致同会计师事务所（特殊普通合伙）",pplId:"da105247-439e-4eeb-b26d-6c7f311f9d9b",envId:"4c22496c-12b3-4e06-8cd7-6920babdf02c",person:"魏倩婷"}],certifiedPublicValuer:[{name:"江苏中企华中天资产评估有限公司",pplId:"6d58e121-e747-4f0d-82ae-ad5b8d875562",envId:"89d0a115-234d-4874-b55b-83501109b650",person:"毛月"},{name:"江苏中企华中天资产评估有限公司",pplId:"90b5a21c-ff46-4ddb-9998-2e646dcc2c3e",envId:"89d0a115-234d-4874-b55b-83501109b650",person:"臧国锋"}],collaboratorId:"75f79ce1-4385-4446-a108-e4dddd1bbbcd",envId:"7345adf8-bd4b-416e-9622-819afbc32365",projType:1,status:2,sector:null,startTime:1513872e6,endTime:16181568e5,pps:null,yme:null,sme:6.53,bjf:"4391.12",projName:"华绿生物IPO",publicSector:null,ambo:null,share:null,sort:0},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"f3717152-9796-48c4-a4e2-91c0b81c4d76",envId:"7345adf8-bd4b-416e-9622-819afbc32365",projType:2,status:2,sector:null,startTime:14889888e5,endTime:14890752e5,pps:null,yme:112.18,sme:112.01,bjf:"1476.33",projName:"中国国航增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"55e86edf-76de-4803-9868-7ac2eea4a9f3",envId:"7345adf8-bd4b-416e-9622-819afbc32365",projType:2,status:2,sector:null,startTime:14889024e5,endTime:14889888e5,pps:null,yme:null,sme:null,bjf:null,projName:"珠江啤酒增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"e1161a73-4839-4c7c-b86e-18dc9f76c5a0",envId:"7345adf8-bd4b-416e-9622-819afbc32365",projType:2,status:2,sector:null,startTime:14531328e5,endTime:14532192e5,pps:null,yme:30.76,sme:30.53,bjf:"1900",projName:"隆平高科增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"75f79ce1-4385-4446-a108-e4dddd1bbbcd",envId:"7345adf8-bd4b-416e-9622-819afbc32365",projType:2,status:2,sector:null,startTime:13413312e5,endTime:13425408e5,pps:null,yme:null,sme:null,bjf:null,projName:"日海智能增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"e1161a73-4839-4c7c-b86e-18dc9f76c5a0",envId:"7345adf8-bd4b-416e-9622-819afbc32365",projType:2,status:2,sector:null,startTime:null,endTime:14531328e5,pps:null,yme:null,sme:null,bjf:null,projName:"隆平高科增发",publicSector:null,ambo:null,share:null,sort:1},{lawyer:[{name:null,pplId:null,envId:null,person:null}],accountant:[{name:null,pplId:null,envId:null,person:null}],certifiedPublicValuer:[{name:null,pplId:null,envId:null,person:null}],collaboratorId:"3542c8d0-7d25-49c0-a1d1-47cfcd083b7f",envId:"7345adf8-bd4b-416e-9622-819afbc32365",projType:2,status:2,sector:null,startTime:null,endTime:1359648e6,pps:null,yme:null,sme:null,bjf:null,projName:"中国国航增发",publicSector:null,ambo:null,share:null,sort:1}]}],B="vNeCu7Y6QdY8k96kqjzC",O="Rpl8zKhBZ25dFQeZ2PvR",G="ZTKC3sgNTTIpJM9dVpqm",U="b8DhJQ2CneiAsamqTY4z",_="LMOzyK90Yqs2ukBAAAyj",K=e=>{let{resData:l,circleBgColor:n="#fff",showCarousel:a=!0,legendTop:u=40,size:d="normal",...p}=e;const[i,m]=(0,t.useState)([]),[b,f]=(0,t.useState)(null),[I,y]=(0,t.useState)(!1),j={normal:[68,105,252,278,304,322,325],small:[68,105,228,253,278,290,293]}[d],g=e=>{const l=[j[4],j[3],j[2]];return e>=50?l[0]:e<50&&e>20?l[1]:l[2]},E=e=>{if(!e)return{detail:{},key:(0,s.A)(),collaborator:[],projects:[]};const{collaborator:l,projects:n,...t}=e;if(!l||!n)return{detail:t,key:(0,s.A)(),collaborator:[],projects:[]};const a=l.map((e=>e.id)),o=new Array(a.length+1).fill().map((()=>[]));n.forEach((e=>{const l=a.indexOf(e.collaboratorId);l>-1?o[l].push({...e,key:(0,s.A)()}):o[o.length-1].push({...e,key:(0,s.A)()})}));const r=l.map(((e,l)=>({...e,projectsLength:o[l].length,key:(0,s.A)()})));return o[o.length-1].length>0&&r.push({name:"",projectsLength:o[o.length-1].length,key:(0,s.A)()}),{collaborator:r,projects:o.flat(),detail:t,key:(0,s.A)()}};(0,t.useEffect)((()=>{if(void 0!==l){if(!l)return;const e=E(l);return m([e]),void f(e)}y(!0),setTimeout((()=>{y(!1);const e=L.map((e=>E(e)));m(e),f(e[0])}),300)}),[l]);return I?new Array(2).fill().map(((e,l)=>t.createElement(r.A,{key:l,active:!0}))):b?t.createElement("div",{className:B},b?t.createElement(t.Fragment,null,a&&t.createElement(h,{data:i,defaultIndex:0,onChange:e=>{f(e)}}),(()=>{const{projects:e}=b,l=360/e.length;return e.map(((e,n)=>{var a;return t.createElement(z,(0,o.A)({size:j[6],color:M[e.status],detail:e,lineWidth:24,key:e.key,angle:l,rotate:n*l-1.5},null===(a=F[b.projects.length])||void 0===a?void 0:a.details,p))}))})(),t.createElement(v,(0,o.A)({size:j[5],color:n},p)),(()=>{const{projects:e}=b,l=e.map((e=>Number(1===e.status?e.yme:e.sme))),n=360/e.length;return e.map(((e,a)=>{var r;return t.createElement(D,(0,o.A)({angle:n,showAnimate:!0,rotate:a*n,size:g(l[a]),key:e.key,data:e},null===(r=F[b.projects.length])||void 0===r?void 0:r.projects,p))}))})(),(()=>{var e;const{collaborator:l=[]}=b,n=360/(0===l.length?1:null==l||null===(e=l.map((e=>e.projectsLength)))||void 0===e?void 0:e.reduce(((e,l)=>e+l)));let a=0;return l.map((e=>{var r;const c=n*e.projectsLength;return a+=c,t.createElement(z,(0,o.A)({angle:c,rotate:a-c,size:j[1],showAnimate:!0,key:e.key,lineWidth:1===l.length?0:void 0,textHeight:37,texts:[e],onClick:()=>{e.id&&window.open("/person/".concat(e.id,"?occType=1"))},textColors:["#fff"],color:C},null===(r=F[b.projects.length])||void 0===r?void 0:r.collaborator,p))}))})(),(()=>{const{detail:e}=b;return t.createElement(v,(0,o.A)({detail:e,size:j[0],onClick:e=>{window.location.pathname.startsWith("/person")||e.pplId&&window.open("/person/".concat(e.pplId,"?occType=1"))},onCompanyClick:e=>{e.envId&&window.open("/company/".concat(e.envId,"?entType=1"))}},p))})(),(()=>{const{detail:e,collaborator:l,projects:n}=b;if(!e||!l.length||!n.length)return null;const a=P.map((e=>t.createElement("div",{className:G,key:(0,s.A)()},t.createElement("i",{className:U,style:{backgroundColor:e.color}}),t.createElement("span",null,e.name))));return t.createElement("div",{className:O,style:{top:u}},a)})()):null):t.createElement(c.A,{className:_})},Z=[{title:"风车圆盘图",keyword:"风车圆盘图",component:t.createElement("div",{className:"nT64DKOUi7KV5PGKpi8i"},t.createElement(K,{lineColor:"#fff"}))}],q=()=>t.createElement(a.A,{manifest:Z})},65011:(e,l,n)=>{n.d(l,{A:()=>v});var t=n(20527),a=n(48305),o=n(10346),r=n(42040),c=n(66003),s=n(93266),u=n.n(s),d=n(26322);const p="Q2wRdwRMUGqMlqureP5y",i="rU2sRC5_Tyn4Cu_LU1N9",m="uIvSUUmz3Bxwh23sSTbn",b="opQdDq49m5c3m5h69G8M",{Search:f}=a.A;class I extends d.Component{constructor(){super(...arguments),(0,t.A)(this,"state",{keyword:"",list:this.props.manifest}),(0,t.A)(this,"onSearch",(()=>{const{keyword:e}=this.state,{manifest:l}=this.props;this.setState({list:e?l.filter((l=>-1!==l.keyword.indexOf(e))):l})}))}renderGallery(){const{rowCount:e}=this.props,l=[];let n=0;const{list:t}=this.state;do{const a=t.slice(n,n+e);l.push(d.createElement(o.A,{gutter:24},a.map(((l,n)=>d.createElement(r.A,{span:24/e,key:"".concat(n)},d.createElement("div",{className:b},d.createElement(c.A,{title:l.title,bordered:!1},l.component))))))),n+=e}while(n<t.length);return l}render(){return d.createElement("div",{className:p},d.createElement("div",{className:i},d.createElement(f,{style:{width:"60%"},placeholder:"请输入关键字",value:this.state.keyword,allowClear:!0,onChange:e=>{this.setState({keyword:e.target.value.trim()},(()=>{this.state.keyword||this.setState({list:this.props.manifest})}))},onSearch:this.onSearch,enterButton:!0})),d.createElement("div",{className:m},this.renderGallery()))}}I.defaultProps={rowCount:2,manifest:[]},I.propTypes={rowCount:u().number,manifest:u().arrayOf(u().shape({title:u().string,keyword:u().string,component:u().node}))};const v=I}}]);