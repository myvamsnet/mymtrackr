if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let d={};const c=e=>s(e,r),o={module:{uri:r},exports:d,require:c};a[r]=Promise.all(i.map((e=>o[e]||c(e)))).then((e=>(n(...e),d)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/LpXtdOL9EllahdzmE80Ga/_buildManifest.js",revision:"6310079bf1ae7bebeb6a2135896e4564"},{url:"/_next/static/LpXtdOL9EllahdzmE80Ga/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-e0bc0b271e3fca27.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/121-9ee4751cc6457548.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/1249-0b7eeb6ac6f820b5.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/1262-b300ef05987498c8.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/1368-ca1f67a29b7b1482.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/1382-1ee58405d2b6c671.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/152-2fa641527d43eddc.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/1604-88057ab702083856.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/1681-3cfeceedf545b5b4.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/1846-04dcc96624bef55e.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/2083-bce3b780ec1a8e7e.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/2321-9cdf5c54c773adc2.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/2392-50a4d13482491237.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/2439-22bb960e745c53a6.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/2445-932f91b30f9b5ea3.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/2859-2b39c9f229d2080c.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/2972-84705ee443aa1f63.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/3349-e3dede447c10d5d6.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/3880-4392730fd36543ff.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/3881-b17fa889df50fcfb.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/3959-ee2bdc3041b78419.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/4026-b9f8bcd0248aa142.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/4228-11b41e68acaa387a.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/4244-3a912f0115c68f0b.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/4434-91ccd5407a24b313.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/4465-e014d9f0fd3999bf.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/4716-c3093c0c8b2a5449.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/4812-3394bbeaad474dde.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/4842-0bcf18c4d7e3e7e0.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/4931-fa223f2fdb99ed19.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/5054-2072e19732ddae9d.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/5186-46f5131ddc94cf74.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/5192-1762cfb567722b9d.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/5223.dd6428e02df6946a.js",revision:"dd6428e02df6946a"},{url:"/_next/static/chunks/5349-9592df5616191a47.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/5466-3d0bd63bff7ba1e2.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/5601-dd5f6f5ed805f958.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/5652-c8bc6e33d4a768fb.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/5878-4560e83f4ba3dcf3.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/6066-e6e4754ff89e3483.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/6120-157704edca6f84b1.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/6584-70ebba1f1afc32fa.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/6960-066c0e016b40d07a.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/6997-318d4a53216a6c26.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/7317-799eabc6c24baba1.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/7806-9edff836fcd1ab3c.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/8104-d5bc1ebba544bb7c.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/8229-3dd191d703608d32.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/8339-f818d1ae7e4f26ff.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/8571-13af260015b29f13.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/8676-8a7fd9a2b8030c39.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/9608-7dccdb224ce2bd05.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(auth)/forgot-password/page-c315d7e5abb908f3.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(auth)/layout-2a81f913f25ac11e.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(auth)/login/page-a3f06b4fe487792f.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(auth)/register/page-4450d16d10f26c03.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(auth)/reset-password/page-cd9b13368c831578.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/analytics/page-606c7a8237594eb1.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/help/page-ca3f05a44b9fc928.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/history/page-2c825f2b742e9071.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/home/page-c784b775c9793cc5.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/invoicesandreceipts/%5Btype%5D/page-bd7e59da9ec50981.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/invoicesandreceipts/create/%5Badd%5D/page-05d2dfd1320ba641.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/invoicesandreceipts/details/%5Bid%5D/page-932e027dc967d1e7.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/invoicesandreceipts/edit/%5Bid%5D/page-794582b20ab4b8e5.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/layout-8deeff09d05d9558.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/more/page-7582f28f90087e43.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/notifications/page-fbbe48a933bb795d.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/records/%5Btype%5D/page-2dd1013cf977194f.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/records/add/%5Btype%5D/page-5bf514c5eec08c63.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/records/details/%5Bid%5D/page-4bb42d6264b5537b.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/records/page-ca5d04a8634e6c82.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/referral-history/page-ca1ae7de35d1b5e9.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/settings/business/%5Bid%5D/page-5e3030c73e9329d0.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/settings/business/page-10407b4d598ee91f.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/settings/page-580e96921b47fc83.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/settings/profile/page-b144a6ebaec82e33.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/settings/reset-password/page-bfcff2d93b07bc44.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/subscription/page-32795b5001ee80d0.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/tasks/create/page-8f52e2be9d49d7f9.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/tasks/edit/%5Bid%5D/page-3c52df5eec00a105.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRoute)/tasks/page-77f8ed537695ff5b.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRouteAdmin)/admin/content/page-1a0e6f2b8cfaccd1.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRouteAdmin)/admin/dashboard/page-6ef7570cc6e8fb7c.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRouteAdmin)/admin/users/%5Bid%5D/page-9ccaa2add410c023.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRouteAdmin)/admin/users/page-a2627b40d35ce2ff.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRouteAdmin)/layout-6a88627d3ee35624.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/(protectedRouteAdmin)/loading-e5ef6105383d29fe.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/_not-found/page-37759ce49bd9df29.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/error-508b26e7aa704496.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/layout-7bdb7d0bfb521997.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/loading-a90ce98e2dac95f0.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/not-found-a8d6a2c9feed0132.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/app/page-c87c21b782222398.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/cebd11e7-1dbbacebcc512947.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/fd9d1056-6dc087443578381f.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/main-aa1a033a5241b97d.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/main-app-c63ec98d9a678b22.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/reactPlayerDailyMotion.4ce428e08da56f81.js",revision:"4ce428e08da56f81"},{url:"/_next/static/chunks/reactPlayerFacebook.6979e1333a813b2f.js",revision:"6979e1333a813b2f"},{url:"/_next/static/chunks/reactPlayerFilePlayer.e6d2f3c959f28902.js",revision:"e6d2f3c959f28902"},{url:"/_next/static/chunks/reactPlayerKaltura.eaab6ce37fc042fc.js",revision:"eaab6ce37fc042fc"},{url:"/_next/static/chunks/reactPlayerMixcloud.ef2fad3b53af30de.js",revision:"ef2fad3b53af30de"},{url:"/_next/static/chunks/reactPlayerMux.68eaedd8a8e83a03.js",revision:"68eaedd8a8e83a03"},{url:"/_next/static/chunks/reactPlayerPreview.3288e310f09a775e.js",revision:"3288e310f09a775e"},{url:"/_next/static/chunks/reactPlayerSoundCloud.2ebfd388e85a0b77.js",revision:"2ebfd388e85a0b77"},{url:"/_next/static/chunks/reactPlayerStreamable.969e004edd1ba6b0.js",revision:"969e004edd1ba6b0"},{url:"/_next/static/chunks/reactPlayerTwitch.8983e9ea06739e4b.js",revision:"8983e9ea06739e4b"},{url:"/_next/static/chunks/reactPlayerVidyard.30aeaa5727b7e224.js",revision:"30aeaa5727b7e224"},{url:"/_next/static/chunks/reactPlayerVimeo.fdfc8213d8c50230.js",revision:"fdfc8213d8c50230"},{url:"/_next/static/chunks/reactPlayerWistia.d8da9ed3d80f4ac6.js",revision:"d8da9ed3d80f4ac6"},{url:"/_next/static/chunks/reactPlayerYouTube.04ada298e347d23f.js",revision:"04ada298e347d23f"},{url:"/_next/static/chunks/webpack-9f4980f8c48ebb6b.js",revision:"LpXtdOL9EllahdzmE80Ga"},{url:"/_next/static/css/48340cfe5c3cfec7.css",revision:"48340cfe5c3cfec7"},{url:"/_next/static/css/ab0c38ba8a0cb814.css",revision:"ab0c38ba8a0cb814"},{url:"/_next/static/css/c4aa412031bd379e.css",revision:"c4aa412031bd379e"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/android/android-launchericon-144-144.png",revision:"71905a63e730fec4961f1e88572c6bff"},{url:"/android/android-launchericon-192-192.png",revision:"f0e58aaeffe2f6abaacfd36cf2b69c95"},{url:"/android/android-launchericon-48-48.png",revision:"4694ed275f7f58f261ddf10255fb3139"},{url:"/android/android-launchericon-512-512.png",revision:"199b1688b5cb865c104a41aa5ec7ddc2"},{url:"/android/android-launchericon-72-72.png",revision:"bdc1ab9b9b52d5349ec9c5c871f6382b"},{url:"/android/android-launchericon-96-96.png",revision:"2f0afed01ddba95957a28bef238a49ed"},{url:"/favicon_io/android-chrome-192x192.png",revision:"60c40193df99930d95e823daca217087"},{url:"/favicon_io/android-chrome-512x512.png",revision:"d81ba86af6f6aba11d992ef7904f6a84"},{url:"/favicon_io/apple-touch-icon.png",revision:"a808474157cb9451fbc4b101e6b8abe6"},{url:"/favicon_io/favicon-16x16.png",revision:"67ef5985e8d12170831fd284c582dab0"},{url:"/favicon_io/favicon-32x32.png",revision:"e5b66a26a91b75629d4c62b5c26b7cdd"},{url:"/favicon_io/favicon.ico",revision:"b534a424051c9de3139aed0aa4928615"},{url:"/favicon_io/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/images/Backgroundfeature.png",revision:"fe45aa51edae3548082e35ff48e48c7c"},{url:"/images/Desktop.svgl.svg",revision:"458e9605d4858284ae524f0872ecbb22"},{url:"/images/Group 26649.svg",revision:"c0d0f968e741e35b1ed5d15991b1306d"},{url:"/images/Group 39819.png",revision:"1aa7f13ec3a287474542af7ed093b852"},{url:"/images/HeroImage.png",revision:"8a0cbc67f881a02cc1af4869449b3a32"},{url:"/images/analystics.png",revision:"676cd3b660d9cb7feea1096b6a760586"},{url:"/images/babysmiling.png",revision:"6cad3e9309363bf3e0c4bf2e59fef3f9"},{url:"/images/banner-mobile.svg",revision:"ebca3c714e4be0317ab3aba98ec9960d"},{url:"/images/banner.svg",revision:"f2ad6374934c61aeb87b8bbe83b62d34"},{url:"/images/bottomimage.png",revision:"fb710038c1d952607e26225e94a32bec"},{url:"/images/business-logo.svg",revision:"e7e291c0e6ed0a63b933dae299fe8bdd"},{url:"/images/businessdie.png",revision:"5f77a6f91cd4ba3bf68d021bcc23cf4d"},{url:"/images/businessstress.png",revision:"e882af1769514e527556fb06fc992273"},{url:"/images/close.svg",revision:"eb2783665648e26eaa07fd5010b89f72"},{url:"/images/emptyRecord.svg",revision:"c0d0f968e741e35b1ed5d15991b1306d"},{url:"/images/error-icon.svg",revision:"503dff206e8ea2118a35e7f599d8c06a"},{url:"/images/groupsphones.png",revision:"c9135ae99d671fbd96fe220e5321934c"},{url:"/images/guysmiling.png",revision:"9a98db15726080a442a4835d61beb882"},{url:"/images/history.png",revision:"2c5fc75901f58e87cc9f88f94f7547e2"},{url:"/images/howrecord.svg",revision:"a71bf735cc1e40894100ccefd91e0ba3"},{url:"/images/logo.svg",revision:"458e9605d4858284ae524f0872ecbb22"},{url:"/images/logoNew.svg",revision:"465d43e5221d859cd1e8e7ae39306f1c"},{url:"/images/logo_black.svg",revision:"458e9605d4858284ae524f0872ecbb22"},{url:"/images/logo_white.svg",revision:"465d43e5221d859cd1e8e7ae39306f1c"},{url:"/images/mobileimg.png",revision:"7ec024582ac4b55856f5fe00f291e79c"},{url:"/images/not-found.svg",revision:"7fa3c943583fde0706d5fdb61287181b"},{url:"/images/overlayBanner.png",revision:"3ec53cc2a22813265c9343958b80c011"},{url:"/images/profile.jpg",revision:"7c0afbe769d91a8cc15b228cffe64445"},{url:"/images/recenthistrory.png",revision:"6547af567d2fa52bcc80bc94d36a8287"},{url:"/images/records.png",revision:"5846a739a4f03658ef7c6aa3b7c9f2e8"},{url:"/images/sleepinglady.png",revision:"218e04ecfd721f450ae09f0fea1896b7"},{url:"/images/stock-photo-studio-shot-top-view-of-red-crab-1876734760.jpg",revision:"2f926f10dcea87246c1565ceeec96429"},{url:"/images/user-profile.svg",revision:"a20c42c9eccb51ac41d0a0af2952a37a"},{url:"/images/welcome-banner.svg",revision:"c3df56c89ab67aac9f5e559b43b1d342"},{url:"/images/welcome-mtrackr.svg",revision:"5f4cf8e20b83c89f5aa0dc4ee6f447b7"},{url:"/ios/100.png",revision:"cae10f79d2423390b20d21120b5f860f"},{url:"/ios/1024.png",revision:"031bf93352b97ab3d25c8a9d18e35a4c"},{url:"/ios/114.png",revision:"e2177d581a167357a3f1c9f1266fc563"},{url:"/ios/120.png",revision:"573f7f123709e10523f3d8d22759ea33"},{url:"/ios/128.png",revision:"b576002979c92df6cae1d162ace84aa0"},{url:"/ios/144.png",revision:"71905a63e730fec4961f1e88572c6bff"},{url:"/ios/152.png",revision:"d30a3780d107a9f954b8c0fd57140d04"},{url:"/ios/16.png",revision:"3cb6ff6c8720a425bdff5118b62a0c4e"},{url:"/ios/167.png",revision:"0be98ce4d06b127a08a3477b6401ad49"},{url:"/ios/180.png",revision:"2994f4ae038200427631586516cbc54e"},{url:"/ios/192.png",revision:"f0e58aaeffe2f6abaacfd36cf2b69c95"},{url:"/ios/20.png",revision:"96ecdf0877edbba0438c600be58cd390"},{url:"/ios/256.png",revision:"750a9cf17724dfbdcb2a2568d8926a7a"},{url:"/ios/29.png",revision:"6b6eb65c7dcaf585931d4a2743d3781c"},{url:"/ios/32.png",revision:"0c1900a3415127544902dee66c981921"},{url:"/ios/40.png",revision:"8f4a414b558567ea10538e01a9b99612"},{url:"/ios/50.png",revision:"90182bc1dbd66808478b9c904de56880"},{url:"/ios/512.png",revision:"199b1688b5cb865c104a41aa5ec7ddc2"},{url:"/ios/57.png",revision:"574a60adc78fd6ac4118c444df2807d8"},{url:"/ios/58.png",revision:"81e2f91f3afcbaefb8e5b87017c564c5"},{url:"/ios/60.png",revision:"40d08a84dbbcbf63efd26ca5d1dc7fed"},{url:"/ios/64.png",revision:"aed7c831d62f930ad46421384bc299e4"},{url:"/ios/72.png",revision:"bdc1ab9b9b52d5349ec9c5c871f6382b"},{url:"/ios/76.png",revision:"c875e90e8fdf69a5ea38b32f7cdd4eea"},{url:"/ios/80.png",revision:"e63d85b216a07e9f92406f501e725fc3"},{url:"/ios/87.png",revision:"b2823bd428d974bb7529bc905955a693"},{url:"/logo.svg",revision:"ffbfaad019ac7edb6d108719c9224293"},{url:"/manifest.json",revision:"9ad0dceec6b633010f906b2118d4227b"},{url:"/splash.png",revision:"55093cf425f2dd290ffa58bfe7a2e08b"},{url:"/splash_screens/10.2__iPad_landscape.png",revision:"92e6a083027c0ec74247047eab272a4e"},{url:"/splash_screens/10.2__iPad_portrait.png",revision:"bc2c490d7c2966ec25764765cd0b90a6"},{url:"/splash_screens/10.5__iPad_Air_landscape.png",revision:"3a5070aa30790eeac8c1146e276538c4"},{url:"/splash_screens/10.5__iPad_Air_portrait.png",revision:"3fbb864bcb8b1ed3b491a6e7ffa26b76"},{url:"/splash_screens/10.9__iPad_Air_landscape.png",revision:"485c342e1ad74a436e93d2ec8ae1e6cb"},{url:"/splash_screens/10.9__iPad_Air_portrait.png",revision:"a5ac3d7ef0a7dde5a2ae12063aefc57e"},{url:"/splash_screens/11__iPad_Pro_M4_landscape.png",revision:"b297cc75bc4f7b16f8b6797adde3cb0d"},{url:"/splash_screens/11__iPad_Pro_M4_portrait.png",revision:"91f109739c017c40dd971b942d1ff906"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"797ab87ef5d7746eb64dc44ac4d7246b"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"33c7e063cde77b85140c7e0e52fe4e45"},{url:"/splash_screens/12.9__iPad_Pro_landscape.png",revision:"4d8e3ed2d443371acec6e3e120931ff0"},{url:"/splash_screens/12.9__iPad_Pro_portrait.png",revision:"be777f7a7c5176632318b420280e5e01"},{url:"/splash_screens/13__iPad_Pro_M4_landscape.png",revision:"134eb6e98de5bdd97f75db695a6873e2"},{url:"/splash_screens/13__iPad_Pro_M4_portrait.png",revision:"e119c99bb488ad168445ad98826f97b6"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"148b7256b8caf178c9d837356cfd7a49"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"efefbe61325df2c2e3c7d9570ee4777a"},{url:"/splash_screens/8.3__iPad_Mini_landscape.png",revision:"3d51efd3dcb41ef66cd23ef5dbfe7006"},{url:"/splash_screens/8.3__iPad_Mini_portrait.png",revision:"436404fda2b1ae8249b94165ae246040"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"47132e2f5f5fed2667d7017263d9f7c2"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"ddc3914c94239fe5a0737a763a26a214"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"5f6ab76df7fdcf0e68bf3d8918d517dd"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"3501cc1e93be878dd83e22a774fbe65c"},{url:"/splash_screens/iPhone_11__iPhone_XR_landscape.png",revision:"94655a8149ccf3c1561dcf3f8712b7d6"},{url:"/splash_screens/iPhone_11__iPhone_XR_portrait.png",revision:"5032324f64de008fab6d40195304b132"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"fd18dfdbc739a1a1cfa4845344fe6627"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"415ec44282957d24ecaa99f23df01aa9"},{url:"/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"231661ca0914755337b3ee0fd3294df1"},{url:"/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"8d79cf3e3f1db8712993372b32ea4e2c"},{url:"/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"9ed86e876ffb1b995eb656e089956fbe"},{url:"/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"43d375218ff8948fb90a6477f21be32b"},{url:"/splash_screens/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png",revision:"e9adf330e92178256f5d60c0253522a0"},{url:"/splash_screens/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png",revision:"f529bd70ee5e1437fec693b8491140d0"},{url:"/splash_screens/iPhone_16_Pro_Max_landscape.png",revision:"1cb85aab3e766681ec34285c0f93cf69"},{url:"/splash_screens/iPhone_16_Pro_Max_portrait.png",revision:"81e1854281fb9d14815d5a7bec1eb2d9"},{url:"/splash_screens/iPhone_16_Pro_landscape.png",revision:"7d0de3050849d34dc1ee5a92dd823a17"},{url:"/splash_screens/iPhone_16_Pro_portrait.png",revision:"e466623eef29a453461f8868601648cb"},{url:"/splash_screens/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png",revision:"47f3f5165f1d0dbc04b4e1b19022f850"},{url:"/splash_screens/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png",revision:"f57d308360374bc8e848572468d4aabc"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"c68acb3ab8849b21cbf659168124e95a"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"55093cf425f2dd290ffa58bfe7a2e08b"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"88e06a30ba65351291eb0b36480bc1b5"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"ea9ffb5587ad8a243b4c476b7994e1dd"},{url:"/splash_screens/icon.png",revision:"6b9e8cf1f67b5f1951463a1dc1833702"},{url:"/sw.js",revision:"ba3fdd2bdbc7652c6fd09a87d56ba1ae"},{url:"/sw.js.map",revision:"0d6bc7dbf28582ff1a09957165d05043"},{url:"/windows11/LargeTile.scale-100.png",revision:"aff9861ff1b9b540fe9f4a809ffc5b90"},{url:"/windows11/LargeTile.scale-125.png",revision:"30dfb67f7d3f46d55435fa1a3cf7f903"},{url:"/windows11/LargeTile.scale-150.png",revision:"e34bfba44b1051cacc5c03f4e06369c3"},{url:"/windows11/LargeTile.scale-200.png",revision:"6013b207ef8fa6d886276a89245addd0"},{url:"/windows11/LargeTile.scale-400.png",revision:"d5488abeeed72cdc9203323f34fdd92d"},{url:"/windows11/SmallTile.scale-100.png",revision:"c800aacbacc97a047562bacb9d2318c6"},{url:"/windows11/SmallTile.scale-125.png",revision:"1fad5a80cf9edb7335925b9b8fa618fd"},{url:"/windows11/SmallTile.scale-150.png",revision:"c72c1d44a7f23ec12d174ce2ae1c49ea"},{url:"/windows11/SmallTile.scale-200.png",revision:"88543736fd16baac92204dce4993e7a9"},{url:"/windows11/SmallTile.scale-400.png",revision:"982fa1096e71e0217ab314ea31204991"},{url:"/windows11/SplashScreen.scale-100.png",revision:"3f803166e37d8254a705f91fd251fba6"},{url:"/windows11/SplashScreen.scale-125.png",revision:"78a839c3e8fd822094bcfd0d26827e78"},{url:"/windows11/SplashScreen.scale-150.png",revision:"e174f3aca2c0a5abd8a37d7e1ec0a46e"},{url:"/windows11/SplashScreen.scale-200.png",revision:"1dd5c66f8c134c766be9cb5011cb3dd2"},{url:"/windows11/SplashScreen.scale-400.png",revision:"4292563b9ed7a9897bfbf1d899e207ae"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"e8295a44e9e2b8f21c87eca5c6d036a3"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"3a53cf1caafa49e97eb91347f4c632b8"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"94968f4f497050758d6bffa8edebf887"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"687cde99aad91a6ad82b7794b7d0ba48"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"255d34a4959890d341fbda657f4366d5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"2d036f4185a0577c958e896ec9fd11e4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"49d2a3c12fd908bf162dd4ae6e919619"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"8706fe83ba825313642a4d577af5b917"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"ad04729906a2dbabdd98cf109dd5c9cc"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"116867892af0fa5bf895e7f937ea1e9f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"497f275c186fa58f520fa6ed04d3a0b5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"5c5421051113e6dd3660debf6d6e82a2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"78c43ac656fa44a59f3a7c0b520cfbd9"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"4b58b0987ce1fa49fa1e951a015e24d5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"2d5d04c74ba4111988ef0a53363affae"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"25d53e70bcb64bef804d7fb0d4e497a8"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"efe67438bd40d0dd29d2a2abd63e4a4c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"d48165ceba6be0b1bd216ce59a910d62"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"e085260ca02c4f749576e213662bb27e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"ed02053b5a93f7444d035f2910446618"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"2d036f4185a0577c958e896ec9fd11e4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"49d2a3c12fd908bf162dd4ae6e919619"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"8706fe83ba825313642a4d577af5b917"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"ad04729906a2dbabdd98cf109dd5c9cc"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"116867892af0fa5bf895e7f937ea1e9f"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"497f275c186fa58f520fa6ed04d3a0b5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"5c5421051113e6dd3660debf6d6e82a2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"78c43ac656fa44a59f3a7c0b520cfbd9"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"4b58b0987ce1fa49fa1e951a015e24d5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"2d5d04c74ba4111988ef0a53363affae"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"25d53e70bcb64bef804d7fb0d4e497a8"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"efe67438bd40d0dd29d2a2abd63e4a4c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"d48165ceba6be0b1bd216ce59a910d62"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"e085260ca02c4f749576e213662bb27e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"ed02053b5a93f7444d035f2910446618"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"4b58b0987ce1fa49fa1e951a015e24d5"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"90976521f36fb1bb8129ed8c94488da2"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"fa05b8081a867ed045b8ffe2988473d8"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"20f1b36b3290bfa08076b858bcf68537"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"9bf53b03892516dd0ca28749bcb6a474"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"2d036f4185a0577c958e896ec9fd11e4"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"49d2a3c12fd908bf162dd4ae6e919619"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"8706fe83ba825313642a4d577af5b917"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"ad04729906a2dbabdd98cf109dd5c9cc"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"116867892af0fa5bf895e7f937ea1e9f"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"497f275c186fa58f520fa6ed04d3a0b5"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"5c5421051113e6dd3660debf6d6e82a2"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"78c43ac656fa44a59f3a7c0b520cfbd9"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"4b58b0987ce1fa49fa1e951a015e24d5"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"2d5d04c74ba4111988ef0a53363affae"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"25d53e70bcb64bef804d7fb0d4e497a8"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"efe67438bd40d0dd29d2a2abd63e4a4c"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"d48165ceba6be0b1bd216ce59a910d62"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"e085260ca02c4f749576e213662bb27e"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"ed02053b5a93f7444d035f2910446618"},{url:"/windows11/StoreLogo.scale-100.png",revision:"90182bc1dbd66808478b9c904de56880"},{url:"/windows11/StoreLogo.scale-125.png",revision:"8b46749fd60e9cd0b5f9aca9b2160278"},{url:"/windows11/StoreLogo.scale-150.png",revision:"4c64123768c5970441445daaae30714c"},{url:"/windows11/StoreLogo.scale-200.png",revision:"cae10f79d2423390b20d21120b5f860f"},{url:"/windows11/StoreLogo.scale-400.png",revision:"d83c498316aefc01dce1a9f29dbc9a34"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"7c6eee263387c8b7fde0efab907742de"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"7080405795a587534ccf7d98cc46d5fc"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"49783493a1de4505448b688fc83ff4a7"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"3f803166e37d8254a705f91fd251fba6"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"1dd5c66f8c134c766be9cb5011cb3dd2"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
