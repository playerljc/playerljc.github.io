"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[8328],{32943:function(t,e,n){n.d(e,{Z:function(){return o}});var l=n(1821),r=n.n(l),d=n(90171),m="adhere-ui-stickuplayout-item",a=function(t){var e=t.className,n=t.style,l=t.title;t=t.content;return d.createElement("div",{className:r()(m,null!=e?e:""),style:null!=n?n:{}},d.createElement("div",{className:"".concat(m,"-header")},l),d.createElement("div",{className:"".concat(m,"-content")},t))},c=(0,d.memo)(a),u="adhere-ui-stickuplayout",E=function(t,e){var n=t.className,l=t.style,m=t.fixedClassName,a=t.fixedStyle,c=t.innerClassName,E=t.innerStyle,i=t.onChange,o=(t=t.children,(0,d.useRef)(null)),s=(0,d.useRef)(null),p=(0,d.useRef)(null),f=(0,d.useRef)(!1),N=(0,d.useRef)([]),y=(0,d.useRef)(),b=(0,d.useRef)(null),H=(0,d.useRef)();function v(){return"updateInterval"in screen?screen.updateInterval:16.7}function h(){for(var t,e,n=p.current.scrollTop,l=0,r=N.current.length-1;l<=r&&l<=N.current.length-1&&r<=N.current.length-1;){var d,m=N.current[d=r+l>>1];if(n>=m.start&&n<m.end){e=m;break}n<m.start?r=d-1:l=1+d}!e||b.current&&(null==(t=b.current)?void 0:t.index)===e.index||(b.current=e,s.current.innerHTML=e.dom.outerHTML,i&&i(e.index))}function S(){f.current=!1,N.current=[],y.current=null==(e=o.current)?void 0:e.querySelectorAll(".".concat(u,"-item-header"));var t,e,n=0;N.current=[],b.current=null;for(var l=0,r=y.current.length;l<r;l++){var d=y.current[l],m=n,a=l!==r-1?y.current[l+1].offsetTop-d.offsetHeight:p.current.scrollHeight;if(N.current.push({start:m,end:a,dom:d,index:l}),(n=a)>p.current.scrollHeight-p.current.offsetHeight)break}h(),null!=(t=null==(e=p.current)?void 0:e.removeEventListener)&&t.call(e,"scroll",C),null!=(e=null==(t=p.current)?void 0:t.addEventListener)&&e.call(t,"scroll",C)}function g(t,e){t=t.start+y.current[t.index].offsetHeight,0===(e=void 0===e?300:e)?p.current.scrollTop=t:function(t,e){var n,l,r;void 0===t&&(t=0),void 0===e&&(e=300),f.current||("undefined"==typeof window||H.current||(H.current=document.createElement("div"),H.current.className="".concat(u,"-mask"),window.document.body.appendChild(H.current)),f.current=!0,H.current.style.display="block",n=p.current.scrollTop,l=n,r=p.current.scrollHeight/(e/v()+(e%v()!=0?1:0)),"undefined"!=typeof window&&window.requestAnimationFrame((function e(){function d(){f.current=!1,H.current.style.display="none"}n<t?t<l+r?l=t:l+=r:l-r<t?l=t:l-=r,p.current.scrollTop=l,n<t?t<=l?d():"undefined"!=typeof window&&window.requestAnimationFrame(e):l<=t?d():"undefined"!=typeof window&&window.requestAnimationFrame(e)})))}(t,e)}function C(){h()}return(0,d.useImperativeHandle)(e,(function(){return{refresh:S,scrollToByIndex:function(t,e){void 0===e&&(e=300);for(var n,l=0;l<N.current.length;l++)if(N.current[l].index===t){n=N.current[l];break}g(n=n||N.current[N.current.length-1],e)},scrollToByHeaderEl:function(t,e){void 0===e&&(e=300);for(var n,l=0;l<N.current.length;l++)if(N.current[l].dom===t){n=N.current[l];break}g(n=n||N.current[N.current.length-1],e)}}})),(0,d.useLayoutEffect)((function(){return S(),function(){var t;H.current&&null!=(t=null==(t=H.current)?void 0:t.parentElement)&&t.removeChild(H.current)}}),[]),d.createElement("div",{className:r()(u,null!=n?n:""),style:null!=l?l:{},ref:o},d.createElement("div",{className:r()("".concat(u,"-fixed"),null!=m?m:""),style:null!=a?a:{},ref:s}),d.createElement("div",{className:r()("".concat(u,"-inner"),null!=c?c:""),style:null!=E?E:{},ref:p},t))},i=(0,d.memo)((0,d.forwardRef)(E));i.Item=c;var o=i},27230:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var l=n(91098),r=n(32943).Z,d=n(17464),m=n(90171),a=n(96032);const{Item:c}=r;var u=()=>{const t=(0,m.useRef)();return m.createElement(a.ZP,{className:"StickupLayout"},m.createElement(a.$0,{title:"StickupLayout"},m.createElement("p",null,"滚动固定头额布局"),m.createElement("p",null,"父元素需要固定高度")),m.createElement(a.e0,{title:"代码演示",columnCount:1,config:[{id:"p1",name:"基本使用",mode:"code",scope:{React:m},cardProps:{description:{title:"基本使用",info:"基本使用"}},codeText:'\n  import { StickupLayout, Space } from \'@baifendian/adhere\'; import {Component} from "react";\n\n  class Item extends Component {\n  render() {\n    return null\n  }\n} <div style={{ height: 500, overflow: \'hidden\' }}>\n    <StickupLayout>\n      <Item\n        title={<span className="title">基本参数</span>}\n        content={\n          <table>\n            <tr>\n              <td>厂商指导价(元)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>本地参考底价(元)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>厂商</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>级别</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>能源类型</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>上市时间</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大功率(KW)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>发动机</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </table>\n        }\n      />\n\n      <Item\n        title={<span className="title">车身</span>}\n        content={\n          <table>\n            <tr>\n              <td>长度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>宽度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>高度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>轴距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>前轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>后轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>车身结构</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </table>\n        }\n      />\n\n      <Item\n        title={<span className="title">发动机</span>}\n        content={\n          <table>\n            <tr>\n              <td>长度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>宽度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>高度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>轴距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>前轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>后轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>车身结构</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </table>\n        }\n      />\n\n      <Item\n        title={<span className="title">变速箱</span>}\n        content={\n          <table>\n            <tr>\n              <td>长度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>宽度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>高度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>轴距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>前轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>后轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>车身结构</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </table>\n        }\n      />\n\n      <Item\n        title={<span className="title">车轮制动</span>}\n        content={\n          <table>\n            <tr>\n              <td>长度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>宽度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>高度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>轴距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>前轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>后轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>车身结构</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </table>\n        }\n      />\n\n      <Item\n        title={<span className="title">主/被动安全装备</span>}\n        content={\n          <table>\n            <tr>\n              <td>长度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>宽度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>高度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>轴距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>前轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>后轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>车身结构</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </table>\n        }\n      />\n    </StickupLayout>\n  </div>\n      ',type:"PlayGround",renderChildren:()=>m.createElement("div",{style:{height:500,overflow:"hidden"}},m.createElement(r,null,m.createElement(c,{title:m.createElement("span",{className:"title"},"基本参数"),content:m.createElement("table",null,m.createElement("tr",null,m.createElement("td",null,"厂商指导价(元)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"本地参考底价(元)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"厂商"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"级别"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"能源类型"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"上市时间"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大功率(KW)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"发动机"),m.createElement("td",null),m.createElement("td",null)))}),m.createElement(c,{title:m.createElement("span",{className:"title"},"车身"),content:m.createElement("table",null,m.createElement("tr",null,m.createElement("td",null,"长度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"宽度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"高度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"轴距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"前轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"后轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"车身结构"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)))}),m.createElement(c,{title:m.createElement("span",{className:"title"},"发动机"),content:m.createElement("table",null,m.createElement("tr",null,m.createElement("td",null,"长度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"宽度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"高度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"轴距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"前轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"后轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"车身结构"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)))}),m.createElement(c,{title:m.createElement("span",{className:"title"},"变速箱"),content:m.createElement("table",null,m.createElement("tr",null,m.createElement("td",null,"长度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"宽度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"高度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"轴距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"前轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"后轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"车身结构"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)))}),m.createElement(c,{title:m.createElement("span",{className:"title"},"车轮制动"),content:m.createElement("table",null,m.createElement("tr",null,m.createElement("td",null,"长度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"宽度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"高度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"轴距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"前轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"后轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"车身结构"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)))}),m.createElement(c,{title:m.createElement("span",{className:"title"},"主/被动安全装备"),content:m.createElement("table",null,m.createElement("tr",null,m.createElement("td",null,"长度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"宽度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"高度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"轴距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"前轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"后轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"车身结构"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)))})))},{id:"p2",name:"滚动到指定位置",mode:"code",scope:{React:m},cardProps:{description:{title:"滚动到指定位置",info:"滚动到指定位置"}},codeText:'\n  import { StickupLayout, Space } from \'@baifendian/adhere\';\n\n  <Space.Group direction="horizontal" size={10}>\n    <Button\n      type="primary"\n      onClick={() => {\n        ref1.current.scrollToByIndex(5);\n      }}\n    >\n      滚动到底部(动画)\n    </Button>\n    <Button\n      onClick={() => {\n        ref1.current.scrollToByIndex(0);\n      }}\n    >\n      置顶(动画)\n    </Button>\n    <Button\n      type="primary"\n      onClick={() => {\n        ref1.current.scrollToByIndex(5, 0);\n      }}\n    >\n      滚动到底部(无动画)\n    </Button>\n    <Button\n      onClick={() => {\n        ref1.current.scrollToByIndex(0, 0);\n      }}\n    >\n      置顶(无动画)\n    </Button>\n  </Space.Group>\n\n  <Space direction="vertical" />\n\n  <div style={{ height: 500, overflow: \'hidden\' }}>\n    <StickupLayout ref={ref1}>\n      <Item\n        title={<span className="title">基本参数</span>}\n        content={\n          <table>\n            <tr>\n              <td>厂商指导价(元)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>本地参考底价(元)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>厂商</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>级别</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>能源类型</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>上市时间</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大功率(KW)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>发动机</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </table>\n        }\n      />\n\n      <Item\n        title={<span className="title">车身</span>}\n        content={\n          <table>\n            <tr>\n              <td>长度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>宽度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>高度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>轴距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>前轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>后轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>车身结构</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </table>\n        }\n      />\n\n      <Item\n        title={<span className="title">发动机</span>}\n        content={\n          <table>\n            <tr>\n              <td>长度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>宽度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>高度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>轴距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>前轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>后轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>车身结构</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </table>\n        }\n      />\n\n      <Item\n        title={<span className="title">变速箱</span>}\n        content={\n          <table>\n            <tr>\n              <td>长度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>宽度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>高度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>轴距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>前轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>后轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>车身结构</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </table>\n        }\n      />\n\n      <Item\n        title={<span className="title">车轮制动</span>}\n        content={\n          <table>\n            <tr>\n              <td>长度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>宽度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>高度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>轴距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>前轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>后轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>车身结构</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </table>\n        }\n      />\n\n      <Item\n        title={<span className="title">主/被动安全装备</span>}\n        content={\n          <table>\n            <tr>\n              <td>长度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>宽度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>高度(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>轴距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>前轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>后轮距(mm)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>车身结构</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>最大扭矩(NH)</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </table>\n        }\n      />\n    </StickupLayout>\n  </div>\n      ',type:"PlayGround",renderChildren:()=>m.createElement(m.Fragment,null,m.createElement(l.Z.Group,{direction:"horizontal",size:10},m.createElement(d.ZP,{type:"primary",onClick:()=>{t.current.scrollToByIndex(5)}},"滚动到底部(动画)"),m.createElement(d.ZP,{onClick:()=>{t.current.scrollToByIndex(0)}},"置顶(动画)"),m.createElement(d.ZP,{type:"primary",onClick:()=>{t.current.scrollToByIndex(5,0)}},"滚动到底部(无动画)"),m.createElement(d.ZP,{onClick:()=>{t.current.scrollToByIndex(0,0)}},"置顶(无动画)")),m.createElement(l.Z,{direction:"vertical"}),m.createElement("div",{style:{height:500,overflow:"hidden"}},m.createElement(r,{ref:t},m.createElement(c,{title:m.createElement("span",{className:"title"},"基本参数"),content:m.createElement("table",null,m.createElement("tr",null,m.createElement("td",null,"厂商指导价(元)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"本地参考底价(元)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"厂商"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"级别"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"能源类型"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"上市时间"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大功率(KW)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"发动机"),m.createElement("td",null),m.createElement("td",null)))}),m.createElement(c,{title:m.createElement("span",{className:"title"},"车身"),content:m.createElement("table",null,m.createElement("tr",null,m.createElement("td",null,"长度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"宽度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"高度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"轴距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"前轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"后轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"车身结构"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)))}),m.createElement(c,{title:m.createElement("span",{className:"title"},"发动机"),content:m.createElement("table",null,m.createElement("tr",null,m.createElement("td",null,"长度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"宽度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"高度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"轴距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"前轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"后轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"车身结构"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)))}),m.createElement(c,{title:m.createElement("span",{className:"title"},"变速箱"),content:m.createElement("table",null,m.createElement("tr",null,m.createElement("td",null,"长度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"宽度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"高度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"轴距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"前轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"后轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"车身结构"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)))}),m.createElement(c,{title:m.createElement("span",{className:"title"},"车轮制动"),content:m.createElement("table",null,m.createElement("tr",null,m.createElement("td",null,"长度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"宽度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"高度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"轴距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"前轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"后轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"车身结构"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)))}),m.createElement(c,{title:m.createElement("span",{className:"title"},"主/被动安全装备"),content:m.createElement("table",null,m.createElement("tr",null,m.createElement("td",null,"长度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"宽度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"高度(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"轴距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"前轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"后轮距(mm)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"车身结构"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)),m.createElement("tr",null,m.createElement("td",null,"最大扭矩(NH)"),m.createElement("td",null),m.createElement("td",null)))}))))}]}),m.createElement(a.sB,{title:"Props",config:[{border:!0,title:"SplitLayout",data:[{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"fixedClassName",desc:"固定头附加的样式表",type:"string",defaultVal:""},{params:"fixedStyle",desc:"固定头的样式",type:"React.CSSProperties",defaultVal:""},{params:"innerClassName",desc:"内部附加的样式表",type:"string",defaultVal:""},{params:"innerStyle",desc:"内部附加的样式",type:"React.CSSProperties",defaultVal:""},{params:"onChange",desc:"滚动到固定区域",type:"Function",defaultVal:""}]},{border:!0,title:"SplitLayout.Item",data:[{params:"className",desc:"附加的样式表",type:"string",defaultVal:""},{params:"style",desc:"附加的样式",type:"React.CSSProperties",defaultVal:""}]}]}),m.createElement(a.ae,{title:"Api",config:[{border:!0,title:"方法",data:[{name:"scrollToByIndex",desc:"滚动到指定所引出",modifier:"public",params:[{name:"index",desc:"滚动到的索引",type:"number",defaultVal:"",required:"true"},{name:"duration",desc:"滚动的时间",type:"number",defaultVal:"600",required:""}],returnType:"",returnDesc:""},{name:"scrollToByHeaderEl",desc:"滚动到指定el",modifier:"public",params:[{name:"headerEl",desc:"指定的el",type:"HtmlElement",defaultVal:"",required:"true"},{name:"duration",desc:"滚动的时间",type:"number",defaultVal:"300",required:""}],returnType:"",returnDesc:""}]}]}))}},96032:function(t,e,n){n.d(e,{$0:function(){return c},ae:function(){return i},e0:function(){return u},sB:function(){return E}});var l=n(70517),r=n(6692),d=n(90171);const{PlayGroundPageContext:m,PlayGroundPage:a}=r.default,{Section:c,CodeBoxSection:u,PropsSection:E,FunctionPropsSection:i}=a;e.ZP=function(t){let{children:e,...n}=t;const[r,c]=(0,d.useState)(),u=(0,d.useRef)();return(0,d.useEffect)((()=>{c(u.current.parentElement.parentElement)}),[]),d.createElement(m.Provider,{value:{scrollEl:r}},d.createElement(a,(0,l.Z)({ref:u},n),e))}},91098:function(t,e,n){var l=n(58014);e.Z=l.Z}}]);