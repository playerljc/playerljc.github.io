const fs=require("fs"),path=require("path"),rootPath=path.join(__dirname,"../examples"),comRootPath="@/components/ui/anthonc/examples";function loop(o,t){o.forEach((o=>{const n=path.basename(o).substring(0,o.lastIndexOf(".")),e=path.join(t,o),a=fs.statSync(e);if(a.isFile()){let o=e.substring(rootPath.length+1);o=o.substring(0,o.lastIndexOf(".")).toLowerCase().replace("\\","/"),console.log(`\n          {\n            path: '/adhere/component/ui/anthoc/${o}',\n            component: AntHOC${n},\n          },\n        `)}else a.isDirectory()&&loop(fs.readdirSync(e),e)}))}loop(fs.readdirSync(rootPath),rootPath);