!function(){var e=document.createElement("style");e.innerHTML=".resourceEditFrom[data-v-24bd9045]{width:430px}\n",document.head.appendChild(e),System.register(["./index-legacy.e803da5e.js","./resource-legacy.21b08944.js"],(function(e,t){"use strict";var r,i,o,a,n;return{setters:[function(e){r=e.n,i=e._,o=e.d,a=e.b},function(e){n=e.r}],execute:function(){var s={},l=r({components:{TheResourcePicker:function(){return i((function(){return t.import("./TheResourcePicker-legacy.71850a9e.js")}),void 0)}},data:function(){var e=this;return{resource:n,loading:!1,list:[],editForm:{pid:null,method:"get",name:"",url:"",type:0},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:100,message:"长度 1 到 100 个字符",trigger:"blur"}],url:[{required:!0,message:"请输入路由/URL",trigger:"blur"}],method:[{validator:function(t,r,i){if(1===e.editForm.type&&!r)return i(new Error("请填写Method!"));i()},trigger:"blur"}]},requestMethods:[{label:"GET"},{label:"POST"},{label:"PUT"},{label:"DELETE"}]}},methods:{edit:function(e){this.editForm=o(e),this.editForm.method=this.editForm.method.toLowerCase()},append:function(e){this.editForm={pid:e.id,name:"",route:"",type:0}},addResource:function(e){this.editForm={pid:e.id,method:"get",name:"",url:"",type:1}},save:function(){var e=this;this.$refs.editForm.validate((function(t){if(t){var r=o(e.editForm),i=n;Array.isArray(r.pid)&&(r.pid=r.pid.pop()),r.method&&(r.method=r.method.toLowerCase()),e.loading=!0,(r.id?i.edit:i.add)(r).then((function(){e.fetchData(),e.$message({message:"添加成功",type:"success"})})).catch((function(){e.loading=!1}))}}))},resetFrom:function(){this.editForm={pid:"",name:"",route:""},this.$refs.editForm&&this.$refs.editForm.resetFields()},remove:function(e){var t=this;if(!e||!e.id)return null;var r=n;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0,r.remove({id:e.id}).then((function(){t.fetchData(),t.$message({message:"删除成功",type:"success"})})).catch((function(){t.loading=!1}))}))},fetchData:function(){var e=this;this.loading=!0,this.$store.action("permission",{cache:"update"}).then((function(t){e.loading=!1,e.list=a(t.menus.concat(t.resources))})).catch((function(){e.loading=!1}))}},created:function(){this.fetchData()}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"flex-col"},[r("ToolBar"),r("div",{staticClass:"flex-1 flex-row"},[r("div",{staticClass:"resourceWrap flex-1 scrollbar"},[r("TheResourcePicker",{attrs:{listdata:e.list},on:{edit:e.edit,append:e.append,"add-resource":e.addResource,remove:e.remove}})],1),r("el-form",{ref:"editForm",staticClass:"resourceEditFrom",attrs:{size:"small",rules:e.rules,model:e.editForm,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{maxlength:100},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name","string"==typeof t?t.trim():t)},expression:"editForm.name"}})],1),1===e.editForm.type?r("el-form-item",{attrs:{label:"方法",prop:"method"}},[r("el-radio-group",{model:{value:e.editForm.method,callback:function(t){e.$set(e.editForm,"method",t)},expression:"editForm.method"}},e._l(e.requestMethods,(function(t,i){return r("el-radio",{key:"m"+i,attrs:{label:t.label.toLowerCase()}},[e._v(e._s(t.label))])})),1)],1):e._e(),1===e.editForm.type?r("el-form-item",{attrs:{label:"URL",prop:"url"}},[r("el-input",{model:{value:e.editForm.url,callback:function(t){e.$set(e.editForm,"url","string"==typeof t?t.trim():t)},expression:"editForm.url"}})],1):r("el-form-item",{attrs:{label:"路由",prop:"route"}},[r("el-input",{attrs:{maxlength:100},model:{value:e.editForm.route,callback:function(t){e.$set(e.editForm,"route","string"==typeof t?t.trim():t)},expression:"editForm.route"}})],1),r("el-form-item",{attrs:{label:"父级"}},[r("el-cascader",{attrs:{options:e.list,props:{checkStrictly:!0,label:"name",value:"id"}},model:{value:e.editForm.pid,callback:function(t){e.$set(e.editForm,"pid",t)},expression:"editForm.pid"}})],1),r("el-form-item",{attrs:{label:"序号"}},[r("el-input",{attrs:{type:"number"},model:{value:e.editForm.orderNum,callback:function(t){e.$set(e.editForm,"orderNum","string"==typeof t?t.trim():t)},expression:"editForm.orderNum"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保 存")]),r("el-button",{on:{click:e.resetFrom}},[e._v("重 置")])],1)],1)],1)],1)}),[],!1,d,"24bd9045",null,null);function d(e){for(var t in s)this[t]=s[t]}e("default",function(){return l.exports}())}}}))}();
