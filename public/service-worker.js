if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let r={};const c=e=>i(e,o),t={module:{uri:o},exports:r,require:c};a[o]=Promise.all(s.map((e=>t[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5HHxhIljjZaoCKt2MyYQ-/_buildManifest.js",revision:"0ea7e7088aabf697ba3d8aa8c7b54a89"},{url:"/_next/static/5HHxhIljjZaoCKt2MyYQ-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-8b25429263eb8be2.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/1262-ae563931d410bd88.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/1979-4cb7a310b88d8896.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/2269-0b1f7ae21e6a0dcc.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/2375-afc950b0b720d8b8.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/259-5004bbbd143f491c.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/2593-7a164b23d69244e2.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/2972-a37fc92415c5dd40.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/3464-2b28c9f494e4fd98.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/3773-83749b46cd24aed5.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/3833-1434100bd2677991.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/4228-5d4084053a40a148.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/4438-b2bdc04976d68a60.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/4812-d60b08525e984317.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/5223.60894afb74932a42.js",revision:"60894afb74932a42"},{url:"/_next/static/chunks/5349-284552f7b420f31a.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/5416-076aca73e1627670.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/5502-9b5f4db3bde1dbea.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/558-88a92a4b62ec1b91.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/5878-1fb991532909454a.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/6101-50c0fdc7d929d983.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/6137-993561281c31b664.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/6997-bdebd2c4b655580f.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/7242-fc0476257459eabf.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/8093-81ecd6852e8cf78a.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/8965-f6eba3760b8803f3.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/901-88efe8da9ac08362.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/9064-2459486926a7f9b3.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/9215-a22d744f0847f751.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/948-0a881cde213901cf.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(auth)/forgot-password/page-3a9e1033b12844ea.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(auth)/layout-bd5a60e4abe2593f.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(auth)/login/page-300d53a28164ded1.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(auth)/register/page-83d766bd6530db54.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(auth)/reset-password/page-5741d5e413176542.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/analytics/page-0977215c3c8b601d.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/help/page-514704d15352565f.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/history/page-4bdbcd08701a1088.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/home/page-7a88834bfb3ad5b3.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/layout-62777d67c4ec9b8b.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/more/page-0a4ad63ddfa986d0.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/records/%5Btype%5D/page-b622923717532923.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/records/add/%5Btype%5D/page-3afbb61ebb52f339.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/records/details/%5Bid%5D/page-197726201fa73b16.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/records/page-28e0c534da281c27.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/referral-history/page-b5f978d0e4d9e161.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/settings/page-24dd3863a3169094.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/settings/profile/page-9c0436b4d999fd93.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/(protectedRoute)/app/subscription/page-0410dacc7eacc78d.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/_not-found/page-f3bbbc32f9f28f87.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/error-8f422d5f7e955bc0.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/layout-a87799fd051fff1a.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/loading-839deaaa4efe7562.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/not-found-4392a4d716084c28.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/app/page-fb3b6f5a34d9e91e.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/fd9d1056-d4d14706d92c94a0.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/framework-a63c59c368572696.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/main-app-d9128aa8c0cc334f.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/main-eb648aff15cb4a55.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/pages/_app-78ddf957b9a9b996.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/pages/_error-7ce03bcf1df914ce.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-4ed8e3af43b899cc.js",revision:"5HHxhIljjZaoCKt2MyYQ-"},{url:"/_next/static/css/fb497b0f48f97969.css",revision:"fb497b0f48f97969"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/android/android-launchericon-144-144.png",revision:"71905a63e730fec4961f1e88572c6bff"},{url:"/android/android-launchericon-192-192.png",revision:"f0e58aaeffe2f6abaacfd36cf2b69c95"},{url:"/android/android-launchericon-48-48.png",revision:"4694ed275f7f58f261ddf10255fb3139"},{url:"/android/android-launchericon-512-512.png",revision:"199b1688b5cb865c104a41aa5ec7ddc2"},{url:"/android/android-launchericon-72-72.png",revision:"bdc1ab9b9b52d5349ec9c5c871f6382b"},{url:"/android/android-launchericon-96-96.png",revision:"2f0afed01ddba95957a28bef238a49ed"},{url:"/favicon_io/android-chrome-192x192.png",revision:"60c40193df99930d95e823daca217087"},{url:"/favicon_io/android-chrome-512x512.png",revision:"d81ba86af6f6aba11d992ef7904f6a84"},{url:"/favicon_io/apple-touch-icon.png",revision:"a808474157cb9451fbc4b101e6b8abe6"},{url:"/favicon_io/favicon-16x16.png",revision:"67ef5985e8d12170831fd284c582dab0"},{url:"/favicon_io/favicon-32x32.png",revision:"e5b66a26a91b75629d4c62b5c26b7cdd"},{url:"/favicon_io/favicon.ico",revision:"b534a424051c9de3139aed0aa4928615"},{url:"/favicon_io/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/images/Backgroundfeature.png",revision:"fe45aa51edae3548082e35ff48e48c7c"},{url:"/images/Desktop.svgl.svg",revision:"458e9605d4858284ae524f0872ecbb22"},{url:"/images/Group 26649.svg",revision:"c0d0f968e741e35b1ed5d15991b1306d"},{url:"/images/Group 39819.png",revision:"1aa7f13ec3a287474542af7ed093b852"},{url:"/images/HeroImage.png",revision:"8a0cbc67f881a02cc1af4869449b3a32"},{url:"/images/analystics.png",revision:"676cd3b660d9cb7feea1096b6a760586"},{url:"/images/babysmiling.png",revision:"6cad3e9309363bf3e0c4bf2e59fef3f9"},{url:"/images/banner-mobile.svg",revision:"ebca3c714e4be0317ab3aba98ec9960d"},{url:"/images/banner.svg",revision:"f2ad6374934c61aeb87b8bbe83b62d34"},{url:"/images/bottomimage.png",revision:"fb710038c1d952607e26225e94a32bec"},{url:"/images/businessdie.png",revision:"5f77a6f91cd4ba3bf68d021bcc23cf4d"},{url:"/images/businessstress.png",revision:"e882af1769514e527556fb06fc992273"},{url:"/images/close.svg",revision:"740214c6d190fc29b8c651dfd872cab1"},{url:"/images/emptyRecord.svg",revision:"c0d0f968e741e35b1ed5d15991b1306d"},{url:"/images/error-icon.svg",revision:"503dff206e8ea2118a35e7f599d8c06a"},{url:"/images/groupsphones.png",revision:"c9135ae99d671fbd96fe220e5321934c"},{url:"/images/guysmiling.png",revision:"9a98db15726080a442a4835d61beb882"},{url:"/images/history.png",revision:"2c5fc75901f58e87cc9f88f94f7547e2"},{url:"/images/howrecord.svg",revision:"a71bf735cc1e40894100ccefd91e0ba3"},{url:"/images/logo.svg",revision:"458e9605d4858284ae524f0872ecbb22"},{url:"/images/logoNew.svg",revision:"465d43e5221d859cd1e8e7ae39306f1c"},{url:"/images/logo_black.svg",revision:"458e9605d4858284ae524f0872ecbb22"},{url:"/images/logo_white.svg",revision:"465d43e5221d859cd1e8e7ae39306f1c"},{url:"/images/mobileimg.png",revision:"7ec024582ac4b55856f5fe00f291e79c"},{url:"/images/overlayBanner.png",revision:"3ec53cc2a22813265c9343958b80c011"},{url:"/images/profile.jpg",revision:"7c0afbe769d91a8cc15b228cffe64445"},{url:"/images/recenthistrory.png",revision:"6547af567d2fa52bcc80bc94d36a8287"},{url:"/images/records.png",revision:"5846a739a4f03658ef7c6aa3b7c9f2e8"},{url:"/images/sleepinglady.png",revision:"218e04ecfd721f450ae09f0fea1896b7"},{url:"/images/stock-photo-studio-shot-top-view-of-red-crab-1876734760.jpg",revision:"2f926f10dcea87246c1565ceeec96429"},{url:"/images/user-profile.svg",revision:"a20c42c9eccb51ac41d0a0af2952a37a"},{url:"/images/welcome-banner.svg",revision:"c3df56c89ab67aac9f5e559b43b1d342"},{url:"/images/welcome-mtrackr.svg",revision:"5f4cf8e20b83c89f5aa0dc4ee6f447b7"},{url:"/ios/100.png",revision:"cae10f79d2423390b20d21120b5f860f"},{url:"/ios/1024.png",revision:"031bf93352b97ab3d25c8a9d18e35a4c"},{url:"/ios/114.png",revision:"e2177d581a167357a3f1c9f1266fc563"},{url:"/ios/120.png",revision:"573f7f123709e10523f3d8d22759ea33"},{url:"/ios/128.png",revision:"b576002979c92df6cae1d162ace84aa0"},{url:"/ios/144.png",revision:"71905a63e730fec4961f1e88572c6bff"},{url:"/ios/152.png",revision:"d30a3780d107a9f954b8c0fd57140d04"},{url:"/ios/16.png",revision:"3cb6ff6c8720a425bdff5118b62a0c4e"},{url:"/ios/167.png",revision:"0be98ce4d06b127a08a3477b6401ad49"},{url:"/ios/180.png",revision:"2994f4ae038200427631586516cbc54e"},{url:"/ios/192.png",revision:"f0e58aaeffe2f6abaacfd36cf2b69c95"},{url:"/ios/20.png",revision:"96ecdf0877edbba0438c600be58cd390"},{url:"/ios/256.png",revision:"750a9cf17724dfbdcb2a2568d8926a7a"},{url:"/ios/29.png",revision:"6b6eb65c7dcaf585931d4a2743d3781c"},{url:"/ios/32.png",revision:"0c1900a3415127544902dee66c981921"},{url:"/ios/40.png",revision:"8f4a414b558567ea10538e01a9b99612"},{url:"/ios/50.png",revision:"90182bc1dbd66808478b9c904de56880"},{url:"/ios/512.png",revision:"199b1688b5cb865c104a41aa5ec7ddc2"},{url:"/ios/57.png",revision:"574a60adc78fd6ac4118c444df2807d8"},{url:"/ios/58.png",revision:"81e2f91f3afcbaefb8e5b87017c564c5"},{url:"/ios/60.png",revision:"40d08a84dbbcbf63efd26ca5d1dc7fed"},{url:"/ios/64.png",revision:"aed7c831d62f930ad46421384bc299e4"},{url:"/ios/72.png",revision:"bdc1ab9b9b52d5349ec9c5c871f6382b"},{url:"/ios/76.png",revision:"c875e90e8fdf69a5ea38b32f7cdd4eea"},{url:"/ios/80.png",revision:"e63d85b216a07e9f92406f501e725fc3"},{url:"/ios/87.png",revision:"b2823bd428d974bb7529bc905955a693"},{url:"/logo.svg",revision:"ffbfaad019ac7edb6d108719c9224293"},{url:"/manifest.json",revision:"9ad0dceec6b633010f906b2118d4227b"},{url:"/sw.js",revision:"ba3fdd2bdbc7652c6fd09a87d56ba1ae"},{url:"/sw.js.map",revision:"0d6bc7dbf28582ff1a09957165d05043"},{url:"/windows11/LargeTile.scale-100.png",revision:"aff9861ff1b9b540fe9f4a809ffc5b90"},{url:"/windows11/LargeTile.scale-125.png",revision:"30dfb67f7d3f46d55435fa1a3cf7f903"},{url:"/windows11/LargeTile.scale-150.png",revision:"e34bfba44b1051cacc5c03f4e06369c3"},{url:"/windows11/LargeTile.scale-200.png",revision:"6013b207ef8fa6d886276a89245addd0"},{url:"/windows11/LargeTile.scale-400.png",revision:"d5488abeeed72cdc9203323f34fdd92d"},{url:"/windows11/SmallTile.scale-100.png",revision:"c800aacbacc97a047562bacb9d2318c6"},{url:"/windows11/SmallTile.scale-125.png",revision:"1fad5a80cf9edb7335925b9b8fa618fd"},{url:"/windows11/SmallTile.scale-150.png",revision:"c72c1d44a7f23ec12d174ce2ae1c49ea"},{url:"/windows11/SmallTile.scale-200.png",revision:"88543736fd16baac92204dce4993e7a9"},{url:"/windows11/SmallTile.scale-400.png",revision:"982fa1096e71e0217ab314ea31204991"},{url:"/windows11/SplashScreen.scale-100.png",revision:"3f803166e37d8254a705f91fd251fba6"},{url:"/windows11/SplashScreen.scale-125.png",revision:"78a839c3e8fd822094bcfd0d26827e78"},{url:"/windows11/SplashScreen.scale-150.png",revision:"e174f3aca2c0a5abd8a37d7e1ec0a46e"},{url:"/windows11/SplashScreen.scale-200.png",revision:"1dd5c66f8c134c766be9cb5011cb3dd2"},{url:"/windows11/SplashScreen.scale-400.png",revision:"4292563b9ed7a9897bfbf1d899e207ae"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"e8295a44e9e2b8f21c87eca5c6d036a3"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"3a53cf1caafa49e97eb91347f4c632b8"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"94968f4f497050758d6bffa8edebf887"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"687cde99aad91a6ad82b7794b7d0ba48"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"255d34a4959890d341fbda657f4366d5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"2d036f4185a0577c958e896ec9fd11e4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"49d2a3c12fd908bf162dd4ae6e919619"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"8706fe83ba825313642a4d577af5b917"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"ad04729906a2dbabdd98cf109dd5c9cc"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"116867892af0fa5bf895e7f937ea1e9f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"497f275c186fa58f520fa6ed04d3a0b5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"5c5421051113e6dd3660debf6d6e82a2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"78c43ac656fa44a59f3a7c0b520cfbd9"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"4b58b0987ce1fa49fa1e951a015e24d5"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"2d5d04c74ba4111988ef0a53363affae"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"25d53e70bcb64bef804d7fb0d4e497a8"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"efe67438bd40d0dd29d2a2abd63e4a4c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"d48165ceba6be0b1bd216ce59a910d62"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"e085260ca02c4f749576e213662bb27e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"ed02053b5a93f7444d035f2910446618"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"2d036f4185a0577c958e896ec9fd11e4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"49d2a3c12fd908bf162dd4ae6e919619"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"8706fe83ba825313642a4d577af5b917"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"ad04729906a2dbabdd98cf109dd5c9cc"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"116867892af0fa5bf895e7f937ea1e9f"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"497f275c186fa58f520fa6ed04d3a0b5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"5c5421051113e6dd3660debf6d6e82a2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"78c43ac656fa44a59f3a7c0b520cfbd9"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"4b58b0987ce1fa49fa1e951a015e24d5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"2d5d04c74ba4111988ef0a53363affae"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"25d53e70bcb64bef804d7fb0d4e497a8"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"efe67438bd40d0dd29d2a2abd63e4a4c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"d48165ceba6be0b1bd216ce59a910d62"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"e085260ca02c4f749576e213662bb27e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"ed02053b5a93f7444d035f2910446618"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"4b58b0987ce1fa49fa1e951a015e24d5"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"90976521f36fb1bb8129ed8c94488da2"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"fa05b8081a867ed045b8ffe2988473d8"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"20f1b36b3290bfa08076b858bcf68537"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"9bf53b03892516dd0ca28749bcb6a474"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"2d036f4185a0577c958e896ec9fd11e4"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"49d2a3c12fd908bf162dd4ae6e919619"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"8706fe83ba825313642a4d577af5b917"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"ad04729906a2dbabdd98cf109dd5c9cc"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"116867892af0fa5bf895e7f937ea1e9f"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"497f275c186fa58f520fa6ed04d3a0b5"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"5c5421051113e6dd3660debf6d6e82a2"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"78c43ac656fa44a59f3a7c0b520cfbd9"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"4b58b0987ce1fa49fa1e951a015e24d5"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"2d5d04c74ba4111988ef0a53363affae"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"25d53e70bcb64bef804d7fb0d4e497a8"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"efe67438bd40d0dd29d2a2abd63e4a4c"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"d48165ceba6be0b1bd216ce59a910d62"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"e085260ca02c4f749576e213662bb27e"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"ed02053b5a93f7444d035f2910446618"},{url:"/windows11/StoreLogo.scale-100.png",revision:"90182bc1dbd66808478b9c904de56880"},{url:"/windows11/StoreLogo.scale-125.png",revision:"8b46749fd60e9cd0b5f9aca9b2160278"},{url:"/windows11/StoreLogo.scale-150.png",revision:"4c64123768c5970441445daaae30714c"},{url:"/windows11/StoreLogo.scale-200.png",revision:"cae10f79d2423390b20d21120b5f860f"},{url:"/windows11/StoreLogo.scale-400.png",revision:"d83c498316aefc01dce1a9f29dbc9a34"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"7c6eee263387c8b7fde0efab907742de"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"7080405795a587534ccf7d98cc46d5fc"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"49783493a1de4505448b688fc83ff4a7"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"3f803166e37d8254a705f91fd251fba6"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"1dd5c66f8c134c766be9cb5011cb3dd2"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
