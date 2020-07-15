/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ \"./src/js/modals/index.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/js/tabs/index.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n\n    Object(_modals__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        modalWindow: '.menu-modal',\n        modalClose: '.close-menu',\n        modalOpen: '.header__hamburger',\n        animationIn: 'showUp',\n        animationOut: 'showDown'\n    });\n\n    Object(_modals__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        modalOpen: '.signIn',\n        modalClose: '.closeSignIn',\n        modalWindow: '.Sign-In',\n        animationIn: 'fadeFromUp',\n        animationOut: 'fadeIntoUp'\n    });\n\n    Object(_modals__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        modalWindow: '.Sign-Up',\n        modalOpen: '.signUp',\n        modalClose: '.closeSignUp',\n        animationIn: 'fadeOutLeft',\n        animationOut: 'fadeInLeft'\n    });\n\n    Object(_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.services__block', '.services__tab', '.services__tab-content', 'active');\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modals/index.js":
/*!********************************!*\
  !*** ./src/js/modals/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ \"./src/js/modals/modals.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_modals__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/js/modals/index.js?");

/***/ }),

/***/ "./src/js/modals/modals.js":
/*!*********************************!*\
  !*** ./src/js/modals/modals.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst modal = ({modalWindow, modalClose, modalOpen, animationIn, animationOut} = {}) => {\n\n    const windowModal = document.querySelector(modalWindow),\n        btnModalOpen = document.querySelector(modalOpen),\n        btnModalClose = document.querySelector(modalClose);\n\n    btnModalOpen.addEventListener('click', () => {\n        windowModal.style.display = 'block';\n        windowModal.classList.remove(animationOut);\n        windowModal.classList.add(animationIn);\n    });\n\n    btnModalClose.addEventListener('click', () => {\n        windowModal.classList.remove(animationIn);\n        windowModal.classList.add(animationOut);\n        setTimeout(() => {\n            windowModal.style.display = 'none';\n        }, 1000);\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n//# sourceURL=webpack:///./src/js/modals/modals.js?");

/***/ }),

/***/ "./src/js/tabs/index.js":
/*!******************************!*\
  !*** ./src/js/tabs/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ \"./src/js/tabs/tabs.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_tabs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/js/tabs/index.js?");

/***/ }),

/***/ "./src/js/tabs/tabs.js":
/*!*****************************!*\
  !*** ./src/js/tabs/tabs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst tabs = (tabHeader, tabItems, tabContent, classActive) => {\n    const header = document.querySelector(tabHeader),\n        items = document.querySelectorAll(tabItems),\n        content = document.querySelectorAll(tabContent);\n\n    const hideTabContent = () => {\n        items.forEach(item => {\n            item.classList.remove(classActive);\n        });\n        content.forEach(item => {\n            item.style.display = \"none\";\n            item.classList.remove('tabShowUp');\n        });\n    };\n\n    const showTabContent = (i = 0) => {\n        items[i].classList.add(classActive);\n        content[i].style.display = \"block\";\n        content[i].classList.add('tabShowUp');\n    };\n\n    hideTabContent();\n    showTabContent();\n\n    header.addEventListener('click', (e) => {\n        const target = e.target;\n        if (target && target.classList.contains(tabItems.replace(/\\./, \"\")) || target.parentNode.classList.contains(tabItems.replace(/\\./, \"\"))) {\n            items.forEach((item, i) => {\n                if (target == item || target.parentNode == item) {\n                    hideTabContent();\n                    showTabContent(i);\n                }\n            });\n        }\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabs);\n\n//# sourceURL=webpack:///./src/js/tabs/tabs.js?");

/***/ })

/******/ });