(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dbe8586"],{4767:function(e,t,r){e.exports=r.p+"img/sun.43156623.png"},7092:function(e,t,r){"use strict";var o=r("cf44"),n=r.n(o);n.a},9026:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"using"},[r("div",{staticClass:"using-top"},[r("div",{staticClass:"wrap"},[r("van-circle",{attrs:{color:"#46BDAE",size:"5.38rem","layer-color":"#E7F7FF",fill:"#fff",rate:e.rate,speed:100,"stroke-width":50},model:{value:e.currentRate,callback:function(t){e.currentRate=t},expression:"currentRate"}}),r("div",{staticClass:"clock"},[r("van-count-down",{attrs:{time:e.time},scopedSlots:e._u([{key:"default",fn:function(t){return[t.minutes<10?r("span",{staticClass:"item"},[e._v(e._s("0"+t.minutes))]):r("span",{staticClass:"item"},[e._v(e._s(t.minutes))]),r("span",{staticClass:"symbal"},[e._v(":")]),t.seconds<10?r("span",{staticClass:"item"},[e._v(e._s("0"+t.seconds))]):r("span",{staticClass:"item"},[e._v(e._s(t.seconds))])]}}])})],1)],1),e._m(0)]),r("div",{staticClass:"using-order"},[r("p",{staticClass:"using-order-title"},[e._v("订单信息")]),r("div",{staticClass:"flex-space"},[r("p",{staticClass:"name"},[e._v("机器编号：")]),r("p",[e._v(e._s(e.at))])]),r("div",{staticClass:"flex-space"},[r("p",{staticClass:"name"},[e._v("服务时间：")]),r("p",[e._v(e._s(e.serviceTime))])]),r("div",{staticClass:"flex-space"},[r("p",{staticClass:"name"},[e._v("已支付：")]),r("p",[e._v(e._s(e.money))])])]),e._m(1)])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"using-top-tip"},[r("p",[e._v("离开时请带好您的随身物品")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tip"},[o("div",{staticClass:"using-desc"},[o("img",{attrs:{src:r("4767"),alt:""}}),o("div",{staticClass:"desc"},[o("p",[e._v("在理疗过程中")]),o("p",[e._v("局部会出现灼热的刺痛感")])])]),o("div",{staticClass:"using-desc"},[o("img",{staticClass:"teacup",attrs:{src:r("e6f92"),alt:""}}),o("div",{staticClass:"desc"},[o("p",[e._v("在理疗过程中")]),o("p",[e._v("需要多喝温水来补充身体的水分")])])])])}],a=(r("a27e"),r("b562")),i=r("d399"),d={data:function(){return{currentRate:0,rate:0,text:"启动中……",textShow:!0,barcode:"",at:0,pcode:"",ptime:0,pprice:0,serviceTime:"设备启动中……",orderId:"",status:0,orderInfo:{},useText:"理疗中...",time:0,timeData:{minutes:0,seconds:0}}},computed:{money:function(){return this.pprice.toFixed(2)}},mounted:function(){var e=this;this.$nextTick(function(){if(!e.orderInfo.oMacStartStatus)var t=setInterval(function(){if(e.getOrderInfo(e.orderId),1===e.orderInfo.oMacStartStatus){e.serviceTime=e.orderInfo.oMacStart,e.ptime=e.orderInfo.pTime,e.time=1e3*e.orderInfo.pTime,e.timeData.minutes=Math.floor(e.ptime/60),e.timeData.seconds=e.ptime%60;var r=0;setInterval(function(){r++,r>=e.ptime?(e.currentRate=100,e.useText="理疗结束"):e.currentRate=r/e.ptime*100},1e3),clearInterval(t)}},2e3)})},methods:{formart:function(e){return e>=10?e:"0"+e},getOrderInfo:function(e){var t=this;a["a"].getOrderInfo({orderId:e}).then(function(e){t.orderInfo=e[0],t.pprice=t.orderInfo.oPayCash,t.at=t.orderInfo.macId}).catch(function(e){return i["a"].fail(e.msg)})},countDown:function(){var e=this,t=0,r=Math.floor(e.ptime/60),o=e.ptime%60;o||(r=Math.floor(e.ptime/60)-1),e.timer=setInterval(function(){0===o&&(o=60),o--,t++,r=Math.floor((e.ptime-t)/60),e.rate=t/e.ptime*100,e.currentRate=t/e.ptime*100,t===e.ptime&&(e.useText="理疗结束",clearInterval(e.timer)),e.text=e.formart(r)+" : "+e.formart(o)},1e3)}},beforeRouteEnter:function(e,t,r){var o=e.query.orderid;r(function(e){e.orderId=o,e.getOrderInfo(o)})},destroyed:function(){}},c=d,s=(r("7092"),r("2877")),p=Object(s["a"])(c,o,n,!1,null,null,null);t["default"]=p.exports},b562:function(e,t,r){"use strict";var o=r("a27e"),n={title:"展市",cookieExpires:1,useI18n:!0,homeName:"home",jsonConfig:{headers:{post:{"Content-Type":"application/json"}}},multiConfig:{headers:{post:{"Content-Type":"multipart/form-data"}}},plugin:{"error-store":{showInHeader:!0,developmentOff:!0}}},a=n.jsonConfig;t["a"]={pay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.barcode,r=e.pcode,n=e.at,a="/zqxry/pay",i={barcode:t,pcode:r,at:n};return Object(o["a"])(a,i)},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mobile,r=e.pwd,n="/zqxry/login",a={mobile:t,pwd:r};return Object(o["b"])(n,a)},getUser:function(){var e="/zqxry/bizqry/service",t={opType:201,xry_token_id:window.localStorage.agentToken};return Object(o["b"])(e,t)},sendSms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mobile,r=e.type,n="/zqxry/bizedt/sendCertCode",a={mobile:t,type:r};return Object(o["b"])(n,a)},register:function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.mobile,i=r.certCode,d=r.promCode,c=r.aName,s=r.pwd,p=r.provinceCode,u=r.cityCode,g=r.areaCode,m=r.recACode,l=r.aAddress,v=r.aType;return d?(e="/zqxry/bizedt/register",t={mobile:n,certCode:i,promCode:d,aName:c,pwd:s,provinceCode:p,cityCode:u,areaCode:g,aAddress:l,aType:v}):(e="/zqxry/bizedt/registerQR",t={mobile:n,certCode:i,aName:c,pwd:s,provinceCode:p,cityCode:u,areaCode:g,pACode:+m,aAddress:l,aType:v}),Object(o["b"])(e,t,a)},findpwd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mobile,r=e.certCode,n=e.pwd,a="/zqxry/bizedt/findpwd",i={mobile:t,certCode:r,pwd:n};return Object(o["b"])(a,i)},sendProm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mobile,r=e.opType,n=e.xry_token_id,a="/zqxry/bizedt/service",i={mobile:t,opType:r,xry_token_id:n};return Object(o["b"])(a,i)},updateAccount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.account,r=e.opType,n=void 0===r?105:r,a=e.xry_token_id,i=void 0===a?window.localStorage.agentToken:a,d="/zqxry/bizedt/service",c={account:t,opType:n,xry_token_id:i};return Object(o["b"])(d,c)},getTakeList:function(e){e.aCode,e.tCode;var t=e.pageNum,r=e.pageSize,n="/zqxry/bizqry/service",a={opType:207,xry_token_id:window.localStorage.agentToken,pageNum:t,pageSize:r};return Object(o["b"])(n,a)},getBonusList:function(e){var t=e.startTime,r=e.endTime,n=e.macId,a=e.pageNum,i=e.pageSize,d="/zqxry/bizqry/service";n||(n=0),t+=" 00:00:00",r+=" 23:59:59";var c={opType:204,xry_token_id:window.localStorage.agentToken,startTime:t,endTime:r,macId:n,pageNum:a,pageSize:i};return Object(o["b"])(d,c)},getBonusMoneySum:function(e){var t=e.startTime,r=e.endTime,n=e.macId,a=e.pageNum,i=e.pageSize,d="/zqxry/bizqry/service";n||(n=0),t+=" 00:00:00",r+=" 23:59:59";var c={opType:212,xry_token_id:window.localStorage.agentToken,startTime:t,endTime:r,macId:n,pageNum:a,pageSize:i};return Object(o["b"])(d,c)},takeCash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.takeAmount,r=e.opType,n=void 0===r?104:r,a=e.xry_token_id,i=void 0===a?window.localStorage.agentToken:a,d="/zqxry/bizedt/service",c={takeAmount:t,opType:n,xry_token_id:i};return Object(o["b"])(d,c)},getOrderInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.orderId,r="/zqxry/bizqry/getOrderInfo",n={orderId:t};return Object(o["a"])(r,n)},getMacList:function(e){var t=e.aCode,r=e.macId,n=e.pageNum,a=e.pageSize,i="/zqxry/bizqry/service";t||(t=-1),r||(r=-1);var d={opType:208,xry_token_id:window.localStorage.agentToken,aCode:t,macId:r,pageNum:n,pageSize:a};return Object(o["b"])(i,d)},getAgentList:function(e){var t=e.recommendACode,r=void 0===t?-1:t,n=e.pageNum,a=e.pageSize,i="/zqxry/bizqry/service",d={opType:210,xry_token_id:window.localStorage.agentToken,recommendACode:r,pageNum:n,pageSize:a};return Object(o["b"])(i,d)},getRecommendList:function(e){var t=e.aCode,r=void 0===t?-1:t,n=e.pageNum,a=e.pageSize,i="/zqxry/bizqry/service",d={opType:211,xry_token_id:window.localStorage.agentToken,aCode:r,pageNum:n,pageSize:a};return Object(o["b"])(i,d)},updateMacListAgent:function(e){var t=e.aCode,r=e.macIdStr,n="/zqxry/bizedt/service",a={opType:107,xry_token_id:window.localStorage.agentToken,aCode:t,macIdStr:r};return Object(o["b"])(n,a)},getMacListForPrice:function(e){var t=e.pageNum,r=e.pageSize,n="/zqxry/bizqry/service",a={opType:213,xry_token_id:window.localStorage.agentToken,pageNum:t,pageSize:r};return Object(o["b"])(n,a)},updateMacPrice:function(e){var t=e.macId,r=e.price,n="/zqxry/bizedt/service",a={opType:111,xry_token_id:window.localStorage.agentToken,macId:t,price:r};return Object(o["b"])(n,a)},agentUp:function(e){var t=e.promCode,r="/zqxry/bizedt/service",n={opType:114,xry_token_id:window.localStorage.agentToken,promCode:t};return Object(o["b"])(r,n)},addOrder:function(e){var t=e.addr,r=e.icount,n="/zqxry/bizedt/service",a={opType:116,xry_token_id:window.localStorage.agentToken,addr:t,icount:r};return Object(o["b"])(n,a)},getLoginInfo:function(){var e="/zqxry/bizqry/service",t={opType:216,xry_token_id:window.localStorage.agentToken};return Object(o["b"])(e,t)},getProPrice:function(){var e="/zqxry/bizqry/service",t={opType:217,xry_token_id:window.localStorage.agentToken};return Object(o["b"])(e,t)},statsAgentList:function(e){var t=e.aCode,r=e.start,n=e.end,a="/zqxry/bizqry/service",i={opType:218,xry_token_id:window.localStorage.agentToken,aCode:t,start:r,end:n};return Object(o["b"])(a,i)},statsAgentDetail:function(e){var t=e.aCode,r=e.start,n=e.end,a="/zqxry/bizqry/service",i={opType:219,xry_token_id:window.localStorage.agentToken,aCode:t,start:r,end:n};return Object(o["b"])(a,i)},getfindOrder:function(e){var t=e.pageNum,r=e.pageSize,n=e.oPayStatus,a="/zqxry/bizqry/service",i={opType:220,xry_token_id:window.localStorage.agentToken,pageNum:t,pageSize:r,oPayStatus:n};return Object(o["b"])(a,i)},getQrUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.barcode,r="/zqxry/payMachine",n={barcode:t};return Object(o["a"])(r,n)},recharge:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.memCode,r=e.price,n="/zqxry/bizedt/service",a={opType:122,xry_token_id:window.localStorage.agentToken,memCode:t,price:r};return Object(o["b"])(n,a)},manageOrderList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.prdStatus,r=e.pageNum,n=e.pageSize,a="/zqxry/bizqry/service",i={opType:239,xry_token_id:window.localStorage.agentToken,pageNum:r,pageSize:n,prdStatus:t};return Object(o["b"])(a,i)},sign:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,r="/ddbxry/ddbWx/jsSign",n={url:t};return Object(o["b"])(r,n)},edCode:function(){var e="/zqxry/bizqry/service",t={opType:238,xry_token_id:window.localStorage.agentToken};return Object(o["b"])(e,t)},edSend:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pbCode,r=e.daExCode,n=e.edCode,a="/zqxry/bizedt/service",i={opType:131,xry_token_id:window.localStorage.agentToken,pbCode:t,daExCode:r,edCode:n};return Object(o["b"])(a,i)}}},cf44:function(e,t,r){},e6f92:function(e,t){e.exports="data:image/png;base64,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"}}]);