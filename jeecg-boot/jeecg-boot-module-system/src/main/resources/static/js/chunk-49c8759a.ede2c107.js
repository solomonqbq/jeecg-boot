(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49c8759a"],{1348:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"main user-layout-register"},[t._m(0),s("a-form",{ref:"formRegister",attrs:{autoFormCreate:function(t){e.form=t},id:"formRegister"}},[s("a-form-item",{attrs:{fieldDecoratorId:"username",fieldDecoratorOptions:{rules:[{required:!0,message:"用户名不能为空"},{validator:this.checkUsername}],validateTrigger:["change","blur"]}}},[s("a-input",{attrs:{size:"large",type:"text",autocomplete:"false",placeholder:"请输入用户名"}})],1),s("a-popover",{attrs:{placement:"rightTop",trigger:"click",visible:t.state.passwordLevelChecked}},[s("template",{slot:"content"},[s("div",{style:{width:"240px"}},[s("div",{class:["user-register",t.passwordLevelClass]},[t._v("强度："),s("span",[t._v(t._s(t.passwordLevelName))])]),s("a-progress",{attrs:{percent:t.state.percent,showInfo:!1,strokeColor:t.passwordLevelColor}}),s("div",{staticStyle:{"margin-top":"10px"}},[s("span",[t._v("请至少输入 8 个字符。请不要使用容易被猜到的密码。")])])],1)]),s("a-form-item",{attrs:{fieldDecoratorId:"password",fieldDecoratorOptions:{rules:[{required:!1},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"]}}},[s("a-input",{attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"至少8位密码，区分大小写"},on:{click:t.handlePasswordInputClick}})],1)],2),s("a-form-item",{attrs:{fieldDecoratorId:"password2",fieldDecoratorOptions:{rules:[{required:!0,message:"至少8位密码，区分大小写"},{validator:this.handlePasswordCheck}],validateTrigger:["change","blur"]}}},[s("a-input",{attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"确认密码"}})],1),s("a-form-item",{attrs:{fieldDecoratorId:"email",fieldDecoratorOptions:{rules:[{required:!0,type:"email",message:"请输入正确的邮箱地址"},{validator:this.handleEmailCheck}],validateTrigger:["change","blur"]}}},[s("a-input",{attrs:{size:"large",type:"text",placeholder:"邮箱"}})],1),s("a-form-item",{attrs:{fieldDecoratorId:"mobile",fieldDecoratorOptions:{rules:[{required:!0,pattern:/^1[3456789]\d{9}$/,message:"请输入正确的手机号"},{validator:this.handlePhoneCheck}],validateTrigger:["change","blur"]}}},[s("a-input",{attrs:{size:"large",placeholder:"11 位手机号"}},[s("a-select",{attrs:{slot:"addonBefore",size:"large",defaultValue:"+86"},slot:"addonBefore"},[s("a-select-option",{attrs:{value:"+86"}},[t._v("+86")]),s("a-select-option",{attrs:{value:"+87"}},[t._v("+87")])],1)],1)],1),s("a-row",{attrs:{gutter:16}},[s("a-col",{staticClass:"gutter-row",attrs:{span:16}},[s("a-form-item",{attrs:{fieldDecoratorId:"captcha",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}}},[s("a-input",{attrs:{size:"large",type:"text",placeholder:"验证码"}},[s("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),s("a-col",{staticClass:"gutter-row",attrs:{span:8}},[s("a-button",{staticClass:"getCaptcha",attrs:{size:"large",disabled:t.state.smsSendBtn},domProps:{textContent:t._s(t.state.smsSendBtn?t.state.time+" s":"获取验证码")},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.getCaptcha(e)}}})],1)],1),s("a-form-item",[s("a-button",{staticClass:"register-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:t.registerBtn,disabled:t.registerBtn},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[t._v("注册\n      ")]),s("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[t._v("使用已有账户登录")])],1)],1)],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",[r("span",[e._v("注册")])])}],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),o=r("ac0d"),n=(r("7ded"),r("0fea")),l=r("4ec3");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={0:"低",1:"低",2:"中",3:"强"},p={0:"error",1:"error",2:"warning",3:"success"},f={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},m={name:"Register",components:{},mixins:[o["b"]],data:function(){return{form:null,state:{time:60,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return p[this.state.passwordLevel]},passwordLevelName:function(){return u[this.state.passwordLevel]},passwordLevelColor:function(){return f[this.state.passwordLevel]}},methods:{checkUsername:function(e,t,r){var s={username:t};Object(l["h"])(s).then((function(e){e.success?r():r("用户名已存在!")}))},handleEmailCheck:function(e,t,r){var s={email:t};Object(l["h"])(s).then((function(e){e.success?r():r("邮箱已存在!")}))},handlePasswordLevel:function(e,t,r){var s=0,a=/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{8,}$/;a.test(t)||r(new Error("密码由8位数字、大小写字母和特殊符号组成!")),/[0-9]/.test(t)&&s++,/[a-zA-Z]/.test(t)&&s++,/[^0-9a-zA-Z_]/.test(t)&&s++,this.state.passwordLevel=s,this.state.percent=30*s,s>=2?(s>=3&&(this.state.percent=100),r()):(0===s&&(this.state.percent=10),r(new Error("密码强度不够")))},handlePasswordCheck:function(e,t,r){var s=this.form.getFieldValue("password");void 0===t&&r(new Error("请输入密码")),t&&s&&t.trim()!==s.trim()&&r(new Error("两次密码不一致")),r()},handlePhoneCheck:function(e,t,r){var s={phone:t};Object(l["h"])(s).then((function(e){e.success?r():r("手机号已存在!")}))},handlePasswordInputClick:function(){this.isMobile()?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleSubmit:function(){var e=this;this.form.validateFields((function(t,r){if(!t){var s={username:r.username,password:r.password,email:r.email,phone:r.mobile,smscode:r.captcha};Object(n["i"])("/sys/user/register",s).then((function(t){t.success?e.$router.push({name:"registerResult",params:d({},r)}):e.registerFailed(t.message)}))}}))},getCaptcha:function(e){var t=this;e.preventDefault();var r=this;this.form.validateFields(["mobile"],{force:!0},(function(e,s){if(!e){t.state.smsSendBtn=!0;var a=window.setInterval((function(){r.state.time--<=0&&(r.state.time=60,r.state.smsSendBtn=!1,window.clearInterval(a))}),1e3),i=t.$message.loading("验证码发送中..",0),o={mobile:s.mobile,smsmode:"1"};Object(n["i"])("/sys/sms",o).then((function(e){e.success||(t.registerFailed(e.message),setTimeout(i,0)),setTimeout(i,500)})).catch((function(e){setTimeout(i,1),clearInterval(a),r.state.time=60,r.state.smsSendBtn=!1,t.requestFailed(e)}))}}))},registerFailed:function(e){this.$notification["error"]({message:"注册失败",description:e,duration:2})},requestFailed:function(e){this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(e){}}},h=m,g=(r("5d18"),r("797b"),r("2877")),v=Object(g["a"])(h,s,a,!1,null,"45defe74",null);t["default"]=v.exports},"5d18":function(e,t,r){"use strict";var s=r("e236"),a=r.n(s);a.a},"797b":function(e,t,r){"use strict";var s=r("a3ca"),a=r.n(s);a.a},a3ca:function(e,t,r){},e236:function(e,t,r){}}]);