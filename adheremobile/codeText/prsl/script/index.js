const fs=require("fs"),path=require("path");function code(e,n){return`\nimport React from 'react';\n\nimport DemoBlock from '@/lib/DemoBlock';\n\nimport Normal from './examples/${e}';\n\nexport default () => (\n  <DemoBlock style={{ height: '100%' }}>\n    <DemoBlock.Item title="${n}" style={{ height: '100%', overflow: 'hidden' }}>\n      <Normal />\n    </DemoBlock.Item>\n  </DemoBlock>\n);\n\n  `}const config=[{name:"ActionSheet.jsx",des:"使用ActionSheet进行操作"},{name:"API.jsx",des:"API方式使用"},{name:"CustomSearchItem.jsx",des:"自定义查询项"},{name:"CustomToolbarItem.jsx",des:"自定义工具栏项"},{name:"DND.jsx",des:"排序模式"},{name:"Extra.jsx",des:"扩展"},{name:"GridView.jsx",des:"多列"},{name:"List.jsx",des:"列表"},{name:"Local.jsx",des:"本地数据"},{name:"NoPaging.jsx",des:"无分页"},{name:"Normal.jsx",des:"基本使用"},{name:"Remote.jsx",des:"远程数据"},{name:"SearchHistory.jsx",des:"查询历史"},{name:"Selection.jsx",des:"选择模式"},{name:"SwiperAction.jsx",des:"使用Swipe进行操作"}],contextPath=path.join(__dirname,"../");config.forEach((e=>{fs.writeFileSync(path.join(contextPath,e.name),code(e.name,e.des));const n=e.name.substring(0,e.name.lastIndexOf("."));try{fs.mkdirSync(path.join(contextPath,"examples",n))}catch(e){}fs.writeFileSync(path.join(contextPath,"examples",n,"index.jsx"),"")}));