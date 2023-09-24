"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[3923],{91964:function(e,r,a){a.r(r);var t=a(90171),n=a(96032);r.default=()=>t.createElement(n.ZP,null,t.createElement(n.$0,{title:"Util"},t.createElement("p",null,"工具类")),t.createElement(n.ae,{title:"Api",config:[{border:!0,title:"基本操作",data:[{name:"isEmpty",desc:"对象是否为空",modifier:"public",params:[{name:"value",desc:"",type:"Object",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"isArray",desc:"判断数组",modifier:"public",params:[{name:"obj",desc:"",type:"Object",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"isNumber",desc:"判断是否是number",modifier:"public",params:[{name:"val",desc:"",type:"any",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"isBoolean",desc:"判断是否是boolean",modifier:"public",params:[{name:"val",desc:"",type:"any",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"isString",desc:"判断是否是string",modifier:"public",params:[{name:"val",desc:"",type:"any",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"isSymbol",desc:"判断是否是符号",modifier:"public",params:[{name:"val",desc:"",type:"any",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"isPrimitive",desc:"判断是否是基本类型",modifier:"public",params:[{name:"val",desc:"",type:"any",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"isFunction",desc:"判断函数",modifier:"public",params:[{name:"obj",desc:"",type:"any",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"isObject",desc:"是否是对象",modifier:"public",params:[{name:"obj",desc:"",type:"any",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"isRef",desc:"是否是引用类型",modifier:"public",params:[{name:"obj",desc:"",type:"any",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"chainCallAssignment",desc:"对象的链式赋值",modifier:"public",params:[{name:"obj",desc:"赋值的对象",type:"Object",defaultVal:"",required:""},{name:"chainStr",desc:"属性链式表达式 a.b.c",type:"string",defaultVal:"",required:""},{name:"value",desc:"要复值的值",type:"any",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"getObjectByChainStr",desc:"通过chainStr获取对象",modifier:"public",params:[{name:"obj",desc:"赋值的对象",type:"Object",defaultVal:"",required:""},{name:"chainStr",desc:"属性链式表达式 a.b.c",type:"string",defaultVal:"",required:""}],returnType:"Object",returnDesc:""},{name:"toCamelCase",desc:"用连接符链接的字符串转换成驼峰写法",modifier:"public",params:[{name:"str",desc:"用连接符节点的字符串",type:"string",defaultVal:"",required:""},{name:"toUpperCase",desc:"是否转换成大写",type:"boolean",defaultVal:"false",required:""}],returnType:"string",returnDesc:""},{name:"isKebabCase",desc:"是否是烤肉串形式的名字",modifier:"public",params:[{name:"name",desc:"名称",type:"string",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"isPascalCase",desc:"是否是驼峰形式的名字",modifier:"public",params:[{name:"name",desc:"名称",type:"string",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"pascalCaseToKebabCase",desc:"驼峰转xxx-xxx-xxx",modifier:"public",params:[{name:"name",desc:"名称",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"execExpression",desc:"执行表达式",modifier:"public",params:[{name:"context",desc:"执行的上下文",type:"Object",defaultVal:"",required:""},{name:"expressionStr",desc:"表达式",type:"string",defaultVal:"",required:""},{name:"data",desc:"实参列表，调用函数传递的参数",type:"Object",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"getCookie",desc:"获取指定的cookie值",modifier:"public",params:[{name:"name",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"noop",desc:"返回一个空实现的函数",modifier:"public",params:[],returnType:"Function",returnDesc:""},{name:"generatorRandom",desc:"生成随机数",modifier:"public",params:[{name:"lowerValue",desc:"最小值",type:"number",defaultVal:"",required:""},{name:"upperValue",desc:"最大值",type:"number",defaultVal:"",required:""}],returnType:"number",returnDesc:""},{name:"uuid",desc:"生成uuid",modifier:"public",params:[],returnType:"string",returnDesc:""},{name:"getPropertyVisitPathStr",desc:"获取属性访问的完整字符串路径 a.b.c.d.e.f",modifier:"public",params:[{name:"target",desc:"Proxy中set的target参数",type:"Object",defaultVal:"",required:""},{name:"key",desc:"Proxy中set的key参数",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"convertBase64UrlToBlob",desc:"转换base64位blob对象",modifier:"public",params:[{name:"data",desc:"base64",type:"string",defaultVal:"",required:""}],returnType:"Blob",returnDesc:""},{name:"omitObject",desc:"对象排除空值",modifier:"public",params:[{name:"obj",desc:"排除的对象",type:"object",defaultVal:"{}",required:"true"}],returnType:"object",returnDesc:""}]},{border:!0,title:"dom相关",data:[{name:"isTextNode",desc:"是否是文本节点",modifier:"public",params:[{name:"el",desc:"",type:"Node",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"isCommentNode",desc:"是否是注释节点",modifier:"public",params:[{name:"el",desc:"",type:"Node",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"isElementNode",desc:"是否是元素节点",modifier:"public",params:[{name:"el",desc:"",type:"Node",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"createElement",desc:"根据html字符串创建dom",modifier:"public",params:[{name:"htmlStr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"HTMLElement",returnDesc:""},{name:"getTopDom",desc:"以target为开始向上查找元素",modifier:"public",params:[{name:"target",desc:"",type:"HtmlElement",defaultVal:"",required:""},{name:"selector",desc:"匹配的选择器",type:"string",defaultVal:"",required:""}],returnType:"HTMLElement | null",returnDesc:"匹配到的节点"},{name:"on",desc:"注册事件",modifier:"public",params:[{name:"el",desc:"元素",type:"HtmlElement",defaultVal:"",required:""},{name:"tag",desc:"标签分组",type:"string",defaultVal:"",required:""},{name:"type",desc:"事件类型",type:"string",defaultVal:"",required:""},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"",required:""},{name:"capture",desc:"是否是捕获",type:"Function",defaultVal:"false",required:""}],returnType:"",returnDesc:""},{name:"off",desc:"注册事件",modifier:"public",params:[{name:"el",desc:"元素",type:"HtmlElement",defaultVal:"",required:""},{name:"tag",desc:"标签分组",type:"string",defaultVal:"",required:""},{name:"type",desc:"事件类型",type:"string",defaultVal:"",required:""},{name:"handler",desc:"事件句柄",type:"Function",defaultVal:"",required:""},{name:"capture",desc:"是否是捕获",type:"Function",defaultVal:"false",required:""}],returnType:"",returnDesc:""},{name:"addClass",desc:"添加样式",modifier:"public",params:[{name:"el",desc:"",type:"HtmlElement",defaultVal:"",required:""},{name:"classes",desc:"，分割的字符串",type:"string",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"removeClass",desc:"移除样式",modifier:"public",params:[{name:"el",desc:"",type:"HtmlElement",defaultVal:"",required:""},{name:"classes",desc:"，分割的字符串",type:"string",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"hasClass",desc:"判断指定样式是否存在",modifier:"public",params:[{name:"el",desc:"",type:"HtmlElement",defaultVal:"",required:""},{name:"classes",desc:"，分割的字符串",type:"string",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"insertAfter",desc:"在指定元素之后插入新元素",modifier:"public",params:[{name:"newElement",desc:"新元素",type:"HtmlElement",defaultVal:"",required:""},{name:"targetElement",desc:"，目标元素",type:"HtmlElement",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"prepend",desc:"在指定元素的孩子集合最前方添加一个新元素",modifier:"public",params:[{name:"el",desc:"指定元素",type:"HtmlElement",defaultVal:"",required:""},{name:"children",desc:"，新元素",type:"HtmlElement | string",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"remove",desc:"删除当前元素",modifier:"public",params:[{name:"el",desc:"待删除的元素",type:"HtmlElement",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"getParentElementByTag",desc:"获取指定标签元素的父节点",modifier:"public",params:[{name:"el",desc:"当前元素",type:"HtmlElement",defaultVal:"",required:""},{name:"tag",desc:"指定的标签名称",type:"",defaultVal:"",required:""}],returnType:"HtmlElement",returnDesc:"命中的父元素"},{name:"children",desc:"获取指定元素的孩子集合",modifier:"public",params:[{name:"el",desc:"当前元素",type:"HtmlElement",defaultVal:"",required:""},{name:"selector",desc:"命中的选择器",type:"",defaultVal:"",required:""}],returnType:"HtmlElement",returnDesc:"命中的父元素"},{name:"isTouch",desc:"判断当前浏览器是否支持touch",modifier:"public",params:[],returnType:"boolean",returnDesc:""},{name:"objectToDataSet",desc:"对象抓换成元素的data-set",modifier:"public",params:[{name:"obj",desc:"对象",type:"Object",defaultVal:"",required:""},{name:"dom",desc:"目标din",type:"HtmlElement",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"dataSetToObject",desc:"元素的data-set转换成对象",modifier:"public",params:[{name:"dom",desc:"元素",type:"HtmlElement",defaultVal:"",required:""}],returnType:"Object",returnDesc:""},{name:"getPageLeft",desc:"获取指定元素距离视口的left",modifier:"public",params:[{name:"el",desc:"元素",type:"HtmlElement",defaultVal:"",required:""}],returnType:"number",returnDesc:"距离视口的left"},{name:"getPageTop",desc:"获取指定元素距离视口的top",modifier:"public",params:[{name:"el",desc:"元素",type:"HtmlElement",defaultVal:"",required:""}],returnType:"number",returnDesc:"距离视口的top"},{name:"getPageRect",desc:"获取元素距离视口的Rect",modifier:"public",params:[{name:"el",desc:"元素",type:"HtmlElement",defaultVal:"",required:""}],returnType:"{top,right,bottom,left}",returnDesc:"距离视口的Rect"},{name:"getLeftUntil",desc:"获取left直到untilEl",modifier:"public",params:[{name:"params",desc:"",type:"{\n                  el: HtmlElement,\n                  untilEl: HtmlElement\n                }",defaultVal:"",required:""}],returnType:"number",returnDesc:""},{name:"getTopUntil",desc:"获取top直到untilEl",modifier:"public",params:[{name:"params",desc:"",type:"{\n                  el: HtmlElement,\n                  untilEl: HtmlElement\n                }",defaultVal:"",required:""}],returnType:"number",returnDesc:""},{name:"getRectUntil",desc:"获取Rect直到untilEl",modifier:"public",params:[{name:"params",desc:"",type:"{\n                  el: HtmlElement,\n                  untilEl: HtmlElement\n                }",defaultVal:"",required:""}],returnType:"\n              {\n                top: number;\n                left: number;\n                right: number;\n                bottom: number;\n              }\n            ",returnDesc:""},{name:"isIframeEmbed",desc:"是否是iframe嵌入",modifier:"public",params:[],returnType:"boolean",returnDesc:""}]},{border:!0,title:"数学操作",data:[{name:"toPoint",desc:"百分数转化为小数",modifier:"public",params:[{name:"percent",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"toPercent",desc:"小数转化为百分数",modifier:"public",params:[{name:"point",desc:"",type:"number",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"straightLineIntersection",desc:"计算两个直线的交点",modifier:"public",params:[{name:"p1",desc:"",type:"{x:number,y:number}",defaultVal:"",required:""},{name:"p2",desc:"",type:"{x:number,y:number}",defaultVal:"",required:""},{name:"p3",desc:"",type:"{x:number,y:number}",defaultVal:"",required:""},{name:"p4",desc:"",type:"{x:number,y:number}",defaultVal:"",required:""}],returnType:"{x:number,y:number}",returnDesc:""},{name:"getA3Point",desc:"计算两点p1,p2 距离p1点distance距离的点p3的坐标",modifier:"public",params:[{name:"p1",desc:"",type:"{x:number,y:number}",defaultVal:"",required:""},{name:"p2",desc:"",type:"{x:number,y:number}",defaultVal:"",required:""}],returnType:"{x:number,y:number}",returnDesc:""},{name:"getDistanceByBetweenPoint",desc:"获取p1,p2两点间的距离",modifier:"public",params:[{name:"p1",desc:"",type:"{x:number,y:number}",defaultVal:"",required:""},{name:"p2",desc:"",type:"{x:number,y:number}",defaultVal:"",required:""}],returnType:"number",returnDesc:""},{name:"clientToCtxPoint",desc:"屏幕坐标转换成画布坐标",modifier:"public",params:[{name:"event",desc:"事件对象",type:"HtmlMouseEvent",defaultVal:"",required:""},{name:"el",desc:"容器的HtmlDom",type:"HtmlElement",defaultVal:"",required:""}],returnType:"number",returnDesc:""},{name:"isPointInCircle",desc:"判断一个点是否在圆内",modifier:"public",params:[{name:"point",desc:"点",type:"IPoint",defaultVal:"",required:""},{name:"circle",desc:"圆的数据",type:"ICircle",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"isPointInRect",desc:"点是否在矩形中",modifier:"public",params:[{name:"point",desc:"点",type:"IPoint",defaultVal:"",required:""},{name:"rect",desc:"矩形的数据",type:"IRect",defaultVal:"",required:""}],returnType:"boolean",returnDesc:""},{name:"getCanvasTextInGemX",desc:"获取一个文本在Rect中的居中的X位置",modifier:"public",params:[{name:"ctx",desc:"ctx",type:"CanvasRenderingContext2D",defaultVal:"",required:""},{name:"text",desc:"文本",type:"string",defaultVal:"",required:""},{name:"rect",desc:"矩形数据",type:"{ leftTop: IPoint; rightBottom: IPoint }",defaultVal:"",required:""}],returnType:"number",returnDesc:""},{name:"midpoint",desc:"计算两个点的中心点",modifier:"public",params:[{name:"fromPoint",desc:"开始点",type:"IPoint",defaultVal:"",required:""},{name:"toPoint",desc:"结束点",type:"IPoint",defaultVal:"",required:""}],returnType:"IPoint",returnDesc:""},{name:"slope",desc:"计算两个点的斜率",modifier:"public",params:[{name:"fromPoint",desc:"开始点",type:"IPoint",defaultVal:"",required:""},{name:"toPoint",desc:"结束点",type:"IPoint",defaultVal:"",required:""},{name:"axis",desc:"坐标系",type:"'cartesian' | 'geographic'",defaultVal:"cartesian",required:""}],returnType:"number | undefined",returnDesc:""},{name:"slopToRadian",desc:"获取两点斜率的弧度",modifier:"public",params:[{name:"fromPoint",desc:"开始点",type:"IPoint",defaultVal:"",required:""},{name:"toPoint",desc:"结束点",type:"IPoint",defaultVal:"",required:""},{name:"axis",desc:"坐标系",type:"'cartesian' | 'geographic'",defaultVal:"cartesian",required:""}],returnType:"number | undefined",returnDesc:""},{name:"slopToAngle",desc:"获取两点斜率的角度",modifier:"public",params:[{name:"fromPoint",desc:"开始点",type:"IPoint",defaultVal:"",required:""},{name:"toPoint",desc:"结束点",type:"IPoint",defaultVal:"",required:""},{name:"axis",desc:"坐标系",type:"'cartesian' | 'geographic'",defaultVal:"cartesian",required:""}],returnType:"number | undefined",returnDesc:""},{name:"radianToAngle",desc:"弧度转换成角度",modifier:"public",params:[{name:"radian",desc:"弧度",type:"number",defaultVal:"",required:""}],returnType:"number",returnDesc:"角度"},{name:"angleToRadian",desc:"角度转弧度",modifier:"public",params:[{name:"angle",desc:"角度",type:"number",defaultVal:"",required:""}],returnType:"number",returnDesc:"弧度"},{name:"distance",desc:"距离",modifier:"public",params:[{name:"value",desc:"数值(m)",type:"number",defaultVal:"",required:""},{name:"unit",desc:"单位",type:"number",defaultVal:"kilometer",required:""}],returnType:"number",returnDesc:""},{name:"getCirclePoint",desc:"获取圆上任意一点",modifier:"public",params:[{name:"center",desc:"圆心",type:"{x:number,y:number}",defaultVal:"",required:""},{name:"raduis",desc:"半径",type:"number",defaultVal:"",required:""},{name:"angle",desc:"弧度",type:"number",defaultVal:"",required:""}],returnType:"IPoint",returnDesc:""},{name:"getOvalPoint",desc:"获取椭圆上任意一点",modifier:"public",params:[{name:"center",desc:"圆心",type:"{x:number,y:number}",defaultVal:"",required:""},{name:"raduisX",desc:"X半径",type:"number",defaultVal:"",required:""},{name:"raduisY",desc:"y半径",type:"number",defaultVal:"",required:""},{name:"angle",desc:"弧度",type:"number",defaultVal:"",required:""}],returnType:"IPoint",returnDesc:""}]},{border:!0,title:"Url操作",data:[{name:"parse",desc:"query参数转换成Obj",modifier:"public",params:[{name:"path",desc:"待解析的路径",type:"string",defaultVal:"window.location.search",required:"true"}],returnType:"Object",returnDesc:""},{name:"stringify",desc:"对象转换成query参数",modifier:"public",params:[{name:"record",desc:"对象",type:"Object",defaultVal:"",required:"true"}],returnType:"string",returnDesc:""}]},{border:!0,title:"颜色操作",data:[{name:"rgb",desc:"rgb颜色随机",modifier:"public",params:[],returnType:"string",returnDesc:""},{name:"color16",desc:"十六进制颜色随机",modifier:"public",params:[],returnType:"string",returnDesc:""}]},{border:!0,title:"客户端监测",data:[{name:"isTouch",desc:"是否移动端支持touch事件",modifier:"public",params:[],returnType:"boolean",returnDesc:""}]},{border:!0,title:"系统管理相关",data:[{name:"getLang",desc:"获取语言",modifier:"public",params:[],returnType:"string",returnDesc:""},{name:"setLang",desc:"设置语言",modifier:"public",params:[{name:"lang",desc:"语言",type:"string",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"getDatePickerFormat",desc:"对antd的DatePicker控件进行语言设置",modifier:"public",params:[],returnType:"string",returnDesc:""},{name:"casUrl",desc:"跳转",modifier:"public",params:[{name:"baseUrl",desc:"",type:"string",defaultVal:"",required:""},{name:"enterUrl",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"casLogoutUrl",desc:"登出",modifier:"public",params:[{name:"baseUrl",desc:"",type:"string",defaultVal:"",required:""},{name:"enterUrl",desc:"",type:"string",defaultVal:"",required:""},{name:"params",desc:"",type:"Object",defaultVal:"",required:""}],returnType:"string",returnDesc:""}]},{border:!0,title:"Tree",data:[{name:"treeToArray",desc:"tree数据转换成Array",modifier:"public",params:[{name:"treeData",desc:"",type:"IAntdTreeNode[]",defaultVal:"",required:""},{name:"config",desc:"",type:"{\n      parentIdAttr: string;\n      rootParentId: string | number;\n    }",defaultVal:"",required:""}],returnType:"any[]",returnDesc:""},{name:"arrayToAntdTree",desc:"array转换成Tree",modifier:"public",params:[{name:"arr",desc:"",type:"any[]",defaultVal:"",required:""},{name:"arr",desc:"",type:"IFlatTreeArrNode",defaultVal:"",required:""}],returnType:"Array<IAntdTreeNode>",returnDesc:""},{name:"arrayToAntdTreeSelect",desc:"array转换成TreeSelect",modifier:"public",params:[{name:"arr",desc:"",type:"any[]",defaultVal:"",required:""},{name:"arr",desc:"",type:"IFlatTreeArrNode",defaultVal:"",required:""}],returnType:"Array<IAntdTreeSelectNode>",returnDesc:""},{name:"getAncestor",desc:"获取祖先",modifier:"public",params:[{name:"data",desc:"",type:"any[]",defaultVal:"",required:""},{name:"node",desc:"",type:"any",defaultVal:"",required:""},{name:"config",desc:"",type:"any",defaultVal:"",required:""}],returnType:"any[]",returnDesc:""},{name:"getDescendants",desc:"获取子孙",modifier:"public",params:[{name:"data",desc:"",type:"any[]",defaultVal:"",required:""},{name:"node",desc:"",type:"string",defaultVal:"",required:""},{name:"config",desc:"",type:"Object",defaultVal:"",required:""}],returnType:"any[]",returnDesc:""},{name:"findNodeByKey",desc:"根据keyAttr查找结点",modifier:"public",params:[{name:"treeData",desc:"",type:"IAntdTreeNode[]",defaultVal:"",required:""},{name:"val",desc:"",type:"string",defaultVal:"",required:""},{name:"config",desc:"",type:"Object",defaultVal:"",required:""}],returnType:"IAntdTreeNode | null",returnDesc:""},{name:"completionIncompleteFlatArr",desc:"补残缺的FlatArr",modifier:"public",params:[{name:"treeFlatNodes",desc:"",type:"any[]",defaultVal:"",required:""},{name:"incompleteTreeFlatNodes",desc:"",type:"string",defaultVal:"",required:""},{name:"config",desc:"",type:"IFlatTreeArrNode",defaultVal:"",required:""}],returnType:"(IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[]",returnDesc:""},{name:"filterTreeByFlatData",desc:"本地过滤tree",modifier:"public",params:[{name:"treeFlatNodes",desc:"",type:"any[]",defaultVal:"",required:""},{name:"kw",desc:"",type:"string",defaultVal:"",required:""},{name:"config",desc:"",type:"IFlatTreeArrNode",defaultVal:"",required:""}],returnType:"(IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[]",returnDesc:""},{name:"filterTree",desc:"过滤Tree",modifier:"public",params:[{name:"treeNodes",desc:"",type:"(IAntdTreeNode | IAntdTreeSelectNode)[]",defaultVal:"",required:""},{name:"kw",desc:"",type:"string",defaultVal:"",required:""},{name:"config",desc:"",type:"IFlatTreeArrNode",defaultVal:"",required:""}],returnType:"(IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[]",returnDesc:""},{name:"transformTreeData",desc:"转换一个treeData为antd的TreeData",modifier:"public",params:[{name:"treeData",desc:"",type:"any[]",defaultVal:"",required:""},{name:"childrenAttr",desc:"",type:"string",defaultVal:"",required:""},{name:"onCallback",desc:"",type:"() => {}",defaultVal:"",required:""}],returnType:"IAntdTreeNode[]",returnDesc:""},{name:"getLeafNodesByIndex",desc:"通过索引获取叶子节点的集合",modifier:"public",params:[{name:"nodes",desc:"",type:"any[]",defaultVal:"",required:""},{name:"childrenAttr",desc:"",type:"string",defaultVal:"children",required:""},{name:"indexAttr",desc:"",type:"string",defaultVal:"isLeaf",required:""}],returnType:"IAntdTreeNode[]",returnDesc:""},{name:"getLeafNodeByFlatData",desc:"获取叶子节点通过拉平的数据",modifier:"public",params:[{name:"arr",desc:"",type:"any[]",defaultVal:"",required:""},{name:"config",desc:"",type:"IFlatTreeArrNodes",defaultVal:"",required:""}],returnType:"(IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[]",returnDesc:""},{name:"getLeafNodeByFlatDataToIndex",desc:"获取叶子节点通过索引和拉平的数据",modifier:"public",params:[{name:"arr",desc:"",type:"any[]",defaultVal:"",required:""},{name:"indexAttr",desc:"",type:"string",defaultVal:"isLeaf",required:""}],returnType:"(IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[]",returnDesc:""},{name:"getTreeLevel",desc:"获取树的层级",modifier:"public",params:[{name:"nodes",desc:"",type:"any[]",defaultVal:"",required:""}],returnType:"(IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[]",returnDesc:""},{name:"getTreeLevelByIndex",desc:"获取树的层级通过索引",modifier:"public",params:[{name:"nodes",desc:"",type:"any[]",defaultVal:"",required:""},{name:"indexAttr",desc:"",type:"string",defaultVal:"isLeaf",required:""}],returnType:"(IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[]",returnDesc:""},{name:"getTreeLevelToFlat",desc:"获取树的层级通过拉平的数据",modifier:"public",params:[{name:"flatArr",desc:"",type:"any[]",defaultVal:"",required:""},{name:"config",desc:"",type:"IFlatTreeArrNode",defaultVal:"",required:""}],returnType:"(IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[]",returnDesc:""},{name:"getTreeLevelByIndexToFlat",desc:"获取树的层级通过拉平的数据和索引",modifier:"public",params:[{name:"flatArr",desc:"",type:"any[]",defaultVal:"",required:""},{name:"config",desc:"",type:"FlatTreeArrNode",defaultVal:"",required:""},{name:"indexAttr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"(IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[]",returnDesc:""},{name:"excludeAntdTreeNodes",desc:"排除指定节点后形成一棵树",modifier:"public",params:[{name:"nodes",desc:"",type:"IAntdTreeNode[]",defaultVal:"",required:""},{name:"excludeKeys",desc:"",type:"string[]",defaultVal:"",required:""}],returnType:"(IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[]",returnDesc:""},{name:"excludeAntdSelectTreeNodes",desc:"排除指定节点后形成一棵树",modifier:"public",params:[{name:"nodes",desc:"",type:"IAntdTreNode[]",defaultVal:"",required:""},{name:"excludeKeys",desc:"",type:"string[]",defaultVal:"",required:""}],returnType:"(IFlatTreeArrNode & Omit<IAntdTreeNode, 'value'>)[]",returnDesc:""}]},{title:"合图形绘制相关",border:!0,data:[{name:"drawStart",desc:"绘制星",modifier:"public",params:[{name:"ctx",desc:"",type:"CanvasRenderingContext2D",defaultVal:"",required:""},{name:"config",desc:"",type:"\n                      { startCount: number; center: IPoint; outRadius: number; innerRadius: number }\n                      ",defaultVal:"",required:""},{name:"onDraw",desc:"",type:"(ctx: CanvasRenderingContext2D) => {}",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"drawSector",desc:"绘制扇形",modifier:"public",params:[{name:"ctx",desc:"",type:"CanvasRenderingContext2D",defaultVal:"",required:""},{name:"config",desc:"",type:"\n                      { center: IPoint; radius: number; angle1: number; angle2: number }\n                      ",defaultVal:"",required:""},{name:"onDraw",desc:"",type:"(ctx: CanvasRenderingContext2D) => {}",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"drawLeaf",desc:"n叶草",modifier:"public",params:[{name:"ctx",desc:"",type:"CanvasRenderingContext2D",defaultVal:"",required:""},{name:"config",desc:"",type:"\n                      { n: number; center: IPoint; size: number; length: number }\n                      ",defaultVal:"",required:""},{name:"onDraw",desc:"",type:"(ctx: CanvasRenderingContext2D) => {}",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"drawRegularPolygon",desc:"正多边形",modifier:"public",params:[{name:"ctx",desc:"",type:"CanvasRenderingContext2D",defaultVal:"",required:""},{name:"config",desc:"",type:"\n                      { n: number; center: IPoint; size: number }\n                      ",defaultVal:"",required:""},{name:"onDraw",desc:"",type:"(ctx: CanvasRenderingContext2D) => {}",defaultVal:"",required:""}],returnType:"",returnDesc:""},{name:"drawRadiusRect",desc:"圆角矩形",modifier:"public",params:[{name:"ctx",desc:"",type:"CanvasRenderingContext2D",defaultVal:"",required:""},{name:"config",desc:"",type:"\n                      {\n                        leftTop: IPoint;\n                        width: number;\n                        height: number;\n                        radius: number;\n                      }\n                      ",defaultVal:"",required:""},{name:"onDraw",desc:"",type:"(ctx: CanvasRenderingContext2D) => {}",defaultVal:"",required:""}],returnType:"",returnDesc:""}]},{title:"时间相关",border:!0,data:[{name:"toTimestampByTimeZone",desc:"根据format字符串和时区获取时间错",modifier:"public",params:[{name:"str",desc:"format的str YYYY-MM-DD HH:mm:ss",type:"string",defaultVal:"",required:""},{name:"timezone",desc:"utc的字符串 11 ~ 0 ~ -12",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"toStrByTimestampAndTimeZone",desc:"通过时间错和时区获取format时间字符串",modifier:"public",params:[{name:"_timestamp",desc:"时间错的字符串",type:"string",defaultVal:"",required:""},{name:"timezone",desc:"utc的字符串 11 ~ 0 ~ -12",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"getCurrentTimestamp",desc:"获取当前的时间错",modifier:"public",params:[],returnType:"number",returnDesc:""},{name:"getTimezone",desc:"获取当前Timezone(时区) 11 ~ 0 ~ -12",modifier:"public",params:[],returnType:"number",returnDesc:""}]},{title:"格式化相关",border:!0,data:[{name:"prettierJSON",desc:"格式化JSON字符串",modifier:"public",params:[{name:"_jsonStr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"compressJSON",desc:"压缩JSON",modifier:"public",params:[{name:"_jsonStr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"prettierXML",desc:"格式化XML",modifier:"public",params:[{name:"_xmlStr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"compressXML",desc:"压缩XML",modifier:"public",params:[{name:"_xmlStr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"prettierHTML",desc:"格式化HTML",modifier:"public",params:[{name:"_htmlStr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"compressHTML",desc:"压缩HTML",modifier:"public",params:[{name:"_htmlStr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"prettierCSS",desc:"格式化CSS",modifier:"public",params:[{name:"_cssStr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"compressCSS",desc:"压缩CSS",modifier:"public",params:[{name:"_cssStr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"prettierSQL",desc:"格式化SQL",modifier:"public",params:[{name:"_sqlStr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"compressSQL",desc:"压缩SQL",modifier:"public",params:[{name:"_sqlStr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"jsonToXML",desc:"json转xml",modifier:"public",params:[{name:"_jsonStr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"xmlToJSON",desc:"xml转json",modifier:"public",params:[{name:"_xmlStr",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""}]},{title:"加密解密相关",border:!0,data:[{name:"base46Encode",desc:"base64编码",modifier:"public",params:[{name:"str",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"base64Decode",desc:"base64解码",modifier:"public",params:[{name:"_base64Str",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"chineseToUTF8",desc:"中文字符串转UTF8",modifier:"public",params:[{name:"_chineseStr",desc:"中文字符串",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"UTF8ToChinese",desc:"UTF8转换成中文字符串",modifier:"public",params:[{name:"_utf8Str",desc:"uf8字符串",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"chineseToASC2",desc:"中文转ASC2码",modifier:"public",params:[{name:"_chineseStr",desc:"中文字符串",type:"string",defaultVal:"",required:""},{name:"hasNoTransformationLettersAndNumber",desc:"不转换字母和数字",type:"boolean",defaultVal:"true",required:""}],returnType:"string",returnDesc:""},{name:"ASC2ToChinese",desc:"ASC2转中文",modifier:"public",params:[{name:"_asc2Str",desc:"ASC2字符串",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"hashEncryptToMD5",desc:"MD5加密 哈希加密算法",modifier:"public",params:[{name:"_value",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"hashEncryptToSHA1",desc:"MD5加密 哈希加密算法",modifier:"public",params:[{name:"_value",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"hashEncryptToSHA256",desc:"MD5加密 哈希加密算法",modifier:"public",params:[{name:"_value",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"hashEncryptToSHA3_64",desc:"MD5加密 哈希加密算法",modifier:"public",params:[{name:"_value",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"hashEncryptToSHA3_224",desc:"MD5加密 哈希加密算法",modifier:"public",params:[{name:"_value",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"hashEncryptToSHA3_256",desc:"MD5加密 哈希加密算法",modifier:"public",params:[{name:"_value",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"hashEncryptToSHA3_348",desc:"MD5加密 哈希加密算法",modifier:"public",params:[{name:"_value",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"hashEncryptToSHA3_512",desc:"MD5加密 哈希加密算法",modifier:"public",params:[{name:"_value",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"hashEncryptToRIPEMD160",desc:"MD5加密 哈希加密算法",modifier:"public",params:[{name:"_value",desc:"",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"symmetricEncryptToAES",desc:"对称加密算法",modifier:"public",params:[{name:"_value",desc:"加密的字符串",type:"string",defaultVal:"",required:""},{name:"_pwd",desc:"密钥",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"symmetricEncryptToDES",desc:"对称加密算法",modifier:"public",params:[{name:"_value",desc:"加密的字符串",type:"string",defaultVal:"",required:""},{name:"_pwd",desc:"密钥",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"symmetricEncryptToRC4",desc:"对称加密算法",modifier:"public",params:[{name:"_value",desc:"加密的字符串",type:"string",defaultVal:"",required:""},{name:"_pwd",desc:"密钥",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"symmetricEncryptToRabbit",desc:"对称加密算法",modifier:"public",params:[{name:"_value",desc:"加密的字符串",type:"string",defaultVal:"",required:""},{name:"_pwd",desc:"密钥",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"symmetricEncryptToTripleDes",desc:"对称加密算法",modifier:"public",params:[{name:"_value",desc:"加密的字符串",type:"string",defaultVal:"",required:""},{name:"_pwd",desc:"密钥",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"symmetricDecryptToAES",desc:"对称加密算法",modifier:"public",params:[{name:"_value",desc:"加密的字符串",type:"string",defaultVal:"",required:""},{name:"_pwd",desc:"密钥",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"symmetricDecryptToDES",desc:"对称加密算法",modifier:"public",params:[{name:"_value",desc:"加密的字符串",type:"string",defaultVal:"",required:""},{name:"_pwd",desc:"密钥",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"symmetricDecryptToRC4",desc:"对称加密算法",modifier:"public",params:[{name:"_value",desc:"加密的字符串",type:"string",defaultVal:"",required:""},{name:"_pwd",desc:"密钥",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"symmetricDecryptToRabbit",desc:"对称加密算法",modifier:"public",params:[{name:"_value",desc:"加密的字符串",type:"string",defaultVal:"",required:""},{name:"_pwd",desc:"密钥",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""},{name:"symmetricDecryptToTripleDes",desc:"对称加密算法",modifier:"public",params:[{name:"_value",desc:"加密的字符串",type:"string",defaultVal:"",required:""},{name:"_pwd",desc:"密钥",type:"string",defaultVal:"",required:""}],returnType:"string",returnDesc:""}]}]}))},96032:function(e,r,a){a.d(r,{$0:function(){return s},ae:function(){return c},e0:function(){return l},sB:function(){return m}});var t=a(70517),n=a(6692),d=a(90171);const{PlayGroundPageContext:u,PlayGroundPage:i}=n.default,{Section:s,CodeBoxSection:l,PropsSection:m,FunctionPropsSection:c}=i;r.ZP=function(e){let{children:r,...a}=e;const[n,s]=(0,d.useState)(),l=(0,d.useRef)();return(0,d.useEffect)((()=>{s(l.current.parentElement.parentElement)}),[]),d.createElement(u.Provider,{value:{scrollEl:n}},d.createElement(i,(0,t.Z)({ref:l},a),r))}}}]);