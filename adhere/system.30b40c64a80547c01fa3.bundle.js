/*! For license information please see system.30b40c64a80547c01fa3.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[1865],{11865:(t,i,e)=>{e.d(i,{mA:()=>b});var n=function(t,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])},n(t,i)};Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,i){var e=arguments;if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),o=1;o<arguments.length;o++){var s=e[o];if(null!=s)for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},writable:!0,configurable:!0});var o=Object.prototype.hasOwnProperty,s="undefined"!=typeof Symbol?Symbol.toStringTag:void 0;function r(t){if(!function(t){var i=typeof t;return null!==t&&("object"===i||"function"===i)}(t))return!1;var i=function(t){if(null===t)return void 0===t?"[object Undefined]":"[object Null]";if(!s||!(s in Object(t)))return toString.call(t);var i=o.call(t,s),e=t[s],n=!1;try{t[s]=void 0,n=!0}catch(t){}var r=Object.prototype.toString.call(t);return n&&(i?t[s]=e:delete t[s]),r}(t);return"[object Function]"===i||"[object AsyncFunction]"===i||"[object GeneratorFunction]"===i||"[object Proxy]"===i}function a(t){return"[object Number]"===Object.prototype.toString.call(t)&&!isNaN(t)}function h(t){for(var i=arguments,e=[],n=1;n<arguments.length;n++)e[n-1]=i[n];return Object.assign.apply(Object,function(){for(var t=arguments,i=0,e=0,n=arguments.length;e<n;e++)i+=t[e].length;var o=Array(i),s=0;for(e=0;e<n;e++)for(var r=arguments[e],a=0,h=r.length;a<h;a++,s++)o[s]=r[a];return o}([t],e))}function p(t){console.warn("wind-layer: "+t)}function c(t){return null!=t&&!isNaN(t)}var l=function(){function t(t,i){this.u=t,this.v=i,this.m=this.magnitude()}return t.prototype.magnitude=function(){return Math.sqrt(this.u*this.u+this.v*this.v)},t.prototype.directionTo=function(){var t=Math.atan2(this.u,this.v)*(180/Math.PI);return t<0&&(t+=360),t},t.prototype.directionFrom=function(){return(this.directionTo()+180)%360},t}(),d=function(){function t(t){this.grid=[],this.xmin=t.xmin,this.xmax=t.xmax,this.ymin=t.ymin,this.ymax=t.ymax,this.cols=t.cols,this.rows=t.rows,this.us=t.us,this.vs=t.vs,this.deltaX=t.deltaX,this.deltaY=t.deltaY,this.deltaY<0&&this.ymin<this.ymax?console.warn("[wind-core]: The data is flipY"):(this.ymin=Math.min(t.ymax,t.ymin),this.ymax=Math.max(t.ymax,t.ymin)),this.isFields=!0;var i=Math.ceil((this.xmax-this.xmin)/t.deltaX),e=Math.ceil((this.ymax-this.ymin)/t.deltaY);i===this.cols&&e===this.rows||console.warn("[wind-core]: The data grid not equal"),this.isContinuous=Math.floor(this.cols*t.deltaX)>=360,this.wrappedX="wrappedX"in t?t.wrappedX:this.xmax>180,this.grid=this.buildGrid(),this.range=this.calculateRange()}return t.prototype.buildGrid=function(){for(var t=[],i=0,e=this,n=e.rows,o=e.cols,s=e.us,r=e.vs,a=0;a<n;a++){for(var h=[],p=0;p<o;p++,i++){var c=s[i],d=r[i],u=this.isValid(c)&&this.isValid(d);h[p]=u?new l(c,d):null}this.isContinuous&&h.push(h[0]),t[a]=h}return t},t.prototype.release=function(){this.grid=[]},t.prototype.extent=function(){return[this.xmin,this.ymin,this.xmax,this.ymax]},t.prototype.bilinearInterpolateVector=function(t,i,e,n,o,s){var r=1-t,a=1-i,h=r*a,p=t*a,c=r*i,d=t*i,u=e.u*h+n.u*p+o.u*c+s.u*d,f=e.v*h+n.v*p+o.v*c+s.v*d;return new l(u,f)},t.prototype.calculateRange=function(){if(this.grid&&this.grid[0]){for(var t,i,e=this.grid.length,n=this.grid[0].length,o=0;o<e;o++)for(var s=0;s<n;s++){var r=this.grid[o][s];if(null!==r){var a=r.m||r.magnitude();void 0===t?t=a:void 0===i?(i=a,t=Math.min(t,i),i=Math.max(t,i)):(t=Math.min(a,t),i=Math.max(a,i))}}return[t,i]}},t.prototype.isValid=function(t){return null!=t},t.prototype.getWrappedLongitudes=function(){var t=this.xmin,i=this.xmax;return this.wrappedX&&(this.isContinuous?(t=-180,i=180):(i=this.xmax-360,t=this.xmin-360)),[t,i]},t.prototype.contains=function(t,i){var e,n=this.getWrappedLongitudes(),o=n[0],s=n[1],r=t>=o&&t<=s;return e=this.deltaY>=0?i>=this.ymin&&i<=this.ymax:i>=this.ymax&&i<=this.ymin,r&&e},t.prototype.getDecimalIndexes=function(t,i){var e,n;return[((e=t-this.xmin)-(n=360)*Math.floor(e/n))/this.deltaX,(this.ymax-i)/this.deltaY]},t.prototype.valueAt=function(t,i){if(!this.contains(t,i))return null;var e=this.getDecimalIndexes(t,i),n=Math.floor(e[0]),o=Math.floor(e[1]),s=this.clampColumnIndex(n),r=this.clampRowIndex(o);return this.valueAtIndexes(s,r)},t.prototype.interpolatedValueAt=function(t,i){if(!this.contains(t,i))return null;var e=this.getDecimalIndexes(t,i),n=e[0],o=e[1];return this.interpolatePoint(n,o)},t.prototype.hasValueAt=function(t,i){return null!==this.valueAt(t,i)},t.prototype.interpolatePoint=function(t,i){var e=this.getFourSurroundingIndexes(t,i),n=e[0],o=e[1],s=e[2],r=e[3],a=this.getFourSurroundingValues(n,o,s,r);if(a){var h=a[0],p=a[1],c=a[2],l=a[3];return this.bilinearInterpolateVector(t-n,i-s,h,p,c,l)}return null},t.prototype.clampColumnIndex=function(t){var i=t;t<0&&(i=0);var e=this.cols-1;return t>e&&(i=e),i},t.prototype.clampRowIndex=function(t){var i=t;t<0&&(i=0);var e=this.rows-1;return t>e&&(i=e),i},t.prototype.getFourSurroundingIndexes=function(t,i){var e=Math.floor(t),n=e+1;this.isContinuous&&n>=this.cols&&(n=0),n=this.clampColumnIndex(n);var o=this.clampRowIndex(Math.floor(i));return[e,n,o,this.clampRowIndex(o+1)]},t.prototype.getFourSurroundingValues=function(t,i,e,n){var o;if(o=this.grid[e]){var s=o[t],r=o[i];if(this.isValid(s)&&this.isValid(r)&&(o=this.grid[n])){var a=o[t],h=o[i];if(this.isValid(a)&&this.isValid(h))return[s,r,a,h]}}return null},t.prototype.valueAtIndexes=function(t,i){return this.grid[i][t]},t.prototype.lonLatAtIndexes=function(t,i){return[this.longitudeAtX(t),this.latitudeAtY(i)]},t.prototype.longitudeAtX=function(t){var i=this.deltaX/2,e=this.xmin+i+t*this.deltaX;return this.wrappedX&&(e=e>180?e-360:e),e},t.prototype.latitudeAtY=function(t){var i=this.deltaY/2;return this.ymax-i-t*this.deltaY},t.prototype.randomize=function(t,i,e,n){void 0===t&&(t={});var o=Math.random()*(i||this.cols)|0,s=Math.random()*(e||this.rows)|0,r=n([o,s]);return null!==r?(t.x=r[0],t.y=r[1]):(t.x=this.longitudeAtX(o),t.y=this.latitudeAtY(s)),t},t.prototype.checkFields=function(){return this.isFields},t.prototype.startBatchInterpolate=function(t,i,e){},t}(),u={globalAlpha:.9,lineWidth:1,colorScale:"#fff",velocityScale:.04,maxAge:90,paths:800,frameRate:20,useCoordsDraw:!0,gpet:!0};function f(t,i,e,n){return Math.max(0,Math.min(n.length-1,Math.round((t-i)/(e-i)*(n.length-1))))}var v,m=function(){function t(t,i,e){if(this.particles=[],this.generated=!1,this.ctx=t,!this.ctx)throw new Error("ctx error");this.animate=this.animate.bind(this),this.setOptions(i),e&&this.updateData(e)}return t.prototype.setOptions=function(t){this.options=Object.assign({},u,t);var i=this.ctx.canvas,e=i.width,n=i.height;"particleAge"in t&&!("maxAge"in t)&&a(this.options.particleAge)&&(this.options.maxAge=this.options.particleAge),"particleMultiplier"in t&&!("paths"in t)&&a(this.options.particleMultiplier)&&(this.options.paths=Math.round(e*n*this.options.particleMultiplier)),this.prerender()},t.prototype.getOptions=function(){return this.options},t.prototype.updateData=function(t){this.field=t,this.generated&&(this.particles=this.prepareParticlePaths())},t.prototype.moveParticles=function(){for(var t=this.ctx.canvas,i=t.width,e=t.height,n=this.particles,o=this.options.maxAge,s=r(this.options.velocityScale)?this.options.velocityScale():this.options.velocityScale,a=0,h=n.length;a<h;a++){var p=n[a];p.age>o&&(p.age=0,this.field.randomize(p,i,e,this.unproject));var c=p.x,l=p.y,d=this.field.interpolatedValueAt(c,l);if(null===d)p.age=o;else{var u=c+d.u*s,f=l+d.v*s;this.field.hasValueAt(u,f)?(p.xt=u,p.yt=f,p.m=d.m):(p.x=u,p.y=f,p.age=o)}p.age++}},t.prototype.fadeIn=function(){var t=this.ctx.globalCompositeOperation;this.ctx.globalCompositeOperation="destination-in",this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.globalCompositeOperation=t},t.prototype.drawParticles=function(){var t,i,e=this.particles;this.fadeIn(),this.ctx.globalAlpha=this.options.globalAlpha,this.ctx.fillStyle="rgba(0, 0, 0, "+this.options.globalAlpha+")",this.ctx.lineWidth=a(this.options.lineWidth)?this.options.lineWidth:1,this.ctx.strokeStyle=null!=(i=this.options.colorScale)&&("string"==typeof i||null!==i.constructor&&i.constructor===String)?this.options.colorScale:"#fff";var n=0,o=e.length;if(this.field&&o>0){var s=void 0,r=void 0;for(c(this.options.minVelocity)&&c(this.options.maxVelocity)?(s=this.options.minVelocity,r=this.options.maxVelocity):(s=(t=this.field.range)[0],r=t[1]);n<o;n++)this[this.options.useCoordsDraw?"drawCoordsParticle":"drawPixelParticle"](e[n],s,r)}},t.prototype.drawPixelParticle=function(t,i,e){var n=[t.x,t.y],o=[t.xt,t.yt];if(o&&n&&c(o[0])&&c(o[1])&&c(n[0])&&c(n[1])&&t.age<=this.options.maxAge){if(this.ctx.beginPath(),this.ctx.moveTo(n[0],n[1]),this.ctx.lineTo(o[0],o[1]),r(this.options.colorScale))this.ctx.strokeStyle=this.options.colorScale(t.m);else if(Array.isArray(this.options.colorScale)){var s=f(t.m,i,e,this.options.colorScale);this.ctx.strokeStyle=this.options.colorScale[s]}r(this.options.lineWidth)&&(this.ctx.lineWidth=this.options.lineWidth(t.m)),t.x=t.xt,t.y=t.yt,this.ctx.stroke()}},t.prototype.drawCoordsParticle=function(t,i,e){var n=[t.x,t.y],o=[t.xt,t.yt];if(o&&n&&c(o[0])&&c(o[1])&&c(n[0])&&c(n[1])&&this.intersectsCoordinate(o)&&t.age<=this.options.maxAge){var s=this.project(n),a=this.project(o);if(s&&a){if(this.ctx.beginPath(),this.ctx.moveTo(s[0],s[1]),this.ctx.lineTo(a[0],a[1]),t.x=t.xt,t.y=t.yt,r(this.options.colorScale))this.ctx.strokeStyle=this.options.colorScale(t.m);else if(Array.isArray(this.options.colorScale)){var h=f(t.m,i,e,this.options.colorScale);this.ctx.strokeStyle=this.options.colorScale[h]}r(this.options.lineWidth)&&(this.ctx.lineWidth=this.options.lineWidth(t.m)),this.ctx.stroke()}}},t.prototype.prepareParticlePaths=function(){var t=this.ctx.canvas,i=t.width,e=t.height,n="function"==typeof this.options.paths?this.options.paths(this):this.options.paths,o=[];if(!this.field)return[];"startBatchInterpolate"in this.field&&this.field.startBatchInterpolate(i,e,this.unproject);for(var s=0;s<n;s++)o.push(this.field.randomize({age:this.randomize()},i,e,this.unproject));return o},t.prototype.randomize=function(){return Math.floor(Math.random()*this.options.maxAge)},t.prototype.project=function(){for(var t=arguments,i=[],e=0;e<arguments.length;e++)i[e]=t[e];throw new Error("project must be overriden")},t.prototype.unproject=function(){for(var t=arguments,i=[],e=0;e<arguments.length;e++)i[e]=t[e];throw new Error("unproject must be overriden")},t.prototype.intersectsCoordinate=function(t){throw new Error("must be overriden")},t.prototype.clearCanvas=function(){this.stop(),this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.forceStop=!1},t.prototype.start=function(){this.starting=!0,this.forceStop=!1,this._then=Date.now(),this.animate()},t.prototype.stop=function(){cancelAnimationFrame(this.animationLoop),this.starting=!1,this.forceStop=!0},t.prototype.animate=function(){this.animationLoop&&cancelAnimationFrame(this.animationLoop),this.animationLoop=requestAnimationFrame(this.animate);var t=Date.now(),i=t-this._then;i>this.options.frameRate&&(this._then=t-i%this.options.frameRate,this.render())},t.prototype.prerender=function(){this.generated=!1,this.field&&(this.particles=this.prepareParticlePaths(),this.generated=!0,this.starting||this.forceStop||(this.starting=!0,this._then=Date.now(),this.animate()))},t.prototype.render=function(){this.moveParticles(),this.drawParticles(),this.postrender()},t.prototype.postrender=function(){},t.Field=d,t}(),y="undefined"==typeof window?e.g:window,g={context:"2d",paneName:"mapPane",opacity:1,zIndex:1,windOptions:{}},x=null===(v=y)||void 0===v?void 0:v.BMap;if(!x)throw new Error("Before using this plugin, you must first introduce the BMap JS API <http://lbsyun.baidu.com/index.php?title=jspopular3.0>");var w=function(t){function i(i,e){void 0===e&&(e={});var n=this,o=h({},g,e);return(n=t.call(this,e)||this).options=o,n.paneName=n.options.paneName,n.context=n.options.context,n.zIndex=n.options.zIndex,n.mixBlendMode=n.options.mixBlendMode||null,n.enableMassClear=n.options.enableMassClear,n.canvas=null,n.wind=null,n.start=n.start.bind(n),n.stop=n.stop.bind(n),n.handleResize=n.handleResize.bind(n),n.pickWindOptions(),i&&n.setData(i),n}return function(t,i){function e(){this.constructor=t}n(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}(i,t),i.prototype.appendTo=function(t){if(!t)throw new Error("not map object");t.addOverlay(this)},i.prototype.initialize=function(t){this.map=t;var i=this.canvas=document.createElement("canvas");return i.style.cssText="position:absolute; left:0; top:0; z-index: "+this.zIndex+" ;user-select:none;",i.style.mixBlendMode=this.mixBlendMode,this.adjustSize(),t.getPanes()[this.paneName].appendChild(i),this.bindEvent(),this.canvas},i.prototype.handleResize=function(){this.adjustSize(),this._draw()},i.prototype.bindEvent=function(){this.map.addEventListener("resize",this.handleResize),this.map.addEventListener("dragstart",this.stop),this.map.addEventListener("dragend",this.start),this.map.addEventListener("movestart",this.stop),this.map.addEventListener("moveend",this.start),this.map.addEventListener("zoomstart",this.stop),this.map.addEventListener("zoomend",this.start),this.map.addEventListener("touchstart",this.stop),this.map.addEventListener("touchend",this.start)},i.prototype.unbindEvent=function(){this.map.removeEventListener("resize",this.handleResize),this.map.removeEventListener("dragstart",this.stop),this.map.removeEventListener("dragend",this.start),this.map.removeEventListener("movestart",this.stop),this.map.removeEventListener("moveend",this.start),this.map.removeEventListener("zoomstart",this.stop),this.map.removeEventListener("zoomend",this.start),this.map.removeEventListener("touchstart",this.stop),this.map.removeEventListener("touchend",this.start)},i.prototype.start=function(){this.wind&&this.wind.start()},i.prototype.stop=function(){this.wind&&this.wind.stop()},i.prototype.adjustSize=function(){var t=this.map.getSize(),i=this.canvas,e=window.devicePixelRatio||1;null!==i&&(i.width=t.width*e,i.height=t.height*e,"2d"===this.context&&i.getContext(this.context).scale(e,e),i.style.width=t.width+"px",i.style.height=t.height+"px")},i.prototype.draw=function(){this._draw()},i.prototype._draw=function(){var t=this.map,i=t.getSize(),e=t.getCenter();if(e&&this.canvas){var n=t.pointToOverlayPixel(e);this.canvas.style.left=n.x-i.width/2+"px",this.canvas.style.top=n.y-i.height/2+"px",this.dispatchEvent("draw"),this.options.update&&this.options.update.call(this),this.render(this.canvas)}},i.prototype.render=function(t){if(!this.getData()||!this.map)return this;var i=this.getWindOptions();if(t&&!this.wind){var e=this.getData(),n=this.getContext();n&&(this.wind=new m(n,i,e),this.wind.project=this.project.bind(this),this.wind.unproject=this.unproject.bind(this),this.wind.intersectsCoordinate=this.intersectsCoordinate.bind(this),this.wind.postrender=function(){})}return this.wind&&(this.wind.prerender(),this.wind.render()),this},i.prototype.getContext=function(){if(null!==this.canvas)return this.canvas.getContext(this.context)},i.prototype.getContainer=function(){return this.canvas},i.prototype.getProjection=function(){var t=this.map,i=t.getMapType();return i.getProjection?i.getProjection():{lngLatToPoint:function(i){var e=t.lnglatToMercator(i.lng,i.lat);return{x:e[0],y:e[1]}}}},i.prototype.transferToMercator=function(t){var i=this.getProjection();if(t[0]<-180||t[0]>180||t[1]<-90||t[1]>90)return t;var e=i.lngLatToPoint({lng:t[0],lat:t[1]});return[e.x,e.y]},i.prototype.projectInner=function(t){var i=this.map,e=1;"2d"!=this.context&&(e=window.devicePixelRatio);var n,o,s=this.getProjection();n=i.getMapType().getProjection?s.lngLatToPoint(i.getCenter()):{x:i.getCenter().lng,y:i.getCenter().lat},o=s.getZoomUnits?s.getZoomUnits(i.getZoom()):Math.pow(2,18-i.getZoom());var r=new x.Pixel(n.x-i.getSize().width/2*o,n.y+i.getSize().height/2*o);return[(t[0]-r.x)/o*e,(r.y-t[1])/o*e]},i.prototype.project=function(t){var i=this.transferToMercator(t);return this.projectInner(i)},i.prototype.unproject=function(t){var i=this.map.pixelToPoint(new x.Pixel(t[0],t[1]));return[i.lng,i.lat]},i.prototype.intersectsCoordinate=function(t){return this.map.getBounds().containsPoint(new x.Point(t[0],t[1]))},i.prototype.pickWindOptions=function(){var t=this;Object.keys(u).forEach((function(i){i in t.options&&(void 0===t.options.windOptions&&(t.options.windOptions={}),t.options.windOptions[i]=t.options[i])}))},i.prototype.getData=function(){return this.field},i.prototype.setData=function(t){var i,e;return t&&t.checkFields&&t.checkFields()?this.field=t:(e=t,Array.isArray(e)?this.field=function(t){var i,e;if(console.time("format-data"),t.forEach((function(t){switch(t.header.parameterCategory+","+t.header.parameterNumber){case"1,2":case"2,2":i=t;break;case"1,3":case"2,3":e=t}})),e&&i){var n=i.header,o=new d({xmin:n.lo1,ymin:n.la1,xmax:n.lo2,ymax:n.la2,deltaX:n.dx,deltaY:n.dy,cols:n.nx,rows:n.ny,us:i.data,vs:e.data});return console.timeEnd("format-data"),o}}(t):console.error("Illegal data")),this.map&&this.canvas&&this.field&&(null===(i=null===this||void 0===this?void 0:this.wind)||void 0===i||i.updateData(this.field),this.render(this.canvas)),this},i.prototype.updateParams=function(t){return void 0===t&&(t={}),p("will move to setWindOptions"),this.setWindOptions(t),this},i.prototype.getParams=function(){return p("will move to getWindOptions"),this.getWindOptions()},i.prototype.setWindOptions=function(t){var i=this.options.windOptions||{};this.options=h(this.options,{windOptions:h(i,t||{})}),this.wind&&(this.wind.setOptions(this.options.windOptions),this.wind.prerender())},i.prototype.getWindOptions=function(){return this.options.windOptions||{}},i.prototype.show=function(){this.canvas?this.canvas.style.display="block":this.map.addOverlay(this)},i.prototype.hide=function(){this.canvas&&(this.canvas.style.display="none")},i.prototype.setZIndex=function(t){this.zIndex=t,this.canvas&&(this.canvas.style.zIndex=String(this.zIndex))},i.prototype.getZIndex=function(){return this.zIndex},i}(x.Overlay),b=w}}]);