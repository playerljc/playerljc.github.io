"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[1687],{75498:(e,t,l)=>{l.d(t,{A:()=>n});const n={Wrapper:"pKrIKuZYn3cSjtoUjbWg",Image:"HVZBnYbt6wr5cShbWAnv"}},25334:(e,t,l)=>{l.d(t,{A:()=>b});var n=l(64866),a=l(91635),r=l(68728),c=l(16059),u=l(47099),o=l(9117),i=l(33719),s=l(31934),m=l.n(s),f=l(26322),h=l(88724),d=l(59418),p=function(){return(p=Object.assign||function(e){for(var t,l=1,n=arguments.length;l<n;l++)for(var a in t=arguments[l])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},v=function(e,t,l){if(l||2===arguments.length)for(var n,a=0,r=t.length;a<r;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},g="adhere-mobile-ui-auto-complete",A=i.A.Title,y=i.A.Text,E=(0,f.memo)((function(e){var t,l=e.className,i=e.style,s=e.searchBarClassName,E=e.searchBarStyle,b=e.bodyClassName,N=e.bodyStyle,S=e.placeholder,C=e.searchBarProps,I=e.loadData,x=e.searchDataSource,w=e.rowKey,j=e.labelProp,D=e.valueProp,B=e.value,k=e.onChange,O=e.renderResultItem,_=e.renderEmpty,Q=void 0===(Q=e.showResult)||Q,W=(e=e.children,(0,f.useRef)()),P=(t=(0,f.useState)(""))[0],H=t[1],q=(t=(0,f.useState)([]))[0],z=t[1],M=(0,f.useMemo)((function(){return(null!=B?B:[]).map((function(e){var t;return h.A.isObject(e)?null!=(t=J(e))?t:V(e):e}))}),[B]);function R(){return!(null!=x&&x.length)}function V(e){return null==e?void 0:e[null!=w?w:"id"]}function J(e){return null==e?void 0:e[null!=D?D:"value"]}return(0,f.useEffect)((function(){z((function(e){var t=v(v([],null!=x?x:[],!0),e,!0);return null!=(e=null==(e=null==B?void 0:B.map)?void 0:e.call(B,(function(e){return h.A.isObject(e)?e:t.find((function(t){var l;return(null!=(l=J(t))?l:V(t))===e}))})))?e:[]}))}),[x,B]),f.createElement("div",{className:m()(g,null!=l?l:""),style:null!=i?i:{},ref:W},f.createElement("div",{className:m()("".concat(g,"-search-bar"),null!=s?s:""),style:null!=E?E:{}},f.createElement(u.A,p({placeholder:null!=S?S:d.Ay.v("输入文字过滤选项"),value:P,onChange:function(e){e||null!=I&&I(""),H(e)},onSearch:function(){null!=I&&I(P)}},null!=C?C:{}))),f.createElement("div",{className:m()("".concat(g,"-body"),null!=b?b:""),style:null!=N?N:{}},R()&&(null!=(t=null==_?void 0:_())?t:f.createElement(o.A,{status:"empty"})),!R()&&(null==e?void 0:e({value:M,onChange:function(e){var t=Array.isArray(e)?e:[e];z((function(e){return t.map((function(t){var l,n;return null==(n=null==(l=v(v([],null!=x?x:[],!0),e,!0))?void 0:l.find)?void 0:n.call(l,(function(e){var l;return(null!=(l=J(e))?l:V(e))===t}))}))})),null!=k&&k(e)},searchDataSource:null!=x?x:[]}))),Q&&!(null==B||!B.length)&&f.createElement(c.A,{anchors:[28,(null!=(i=null==(l=null==W?void 0:W.current)?void 0:l.offsetHeight)?i:0)-200].filter((function(e){return 0<=e}))},f.createElement("div",{className:"".concat(g,"-result")},f.createElement(r.A,{content:d.Ay.vHtml("共 <em>{n}</em> 条",{n:q.length}),color:"info"}),f.createElement(a.A,null,null==q?void 0:q.map((function(e,t){var l=V(e),r=null!=(r=null==(r=e)?void 0:r[null!=j?j:"label"])?r:null;r=f.createElement(f.Fragment,null,f.createElement(A,{level:5,ellipsis:!0},r),f.createElement(y,{type:"secondary",ellipsis:!0},r));return f.createElement(a.A.Item,{key:l},f.createElement("div",{className:"".concat(g,"-result-item-close"),onClick:function(){return function(e){var t,l;z((function(t){return t.filter((function(t){var l;return(null!=(l=J(t))?l:V(t))!==e}))})),null!=k&&k((t=e,null!=(l=null==(l=null==M?void 0:M.filter)?void 0:l.call(M,(function(e){return e!==t})))?l:[]))}(null==M?void 0:M[t])}},f.createElement(n.A,null)),null!=(l=null==O?void 0:O(e,r))?l:r)}))))))}));E.displayName="AutoComplete";const b=E},95611:(e,t,l)=>{l.r(t),l.d(t,{default:()=>f});var n=l(26322),a=l(56134),r=l(8514),c=l(56249),u=l(7640),o=l(50280),i=l(75498);const s=e=>{let{id:t,label:l,t:a}=e;const r=(0,n.useRef)(null);return n.createElement(u.B8.Item,{key:t,value:t,description:l,prefix:n.createElement(u._V,{src:"https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",className:i.A.Image,fit:"cover"}),extra:n.createElement(u.Sc,{value:t,ref:r}),arrow:!1},a)},m=()=>{const[e,t]=(0,n.useState)([]),[l,a]=(0,n.useState)([]);return n.createElement(r.A,{style:{height:"100%"},onChange:e=>{a(e)},value:l,loadData:e=>{if(!e)return void t([]);const l=c.A.show();setTimeout((()=>{t(o.A.filter((t=>-1!==t.t.indexOf(e)))),c.A.hide(l)}),500)},searchDataSource:e},(e=>{let{value:t,onChange:l,searchDataSource:a}=e;return n.createElement(u.Sc.Group,{value:t,onChange:l},n.createElement(u.B8,null,(null!=a?a:[]).map(((e,t)=>n.createElement(s,e)))))}))},f=()=>n.createElement(a.A,{style:{height:"100%"}},n.createElement(a.A.Item,{title:"CheckList的AutoComplete",style:{height:"100%",overflow:"hidden"}},n.createElement(m,null)))},27393:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var n=l(26322),a=l(56134),r=l(8514),c=l(56249),u=l(7640),o=l(50280),i=l(75498);const s=()=>{const[e,t]=(0,n.useState)([]),[l,a]=(0,n.useState)([]);return n.createElement(r.A,{className:i.A.Wrapper,value:l,loadData:e=>{if(!e)return void t([]);const l=c.A.show();setTimeout((()=>{t(o.A.filter((t=>-1!==t.t.indexOf(e)))),c.A.hide(l)}),500)},onChange:e=>{a(e)},searchDataSource:e,renderItem:e=>({description:e.label,prefix:n.createElement(u._V,{src:"https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",fit:"cover",className:i.A.Image}),children:e.t}),renderResultItem:e=>n.createElement(u.Pg,null,n.createElement(u.Pg.Item,{prefix:n.createElement(u._V,{src:"https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",className:i.A.Image,fit:"cover"}),description:e.label},e.t))},(e=>{let{value:t,onChange:l,searchDataSource:a}=e;return n.createElement(u.Pg,{multiple:!0,value:t,onChange:l},(null!=a?a:[]).map(((e,t)=>n.createElement(u.Pg.Item,{key:e.id,value:e.id,description:e.label,prefix:n.createElement(u._V,{src:"https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",className:i.A.Image,fit:"cover"})},e.t))))}))},m=()=>n.createElement(a.A,{style:{height:"100%"}},n.createElement(a.A.Item,{title:"Selector的AutoComplete",style:{height:"100%",overflow:"hidden"}},n.createElement(s,null)))},10238:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var n=l(26322),a=l(56134),r=l(8514),c=l(56249),u=l(7640),o=l(50280),i=l(75498);const s=()=>{const[e,t]=(0,n.useState)([]),[l,a]=(0,n.useState)([]);return n.createElement(r.A,{className:i.A.Wrapper,value:l,loadData:e=>{if(!e)return void t([]);const l=c.A.show();setTimeout((()=>{t(o.A.filter((t=>-1!==t.t.indexOf(e)))),c.A.hide(l)}),500)},onChange:e=>{a(e)},searchDataSource:e,renderResultItem:e=>n.createElement(u.Pg,null,n.createElement(u.Pg.Item,{prefix:n.createElement(u._V,{src:"https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",className:i.A.Image,fit:"cover"}),description:e.label},e.t))},(e=>{let{value:t,onChange:l,searchDataSource:a}=e;return n.createElement(u.MD,{columns:3,options:a.map((e=>({label:e.t,value:e.id}))),multiple:!0,value:t,onChange:l})}))},m=()=>n.createElement(a.A,{style:{height:"100%"}},n.createElement(a.A.Item,{title:"CheckBox的AutoComplete",style:{height:"100%",overflow:"hidden"}},n.createElement(s,null)))},50280:(e,t,l)=>{l.d(t,{A:()=>u});var n=l(28361),a=l.n(n),r=l(18640);const{Book:c}=r.A,u=c.map((e=>{const t=a().mock("@guid");return{...e,value:t,label:e.t,id:t}}))},56134:(e,t,l)=>{l.d(t,{A:()=>m});var n=l(31934),a=l.n(n),r=l(26322);const c="i_WmwdG1h3clKds1psGA",u="liBypgIeylI44QMhhGA3",o="xF4_gi6IeM_npm10NMtY",i="ymFmbzMt7ZqgKDkDyAen",s=e=>{let{children:t,className:l,style:n}=e;return r.createElement("div",{className:a()(i,l),style:null!=n?n:{}},t)};s.Item=e=>{let{className:t,style:l,titleClassName:n,titleStyle:i,bodyClassName:s,bodyStyle:m,title:f,children:h}=e;return r.createElement("div",{className:a()(c,t),style:null!=l?l:{}},r.createElement("div",{className:a()(u,n),style:null!=i?i:{}},f),r.createElement("div",{className:a()(o,s),style:null!=m?m:{}},h))};const m=s},8514:(e,t,l)=>{l.d(t,{A:()=>n});const n=l(25334).A}}]);