"use strict";(self.webpackChunk_ctsj_build=self.webpackChunk_ctsj_build||[]).push([[4283],{41584:(r,e,n)=>{n.r(e),n.d(e,{default:()=>d});var a=n(26322),t=n(27314),i=n(59395),l=n(57655);const o="al7_BIptuXAnsIPwQR3i",d=()=>a.createElement(l.A,null,a.createElement("div",{className:o},a.createElement(t.$,{children:"# 2.11.0\r\n\r\n***\r\n\r\n2024-05-11\r\n\r\n* **adhere-mobile-ui-spin**\r\n  - 加入adhere-mobile-ui-spin组件\r\n* **adhere-mobile-ui-prompt-warnprompt**\r\n  - 加入adhere-mobile-ui-prompt-warnprompt组件\r\n* **adhere-mobile-ui-prompt-successprompt**\r\n  - 加入adhere-mobile-ui-prompt-successprompt组件\r\n* **adhere-mobile-ui-prompt-errorprompt**\r\n  - 加入adhere-mobile-ui-prompt-errorprompt组件\r\n* **adhere-mobile-ui-tabs**\r\n  - 加入adhere-mobile-ui-tabs组件\r\n* **adhere-mobile-ui-time-picker-view**\r\n  - 加入adhere-mobile-ui-time-picker-view组件\r\n* **adhere-mobile-ui-anthoc**\r\n  - 加入adhere-mobile-ui-anthoc组件\r\n* **adhere-mobile-ui-auto-complete**\r\n  - 加入adhere-mobile-ui-auto-complete组件\r\n* **adhere-ui-auto-complete**\r\n  - 加入adhere-ui-auto-complete组件\r\n* **adhere-mobile-ui-prsl**\r\n  - 加入adhere-mobile-ui-prsl组件\r\n* **adhere-ui-quick-range-date**\r\n  - 加入adhere-ui-quick-range-date组件\r\n* **adhere-mobile-ui-popovermenu**\r\n  - 加入adhere-mobile-ui-popovermenu组件\r\n* **adhere-mobile-ui-quick-range-date**\r\n  - 加入adhere-mobile-ui-quick-range-date组件\r\n* **adhere-ui-currency-symbol**\r\n  - 加入adhere-ui-currency-symbol组件\r\n* **adhere-ui-searchtable**\r\n  - 拖拽排序加入可以在列上加入自定义句柄\r\n  - $search中的输入框去掉trim\r\n  - $search中加入isShowLabelSymbol配置项对ProSearchTable的label符号进行控制\r\n  - 加入REM适配\r\n  - 加入导出excel功能\r\n  - 查询区域加入工具栏\r\n  - 操作工具栏和查询工具栏分离\r\n  - 查询工具栏加入收起功能\r\n  - OptionsWrap加入收起功能\r\n  - 缺省的工具按钮修改\r\n  - 列头和查询文字支持tip显示\r\n  - 修改renderSearchToolBar变为renderTitle，renderSearchBarExtra，renderSearchBarActions\r\n  - 可以自定义高级查询面板，高级查询优化\r\n  - 使用fetchData的方法都变成Promise\r\n  - 可编辑单元格和可编辑的Table单元格中$editable的rules和props支持函数形式\r\n* **adhere-ui-anthoc**\r\n  - Form中加入对FormItem加入getErrorContainer自定义错误输出\r\n  - Form中加入NestingFormItem组件\r\n  - Form的Validate的rules加入required设置\r\n  - 修复CheckAll不返回children的默认值设置\r\n  - ConfigProvider加入router、publicPath参数的传递\r\n  - CheckboxGroup加入spaceProps属性的设置\r\n  - ArrayEntityValueHOC、TreeEntityValueHOC加入isUsePrimaryValue(是否使用原始值)的判断\r\n  - tree加入了AutoComplete、table加入了TreeAutoComplete\r\n  - tree-select加入数据源组件\r\n  - 加入Calendar的ValueHOC\r\n  - 加入ListPagingEntityValueHOC\r\n  - 加入一系列EntityValueHOC\r\n  - List和Table的Paging加入SuspenseAsync的包裹\r\n  - 加入AutoCompleteSelectInput\r\n  - 加入Tag的AutoComplete\r\n  - 带有全选按钮可以自定义全选按钮的位置\r\n  - hoc文件结构调整\r\n* **adhere-util**\r\n  - 加入getSaerch、getPathname方法\r\n  - encrypt函数加入options\r\n  - 加入dom尺寸计算方法\r\n  - clientToCtxPoint去掉使用zoom计算\r\n  - 加入pxToRem方法\r\n  - 修复math中的clientToCtxPoint方法适配zoom\r\n  - 加入getTransformValues方法\r\n  - treeToArray方法排除children属性\r\n  - 加入isPromise方法\r\n  - 修改getTopDom方法的BUG，selector支持数组形式\r\n  - 加入gcoord\r\n  - getTopDom方法修改\r\n  - 加入pascalCaseToKebabCase2\r\n  - pascalCaseToKebabCase方法修改\r\n  - 将未导出的ts定义进行导出\r\n  - 修复tree中的若干方法的细节\r\n* **adhere-ui-searchlist**\r\n  - 使用fetchData的方法都变成Promise\r\n  - 修改文件名的大小写\r\n  - 综合修改 1.修复已知BUG 2.适配adhere-ui-searchtable的修改\r\n* **adhere-ui-fieldgeneratortodict**\r\n  - 优化组件实现，加入了直接使用预定义名称使用的方式，减少拼接\r\n  - 加入一系列ValueEntityHOC\r\n* **adhere-ui-messagedialog**\r\n  - Trigger加入defaultCloseBtn配置\r\n  - 修改Trigger修改props不刷新的问题\r\n  - 加入allowMultipleInstances参数控制是否允许多实例共存\r\n  - Mobile的适配\r\n  - 修复MaximizeModal组件最大化和最小化的样式问题\r\n  - 加入renderToWrapper方法\r\n  - 加入disable设置和update刷新方法\r\n  - 加入是否允许多实例共存的设置\r\n  - 加入Trigger和TriggerPrompt组件\r\n  - 加入disabled设置和update刷新方法\r\n  - Modal和MaximizeModal的返回值中加入setConfig方法\r\n* **adhere-ui-suspense**\r\n  - 加入onFirstFetchDataBefore和onFirstFetchDataAfter方法\r\n  - 加入onFirstFetchDataBefore和onFirstFetchDataAfter方法\r\n  - Asyc和Sync在Impl中实现，加入Impl实现\r\n* **adhere-ui-popup**\r\n  - Action为空不渲染wrapper\r\n  - 移动端适配\r\n  - 加入对closeAction的控制\r\n  - 加入renderToWrapper方法\r\n  - 加入Trigger和TriggerPrompt组件\r\n  - 加入disabled设置和update刷新方法\r\n* **adhere-ui-scrollload**\r\n  - 加入HIDE_EMPTY做性能优化\r\n  - 加入disabled设置\r\n  - 加入getScrollContainer方法\r\n* **adhere-ui-autocomplete**\r\n  - TreeAutoComplete加入不筛选的属性\r\n  - 重构最终数据源的计算\r\n  - 修改初始化没有下拉数据的BUG\r\n* **adhere-ui-flexlayout**\r\n  - Auto加入isUseNormal属性\r\n  - 加入isUseNormal属性\r\n  - 加入REM适配\r\n  - 展开和收起(trigger)内部实现修改\r\n  - 加入展开和收起功能(trigger)\r\n  - 加入LCRLayout、TCBLayout\r\n* **adhere-util-communication-ajax**\r\n  - loading适配移动端\r\n  - 修改FormData值是数组情况\r\n* **adhere-ui-configprovider**\r\n  - 加入router、publicPath参数的注入\r\n  - 加入media配置项控制是否支持REM\r\n  - 加入Wrapper元素用来存放css变量\r\n* **adhere-ui-css**\r\n  - 加入adhere-box-shadow-primary变量\r\n  - 加入REM适配\r\n  - 加入DPR变量\r\n  - init方法修改\r\n* **adhere-util-intl**\r\n  - 国际化方法加入description方法\r\n  - 序号词条翻译修改\r\n  - 加入quick-range-date的词条\r\n* **adhere-ui-olmap**\r\n  - 文件大小写修改为帕斯卡命名规则\r\n  - OLMap组件的fitZoom参数默认值修改\r\n* **adhere-ui-playground**\r\n  - Anchors修改\r\n  - SimpleTabs，CodeTabPanel加入className和style参数\r\n  - 加入PlayGroundTabMobile组件\r\n* **adhere-util-watchmemoized**\r\n  - 浅比较修改为Object.is\r\n* **adhere-ui-splitlayout**\r\n  - TRBLC结构调整\r\n* **adhere-ui-comment**\r\n  - 使用ScrollLoad的优化\r\n* **adhere-ui-contextmenu**\r\n  - 加入renderToWrapper方法\r\n  - 加入扇形菜单\r\n* **adhere-util-resource**\r\n  - dict.locals.config.js加入AntDesignMobile的国际化\r\n  - dict.locals.config.js加入可以动态添加和删除的方法\r\n  - dict.moment.config.js中加入时间国际化formats和本地化formats\r\n  - dict.locals.config.js加入可以动态添加和删除的方法\r\n* **adhere-ui-datedisplay**\r\n  - 加入本地化显示的组件\r\n  - 优化内部函数，去掉一些无用函数\r\n* **adhere-ui-hooks**\r\n  - 加入use\r\n  - useLatestState和useSetState修改为使用ref\r\n  - 加入useLatestState的hook\r\n  - 加入usePropToState的hook\r\n  - 加入useTriggerQuery\r\n  - 加入useSafeRef的hook\r\n  - 加入useLatestState的hook\r\n  - 加入usePropToState的hook\r\n  - 加入useSafeRef\r\n* **adhere-util-adapterscreen**\r\n  - 加入flexible方法适配REM\r\n  - 加入devicePixelRatio的适配\r\n* **adhere-ui-css**\r\n  - 加入adhere-box-shadow-primary变量\r\n  - 加入REM适配\r\n  - 加入DPR变量\r\n* **adhere-ui-tablegridlayout**\r\n  - 加入mode属性\r\n  - 奇偶颜色互换位置\r\n  - 加入REM适配\r\n* **adhere-ui-space**\r\n  - 间距BUG修改\r\n  - 加入REM适配\r\n* **adhere-ui-split**\r\n  - 间距BUG修改\r\n  - 加入REM适配\r\n* **adhere-ui-stickuplayout**\r\n  - 加入resize适配\r\n\r\n# 2.10.28\r\n\r\n***\r\n\r\n2023-09-28\r\n\r\n* **adhere-ui-searchtable**\r\n  - 修复$hide的列没有传递参数给接口的问题\r\n  - 有查询条件的列头图标高亮\r\n\r\n# 2.10.27\r\n\r\n***\r\n\r\n2023-09-24\r\n\r\n* **adhere-ui-space**\r\n  - 修复Rendered more hooks than during the previous render错误\r\n* **adhere-util-split**\r\n  - 修复Rendered more hooks than during the previous render错误\r\n\r\n# 2.10.26\r\n\r\n***\r\n\r\n2023-09-23\r\n\r\n* **adhere-ui-space**\r\n  - 去掉无用的console.log输出\r\n* **adhere-util-intl**\r\n  - 去掉无用的console.log输出\r\n\r\n# 2.10.25\r\n\r\n***\r\n\r\n2023-09-23\r\n\r\n* **adhere-ui-searchtable**\r\n  - 去掉无用的console.log输出\r\n\r\n# 2.10.24\r\n\r\n***\r\n\r\n2023-09-23\r\n\r\n* **adhere-ui-fieldgeneratortodict**\r\n  - Sync组件renderEmpty属性默认值修复\r\n\r\n# 2.10.23\r\n\r\n***\r\n\r\n2023-09-23\r\n\r\n* **adhere-util**\r\n  - tree.ts加入findParentNodeByKey方法\r\n  - casUrl加入defaultLocal参数\r\n* **adhere-ui-searchable**\r\n  - getPagination加入pageSizeOptions参数\r\n  - rowSelection的onChange事件对外提供结构\r\n  - 修复$hide判断条件\r\n* **adhere-ui-suspense**\r\n  - Sync修改数据改变的判断逻辑\r\n* **adhere-ui-space**\r\n  - Group中处理undefined和null的情况\r\n* **adhere-ui-split**\r\n  - Group中处理undefined和null的情况\r\n* **adhere-util-intl**\r\n  - 外部可以替换lib的国际化词条\r\n* **adhere-ui-searchlist**\r\n  - 修复分页BUG\r\n\r\n# 2.10.22\r\n\r\n***\r\n\r\n2023-09-02\r\n\r\n* **adhere-ui-fieldgeneratortodict**\r\n  - Select的onChange加入dataSource参数\r\n\r\n# 2.10.21\r\n\r\n***\r\n\r\n2023-08-29\r\n\r\n* **adhere-ui-messagedialog**\r\n  - 重新构建解决文件名称大小写问题\r\n\r\n# 2.10.20\r\n\r\n***\r\n\r\n2023-08-28\r\n\r\n* **adhere-util**\r\n  - toCamelCase方法加入split参数\r\n\r\n# 2.10.19\r\n\r\n***\r\n\r\n2023-08-26\r\n\r\n* **adhere-ui-fieldgeneratortodict**\r\n  - TreeSelect和Cascader加入flat数据的支持\r\n  - 修复TreeSelect异步加载生成器BUG和Cascader异步加载生成器的BUG\r\n* **adhere-util**\r\n  - 修复tree的arrayToAntdTree方法\r\n\r\n# 2.10.18\r\n\r\n***\r\n\r\n2023-08-23\r\n\r\n* **adhere-ui-fieldgeneratortodict**\r\n  - 修复TreeSelect异步加载生成器BUG\r\n  - 加入Cascader异步加载生成器\r\n* **adhere-util-resource**\r\n  - dict.gis.config.js加入Dict.handlers.ResourceGisDefaultExtent\r\n\r\n# 2.10.17\r\n\r\n***\r\n\r\n2023-08-20\r\n\r\n* **adhere-ui-playground**\r\n  - 修复PlayGroundMulit.less样式\r\n* **adhere-util-dict**\r\n  - 加入必要的异常处理\r\n\r\n# 2.10.16\r\n\r\n***\r\n\r\n2023-08-20\r\n\r\n* **adhere-ui-suspense**\r\n  - 修复未引入@baifendian/adhere-ui-spin样式的错误\r\n\r\n# 2.10.15\r\n\r\n***\r\n\r\n2023-08-19\r\n\r\n* **adhere-ui-globalindicator**\r\n  - 使用spin.js重构\r\n* **adhere-ui-spin**\r\n  - 使用spin.js重构\r\n* **adhere-ui-suspense**\r\n  - 默认renderNormalLoading使用adhere-ui-spin实现\r\n\r\n# 2.10.14\r\n\r\n***\r\n\r\n2023-08-18\r\n\r\n* **adhere-ui-tablegridlayout**\r\n  - 加入REM适配\r\n  - 加入show属性控制显隐\r\n\r\n# 2.10.13\r\n\r\n***\r\n\r\n2023-08-17\r\n\r\n* **adhere-ui-dict**\r\n  - 加入useDict\r\n\r\n# 2.10.12\r\n\r\n***\r\n\r\n2023-08-17\r\n\r\n* **adhere-ui-suspense**\r\n  - 加入renderNormalLoading设置\r\n* **adhere-ui-fieldgeneratortodict**\r\n  - Suspense.Sync加入renderNormalLoading\r\n* **adhere-ui-dict**\r\n  - 返回值结构调整为data,isPending,isValidate,加入renderNormalLoading设置\r\n\r\n# 2.10.11\r\n\r\n***\r\n\r\n2023-08-15\r\n\r\n* **adhere-ui-revoiving**\r\n  - Swiper升级到最新版本\r\n* **adhere-ui-swipeout**\r\n  - Swiper升级到最新版本\r\n\r\n# 2.10.10\r\n\r\n***\r\n\r\n2023-08-15\r\n\r\n* **antd升级到最新版本*\r\n\r\n# 2.10.9\r\n\r\n***\r\n\r\n2023-08-14\r\n\r\n* **adhere-ui-revoiving**\r\n  - 加入Swiper的config\r\n* **adhere-ui-ajax**\r\n  - 修复出现异常的时候进行reject的操作\r\n\r\n# 2.10.8\r\n\r\n***\r\n\r\n2023-08-10\r\n\r\n* **adhere-ui-tablegridlayout**\r\n  - 加入方向样式\r\n\r\n# 2.10.7\r\n\r\n***\r\n\r\n2023-08-09\r\n\r\n* **adhere-ui-fieldgeneratortodict**\r\n  - 动态、静态字典内部加载数据策略修改\r\n  - 组件上加入了refresh刷新字典的方法\r\n* **adhere-ui-polygonselection**\r\n  - cropping样式修改\r\n\r\n# 2.10.6\r\n\r\n***\r\n\r\n2023-08-08\r\n\r\n* **adhere-ui-writingboard**\r\n  - 同步adhere-ui-flexlayout的修改\r\n* **adhere-ui-polygonselection**\r\n  - 同步adhere-ui-flexlayout的修改\r\n\r\n# 2.10.5\r\n\r\n***\r\n\r\n2023-08-07\r\n\r\n* **adhere-util**\r\n  - 加入formatMilliseconds方法\r\n* **adhere-ui-flexlayout**\r\n  - render修改为childre\r\n* **adhere-ui-splitlayout**\r\n  - TRBLC结构调整\r\n* **adhere-ui-messagedialog**\r\n  - 加入MaximizeModal\r\n* **adhere-ui-fieldgeneratortodict**\r\n  - 根据原始字典生成各种形式的组件，无需像之前一样定义出所有字典\r\n  - 加入onDataSourceChange事件\r\n  - 加入TreeSelect的异步加载\r\n\r\n# 2.10.4\r\n\r\n***\r\n\r\n2023-07-27\r\n\r\n* **adhere-ui-searchtable**\r\n  - $search类型加入sort字段定义\r\n\r\n# 2.10.3\r\n\r\n***\r\n\r\n2023-07-22\r\n\r\n* **adhere-util-intl**\r\n  - 词条错误修复\r\n* **adhere-util-ajax**\r\n  - getSendParams默认返回值修改\r\n* **adhere-ui-messagedialog**\r\n  - modal的props参数传递顺序修改\r\n* **adhere-ui-richtext-sandbox**\r\n  - WangEditor加入查看的样式\r\n\r\n# 2.10.2\r\n\r\n***\r\n\r\n2023-07-16\r\n\r\n* **adhere-ui-searchtable**\r\n  - 修复分页快速导航回车触发2次查询BUG\r\n* **adhere-ui-flexlayout**\r\n  - 加入Split配置\r\n* **adhere-ui-splitlayout**\r\n  - 加入可以Split的TRBLC\r\n* **adhere-util**\r\n  - 修复base64Decode的BUG\r\n\r\n# 2.10.1\r\n\r\n***\r\n\r\n2023-07-10\r\n\r\n* **adhere-ui-searchtable**\r\n  - 修复sync\r\n\r\n# 2.10.0\r\n\r\n***\r\n\r\n2023-07-09\r\n\r\n* **adhere-ui-expression**\r\n  - 加入adhere-ui-expression组件\r\n* **adhere-ui-searchtable**\r\n  - column中headerCellAlign支持排序单独列头\r\n  - ProTableFactory中列头筛选BUG修改\r\n  - EditableCellView的样式BUG修正\r\n  - DragSortRow修改，TreeData样式的修改\r\n* **adhere-util**\r\n  - 加入Range相关dom方法，修改includeHTML方法\r\n* **adhere-ui-fieldgeneratortodict**\r\n  - TransferFormItem加入Suspense.Sync\r\n* **adhere-ui-ajax**\r\n  - get | post | path | put | delete的返回值修改，返回xhr对象加以更精细的控制\r\n  - 发送请求参数加入需要进行JSON.stringify的时候加入customSendJSONStringify进行自定\r\n* **adhere-util-adapterscreen**\r\n  - 重构\r\n\r\n# 2.9.5\r\n\r\n***\r\n\r\n2023-06-18\r\n\r\n* **adhere**\r\n  - 修复less中的@import引起的vite无法解析错误\r\n\r\n# 2.9.4\r\n\r\n***\r\n\r\n2023-06-15\r\n\r\n* **adhere-util-dict**\r\n  - 修复refresh的BUG\r\n* **adhere-util**\r\n  - dom加入includeHTML方法\r\n\r\n# 2.9.3\r\n\r\n***\r\n\r\n2023-06-11\r\n\r\n* **adhere-ui-anthoc**\r\n  - Form加入ValidatorRules属性\r\n\r\n# 2.9.2\r\n\r\n***\r\n\r\n2023-06-08\r\n\r\n* **adhere-util-communication-ajax**\r\n  - FormData加入支持传入fileName参数\r\n* **adhere-util**\r\n  - 加入dataUrlToBlob方法\r\n\r\n# 2.9.1\r\n\r\n***\r\n\r\n2023-06-07\r\n\r\n* **adhere-ui-datedisplay**\r\n  - 加入toString方法\r\n* **adhere-ui-ellipsis**\r\n  - 修复样式错误\r\n\r\n# 2.9.0\r\n\r\n***\r\n\r\n2023-06-07\r\n\r\n* **adhere-ui-datedisplay**\r\n  - 加入全局设置locale,自定义本地化格式\r\n* **adhere-ui-imagelazy**\r\n  - 加入图片加载错误的处理\r\n* **adhere-ui-ellipsis**\r\n  - 加入adhere-ui-ellipsis组件\r\n* **adhere-ui-searchtable**\r\n  - 分页加入showSizeChanger属性\r\n\r\n# 2.8.1\r\n\r\n***\r\n\r\n2023-06-03\r\n\r\n* **adhere**\r\n  - 依赖项缺失修改\r\n\r\n# 2.8.0\r\n\r\n***\r\n\r\n2023-06-01\r\n\r\n* **adhere-ui-css**\r\n  - 加入使用css变量管理主题的动态切换\r\n* **adhere-ui-configprovider**\r\n  - 加入theme参数支持动态切换主题\r\n\r\n# 2.7.10\r\n\r\n***\r\n\r\n2023-06-01\r\n\r\n* **adhere-util-dict**\r\n  - props传值修改\r\n\r\n# 2.7.9\r\n\r\n***\r\n\r\n2023-05-30\r\n\r\n* **adhere-util-dict**\r\n  - react字典组件加入reload方法\r\n\r\n# 2.7.8\r\n\r\n***\r\n\r\n2023-05-28\r\n\r\n* **adhere-ui-flexlayout**\r\n  - Label和Value加入ref获取Root的EL元素\r\n* **adhere-ui-adthoc**\r\n  - 加入color-picker\r\n* **adhere-ui-searchlist**\r\n  - 加入回车搜索\r\n* **adhere-ui-searchtable**\r\n  - 加入回车搜索\r\n* **adhere-util-dict**\r\n  - 修复react字典组件\r\n* **adhere-ui-suspense**\r\n  - ts类型修复\r\n\r\n# 2.7.7\r\n\r\n***\r\n\r\n2023-05-24\r\n\r\n* **adhere-ui-flexlayout**\r\n  - auto样式错误修复\r\n* **adhere-ui-imagelazy**\r\n  - 丰富props属性\r\n* **adhere-util-dict**\r\n  - 修复react组件update的BUG\r\n\r\n# 2.7.6\r\n\r\n***\r\n\r\n2023-05-19\r\n\r\n* **adhere-ui-searchtable**\r\n  - 修复TableGridLayout在Firefox下样式显示异常的错误\r\n\r\n# 2.7.5\r\n\r\n***\r\n\r\n2023-05-17\r\n\r\n* **adhere-ui-configprovider**\r\n  - 加入onIntlInit事件\r\n\r\n# 2.7.4\r\n\r\n***\r\n\r\n2023-05-17\r\n\r\n* **adhere-util-intl**\r\n  - 修复词条去重后的BUG\r\n\r\n# 2.7.3\r\n\r\n***\r\n\r\n2023-05-17\r\n\r\n* **adhere-util-resource**\r\n  - 引入阿拉伯语种的错误\r\n* **adhere-util-intl**\r\n  - 加入ar_EG国际化词条\r\n\r\n# 2.7.2\r\n\r\n***\r\n\r\n2023-05-17\r\n\r\n* **adhere-util-resource**\r\n  - locals中加入了新的语种\r\n\r\n# 2.7.1\r\n\r\n***\r\n\r\n2023-05-15\r\n\r\n* **adhere-ui-fieldgeneratortodict**\r\n  - 修复AutoCompleteFormItem默认值为空的BUG\r\n\r\n# 2.7.0\r\n\r\n***\r\n\r\n2023-05-15\r\n\r\n* **adhere-ui-polygonselection**\r\n  - 加入图片剪裁组件(Cropping)\r\n\r\n# 2.6.1\r\n\r\n***\r\n\r\n2023-05-12\r\n\r\n* **adhere-ui-searchtable**\r\n  - 修复页面查询条件缓存\r\n* **adhere-ui-polygonselection**\r\n  - BUG修改\r\n\r\n# 2.6.0\r\n\r\n***\r\n\r\n2023-05-08\r\n\r\n* **adhere-ui-writingboard**\r\n  - 加入signature组件\r\n\r\n# 2.5.7\r\n\r\n***\r\n\r\n2023-05-05\r\n\r\n* **adhere-ui-searchtable**\r\n  - 高级搜索控件加入popUpDefaultProps\r\n\r\n# 2.5.6\r\n\r\n***\r\n\r\n2023-05-05\r\n\r\n* **adhere-ui-richtext-sandbox**\r\n  - WangEditor的BUG修改\r\n  - WangEditor加入国际化\r\n* **adhere-ui-configprovider**\r\n  - 加入国际化的Context\r\n\r\n# 2.5.5\r\n\r\n***\r\n\r\n2023-05-04\r\n\r\n* **adhere-ui-richtext-sandbox**\r\n  - 重构，变为可以对任何富文本进行sandbox\r\n  - 分离react-quill编辑器\r\n  - 分离wang-editor编辑器\r\n* **adhere-ui-configprovider**\r\n  - 加入国际化的Context\r\n\r\n# 2.5.4\r\n\r\n***\r\n\r\n2023-04-30\r\n\r\n* **adhere-ui-flexlayout**\r\n  - TRBLC布局滚动问题适配\r\n\r\n# 2.5.3\r\n\r\n***\r\n\r\n2023-04-28\r\n\r\n* **adhere-ui-flexlayout**\r\n  - 修复TRBLC布局出现滚动的BUG\r\n\r\n# 2.5.2\r\n\r\n***\r\n\r\n2023-04-27\r\n\r\n* **adhere-ui-flexlayout**\r\n  - 修复TRBLC布局出现滚动的BUG\r\n\r\n# 2.5.1\r\n\r\n***\r\n\r\n2023-04-27\r\n\r\n* **adhere-ui-flexlayout**\r\n  - 栅格系统BUG修改\r\n* **adhere-ui-searchtable**\r\n  - 列表名称传值修改\r\n* **adhere-ui-slidelayout**\r\n  - 修复初始化关闭样式为生效BUG\r\n\r\n# 2.5.0\r\n\r\n***\r\n\r\n2023-04-25\r\n\r\n* **adhere-ui-flexlayout**\r\n  - 栅格系统BUG修改\r\n  - 加入TRBLC布局\r\n\r\n# 2.4.3\r\n\r\n***\r\n\r\n2023-04-25\r\n\r\n* **adhere-ui-searchtable**\r\n  - 修改高级搜索的样式\r\n* **adhere-ui-slidelayout**\r\n  - 加入收起后hide操作\r\n\r\n# 2.4.2\r\n\r\n***\r\n\r\n2023-04-22\r\n\r\n* **adhere-util**\r\n  - Url的parse修改\r\n\r\n# 2.4.1\r\n\r\n***\r\n\r\n2023-04-22\r\n\r\n* **adhere-ui-flexlayout**\r\n  - HorizontalFlexLayout样式修改,加入flex-wrap: nowrap;\r\n\r\n# 2.4.0\r\n\r\n***\r\n\r\n2023-04-17\r\n\r\n* **adhere-ui-searchtable**\r\n  - column中设置align的bug修改\r\n  - 支持tree展示的相关设置\r\n  - 查询和Editor中表单控件渲染逻辑修改\r\n* **adhere-ui-flexlayout**\r\n  - 纵向栅格支持\r\n  - 栅格系统优化\r\n\r\n# 2.3.0\r\n\r\n***\r\n\r\n2023-04-12\r\n\r\n* **adhere-ui-searchtable**\r\n  - 加入clearAll方法\r\n  - clear方法修改为clearSearch和clearPaging方法\r\n  - props加入默认值\r\n* **adhere-ui-searchlist**\r\n  - 加入clearAll方法\r\n  - props加入默认值\r\n* **adhere-util-iframeio**\r\n  - 加入先序列化操作\r\n\r\n# 2.2.0\r\n\r\n***\r\n\r\n2023-04-09\r\n\r\n* **adhere-ui-anthoc**\r\n  - 加入adhere-ui-anthoc组件\r\n* **adhere-ui-fieldgeneratortodict**\r\n  - 加入adhere-ui-fieldgeneratortodict组件\r\n* **adhere-ui-searchtable**\r\n  - Search布局的修改\r\n* **adhere-util**\r\n  - 加入和size相关的方法\r\n* **adhere-util-intl**\r\n  - 加入searchlist组件的词条\r\n* **adhere-ui-globalindicator**\r\n  - 加入hideAll方法，细节的调整\r\n* **adhere-ui-searchlist**\r\n  - 加入ResourceManager\r\n  - 细节的调整\r\n* **adhere-ui-flexlayout**\r\n  - 加入栅格系统\r\n* **~~adhere-ui-antdformitem~~**\r\n  - ~~删除此组件，拆解成anthoc和fieldgeneratortodict两个组件~~\r\n\r\n# 2.1.1\r\n\r\n***\r\n\r\n2023-04-01\r\n\r\n* **adhere-ui-searchlist**\r\n  - 加入adhere-ui-searchlist组件\r\n\r\n# 2.1.0\r\n\r\n***\r\n\r\n2023-04-01\r\n\r\n* **adhere-ui-searchlist**\r\n  - Search布局修改\r\n  - Search布局样式调整\r\n* **adhere-ui-searchtable**\r\n  - 分离出Search接口\r\n* **adhere-ui-intl**\r\n  - 加入新词条\r\n\r\n# 2.0.7\r\n\r\n***\r\n\r\n2023-03-23\r\n\r\n* **adhere-util-dist**\r\n  - set方法bug修改\r\n\r\n# 2.0.6\r\n\r\n***\r\n\r\n2023-03-22\r\n\r\n* **adhere-ui-searchtable**\r\n  - 加入sync方法\r\n  - renderInner中的逻辑修改\r\n* **adhere-ui-split**\r\n  - Group中的Fragment拉平\r\n  - 加入响应式\r\n* **adhere-ui-space**\r\n  - Group中的Fragment拉平\r\n  - 加入响应式\r\n* **adhere-util-dict**\r\n  - 加入Dict对应的React组件\r\n  - 已知问题修改\r\n* **adhere-ui-suspense**\r\n  - sync判断逻辑修改\r\n  - Promise加入返回值的泛型\r\n* **adhere-ui-antdformitem**\r\n  - 加入Tag生成器\r\n  - 加入Menu生成器\r\n  - 加入Dropdown生成器\r\n  - 加入Breadcrumb生成器\r\n  - 加入Segmented生成器\r\n  - 加入Timeline生成器\r\n  - 加入Mentions生成器\r\n  - 加入Steps生成器\r\n\r\n# 2.0.5\r\n\r\n***\r\n\r\n2023-03-06\r\n\r\n* **adhere-ui-searchtable**\r\n  - 全局状态管理下BUG的修改\r\n  - 点击两次触发编辑的BUG\r\n* **adhere-util**\r\n  - 去掉adhere-util-watchmemoized的依赖\r\n\r\n# 2.0.4\r\n\r\n***\r\n\r\n2023-02-27\r\n\r\n* **adhere-ui-antdformitem**\r\n  - 加入AutoCompleteFormItem\r\n  - 加入加入SubmitButton\r\n* **adhere-util-resource**\r\n  - 去掉request.context的Api\r\n\r\n# 2.0.3\r\n\r\n***\r\n\r\n2023-01-31\r\n\r\n* **adhere-ui-searchtable**\r\n  - $search支持排序\r\n  - 查询面板样式修改\r\n* **adhere-ui-antdformitem**\r\n  - 组件的抽取\r\n  - 生成器组件查询逻辑的修改\r\n\r\n# 2.0.2\r\n\r\n***\r\n\r\n2023-01-29\r\n\r\n* **公共**\r\n  - 已知问题修改\r\n* **adhere-ui-searchtable**\r\n  - 高级搜索触发条件修改\r\n\r\n# 2.0.1\r\n\r\n***\r\n\r\n2023-01-21\r\n\r\n* **公共**\r\n  - 已知问题修改\r\n* **adhere-ui-antdformitem**\r\n  - BUG修改\r\n* **adhere-ui-searchtable**\r\n  - BUG修改\r\n\r\n# 2.0.0\r\n\r\n***\r\n\r\n2023-01-04\r\n\r\n* **react升级到18**\r\n* **antd升级到5.x*\r\n\r\n# 1.0.22\r\n\r\n***\r\n\r\n2022-11-22\r\n\r\n* **adhere-ui-historyback**\r\n  - 修改为返回的判断逻辑\r\n* **adhere-ui-writingboard**\r\n  - 加入导出图片设置背景色\r\n* **adhere-ui-antdformitem**\r\n  - 加入adhere-ui-antdformitem代码\r\n  - 加入Input和TextArea组件\r\n  - 加入所有Antd组件的默认操作\r\n* **adhere-ui-searchtable**\r\n  - 加入ProSearchTable\r\n  - 加入editor功能\r\n  - 加入对列表头分组的修改\r\n* **adhere-util**\r\n  - 加入DateUtil\r\n  - 加入FormatUtil\r\n  - 加入EncryptUtil\r\n  - color加入新方法\r\n* **adhere-util-adapterscreen**\r\n  - Safari浏览器适配\r\n* **adhere-ui-prompt-errorprompt**\r\n  - 分成dialog和message\r\n* **adhere-ui-prompt-successprompt**\r\n  - 分成dialog和message\r\n* **adhere-ui-prompt-warnprompt**\r\n  - 分成dialog和message\r\n* **adhere-util-resource**\r\n  - 加入resource资源目录\r\n* **adhere-ui-reactquill-sandbox**\r\n  - 加入adhere-ui-reactquill-sandbox组件\r\n\r\n# 1.0.21\r\n\r\n***\r\n\r\n2022-09-27\r\n\r\n* **组件加入memo**\r\n* **adhere-util的tree加入若干方法**\r\n* **adhere-ui-popup的close方法修改**\r\n* **adhere-util-intl加入自定义k,v**\r\n* **已知问题的修改*\r\n\r\n# 1.0.20\r\n\r\n***\r\n\r\n2022-09-12\r\n\r\n* **类组件改用hooks编写**\r\n* **一些已知问题修改*\r\n\r\n# 1.0.19\r\n\r\n***\r\n\r\n2022-09-01\r\n\r\n* **adhere-util-iframeio**\r\n  - 加入adhere-util-iframeio组件\r\n* **adhere-ui-configprovider**\r\n  - adhere-ui-configprovider组件\r\n* **adhere-ui-tablegridlayout**\r\n  - 加入getRenderDetail方法\r\n* **adhere-util-permission**\r\n  - 加入PermissionFun\r\n* **adhere-ui-searchtable**\r\n  - table样式修改\r\n  - 加入onSearchPanelCollapseBefore和onSearchPanelCollapseAfter钩子\r\n  - searchfooteritem加入key\r\n* **adhere-util-watchmemoized**\r\n  - Events对象引用修改\r\n\r\n# 1.0.18\r\n\r\n***\r\n\r\n2022-7-25\r\n\r\n* **adhere-util-dict**\r\n  - refresh加入链式调用\r\n* **adhere-ui-historyback**\r\n  - 修改为window.location.length\r\n* **adhere-ui-bmap**\r\n  - 加载BMap机制的修改\r\n* **adhere-ui-suspense**\r\n  - 加入sync组件\r\n  - 加入async组件\r\n* **adhere-ui-hooks**\r\n  - useSetState加入泛型\r\n* **adhere-ui-searchtable**\r\n  - onTableChange的BUG修改\r\n  - 加入renderSearchFormBefore和renderSearchFormAfter方法\r\n  - onClear加入Promise\r\n  - 加入getLimit方法\r\n* **adhere-ui-scrollload**\r\n  - BUG修改\r\n* **adhere-util-intl**\r\n  - 加入新词条\r\n* **adhere-ui-comment**\r\n  - 加入adhere-ui-comment组件\r\n* **adhere-ui-datedisplay**\r\n  - 加入adhere-ui-datedisplay组件\r\n* **adhere-ui-flexlayout**\r\n  - 加入HorizontalFlexLayout布局\r\n  - 加入VerticalFlexLayout布局\r\n  - 加入ToolBarLayout布局\r\n  - 加入BackLayout布局\r\n  - 加入ScrollLayout布局\r\n* **adhere-ui-contourblock**\r\n  - 加入adhere-ui-contourblock组件\r\n* **adhere-util-resource**\r\n  - dict.moment.config.js资源的修改\r\n* **adhere-ui-tablegridlayout**\r\n  - BUG的修改\r\n\r\n# 1.0.17\r\n\r\n***\r\n\r\n2022-6-5\r\n\r\n* **按需加载antd**\r\n* **adhere-ui-writingboard**\r\n  - 加入adhere-ui-writingboard组件\r\n* **adhere-ui-popup**\r\n  - 添加showClosePrePopup\r\n  - bug修改\r\n* **adhere-util-browsersniff**\r\n  - 大小写区分\r\n* **adhere-util-adapterscreen**\r\n  - 修改实现逻辑，增加默认计算\r\n* **adhere-ui-hooks**\r\n  - 加入useSetState\r\n* **adhere-ui-tablegridlayout**\r\n  - 加入adhere-ui-tablegridlayout\r\n* **adhere-ui-imagelazy**\r\n  - 使用lazysizes进行重构\r\n* **adhere-ui-conditionalrender**\r\n  - 加入conditionalNotEmptyArr方法\r\n* **adhere-ui-messagedialog**\r\n  - Modal参数名称修改(cloneBtn修改为closeBtn)\r\n* **adhere-ui-scrollload**\r\n  - 加入getScrollContainer自定义滚动元素\r\n* **adhere-ui-searchtable**\r\n  - 重置的修改\r\n  - SearchForm的children位置修改\r\n  - ColumnSetting修改\r\n  - 去掉SearchFrom组件，改用TableGridLayout\r\n* **adhere-util**\r\n  - tree的set...修改\r\n\r\n# 1.0.16\r\n\r\n***\r\n\r\n2022-4-26\r\n\r\n* **adhere-ui-confirm-delconfirm**\r\n  - 加入title，text和icon参数\r\n* **adhere-ui-confirm-importantconfirm**\r\n  - 加入title，text和icon参数\r\n* **adhere-ui-forceupdate**\r\n  - 加入代码\r\n* **adhere-ui-searchtable**\r\n  - 加入列拖动功能\r\n  - 加入列设置功能\r\n  - 加入表格密度设置功能\r\n  - 序号列命名修改\r\n* **adhere-util-intl**\r\n  - 加入新词条\r\n\r\n# 1.0.15\r\n\r\n***\r\n\r\n2022-4-5\r\n\r\n* **adhere-ui-conditionalrender**\r\n  - 加入conditionalRender和conditionalArr两个方法\r\n* **adhere-ui-searchtable**\r\n  - renderTableNumberColumn修改\r\n  - 跨页选取的支持\r\n* **adhere-util-communication-ajax**\r\n  - 构造函数参数修改\r\n  - 细节的调整\r\n  - Content-Type修改\r\n\r\n# 1.0.14\r\n\r\n***\r\n\r\n2022-1-25\r\n\r\n* **adhere-ui-messagedialog**\r\n  - close方法的修改\r\n* **adhere-ui-conditionalrender**\r\n  - 加入ConditionalRender.Show组件进行display切换\r\n  - 加入ConditionalRender.Visibility组件进行visibility切换\r\n* **adhere-ui-playground**\r\n  - 加入CodePanel组件\r\n  - 加入CodeTabPanel组件\r\n  - 加入CodeBoxPanel组件\r\n  - 加入AnchorNavigation组件\r\n  - 加入PlayGroundTab组件\r\n  - 细化Card组件加入description配置\r\n  - 细化PlayGround组件\r\n  - 细化PlayGroundMulit组件\r\n* **adhere-ui-revolving**\r\n  - bug的修改\r\n* **adhere-util**\r\n  - dom加入新方法\r\n\r\n# 1.0.13\r\n\r\n***\r\n\r\n2021-12-28\r\n\r\n* 区分lib和es两个目录来区分main和module\r\n* ssr的支持\r\n* **adhere-util-dict**\r\n  - 如果value是函数加入是否缓存的设置\r\n* **adhere-util-decorators**\r\n  - componentDidCatch中加入Loading chunk重新加载\r\n* **adhere-ui-formitemcreator**\r\n  - 优化栅格布局\r\n\r\n# 1.0.12\r\n\r\n***\r\n\r\n2021-12-13\r\n\r\n* **adhere-ui-css**\r\n  - normalize-default.less修改\r\n  - mixin.less修改\r\n* **adhere-ui-searchtable**\r\n  - searchformlabel和searchformvalue加入其他属性的混入\r\n* **adhere-util**\r\n  - base加入omitObject方法\r\n  - tree的修改\r\n* **adhere-util-communication-ajax**\r\n  - 加入notification的节流\r\n  - 修改传参错误和status的缺省处理\r\n* **adhere-util-dict**\r\n  - 加入config配置\r\n* **adhere-util-reactutil**\r\n  - 加入@baifendian/adhere-util-reactutil\r\n\r\n# 1.0.11\r\n\r\n***\r\n\r\n2021-11-19\r\n\r\n* **adhere-ui-playground**\r\n  - 加入collapse折叠操作\r\n* **adhere-ui-searchtable**\r\n  - componentDidUpdate的修改\r\n  - 分页没有时候的处理\r\n* **adhere-util**\r\n  - url库修改加入是否忽略空值、加入缓存\r\n* **adhere-util-intl**\r\n  - 加入新词条\r\n* **adhere-util-resource**\r\n  - dict.form.config.js资源的修改\r\n\r\n# 1.0.10\r\n\r\n***\r\n\r\n2021-11-4\r\n\r\n* **adhere-ui-hooks**\r\n  - 加入代码useForceUpdate\r\n* **adhere-ui-searchtable**\r\n  - 修改searchtableimplement.tsx的fetchData方法的传值BUG\r\n  - 样式大写修改为小写\r\n  - 加入getDataKey和getTotalKey方法\r\n  - getFetchListPropNameToFirstUpper自动生成\r\n  - column支持权限设置(authorized)\r\n  - onClear方法改为在原型链上定义\r\n  - 加入renderTableHeader渲染(表格头上方，查询条件下方)\r\n  - 加入renderTableFooter渲染(表格下方,分页上方)\r\n  - searchtableimplement.tsx加入getSearchParams方法获取所有查询参数\r\n  - 加入fixedTableSpaceBetween配置项(两端固定(表格的头始终在上方，分页始终在下方)\r\n  - 加入searchtablestateimplement.tsx实现类(state的支持)\r\n  - 修改无数据时样式的错乱\r\n  - 修改loading时的样式错乱\r\n\r\n# 1.0.9\r\n\r\n***\r\n\r\n2021-10-27\r\n\r\n* **adhere-ui-css**\r\n  - normalize-antd.less修改\r\n* **adhere-ui-messagedialog**\r\n  - BUG的修改\r\n* **adhere-ui-searchtable**\r\n  - 把max-width的限制去掉\r\n  - 关闭和展开查询条件加入默认状态和是否显示\r\n  - 加入表格体fit和滚动\r\n  - 加入表格固定列头，表格体滚动\r\n  - 加入searchtableimplement.tsx的默认实现\r\n* **adhere-util-browsersniff**\r\n  - 加入@baifendian/adhere-util-browsersniff\r\n* **adhere-util-validator**\r\n  - 加入@baifendian/adhere-util-validator\r\n\r\n# 1.0.8\r\n\r\n***\r\n\r\n2021-10-17\r\n\r\n* **adhere-ui-historyback**\r\n  - 加入火狐下不支持document.referrer\r\n* **adhere-ui-searchtable**\r\n  - 加入自定义序号列的渲染\r\n  - 搜索栏加入展开和关闭功能\r\n  - 加入Table的缺省传递props功能\r\n* **adhere-util**\r\n  - 加入url库\r\n* **adhere-util-communication-ajax**\r\n  - BUG的修改\r\n* **adhere-util-intl**\r\n  - 修改系统词条和用户词条的冲突\r\n  - 加入新词条\r\n\r\n# 1.0.7\r\n\r\n***\r\n\r\n2021-9-30\r\n\r\n* **adhere-ui-bmap**\r\n  - 加入@baifendian/adhere-ui-bmap组件\r\n* **adhere-ui-css**\r\n  - 加入common-no-select函数\r\n  - 加入switch.less\r\n* **adhere-ui-flexlayout**\r\n  - fixed和auto加入了getEl方法\r\n* **adhere-ui-olmap**\r\n  - 加入windLayer(风场)\r\n* **adhere-ui-playground**\r\n  - 加入adhere-ui-playground组件\r\n* **adhere-ui-polygonselection**\r\n  - 加入PolygonSelection(多边形选区)组件\r\n* **adhere-ui-splitlayout**\r\n  - onMouseup事件加入dragFinished事件触发\r\n  - 加入FlexLayout的use\r\n* **adhere-util**\r\n  - math修改\r\n* **adhere-util-domain**\r\n  - domain模块的浏览器端实现\r\n\r\n# 1.0.6\r\n\r\n***\r\n\r\n2021-7-2\r\n\r\n* **adhere-ui-notification**\r\n  - bug的修改\r\n* **adhere-ui-olmap**\r\n  - 热力图组件heatmap修改\r\n* **adhere-ui-popup**\r\n  - bug的修改\r\n* **adhere-ui-prompt-errorprompt**\r\n  - 加入返回值\r\n* **adhere-ui-prompt-successprompt**\r\n  - 加入返回值\r\n* **adhere-ui-prompt-warnprompt**\r\n  - 加入返回值\r\n* **adhere-ui-searchtable**\r\n  - index.less加入antd/es/pagination/style/index.less样式\r\n  - renderSearchFooterItems加入defaultItems参数\r\n* **adhere-ui-surnames**\r\n  - isTouch修改为从Util中调用\r\n* **adhere-util**\r\n  - 加入clientDetection客户端监测代码\r\n\r\n# 1.0.0\r\n\r\n***\r\n\r\n2020-12-22\r\n\r\n* 加入代码\r\n",remarkPlugins:[i.A]})))},73376:(r,e,n)=>{n.d(e,{A:()=>m});var a=n(86662),t=n(86056),i=n(26322),l=n(90264),o=n(38948);const d="fdFKYQbTadYRAFXyIsyC",u="TGQfKkX166qX5wG5Oi6O",h="xoMDGjw3kWAGwRmDVR2l",s="juDjVuIAwAS6vlI_lwTq",c="s2U_wfx5rmRlV8iKcHg5",m=()=>i.createElement("ul",{className:d},i.createElement("li",{className:u},i.createElement("dl",null,i.createElement("dt",null,"相关资源"),i.createElement("dd",null,i.createElement("ul",{className:h},i.createElement("li",{className:s},"自主研发",i.createElement("ul",null,i.createElement("li",null,i.createElement("a",{href:"http://49.232.163.126:8084/",target:"_blank",rel:"noopener noreferrer"},"adherev")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-BUILD",target:"_blank",rel:"noopener noreferrer"},"CTSJ-BUILD")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-BUILDV",target:"_blank",rel:"noopener noreferrer"},"CTSJ-BUILDV")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-STATE",target:"_blank",rel:"noopener noreferrer"},"CTSJ-STATE")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-ROUTER",target:"_blank",rel:"noopener noreferrer"},"CTSJ-ROUTER")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-VuexGenerator",target:"_blank",rel:"noopener noreferrer"},"CTSJ-VuexGenerator")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-React-SSR",target:"_blank",rel:"noopener noreferrer"},"CTSJ-React-SSR")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-DOC",target:"_blank",rel:"noopener noreferrer"},"CTSJ-DOC")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/CTSJ-DvaGenerator",target:"_blank",rel:"noopener noreferrer"},"CTSJ-DvaGenerator")),i.createElement("li",null,i.createElement("a",{href:"https://github.com/playerljc/WebViewJavascriptBridge",target:"_blank",rel:"noopener noreferrer"},"WebViewJavascriptBridge")))),i.createElement("li",{className:s},"模板工程",i.createElement("ul",null,i.createElement("li",null,i.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/adhere",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)")),i.createElement("li",null,i.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/polyfill",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)(支持IE)")),i.createElement("li",null,i.createElement("a",{href:"https://gitee.com/playerljc/ReactPro/tree/adhere-webpack5-js-ssr",target:"_blank",rel:"noopener noreferrer"},"ReactPro(G1)(SSR)")),i.createElement("li",null,i.createElement("a",{href:"https://gitee.com/playerljc/AntPro",target:"_blank",rel:"noopener noreferrer"},"AntPro(G1)")),i.createElement("li",null,i.createElement("a",{href:"http://git.baifendian.com/dongxu.guo/ReactWeb",target:"_blank",rel:"noopener noreferrer"},"ReactWeb(G3)")),i.createElement("li",null,i.createElement("a",{href:"http://git.baifendian.com/bo.li/Percent_Vue_Admin.git",target:"_blank",rel:"noopener noreferrer"},"PercentVue(G3)")),i.createElement("li",null,i.createElement("a",{href:"https://gitee.com/playerljc/VuePro",target:"_blank",rel:"noopener noreferrer"},"VuePro(G1)")))))))),i.createElement("li",{className:u},i.createElement("dl",null,i.createElement("dt",null,"帮助"),i.createElement("dd",null,i.createElement("ul",{className:h},i.createElement("li",{className:s},i.createElement("a",{href:o.Jk.O,target:"_blank",rel:"noopener noreferrer"},i.createElement(t.A,null),i.createElement("span",{className:c},"Gitlib"))),i.createElement("li",{className:s},i.createElement(l.N_,{to:"/adhere/changelog"},i.createElement(a.A,null),i.createElement("span",{className:c},"更新日志"))))))))},57655:(r,e,n)=>{n.d(e,{A:()=>o});var a=n(26322),t=n(73376);const i="iRCYuHNfJq0pHEnbdKD6",l="euj3MKKFmTV2Z9XvjuCG",o=r=>a.createElement("div",{className:i},a.createElement("div",{className:l},r.children),a.createElement(t.A,null))},38948:r=>{r.exports=JSON.parse('{"rE":"2.11.0","Jk":{"O":"https://github.com/playerljc/adhere"}}')}}]);