(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d3aafb6","chunk-11c064ae"],{"3af3":function(e,t,r){"use strict";r.r(t),r.d(t,"list",function(){return a}),r.d(t,"add",function(){return n}),r.d(t,"edit",function(){return i}),r.d(t,"remove",function(){return c});var s=r("d722"),a={p:["get,/resources"],r:function(e){return s["a"].get("/resources",{params:e})}},n={p:["post,/resources"],r:function(e){return s["a"].post("/resources",e)}},i={p:["put,/resources"],r:function(e){return s["a"].put("/resources",e)}},c={p:["delete,/resources"],r:function(e){return s["a"].delete("/resources",{params:e})}}},"9b7b":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-tree",{ref:"tree",staticClass:"custom-tree",attrs:{data:e.list,props:e.defaultProps,"node-key":"id","default-expand-all":"","show-checkbox":e.picker,"check-strictly":e.picker},on:{"check-change":e.handleCheckChange},scopedSlots:e._u([{key:"default",fn:function(t){t.node;var s=t.data;return r("div",{staticClass:"custom-tree-item"},[r("div",{staticClass:"flex-1 extendLable"},[1!==s.type?r("span",{staticStyle:{color:"#67c23a"}},[r("i",{staticClass:"el-icon-medal"})]):e._e(),r("span",{class:{source:1!==s.type},staticStyle:{"margin-right":"20px"}},[e._v(e._s(s.name))]),1!==s.type?r("el-tag",{attrs:{size:"mini",type:e.typeColor[s.method]}},[r("i",{staticClass:"el-icon-position"}),e._v(" "+e._s(s.method.toUpperCase()))]):e._e(),r("el-tag",{attrs:{size:"mini",type:"info"}},[r("i",{staticClass:"el-icon-link"}),e._v(" "+e._s(s.url))])],1),e.picker?e._e():r("span",{staticClass:"extendGroup"},[r("el-button",{directives:[{name:"has",rawName:"v-has",value:e.resource.edit,expression:"resource.edit"}],attrs:{size:"small",type:"text"},on:{click:function(t){return t.stopPropagation(),e.$emit("edit",s)}}},[e._v("编辑")]),1===s.type?r("el-button",{directives:[{name:"has",rawName:"v-has",value:e.resource.add,expression:"resource.add"}],attrs:{size:"small",type:"text"},on:{click:function(t){return t.stopPropagation(),e.$emit("append",s)}}},[e._v("添加子菜单")]):e._e(),1===s.type?r("el-button",{directives:[{name:"has",rawName:"v-has",value:e.resource.add,expression:"resource.add"}],attrs:{size:"small",type:"text"},on:{click:function(t){return t.stopPropagation(),e.$emit("addResource",s)}}},[e._v("添加资源")]):e._e(),r("el-button",{directives:[{name:"has",rawName:"v-has",value:e.resource.remove,expression:"resource.remove"}],attrs:{size:"small",type:"text"},on:{click:function(t){return t.stopPropagation(),e.$emit("remove",s)}}},[e._v("删除")])],1)])}}])})},a=[],n=r("df73"),i=r("3af3"),c={props:{picker:{type:Boolean,required:!1,default:!1},checked:{type:Array,required:!1},listdata:{type:Array,required:!1}},data:function(){return{resource:i,list:[],defaultProps:{children:"children",label:"title"},typeColor:{get:"success",post:"primary",put:"warning",delete:"danger"}}},watch:{listdata:function(e){Array.isArray(e)&&(this.list=e)},checked:function(e){Array.isArray(e)&&this.$refs.tree.setCheckedKeys(e)}},methods:{handleCheckChange:function(e,t){this.$emit("checked",this.$refs.tree.getCheckedKeys())},fetchData:function(){var e=this;i["list"].r().then(function(t){e.list=n["a"](t.data.data),Array.isArray(e.checked)&&e.$nextTick(function(){e.$refs.tree.setCheckedKeys(e.checked)})})}},created:function(){this.listdata||this.fetchData()}},o=c,u=(r("ed1b"),r("2877")),l=Object(u["a"])(o,s,a,!1,null,"bf39e074",null);t["default"]=l.exports},a5a6:function(e,t,r){},ed1b:function(e,t,r){"use strict";var s=r("a5a6"),a=r.n(s);a.a}}]);