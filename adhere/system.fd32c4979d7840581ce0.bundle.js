/*! For license information please see system.fd32c4979d7840581ce0.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[7686],{7709:(t,e,n)=>{var u=n(26322);var r="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},o=u.useState,c=u.useEffect,i=u.useLayoutEffect,s=u.useDebugValue;function a(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!r(t,n)}catch(t){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),u=o({inst:{value:n,getSnapshot:e}}),r=u[0].inst,f=u[1];return i((function(){r.value=n,r.getSnapshot=e,a(r)&&f({inst:r})}),[t,n,e]),c((function(){return a(r)&&f({inst:r}),t((function(){a(r)&&f({inst:r})}))}),[t]),s(n),n};e.useSyncExternalStore=void 0!==u.useSyncExternalStore?u.useSyncExternalStore:f},17686:(t,e,n)=>{t.exports=n(7709)}}]);