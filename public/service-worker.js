if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const d=e=>a(e,r),o={module:{uri:r},exports:c,require:d};i[r]=Promise.all(s.map((e=>o[e]||d(e)))).then((e=>(n(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/4JdDKlli5B0iukGFMh292/_buildManifest.js",revision:"6310079bf1ae7bebeb6a2135896e4564"},{url:"/_next/static/4JdDKlli5B0iukGFMh292/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-e21671de2332660b.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/11-422fee4e9e1fc746.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/1249-6855a2d0f41af62e.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/1662-d1c4a794ddb4696a.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/1681-b0af7322c5871f73.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/172-5ec655ed4e2fe8e9.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/1780-b89eb05d2b11d7ed.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/1846-04dcc96624bef55e.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/1887-85a5ffc9f429fd63.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/1938-58069b440718e2d8.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/2143-4af513a4430d5505.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/2321-9cdf5c54c773adc2.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/2324-1f2c82d74cf1ffd1.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/2392-fe8c387abd87f0aa.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/2859-2b39c9f229d2080c.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/2972-84705ee443aa1f63.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/3746-b202831b10a93369.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/3880-86d6387691a8de61.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/3956-d394836c3e85b28f.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/3959-ee2bdc3041b78419.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/4016-ce5169d5b0a68cb1.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/4026-b9f8bcd0248aa142.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/4228-982132d4a839d1ab.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/4434-03a855c56ce4309d.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/4467-eb7cbbc82cc8239f.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/4716-cc9ba9c5f3cd732a.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/4812-3394bbeaad474dde.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/4834-4538c83a127ebc11.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/4931-9a8b4e615fbba1f1.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/5186-46f5131ddc94cf74.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/5192-c74de56255912e95.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/5223.dd6428e02df6946a.js",revision:"dd6428e02df6946a"},{url:"/_next/static/chunks/5878-d075fded16ff066e.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/5927-b4a7caa142318bd7.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/6066-29e1abe7c8e74649.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/6120-74afd0f6cb9c33fe.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/619-41fe2c2cb06ef0ce.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/6584-84220f49fb85761b.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/6837-8f3c40d6a06f9b0c.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/6997-8301b2fed5a4bec6.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/7317-4b4d38e140ee987d.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/7323-8990d4cc3391ae4c.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/7667-4e5007a6698c58dd.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/7712-9bf1111d2bd31d6c.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/7818-c061afd04a4b0178.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/8122-e80b35039948590c.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/8482-69f24d00a8dd4bc6.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/8557-e6f5601770296c6b.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/901-b65a7dfec70f6e7f.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/9016-b2aca78b725d52a2.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/9130-4885690dc78da35d.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/9608-7dccdb224ce2bd05.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(auth)/forgot-password/page-76b0bc4cf1f64f8a.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(auth)/layout-798c3eac11397e79.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(auth)/login/page-b486a8ef46a452ea.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(auth)/register/page-3297217147be754b.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(auth)/reset-password/page-9631567d1f7416ec.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/analytics/page-ef4f318162b542b7.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/help/page-d0c4559e198920f5.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/history/page-8fa767b978f60f86.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/home/page-62803e8806954fc0.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/invoicesandreceipts/%5Btype%5D/page-b36496f84f38728f.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/invoicesandreceipts/create/%5Badd%5D/page-f61a7c7f553ea4cb.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/invoicesandreceipts/details/%5Bid%5D/page-618249e4e87fa32b.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/invoicesandreceipts/edit/%5Bid%5D/page-b1a5b188b850066f.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/layout-01ff0f642f04a0c3.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/more/page-726970db20ab0dc6.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/notifications/page-bc25307000a5affb.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/records/%5Btype%5D/page-a38c3b9bf71977bf.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/records/add/%5Btype%5D/page-c51284a4776f86ce.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/records/details/%5Bid%5D/page-43a3caa92b30a8cc.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/records/page-c5d98bdbca4fdd5d.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/referral-history/page-4b0bf126b33e0324.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/settings/business/%5Bid%5D/page-5651b9e3f607c47e.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/settings/business/page-d15d67f8e38809da.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/settings/page-cb6362a1c1ad7eed.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/settings/profile/page-b01afb320c69f475.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/settings/reset-password/page-e83931a1182ef576.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/subscription/layout-4fc23f3d1cf085c6.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/subscription/page-5dc3597c57942e3b.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRoute)/tasks/page-2c787fb89ef21cdb.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRouteAdmin)/admin/content/page-78ba6b82acff21a3.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRouteAdmin)/admin/dashboard/page-c1d7697f99e2251f.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRouteAdmin)/admin/users/%5Bid%5D/page-d5e239cfa228fe4b.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRouteAdmin)/admin/users/page-fb2a75d2d4ab1260.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRouteAdmin)/layout-6f8065dd8470ade9.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/(protectedRouteAdmin)/loading-e5ef6105383d29fe.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/_not-found/page-7cd291d460ecf611.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/error-508b26e7aa704496.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/layout-c929e086400b3653.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/loading-a90ce98e2dac95f0.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/not-found-a8d6a2c9feed0132.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/app/page-567aad1fba320e57.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/cebd11e7-d0c315eeca31f20f.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/fd9d1056-6dc087443578381f.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/main-8c51f5af204b8998.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/main-app-c63ec98d9a678b22.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/reactPlayerDailyMotion.4ce428e08da56f81.js",revision:"4ce428e08da56f81"},{url:"/_next/static/chunks/reactPlayerFacebook.6979e1333a813b2f.js",revision:"6979e1333a813b2f"},{url:"/_next/static/chunks/reactPlayerFilePlayer.e6d2f3c959f28902.js",revision:"e6d2f3c959f28902"},{url:"/_next/static/chunks/reactPlayerKaltura.eaab6ce37fc042fc.js",revision:"eaab6ce37fc042fc"},{url:"/_next/static/chunks/reactPlayerMixcloud.ef2fad3b53af30de.js",revision:"ef2fad3b53af30de"},{url:"/_next/static/chunks/reactPlayerMux.68eaedd8a8e83a03.js",revision:"68eaedd8a8e83a03"},{url:"/_next/static/chunks/reactPlayerPreview.3288e310f09a775e.js",revision:"3288e310f09a775e"},{url:"/_next/static/chunks/reactPlayerSoundCloud.2ebfd388e85a0b77.js",revision:"2ebfd388e85a0b77"},{url:"/_next/static/chunks/reactPlayerStreamable.969e004edd1ba6b0.js",revision:"969e004edd1ba6b0"},{url:"/_next/static/chunks/reactPlayerTwitch.8983e9ea06739e4b.js",revision:"8983e9ea06739e4b"},{url:"/_next/static/chunks/reactPlayerVidyard.30aeaa5727b7e224.js",revision:"30aeaa5727b7e224"},{url:"/_next/static/chunks/reactPlayerVimeo.fdfc8213d8c50230.js",revision:"fdfc8213d8c50230"},{url:"/_next/static/chunks/reactPlayerWistia.d8da9ed3d80f4ac6.js",revision:"d8da9ed3d80f4ac6"},{url:"/_next/static/chunks/reactPlayerYouTube.04ada298e347d23f.js",revision:"04ada298e347d23f"},{url:"/_next/static/chunks/webpack-9f4980f8c48ebb6b.js",revision:"4JdDKlli5B0iukGFMh292"},{url:"/_next/static/css/48340cfe5c3cfec7.css",revision:"48340cfe5c3cfec7"},{url:"/_next/static/css/849f78c08cf0135d.css",revision:"849f78c08cf0135d"},{url:"/_next/static/css/c4aa412031bd379e.css",revision:"c4aa412031bd379e"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/android/android-launchericon-144-144.png",revision:"71905a63e730fec4961f1e88572c6bff"},{url:"/android/android-launchericon-192-192.png",revision:"f0e58aaeffe2f6abaacfd36cf2b69c95"},{url:"/android/android-launchericon-48-48.png",revision:"4694ed275f7f58f261ddf10255fb3139"},{url:"/android/android-launchericon-512-512.png",revision:"199b1688b5cb865c104a41aa5ec7ddc2"},{url:"/android/android-launchericon-72-72.png",revision:"bdc1ab9b9b52d5349ec9c5c871f6382b"},{url:"/android/android-launchericon-96-96.png",revision:"2f0afed01ddba95957a28bef238a49ed"},{url:"/favicon_io/android-chrome-192x192.png",revision:"60c40193df99930d95e823daca217087"},{url:"/favicon_io/android-chrome-512x512.png",revision:"d81ba86af6f6aba11d992ef7904f6a84"},{url:"/favicon_io/apple-touch-icon.png",revision:"a808474157cb9451fbc4b101e6b8abe6"},{url:"/favicon_io/favicon-16x16.png",revision:"67ef5985e8d12170831fd284c582dab0"},{url:"/favicon_io/favicon-32x32.png",revision:"e5b66a26a91b75629d4c62b5c26b7cdd"},{url:"/favicon_io/favicon.ico",revision:"b534a424051c9de3139aed0aa4928615"},{url:"/favicon_io/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/images/Backgroundfeature.png",revision:"fe45aa51edae3548082e35ff48e48c7c"},{url:"/images/Desktop.svgl.svg",revision:"458e9605d4858284ae524f0872ecbb22"},{url:"/images/Group 26649.svg",revision:"c0d0f968e741e35b1ed5d15991b1306d"},{url:"/images/Group 39819.png",revision:"1aa7f13ec3a287474542af7ed093b852"},{url:"/images/HeroImage.png",revision:"8a0cbc67f881a02cc1af4869449b3a32"},{url:"/images/analystics.png",revision:"676cd3b660d9cb7feea1096b6a760586"},{url:"/images/analytics.svg",revision:"bfbefb83eb04de5f3bfe77a251f6820b"},{url:"/images/babysmiling.png",revision:"6cad3e9309363bf3e0c4bf2e59fef3f9"},{url:"/images/banner-mobile.svg",revision:"ebca3c714e4be0317ab3aba98ec9960d"},{url:"/images/banner.svg",revision:"f2ad6374934c61aeb87b8bbe83b62d34"},{url:"/images/bottomimage.png",revision:"fb710038c1d952607e26225e94a32bec"},{url:"/images/business-logo.svg",revision:"e7e291c0e6ed0a63b933dae299fe8bdd"},{url:"/images/businessdie.png",revision:"5f77a6f91cd4ba3bf68d021bcc23cf4d"},{url:"/images/businessstress.png",revision:"e882af1769514e527556fb06fc992273"},{url:"/images/close.svg",revision:"eb2783665648e26eaa07fd5010b89f72"},{url:"/images/emptyRecord.svg",revision:"c0d0f968e741e35b1ed5d15991b1306d"},{url:"/images/error-icon.svg",revision:"503dff206e8ea2118a35e7f599d8c06a"},{url:"/images/groupsphones.png",revision:"c9135ae99d671fbd96fe220e5321934c"},{url:"/images/groupsphones.svg",revision:"4cd47e1a0e81844fd3509f0e40b0df6a"},{url:"/images/guysmiling.png",revision:"9a98db15726080a442a4835d61beb882"},{url:"/images/history.svg",revision:"e14db14933d65a97b2950618d7b705c7"},{url:"/images/howrecord.svg",revision:"a71bf735cc1e40894100ccefd91e0ba3"},{url:"/images/invoiceAndRecipt.svg",revision:"64af2534ec4e37803df6577f1a992741"},{url:"/images/invoiceAndrecipts.svg",revision:"64af2534ec4e37803df6577f1a992741"},{url:"/images/logo.svg",revision:"458e9605d4858284ae524f0872ecbb22"},{url:"/images/logoNew.svg",revision:"465d43e5221d859cd1e8e7ae39306f1c"},{url:"/images/logo_black.svg",revision:"458e9605d4858284ae524f0872ecbb22"},{url:"/images/logo_white.svg",revision:"465d43e5221d859cd1e8e7ae39306f1c"},{url:"/images/mobileimg.svg",revision:"ee28e3c840f2bb6b88bf764784c00b44"},{url:"/images/not-found.svg",revision:"7fa3c943583fde0706d5fdb61287181b"},{url:"/images/overlayBanner.png",revision:"3ec53cc2a22813265c9343958b80c011"},{url:"/images/profile.jpg",revision:"7c0afbe769d91a8cc15b228cffe64445"},{url:"/images/recenthistrory.png",revision:"6547af567d2fa52bcc80bc94d36a8287"},{url:"/images/records.svg",revision:"dd66f110ddda9f6b6eaaa147787050e5"},{url:"/images/sleepinglady.png",revision:"218e04ecfd721f450ae09f0fea1896b7"},{url:"/images/stock-photo-studio-shot-top-view-of-red-crab-1876734760.jpg",revision:"2f926f10dcea87246c1565ceeec96429"},{url:"/images/support.svg",revision:"ae56c08d2787e0712e9a3d30120dae19"},{url:"/images/user-profile.svg",revision:"a20c42c9eccb51ac41d0a0af2952a37a"},{url:"/images/welcome-banner.svg",revision:"a8b33b12f5603aac3312737675c90683"},{url:"/images/welcome-mtrackr.svg",revision:"5f4cf8e20b83c89f5aa0dc4ee6f447b7"},{url:"/ios/100.png",revision:"cae10f79d2423390b20d21120b5f860f"},{url:"/ios/1024.png",revision:"031bf93352b97ab3d25c8a9d18e35a4c"},{url:"/ios/114.png",revision:"e2177d581a167357a3f1c9f1266fc563"},{url:"/ios/120.png",revision:"573f7f123709e10523f3d8d22759ea33"},{url:"/ios/128.png",revision:"b576002979c92df6cae1d162ace84aa0"},{url:"/ios/144.png",revision:"71905a63e730fec4961f1e88572c6bff"},{url:"/ios/152.png",revision:"d30a3780d107a9f954b8c0fd57140d04"},{url:"/ios/16.png",revision:"3cb6ff6c8720a425bdff5118b62a0c4e"},{url:"/ios/167.png",revision:"0be98ce4d06b127a08a3477b6401ad49"},{url:"/ios/180.png",revision:"2994f4ae038200427631586516cbc54e"},{url:"/ios/192.png",revision:"f0e58aaeffe2f6abaacfd36cf2b69c95"},{url:"/ios/20.png",revision:"96ecdf0877edbba0438c600be58cd390"},{url:"/ios/256.png",revision:"750a9cf17724dfbdcb2a2568d8926a7a"},{url:"/ios/29.png",revision:"6b6eb65c7dcaf585931d4a2743d3781c"},{url:"/ios/32.png",revision:"0c1900a3415127544902dee66c981921"},{url:"/ios/40.png",revision:"8f4a414b558567ea10538e01a9b99612"},{url:"/ios/50.png",revision:"90182bc1dbd66808478b9c904de56880"},{url:"/ios/512.png",revision:"199b1688b5cb865c104a41aa5ec7ddc2"},{url:"/ios/57.png",revision:"574a60adc78fd6ac4118c444df2807d8"},{url:"/ios/58.png",revision:"81e2f91f3afcbaefb8e5b87017c564c5"},{url:"/ios/60.png",revision:"40d08a84dbbcbf63efd26ca5d1dc7fed"},{url:"/ios/64.png",revision:"aed7c831d62f930ad46421384bc299e4"},{url:"/ios/72.png",revision:"bdc1ab9b9b52d5349ec9c5c871f6382b"},{url:"/ios/76.png",revision:"c875e90e8fdf69a5ea38b32f7cdd4eea"},{url:"/ios/80.png",revision:"e63d85b216a07e9f92406f501e725fc3"},{url:"/ios/87.png",revision:"b2823bd428d974bb7529bc905955a693"},{url:"/logo.svg",revision:"ffbfaad019ac7edb6d108719c9224293"},{url:"/manifest.json",revision:"9ad0dceec6b633010f906b2118d4227b"},{url:"/splash.png",revision:"55093cf425f2dd290ffa58bfe7a2e08b"},{url:"/splash_screens/10.2__iPad_landscape.png",revision:"92e6a083027c0ec74247047eab272a4e"},{url:"/splash_screens/10.2__iPad_portrait.png",revision:"bc2c490d7c2966ec25764765cd0b90a6"},{url:"/splash_screens/10.5__iPad_Air_landscape.png",revision:"3a5070aa30790eeac8c1146e276538c4"},{url:"/splash_screens/10.5__iPad_Air_portrait.png",revision:"3fbb864bcb8b1ed3b491a6e7ffa26b76"},{url:"/splash_screens/10.9__iPad_Air_landscape.png",revision:"485c342e1ad74a436e93d2ec8ae1e6cb"},{url:"/splash_screens/10.9__iPad_Air_portrait.png",revision:"a5ac3d7ef0a7dde5a2ae12063aefc57e"},{url:"/splash_screens/11__iPad_Pro_M4_landscape.png",revision:"b297cc75bc4f7b16f8b6797adde3cb0d"},{url:"/splash_screens/11__iPad_Pro_M4_portrait.png",revision:"91f109739c017c40dd971b942d1ff906"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"797ab87ef5d7746eb64dc44ac4d7246b"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"33c7e063cde77b85140c7e0e52fe4e45"},{url:"/splash_screens/12.9__iPad_Pro_landscape.png",revision:"4d8e3ed2d443371acec6e3e120931ff0"},{url:"/splash_screens/12.9__iPad_Pro_portrait.png",revision:"be777f7a7c5176632318b420280e5e01"},{url:"/splash_screens/13__iPad_Pro_M4_landscape.png",revision:"134eb6e98de5bdd97f75db695a6873e2"},{url:"/splash_screens/13__iPad_Pro_M4_portrait.png",revision:"e119c99bb488ad168445ad98826f97b6"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"148b7256b8caf178c9d837356cfd7a49"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"efefbe61325df2c2e3c7d9570ee4777a"},{url:"/splash_screens/8.3__iPad_Mini_landscape.png",revision:"3d51efd3dcb41ef66cd23ef5dbfe7006"},{url:"/splash_screens/8.3__iPad_Mini_portrait.png",revision:"436404fda2b1ae8249b94165ae246040"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"47132e2f5f5fed2667d7017263d9f7c2"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"ddc3914c94239fe5a0737a763a26a214"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"5f6ab76df7fdcf0e68bf3d8918d517dd"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"3501cc1e93be878dd83e22a774fbe65c"},{url:"/splash_screens/iPhone_11__iPhone_XR_landscape.png",revision:"94655a8149ccf3c1561dcf3f8712b7d6"},{url:"/splash_screens/iPhone_11__iPhone_XR_portrait.png",revision:"5032324f64de008fab6d40195304b132"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"fd18dfdbc739a1a1cfa4845344fe6627"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"415ec44282957d24ecaa99f23df01aa9"},{url:"/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"231661ca0914755337b3ee0fd3294df1"},{url:"/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"8d79cf3e3f1db8712993372b32ea4e2c"},{url:"/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"9ed86e876ffb1b995eb656e089956fbe"},{url:"/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"43d375218ff8948fb90a6477f21be32b"},{url:"/splash_screens/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png",revision:"e9adf330e92178256f5d60c0253522a0"},{url:"/splash_screens/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png",revision:"f529bd70ee5e1437fec693b8491140d0"},{url:"/splash_screens/iPhone_16_Pro_Max_landscape.png",revision:"1cb85aab3e766681ec34285c0f93cf69"},{url:"/splash_screens/iPhone_16_Pro_Max_portrait.png",revision:"81e1854281fb9d14815d5a7bec1eb2d9"},{url:"/splash_screens/iPhone_16_Pro_landscape.png",revision:"7d0de3050849d34dc1ee5a92dd823a17"},{url:"/splash_screens/iPhone_16_Pro_portrait.png",revision:"e466623eef29a453461f8868601648cb"},{url:"/splash_screens/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png",revision:"47f3f5165f1d0dbc04b4e1b19022f850"},{url:"/splash_screens/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png",revision:"f57d308360374bc8e848572468d4aabc"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"c68acb3ab8849b21cbf659168124e95a"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"55093cf425f2dd290ffa58bfe7a2e08b"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"88e06a30ba65351291eb0b36480bc1b5"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"ea9ffb5587ad8a243b4c476b7994e1dd"},{url:"/splash_screens/icon.png",revision:"6b9e8cf1f67b5f1951463a1dc1833702"},{url:"/sw.js",revision:"ba3fdd2bdbc7652c6fd09a87d56ba1ae"},{url:"/sw.js.map",revision:"0d6bc7dbf28582ff1a09957165d05043"},{url:"/windows11/LargeTile.scale-100.png",revision:"aff9861ff1b9b540fe9f4a809ffc5b90"},{url:"/windows11/LargeTile.scale-125.png",revision:"30dfb67f7d3f46d55435fa1a3cf7f903"},{url:"/windows11/LargeTile.scale-150.png",revision:"e34bfba44b1051cacc5c03f4e06369c3"},{url:"/windows11/LargeTile.scale-200.png",revision:"6013b207ef8fa6d886276a89245addd0"},{url:"/windows11/LargeTile.scale-400.png",revision:"d5488abeeed72cdc9203323f34fdd92d"},{url:"/windows11/SmallTile.scale-100.png",revision:"c800aacbacc97a047562bacb9d2318c6"},{url:"/windows11/SmallTile.scale-125.png",revision:"1fad5a80cf9edb7335925b9b8fa618fd"},{url:"/windows11/SmallTile.scale-150.png",revision:"c72c1d44a7f23ec12d174ce2ae1c49ea"},{url:"/windows11/SmallTile.scale-200.png",revision:"88543736fd16baac92204dce4993e7a9"},{url:"/windows11/SmallTile.scale-400.png",revision:"982fa1096e71e0217ab314ea31204991"},{url:"/windows11/SplashScreen.scale-100.png",revision:"3f803166e37d8254a705f91fd251fba6"},{url:"/windows11/SplashScreen.scale-125.png",revision:"78a839c3e8fd822094bcfd0d26827e78"},{url:"/windows11/SplashScreen.scale-150.png",revision:"e174f3aca2c0a5abd8a37d7e1ec0a46e"},{url:"/windows11/SplashScreen.scale-200.png",revision:"1dd5c66f8c134c766be9cb5011cb3dd2"},{url:"/windows11/SplashScreen.scale-400.png",revision:"4292563b9ed7a9897bfbf1d899e207ae"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"e8295a44e9e2b8f21c87eca5c6d036a3"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"3a53cf1caafa49e97eb91347f4c632b8"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"94968f4f497050758d6bffa8edebf887"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"687cde99aad91a6ad82b7794b7d0ba48"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"255d34a4959890d341fbda657f4366d5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"2d036f4185a0577c958e896ec9fd11e4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"49d2a3c12fd908bf162dd4ae6e919619"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"8706fe83ba825313642a4d577af5b917"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"ad04729906a2dbabdd98cf109dd5c9cc"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"116867892af0fa5bf895e7f937ea1e9f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"497f275c186fa58f520fa6ed04d3a0b5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"5c5421051113e6dd3660debf6d6e82a2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"78c43ac656fa44a59f3a7c0b520cfbd9"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"4b58b0987ce1fa49fa1e951a015e24d5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"2d5d04c74ba4111988ef0a53363affae"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"25d53e70bcb64bef804d7fb0d4e497a8"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"efe67438bd40d0dd29d2a2abd63e4a4c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"d48165ceba6be0b1bd216ce59a910d62"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"e085260ca02c4f749576e213662bb27e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"ed02053b5a93f7444d035f2910446618"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"2d036f4185a0577c958e896ec9fd11e4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"49d2a3c12fd908bf162dd4ae6e919619"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"8706fe83ba825313642a4d577af5b917"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"ad04729906a2dbabdd98cf109dd5c9cc"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"116867892af0fa5bf895e7f937ea1e9f"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"497f275c186fa58f520fa6ed04d3a0b5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"5c5421051113e6dd3660debf6d6e82a2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"78c43ac656fa44a59f3a7c0b520cfbd9"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"4b58b0987ce1fa49fa1e951a015e24d5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"2d5d04c74ba4111988ef0a53363affae"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"25d53e70bcb64bef804d7fb0d4e497a8"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"efe67438bd40d0dd29d2a2abd63e4a4c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"d48165ceba6be0b1bd216ce59a910d62"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"e085260ca02c4f749576e213662bb27e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"ed02053b5a93f7444d035f2910446618"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"4b58b0987ce1fa49fa1e951a015e24d5"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"90976521f36fb1bb8129ed8c94488da2"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"fa05b8081a867ed045b8ffe2988473d8"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"20f1b36b3290bfa08076b858bcf68537"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"9bf53b03892516dd0ca28749bcb6a474"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"2d036f4185a0577c958e896ec9fd11e4"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"49d2a3c12fd908bf162dd4ae6e919619"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"8706fe83ba825313642a4d577af5b917"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"ad04729906a2dbabdd98cf109dd5c9cc"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"116867892af0fa5bf895e7f937ea1e9f"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"497f275c186fa58f520fa6ed04d3a0b5"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"5c5421051113e6dd3660debf6d6e82a2"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"78c43ac656fa44a59f3a7c0b520cfbd9"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"4b58b0987ce1fa49fa1e951a015e24d5"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"2d5d04c74ba4111988ef0a53363affae"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"25d53e70bcb64bef804d7fb0d4e497a8"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"efe67438bd40d0dd29d2a2abd63e4a4c"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"d48165ceba6be0b1bd216ce59a910d62"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"e085260ca02c4f749576e213662bb27e"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"ed02053b5a93f7444d035f2910446618"},{url:"/windows11/StoreLogo.scale-100.png",revision:"90182bc1dbd66808478b9c904de56880"},{url:"/windows11/StoreLogo.scale-125.png",revision:"8b46749fd60e9cd0b5f9aca9b2160278"},{url:"/windows11/StoreLogo.scale-150.png",revision:"4c64123768c5970441445daaae30714c"},{url:"/windows11/StoreLogo.scale-200.png",revision:"cae10f79d2423390b20d21120b5f860f"},{url:"/windows11/StoreLogo.scale-400.png",revision:"d83c498316aefc01dce1a9f29dbc9a34"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"7c6eee263387c8b7fde0efab907742de"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"7080405795a587534ccf7d98cc46d5fc"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"49783493a1de4505448b688fc83ff4a7"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"3f803166e37d8254a705f91fd251fba6"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"1dd5c66f8c134c766be9cb5011cb3dd2"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:i}})=>!(!e||i.startsWith("/api/auth/callback")||!i.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:i},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!i.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:i},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!i.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:i})=>i&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
