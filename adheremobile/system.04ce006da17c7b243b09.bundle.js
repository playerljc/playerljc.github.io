"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[7119],{13387:(n,e,t)=>{t.d(e,{A:()=>a});var i,o=t(78127),r=t(26322),c=t(35729);function u(){var n=navigator;return(0,c.Gv)(n)?n.connection||n.mozConnection||n.webkitConnection:null}function l(){var n=u();return n?{rtt:n.rtt,type:n.type,saveData:n.saveData,downlink:n.downlink,downlinkMax:n.downlinkMax,effectiveType:n.effectiveType}:{}}!function(n){n.ONLINE="online",n.OFFLINE="offline",n.CHANGE="change"}(i||(i={}));const a=function(){var n=(0,o.zs)((0,r.useState)((function(){return(0,o.Cl)({since:void 0,online:null===navigator||void 0===navigator?void 0:navigator.onLine},l())})),2),e=n[0],t=n[1];return(0,r.useEffect)((function(){var n=function(){t((function(n){return(0,o.Cl)((0,o.Cl)({},n),{online:!0,since:new Date})}))},e=function(){t((function(n){return(0,o.Cl)((0,o.Cl)({},n),{online:!1,since:new Date})}))},r=function(){t((function(n){return(0,o.Cl)((0,o.Cl)({},n),l())}))};window.addEventListener(i.ONLINE,n),window.addEventListener(i.OFFLINE,e);var c=u();return null==c||c.addEventListener(i.CHANGE,r),function(){window.removeEventListener(i.ONLINE,n),window.removeEventListener(i.OFFLINE,e),null==c||c.removeEventListener(i.CHANGE,r)}}),[]),e}},59145:(n,e,t)=>{function i(n,e,t){return function(n,e,t){const i=e<0?n.length+e:e;if(i>=0&&i<n.length){const i=t<0?n.length+t:t,[o]=n.splice(e,1);n.splice(i,0,o)}}(n=[...n],e,t),n}t.d(e,{p:()=>i})}}]);