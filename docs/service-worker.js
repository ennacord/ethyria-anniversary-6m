if(!self.define){let i,e={};const n=(n,o)=>(n=new URL(n+".js",o).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(o,c)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let s={};const a=i=>n(i,r),d={module:{uri:r},exports:s,require:a};e[r]=Promise.all(o.map((i=>d[i]||a(i)))).then((i=>(c(...i),s)))}}define(["./workbox-29b31176"],(function(i){"use strict";i.setCacheNameDetails({prefix:"ethyria-anniversary-6m"}),self.skipWaiting(),i.precacheAndRoute([{url:"/css/app.2701049d.css",revision:null},{url:"/css/chunk-vendors.88b2bdb4.css",revision:null},{url:"/favicon.ico",revision:"f93e7356b3e6d4c4649cd27c3b4e62f2"},{url:"/img/enna6m-quilt.4fba16e0.png",revision:null},{url:"/img/header.4bdbe8b4.png",revision:null},{url:"/img/icons/android-chrome-192x192.png",revision:"9363b143d475a2c5b0b03d114499c6da"},{url:"/img/icons/android-chrome-512x512.png",revision:"a5160bd1cb6e8155fd4836659a3a45cb"},{url:"/img/icons/android-chrome-maskable-192x192.png",revision:"9363b143d475a2c5b0b03d114499c6da"},{url:"/img/icons/android-chrome-maskable-512x512.png",revision:"a5160bd1cb6e8155fd4836659a3a45cb"},{url:"/img/icons/apple-touch-icon-120x120.png",revision:"ce540a10853585318711d929f2401256"},{url:"/img/icons/apple-touch-icon-152x152.png",revision:"a88e739a2aad447674ba16d10a3c5e7c"},{url:"/img/icons/apple-touch-icon-180x180.png",revision:"7318736e30759a1e61612f5b21ea7718"},{url:"/img/icons/apple-touch-icon-60x60.png",revision:"3ffabd1da2a3b69d32a6ee9c2b703ee9"},{url:"/img/icons/apple-touch-icon-76x76.png",revision:"b8167bcc9933c10c3daffacd5effd9a8"},{url:"/img/icons/apple-touch-icon.png",revision:"7318736e30759a1e61612f5b21ea7718"},{url:"/img/icons/favicon-16x16.png",revision:"236b9915cddce8b3d1268341b4ac1d91"},{url:"/img/icons/favicon-32x32.png",revision:"5163ff6645f93ef8caf66cebb6a39a9c"},{url:"/img/icons/msapplication-icon-144x144.png",revision:"5331abf1b8dbfdf83514d533fafbf5f3"},{url:"/img/icons/mstile-150x150.png",revision:"5b84e79fbb40328fdd60bad0e36ad124"},{url:"/img/icons/safari-pinned-tab.svg",revision:"ad19f9d92cd126d580f974996bff6543"},{url:"/img/section-happy.5b798e02.png",revision:null},{url:"/index.html",revision:"8ce60caff7c1302118e8d2b703bf71fe"},{url:"/js/app.6e7b5514.js",revision:null},{url:"/js/chunk-vendors.745fae23.js",revision:null},{url:"/manifest.json",revision:"40828eac2a8dd346f2642fd56c20e631"},{url:"/ogimage.png",revision:"1639515e5a7cd0aedf1ffd0e19f1553a"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
