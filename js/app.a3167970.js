(function(e){function t(t){for(var a,i,c=t[0],l=t[1],o=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/planner/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",{staticClass:"font-weight-light"},[e._v("PLANNER")])]),n("v-spacer"),n("v-btn",{attrs:{text:"",to:"/"}},[e._v("home")]),n("v-btn",{attrs:{text:"",to:"/new-plan"}},[e._v("new plan")])],1),n("v-content",[n("router-view")],1)],1)},s=[],i=n("2877"),c={},l=Object(i["a"])(c,r,s,!1,null,null,null),o=l.exports,u=n("ce5b"),d=n.n(u);n("bf40");a["default"].use(d.a);var p=new d.a({theme:{themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),f=(n("d5e8"),n("5363"),n("8c4f")),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home flex-wrap pa-12"},[n("v-card",{staticClass:"d-flex align-content-center  flex-wrap ph-12",attrs:{height:"80vh"}},[n("v-card-text",{staticClass:"text-center"},[n("h1",{staticClass:"font-weight-light ma-12"},[e._v("Plan easily")]),n("v-btn",{attrs:{to:"/new-plan"}},[e._v(" PLAN NOW! ")])],1)],1)],1)},h=[],m={name:"Home"},b=m,g=Object(i["a"])(b,v,h,!1,null,null,null),j=g.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about "},[n("v-img",{staticClass:"d-flex align-content-center flex-wrap pa-12",attrs:{height:"95vh",src:"https://picsum.photos/2000/1000"}},[n("v-stepper",{staticClass:"ma-12",model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{editable:e.e1<3,step:"1"}},[e._v("What is your event name ?")]),n("v-divider"),n("v-stepper-step",{attrs:{editable:e.e1<3,step:"2"}},[e._v("When is the start of range ?")]),n("v-divider"),n("v-stepper-step",{attrs:{step:"3"}},[e._v("Share with your friends!")])],1),n("v-stepper-items",[n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-12 d-flex align-content-center pa-12",attrs:{height:"200px",elevation:"0"}},[n("v-text-field",{style:e.textFieldStyle,attrs:{height:e.textFieldHeight,placeholder:"What is your event's name ?"},model:{value:e.plan.name,callback:function(t){e.$set(e.plan,"name",t)},expression:"plan.name"}})],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=2}}},[e._v(" Continue ")])],1),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-12 d-flex align-content-center pa-12",attrs:{height:"200px",elevation:"0"}},[n("v-dialog",{ref:"dialog",attrs:{"return-value":e.date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Please select a range of times","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.timeRangeText,callback:function(t){e.timeRangeText=t},expression:"timeRangeText"}},a))]}}]),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("v-date-picker",{attrs:{min:e.min,range:"",scrollable:""},model:{value:e.plan.range,callback:function(t){e.$set(e.plan,"range",t)},expression:"plan.range"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialog.save(e.date)}}},[e._v("OK")])],1)],1)],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.finish()}}},[e._v(" Continue ")])],1),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-12 text-center pa-12",attrs:{height:"200px",elevation:"0"}},[n("h4",[e._v("Thank you for choosing us!")]),n("span",[e._v("Invite your friends to "),n("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.plan.name))]),e._v(" "+e._s(e.timeRangeText)+" ")]),n("v-text-field",{staticClass:"text-center",attrs:{"append-icon":"mdi-content-copy",readonly:""},on:{"click:append":e.doCopy},model:{value:e.plan.url,callback:function(t){e.$set(e.plan,"url",t)},expression:"plan.url"}})],1)],1)],1)],1)],1)],1)},x=[],k=(n("a15b"),n("d81d"),n("96cf"),n("1da1")),_=n("c1df"),w=n.n(_),O=n("d4ec"),C=n("bee2"),R=n("bc3a"),S=n.n(R),z=function(){function e(){Object(O["a"])(this,e),this.sender=S.a.create({baseURL:"https://ahd-planner.herokuapp.com/"})}return Object(C["a"])(e,[{key:"getPlan",value:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.sender.get("/plan/"+t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getAttendee",value:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.sender.get("/plan/"+t+"/attendee/"+n);case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"getPlanDetail",value:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.sender.get("/plan/"+t+"/detailed");case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"createPlan",value:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.sender.post("/plan",t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"putAttendee",value:function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.sender.put("/plan/"+t+"/attendee",n);case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}(),T=new z,M={data:function(){return{e1:1,modal:!1,min:w()().toISOString(),plan:{name:"",range:[]},textFieldStyle:"font-size: 24px !important",textFieldHeight:100}},computed:{timeRangeText:function(){return 0!=this.plan.range.length?"between "+this.plan.range.map((function(e){return w()(e).format("MMM Do dddd")})).join(" and "):""}},methods:{doCopy:function(){this.$copyText(this.plan.url).then((function(e){alert("Copied"),console.log(e)}),(function(e){alert("Can not copy"),console.log(e)}))},finish:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.createPlan(e.plan);case 2:n=t.sent,e.plan.url="https://ahmethuseyindok.github.io/planner/#/register/"+n.id,e.e1=3;case 5:case"end":return t.stop()}}),t)})))()}}},P=M,F=Object(i["a"])(P,y,x,!1,null,null,null),$=F.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about "},[n("v-img",{staticClass:"d-flex align-content-center flex-wrap pa-12",attrs:{height:"95vh",src:"https://picsum.photos/2000/1000"}},[n("v-stepper",{staticClass:"ma-12",model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{editable:e.e1<3,step:"0"}},[e._v("Welcome")]),n("v-divider"),n("v-stepper-step",{attrs:{editable:e.e1<3,step:"1"}},[e._v("What is your name ?")]),n("v-divider"),n("v-stepper-step",{attrs:{editable:e.e1<3,step:"2"}},[e._v("When are you available ?")]),n("v-divider"),n("v-stepper-step",{attrs:{step:"3"}},[e._v("Finish!")])],1),n("v-stepper-items",[n("v-stepper-content",{attrs:{step:"0"}},[n("v-card",{staticClass:"mb-12 text-center pa-12",attrs:{height:"200px",elevation:"0"}},[n("span",{staticClass:"display-1"},[e._v("Welcome To "),n("span",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.plan.name)+" ")])])]),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=1}}},[e._v(" Continue ")])],1),n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-12 text-center pa-12",attrs:{height:"200px",elevation:"0"}},[n("v-text-field",{style:e.textFieldStyle,attrs:{height:e.textFieldHeight,placeholder:"What is your name ?"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=2}}},[e._v(" Continue ")])],1),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-12 text-center pa-12",attrs:{height:"400px",elevation:"0"}},[n("h5",[e._v(e._s(e.timeRangeText))]),e._l(e.days,(function(t){return n("TimePicker",{key:t.toString(),attrs:{"btn-class":"ma-4","btn-style":"width: 200px",text:t.format("dddd Do MMMM"),start:t,dayRange:e.plan.dayRange},on:{save:function(n){return e.onSave(t,n)}}})}))],2),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.saveAvailibilities()}}},[e._v(" Continue ")])],1),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-12 text-center pa-12",attrs:{height:"200px",elevation:"0"}},[n("h4",[e._v("Thank you for choosing us!")])])],1)],1)],1)],1)],1)},H=[],E=(n("b0c0"),n("4ec9"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("2909")),D=n("b85c");n("99af");function W(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[e.startOf(n)];if(e.isAfter(t))throw new Error("start must precede end");var r=w()(e).add(1,n).startOf(n);return r.isAfter(t,n)?a:W(r,t,n,a.concat(r))}var N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"300px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({class:e.btnClass,style:e.btnStyle,attrs:{color:"primary",dark:""}},a),[e._v(e._s(e.text))])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[e._v("Select Times "),n("v-spacer"),e._v(" "),n("v-checkbox",{model:{value:e.toggle,callback:function(t){e.toggle=t},expression:"toggle"}})],1),n("v-divider"),n("v-card-text",{staticStyle:{"max-height":"400px"}},[n("v-list-item-group",{attrs:{multiple:"","active-class":""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.times,(function(t){return n("v-list-item",{key:t.toString(),scopedSlots:e._u([{key:"default",fn:function(a){var r=a.active,s=a.toggle;return[n("v-list-item-action",[n("v-checkbox",{attrs:{"input-value":r,"true-value":t},on:{click:s}})],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.start.format("HH:mm"))+" - "+e._s(t.end.format("HH:mm")))])],1)]}}],null,!0)})})),1)],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(t){return e.save()}}},[e._v(" save ")])],1)],1)],1)},I=[],L=(n("fb6a"),n("d531")),U=Object(L["extendMoment"])(w.a),q={props:["start","text","dayRange","btn-class","btn-style"],data:function(){return{selected:[],times:[],dialog:!1,toggleAll:!1}},created:function(){for(var e=U(this.start).startOf("day"),t=[],n=this.dayRange[0]||0,a=this.dayRange[1]||48,r=n;r<a;r++){var s=U(e).add(30*r,"minutes");t.push(U.range(s,U(s).add("30","minutes")))}this.times=t},computed:{toggle:{set:function(e){this.selected=e?this.times.map((function(e,t){return t})):[],this.toggleAll=e},get:function(){return this.toggleAll}}},methods:{save:function(){var e=this;this.$emit("save",this.glue(this.selected.map((function(t){return e.times[t]})))),this.dialog=!1},glue:function(e){console.log(e);var t,n=[e[0]],a=e[0],r=Object(D["a"])(e.slice(1));try{for(r.s();!(t=r.n()).done;){var s=t.value;n[n.length-1].adjacent(s)?n[n.length-1]=n[n.length-1].add(s,{adjacent:!0}):a.adjacent(s)&&n.push(a.add(s,{adjacent:!0})),a=s}}catch(i){r.e(i)}finally{r.f()}return n}}},G=q,J=Object(i["a"])(G,N,I,!1,null,null,null),B=J.exports,K={components:{TimePicker:B},data:function(){return{e1:0,modal:!1,min:w()().toISOString(),plan:{id:"1234",name:"Hamisin Toplanti",range:[],dayRange:[16,48]},user:{name:"",ranges:[]},selectionMap:new Map,textFieldStyle:"font-size: 24px !important",textFieldHeight:100}},created:function(){var e=this;T.getPlan(this.$route.params.id).then((function(t){e.plan.id=t.id,e.plan.name=t.name,e.plan.range=t.range.map((function(e){return w()(e)}))}))},computed:{timeRangeText:function(){return 0!=this.plan.range.length?"between "+this.plan.range.map((function(e){return w()(e).format("MMM Do dddd")})).join(" and "):""},days:function(){return W(this.plan.range[0],this.plan.range[1],"days")}},methods:{onSave:function(e,t){console.log(t.map((function(e){return e.toString()}))),this.selectionMap.set(e,t)},saveAvailibilities:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=Object(D["a"])(e.selectionMap.values());try{for(n.s();!(a=n.n()).done;)s=a.value,(r=e.user.ranges).push.apply(r,Object(E["a"])(s))}catch(i){n.e(i)}finally{n.f()}return t.next=4,T.putAttendee(e.plan.id,e.user);case 4:e.e1=3;case 5:case"end":return t.stop()}}),t)})))()}}},V=K,Q=Object(i["a"])(V,A,H,!1,null,null,null),X=Q.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",[n("v-card-text",[e._v(" "+e._s(e.idealTime)+" ")])],1),n("v-card",{staticClass:"pa-12"},[n("v-card-text",[n("v-row",{attrs:{"no-gutters":""}},e._l(e.users,(function(t){return n("v-card",{key:t.id,staticClass:"ma-4",staticStyle:{width:"300px"}},[n("v-card-title",[e._v(e._s(t.name))]),n("v-divider"),n("v-card-text",{staticStyle:{height:"400px",overflow:"scroll"}},[e._v(" "+e._s(t.ranges)+" ")])],1)})),1)],1)],1)],1)},Z=[],ee=Object(L["extendMoment"])(w.a),te={data:function(){return{users:[],idealTime:""}},created:function(){var e=this;console.log("get data"),T.getPlanDetail(this.$route.params.id).then((function(t){var n,a=t.Attendees,r=Object(D["a"])(a);try{for(r.s();!(n=r.n()).done;){var s=n.value;s.ranges=s.ranges.map((function(e){return console.log(e),ee.range(ee(e.start),ee(e.end))}))}}catch(i){r.e(i)}finally{r.f()}e.users=a,e.calcIdealTimes(),console.log(e.users)}))},methods:{calcIdealTimes:function(){var e,t=[],n=Object(D["a"])(this.users[0].ranges);try{for(n.s();!(e=n.n()).done;){var a,r=e.value,s=r,i=Object(D["a"])(this.users.slice(1));try{for(i.s();!(a=i.n()).done;){var c,l=a.value,o=Object(D["a"])(l.ranges);try{for(o.s();!(c=o.n()).done;){var u=c.value;s.intersect(u)&&(s=s.intersect(u))}}catch(d){o.e(d)}finally{o.f()}if(s==r)break}}catch(d){i.e(d)}finally{i.f()}s&&t.push(s)}}catch(d){n.e(d)}finally{n.f()}this.idealTime=t,console.log(t)}}},ne=te,ae=Object(i["a"])(ne,Y,Z,!1,null,null,null),re=ae.exports;a["default"].use(f["a"]);var se=[{path:"/",name:"Home",component:j},{path:"/new-plan",name:"NewPlan",component:$},{path:"/register/:id",name:"Register",component:X},{path:"/detail/:id",name:"Detail",component:re}],ie=new f["a"]({mode:"hash",base:"/planner/",routes:se}),ce=ie,le=n("4eb5"),oe=n.n(le);a["default"].use(oe.a),a["default"].config.productionTip=!1,new a["default"]({vuetify:p,router:ce,render:function(e){return e(o)}}).$mount("#app")}});
//# sourceMappingURL=app.a3167970.js.map