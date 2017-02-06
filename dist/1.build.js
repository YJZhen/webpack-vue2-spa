webpackJsonp([1],{

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(6)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(7),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Volumes/resources/projects/webFram/study/Vue/webpack-vue2-spa/src/views/home.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-dbaad48e", Component.options)
	  } else {
	    hotAPI.reload("data-v-dbaad48e", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h1', [_vm._v("HOME")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-dbaad48e", module.exports)
	  }
	}

/***/ }

});