(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238425"],{ff2a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("a-row",[a("a-col",{attrs:{md:2,sm:4}},[a("a-select",{staticStyle:{width:"90px"},attrs:{defaultValue:"POST",size:"large"},on:{change:t.handleChange}},[a("a-select-option",{attrs:{value:"POST"}},[t._v("POST")])],1)],1),a("a-col",{attrs:{md:22,sm:20}},[a("a-input-search",{attrs:{placeholder:"input send url",enterButton:"Send",size:"large"},on:{search:t.onSearch},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1)],1),a("a-tabs",{attrs:{defaultActiveKey:"2"}},[a("a-tab-pane",{key:"2",attrs:{tab:"params"}},[a("textarea",{staticStyle:{width:"100%","font-size":"16px","font-weight":"500"},attrs:{rows:13},on:{input:t.changeVal}})])],1),a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"response"}},[a("textarea",{staticStyle:{width:"100%","font-size":"16px","font-weight":"500"},attrs:{rows:10,readonly:""},domProps:{innerHTML:t._s(t.resultJson)}})])],1)],1)},r=[],n=(a("a481"),a("0fea")),o=a("9fb0"),c=a("2b0e"),l={name:"FlowTest",data:function(){return{url:"",paramJson:"",resultJson:{},requestMethod:"POST"}},methods:{onSearch:function(t){var e=this,a=this;this.resultJson={},"POST"===this.requestMethod.toUpperCase()?Object(n["i"])(t,this.paramJson).then((function(t){e.resultJson=t})).catch((function(t){a.$message.error("请求异常："+t)})):Object(n["c"])(t,this.paramJson).then((function(t){e.resultJson=t})).catch((function(t){a.$message.error("请求异常："+t)}))},changeVal:function(t){try{var e=t.target.value;e=e.replace(/\n/g,""),e=e.replace(/\s*/g,""),e.indexOf(",}")>0&&(e=e.replace(",}","}")),this.paramJson=JSON.parse(e)}catch(t){this.$message.error("非法的JSON字符串")}},handleChange:function(t){this.requestMethod=t},created:function(){var t=c["default"].ls.get(o["a"]);this.headers={"X-Access-Token":t}}}},i=l,u=a("2877"),h=Object(u["a"])(i,s,r,!1,null,null,null);e["default"]=h.exports}}]);