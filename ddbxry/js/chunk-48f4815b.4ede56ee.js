(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48f4815b"],{"11e9":function(e,t,n){var r=n("52a7"),a=n("4630"),o=n("6821"),i=n("6a99"),c=n("69a8"),d=n("c69a"),s=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?s:function(e,t){if(e=o(e),t=i(t,!0),d)try{return s(e,t)}catch(n){}if(c(e,t))return a(!r.f.call(e,t),e[t])}},4788:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"agent"},[n("div",{staticClass:"time"},[n("van-cell-group",{on:{click:e.handStart}},[n("van-field",{attrs:{placeholder:"开始时间",readonly:"","input-align":"center"},model:{value:e.start,callback:function(t){e.start=t},expression:"start"}})],1),n("span",[e._v("至")]),n("van-cell-group",{on:{click:e.handEnd}},[n("van-field",{attrs:{placeholder:"结束时间",readonly:"","input-align":"center"},model:{value:e.end,callback:function(t){e.end=t},expression:"end"}})],1),n("van-icon",{attrs:{name:"close",size:".5rem"},on:{click:function(t){e.start="",e.end=""}}}),n("span",{on:{click:e.getStatsAgentDetail}},[e._v("查询")])],1),n("div",{staticClass:"list"},[e._m(0),e._l(e.list,function(t){return n("div",{key:t.aCode,staticClass:"item"},[n("div",{staticClass:"name"},[e._v(e._s(t.a_name))]),n("div",{staticClass:"name"},[e._v(e._s(t.a_count))]),n("div",{staticClass:"name"},[e._v(e._s(t.pc_sum))]),n("div",{staticClass:"name",on:{click:function(n){return e.checkAgent(t)}}},[e._v("查看下级")])])}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showTip,expression:"showTip"}],staticClass:"foot"},[e._v("暂无数据")])],2),n("van-popup",{attrs:{position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("van-datetime-picker",{attrs:{type:"date","max-date":e.maxDate},on:{cancel:function(t){e.show=!1},confirm:e.confirm},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item title"},[n("div",{staticClass:"name"},[e._v("代理商名称")]),n("div",{staticClass:"name"},[e._v("订单量")]),n("div",{staticClass:"name"},[e._v("交易金额")]),n("div",{staticClass:"name"})])}],o=(n("c5f6"),n("ac6a"),n("d399")),i=n("b562"),c={data:function(){return{active:1,start:"",end:"",show:!1,currentDate:new Date,maxDate:new Date,list:[],showTip:!1,data:{aCode:"",start:"",end:""}}},methods:{handStart:function(){this.active=1,this.show=!0},handEnd:function(){this.active=2,this.show=!0},checkAgent:function(e){e.a_type>=4?Object(o["a"])("无下一级"):(this.data.aCode=e.a_code,this.getStatsAgentDetail())},confirm:function(e){1==this.active?this.start=this.getFormatDate(e):2==this.active&&(this.end=this.getFormatDate(e)),this.show=!1},checkOrder:function(){this.$router.push("/statsDetail")},getFormatDate:function(e){var t="-",n=e.getMonth()+1,r=e.getDate();n>=1&&n<=9&&(n="0"+n),r>=0&&r<=9&&(r="0"+r);var a=e.getFullYear()+t+n+t+r;return a},getStatsAgentDetail:function(){var e=this;this.start?this.end?(this.data.start=this.start+" 00:00:00",this.data.end=this.end+" 23:59:59",i["a"].statsAgentDetail(this.data).then(function(t){console.log(t),e.list=t,0==t.length?(e.showTip=!0,console.log(e.showTip)):e.list.forEach(function(e){e.pc_sum=Number(e.pc_sum).toFixed(2)})})):Object(o["a"])("请选择结束时间"):Object(o["a"])("请选择开始时间")}},mounted:function(){this.data.aCode=JSON.parse(localStorage.user).aCode}},d=c,s=(n("7ff4"),n("2877")),u=Object(s["a"])(d,r,a,!1,null,"37588189",null);t["default"]=u.exports},"5ca2":function(e,t,n){},"5dbc":function(e,t,n){var r=n("d3f4"),a=n("8b97").set;e.exports=function(e,t,n){var o,i=t.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&r(o)&&a&&a(e,o),e}},"7ff4":function(e,t,n){"use strict";var r=n("5ca2"),a=n.n(r);a.a},"8b97":function(e,t,n){var r=n("d3f4"),a=n("cb7c"),o=function(e,t){if(a(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:o}},9093:function(e,t,n){var r=n("ce10"),a=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},aa77:function(e,t,n){var r=n("5ca1"),a=n("be13"),o=n("79e5"),i=n("fdef"),c="["+i+"]",d="​",s=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),p=function(e,t,n){var a={},c=o(function(){return!!i[e]()||d[e]()!=d}),s=a[e]=c?t(l):i[e];n&&(a[n]=s),r(r.P+r.F*c,"String",a)},l=p.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},b562:function(e,t,n){"use strict";var r=n("a27e"),a={title:"展市",cookieExpires:1,useI18n:!0,homeName:"home",jsonConfig:{headers:{post:{"Content-Type":"application/json"}}},multiConfig:{headers:{post:{"Content-Type":"multipart/form-data"}}},plugin:{"error-store":{showInHeader:!0,developmentOff:!0}}},o=a.jsonConfig;t["a"]={pay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.barcode,n=e.pcode,a=e.at,o="/zqxry/pay",i={barcode:t,pcode:n,at:a};return Object(r["a"])(o,i)},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mobile,n=e.pwd,a="/zqxry/login",o={mobile:t,pwd:n};return Object(r["b"])(a,o)},getUser:function(){var e="/zqxry/bizqry/service",t={opType:201,xry_token_id:window.localStorage.agentToken};return Object(r["b"])(e,t)},sendSms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mobile,n=e.type,a="/zqxry/bizedt/sendCertCode",o={mobile:t,type:n};return Object(r["b"])(a,o)},register:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=n.mobile,i=n.certCode,c=n.promCode,d=n.aName,s=n.pwd,u=n.provinceCode,p=n.cityCode,l=n.areaCode,g=n.recACode,v=n.aAddress,b=n.aType;return c?(e="/zqxry/bizedt/register",t={mobile:a,certCode:i,promCode:c,aName:d,pwd:s,provinceCode:u,cityCode:p,areaCode:l,aAddress:v,aType:b}):(e="/zqxry/bizedt/registerQR",t={mobile:a,certCode:i,aName:d,pwd:s,provinceCode:u,cityCode:p,areaCode:l,pACode:+g,aAddress:v,aType:b}),Object(r["b"])(e,t,o)},findpwd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mobile,n=e.certCode,a=e.pwd,o="/zqxry/bizedt/findpwd",i={mobile:t,certCode:n,pwd:a};return Object(r["b"])(o,i)},sendProm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mobile,n=e.opType,a=e.xry_token_id,o="/zqxry/bizedt/service",i={mobile:t,opType:n,xry_token_id:a};return Object(r["b"])(o,i)},updateAccount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.account,n=e.opType,a=void 0===n?105:n,o=e.xry_token_id,i=void 0===o?window.localStorage.agentToken:o,c="/zqxry/bizedt/service",d={account:t,opType:a,xry_token_id:i};return Object(r["b"])(c,d)},getTakeList:function(e){e.aCode,e.tCode;var t=e.pageNum,n=e.pageSize,a="/zqxry/bizqry/service",o={opType:207,xry_token_id:window.localStorage.agentToken,pageNum:t,pageSize:n};return Object(r["b"])(a,o)},getBonusList:function(e){var t=e.startTime,n=e.endTime,a=e.macId,o=e.pageNum,i=e.pageSize,c="/zqxry/bizqry/service";a||(a=0),t+=" 00:00:00",n+=" 23:59:59";var d={opType:204,xry_token_id:window.localStorage.agentToken,startTime:t,endTime:n,macId:a,pageNum:o,pageSize:i};return Object(r["b"])(c,d)},getBonusMoneySum:function(e){var t=e.startTime,n=e.endTime,a=e.macId,o=e.pageNum,i=e.pageSize,c="/zqxry/bizqry/service";a||(a=0),t+=" 00:00:00",n+=" 23:59:59";var d={opType:212,xry_token_id:window.localStorage.agentToken,startTime:t,endTime:n,macId:a,pageNum:o,pageSize:i};return Object(r["b"])(c,d)},takeCash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.takeAmount,n=e.opType,a=void 0===n?104:n,o=e.xry_token_id,i=void 0===o?window.localStorage.agentToken:o,c="/zqxry/bizedt/service",d={takeAmount:t,opType:a,xry_token_id:i};return Object(r["b"])(c,d)},getOrderInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.orderId,n="/zqxry/bizqry/getOrderInfo",a={orderId:t};return Object(r["a"])(n,a)},getMacList:function(e){var t=e.aCode,n=e.macId,a=e.pageNum,o=e.pageSize,i="/zqxry/bizqry/service";t||(t=-1),n||(n=-1);var c={opType:208,xry_token_id:window.localStorage.agentToken,aCode:t,macId:n,pageNum:a,pageSize:o};return Object(r["b"])(i,c)},getAgentList:function(e){var t=e.recommendACode,n=void 0===t?-1:t,a=e.pageNum,o=e.pageSize,i="/zqxry/bizqry/service",c={opType:210,xry_token_id:window.localStorage.agentToken,recommendACode:n,pageNum:a,pageSize:o};return Object(r["b"])(i,c)},getRecommendList:function(e){var t=e.aCode,n=void 0===t?-1:t,a=e.pageNum,o=e.pageSize,i="/zqxry/bizqry/service",c={opType:211,xry_token_id:window.localStorage.agentToken,aCode:n,pageNum:a,pageSize:o};return Object(r["b"])(i,c)},updateMacListAgent:function(e){var t=e.aCode,n=e.macIdStr,a="/zqxry/bizedt/service",o={opType:107,xry_token_id:window.localStorage.agentToken,aCode:t,macIdStr:n};return Object(r["b"])(a,o)},getMacListForPrice:function(e){var t=e.pageNum,n=e.pageSize,a="/zqxry/bizqry/service",o={opType:213,xry_token_id:window.localStorage.agentToken,pageNum:t,pageSize:n};return Object(r["b"])(a,o)},updateMacPrice:function(e){var t=e.macId,n=e.price,a="/zqxry/bizedt/service",o={opType:111,xry_token_id:window.localStorage.agentToken,macId:t,price:n};return Object(r["b"])(a,o)},agentUp:function(e){var t=e.promCode,n="/zqxry/bizedt/service",a={opType:114,xry_token_id:window.localStorage.agentToken,promCode:t};return Object(r["b"])(n,a)},addOrder:function(e){var t=e.addr,n=e.icount,a="/zqxry/bizedt/service",o={opType:116,xry_token_id:window.localStorage.agentToken,addr:t,icount:n};return Object(r["b"])(a,o)},getLoginInfo:function(){var e="/zqxry/bizqry/service",t={opType:216,xry_token_id:window.localStorage.agentToken};return Object(r["b"])(e,t)},getProPrice:function(){var e="/zqxry/bizqry/service",t={opType:217,xry_token_id:window.localStorage.agentToken};return Object(r["b"])(e,t)},statsAgentList:function(e){var t=e.aCode,n=e.start,a=e.end,o="/zqxry/bizqry/service",i={opType:218,xry_token_id:window.localStorage.agentToken,aCode:t,start:n,end:a};return Object(r["b"])(o,i)},statsAgentDetail:function(e){var t=e.aCode,n=e.start,a=e.end,o="/zqxry/bizqry/service",i={opType:219,xry_token_id:window.localStorage.agentToken,aCode:t,start:n,end:a};return Object(r["b"])(o,i)},getfindOrder:function(e){var t=e.pageNum,n=e.pageSize,a=e.oPayStatus,o="/zqxry/bizqry/service",i={opType:220,xry_token_id:window.localStorage.agentToken,pageNum:t,pageSize:n,oPayStatus:a};return Object(r["b"])(o,i)},getQrUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.barcode,n="/zqxry/payMachine",a={barcode:t};return Object(r["a"])(n,a)},getQrRandUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.barcode,n="/zqxry/payRandMachine",a={barcode:t};return Object(r["a"])(n,a)},recharge:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.memCode,n=e.price,a="/zqxry/bizedt/service",o={opType:122,xry_token_id:window.localStorage.agentToken,memCode:t,price:n};return Object(r["b"])(a,o)},manageOrderList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.prdStatus,n=e.pageNum,a=e.pageSize,o="/zqxry/bizqry/service",i={opType:239,xry_token_id:window.localStorage.agentToken,pageNum:n,pageSize:a,prdStatus:t};return Object(r["b"])(o,i)},sign:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,n="/ddbxry/ddbWx/jsSign",a={url:t};return Object(r["b"])(n,a)},edCode:function(){var e="/zqxry/bizqry/service",t={opType:238,xry_token_id:window.localStorage.agentToken};return Object(r["b"])(e,t)},edSend:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pbCode,n=e.daExCode,a=e.edCode,o="/zqxry/bizedt/service",i={opType:131,xry_token_id:window.localStorage.agentToken,pbCode:t,daExCode:n,edCode:a};return Object(r["b"])(o,i)}}},c5f6:function(e,t,n){"use strict";var r=n("7726"),a=n("69a8"),o=n("2d95"),i=n("5dbc"),c=n("6a99"),d=n("79e5"),s=n("9093").f,u=n("11e9").f,p=n("86cc").f,l=n("aa77").trim,g="Number",v=r[g],b=v,f=v.prototype,y=o(n("2aeb")(f))==g,m="trim"in String.prototype,_=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=m?t.trim():l(t,3);var n,r,a,o=t.charCodeAt(0);if(43===o||45===o){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var i,d=t.slice(2),s=0,u=d.length;s<u;s++)if(i=d.charCodeAt(s),i<48||i>a)return NaN;return parseInt(d,r)}}return+t};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof v&&(y?d(function(){f.valueOf.call(n)}):o(n)!=g)?i(new b(_(t)),n,v):_(t)};for(var h,w=n("9e1e")?s(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)a(b,h=w[x])&&!a(v,h)&&p(v,h,u(b,h));v.prototype=f,f.constructor=v,n("2aba")(r,g,v)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);