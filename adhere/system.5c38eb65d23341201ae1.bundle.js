(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[2889],{29763:function(){var t=function(){var t,e={defaultRadius:40,defaultRenderer:"canvas2d",defaultGradient:{.45:"rgb(0,0,255)",.55:"rgb(0,255,255)",.65:"rgb(0,255,0)",.95:"yellow",1:"rgb(255,0,0)"},defaultMaxOpacity:1,defaultMinOpacity:0,defaultBlur:.85,defaultXField:"x",defaultYField:"y",defaultValueField:"value",plugins:{}},a=(t=e.defaultRadius,i.prototype={_organiseData:function(e,a){var i=e[this._xField],n=e[this._yField],s=this._radi,r=this._data,o=this._max,h=this._min,l=e[this._valueField]||1;e=e.radius||this._cfgRadius||t;return r[i]||(r[i]=[],s[i]=[]),r[i][n]?r[i][n]+=l:(r[i][n]=l,s[i][n]=e),r[i][n]>o?(a?this.setDataMax(r[i][n]):this._max=r[i][n],!1):{x:i,y:n,value:l,radius:e,min:h,max:o}},_unOrganizeData:function(){var t,e=[],a=this._data,i=this._radi;for(t in a)for(var n in a[t])e.push({x:t,y:n,radius:i[t][n],value:a[t][n]});return{min:this._min,max:this._max,data:e}},_onExtremaChange:function(){this._coordinator.emit("extremachange",{min:this._min,max:this._max})},addData:function(){if(0<arguments[0].length)for(var t=arguments[0],e=t.length;e--;)this.addData.call(this,t[e]);else{var a=this._organiseData(arguments[0],!0);a&&this._coordinator.emit("renderpartial",{min:this._min,max:this._max,data:[a]})}return this},setData:function(t){var e=t.data,a=e.length;this._data=[],this._radi=[];for(var i=0;i<a;i++)this._organiseData(e[i],!1);return this._max=t.max,this._min=t.min||0,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},removeData:function(){},setDataMax:function(t){return this._max=t,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},setDataMin:function(t){return this._min=t,this._onExtremaChange(),this._coordinator.emit("renderall",this._getInternalData()),this},setCoordinator:function(t){this._coordinator=t},_getInternalData:function(){return{max:this._max,min:this._min,data:this._data,radi:this._radi}},getData:function(){return this._unOrganizeData()}},i);function i(t){this._coordinator={},this._data=[],this._radi=[],this._min=0,this._max=1,this._xField=t.xField||t.defaultXField,this._yField=t.yField||t.defaultYField,this._valueField=t.valueField||t.defaultValueField,t.radius&&(this._cfgRadius=t.radius)}n=function(t){var e,a=t.gradient||t.defaultGradient,i=(t=document.createElement("canvas")).getContext("2d"),n=(t.width=256,t.height=1,i.createLinearGradient(0,0,256,1));for(e in a)n.addColorStop(e,a[e]);return i.fillStyle=n,i.fillRect(0,0,256,1),i.getImageData(0,0,256,1).data},r.prototype={renderPartial:function(t){this._drawAlpha(t),this._colorize()},renderAll:function(t){this._clear(),this._drawAlpha(function(t){for(var e=[],a=t.min,i=t.max,n=t.radi,s=(t=t.data,Object.keys(t)),r=s.length;r--;)for(var o=s[r],h=Object.keys(t[o]),l=h.length;l--;){var d=h[l],u=t[o][d],c=n[o][d];e.push({x:o,y:d,value:u,radius:c})}return{min:a,max:i,data:e}}(t)),this._colorize()},_updateGradient:function(t){this._palette=n(t)},updateConfig:function(t){t.gradient&&this._updateGradient(t),this._setStyles(t)},setDimensions:function(t,e){this._width=t,this._height=e,this.canvas.width=this.shadowCanvas.width=t,this.canvas.height=this.shadowCanvas.height=e},_clear:function(){this.shadowCtx.clearRect(0,0,this._width,this._height),this.ctx.clearRect(0,0,this._width,this._height)},_setStyles:function(t){this._blur=0==t.blur?0:t.blur||t.defaultBlur,t.backgroundColor&&(this.canvas.style.backgroundColor=t.backgroundColor),this._opacity=255*(t.opacity||0),this._maxOpacity=255*(t.maxOpacity||t.defaultMaxOpacity),this._minOpacity=255*(t.minOpacity||t.defaultMinOpacity),this._useGradientOpacity=!!t.useGradientOpacity},_drawAlpha:function(t){for(var e,a,i,n,s,r,o=this._min=t.min,h=this._max=t.max,l=(t=t.data||[]).length,d=1-this._blur;l--;){var u,c=(f=t[l]).x,_=f.y,p=f.radius,f=Math.min(f.value,h),m=(c=c-p,_=_-p,this.shadowCtx);this._templates[p]?u=this._templates[p]:this._templates[p]=(e=p,a=d,n=i=void 0,n=(i=document.createElement("canvas")).getContext("2d"),r=s=e,i.width=i.height=2*e,1==a?(n.beginPath(),n.arc(s,r,e,0,2*Math.PI,!1),n.fillStyle="rgba(0,0,0,1)",n.fill()):((a=n.createRadialGradient(s,r,e*a,s,r,e)).addColorStop(0,"rgba(0,0,0,1)"),a.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=a,n.fillRect(0,0,2*e,2*e)),u=i),m.globalAlpha=(f-o)/(h-o),m.drawImage(u,c,_),c<this._renderBoundaries[0]&&(this._renderBoundaries[0]=c),_<this._renderBoundaries[1]&&(this._renderBoundaries[1]=_),c+2*p>this._renderBoundaries[2]&&(this._renderBoundaries[2]=c+2*p),_+2*p>this._renderBoundaries[3]&&(this._renderBoundaries[3]=_+2*p)}},_colorize:function(){for(var t=this._renderBoundaries[0],e=this._renderBoundaries[1],a=this._renderBoundaries[2]-t,i=this._renderBoundaries[3]-e,n=this._width,s=this._height,r=this._opacity,o=this._maxOpacity,h=this._minOpacity,l=this._useGradientOpacity,d=(n=this.shadowCtx.getImageData(t=t<0?0:t,e=e<0?0:e,a=n<t+a?n-t:a,i=s<e+i?s-e:i)).data,u=d.length,c=this._palette,_=3;_<u;_+=4){var p=d[_],f=4*p;f&&(p=0<r?r:p<o?p<h?h:p:o,d[_-3]=c[f],d[_-2]=c[1+f],d[_-1]=c[2+f],d[_]=l?c[3+f]:p)}this.ctx.putImageData(n,t,e),this._renderBoundaries=[1e3,1e3,0,0]},getValueAt:function(t){t=this.shadowCtx.getImageData(t.x,t.y,1,1).data[3];var e=this._max,a=this._min;return Math.abs(e-a)*(t/255)>>0},getDataURL:function(){return this.canvas.toDataURL()}};var n,s=r;function r(t){var e=t.element,a=this.shadowCanvas=document.createElement("canvas"),i=this.canvas=t.canvas||document.createElement("canvas"),s=(this._renderBoundaries=[1e4,1e4,0,0],getComputedStyle(t.element)||{});i.className="heatmap-canvas",this._width=i.width=a.width=+s.width.replace(/px/,""),this._height=i.height=a.height=+s.height.replace(/px/,""),this.shadowCtx=a.getContext("2d"),this.ctx=i.getContext("2d"),i.style.cssText=a.style.cssText="position:absolute;left:0;top:0;",e.style.position="relative",e.appendChild(i),this._palette=n(t),this._templates={},this._setStyles(t)}o=!1;var o,h,l,d=o="canvas2d"===e.defaultRenderer?s:o,u=function(){for(var t={},e=arguments.length,a=0;a<e;a++){var i,n=arguments[a];for(i in n)t[i]=n[i]}return t},c=(_.prototype={on:function(t,e,a){var i=this.cStore;i[t]||(i[t]=[]),i[t].push((function(t){return e.call(a,t)}))},emit:function(t,e){var a=this.cStore;if(a[t])for(var i=a[t].length,n=0;n<i;n++)(0,a[t][n])(e)}},h=_,l=function(t){var e=t._renderer,a=t._coordinator,i=t._store;a.on("renderpartial",e.renderPartial,e),a.on("renderall",e.renderAll,e),a.on("extremachange",(function(e){t._config.onExtremaChange&&t._config.onExtremaChange({min:e.min,max:e.max,gradient:t._config.gradient||t._config.defaultGradient})})),i.setCoordinator(a)},p.prototype={addData:function(){return this._store.addData.apply(this._store,arguments),this},removeData:function(){return this._store.removeData&&this._store.removeData.apply(this._store,arguments),this},setData:function(){return this._store.setData.apply(this._store,arguments),this},setDataMax:function(){return this._store.setDataMax.apply(this._store,arguments),this},setDataMin:function(){return this._store.setDataMin.apply(this._store,arguments),this},configure:function(t){return this._config=u(this._config,t),this._renderer.updateConfig(this._config),this._coordinator.emit("renderall",this._store._getInternalData()),this},repaint:function(){return this._coordinator.emit("renderall",this._store._getInternalData()),this},getData:function(){return this._store.getData()},getDataURL:function(){return this._renderer.getDataURL()},getValueAt:function(t){return this._store.getValueAt?this._store.getValueAt(t):this._renderer.getValueAt?this._renderer.getValueAt(t):null}},p);function _(){this.cStore={}}function p(){var t=this._config=u(e,arguments[0]||{});if(this._coordinator=new h,t.plugin){var i=t.plugin;if(!e.plugins[i])throw new Error("Plugin '"+i+"' not found. Maybe it was not registered.");i=e.plugins[i],this._renderer=new i.renderer(t),this._store=new i.store(t)}else this._renderer=new d(t),this._store=new a(t);l(this)}return{create:function(t){return new c(t)},register:function(t,a){e.plugins[t]=a}}}(),e=window.BMapLib=e||{};!function(){var a=e.HeatmapOverlay=function(t){this.conf=t,this.conf.visible=void 0===t.visible||t.visible,this.heatmap=null,this.latlngs=[],this.bounds=null};function i(){var t=document.createElement("canvas");return t.getContext&&t.getContext("2d")}(a.prototype=new BMap.Overlay).initialize=function(e){this._map=e;var a,n=document.createElement("div");return n.style.position="absolute",n.style.top=0,n.style.left=0,n.style.border=0,n.style.width=this._map.getSize().width+"px",n.style.height=this._map.getSize().height+"px",this.conf.element=n,i()&&(e.getPanes().mapPane.appendChild(n),this.conf.valueField=this.conf.valueField||"count",this.heatmap=t.create(this.conf),a=this,e.addEventListener("resize",(function(t){t=t.size,n.style.width=t.width+"px",n.style.height=t.height+"px",a.heatmap._renderer.setDimensions(t.width,t.height),a.draw()})),this._div=n),n},a.prototype.draw=function(){if(i()){var t=this._map.getBounds();if(!t.equals(this.bounds)){this.bounds=t;var e=this._map.pointToOverlayPixel(t.getNorthEast()),a=this._map.pointToOverlayPixel(t.getSouthWest()),n=e.y,s=a.x,r=a.y-e.y;e=e.x-a.x;if(this.conf.element.style.left=s+"px",this.conf.element.style.top=n+"px",this.conf.element.style.width=e+"px",this.conf.element.style.height=r+"px",0<this.latlngs.length){this.heatmap.removeData();for(var o=this.latlngs.length,h={max:this.heatmap._store.getData().max,data:[]};o--;){var l=this.latlngs[o].latlng;t.containsPoint(l)&&(l=this._map.pointToOverlayPixel(l),s=this._map.pointToOverlayPixel(t.getSouthWest()).x,n=this._map.pointToOverlayPixel(t.getNorthEast()).y,l=new BMap.Pixel(l.x-s,l.y-n),l=this.pixelTransform(l),h.data.push({x:l.x,y:l.y,count:this.latlngs[o].c}))}this.conf.radiusChangeByZoom&&(this.heatmap._store._cfgRadius=this.conf.radiusChangeByZoom(this._map.getZoom())),this.heatmap.setData(h)}}}},a.prototype.pixelTransform=function(t){for(var e=this.heatmap.width,a=this.heatmap.height;t.x<0;)t.x+=e;for(;t.x>e;)t.x-=e;for(;t.y<0;)t.y+=a;for(;t.y>a;)t.y-=a;return t.x=t.x>>0,t.y=t.y>>0,t},a.prototype.setDataSet=function(t){if(this.data=t,i()){var e=this._map.getBounds(),a={max:t.max,data:[]},n=t.data,s=n.length;for(this.latlngs=[],this.heatmap.removeData(),this.conf.radiusChangeByZoom&&(this.heatmap._store._cfgRadius=this.conf.radiusChangeByZoom(this._map.getZoom()));s--;){var r,o,h=new BMap.Point(n[s].lng,n[s].lat);this.latlngs.push({latlng:h,c:n[s].count}),e.containsPoint(h)&&(h=this._map.pointToOverlayPixel(h),o=this._map.pointToOverlayPixel(e.getSouthWest()).x,r=this._map.pointToOverlayPixel(e.getNorthEast()).y,o=new BMap.Pixel(h.x-o,h.y-r),h=this.pixelTransform(o),a.data.push({x:h.x,y:h.y,count:n[s].count}))}this.heatmap.setData(a)}},a.prototype.addDataPoint=function(t,e,a){i()&&(this.data&&this.data.data&&this.data.data.push({lng:t,lat:e,count:a}),t=new BMap.Point(t,e),e=this.pixelTransform(this._map.pointToOverlayPixel(t)),this.heatmap.store.addDataPoint(e.x,e.y,a),this.latlngs.push({latlng:t,c:a}))},a.prototype.toggle=function(){i()&&(!0===this.conf.visible?this.conf.visible=!1:this.conf.visible=!0,this.conf.visible?this.conf.element.style.display="block":this.conf.element.style.display="none")},a.prototype.setOptions=function(t){if(i()){for(var e in t)"radius"==e&&(this.heatmap._store._cfgRadius=t[e]),"opacity"==e&&(t[e]=t[e]/100);this.heatmap.configure(t),this.data&&this.setDataSet(this.data)}}}()},22852:function(t,e,a){"use strict";a.r(e);a(29763);var i,n=(i=function(t,e){return(i=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}))(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e}(BMapLib.HeatmapOverlay);e.default=s}}]);