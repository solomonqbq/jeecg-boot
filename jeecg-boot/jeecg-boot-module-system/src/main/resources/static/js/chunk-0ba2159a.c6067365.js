(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ba2159a"],{"0f9d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-select-biz-component",e._g(e._b({attrs:{value:e.value,listUrl:e.url.list,columns:e.columns}},"j-select-biz-component",e.attrs,!1),e.$listeners))},n=[],r=a("b296"),l={name:"JSelectMultiUser",components:{JSelectBizComponent:r["default"]},props:["value"],data:function(){return{url:{list:"/sys/user/list"},columns:[{title:"姓名",align:"center",width:"20%",widthRight:"70%",dataIndex:"realname"},{title:"账号",align:"center",width:"20%",dataIndex:"username"},{title:"电话",align:"center",width:"23%",dataIndex:"phone"},{title:"出生日期",align:"center",width:"23%",dataIndex:"birthday"}],default:{name:"用户",width:1e3,displayKey:"realname",returnKeys:["id","username"],queryParamText:"账号"}}},computed:{attrs:function(){return Object.assign(this.default,this.$attrs)}}},s=l,o=a("2877"),c=Object(o["a"])(s,i,n,!1,null,"ad206824",null);t["default"]=c.exports},"8c6e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"j-super-query-box"},[a("div",{on:{click:function(t){e.visible=!0}}},[e._t("default",[e.superQueryFlag?a("a-tooltip",{attrs:{mouseLeaveDelay:.2}},[a("template",{slot:"title"},[a("span",[e._v("已有高级查询条件生效")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:e.handleReset}},[e._v("清空")])],1),a("a-button",{attrs:{type:"primary"}},[a("a-icon",{attrs:{type:"appstore",theme:"twoTone",spin:!0}}),a("span",[e._v("高级查询")])],1)],2):a("a-button",{attrs:{type:"primary",icon:"filter"},on:{click:function(t){e.visible=!0}}},[e._v("高级查询")])])],2),a("a-modal",{staticClass:"j-super-query-modal",staticStyle:{top:"5%","max-height":"95%"},attrs:{title:"高级查询构造器",width:1e3,visible:e.visible,mask:!1},on:{cancel:e.handleCancel}},[a("template",{slot:"footer"},[a("div",{staticStyle:{float:"left"}},[a("a-button",{attrs:{loading:e.loading},on:{click:e.handleReset}},[e._v("重置")]),a("a-button",{attrs:{loading:e.loading},on:{click:e.handleSave}},[e._v("保存查询条件")])],1),a("a-button",{attrs:{loading:e.loading},on:{click:e.handleCancel}},[e._v("关闭")]),a("a-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.handleOk}},[e._v("查询")])],1),a("a-spin",{attrs:{spinning:e.loading}},[a("a-row",[a("a-col",{attrs:{sm:24,md:19}},[0===e.queryParamsModel.length?a("a-empty",[a("div",{attrs:{slot:"description"},slot:"description"},[a("span",[e._v("没有任何查询条件")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:e.handleAdd}},[e._v("点击新增")])],1)]):a("a-form",{attrs:{layout:"inline"}},[a("a-form-item",{staticStyle:{"margin-bottom":"12px"},attrs:{label:"过滤条件匹配"}},[a("a-select",{attrs:{getPopupContainer:function(e){return e.parentNode}},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}},[a("a-select-option",{attrs:{value:"and"}},[e._v("AND（所有条件都要求匹配）")]),a("a-select-option",{attrs:{value:"or"}},[e._v("OR（条件中的任意一个匹配）")])],1)],1),e._l(e.queryParamsModel,(function(t,i){return a("a-row",{key:i,staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[a("a-col",{attrs:{span:8}},[a("a-tree-select",{staticStyle:{width:"100%"},attrs:{showSearch:"",treeData:e.fieldTreeData,dropdownStyle:{maxHeight:"400px",overflow:"auto"},placeholder:"选择查询字段",allowClear:"",treeDefaultExpandAll:"",getPopupContainer:function(e){return e.parentNode}},on:{select:function(a,i){return e.handleSelected(i,t)}},model:{value:t.field,callback:function(a){e.$set(t,"field",a)},expression:"item.field"}})],1),a("a-col",{attrs:{span:4}},[a("a-select",{attrs:{placeholder:"匹配规则",getPopupContainer:function(e){return e.parentNode}},model:{value:t.rule,callback:function(a){e.$set(t,"rule",a)},expression:"item.rule"}},[a("a-select-option",{attrs:{value:"eq"}},[e._v("等于")]),a("a-select-option",{attrs:{value:"ne"}},[e._v("不等于")]),a("a-select-option",{attrs:{value:"gt"}},[e._v("大于")]),a("a-select-option",{attrs:{value:"ge"}},[e._v("大于等于")]),a("a-select-option",{attrs:{value:"lt"}},[e._v("小于")]),a("a-select-option",{attrs:{value:"le"}},[e._v("小于等于")]),a("a-select-option",{attrs:{value:"right_like"}},[e._v("以..开始")]),a("a-select-option",{attrs:{value:"left_like"}},[e._v("以..结尾")]),a("a-select-option",{attrs:{value:"like"}},[e._v("包含")]),a("a-select-option",{attrs:{value:"in"}},[e._v("在...中")])],1)],1),a("a-col",{attrs:{span:8}},[t.dictCode?["table-dict"===t.type?[a("j-popup",{attrs:{code:t.dictTable,field:t.dictCode,orgFields:t.dictCode,destFields:t.dictCode},model:{value:t.val,callback:function(a){e.$set(t,"val",a)},expression:"item.val"}})]:a("j-dict-select-tag",{attrs:{dictCode:t.dictCode,placeholder:"请选择"},model:{value:t.val,callback:function(a){e.$set(t,"val",a)},expression:"item.val"}})]:"select-user"===t.type?a("j-select-multi-user",{attrs:{buttons:!1,multiple:!1,placeholder:"请选择用户",returnKeys:["id",t.customReturnField||"username"]},model:{value:t.val,callback:function(a){e.$set(t,"val",a)},expression:"item.val"}}):"select-depart"===t.type?a("j-select-depart",{attrs:{multi:!1,placeholder:"请选择部门",customReturnField:t.customReturnField||"id"},model:{value:t.val,callback:function(a){e.$set(t,"val",a)},expression:"item.val"}}):t.options instanceof Array?a("a-select",{attrs:{options:t.options,allowClear:"",placeholder:"请选择"},model:{value:t.val,callback:function(a){e.$set(t,"val",a)},expression:"item.val"}}):"date"==t.type?a("j-date",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择日期"},model:{value:t.val,callback:function(a){e.$set(t,"val",a)},expression:"item.val"}}):"datetime"==t.type?a("j-date",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择时间","show-time":!0,"date-format":"YYYY-MM-DD HH:mm:ss"},model:{value:t.val,callback:function(a){e.$set(t,"val",a)},expression:"item.val"}}):"int"==t.type||"number"==t.type?a("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入数值"},model:{value:t.val,callback:function(a){e.$set(t,"val",a)},expression:"item.val"}}):a("a-input",{attrs:{placeholder:"请输入值"},model:{value:t.val,callback:function(a){e.$set(t,"val",a)},expression:"item.val"}})],2),a("a-col",{attrs:{span:4}},[a("a-button",{attrs:{icon:"plus"},on:{click:e.handleAdd}}),e._v(" \n                "),a("a-button",{attrs:{icon:"minus"},on:{click:function(t){return e.handleDel(i)}}})],1)],1)}))],2)],1),a("a-col",{attrs:{sm:24,md:5}},[a("a-card",{staticClass:"j-super-query-history-card",attrs:{bordered:!0}},[a("div",{attrs:{slot:"title"},slot:"title"},[e._v("\n              保存的查询\n            ")]),0===e.treeData.length?a("a-empty",{staticClass:"j-super-query-history-empty",attrs:{description:"没有保存任何查询"}}):a("a-tree",{staticClass:"j-super-query-history-tree",attrs:{showIcon:"",treeData:e.treeData},on:{select:e.handleTreeSelect,rightClick:e.handleTreeRightClick}})],1)],1)],1)],1),a("a-modal",{attrs:{title:"请输入保存的名称",visible:e.prompt.visible},on:{cancel:function(t){e.prompt.visible=!1},ok:e.handlePromptOk}},[a("a-input",{model:{value:e.prompt.value,callback:function(t){e.$set(e.prompt,"value",t)},expression:"prompt.value"}})],1)],2)],1)},n=[],r=(a("8e6e"),a("456d"),a("c5f6"),a("04ff"),a("bd86")),l=(a("ac6a"),a("ca00")),s=a("2dab"),o=a("fe54"),c=a("0f9d");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h={name:"JSuperQuery",components:{JDate:s["default"],JSelectDepart:o["default"],JSelectMultiUser:c["default"]},props:{fieldList:{type:Array,required:!0},callback:{type:String,required:!1,default:"handleSuperQuery"},loading:{type:Boolean,default:!1},saveCode:{type:String,default:"testSaveCode"}},data:function(){var e=this.$createElement;return{fieldTreeData:[],prompt:{visible:!1,value:""},visible:!1,queryParamsModel:[{}],treeIcon:e("a-icon",{attrs:{type:"file-text"}}),treeData:[],saveCodeBefore:"JSuperQuerySaved_",selectValue:"and",superQueryFlag:!1}},watch:{saveCode:{immediate:!0,handler:function(e){var t=this,a=this.$ls.get(this.saveCodeBefore+e);a instanceof Array&&(this.treeData=a.map((function(e){return e.icon=t.treeIcon,e})))}},fieldList:{deep:!0,immediate:!0,handler:function(e){var t=[],a=[];e.forEach((function(e){var i=u({},e);i.label=i.label||i.text;var n=i.children instanceof Array;i.disabled=n,i.selectable=!n,n?(i.children=i.children.map((function(e){var t=u({},e);return t.label=t.label||t.text,t.label=i.label+"-"+t.label,t.value=i.value+","+t.value,t.val="",t})),i.val="",a.push(i)):t.push(i)})),this.fieldTreeData=t.concat(a)}}},methods:{show:function(){this.queryParamsModel&&0!=this.queryParamsModel.length||(this.queryParamsModel=[{}]),this.visible=!0},handleOk:function(){if(this.isNullArray(this.queryParamsModel))this.emitCallback();else{var e={matchType:this.selectValue,params:this.removeEmptyObject(l["b"](this.queryParamsModel))};this.emitCallback(e.params,e.matchType)}},emitCallback:function(e,t){this.superQueryFlag=!!e,this.$emit(this.callback,e,t)},handleCancel:function(){this.close()},close:function(){this.$emit("close"),this.visible=!1},handleAdd:function(){this.queryParamsModel.push({})},handleDel:function(e){this.queryParamsModel.splice(e,1)},handleSelected:function(e,t){var a=e.dataRef,i=a.type,n=a.options,r=a.dictCode,l=a.dictTable,s=a.customReturnField;t["type"]=i,t["options"]=n,t["dictCode"]=r,t["dictTable"]=l,t["customReturnField"]=s,this.$set(t,"val",void 0)},handleReset:function(){this.superQueryFlag=!1,this.queryParamsModel=[{}],this.emitCallback()},handleSave:function(){var e=this.removeEmptyObject(l["b"](this.queryParamsModel));this.isNullArray(e)?this.$message.warning("空条件不能保存"):(this.prompt.value="",this.prompt.visible=!0)},handlePromptOk:function(){var e=this,t=this.prompt.value,a=this.treeData.filter((function(e){return e.title===t}));a.length>0?this.$confirm({content:"".concat(t," 已存在，是否覆盖？"),onOk:function(){e.prompt.visible=!1,a[0].records=e.removeEmptyObject(l["b"](e.queryParamsModel)),e.saveToLocalStore(),e.$message.success("保存成功")}}):(this.prompt.visible=!1,this.treeData.push({title:t,icon:this.treeIcon,records:this.removeEmptyObject(l["b"](this.queryParamsModel))}),this.saveToLocalStore(),this.$message.success("保存成功"))},handleTreeSelect:function(e,t){t.selectedNodes[0]&&(this.queryParamsModel=l["b"](t.selectedNodes[0].data.props.records))},handleTreeRightClick:function(e){var t=this;this.$confirm({content:"是否删除当前查询？",onOk:function(){var a=e.node.eventKey;t.treeData.splice(Number.parseInt(a.substring(2)),1),t.saveToLocalStore(),t.$message.success("删除成功")}})},saveToLocalStore:function(){this.$ls.set(this.saveCodeBefore+this.saveCode,this.treeData.map((function(e){return{title:e.title,records:e.records}})))},isNullArray:function(e){if(!e||0===e.length)return!0;if(1===e.length){var t=e[0];if(!t.field||null==t.val||""===t.val||!t.rule)return!0}return!1},removeEmptyObject:function(e){for(var t=0;t<e.length;t++){var a=e[t];null==a||Object.keys(a).length<=0?e.splice(t--,1):delete a.options}return e}}},p=h,f=(a("dd38"),a("2877")),v=Object(f["a"])(p,i,n,!1,null,"6bb0bfae",null);t["default"]=v.exports},9884:function(e,t,a){"use strict";var i=a("9dfd"),n=a.n(i);n.a},"9dfd":function(e,t,a){},b0cd:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"选择部门",width:e.modalWidth,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[a("a-spin",{attrs:{tip:"Loading...",spinning:!1}},[a("a-input-search",{staticStyle:{"margin-bottom":"1px"},attrs:{placeholder:"请输入部门名称按回车进行搜索"},on:{search:e.onSearch}}),a("a-tree",{attrs:{checkable:"",treeData:e.treeData,checkStrictly:!0,autoExpandParent:e.autoExpandParent,expandedKeys:e.expandedKeys,checkedKeys:e.checkedKeys},on:{check:e.onCheck,select:e.onSelect,expand:e.onExpand},scopedSlots:e._u([{key:"title",fn:function(t){var i=t.title;return[i.indexOf(e.searchValue)>-1?a("span",[e._v("\n          "+e._s(i.substr(0,i.indexOf(e.searchValue)))+"\n          "),a("span",{staticStyle:{color:"#f50"}},[e._v(e._s(e.searchValue))]),e._v("\n          "+e._s(i.substr(i.indexOf(e.searchValue)+e.searchValue.length))+"\n        ")]):a("span",[e._v(e._s(i))])]}}])})],1)],1)},n=[],r=(a("ac4d"),a("8a81"),a("ac6a"),a("75fc")),l=(a("28a5"),a("4ec3")),s={name:"JSelectDepartModal",props:["modalWidth","multi","rootOpened","departId"],data:function(){return{visible:!1,confirmLoading:!1,treeData:[],autoExpandParent:!0,expandedKeys:[],dataList:[],checkedKeys:[],checkedRows:[],searchValue:""}},created:function(){this.loadDepart()},watch:{departId:function(){this.initDepartComponent()},visible:{handler:function(){this.departId?this.checkedKeys=this.departId.split(","):this.checkedKeys=[]}}},methods:{show:function(){this.visible=!0,this.checkedRows=[],this.checkedKeys=[]},loadDepart:function(){var e=this;Object(l["C"])().then((function(t){if(t.success){var a=Object(r["a"])(t.result);e.reWriterWithSlot(a),e.treeData=a,e.initDepartComponent(),e.rootOpened&&e.initExpandedKeys(t.result)}}))},initDepartComponent:function(){var e="";if(this.departId){var t=this.departId,a=!0,i=!1,n=void 0;try{for(var r,l=this.dataList[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var s=r.value;t.indexOf(s.key)>=0&&(e+=","+s.title)}}catch(o){i=!0,n=o}finally{try{a||null==l.return||l.return()}finally{if(i)throw n}}e&&(e=e.substring(1))}this.$emit("initComp",e)},reWriterWithSlot:function(e){var t=!0,a=!1,i=void 0;try{for(var n,r=e[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var l=n.value;if(l.children&&l.children.length>0){this.reWriterWithSlot(l.children);var s=Object.assign({},l);s.children={},this.dataList.push(s)}else this.dataList.push(l),l.scopedSlots={title:"title"}}}catch(o){a=!0,i=o}finally{try{t||null==r.return||r.return()}finally{if(a)throw i}}},initExpandedKeys:function(e){if(e&&e.length>0){var t=[],a=!0,i=!1,n=void 0;try{for(var r,l=e[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var s=r.value;s.children&&s.children.length>0&&t.push(s.id)}}catch(o){i=!0,n=o}finally{try{a||null==l.return||l.return()}finally{if(i)throw n}}this.expandedKeys=[].concat(t)}else this.expandedKeys=[]},onCheck:function(e,t){var a=this;if(this.multi)this.checkedKeys=e.checked,this.checkedRows=this.getCheckedRows(this.checkedKeys);else{var i=e.checked.filter((function(e){return a.checkedKeys.indexOf(e)<0}));this.checkedKeys=Object(r["a"])(i),this.checkedRows=0===this.checkedKeys.length?[]:[t.node.dataRef]}},onSelect:function(e,t){var a=[];if(a.push(e[0]),this.checkedKeys&&0!==this.checkedKeys.length&&this.multi){var i,n=t.node.dataRef.key;if(this.checkedKeys.indexOf(n)>=0)this.checkedKeys=this.checkedKeys.filter((function(e){return e!==n}));else(i=this.checkedKeys).push.apply(i,a)}else this.checkedKeys=[].concat(a),this.checkedRows=[t.node.dataRef];this.checkedRows=this.getCheckedRows(this.checkedKeys)},onExpand:function(e){this.expandedKeys=e,this.autoExpandParent=!1},handleSubmit:function(){this.checkedKeys&&0!=this.checkedKeys.length?this.$emit("ok",this.checkedRows,this.checkedKeys.join(",")):this.$emit("ok",""),this.handleClear()},handleCancel:function(){this.handleClear()},handleClear:function(){this.visible=!1,this.checkedKeys=[]},getParentKey:function(e,t){for(var a,i=0;i<t.length;i++){var n=t[i];n.children&&(n.children.some((function(t){return t.key===e}))?a=n.key:this.getParentKey(e,n.children)&&(a=this.getParentKey(e,n.children)))}return a},onSearch:function(e){var t=this,a=this.dataList.map((function(a){return a.title.indexOf(e)>-1?t.getParentKey(a.key,t.treeData):null})).filter((function(e,t,a){return e&&a.indexOf(e)===t}));Object.assign(this,{expandedKeys:a,searchValue:e,autoExpandParent:!0})},getCheckedRows:function(e){var t=function e(t,a){var i=!0,n=!1,r=void 0;try{for(var l,s=t[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var o=l.value;if(o.id===a)return o;if(o.children instanceof Array){var c=e(o.children,a);if(null!=c)return c}}}catch(d){n=!0,r=d}finally{try{i||null==s.return||s.return()}finally{if(n)throw r}}return null},a=[],i=!0,n=!1,r=void 0;try{for(var l,s=e[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var o=l.value,c=t(this.treeData,o);null!=c&&a.push(c)}}catch(d){n=!0,r=d}finally{try{i||null==s.return||s.return()}finally{if(n)throw r}}return a}}},o=s,c=a("2877"),d=Object(c["a"])(o,i,n,!1,null,"4907a211",null);t["default"]=d.exports},c79e:function(e,t,a){},dd38:function(e,t,a){"use strict";var i=a("c79e"),n=a.n(i);n.a},fe54:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-input-demo-presuffix"},[a("a-input",{attrs:{placeholder:"请点击选择部门",readOnly:"",disabled:e.disabled},on:{click:e.openModal},model:{value:e.departNames,callback:function(t){e.departNames=t},expression:"departNames"}},[a("a-icon",{attrs:{slot:"prefix",type:"cluster",title:"部门选择控件"},slot:"prefix"}),e.departIds?a("a-icon",{attrs:{slot:"suffix",type:"close-circle",title:"清空"},on:{click:e.handleEmpty},slot:"suffix"}):e._e()],1),a("j-select-depart-modal",{ref:"innerDepartSelectModal",attrs:{"modal-width":e.modalWidth,multi:e.multi,rootOpened:e.rootOpened,"depart-id":e.departIds},on:{ok:e.handleOK,initComp:e.initComp}})],1)},n=[],r=(a("c5f6"),a("b0cd")),l={name:"JSelectDepart",components:{JSelectDepartModal:r["default"]},props:{modalWidth:{type:Number,default:500,required:!1},multi:{type:Boolean,default:!1,required:!1},rootOpened:{type:Boolean,default:!0,required:!1},value:{type:String,required:!1},disabled:{type:Boolean,required:!1,default:!1},customReturnField:{type:String,default:"id"}},data:function(){return{visible:!1,confirmLoading:!1,departNames:"",departIds:""}},mounted:function(){this.departIds=this.value},watch:{value:function(e){"id"===this.customReturnField&&(this.departIds=e)}},methods:{initComp:function(e){this.departNames=e},openModal:function(){this.$refs.innerDepartSelectModal.show()},handleOK:function(e,t){var a=this,i="";!e&&e.length<=0?(this.departNames="",this.departIds=""):(i=e.map((function(e){return e[a.customReturnField]})).join(","),this.departNames=e.map((function(e){return e["departName"]})).join(","),this.departIds=t),this.$emit("change",i)},getDepartNames:function(){return this.departNames},handleEmpty:function(){this.handleOK("")}},model:{prop:"value",event:"change"}},s=l,o=(a("9884"),a("2877")),c=Object(o["a"])(s,i,n,!1,null,"4d448922",null);t["default"]=c.exports}}]);