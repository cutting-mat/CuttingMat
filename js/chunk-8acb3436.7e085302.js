(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8acb3436"],{"68fa":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tree",{ref:"tree",staticClass:"custom-tree",attrs:{data:e.list,props:e.defaultProps,"node-key":"id","default-expand-all":"","show-checkbox":e.picker,"check-strictly":""},on:{"check-change":e.handleCheckChange},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.node,s=t.data;return a("div",{staticClass:"custom-tree-item"},[a("div",{staticClass:"flex-1 extendLable"},[1===s.type?a("span",{staticStyle:{color:"#67c23a"}},[a("i",{staticClass:"el-icon-medal"})]):e._e(),a("span",{class:{source:1===s.type},staticStyle:{"margin-right":"20px"}},[e._v(" "+e._s(s.name)+" ")]),1===s.type?a("el-tag",{attrs:{size:"mini",type:e.typeColor[s.method]}},[a("i",{staticClass:"el-icon-position"}),e._v(" "+e._s(s.method.toUpperCase())+" ")]):e._e(),a("el-tag",{attrs:{size:"mini",type:"info"}},[0===s.type?a("i",{staticClass:"el-icon-link"}):e._e(),e._v(" "+e._s(0===s.type?s.route:s.url)+" ")])],1),e.picker?a("span",{staticClass:"extendGroup"},[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return t.stopPropagation(),e.handleCheckChange(s,!r.checked,!0)}}},[e._v(" 批量选择 ")])],1):a("span",{staticClass:"extendGroup"},[a("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.resource.edit,expression:"resource.edit"}],attrs:{size:"small",type:"text"},on:{click:function(t){return t.stopPropagation(),e.$emit("edit",s)}}},[e._v(" 编辑 ")]),0===s.type?a("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.resource.add,expression:"resource.add"}],attrs:{size:"small",type:"text"},on:{click:function(t){return t.stopPropagation(),e.$emit("append",s)}}},[e._v(" 添加子菜单 ")]):e._e(),0===s.type?a("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.resource.add,expression:"resource.add"}],attrs:{size:"small",type:"text"},on:{click:function(t){return t.stopPropagation(),e.$emit("add-resource",s)}}},[e._v(" 添加资源 ")]):e._e(),a("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.resource.remove,expression:"resource.remove"}],attrs:{size:"small",type:"text"},on:{click:function(t){return t.stopPropagation(),e.$emit("remove",s)}}},[e._v(" 删除 ")])],1)])}}])})},s=[],i=a("c7b2"),n=a("032a"),c={model:{prop:"value",event:"change"},props:{picker:{type:Boolean,required:!1,default:!1},value:{type:Array,required:!1},listdata:{type:Array,required:!1}},data:function(){return{resource:n,list:[],defaultProps:{children:"children",label:"title"},typeColor:{get:"success",post:"primary",put:"warning",delete:"danger"},trigger:null}},watch:{listdata:{handler:function(e){Array.isArray(e)&&(this.list=e)},immediate:!0},value:{handler:function(){Array.isArray(this.value)&&this.$refs.tree.setCheckedKeys(this.value)},deep:!0}},methods:{handleCheckChange:function(e,t,a){var r=this,s=this.$refs.tree.getNode(e);s&&(this.$refs.tree.setChecked(s,t),a&&Array.isArray(e.children)&&e.children.length&&e.children.forEach((function(e){r.handleCheckChange(e,t,a)}))),this.$nextTick((function(){r.trigger()}))},fetchData:function(){var e=this;this.$store.action("permission").then((function(t){e.list=Object(i["b"])(t.menus.concat(t.resources)),Array.isArray(e.value)&&e.$nextTick((function(){e.$refs.tree.setCheckedKeys(e.value)}))}))}},created:function(){this.listdata||this.fetchData()},mounted:function(){var e=this;this.trigger=Object(i["g"])((function(){var t=e.$refs.tree.getCheckedNodes();e.$emit("change",t.map((function(e){return e.id})))}))}},o=c,l=(a("e1d8"),a("2877")),u=Object(l["a"])(o,r,s,!1,null,"11de6514",null);t["default"]=u.exports},afd8:function(e,t,a){},e1d8:function(e,t,a){"use strict";a("afd8")}}]);