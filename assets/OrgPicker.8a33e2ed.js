import{n as o,_ as l,b as r,d}from"./index.afc5b2ba.js";import{l as n}from"./org.3b1ba616.js";var c=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"orgPick-box"},[t("el-input",{attrs:{size:e.size,readonly:"",value:e.showTitle,placeholder:"\u8BF7\u9009\u62E9"},on:{focus:function(s){e.dialogVisible=!0}}}),t("el-dialog",{staticClass:"custom-dialog",attrs:{"append-to-body":"","close-on-click-modal":!1,title:"\u9009\u62E9\u7EC4\u7EC7",visible:e.dialogVisible,width:"1000px"},on:{"update:visible":function(s){e.dialogVisible=s},open:e.dialogOpen}},[t("div",{staticClass:"orgPicker"},[e.dialogVisible?t("OrgTree",{attrs:{value:e.list,picker:""},on:{pick:function(s){e.checkedNode=s}}}):e._e()],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.submit}},[e._v("\u786E \u5B9A")]),t("el-button",{attrs:{size:"medium"},on:{click:function(s){e.dialogVisible=!1}}},[e._v("\u53D6 \u6D88")])],1)])],1)},u=[];const h={model:{prop:"value",event:"change"},props:{value:{type:[Number,String],required:!1},adapter:{type:Function,required:!1,default(e,i){return i.name||e}},size:{type:String,required:!1,default:"small"}},components:{OrgTree:()=>l(()=>import("./OrgTree.3c2c64b5.js"),["assets/OrgTree.3c2c64b5.js","assets/CURD.c29b3f84.css","assets/org.3b1ba616.js","assets/index.afc5b2ba.js","assets/index.05b5d776.css"])},data(){return{loading:!1,dialogVisible:!1,list:[],checkedNode:{},submitNode:{}}},computed:{showTitle(){return this.adapter(this.value,this.submitNode)}},methods:{dialogOpen(){this.checkedNode={},this.submitNode={}},fetchData:function(){this.loading=!0,n().then(e=>{this.loading=!1,e.data&&(this.list=r(e.data))}).catch(()=>{this.loading=!1})},submit(){this.checkedNode&&this.checkedNode[0]&&(this.submitNode=d(this.checkedNode[0]),this.$emit("change",this.checkedNode[0].id)),this.dialogVisible=!1}},created(){this.fetchData()}},a={};var _=o(h,c,u,!1,p,"eeef0f2a",null,null);function p(e){for(let i in a)this[i]=a[i]}var v=function(){return _.exports}();export{v as default};
