!function(){var e=document.createElement("style");e.innerHTML="",document.head.appendChild(e),System.register(["./index-legacy.e803da5e.js","./org-legacy.12341983.js"],(function(e,t){"use strict";var i,n,r,a,o,l,s;return{setters:[function(e){i=e.n,n=e._,r=e.d},function(e){a=e.o,o=e.a,l=e.e,s=e.r}],execute:function(){var u={},c=i({components:{OrgTree:function(){return n((function(){return t.import("./OrgTree-legacy.73101c5e.js")}),void 0)}},data:function(){return{org:a,dialogVisible:!1,sourceDepart:null,loading:!1,list:[],queryParam:{},editForm:{name:"",pid:null},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:100,message:"长度 1 到 100 个字符",trigger:"blur"}],fullName:[{min:0,max:255,message:"长度 0 到 255 个字符",trigger:"blur"}]},refresh:!0}},methods:{edit:function(e){this.editForm=r(e),this.dialogVisible=!0},add:function(e){this.editForm={pid:e.pid},this.dialogVisible=!0},save:function(){var e=this,t=this;t.$refs.editForm.validate((function(i){if(i){var n=r(t.editForm);e.handleCloseDialog(),n.id?l(n).then((function(){t.fetchData(),t.$message({message:"编辑成功",type:"success"})})):o(n).then((function(){t.fetchData(),t.$message({message:"添加成功",type:"success"})}))}}))},handleCloseDialog:function(){this.dialogVisible=!1,this.editForm={name:"",pid:null}},remove:function(e){var t=this;if(!e||!e.id)return null;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0,s({id:e.id}).then((function(){t.loading=!1,t.fetchData(),t.$message({message:"删除成功",type:"success"})})).catch((function(){t.loading=!1}))}))},fetchData:function(){var e=this;this.refresh=!1,this.$nextTick((function(){e.refresh=!0}))}}},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[i("ToolBar",[i("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.org.add,expression:"org.add"}],attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加根节点")])],1),e.refresh?i("OrgTree",{scopedSlots:e._u([{key:"action",fn:function(t){return i("div",{},[i("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.org.edit,expression:"org.edit"}],attrs:{size:"small"},on:{click:function(i){return e.edit(t.row)}}},[e._v("编辑")]),i("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.org.add,expression:"org.add"}],attrs:{size:"small"},on:{click:function(i){return e.add(t.row)}}},[e._v("添加下级")]),i("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.org.remove,expression:"org.remove"}],attrs:{size:"small",type:"danger",plain:""},on:{click:function(i){return e.remove(t.row)}}},[e._v("删除")])],1)}}],null,!1,1149850345)}):e._e(),i("el-dialog",{attrs:{visible:e.dialogVisible,title:"组织信息",width:"800px","close-on-click-modal":!1},on:{close:e.handleCloseDialog}},[i("el-form",{ref:"editForm",attrs:{size:"small",rules:e.rules,model:e.editForm,"label-width":"150px"}},[i("el-form-item",{attrs:{label:"部门名称",prop:"name"}},[i("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),i("el-form-item",{attrs:{label:"全称",prop:"fullName"}},[i("el-input",{model:{value:e.editForm.fullName,callback:function(t){e.$set(e.editForm,"fullName",t)},expression:"editForm.fullName"}})],1)],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save()}}},[e._v("确 定")]),i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")])],1)],1)],1)}),[],!1,d,"627a89cc",null,null);function d(e){for(var t in u)this[t]=u[t]}e("default",function(){return c.exports}())}}}))}();
