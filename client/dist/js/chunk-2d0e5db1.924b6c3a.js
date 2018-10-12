(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5db1"],{"95ed":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-new-account"},[n("el-form",{attrs:{inline:!0,model:t.formInline}},[n("el-form-item",{attrs:{label:"账号"}},[n("el-input",{attrs:{size:"mini",placeholder:"账号"},model:{value:t.formInline.username,callback:function(e){t.$set(t.formInline,"username",e)},expression:"formInline.username"}})],1),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{size:"mini",placeholder:"密码"},model:{value:t.formInline.password,callback:function(e){t.$set(t.formInline,"password",e)},expression:"formInline.password"}})],1),n("el-form-item",[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.addGithubAccount}},[t._v("添加\n            ")])],1)],1),n("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"","tooltip-effect":"dark",data:t.accounts}},[n("el-table-column",{attrs:{prop:"username",label:"账号"}}),n("el-table-column",{attrs:{prop:"mask_password",label:"密码"}}),n("el-table-column",{attrs:{prop:"rate_limit",label:"配额剩余"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("el-tooltip",{attrs:{effect:"dark",content:"剩余"+t.row.rate_remaining,placement:"top"}},[n("el-progress",{attrs:{percentage:parseInt(t.row.rate_remaining/t.row.rate_limit*100)}})],1)]}}])}),n("el-table-column",{attrs:{label:"操作",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"danger",round:""},on:{click:function(n){t.deleteGithubAccount(e.row)}}},[t._v("删除\n                ")])]}}])})],1)],1)},s=[],i=(n("5a09"),n("3a0f"),n("a3a3"),n("4d0b"),{name:"Github",data:function(){return{accounts:[],formInline:{}}},methods:{addGithubAccount:function(){var t=this;this.formInline.hasOwnProperty("password")||this.formInline.hasOwnProperty("username")?this.axios.post(this.api.settingGithub,this.formInline).then(function(e){201===e.data.status?(t.$message.success(e.data.msg),t.accounts=e.data.result):t.$message.error(e.data.msg)}).catch(function(e){t.$message.error(e.toString())}):this.$message.error("请输入用户名密码")},deleteGithubAccount:function(t){var e=this;this.axios.delete(this.api.settingGithub,{params:{username:t.username}}).then(function(t){e.$message.success(t.data.msg),e.accounts=t.data.result}).catch(function(t){e.$message.error(t.toString())})},fetchGithubAccount:function(){var t=this;this.axios.get(this.api.settingGithub).then(function(e){t.accounts=e.data.result}).catch(function(e){t.$message.error(e.toString())})}},created:function(){this.fetchGithubAccount()}}),r=i,o=n("048f"),l=Object(o["a"])(r,a,s,!1,null,null,null);l.options.__file="Github.vue";e["default"]=l.exports}}]);