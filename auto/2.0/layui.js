/** LayuiCdn 2020-03-09 By https://www.layuicdn.com */
"use strict";!function(){var e=document,t=e.getElementsByTagName("script"),t=t[t.length-1],i=t.src.split("auto")[0],l=e.createElement("link"),r=e.createElement("script"),s=t.getAttribute("v")||"layui",a=t.getAttribute("e")||"layui";-1==["layui","layui.all"].indexOf(a)?console.error("警告:","LayuiCdn模块类型错误!"):"layui"!=s&&(s="layui-v"+s),l.type="text/css",l.rel="stylesheet",l.href=i+s+"/css/layui.css",l=l.outerHTML,r.type="text/javascript",r.src=i+s+"/"+a+".js",r=r.outerHTML,e.writeln(l,r)}();