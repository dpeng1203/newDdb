(function(e){function n(n){for(var a,c,i=n[0],u=n[1],h=n[2],s=0,d=[];s<i.length;s++)c=i[s],r[c]&&d.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(n);while(d.length)d.shift()();return o.push.apply(o,h||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var i=t[c];0!==r[i]&&(a=!1)}a&&(o.splice(n--,1),e=u(u.s=t[0]))}return e}var a={},c={app:0},r={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-083a90fa":"ef9561b4","chunk-0a8d4572":"a692ae06","chunk-0f498618":"8917f040","chunk-12d8e54b":"29f72693","chunk-12ec5a61":"0f779d42","chunk-1afdfe86":"712ec047","chunk-1dbe8586":"14db9c5a","chunk-1ffaed46":"1a67c289","chunk-201a003a":"285a5ed6","chunk-14039e72":"e0c42760","chunk-18087414":"89c3bf74","chunk-22b69ad4":"adf95479","chunk-45f0c466":"fed7350e","chunk-49c35312":"cbdf857e","chunk-557e9363":"93368363","chunk-5fa81516":"15fecc47","chunk-6381a415":"826d94bb","chunk-7b7ffe52":"4ba5d1ae","chunk-207b5108":"233d6659","chunk-20a2f017":"f47a44ca","chunk-35c0fe8a":"a864bc23","chunk-36c08b14":"f9bf3858","chunk-485d6d88":"eb0624f3","chunk-48f4815b":"98fa16c9","chunk-4f1093e3":"bfe58cf7","chunk-5c5410bd":"2eb2be80","chunk-63761eb5":"9aa443de","chunk-661d69f8":"2e22e40f","chunk-67caada6":"fbfdabad","chunk-735c5f96":"74df7019","chunk-8251d972":"599fb045","chunk-966f1a04":"a72633d4","chunk-a61444e8":"8a67f143","chunk-aa2598cc":"2bfbbb31","chunk-ac681b72":"6085c6f2","chunk-ba1ddad0":"23931ee4","chunk-cd23094e":"5fc4b93d","chunk-d76d04b8":"75f4db85","chunk-d79a8a54":"b57a02bc"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-083a90fa":1,"chunk-0a8d4572":1,"chunk-0f498618":1,"chunk-12d8e54b":1,"chunk-12ec5a61":1,"chunk-1afdfe86":1,"chunk-1dbe8586":1,"chunk-1ffaed46":1,"chunk-14039e72":1,"chunk-18087414":1,"chunk-22b69ad4":1,"chunk-45f0c466":1,"chunk-49c35312":1,"chunk-557e9363":1,"chunk-5fa81516":1,"chunk-6381a415":1,"chunk-7b7ffe52":1,"chunk-207b5108":1,"chunk-20a2f017":1,"chunk-35c0fe8a":1,"chunk-36c08b14":1,"chunk-485d6d88":1,"chunk-48f4815b":1,"chunk-4f1093e3":1,"chunk-5c5410bd":1,"chunk-63761eb5":1,"chunk-661d69f8":1,"chunk-67caada6":1,"chunk-735c5f96":1,"chunk-8251d972":1,"chunk-966f1a04":1,"chunk-a61444e8":1,"chunk-aa2598cc":1,"chunk-ac681b72":1,"chunk-ba1ddad0":1,"chunk-cd23094e":1,"chunk-d76d04b8":1,"chunk-d79a8a54":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise(function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-083a90fa":"94ca3d53","chunk-0a8d4572":"ff44f5c8","chunk-0f498618":"fcf9c911","chunk-12d8e54b":"2f4637de","chunk-12ec5a61":"1e0d1e7b","chunk-1afdfe86":"ced6a35a","chunk-1dbe8586":"24e6ae3b","chunk-1ffaed46":"03fbf849","chunk-201a003a":"31d6cfe0","chunk-14039e72":"7f05015c","chunk-18087414":"b1c1365d","chunk-22b69ad4":"e464c99f","chunk-45f0c466":"9bdd71d2","chunk-49c35312":"da22a7bc","chunk-557e9363":"ec86b853","chunk-5fa81516":"c1df686d","chunk-6381a415":"4c4f7190","chunk-7b7ffe52":"40fcbb3e","chunk-207b5108":"eedf600e","chunk-20a2f017":"11943873","chunk-35c0fe8a":"039964b9","chunk-36c08b14":"257289c2","chunk-485d6d88":"da185b12","chunk-48f4815b":"c6d51e05","chunk-4f1093e3":"0f25dd43","chunk-5c5410bd":"9dd98feb","chunk-63761eb5":"2ca495c1","chunk-661d69f8":"8238dd2d","chunk-67caada6":"ad6c2faa","chunk-735c5f96":"257289c2","chunk-8251d972":"7de3d4f4","chunk-966f1a04":"0559726d","chunk-a61444e8":"94ca3d53","chunk-aa2598cc":"116232de","chunk-ac681b72":"52c09424","chunk-ba1ddad0":"6d912094","chunk-cd23094e":"55862fa6","chunk-d76d04b8":"94ca3d53","chunk-d79a8a54":"d02653da"}[e]+".css",r=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var h=o[i],s=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(s===a||s===r))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){h=d[i],s=h.getAttribute("data-href");if(s===a||s===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],f.parentNode.removeChild(f),t(o)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){c[e]=0}));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(function(n,t){a=r[e]=[n,t]});n.push(a[2]=o);var h,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e),h=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+c+")");o.type=a,o.request=c,t[1](o)}r[e]=void 0}};var d=setTimeout(function(){h({type:"timeout",target:s})},12e4);s.onerror=s.onload=h,document.head.appendChild(s)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],s=h.push.bind(h);h.push=n,h=h.slice();for(var d=0;d<h.length;d++)n(h[d]);var f=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0370":function(e,n,t){e.exports=t.p+"img/order_manage.cc330a52.png"},"037c":function(e,n,t){e.exports=t.p+"img/logo_1.9cf23bc0.png"},"0f76":function(e,n,t){e.exports=t.p+"img/home_cont_7.ecef47fd.png"},"11b8":function(e,n,t){e.exports=t.p+"img/home_cont_8.dce4fa51.png"},1864:function(e,n,t){e.exports=t.p+"img/home_cont_6.82752160.png"},"3a40":function(e,n,t){e.exports=t.p+"img/home_cont_11.22212ff1.png"},"41cb":function(e,n,t){"use strict";var a=t("2b0e"),c=t("8c4f");t("bb51");a["a"].use(c["a"]),n["a"]=new c["a"]({routes:[{path:"/",redirect:"/user/login"},{path:"/home",name:"home",meta:{hideInMenu:!0,title:"个人中心",notCache:!0,icon:"md-home"},component:function(){return Promise.resolve().then(t.bind(null,"bb51"))}},{path:"/user/login",name:"login",meta:{title:"登录"},component:function(){return t.e("chunk-0f498618").then(t.bind(null,"ede4"))}},{path:"/user/register",name:"register",meta:{title:"注册"},component:function(){return t.e("chunk-ac681b72").then(t.bind(null,"0f9e"))}},{path:"/user",name:"withdrawNav",component:function(){return t.e("chunk-661d69f8").then(t.bind(null,"5545"))},children:[{path:"withdraw",name:"withdraw",meta:{title:"提现"},component:function(){return t.e("chunk-12ec5a61").then(t.bind(null,"b517"))}},{path:"withdrawList",name:"withdrawList",meta:{title:"提现记录"},component:function(){return Promise.all([t.e("chunk-201a003a"),t.e("chunk-49c35312")]).then(t.bind(null,"217a"))}}]},{path:"/user/deviceList",name:"device",meta:{title:"我的设备"},component:function(){return Promise.all([t.e("chunk-201a003a"),t.e("chunk-45f0c466")]).then(t.bind(null,"2e81"))}},{path:"/user/agent",name:"agent",meta:{title:"我的代理"},component:function(){return Promise.all([t.e("chunk-201a003a"),t.e("chunk-557e9363")]).then(t.bind(null,"01c8"))}},{path:"/user/agentUp",name:"agentUp",meta:{title:"升级运营"},component:function(){return t.e("chunk-a61444e8").then(t.bind(null,"3a08"))}},{path:"/user/devicePrice",name:"devicePrice",meta:{title:"设备价格"},component:function(){return Promise.all([t.e("chunk-201a003a"),t.e("chunk-6381a415")]).then(t.bind(null,"a692"))}},{path:"/user/shareDevice",name:"shareDevice",meta:{title:"设备分发"},component:function(){return Promise.all([t.e("chunk-201a003a"),t.e("chunk-5fa81516")]).then(t.bind(null,"16e3"))}},{path:"/user/findPwd",name:"findPwd",meta:{title:"忘记密码"},component:function(){return t.e("chunk-12d8e54b").then(t.bind(null,"bb59"))}},{path:"/user/sendProm",name:"sendProm",meta:{title:"授权码"},component:function(){return t.e("chunk-d76d04b8").then(t.bind(null,"8ec94"))}},{path:"/user/recommend",name:"recommend",meta:{title:"推荐码"},component:function(){return t.e("chunk-63761eb5").then(t.bind(null,"72c9"))}},{path:"/user/recommendList",name:"recommendList",meta:{title:"推荐列表"},component:function(){return Promise.all([t.e("chunk-201a003a"),t.e("chunk-18087414")]).then(t.bind(null,"cc88"))}},{path:"/user/qrcode",name:"qrcode",meta:{title:"二维码"},component:function(){return t.e("chunk-966f1a04").then(t.bind(null,"7ff8"))}},{path:"/user/qrRecommend",name:"qrRecommend",meta:{title:"推荐"},component:function(){return t.e("chunk-1ffaed46").then(t.bind(null,"bdb7"))}},{path:"/user/bonusList",name:"bonusList",meta:{title:"收益明细"},component:function(){return Promise.all([t.e("chunk-201a003a"),t.e("chunk-22b69ad4")]).then(t.bind(null,"47c2"))}},{path:"/user/production",name:"production",meta:{title:"产品详情"},component:function(){return t.e("chunk-5c5410bd").then(t.bind(null,"7715"))}},{path:"/user/pay",name:"pay",meta:{title:"DODO智能养生仪"},component:function(){return t.e("chunk-67caada6").then(t.bind(null,"10db"))}},{path:"/user/pay1",name:"pay1",meta:{title:"DODO智能养生仪"},component:function(){return t.e("chunk-1afdfe86").then(t.bind(null,"7095"))}},{path:"/user/payNext",name:"payNext",meta:{title:"DODO智能养生仪"},component:function(){return t.e("chunk-485d6d88").then(t.bind(null,"ebf4"))}},{path:"/user/payTest",name:"payTest",meta:{title:"支付(Test)"},component:function(){return t.e("chunk-4f1093e3").then(t.bind(null,"3490"))}},{path:"/user/paySuccess",name:"paySuccess",meta:{title:"支付成功"},component:function(){return t.e("chunk-36c08b14").then(t.bind(null,"e86e"))}},{path:"/user/payFailed",name:"payFailed",meta:{title:"支付失败"},component:function(){return t.e("chunk-735c5f96").then(t.bind(null,"a1de"))}},{path:"/user/using",name:"using",meta:{title:"使用中"},component:function(){return t.e("chunk-1dbe8586").then(t.bind(null,"9026"))}},{path:"/buyDeal",name:"buyDeal",meta:{title:"购机协议"},component:function(){return t.e("chunk-35c0fe8a").then(t.bind(null,"9a74"))}},{path:"/payOrder",name:"payOrder",meta:{title:"支付订单"},component:function(){return t.e("chunk-ba1ddad0").then(t.bind(null,"871c"))}},{path:"/buy",name:"buy",meta:{title:"申领设备"},component:function(){return t.e("chunk-aa2598cc").then(t.bind(null,"8649"))}},{path:"/statsAgent",name:"statsAgent",meta:{title:"查看代理"},component:function(){return t.e("chunk-8251d972").then(t.bind(null,"bc6f"))}},{path:"/statsDetail",name:"statsDetail",meta:{title:"代理明细"},component:function(){return t.e("chunk-48f4815b").then(t.bind(null,"4788"))}},{path:"/orderQuery",name:"orderQuery",meta:{title:"订单查询"},component:function(){return Promise.all([t.e("chunk-201a003a"),t.e("chunk-14039e72")]).then(t.bind(null,"476a"))}},{path:"/withdrawMybenefits",name:"withdrawMybenefits",meta:{title:"我的收益"},component:function(){return t.e("chunk-d79a8a54").then(t.bind(null,"5413"))}},{path:"/recharge",name:"recharge",meta:{title:"指定用户充值"},component:function(){return t.e("chunk-083a90fa").then(t.bind(null,"ba94"))}},{path:"/setting",name:"setting",meta:{title:"设置"},component:function(){return t.e("chunk-207b5108").then(t.bind(null,"e0df"))}},{path:"/regDeal",name:"regDeal",component:function(){return t.e("chunk-cd23094e").then(t.bind(null,"54df"))}},{path:"/myDeal",name:"myDeal",meta:{title:"我的协议"},component:function(){return t.e("chunk-20a2f017").then(t.bind(null,"beed"))}},{path:"/orderManage",name:"orderManage",meta:{title:"订单列表"},component:function(){return Promise.all([t.e("chunk-201a003a"),t.e("chunk-7b7ffe52")]).then(t.bind(null,"c54c"))}},{path:"/orderDetail",name:"orderDetail",meta:{title:"订单详情"},component:function(){return t.e("chunk-0a8d4572").then(t.bind(null,"0d7d"))}}]})},5616:function(e,n){e.exports="data:image/png;base64,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"},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o={},i=o,u=(t("7c55"),t("2877")),h=Object(u["a"])(i,c,r,!1,null,null,null),s=h.exports,d=t("2bdd"),f=t("b970"),m=t("d1e1"),l=t("9ffb"),b=t("b650"),p=t("e41f"),k=(t("157a"),t("7371"),t("41cb")),g=t("2f62");a["a"].use(g["a"]);var y=new g["a"].Store({state:{userAgent:""},mutations:{},actions:{}});a["a"].config.productionTip=!1,a["a"].use(d["a"]),a["a"].use(f["a"]),a["a"].use(m["a"]).use(l["a"]),a["a"].use(b["a"]),a["a"].use(p["a"]),k["a"].afterEach(function(e){window.document.title=e.meta.title,window.scrollTo(0,0)}),new a["a"]({router:k["a"],store:y,render:function(e){return e(s)}}).$mount("#app")},"59ff":function(e,n,t){e.exports=t.p+"img/home_cont_10.7b9e25db.png"},"5c48":function(e,n,t){},"71bc":function(e,n,t){e.exports=t.p+"img/home_cont_12.2329133b.png"},7371:function(e,n,t){},"75b1":function(e,n,t){e.exports=t.p+"img/home_cont_2.d26b019f.png"},"7c55":function(e,n,t){"use strict";var a=t("5c48"),c=t.n(a);c.a},"8ec9":function(e,n,t){e.exports=t.p+"img/home_cont_3.485bf2f0.png"},a27e:function(e,n,t){"use strict";t.d(n,"b",function(){return h}),t.d(n,"a",function(){return s});t("a481");var a=t("bc3a"),c=t.n(a),r=t("4328"),o=t.n(r),i=t("2241"),u=t("41cb");function h(e,n,t){return new Promise(function(a,r){c.a.post(e,n,t).then(function(e){a(e)},function(e){r(e)}).catch(function(e){r(e)})})}function s(e,n){return new Promise(function(t,a){c.a.get(e,{params:n}).then(function(e){t(e)},function(e){a(e)}).catch(function(e){a(e)})})}c.a.defaults.timeout=1e4,c.a.defaults.baseURL="http://dd2.dodohz.com/",c.a.interceptors.request.use(function(e){return"post"===e.method&&"application/x-www-form-urlencoded"===e.headers.post["Content-Type"]&&(e.data=o.a.stringify(e.data)),e},function(e){return console.log("错误的传参"),Promise.reject(e)}),c.a.interceptors.response.use(function(e){return console.log(e.data),e.data.resultCode>0?e.data.data?Promise.resolve(e.data.data):Promise.resolve(e.data):e.data.msg?-6!==e.data.resultCode?Promise.reject(e.data):(window.localStorage.clear("agentToken"),void i["a"].alert({message:e.data.msg}).then(function(){u["a"].replace({name:"login"})})):Promise.reject({msg:"网络异常 "+e.data.resultCode})},function(e){return console.log(e),Promise.reject({msg:"网络异常"})})},b49e:function(e,n,t){e.exports=t.p+"img/home_cont_9.725e713d.png"},b57b:function(e,n,t){},bb51:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"home"},[a("div",{staticClass:"home-top"},[a("div",{staticClass:"t-top"},[a("img",{staticClass:"profilePicture",attrs:{src:t("037c"),alt:""}}),a("div",{staticClass:"info"},[a("p",{staticClass:"minM vipId"},[e._v("会员ID： "+e._s(e.member.aCode))]),a("p",{staticClass:"minM vipName"},[e._v("会员名： "+e._s(e.member.aName)+"-"+e._s(e.role))])])]),a("div",{staticClass:"p-top"},[a("div",{staticClass:"left"},[a("p",{staticClass:"top-tubiaowz center"},[e._v("提现")]),a("img",{staticClass:"top-tubiao",attrs:{src:t("5616"),alt:""},on:{click:function(n){return e.turnTo("withdraw")}}})]),a("div",{staticClass:"right"},[a("router-link",{attrs:{"is-link":"",to:"withdrawMybenefits"}},[a("div",[a("p",{staticClass:"top-tubiaowz right"},[e._v("我的收益")]),a("img",{staticClass:"top-tubiao",attrs:{src:t("f409"),alt:""}})])])],1)])]),a("div",{staticClass:"home-bottom"},e._l(e.fileMsgListCom,function(n,t){return a("div",{key:t,staticClass:"tubiaodiv",attrs:{title:n.title}},[a("router-link",{attrs:{"is-link":"",to:n.to}},[a("div",{staticClass:"home-bottom-imgdiv"},[a("transition",{attrs:{name:"fade"}},[a("img",{staticClass:"home-bottom-img",attrs:{src:n.imgSrc,alt:""}})])],1)]),a("p",{staticClass:"home-bottom-desc"},[e._v(e._s(n.title))])],1)}),0)])},c=[],r=(t("ac6a"),t("28a5"),t("a481"),t("a27e")),o=t("2241"),i=t("d399"),u=t("ef09"),h=t.n(u),s=t("8ec9"),d=t.n(s),f=t("cb81"),m=t.n(f),l=t("59ff"),b=t.n(l),p=t("11b8"),k=t.n(p),g=t("75b1"),y=t.n(g),v=t("dbd9"),w=t.n(v),A=t("3a40"),P=t.n(A),T=t("1864"),D=t.n(T),C=t("0f76"),O=t.n(C),x=t("b49e"),L=t.n(x),B=t("71bc"),U=t.n(B),j=t("0370"),N=t.n(j),Z={name:"home",data:function(){return{list:[],memberInfo:"",member:"",code:this.code}},computed:{menuList:function(){return[{imgSrc:h.a,title:"我的设备",to:{name:"device"},show:this.isInArray([1,2,3,4,5],this.member.aType)},{imgSrc:b.a,title:"我的二维码",to:{name:"qrcode"},show:this.isInArray([1,2,3,4],this.member.aType)},{imgSrc:d.a,title:"我的代理",to:{name:"agent"},show:this.isInArray([1,2,3,4],this.member.aType)},{imgSrc:y.a,title:"我的推荐",to:{name:"recommendList"},show:this.isInArray([1,2,3,4,5],this.member.aType)},{imgSrc:m.a,title:"申领设备",to:{name:"buy"},show:this.isInArray([1,2,3,4,5],this.member.aType)},{imgSrc:w.a,title:"报表查询",to:{name:"statsAgent"},show:this.isInArray([1,2,3,4,5],this.member.aType)},{imgSrc:D.a,title:"订单查询",to:{name:"orderQuery"},show:this.isInArray([1,2,3,4,5],this.member.aType)},{imgSrc:O.a,title:"设备价格",to:{name:"devicePrice"},show:this.isInArray([5],this.member.aType)},{imgSrc:k.a,title:"升级运营",to:{name:"agentUp"},show:this.isInArray([5],this.member.aType)},{imgSrc:P.a,title:"授权码",to:{name:"sendProm"},show:this.isInArray([1],this.member.aType)},{imgSrc:U.a,title:"充值",to:{name:"recharge"},show:this.isInArray([1],this.member.roleType)},{imgSrc:L.a,title:"设置",to:{name:"setting"},show:this.isInArray([1,2,3,4,5],this.member.aType)},{imgSrc:N.a,title:"订单管理",to:{name:"orderManage"},show:this.isInArray([1],this.member.aType)}]},fileMsgListCom:function(){return this.menuList.filter(function(e){return e.show})},role:function(){var e,n=this.member.aType;return 1===n?e="总部":2===n?e=" 特许经营商":3===n?e="全国运营商":4===n?e="联合运营商":5===n&&(e="商家"),e}},methods:{turnTo:function(e){this.$router.push({name:e})},logout:function(){localStorage.clear("agentToken"),this.$router.replace({name:"login"})},isInArray:function(e,n){for(var t=0;t<e.length;t++)if(n===e[t])return!0;return!1},accredit:function(){var e=window.location.href.split("#")[0];Object(r["b"])("/zqxry/agentAuthorization",{url:e}).then(function(e){console.log(e),window.location.href=e})}},mounted:function(){var e,n=this,t=window.location.href.split("#")[0];if(t.indexOf("code")>-1){var a=t.split("?")[1],c=a.split("#")[0],u=c.split("&");u.forEach(function(n){n.indexOf("code")>-1&&(e=n.split("=")[1])})}else this.accredit();var h={opType:201,xry_token_id:window.localStorage.agentToken,code:e};Object(r["b"])("/zqxry/bizqry/service",h).then(function(e){n.memberInfo=e,n.member=e.member,window.localStorage.user=JSON.stringify(e.member)}).catch(function(e){-6===e.resultCode?(localStorage.clear("agentToken"),o["a"].alert({message:e.msg}).then(function(){n.$router.push({name:"login"})})):i["a"].fail(e.msg)})}},E=Z,J=(t("c810"),t("2877")),S=Object(J["a"])(E,a,c,!1,null,"06da3fb3",null);n["default"]=S.exports},c810:function(e,n,t){"use strict";var a=t("b57b"),c=t.n(a);c.a},cb81:function(e,n,t){e.exports=t.p+"img/home_cont_5.2addc0a2.png"},dbd9:function(e,n,t){e.exports=t.p+"img/home_cont_4.7a8341af.png"},ef09:function(e,n,t){e.exports=t.p+"img/home_cont_1.e78974c2.png"},f409:function(e,n){e.exports="data:image/png;base64,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"}});