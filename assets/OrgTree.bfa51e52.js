import{l as n}from"./org.fa9f46f1.js";import{n as i}from"./index.d870fe9f.js";import"./ui.62ab6f2f.js";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-table",{ref:"table",attrs:{height:"100%","row-key":"id",lazy:"",data:e.tableData,load:e.load},on:{"selection-change":e.handleSelectionChange}},[e.picker?t("el-table-column",{attrs:{type:"selection",width:"45"}}):e._e(),t("el-table-column",{attrs:{prop:"name",label:"\u540D\u79F0"}}),t("el-table-column",{attrs:{prop:"fullName",label:"\u5168\u79F0"}}),t("el-table-column",{attrs:{label:"\u521B\u5EFA\u65F6\u95F4"},scopedSlots:e._u([{key:"default",fn:function(l){return[e._v(e._s(e.$filter.date(l.row.createTime)))]}}])}),e.picker?e._e():t("el-table-column",{attrs:{label:"\u64CD\u4F5C",width:"260"},scopedSlots:e._u([{key:"default",fn:function(l){return[e._t("action",null,{row:l.row})]}}],null,!0)})],1)},o=[];const u={props:{value:{type:Array,required:!1,default(){return[]}},picker:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1}},data(){return{loading:!1,tableData:[],selection:[]}},watch:{value:{handler(){this.tableData=this.value},deep:!0},selection:{handler(){this.picker&&this.$emit("pick",this.selection)},deep:!0}},methods:{handleSelectionChange(e){e.length>1&&!this.multiple?e.forEach((a,t)=>{this.$refs.table.toggleRowSelection(a,t===e.length-1)}):this.selection=e},load(e,a,t){this.fetchData(e?{pid:e.id}:null).then(l=>{t(l.data)})},fetchData(e){return this.loading=!0,n(e).then(a=>(this.loading=!1,a)).catch(()=>{this.loading=!1})}},created(){this.value.length?this.tableData=this.value:this.fetchData().then(e=>{this.tableData=e.data})}},r={};var c=i(u,s,o,!1,h,"d2276576",null,null);function h(e){for(let a in r)this[a]=r[a]}var p=function(){return c.exports}();export{p as default};