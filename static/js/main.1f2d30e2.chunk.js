(this["webpackJsonptimestamp-converter"]=this["webpackJsonptimestamp-converter"]||[]).push([[0],{153:function(e,t,a){e.exports=a(288)},288:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=a(102),u=a.n(l),i=a(123),s=a(93),d=(a(95),a(289)),f=a(291),m=a(29),v=a.n(m);var p=a(293),g=a(47),h=a(290),O=a(149),y=a(292);function k(e,t,a){var n,r;e.currentTarget.select();var c=document.querySelector("."+a+t);if(null!==c){null===(n=window.getSelection())||void 0===n||n.removeAllRanges();var o=document.createRange();o.selectNode(c),null===(r=window.getSelection())||void 0===r||r.addRange(o),console.log(o,c),document.execCommand("copy")?y.a.success({message:"\u590d\u5236\u6210\u529f"}):y.a.error({message:"\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236\uff01"})}else y.a.error({message:"\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236\uff01"})}function E(e){var t=[],a=v()(e),n=e.split("").filter((function(e){return e>="0"&&e<="9"})),r=v()();if(4===n.length){var c=r.year()+"-"+n[0]+n[1]+"-"+n[2]+n[3],o=v()(c);isNaN(o.valueOf())||t.push(o.startOf("day"))}if(isNaN(a.valueOf())||a.valueOf()<0){var l=e.split("").filter((function(e){return e>="0"&&e<="9"}));if(6===l.length){var u=v()(l[0]+l[1]+l[2]+l[3]+"-"+l[4]+l[5]);isNaN(u.valueOf())||t.push(u.startOf("day"))}if(8===l.length){var i=l[0]+l[1]+l[2]+l[3]+"-"+l[4]+l[5]+"-"+l[6]+l[7],s=v()(i);isNaN(s.valueOf())||t.push(s.startOf("day"))}if(9===l.length){var d=l[0]+l[1]+l[2]+l[3]+"-"+l[4]+l[5]+"-"+l[6]+l[7]+" 0"+l[8]+":00",f=v()(d);isNaN(f.valueOf())||t.push(f)}if(10===l.length){var m=l[0]+l[1]+l[2]+l[3]+"-"+l[4]+l[5]+"-"+l[6]+l[7]+" "+l[8]+l[9]+":00",p=v()(m);isNaN(p.valueOf())||t.push(p)}if(11===l.length){var g=l[0]+l[1]+l[2]+l[3]+"-"+l[4]+l[5]+"-"+l[6]+l[7]+" "+l[8]+l[9]+":0"+l[10],h=v()(g);isNaN(h.valueOf())||t.push(h)}if(12===l.length){var O=l[0]+l[1]+l[2]+l[3]+"-"+l[4]+l[5]+"-"+l[6]+l[7]+" "+l[8]+l[9]+":"+l[10]+l[11],y=v()(O);isNaN(y.valueOf())||t.push(y)}}else t.push(a);var k=v()(parseInt(e));isNaN(k.valueOf())||t.push(k);var E=v()().startOf("day");t.push(E);var N=v()().endOf("day");t.push(N);var b=v()().startOf("month");return t.push(b),t.push(v()().endOf("month")),t.push(v()()),t.map((function(e){return{date:e}}))}var N=[{title:"\u65e5\u671f\u65f6\u95f4",dataIndex:"dateTime",key:"dateTime",render:function(e){var t=e.replaceAll(" ","").replaceAll(":","").replaceAll("/","");return r.a.createElement(f.a,{onClick:function(e){return k(e,t,"suggest")},className:"".concat("suggest").concat(t),bordered:!1,value:e,readOnly:!0})}},{title:"\u65f6\u95f4\u6233",dataIndex:"key",key:"key",render:function(e){return r.a.createElement(f.a,{onClick:function(t){return k(t,e,"suggest")},className:"".concat("suggest").concat(e),bordered:!1,value:e,readOnly:!0})}},{title:"Action",dataIndex:"action",key:"action",render:function(e,t){return r.a.createElement(p.b,{size:"middle"},r.a.createElement(g.a,{type:"link",href:"#",onClick:function(){return e(t.key)}},"\u4fdd\u5b58"))}}];function b(e){var t=e.suggests,a=e.save,n=t.map((function(e){return e.date})).map((function(e){return{key:e.valueOf(),dateTime:e.format("YYYY-MM-DD HH:mm:ss"),action:a}}));return r.a.createElement(h.a,{style:{width:"1000px"},columns:N,dataSource:n,pagination:!1})}var w=[{title:"\u65e5\u671f\u65f6\u95f4",dataIndex:"dateTime",key:"dateTime",render:function(e){var t=e.replaceAll(" ","").replaceAll(":","").replaceAll("/","");return r.a.createElement(f.a,{onClick:function(e){return k(e,t,"storage")},className:"".concat("storage").concat(t),bordered:!1,value:e,readOnly:!0})}},{title:"\u65f6\u95f4\u6233",dataIndex:"key",key:"key",render:function(e){return r.a.createElement(f.a,{onClick:function(t){return k(t,e,"storage")},className:"".concat("storage").concat(e),bordered:!1,value:e,readOnly:!0})}},{title:"Action",key:"action",dataIndex:"action",render:function(e,t){var a=e.top,n=e.remove;return r.a.createElement(p.b,{size:"middle"},r.a.createElement(g.a,{type:"link",onClick:function(){return a(t.key)}},"\u7f6e\u9876"),r.a.createElement(g.a,{type:"link",onClick:function(){return n(t.key)}},"\u5220\u9664"))}}];var S=function(e){var t=e.storageItems,a=e.top,n=e.remove,c=t.map((function(e){return e.date})).map((function(e){return{key:e.valueOf(),dateTime:e.format("YYYY-MM-DD HH:mm:ss"),action:{top:a,remove:n}}}));return r.a.createElement(h.a,{style:{width:"1000px"},columns:w,dataSource:c,pagination:!1})},x="the_world's_best_time-stamp_conversion_website_key";var I=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(s.a)(o,2),m=l[0],p=l[1],g=Object(n.useState)([]),h=Object(s.a)(g,2),y=h[0],k=h[1];function N(e){p((function(t){return function(e,t){var a=new Set,n=[t];return a.add(t.date.valueOf()),e.forEach((function(e){var t=e.date.valueOf();a.has(t)||(a.add(t),n.push(e))})),n}(t,{date:v()(e)})}))}return Object(n.useEffect)((function(){Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(E(a));case 1:case"end":return e.stop()}}),e)})))()}),[a]),Object(n.useEffect)((function(){var e,t;p((t=null!==(e=localStorage.getItem(x))&&void 0!==e?e:"[]",JSON.parse(t).map((function(e){return{date:v()(e)}}))))}),[]),Object(n.useEffect)((function(){var e;localStorage.setItem(x,(e=m,JSON.stringify(e.map((function(e){return e.date.valueOf()})))))}),[m]),r.a.createElement("div",{className:"App"},r.a.createElement("p",null,"\u8fd9\u6709\u53ef\u80fd\u662f\u4e16\u754c\u4e0a\u6700\u597d\u7528\u7684 \u65f6\u95f4\u6233 \u8f6c\u6362\u7f51\u7ad9"),r.a.createElement(d.a,null),r.a.createElement(f.a,{size:"large",style:{width:"1000px"},placeholder:"\u5728\u8fd9\u8f93\u5165\u4f60\u60f3\u8981\u8f93\u5165\u7684\u5185\u5bb9\uff0c\u65e0\u9700\u62d8\u6ce5\u4e8e\u683c\u5f0f",bordered:!1,value:a,onChange:function(e){return c(e.currentTarget.value)}}),r.a.createElement(d.a,null),r.a.createElement("p",null,"\u731c\u4f60\u60f3\u8981"),r.a.createElement(b,{save:N,suggests:y}),r.a.createElement(d.a,null),r.a.createElement("p",null,"Storage"),r.a.createElement(S,{top:N,remove:function(e){p((function(t){return function(e,t){var a=Object(O.a)(e);return a.splice(a.findIndex((function(e){return e.date.valueOf()===t.date.valueOf()})),1),a}(t,{date:v()(e)})}))},storageItems:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){}},[[153,1,2]]]);
//# sourceMappingURL=main.1f2d30e2.chunk.js.map