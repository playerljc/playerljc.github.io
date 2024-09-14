"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[5840],{785:(n,r,e)=>{e.d(r,{A:()=>f});var l=e(31934),t=e.n(l),c=e(66783),o=e.n(c),a=e(26322),s=e(23782),u="adhere-ui-stickup-layout-item",m=(0,a.memo)((function(n){var r=n.className,e=n.style,l=n.title;n=n.content;return a.createElement("div",{className:t()(u,null!=r?r:""),style:null!=e?e:{}},a.createElement("div",{className:"".concat(u,"-header")},l),a.createElement("div",{className:"".concat(u,"-content")},n))}));m.displayName="StickupLayoutItem";const d=m;var i="adhere-ui-stickup-layout",p=(0,a.memo)((0,a.forwardRef)((function(n,r){var e=n.className,l=n.style,c=n.fixedClassName,u=n.fixedStyle,m=n.innerClassName,d=n.innerStyle,p=n.onChange,f=(n=n.children,(0,a.useRef)({})),y=(0,a.useRef)(null),h=(0,a.useRef)(null),v=(0,a.useRef)(null),g=(0,a.useRef)(!1),x=(0,a.useRef)([]),S=(0,a.useRef)(),C=(0,a.useRef)(null),E=(0,a.useRef)();function I(){return"updateInterval"in screen?screen.updateInterval:16.7}function N(){for(var n,r,e=v.current.scrollTop,l=0,t=x.current.length-1;l<=t&&l<=x.current.length-1&&t<=x.current.length-1;){var c,o=x.current[c=t+l>>1];if(e>=o.start&&e<o.end){r=o;break}e<o.start?t=c-1:l=1+c}!r||C.current&&(null==(n=C.current)?void 0:n.index)===r.index||(C.current=r,h.current.innerHTML=r.dom.outerHTML,p&&p(r.index))}function b(){g.current=!1,x.current=[],S.current=null==(r=y.current)?void 0:r.querySelectorAll(".".concat(i,"-item-header"));var n,r,e=0;x.current=[],C.current=null;for(var l=0,t=S.current.length;l<t;l++){var c=S.current[l],o=e,a=l!==t-1?S.current[l+1].offsetTop-c.offsetHeight:v.current.scrollHeight;if(x.current.push({start:o,end:a,dom:c,index:l}),(e=a)>v.current.scrollHeight-v.current.offsetHeight)break}N(),null!=(n=null==(r=v.current)?void 0:r.removeEventListener)&&n.call(r,"scroll",B),null!=(r=null==(n=v.current)?void 0:n.addEventListener)&&r.call(n,"scroll",B)}function w(n,r){n=n.start+S.current[n.index].offsetHeight,0===(r=void 0===r?300:r)?v.current.scrollTop=n:function(n,r){var e,l,t;void 0===n&&(n=0),void 0===r&&(r=300),g.current||("undefined"==typeof window||E.current||(E.current=document.createElement("div"),E.current.className="".concat(i,"-mask"),window.document.body.appendChild(E.current)),g.current=!0,E.current.style.display="block",e=v.current.scrollTop,l=e,t=v.current.scrollHeight/(r/I()+(r%I()!=0?1:0)),"undefined"!=typeof window&&window.requestAnimationFrame((function r(){function c(){g.current=!1,E.current.style.display="none"}e<n?n<l+t?l=n:l+=t:l-t<n?l=n:l-=t,v.current.scrollTop=l,e<n?n<=l?c():"undefined"!=typeof window&&window.requestAnimationFrame(r):l<=n?c():"undefined"!=typeof window&&window.requestAnimationFrame(r)})))}(n,r)}function B(){N()}return(0,a.useImperativeHandle)(r,(function(){return{refresh:b,scrollToByIndex:function(n,r){void 0===r&&(r=300);for(var e,l=0;l<x.current.length;l++)if(x.current[l].index===n){e=x.current[l];break}w(e=e||x.current[x.current.length-1],r)},scrollToByHeaderEl:function(n,r){void 0===r&&(r=300);for(var e,l=0;l<x.current.length;l++)if(x.current[l].dom===n){e=x.current[l];break}w(e=e||x.current[x.current.length-1],r)}}})),(0,a.useLayoutEffect)((function(){return b(),function(){var n;E.current&&null!=(n=null==(n=E.current)?void 0:n.parentElement)&&n.removeChild(E.current)}}),[]),(0,a.useLayoutEffect)((function(){var n=o()((function(){b()}),300);return f.current=new s.tb(n),f.current.observe(y.current),function(){var n;null!=(n=null==f?void 0:f.current)&&n.disconnect(),E.current&&null!=(n=null==(n=E.current)?void 0:n.parentElement)&&n.removeChild(E.current)}}),[]),a.createElement("div",{className:t()(i,null!=e?e:""),style:null!=l?l:{},ref:y},a.createElement("div",{className:t()("".concat(i,"-fixed"),null!=c?c:""),style:null!=u?u:{},ref:h}),a.createElement("div",{className:t()("".concat(i,"-inner"),null!=m?m:""),style:null!=d?d:{},ref:v},n))})));p.displayName="StickupLayout",p.Item=d;const f=p},83940:(n,r,e)=>{e.r(r),e.d(r,{default:()=>T});var l=e(26322),t=e(96465),c=e(31934),o=e.n(c),a=e(30869),s=e.n(a),u=e(785),m=function(){return(m=Object.assign||function(n){for(var r,e=1,l=arguments.length;e<l;e++)for(var t in r=arguments[e])Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t]);return n}).apply(this,arguments)},d="adhere-ui-cascade-compared",i=120,p=u.A.Item;document.addEventListener("touchmove",(function(n){n.preventDefault()}),!!function(){var n=!1;try{addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){n=!0}}))}catch(n){}return n}()&&{capture:!1,passive:!1});var f=(0,l.memo)((0,l.forwardRef)((function(n,r){var e,t=void 0===(t=n.className)?"":t,c=void 0===(c=n.style)?{}:c,a=void 0===(a=n.indicatorClassName)?"":a,f=void 0===(f=n.indicatorStyle)?{}:f,y=void 0===(y=n.indicatorFixedWrapClassName)?"":y,h=void 0===(h=n.indicatorFixedWrapStyle)?{}:h,v=void 0===(v=n.indicatorAutoWrapClassName)?"":v,g=void 0===(g=n.indicatorAutoWrapStyle)?{}:g,x=void 0===(x=(C=n.indicator).columns)?[]:x,S=void 0===(C=C.dataSource)?{}:C,C=void 0===(C=n.masterClassName)?"":C,E=void 0===(E=n.masterStyle)?{}:E,I=void 0===(I=n.masterInnerClassName)?"":I,N=void 0===(N=n.masterInnerStyle)?{}:N,b=void 0===(b=n.masterStickFixedClassName)?"":b,w=void 0===(w=n.masterStickFixedStyle)?{}:w,B=void 0===(B=n.masterStickInnerClassName)?"":B,k=void 0===(k=n.masterStickInnerStyle)?{}:k,R=void 0===(R=n.master)?[]:R,V=(n=n.onStickChange,(0,l.useRef)(null)),F=(0,l.useRef)(null),T=(0,l.useRef)([]);function A(n){return n.find((function(n){return n.isFixed}))||(n.length?n[0]:null)}function j(n,r,e,l,t){return n?n.render?n.render(r[n.dataIndex],r,e,l,t):r[n.dataIndex]:null}return(0,l.useImperativeHandle)(r,(function(){return{scrollToByIndex:function(n,r){F.current.scrollToByIndex(n,r=void 0===r?300:r)},scrollToByHeaderEl:function(n,r){F.current.scrollToByHeaderEl(n,r=void 0===r?300:r)},scrollToByColumn:function(n){var r=T.current[0];n=r.wrapper.querySelector(".".concat(d,"-item .").concat(d,"-cell:nth-of-type(").concat(n,")"));r.scrollToElement(n)}}})),(0,l.useLayoutEffect)((function(){F.current.refresh(),function(){for(var n=V.current.querySelectorAll(".".concat(d,"-auto-wrap")),r=0;r<T.current.length;r++)T.current[r].destroy();for(T.current=[],r=0;r<n.length;r++)!function(r){var e=new(s())(n[r],{probeType:3,eventPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1});T.current.push(e),e.on("scroll",(function(){for(var n=0;n<T.current.length;n++)T.current[n]!==e&&T.current[n].scrollTo(e.x,e.y)}))}(r)}()})),l.createElement("div",{className:o()(d,null!=t?t:""),style:m({},null!=c?c:{}),ref:V},(e=A(x),l.createElement("div",{className:o()("".concat(d,"-indicator"),null!=a?a:""),style:m({},f)},l.createElement("div",{className:o()("".concat(d,"-fixed-wrap"),null!=y?y:""),style:m(m({},null!=h?h:{}),{width:(null==e?void 0:e.width)||i})},l.createElement("div",{className:"".concat(d,"-item")},l.createElement("div",{className:o()("".concat(d,"-cell"),null!=(r=null==e?void 0:e.className)?r:""),style:m({},null!=(r=null==e?void 0:e.style)?r:{})},j(e,S,-1,-1,-1)))),l.createElement("div",{className:o()("".concat(d,"-auto-wrap"),null!=v?v:""),style:m({},null!=g?g:{})},l.createElement("div",{className:"".concat(d,"-item")},x.filter((function(n){return n!==e})).map((function(n,r){var e;return l.createElement("div",{key:n.dataIndex,className:o()("".concat(d,"-cell"),null!=(e=n.className)?e:""),style:m(m({},null!=(e=n.style)?e:{}),{width:(null==n?void 0:n.width)||i})},j(n,S,-1,-1,r))})))))),(t={ref:F,className:o()("".concat(d,"-master-inner"),null!=I?I:""),style:null!=N?N:{},fixedClassName:o()(null!=b?b:""),fixedStyle:null!=w?w:{},innerClassName:o()(null!=B?B:""),innerStyle:null!=k?k:{},onChange:n},l.createElement("div",{className:o()("".concat(d,"-master"),null!=C?C:""),style:m({},null!=E?E:{})},l.createElement(u.A,m({},t),R.map((function(n,r){var e,t,c,a,s,u=void 0===(u=n.title)?void 0:u,f=void 0===(f=n.className)?"":f,y=void 0===(y=n.style)?{}:y;return l.createElement(p,{key:r,className:o()(null!=f?f:""),style:m({},null!=y?y:{}),title:u,content:(e=r,y=void 0===(y=(f=n).dataSource)?[]:y,t=void 0===(u=f.columns)?[]:u,u=void 0===(u=f.fixedWrapClassName)?"":u,r=void 0===(r=f.fixedWrapStyle)?{}:r,n=void 0===(n=f.autoWrapClassName)?"":n,c=void 0===(c=f.autoWrapStyle)?{}:c,a=void 0===(a=f.autoInnerClassName)?"":a,f=void 0===(f=f.autoInnerStyle)?{}:f,s=A(t),l.createElement(l.Fragment,null,l.createElement("div",{className:o()("".concat(d,"-fixed-wrap"),null!=u?u:""),style:m(m({},null!=r?r:{}),{width:(null==s?void 0:s.width)||i})},y.map((function(n,r){var t;return l.createElement("div",{key:r,className:"".concat(d,"-item")},l.createElement("div",{className:o()("".concat(d,"-cell"),null!=(t=null==s?void 0:s.className)?t:""),style:m({},null!=(t=null==s?void 0:s.style)?t:{})},j(s,n,e,r,-1)))}))),l.createElement("div",{className:o()("".concat(d,"-auto-wrap"),null!=n?n:""),style:m({},null!=c?c:{})},l.createElement("div",{className:o()("".concat(d,"-auto-inner"),null!=a?a:""),style:m({},f)},y.map((function(n,r){return l.createElement("div",{key:r,className:"".concat(d,"-item")},t.filter((function(n){return n!==s})).map((function(t,c){var a;return l.createElement("div",{key:t.dataIndex,className:o()("".concat(d,"-cell"),null!=(a=t.className)?a:""),style:m(m({},null!=(a=t.style)?a:{}),{width:(null==t?void 0:t.width)||i})},j(t,n,e,r,c))})))}))))))})}))))))})));f.displayName="CascadeCompared";const y=f,h="bSt3GFyT1AoMaeDBbUnQ",v="JhgGNqKikdBp__3lQFg_",g=Array.from({length:10}).fill(0),x=Array.from({length:10}).fill(0);const S=()=>l.createElement("div",{className:h,style:{border:"1px solid rgba(0,0,0,.1)"}},l.createElement(y,{indicator:{columns:g.map(((n,r)=>({dataIndex:"column".concat(r+1),isFixed:0===r,width:120,render:(n,e,t,c,o)=>(console.log("indicator",n,e,t,c,o),l.createElement("h2",null,"指标".concat(r+1)))}))),dataSource:{column1:1,column2:2,column3:3,column4:4,column5:5,column6:6,column7:7,column8:8,column9:9,column10:10}},master:x.map(((n,r)=>({title:l.createElement("h2",{className:v,style:{margin:0,borderBottom:"1px solid rgba(0,0,0,.1)"}},"header".concat(r+1)),columns:g.map(((n,r)=>({dataIndex:"column".concat(r+1),isFixed:0===r,width:120,render:(n,e,t,c,o)=>(console.log("master",n,e,t,c,o),l.createElement("h4",null,"厂家指导价".concat(r+1)))}))),dataSource:[{column1:1,column2:2,column3:3,column4:4,column5:5,column6:6,column7:7,column8:8,column9:9,column10:10},{column1:1,column2:2,column3:3,column4:4,column5:5,column6:6,column7:7,column8:8,column9:9,column10:10},{column1:1,column2:2,column3:3,column4:4,column5:5,column6:6,column7:7,column8:8,column9:9,column10:10}]})))}));var C=e(32517),E=e(80711);const I=[];I.length=10,I.fill(0);const N=[];N.length=10,N.fill(0);const b=()=>{const n=(0,l.useRef)(),[r,e]=(0,l.useState)(N.map(((n,r)=>({title:l.createElement("h2",{className:v,style:{margin:0,borderBottom:"1px solid rgba(0,0,0,.1)"}},"header".concat(r+1)),columns:I.map(((n,r)=>({dataIndex:"column".concat(r+1),isFixed:0===r,width:120,render:()=>l.createElement("h4",null,"厂家指导价".concat(r+1))}))),dataSource:[{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10},{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10},{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10}]}))));return(0,l.useEffect)((()=>{n.current.scrollToByIndex(r.length-1)}),[r]),l.createElement(l.Fragment,null,l.createElement(E.Ay,{type:"primary",onClick:()=>{e((n=>n.concat([{title:l.createElement("h2",{className:v,style:{margin:0,borderBottom:"1px solid rgba(0,0,0,.1)"}},"header".concat(n.length+1)),columns:I.map(((n,r)=>({dataIndex:"column".concat(r+1),isFixed:0===r,width:120,render:()=>l.createElement("h4",null,"厂家指导价".concat(r+1))}))),dataSource:[{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10},{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10},{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10}]}])))}},"插入"),l.createElement(C.A,{direction:"vertical"}),l.createElement("div",{className:h,style:{border:"1px solid rgba(0,0,0,.1)"}},l.createElement(y,{ref:n,indicator:{columns:I.map(((n,r)=>({dataIndex:"column".concat(r+1),isFixed:0===r,width:120,render:()=>l.createElement("h2",null,"指标".concat(r+1))}))),dataSource:{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10}},master:r})))},w=[];w.length=10,w.fill(0);const B=[];B.length=10,B.fill(0);const k=()=>{const n=(0,l.useRef)();return l.createElement(l.Fragment,null,l.createElement(C.A.Group,{direction:"horizontal"},l.createElement(E.Ay,{type:"primary",onClick:()=>{n.current.scrollToByIndex(9,0)}},"滚动到底部(无动画)"),l.createElement(E.Ay,{onClick:()=>{n.current.scrollToByIndex(9)}},"滚动到底部(有动画)"),l.createElement(E.Ay,{onClick:()=>{n.current.scrollToByIndex(0)}},"回到顶部")),l.createElement(C.A,{direction:"vertical"}),l.createElement("div",{className:h,style:{border:"1px solid rgba(0,0,0,.1)"}},l.createElement(y,{ref:n,indicator:{columns:w.map(((n,r)=>({dataIndex:"column".concat(r+1),isFixed:0===r,width:120,render:()=>l.createElement("h2",null,"指标".concat(r+1))}))),dataSource:{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10}},master:B.map(((n,r)=>({title:l.createElement("h2",{className:v,style:{margin:0,borderBottom:"1px solid rgba(0,0,0,.1)"}},"header".concat(r+1)),columns:w.map(((n,r)=>({dataIndex:"column".concat(r+1),isFixed:0===r,width:120,render:()=>l.createElement("h4",null,"厂家指导价".concat(r+1))}))),dataSource:[{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10},{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10},{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10}]})))})))},R=[];R.length=10,R.fill(0);const V=[];V.length=10,V.fill(0);const F=()=>{const n=(0,l.useRef)();return l.createElement(l.Fragment,null,l.createElement(C.A.Group,{direction:"horizontal"},l.createElement(E.Ay,{type:"primary",onClick:()=>{n.current.scrollToByColumn(1)}},"滚动到第一列"),l.createElement(E.Ay,{onClick:()=>{n.current.scrollToByColumn(9)}},"滚动到最后一列(有动画)")),l.createElement(C.A,{direction:"vertical"}),l.createElement("div",{className:h,style:{border:"1px solid rgba(0,0,0,.1)"}},l.createElement(y,{ref:n,indicator:{columns:R.map(((n,r)=>({dataIndex:"column".concat(r+1),isFixed:0===r,width:120,render:()=>l.createElement("h2",null,"指标".concat(r+1))}))),dataSource:{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10}},master:V.map(((n,r)=>({title:l.createElement("h2",{className:v,style:{margin:0,borderBottom:"1px solid rgba(0,0,0,.1)"}},"header".concat(r+1)),columns:R.map(((n,r)=>({dataIndex:"column".concat(r+1),isFixed:0===r,width:120,render:()=>l.createElement("h4",null,"厂家指导价".concat(r+1))}))),dataSource:[{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10},{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10},{columns1:1,columns2:2,columns3:3,columns4:4,columns5:5,columns6:6,columns7:7,columns8:8,columns9:9,columns10:10}]})))})))},T=()=>l.createElement(t.Ay,{className:"CascadeCompared"},l.createElement(t.wn,{title:"CascadeCompared"},l.createElement("p",null,"级联比较")),l.createElement(t.Wc,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:l},cardProps:{description:{title:"基本使用",info:"基本的级联操作"}},codeText:"import React from 'react';\r\n\r\nimport { CascadeCompared } from '@baifendian/adhere';\r\n\r\nimport styles from './example.less';\r\n\r\nconst columns = Array.from({ length: 10 }).fill(0);\r\n\r\nconst data = Array.from({ length: 10 }).fill(0);\r\n\r\nfunction getIndicator() {\r\n  return {\r\n    columns: columns.map((t, i) => ({\r\n      dataIndex: `column${i + 1}`,\r\n      isFixed: i === 0,\r\n      width: 120,\r\n      render: (val, dataSource, groupIndex, rowIndex, columnIndex) => {\r\n        console.log('indicator', val, dataSource, groupIndex, rowIndex, columnIndex);\r\n        return <h2>{`指标${i + 1}`}</h2>;\r\n      },\r\n    })),\r\n    dataSource: {\r\n      column1: 1,\r\n      column2: 2,\r\n      column3: 3,\r\n      column4: 4,\r\n      column5: 5,\r\n      column6: 6,\r\n      column7: 7,\r\n      column8: 8,\r\n      column9: 9,\r\n      column10: 10,\r\n    },\r\n  };\r\n}\r\n\r\n// [\r\n//   {\r\n//     groupName: '基本信息',\r\n//     columns: ['name', 'hafu1', 'hongqi'],\r\n//     dataSource: [\r\n//       {\r\n//         name: '车款名称',\r\n//         hafu1: 'hafu',\r\n//         hongqi: 'hongqi',\r\n//       },\r\n//     ],\r\n//   },\r\n// ];\r\n\r\nfunction getMaster() {\r\n  // 一组一组的\r\n  return data.map((t, i) => ({\r\n    // 组名\r\n    title: (\r\n      <h2\r\n        className={styles.H2}\r\n        style={{ margin: 0, borderBottom: '1px solid rgba(0,0,0,.1)' }}\r\n      >{`header${i + 1}`}</h2>\r\n    ),\r\n    columns: columns.map((c, j) => ({\r\n      dataIndex: `column${j + 1}`,\r\n      isFixed: j === 0,\r\n      width: 120,\r\n      // render: () => <h4>{`厂家指导价${j + 1}`}</h4>,\r\n      render: (val, dataSource, groupIndex, rowIndex, columnIndex) => {\r\n        console.log('master', val, dataSource, groupIndex, rowIndex, columnIndex);\r\n        return <h4>{`厂家指导价${j + 1}`}</h4>;\r\n      },\r\n    })),\r\n    dataSource: [\r\n      {\r\n        column1: 1,\r\n        column2: 2,\r\n        column3: 3,\r\n        column4: 4,\r\n        column5: 5,\r\n        column6: 6,\r\n        column7: 7,\r\n        column8: 8,\r\n        column9: 9,\r\n        column10: 10,\r\n      },\r\n      {\r\n        column1: 1,\r\n        column2: 2,\r\n        column3: 3,\r\n        column4: 4,\r\n        column5: 5,\r\n        column6: 6,\r\n        column7: 7,\r\n        column8: 8,\r\n        column9: 9,\r\n        column10: 10,\r\n      },\r\n      {\r\n        column1: 1,\r\n        column2: 2,\r\n        column3: 3,\r\n        column4: 4,\r\n        column5: 5,\r\n        column6: 6,\r\n        column7: 7,\r\n        column8: 8,\r\n        column9: 9,\r\n        column10: 10,\r\n      },\r\n    ],\r\n  }));\r\n}\r\n\r\nexport default () => {\r\n  return (\r\n    <div className={styles.Wrapper} style={{ border: '1px solid rgba(0,0,0,.1)' }}>\r\n      <CascadeCompared indicator={getIndicator()} master={getMaster()} />\r\n    </div>\r\n  );\r\n};\r\n",type:"PlayGround",renderChildren:()=>l.createElement(S,null)},{id:"p2",name:"在底部插入",mode:"code",scope:{React:l},cardProps:{description:{title:"在底部插入",info:"在底部插入行"}},codeText:"import { Button } from 'antd';\r\nimport React, { useEffect, useRef, useState } from 'react';\r\n\r\nimport { CascadeCompared, Space } from '@baifendian/adhere';\r\n\r\nimport styles from './example.less';\r\n\r\nconst columns = [];\r\ncolumns.length = 10;\r\ncolumns.fill(0);\r\n\r\nconst data = [];\r\ndata.length = 10;\r\ndata.fill(0);\r\n\r\nfunction getIndicator() {\r\n  return {\r\n    columns: columns.map((t, i) => ({\r\n      dataIndex: `column${i + 1}`,\r\n      isFixed: i === 0,\r\n      width: 120,\r\n      render: () => <h2>{`指标${i + 1}`}</h2>,\r\n    })),\r\n    dataSource: {\r\n      columns1: 1,\r\n      columns2: 2,\r\n      columns3: 3,\r\n      columns4: 4,\r\n      columns5: 5,\r\n      columns6: 6,\r\n      columns7: 7,\r\n      columns8: 8,\r\n      columns9: 9,\r\n      columns10: 10,\r\n    },\r\n  };\r\n}\r\n\r\nfunction getMaster() {\r\n  return data.map((t, i) => ({\r\n    title: (\r\n      <h2\r\n        className={styles.H2}\r\n        style={{ margin: 0, borderBottom: '1px solid rgba(0,0,0,.1)' }}\r\n      >{`header${i + 1}`}</h2>\r\n    ),\r\n    columns: columns.map((c, j) => ({\r\n      dataIndex: `column${j + 1}`,\r\n      isFixed: j === 0,\r\n      width: 120,\r\n      render: () => <h4>{`厂家指导价${j + 1}`}</h4>,\r\n    })),\r\n    dataSource: [\r\n      {\r\n        columns1: 1,\r\n        columns2: 2,\r\n        columns3: 3,\r\n        columns4: 4,\r\n        columns5: 5,\r\n        columns6: 6,\r\n        columns7: 7,\r\n        columns8: 8,\r\n        columns9: 9,\r\n        columns10: 10,\r\n      },\r\n      {\r\n        columns1: 1,\r\n        columns2: 2,\r\n        columns3: 3,\r\n        columns4: 4,\r\n        columns5: 5,\r\n        columns6: 6,\r\n        columns7: 7,\r\n        columns8: 8,\r\n        columns9: 9,\r\n        columns10: 10,\r\n      },\r\n      {\r\n        columns1: 1,\r\n        columns2: 2,\r\n        columns3: 3,\r\n        columns4: 4,\r\n        columns5: 5,\r\n        columns6: 6,\r\n        columns7: 7,\r\n        columns8: 8,\r\n        columns9: 9,\r\n        columns10: 10,\r\n      },\r\n    ],\r\n  }));\r\n}\r\n\r\nexport default () => {\r\n  const ref = useRef();\r\n\r\n  const [dataSource, setDataSource] = useState(getMaster());\r\n\r\n  useEffect(() => {\r\n    ref.current.scrollToByIndex(dataSource.length - 1);\r\n  }, [dataSource]);\r\n\r\n  return (\r\n    <>\r\n      <Button\r\n        type=\"primary\"\r\n        onClick={() => {\r\n          setDataSource((data) => {\r\n            return data.concat([\r\n              {\r\n                title: (\r\n                  <h2\r\n                    className={styles.H2}\r\n                    style={{\r\n                      margin: 0,\r\n                      borderBottom: '1px solid rgba(0,0,0,.1)',\r\n                    }}\r\n                  >{`header${data.length + 1}`}</h2>\r\n                ),\r\n                columns: columns.map((c, j) => ({\r\n                  dataIndex: `column${j + 1}`,\r\n                  isFixed: j === 0,\r\n                  width: 120,\r\n                  render: () => <h4>{`厂家指导价${j + 1}`}</h4>,\r\n                })),\r\n                dataSource: [\r\n                  {\r\n                    columns1: 1,\r\n                    columns2: 2,\r\n                    columns3: 3,\r\n                    columns4: 4,\r\n                    columns5: 5,\r\n                    columns6: 6,\r\n                    columns7: 7,\r\n                    columns8: 8,\r\n                    columns9: 9,\r\n                    columns10: 10,\r\n                  },\r\n                  {\r\n                    columns1: 1,\r\n                    columns2: 2,\r\n                    columns3: 3,\r\n                    columns4: 4,\r\n                    columns5: 5,\r\n                    columns6: 6,\r\n                    columns7: 7,\r\n                    columns8: 8,\r\n                    columns9: 9,\r\n                    columns10: 10,\r\n                  },\r\n                  {\r\n                    columns1: 1,\r\n                    columns2: 2,\r\n                    columns3: 3,\r\n                    columns4: 4,\r\n                    columns5: 5,\r\n                    columns6: 6,\r\n                    columns7: 7,\r\n                    columns8: 8,\r\n                    columns9: 9,\r\n                    columns10: 10,\r\n                  },\r\n                ],\r\n              },\r\n            ]);\r\n          });\r\n        }}\r\n      >\r\n        插入\r\n      </Button>\r\n\r\n      <Space direction=\"vertical\" />\r\n\r\n      <div className={styles.Wrapper} style={{ border: '1px solid rgba(0,0,0,.1)' }}>\r\n        <CascadeCompared ref={ref} indicator={getIndicator()} master={dataSource} />\r\n      </div>\r\n    </>\r\n  );\r\n};\r\n",type:"PlayGround",renderChildren:()=>l.createElement(b,null)},{id:"p3",name:"通过索引滚动",mode:"code",scope:{React:l},cardProps:{description:{title:"通过索引滚动",info:"通过索引滚动到顶部"}},codeText:"import { Button } from 'antd';\r\nimport React, { useRef } from 'react';\r\n\r\nimport { CascadeCompared, Space } from '@baifendian/adhere';\r\n\r\nimport styles from './example.less';\r\n\r\nconst columns = [];\r\ncolumns.length = 10;\r\ncolumns.fill(0);\r\n\r\nconst data = [];\r\ndata.length = 10;\r\ndata.fill(0);\r\n\r\nfunction getIndicator() {\r\n  return {\r\n    columns: columns.map((t, i) => ({\r\n      dataIndex: `column${i + 1}`,\r\n      isFixed: i === 0,\r\n      width: 120,\r\n      render: () => <h2>{`指标${i + 1}`}</h2>,\r\n    })),\r\n    dataSource: {\r\n      columns1: 1,\r\n      columns2: 2,\r\n      columns3: 3,\r\n      columns4: 4,\r\n      columns5: 5,\r\n      columns6: 6,\r\n      columns7: 7,\r\n      columns8: 8,\r\n      columns9: 9,\r\n      columns10: 10,\r\n    },\r\n  };\r\n}\r\n\r\nfunction getMaster() {\r\n  return data.map((t, i) => ({\r\n    title: (\r\n      <h2\r\n        className={styles.H2}\r\n        style={{ margin: 0, borderBottom: '1px solid rgba(0,0,0,.1)' }}\r\n      >{`header${i + 1}`}</h2>\r\n    ),\r\n    columns: columns.map((c, j) => ({\r\n      dataIndex: `column${j + 1}`,\r\n      isFixed: j === 0,\r\n      width: 120,\r\n      render: () => <h4>{`厂家指导价${j + 1}`}</h4>,\r\n    })),\r\n    dataSource: [\r\n      {\r\n        columns1: 1,\r\n        columns2: 2,\r\n        columns3: 3,\r\n        columns4: 4,\r\n        columns5: 5,\r\n        columns6: 6,\r\n        columns7: 7,\r\n        columns8: 8,\r\n        columns9: 9,\r\n        columns10: 10,\r\n      },\r\n      {\r\n        columns1: 1,\r\n        columns2: 2,\r\n        columns3: 3,\r\n        columns4: 4,\r\n        columns5: 5,\r\n        columns6: 6,\r\n        columns7: 7,\r\n        columns8: 8,\r\n        columns9: 9,\r\n        columns10: 10,\r\n      },\r\n      {\r\n        columns1: 1,\r\n        columns2: 2,\r\n        columns3: 3,\r\n        columns4: 4,\r\n        columns5: 5,\r\n        columns6: 6,\r\n        columns7: 7,\r\n        columns8: 8,\r\n        columns9: 9,\r\n        columns10: 10,\r\n      },\r\n    ],\r\n  }));\r\n}\r\n\r\nexport default () => {\r\n  const ref = useRef();\r\n\r\n  return (\r\n    <>\r\n      <Space.Group direction=\"horizontal\">\r\n        <Button\r\n          type=\"primary\"\r\n          onClick={() => {\r\n            ref.current.scrollToByIndex(9, 0);\r\n          }}\r\n        >\r\n          滚动到底部(无动画)\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            ref.current.scrollToByIndex(9);\r\n          }}\r\n        >\r\n          滚动到底部(有动画)\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            ref.current.scrollToByIndex(0);\r\n          }}\r\n        >\r\n          回到顶部\r\n        </Button>\r\n      </Space.Group>\r\n\r\n      <Space direction=\"vertical\" />\r\n\r\n      <div className={styles.Wrapper} style={{ border: '1px solid rgba(0,0,0,.1)' }}>\r\n        <CascadeCompared ref={ref} indicator={getIndicator()} master={getMaster()} />\r\n      </div>\r\n    </>\r\n  );\r\n};\r\n",type:"PlayGround",renderChildren:()=>l.createElement(k,null)},{id:"p4",name:"滚动到指定列",mode:"code",scope:{React:l},cardProps:{description:{title:"滚动到指定列",info:"滚动到指定列"}},codeText:"import { Button } from 'antd';\r\nimport React, { useRef } from 'react';\r\n\r\nimport { CascadeCompared, Space } from '@baifendian/adhere';\r\n\r\nimport styles from './example.less';\r\n\r\nconst columns = [];\r\ncolumns.length = 10;\r\ncolumns.fill(0);\r\n\r\nconst data = [];\r\ndata.length = 10;\r\ndata.fill(0);\r\n\r\nfunction getIndicator() {\r\n  return {\r\n    columns: columns.map((t, i) => ({\r\n      dataIndex: `column${i + 1}`,\r\n      isFixed: i === 0,\r\n      width: 120,\r\n      render: () => <h2>{`指标${i + 1}`}</h2>,\r\n    })),\r\n    dataSource: {\r\n      columns1: 1,\r\n      columns2: 2,\r\n      columns3: 3,\r\n      columns4: 4,\r\n      columns5: 5,\r\n      columns6: 6,\r\n      columns7: 7,\r\n      columns8: 8,\r\n      columns9: 9,\r\n      columns10: 10,\r\n    },\r\n  };\r\n}\r\n\r\nfunction getMaster() {\r\n  return data.map((t, i) => ({\r\n    title: (\r\n      <h2\r\n        className={styles.H2}\r\n        style={{ margin: 0, borderBottom: '1px solid rgba(0,0,0,.1)' }}\r\n      >{`header${i + 1}`}</h2>\r\n    ),\r\n    columns: columns.map((c, j) => ({\r\n      dataIndex: `column${j + 1}`,\r\n      isFixed: j === 0,\r\n      width: 120,\r\n      render: () => <h4>{`厂家指导价${j + 1}`}</h4>,\r\n    })),\r\n    dataSource: [\r\n      {\r\n        columns1: 1,\r\n        columns2: 2,\r\n        columns3: 3,\r\n        columns4: 4,\r\n        columns5: 5,\r\n        columns6: 6,\r\n        columns7: 7,\r\n        columns8: 8,\r\n        columns9: 9,\r\n        columns10: 10,\r\n      },\r\n      {\r\n        columns1: 1,\r\n        columns2: 2,\r\n        columns3: 3,\r\n        columns4: 4,\r\n        columns5: 5,\r\n        columns6: 6,\r\n        columns7: 7,\r\n        columns8: 8,\r\n        columns9: 9,\r\n        columns10: 10,\r\n      },\r\n      {\r\n        columns1: 1,\r\n        columns2: 2,\r\n        columns3: 3,\r\n        columns4: 4,\r\n        columns5: 5,\r\n        columns6: 6,\r\n        columns7: 7,\r\n        columns8: 8,\r\n        columns9: 9,\r\n        columns10: 10,\r\n      },\r\n    ],\r\n  }));\r\n}\r\n\r\nexport default () => {\r\n  const ref = useRef();\r\n\r\n  return (\r\n    <>\r\n      <Space.Group direction=\"horizontal\">\r\n        <Button\r\n          type=\"primary\"\r\n          onClick={() => {\r\n            ref.current.scrollToByColumn(1);\r\n          }}\r\n        >\r\n          滚动到第一列\r\n        </Button>\r\n\r\n        <Button\r\n          onClick={() => {\r\n            ref.current.scrollToByColumn(9);\r\n          }}\r\n        >\r\n          滚动到最后一列(有动画)\r\n        </Button>\r\n      </Space.Group>\r\n\r\n      <Space direction=\"vertical\" />\r\n\r\n      <div className={styles.Wrapper} style={{ border: '1px solid rgba(0,0,0,.1)' }}>\r\n        <CascadeCompared ref={ref} indicator={getIndicator()} master={getMaster()} />\r\n      </div>\r\n    </>\r\n  );\r\n};\r\n",type:"PlayGround",renderChildren:()=>l.createElement(F,null)}]}),l.createElement(t.e6,{title:"Props",config:[{border:!0,title:"CascadeCompared",data:[{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"indicatorClassName",desc:"indicator附加的样式表",type:"string",defaultVal:""},{params:"indicatorStyle",desc:"indicator的样式",type:"React.CSSProperties",defaultVal:""},{params:"indicatorFixedWrapClassName",desc:"indicatorFixedWrap样式表",type:"string",defaultVal:""},{params:"indicatorFixedWrapStyle",desc:"indicatorFixedWrap附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"indicatorAutoWrapClassName",desc:"indicatorAutoWrap样式表",type:"string",defaultVal:""},{params:"indicatorAutoWrapStyle",desc:"indicatorAutoWrap附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"masterClassName",desc:"masterWrap样式表",type:"string",defaultVal:""},{params:"masterStyle",desc:"master附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"masterInnerClassName",desc:"masterInner样式表",type:"string",defaultVal:""},{params:"masterInnerStyle",desc:"masterInner附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"masterStickFixedClassName",desc:"masterStickFixed样式表",type:"string",defaultVal:""},{params:"masterStickFixedStyle",desc:"masterStickFixed附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"masterStickInnerClassName",desc:"masterStickInner样式表",type:"string",defaultVal:""},{params:"masterStickInnerStyle",desc:"masterStickInner附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"indicator",desc:"指示器数据",type:"IIndicatorTableConfig",defaultVal:""},{params:"master",desc:"主数据",type:"Array<IMasterItem>",defaultVal:""},{params:"onStickChange",desc:"滚动改变钩子",type:"Function",defaultVal:""},{params:"defaultCellWidth",desc:"缺省的列宽度",type:"number | string",defaultVal:"120"}]},{border:!0,title:"IIndicatorTableConfig",data:[{params:"columns",desc:"列配置",type:"Array<IColumnConfig>",defaultVal:"[]"},{params:"dataSource",desc:"数据",type:"Object",defaultVal:"{}"}]},{border:!0,title:"IColumnConfig",data:[{params:"dataIndex",desc:"数据索引",type:"string",defaultVal:""},{params:"isFixed",desc:"是否是固定列",type:"boolean",defaultVal:"false"},{params:"width",desc:"列的宽度",type:"number | string",defaultVal:"120"},{params:"render",desc:"渲染列的方法",type:"Function",defaultVal:"120"},{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""}]},{border:!0,title:"IMasterItem",data:[{params:"columns",desc:"列配置",type:"Array<IColumnConfig>",defaultVal:"[]"},{params:"dataSource",desc:"数据",type:"Array<Object>",defaultVal:"[]"},{params:"title",desc:"header",type:"React.ReactElement",defaultVal:""},{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:"{}"},{params:"fixedWrapClassName",desc:"附加的样式表",type:"string",defaultVal:""},{params:"fixedWrapStyle",desc:"附加的样式",type:"React.CSSProperties",defaultVal:"{}"},{params:"autoWrapClassName",desc:"附加的样式表",type:"string",defaultVal:""},{params:"autoWrapStyle",desc:"附加的样式",type:"React.CSSProperties",defaultVal:"{}"},{params:"autoInnerClassName",desc:"附加的样式表",type:"string",defaultVal:""},{params:"autoInnerStyle",desc:"附加的样式",type:"React.CSSProperties",defaultVal:"{}"}]}]}),l.createElement(t.I7,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"scrollToByIndex",desc:"滚动到指定所引出",modifier:"public",params:[{name:"index",desc:"滚动到的索引",type:"number",defaultVal:"",required:"true"},{name:"duration",desc:"滚动的时间",type:"number",defaultVal:"600",required:""}],returnType:"",returnDesc:""},{name:"scrollToByHeaderEl",desc:"滚动到指定el",modifier:"public",params:[{name:"headerEl",desc:"指定的el",type:"HtmlElement",defaultVal:"",required:"true"},{name:"duration",desc:"滚动的时间",type:"number",defaultVal:"300",required:""}],returnType:"",returnDesc:""},{name:"scrollToByColumn",desc:"滚动到指定列",modifier:"public",params:[{name:"columnIndex",desc:"列的索引从1开始",type:"number",defaultVal:"",required:"true"}],returnType:"",returnDesc:""}]}]}))},32517:(n,r,e)=>{e.d(r,{A:()=>l});const l=e(2382).A},38948:n=>{n.exports=JSON.parse('{"rE":"2.11.0","Jk":{"O":"https://github.com/playerljc/adhere"}}')}}]);