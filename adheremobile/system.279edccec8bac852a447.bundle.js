"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[3930],{73930:(e,t,n)=>{n.d(t,{A:()=>C});var o=n(26322),l=n(95532),r=n(92314),a=n(7429),u=n(55812),i=n(34419),s=n.n(i),c=n(71139),d=n.n(c),g=n(16424),p=n.n(g),h=n(74891),f=n.n(h);const v="TILL_NOW";s().extend(d()),s().extend(p()),s().extend(f());const m={year:0,month:1,day:2,hour:3,minute:4,second:5};function k(e){var t,n,o,l,r,a;const u=null!==(t=e[0])&&void 0!==t?t:"1900",i=null!==(n=e[1])&&void 0!==n?n:"1",s=null!==(o=e[2])&&void 0!==o?o:"1",c=null!==(l=e[3])&&void 0!==l?l:"0",d=null!==(r=e[4])&&void 0!==r?r:"0",g=null!==(a=e[5])&&void 0!==a?a:"0";return new Date(parseInt(u),parseInt(i)-1,parseInt(s),parseInt(c),parseInt(d),parseInt(g))}s().extend(d()),s().extend(p()),s().extend(f());const w={year:0,week:1,"week-day":2};function y(e){var t,n,o;const l=null!==(t=e[0])&&void 0!==t?t:"1900",r=null!==(n=e[1])&&void 0!==n?n:"1",a=null!==(o=e[2])&&void 0!==o?o:"1";return s()().year(parseInt(l)).isoWeek(parseInt(r)).isoWeekday(parseInt(a)).hour(0).minute(0).second(0).toDate()}const S={year:1,month:2,day:3,hour:4,minute:5,second:6},I=(e,t)=>{if(t.includes("week"))return function(e){if(!e)return[];const t=s()(e);return[t.isoWeekYear().toString(),t.isoWeek().toString(),t.isoWeekday().toString()]}(e);{const n=t,o=function(e){return e?[e.getFullYear().toString(),(e.getMonth()+1).toString(),e.getDate().toString(),e.getHours().toString(),e.getMinutes().toString(),e.getSeconds().toString()]:[]}(e);return o.slice(0,S[n])}},b=(e,t,n,o,l,r,a)=>o.startsWith("week")?function(e,t,n,o,l,r){const a=[],u=t.getFullYear(),i=n.getFullYear(),c=w[o],d=parseInt(e[0]),g=d===u,p=d===i,h=s()(t),f=s()(n),v=h.isoWeek(),m=f.isoWeek(),k=h.isoWeekday(),S=f.isoWeekday(),I=parseInt(e[1]),b=g&&I===v,W=p&&I===m,D=s()(`${d}-01-01`).isoWeeksInYear(),Y=(t,n,o)=>{let l=[];for(let e=t;e<=n;e++)l.push(e);const a=e.slice(0,w[o]),u=null==r?void 0:r[o];return u&&"function"==typeof u&&(l=l.filter((e=>u(e,{get date(){return y([...a,e.toString()])}})))),l};if(c>=w.year){const e=Y(u,i,"year");a.push(e.map((e=>({label:l("year",e),value:e.toString()}))))}if(c>=w.week){const e=Y(g?v:1,p?m:D,"week");a.push(e.map((e=>({label:l("week",e),value:e.toString()}))))}if(c>=w["week-day"]){const e=Y(b?k:1,W?S:7,"week-day");a.push(e.map((e=>({label:l("week-day",e),value:e.toString()}))))}return a}(e,t,n,o,l,r):function(e,t,n,o,l,r,a){const u=[],i=t.getFullYear(),c=t.getMonth()+1,d=t.getDate(),g=t.getHours(),p=t.getMinutes(),h=t.getSeconds(),f=n.getFullYear(),w=n.getMonth()+1,y=n.getDate(),S=n.getHours(),I=n.getMinutes(),b=n.getSeconds(),W=m[o],D=parseInt(e[0]),Y=s()(k([e[0],e[1],"1"])),C=parseInt(e[1]),x=parseInt(e[2]),F=parseInt(e[3]),M=parseInt(e[4]),N=D===i,_=D===f,H=N&&C===c,L=_&&C===w,j=H&&x===d,A=L&&x===y,V=j&&F===g,q=A&&F===S,z=V&&M===p,E=q&&M===I,K=(t,n,o)=>{let l=[];for(let e=t;e<=n;e++)l.push(e);const a=e.slice(0,m[o]),u=null==r?void 0:r[o];return u&&"function"==typeof u&&(l=l.filter((e=>u(e,{get date(){return k([...a,e.toString()])}})))),l};if(W>=m.year){const e=K(i,f,"year");u.push(e.map((e=>({label:l("year",e),value:e.toString()}))))}if(W>=m.month){const e=K(N?c:1,_?w:12,"month");u.push(e.map((e=>({label:l("month",e),value:e.toString()}))))}if(W>=m.day){const e=K(H?d:1,L?y:Y.daysInMonth(),"day");u.push(e.map((e=>({label:l("day",e),value:e.toString()}))))}if(W>=m.hour){const e=K(j?g:0,A?S:23,"hour");u.push(e.map((e=>({label:l("hour",e),value:e.toString()}))))}if(W>=m.minute){const e=K(V?p:0,q?I:59,"minute");u.push(e.map((e=>({label:l("minute",e),value:e.toString()}))))}if(W>=m.second){const e=K(z?h:0,E?b:59,"second");u.push(e.map((e=>({label:l("second",e),value:e.toString()}))))}if(a&&(u[0].push({label:l("now",null),value:v}),v===(null==e?void 0:e[0])))for(let e=1;e<u.length;e+=1)u[e]=[];return u}(e,t,n,o,l,r,a);var W=n(54148);const D=(new Date).getFullYear(),Y={min:new Date((new Date).setFullYear(D-10)),max:new Date((new Date).setFullYear(D+10)),precision:"day"},C=e=>{var t;const n=(0,a.v)(Y,e),{renderLabel:i}=n,[s,c]=(0,u.z)({value:n.value,defaultValue:null!==(t=n.defaultValue)&&void 0!==t?t:null}),d=function(e){const{locale:t}=(0,W.UK)();return(0,o.useCallback)(((n,o)=>{if(e)return e(n,o);switch(n){case"minute":case"second":case"hour":return("0"+o.toString()).slice(-2);case"now":return t.DatePicker.tillNow;default:return o.toString()}}),[e])}(i),g=(0,o.useMemo)((()=>(null==s?void 0:s.tillNow)?[v,null,null]:I(s,n.precision)),[s,n.precision]),p=(0,o.useCallback)((e=>{var t;const o=((e,t)=>{if((null==e?void 0:e[0])===v){const e=new Date;return e.tillNow=!0,e}return t.includes("week")?y(e):k(e)})(e,n.precision);o&&(c(o),null===(t=n.onChange)||void 0===t||t.call(n,o))}),[n.onChange,n.precision]);return(0,r.q)(n,o.createElement(l.A,{columns:e=>b(e,n.min,n.max,n.precision,d,n.filter,n.tillNow),loading:n.loading,loadingContent:n.loadingContent,value:g,mouseWheel:n.mouseWheel,onChange:p}))}}}]);