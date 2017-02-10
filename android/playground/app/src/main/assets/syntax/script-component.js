/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(326)
	var __weex_script__ = __webpack_require__(327)

	__weex_define__('@weex-component/2a5ba7e55afcba45accf15b3179f0016', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})

	__weex_bootstrap__('@weex-component/2a5ba7e55afcba45accf15b3179f0016',undefined,undefined)

/***/ },

/***/ 326:
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "children": [
	    {
	      "type": "cell",
	      "append": "tree",
	      "repeat": {
	        "expression": function () {return this.items},
	        "value": "item"
	      },
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.item.title}
	          }
	        },
	        {
	          "type": "sub",
	          "attr": {
	            "title": "a"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(328);
	module.exports = {
	  data: function () {return {
	    items: [{ title: 'A', url: 'a' }, { title: 'B', url: 'b' }, { title: 'C', url: 'c' }]
	  }}
	};}
	/* generated by weex-loader */


/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(329)
	var __weex_style__ = __webpack_require__(330)
	var __weex_script__ = __webpack_require__(331)

	__weex_define__('@weex-component/sub', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },

/***/ 329:
/***/ function(module, exports) {

	module.exports = {
	  "type": "text",
	  "classList": [
	    "item-txt"
	  ],
	  "attr": {
	    "value": function () {return this.title}
	  }
	}

/***/ },

/***/ 330:
/***/ function(module, exports) {

	module.exports = {
	  "item-txt": {
	    "fontSize": 48,
	    "color": "#555555"
	  }
	}

/***/ },

/***/ 331:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        title: ''
	    }}
	};}
	/* generated by weex-loader */


/***/ }

/******/ });