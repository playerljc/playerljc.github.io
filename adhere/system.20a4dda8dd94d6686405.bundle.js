(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[8271],{48271:function(t){t.exports=function(){"use strict";function t(t,r,a,e,h){!function t(n,r,a,e,h){for(;e>a;){if(e-a>600){var o=e-a+1,s=r-a+1,l=Math.log(o),u=.5*Math.exp(2*l/3),f=.5*Math.sqrt(l*u*(o-u)/o)*(s-o/2<0?-1:1);t(n,r,Math.max(a,Math.floor(r-s*u/o+f)),Math.min(e,Math.floor(r+(o-s)*u/o+f)),h)}var c=n[r],m=a,p=e;for(i(n,a,r),h(n[e],c)>0&&i(n,a,e);m<p;){for(i(n,m,p),m++,p--;h(n[m],c)<0;)m++;for(;h(n[p],c)>0;)p--}0===h(n[a],c)?i(n,a,p):i(n,++p,e),p<=r&&(a=p+1),r<=p&&(e=p-1)}}(t,r,a||0,e||t.length-1,h||n)}function i(t,i,n){var r=t[i];t[i]=t[n],t[n]=r}function n(t,i){return t<i?-1:t>i?1:0}var r=function(t){void 0===t&&(t=9),this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function a(t,i,n){if(!n)return i.indexOf(t);for(var r=0;r<i.length;r++)if(n(t,i[r]))return r;return-1}function e(t,i){h(t,0,t.children.length,i,t)}function h(t,i,n,r,a){a||(a=p(null)),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(var e=i;e<n;e++){var h=t.children[e];o(a,t.leaf?r(h):h)}return a}function o(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function s(t,i){return t.minX-i.minX}function l(t,i){return t.minY-i.minY}function u(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function c(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function m(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function p(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function d(i,n,r,a,e){for(var h=[n,r];h.length;)if(!((r=h.pop())-(n=h.pop())<=a)){var o=n+Math.ceil((r-n)/a/2)*a;t(i,o,n,r,e),h.push(n,o,o,r)}}return r.prototype.all=function(){return this._all(this.data,[])},r.prototype.search=function(t){var i=this.data,n=[];if(!m(t,i))return n;for(var r=this.toBBox,a=[];i;){for(var e=0;e<i.children.length;e++){var h=i.children[e],o=i.leaf?r(h):h;m(t,o)&&(i.leaf?n.push(h):c(t,o)?this._all(h,n):a.push(h))}i=a.pop()}return n},r.prototype.collides=function(t){var i=this.data;if(!m(t,i))return!1;for(var n=[];i;){for(var r=0;r<i.children.length;r++){var a=i.children[r],e=i.leaf?this.toBBox(a):a;if(m(t,e)){if(i.leaf||c(t,e))return!0;n.push(a)}}i=n.pop()}return!1},r.prototype.load=function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0;i<t.length;i++)this.insert(t[i]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},r.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},r.prototype.clear=function(){return this.data=p([]),this},r.prototype.remove=function(t,i){if(!t)return this;for(var n,r,e,h=this.data,o=this.toBBox(t),s=[],l=[];h||s.length;){if(h||(h=s.pop(),r=s[s.length-1],n=l.pop(),e=!0),h.leaf){var u=a(t,h.children,i);if(-1!==u)return h.children.splice(u,1),s.push(h),this._condense(s),this}e||h.leaf||!c(h,o)?r?(n++,h=r.children[n],e=!1):h=null:(s.push(h),l.push(n),n=0,r=h,h=h.children[0])}return this},r.prototype.toBBox=function(t){return t},r.prototype.compareMinX=function(t,i){return t.minX-i.minX},r.prototype.compareMinY=function(t,i){return t.minY-i.minY},r.prototype.toJSON=function(){return this.data},r.prototype.fromJSON=function(t){return this.data=t,this},r.prototype._all=function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},r.prototype._build=function(t,i,n,r){var a,h=n-i+1,o=this._maxEntries;if(h<=o)return e(a=p(t.slice(i,n+1)),this.toBBox),a;r||(r=Math.ceil(Math.log(h)/Math.log(o)),o=Math.ceil(h/Math.pow(o,r-1))),(a=p([])).leaf=!1,a.height=r;var s=Math.ceil(h/o),l=s*Math.ceil(Math.sqrt(o));d(t,i,n,l,this.compareMinX);for(var u=i;u<=n;u+=l){var f=Math.min(u+l-1,n);d(t,u,f,s,this.compareMinY);for(var c=u;c<=f;c+=s){var m=Math.min(c+s-1,f);a.children.push(this._build(t,c,m,r-1))}}return e(a,this.toBBox),a},r.prototype._chooseSubtree=function(t,i,n,r){for(;r.push(i),!i.leaf&&r.length-1!==n;){for(var a=1/0,e=1/0,h=void 0,o=0;o<i.children.length;o++){var s=i.children[o],l=u(s),f=(c=t,m=s,(Math.max(m.maxX,c.maxX)-Math.min(m.minX,c.minX))*(Math.max(m.maxY,c.maxY)-Math.min(m.minY,c.minY))-l);f<e?(e=f,a=l<a?l:a,h=s):f===e&&l<a&&(a=l,h=s)}i=h||i.children[0]}var c,m;return i},r.prototype._insert=function(t,i,n){var r=n?t:this.toBBox(t),a=[],e=this._chooseSubtree(r,this.data,i,a);for(e.children.push(t),o(e,r);i>=0&&a[i].children.length>this._maxEntries;)this._split(a,i),i--;this._adjustParentBBoxes(r,a,i)},r.prototype._split=function(t,i){var n=t[i],r=n.children.length,a=this._minEntries;this._chooseSplitAxis(n,a,r);var h=this._chooseSplitIndex(n,a,r),o=p(n.children.splice(h,n.children.length-h));o.height=n.height,o.leaf=n.leaf,e(n,this.toBBox),e(o,this.toBBox),i?t[i-1].children.push(o):this._splitRoot(n,o)},r.prototype._splitRoot=function(t,i){this.data=p([t,i]),this.data.height=t.height+1,this.data.leaf=!1,e(this.data,this.toBBox)},r.prototype._chooseSplitIndex=function(t,i,n){for(var r,a,e,o,s,l,f,c=1/0,m=1/0,p=i;p<=n-i;p++){var d=h(t,0,p,this.toBBox),x=h(t,p,n,this.toBBox),v=(a=d,e=x,o=void 0,s=void 0,l=void 0,f=void 0,o=Math.max(a.minX,e.minX),s=Math.max(a.minY,e.minY),l=Math.min(a.maxX,e.maxX),f=Math.min(a.maxY,e.maxY),Math.max(0,l-o)*Math.max(0,f-s)),M=u(d)+u(x);v<c?(c=v,r=p,m=M<m?M:m):v===c&&M<m&&(m=M,r=p)}return r||n-i},r.prototype._chooseSplitAxis=function(t,i,n){var r=t.leaf?this.compareMinX:s,a=t.leaf?this.compareMinY:l;this._allDistMargin(t,i,n,r)<this._allDistMargin(t,i,n,a)&&t.children.sort(r)},r.prototype._allDistMargin=function(t,i,n,r){t.children.sort(r);for(var a=this.toBBox,e=h(t,0,i,a),s=h(t,n-i,n,a),l=f(e)+f(s),u=i;u<n-i;u++){var c=t.children[u];o(e,t.leaf?a(c):c),l+=f(e)}for(var m=n-i-1;m>=i;m--){var p=t.children[m];o(s,t.leaf?a(p):p),l+=f(s)}return l},r.prototype._adjustParentBBoxes=function(t,i,n){for(var r=n;r>=0;r--)o(i[r],t)},r.prototype._condense=function(t){for(var i=t.length-1,n=void 0;i>=0;i--)0===t[i].children.length?i>0?(n=t[i-1].children).splice(n.indexOf(t[i]),1):this.clear():e(t[i],this.toBBox)},r}()}}]);