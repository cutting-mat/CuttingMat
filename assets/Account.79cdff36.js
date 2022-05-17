import{n as i,_ as l,d as n}from"./index.16330bbd.js";import{a as c,r as d,b as u,e as m,c as p,l as f}from"./account.7a39c927.js";import{l as h}from"./role.bb76fba0.js";import"./ui.3305e273.js";var g=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[t("ToolBar",[t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.account.add,expression:"account.add"}],attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(a){e.dialogVisible=!0}}},[e._v("\u6DFB\u52A0")])],1),t("el-form",{ref:"searchForm",attrs:{inline:"",model:e.queryParam,size:"small"}},[t("el-form-item",{attrs:{label:"\u8D26\u53F7"}},[t("el-input",{model:{value:e.queryParam.account,callback:function(a){e.$set(e.queryParam,"account",a)},expression:"queryParam.account"}})],1),t("el-form-item",{attrs:{label:"\u7528\u6237\u540D"}},[t("el-input",{model:{value:e.queryParam.name,callback:function(a){e.$set(e.queryParam,"name",a)},expression:"queryParam.name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(a){return e.fetchData(!0)}}},[e._v("\u67E5\u8BE2")]),t("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(a){return e.resetSearch()}}},[e._v("\u91CD\u7F6E")])],1)],1),t("p",[t("i",{staticClass:"el-icon-info"}),e._v(" \u5171 "),t("el-button",{attrs:{type:"text"}},[e._v(e._s(e.totalCount))]),e._v(" \u6761\u8BB0\u5F55 ")],1),t("el-table",{attrs:{data:e.list}},[t("el-table-column",{attrs:{prop:"account",label:"\u8D26\u53F7",align:"center"}}),t("el-table-column",{attrs:{prop:"name",label:"\u7528\u6237\u540D",align:"center"}}),t("el-table-column",{attrs:{prop:"roleName",label:"\u89D2\u8272",align:"center"}}),t("el-table-column",{attrs:{label:"\u72B6\u6001",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.disabled?[t("span",{staticStyle:{color:"#ff4949"}},[e._v("\u5DF2\u7981\u7528")])]:[t("span",{staticStyle:{color:"#13ce66"}},[e._v("\u5DF2\u542F\u7528")])]]}}])}),t("el-table-column",{attrs:{label:"\u64CD\u4F5C",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.account.edit,expression:"account.edit"}],attrs:{size:"small"},on:{click:function(o){return e.edit(a.row)}}},[e._v("\u7F16\u8F91")]),t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.account.resetPassword,expression:"account.resetPassword"}],attrs:{size:"small",type:"warning",plain:""},on:{click:function(o){return e.resetPassword(a.row)}}},[e._v("\u91CD\u7F6E\u5BC6\u7801")]),t("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.account.remove,expression:"account.remove"}],attrs:{size:"small",type:"danger",plain:""},on:{click:function(o){return e.remove(a.row)}}},[e._v("\u5220\u9664")])]}}])})],1),t("Pagination",{attrs:{"page-size":e.queryParam.pageSize,"current-page":e.queryParam.p,"total-count":e.totalCount,"total-page":e.totalPage},on:{"current-change":function(a){e.queryParam.p=a,e.fetchData()},"size-change":function(a){e.queryParam.pageSize=a,e.fetchData(!0)}}}),t("el-dialog",{staticClass:"userEditDialog",attrs:{"close-on-click-modal":!1,title:"\u8D26\u53F7\u4FE1\u606F",visible:e.dialogVisible,width:"600px"},on:{close:e.handleCloseDialog}},[t("el-form",{ref:"editForm",attrs:{size:"small",rules:e.rules,model:e.editForm,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"\u5934\u50CF",prop:"avatar"}},[t("uploader",{staticClass:"upload_avatar",attrs:{accept:"t-image",value:e.editForm.avatar?[{url:e.editForm.avatar}]:[],imgCrop:"","show-file-list":!1,"on-success":function(a){e.$set(e.editForm,"avatar",a.url)}}},[e.editForm.avatar?t("img",{staticClass:"upload_avatar_img",attrs:{src:e.editForm.avatar,alt:""}}):t("span",[e._v("\u4E0A\u4F20\u5934\u50CF")])])],1),t("el-form-item",{attrs:{label:"\u8D26\u53F7",prop:"account"}},[t("el-input",{attrs:{maxlength:100},model:{value:e.editForm.account,callback:function(a){e.$set(e.editForm,"account",typeof a=="string"?a.trim():a)},expression:"editForm.account"}})],1),t("el-form-item",{attrs:{label:"\u7528\u6237\u540D",prop:"name"}},[t("el-input",{attrs:{maxlength:100},model:{value:e.editForm.name,callback:function(a){e.$set(e.editForm,"name",typeof a=="string"?a.trim():a)},expression:"editForm.name"}})],1),e.editForm.id?e._e():[t("el-form-item",{attrs:{label:"\u5BC6\u7801",prop:"password"}},[t("input-password",{attrs:{autocomplete:"off"},model:{value:e.editForm.password,callback:function(a){e.$set(e.editForm,"password",a)},expression:"editForm.password"}})],1),t("el-form-item",{attrs:{label:"\u786E\u8BA4\u5BC6\u7801",prop:"checkPass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.editForm.checkPass,callback:function(a){e.$set(e.editForm,"checkPass",a)},expression:"editForm.checkPass"}})],1)],t("el-form-item",{attrs:{label:"\u6240\u5C5E\u7EC4\u7EC7",prop:"orgId"}},[t("OrgPicker",{attrs:{adapter:e.orgAdapter},on:{change:function(a,o){e.editForm.belongOrgName=o.name,e.$refs.editForm.validateField("orgId")}},model:{value:e.editForm.orgId,callback:function(a){e.$set(e.editForm,"orgId",a)},expression:"editForm.orgId"}})],1),t("el-form-item",{attrs:{label:"\u89D2\u8272"}},[t("DictSelect",{attrs:{request:e.requestRoles,labelKey:"name"},model:{value:e.editForm.roleId,callback:function(a){e.$set(e.editForm,"roleId",a)},expression:"editForm.roleId"}})],1),t("el-form-item",{attrs:{label:"\u72B6\u6001"}},[t("el-switch",{attrs:{"active-text":"\u542F\u7528","inactive-text":"\u7981\u7528","active-value":!1,"inactive-value":!0},model:{value:e.editForm.disabled,callback:function(a){e.$set(e.editForm,"disabled",a)},expression:"editForm.disabled"}})],1)],2),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("\u786E \u5B9A")]),t("el-button",{on:{click:function(a){e.dialogVisible=!1}}},[e._v("\u53D6 \u6D88")])],1)],1)],1)},v=[];const b={components:{OrgPicker:()=>l(()=>import("./OrgPicker.507880e6.js"),["assets/OrgPicker.507880e6.js","assets/OrgPicker.57dfbb16.css","assets/index.16330bbd.js","assets/index.5d7636e8.css","assets/ui.3305e273.js","assets/org.33e039ec.js"])},data(){return{account:c,dialogVisible:!1,loading:!1,list:[],editForm:{id:"",account:"",name:"",password:"",roles:[],disabled:!1},queryParam:{pageSize:10,p:1,account:"",name:""},totalCount:0,totalPage:0,rules:{account:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:"blur"}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],password:[{validator:(t,a,o)=>{a?(this.editForm.checkPass!==""&&this.$refs.editForm.validateField("checkPass"),o()):o(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801"))},trigger:"blur"}],checkPass:[{validator:(t,a,o)=>{a?a!==this.editForm.password?o(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!")):o():o(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"))},trigger:"blur"}],orgId:[{required:!0,message:"\u8BF7\u9009\u62E9\u6240\u5C5E\u7EC4\u7EC7"}]},requestRoles:h}},methods:{resetSearch(){this.queryParam={pageSize:10,p:1,account:"",name:""},this.fetchData(!0)},orgAdapter(e){return this.editForm.belongOrgName||e},resetPassword:function(e){if(!e)return null;this.$confirm(`\u786E\u5B9A\u91CD\u7F6E\u8D26\u53F7 ${e.account} \u7684\u5BC6\u7801?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{this.loading=!0,d({id:e.id}).then(r=>{r.data.password?this.$clipboard(r.data.password).then(()=>{this.$alert(`\u65B0\u5BC6\u7801\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F\uFF0C\u8BF7\u4FDD\u7BA1\u597D\u65B0\u5BC6\u7801\uFF1A<code>${r.data.password}</code>`,{confirmButtonText:"\u6211\u77E5\u9053\u4E86",dangerouslyUseHTMLString:!0}).then(()=>{this.fetchData()})}).catch(()=>{this.$alert(`\u5BC6\u7801\u5DF2\u91CD\u7F6E\uFF0C\u8BF7\u7262\u8BB0\u65B0\u5BC6\u7801\uFF1A<code>${r.data.password}</code>`,{confirmButtonText:"\u6211\u77E5\u9053\u4E86",dangerouslyUseHTMLString:!0}).then(()=>{this.fetchData()})}):this.$message.warning("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")}).catch(()=>{this.loading=!1})})},edit:function(e){const r=Object.assign({},e);r.roles=Array.isArray(r.roles)?r.roles.map(t=>t.roleId):[],this.editForm=r,this.dialogVisible=!0},save(){this.$refs.editForm.validate(e=>{if(e){this.loading=!0;let r=n(this.editForm);this.handleCloseDialog(),(r.id?m:u)(r).then(()=>{this.fetchData(),this.$message({message:"\u6DFB\u52A0\u6210\u529F",type:"success"})}).catch(()=>{this.loading=!1})}})},handleCloseDialog:function(){this.dialogVisible=!1,this.editForm={id:"",account:"",name:"",password:"",roles:[],disabled:!1},this.$refs.editForm&&this.$refs.editForm.resetFields()},remove(e){if(!e)return null;this.$confirm("\u662F\u5426\u5220\u9664?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{this.loading=!0,p({id:e.id}).then(()=>{this.fetchData(),this.$message({message:"\u5220\u9664\u6210\u529F",type:"success"})}).catch(()=>{this.loading=!1})})},fetchData:function(e){e&&(this.queryParam.p=1),this.loading=!0,f(this.queryParam).then(r=>{this.loading=!1;const t=r.data;t&&(this.list=t.list,this.totalCount=t.totalCount,this.totalPage=t.totalPage)}).catch(()=>{this.loading=!1})}},created:function(){this.fetchData()}},s={};var _=i(b,g,v,!1,F,"123e6cdb",null,null);function F(e){for(let r in s)this[r]=s[r]}var $=function(){return _.exports}();export{$ as default};
