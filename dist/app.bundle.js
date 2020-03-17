/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./img/achievements/scenic-view-of-mountains-during-dawn-1266810.jpg */ \"./src/img/achievements/scenic-view-of-mountains-during-dawn-1266810.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./img/reasons/undraw_developer_activity_bv83.svg */ \"./src/img/reasons/undraw_developer_activity_bv83.svg\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./img/reasons/undraw_reviewed_docs_neeb.svg */ \"./src/img/reasons/undraw_reviewed_docs_neeb.svg\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./img/reasons/undraw_programming_2svr.svg */ \"./src/img/reasons/undraw_programming_2svr.svg\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ./img/reasons/undraw_Mobile_application_mr4r.svg */ \"./src/img/reasons/undraw_Mobile_application_mr4r.svg\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ./img/reasons/undraw_creative_thinking_b3bc.svg */ \"./src/img/reasons/undraw_creative_thinking_b3bc.svg\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ./img/reasons/undraw_team_spirit_hrr4.svg */ \"./src/img/reasons/undraw_team_spirit_hrr4.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Lato:700i|Raleway&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\n// Module\nexports.push([module.i, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\n\\n/* Clean up css */\\n\\n:root {\\n    --hl-clr: #38D39F;\\n    --text-pry: #092545;\\n    --text-sec: #fff;\\n    --act-clr: #ff9057;\\n    --bg-pry: #fff;\\n    --bg-sec: #e0ebe8;\\n}\\n\\nbody {\\n    overflow-x: hidden;\\n}\\n\\nbutton {\\n    cursor: pointer;\\n    outline: transparent;\\n}\\n\\nli {\\n    list-style: none;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4 {\\n    text-align: center;\\n}\\n\\n\\n/* \\nColors\\n     #50c879  #ff7e66\\n#009f6b 007f56\\naccent Complimentary:#45cea2 #ff8f51\\nef5fff0 F2854e\\nsham #45cea2\\nsean #45b29a\\n*/\\n\\n\\n/* Nav bar */\\n\\n.nav {\\n    display: flex;\\n    padding: 1rem;\\n    font-family: Lato, sans-serif;\\n    background: linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.1) 100%);\\n    position: fixed;\\n    width: 100vw;\\n    top: 0;\\n    left: 0;\\n    color: var(--text-sec);\\n    z-index: 1000;\\n    font-weight: 500;\\n    transition: top 0.4s;\\n}\\n\\n.nav-ul {\\n    display: flex;\\n    justify-content: flex-end;\\n    margin: auto;\\n    padding-left: 10rem;\\n}\\n\\n.nav-logo {\\n    font-size: 1.7rem;\\n    font-style: italic;\\n    padding: 1.6rem;\\n    border: 1px solid var(--text-pry);\\n    border-radius: 50%;\\n    text-align: center;\\n    margin: 0.5rem;\\n}\\n\\n.nav-link {\\n    list-style-type: none;\\n    margin: 1rem;\\n}\\n\\n.nav-link>a {\\n    font-family: Lato, sans-serif;\\n    text-decoration: none;\\n    padding: 0 0.6rem;\\n    border-radius: 18px;\\n    font-size: 1.7rem;\\n    font-style: oblique;\\n    font-weight: 600;\\n    letter-spacing: 2px;\\n    line-height: 24px;\\n    align-self: center;\\n    color: var(--text-sec);\\n    /* Linear gradient hack */\\n    background-image: linear-gradient(90deg, transparent 50%, #6DB357 50%);\\n    background-size: 200%;\\n    transition: background-position 0.3s linear;\\n}\\n\\n.nav-link>a:hover {\\n    /* Push the background a 100% of it's width */\\n    background-position: -100%;\\n}\\n\\n\\n/* Hero section */\\n\\n.hero {\\n    /* background: url(\\\"./img/hero/a-water-falls-in-a-mountain-forest-2892007.jpg\\\"); */\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    /* Be sure to change this */\\n    height: 100vh;\\n    width: 100vw;\\n    text-align: center;\\n    color: var(--text-sec);\\n    font-family: 'Lato', sans-serif;\\n    font-style: italic;\\n    padding-top: 4rem;\\n}\\n\\n.time {\\n    font-size: 5rem;\\n    font-weight: 600;\\n}\\n\\n.greeting {\\n    font-style: normal;\\n    font-weight: 600;\\n    letter-spacing: 4px;\\n    line-height: 58px;\\n    font-family: 'Lato', sans-serif;\\n    font-style: italic;\\n}\\n\\n#description {\\n    padding: 90px;\\n    font-style: normal;\\n    font-weight: 600;\\n    letter-spacing: 2px;\\n    line-height: 24px;\\n    font-family: 'Lato', sans-serif;\\n    font-style: italic;\\n}\\n\\n\\n/* Blinking cursor */\\n\\n.txt-type>.txt {\\n    margin: 0 auto;\\n    border-right: 0.25rem solid #fff;\\n    animation: cursor 1s steps(70) infinite\\n}\\n\\n@keyframes cursor {\\n    0% {\\n        border-color: rgba(255, 255, 255, 0.143)\\n    }\\n    20% {\\n        border-color: #fff\\n    }\\n    50% {\\n        border-color: #fff\\n    }\\n    70% {\\n        border-color: #fff\\n    }\\n    200% {\\n        border-color: #fff\\n    }\\n}\\n\\n\\n/* Showcase */\\n\\n\\n/* The smaller image of all device pairs are absolutely fixed, as their parents (Cards) are relative */\\n\\n.cards-container {\\n    display: flex;\\n    flex-direction: column;\\n    margin-top: 1rem;\\n    padding-top: 0;\\n}\\n\\n.cards {\\n    /* margin-top: 1rem; */\\n    display: flex;\\n    height: 110vh;\\n    width: 100vw;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.cards-one {\\n    background: linear-gradient(89deg, #ff5edf 0%, #04c8de 80%);\\n}\\n\\n.cards-main {\\n    position: relative;\\n    display: flex;\\n    margin: 0 5em;\\n}\\n\\n.card-pic-one {\\n    /*   padding: 0 2px 0 2px; */\\n    height: 38rem;\\n    width: 38rem;\\n}\\n\\n.card-pic-two {\\n    position: absolute;\\n    left: 28rem;\\n    top: 11.8rem;\\n    height: 20rem;\\n    width: 20rem;\\n}\\n\\n.cards-two {\\n    background: linear-gradient(95deg, #3B6C77 0%, #6DB352 70%);\\n}\\n\\n.card-pic-three {\\n    height: 40rem;\\n    width: 40rem;\\n}\\n\\n.card-pic-four {\\n    position: absolute;\\n    top: 13rem;\\n    left: 25rem;\\n    height: 20rem;\\n    width: 20rem;\\n}\\n\\n.cards-three {\\n    background: linear-gradient(90deg, #9CD4ED 0%, #837673 70%);\\n}\\n\\n.card-pic-five {\\n    height: 40rem;\\n    width: 40rem;\\n}\\n\\n.card-pic-six {\\n    position: absolute;\\n    top: 12.5rem;\\n    left: 28rem;\\n    height: 22rem;\\n    width: 22rem;\\n}\\n\\n.cards-four {\\n    background: linear-gradient(90deg, #7FB862 30%, #82C0DD 90%);\\n}\\n\\n.card-pic-seven {\\n    height: 45rem;\\n    width: 45rem;\\n}\\n\\n.card-pic-eight {\\n    position: absolute;\\n    top: 17rem;\\n    left: 30rem;\\n    height: 20rem;\\n    width: 20rem;\\n}\\n\\n.cards-five {\\n    background: linear-gradient(90deg, #5DA2B7 20%, #697D8A 90%);\\n}\\n\\n.card-pic-nine {\\n    height: 45rem;\\n    width: 45rem;\\n}\\n\\n\\n/* .card-pic-ten {\\n    height: 26rem;\\n    width: 26rem;\\n    position: absolute;\\n    top: 9.5rem;\\n    left: 27rem;\\n} */\\n\\n.cards-info {\\n    margin: 0 4rem;\\n    padding: 1rem;\\n    color: var(--text-sec);\\n    width: 20rem;\\n    min-height: 22rem;\\n    border-radius: 18px;\\n    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);\\n    text-align: center;\\n    font-size: 1.1rem;\\n}\\n\\n.cards-info>h1 {\\n    margin: 1rem;\\n    padding: 0.5rem;\\n}\\n\\n.info-icons {\\n    margin: 2rem 1rem;\\n    height: 3rem;\\n    width: 3rem;\\n    transition: 0.5s ease-in-out;\\n}\\n\\n.info-icons:hover {\\n    transform: scale(1.2);\\n    transition: all 0.5s ease-in-out;\\n}\\n\\n\\n/* Achievements */\\n\\n\\n/* The timeline container */\\n\\n.timeline {\\n    padding: 8rem 3rem;\\n    position: relative;\\n    margin: 2rem auto;\\n    max-width: 100vw;\\n    /* background: linear-gradient(90deg, #19529C 50%, #ee9a14 50%); */\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center / cover;\\n}\\n\\n\\n/* the vertical ruler */\\n\\n.timeline::after {\\n    content: '';\\n    position: absolute;\\n    width: 6px;\\n    background-color: #fff;\\n    top: 0;\\n    bottom: 0;\\n    left: 50%;\\n    margin-left: -3px;\\n}\\n\\n\\n/* Container around the content */\\n\\n.container {\\n    padding: 10px 50px;\\n    position: relative;\\n    background-color: inherit;\\n    width: 50%;\\n}\\n\\n\\n/*  The circles on the timeline */\\n\\n.container::after {\\n    content: '';\\n    position: absolute;\\n    width: 25px;\\n    height: 25px;\\n    right: -17px;\\n    background-color: #61d4e8;\\n    border: 4px solid #2da1e7;\\n    top: 15px;\\n    border-radius: 50%;\\n    z-index: 1;\\n}\\n\\n\\n/* Content on the left */\\n\\n.left {\\n    left: 0;\\n}\\n\\n\\n/* Content on the right */\\n\\n.right {\\n    left: 50%;\\n}\\n\\n\\n/* Arrows for the left containers (facing right) */\\n\\n.left::before {\\n    content: '';\\n    height: 0;\\n    position: absolute;\\n    top: 22px;\\n    width: 0;\\n    z-index: 1;\\n    right: 30px;\\n    border: medium solid #fff;\\n    border-width: 10px 0 10px 10px;\\n    border-color: transparent transparent transparent #fff;\\n}\\n\\n\\n/* Arrows for the right containers (facing left) */\\n\\n.right::before {\\n    content: '';\\n    height: 0;\\n    position: absolute;\\n    top: 22px;\\n    width: 0;\\n    z-index: 1;\\n    left: 30px;\\n    border: medium solid #fff;\\n    border-width: 10px 10px 10px 0;\\n    border-color: transparent #fff transparent transparent;\\n}\\n\\n\\n/* Fix circles to the right */\\n\\n.right::after {\\n    left: -16px;\\n}\\n\\n\\n/* The actual content */\\n\\n.content {\\n    padding: 20px 30px;\\n    background-color: var(--hl-clr);\\n    color: var(--text-sec);\\n    position: relative;\\n    border-radius: 18px;\\n    text-align: center;\\n    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);\\n    min-width: 5em;\\n    z-index: 2;\\n}\\n\\n.content>h3 {\\n    padding: 0.2rem;\\n}\\n\\n.content>p {\\n    padding-bottom: 0.3rem;\\n    font-size: 1.1rem;\\n}\\n\\n.content>a {\\n    text-decoration: none;\\n    color: var(--text-sec);\\n    font-style: oblique;\\n    background-image: linear-gradient(90deg, transparent 50%, #ff9057 50%);\\n    background-size: 200%;\\n    transition: background-position 0.3s linear;\\n    border-radius: 18px;\\n    padding: 0 0.2rem;\\n    font-size: 1.1rem;\\n}\\n\\n.content>a:hover {\\n    background-position: -100%;\\n}\\n\\n\\n/* Media queries for responsiveness */\\n\\n@media screen and (max-with: 600px) {\\n    /* Place the timeline to the left */\\n    timeline::after {\\n        left: 31px;\\n    }\\n    /* Full width containers */\\n    .container {\\n        width: 100%;\\n        padding-left: 70px;\\n        padding-right: 25px;\\n    }\\n    /* Make sure all arrows point leftwards */\\n    .left::after,\\n    .right::after {\\n        left: 15px\\n    }\\n    /* Make sure all circles are pointing leftwards */\\n    .container::before {\\n        left: 60px;\\n        border: medium solid #fff;\\n        border-width: 10px 10px 10px 0;\\n        border-color: transparent #fff transparent transparent;\\n    }\\n    /* Make sure all circles are at the same spot */\\n    .left::after,\\n    .right::after {\\n        left: 15px;\\n    }\\n    /* Make all right containers behave like left ones */\\n    .right {\\n        left: 0%;\\n    }\\n}\\n\\n\\n/* Why me  */\\n\\n.reasons {\\n    margin-top: 4rem;\\n    padding-top: 7rem;\\n    width: 100vw;\\n    min-height: 100vh;\\n    display: flex;\\n    flex-wrap: wrap;\\n    background: linear-gradient(90deg, #38D39F 20%, #FF8344 90%);\\n    justify-content: space-around;\\n}\\n\\n.reasons-card {\\n    width: 20rem;\\n    height: 26.5rem;\\n    border-radius: 18px;\\n    background: #fff;\\n    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);\\n    text-align: center;\\n    margin: 2rem;\\n    cursor: pointer;\\n    color: var(--text-pry);\\n    transition: 0.3s ease\\n}\\n\\n.reasons-card:hover {\\n    transform: scale(1.07);\\n    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);\\n    transition: transform 0.3s ease;\\n}\\n\\n\\n/* height of container */\\n\\n.reasons-card-img {\\n    height: 50%;\\n}\\n\\n.reasons-card-img-one {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat center center / cover;\\n}\\n\\n.reasons-card-img-two {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat center center / cover;\\n}\\n\\n.reasons-card-img-three {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat center center / cover;\\n}\\n\\n.reasons-card-img-four {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") no-repeat center center / cover;\\n}\\n\\n.reasons-card-img-five {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") no-repeat center center / cover;\\n}\\n\\n.reasons-card-img-six {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") no-repeat center center / cover;\\n}\\n\\n.reasons-card-text {\\n    margin: 0.5rem;\\n    font-family: 'Raleway';\\n    font-size: 0.95rem;\\n    height: 40%;\\n}\\n\\n.reasons-card-text>h2 {\\n    font-family: Lato sans-serif;\\n}\\n\\n.reasons-card-text>p {\\n    padding: 2rem;\\n    font-size: 1rem;\\n    letter-spacing: 2px;\\n}\\n\\n.reasons-footer {\\n    height: 10%;\\n    border-bottom-left-radius: 18px;\\n    border-bottom-right-radius: 18px;\\n}\\n\\n.reasons-footer-odd {\\n    background: #38D39F;\\n}\\n\\n.reasons-footer-even {\\n    background: #FF8344;\\n}\\n\\n\\n/* Contact Section */\\n\\n.contact {\\n    display: flex;\\n    flex-direction: column;\\n    width: 100vw;\\n    min-height: 100vh;\\n    margin-top: 4rem;\\n    align-items: center;\\n    color: var(--text-pry);\\n    padding-top: 8rem;\\n}\\n\\n.hiring {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 80vw;\\n    height: 15rem;\\n    border-radius: 18px;\\n    padding: 1rem;\\n    background: #fff;\\n    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);\\n    text-align: center;\\n}\\n\\n.hiring>h2 {\\n    font-weight: 200\\n}\\n\\n.hiring-btn {\\n    padding: 1rem;\\n    margin: 2rem;\\n    background: var(--hl-clr);\\n    color: var(--text-sec);\\n    font-size: 1.5rem;\\n    font-weight: 600;\\n    border: 1px solid var(--hl-clr);\\n    border-radius: 18px;\\n}\\n\\n.hiring-icon {\\n    height: 3rem;\\n    width: 3rem;\\n    background: var(--text-sec);\\n    border-radius: 20%;\\n    vertical-align: middle;\\n}\\n\\n.message>h2 {\\n    margin-top: 2rem;\\n    font-weight: 200;\\n    padding: 1rem;\\n}\\n\\n.message-list {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: space-around;\\n}\\n\\n.message-list>li {\\n    margin: 2rem;\\n}\\n\\n.message-list>li>a>button {\\n    padding: 0.5rem;\\n    background-color: var(--hl-clr);\\n    border-radius: 18px;\\n    font-size: 1rem;\\n    font-weight: 600;\\n    color: var(--text-sec);\\n    border: 1px solid var(--hl-clr);\\n}\\n\\n.message-list>li>button {\\n    padding: 0.5rem;\\n    background-color: var(--hl-clr);\\n    border-radius: 18px;\\n    font-size: 1rem;\\n    font-weight: 600;\\n    color: var(--text-sec);\\n    border: 1px solid var(--hl-clr);\\n}\\n\\n.message-icon {\\n    height: 2rem;\\n    width: 2rem;\\n    vertical-align: middle;\\n}\\n\\n.message-btn {\\n    transition: 0.5s ease;\\n}\\n\\n.message-btn:hover {\\n    background-color: var(--text-pry);\\n}\\n\\n.flash-icon {\\n    height: 3rem;\\n    width: 3rem;\\n    vertical-align: middle;\\n}\\n\\n.down-icon {\\n    height: 2rem;\\n    width: 2rem;\\n    vertical-align: middle;\\n}\\n\\n.socialize>h2 {\\n    font-weight: 300\\n}\\n\\n.social {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n    padding: 2rem;\\n}\\n\\n.social-li>a {\\n    text-decoration: none;\\n    color: var(--text-pry);\\n}\\n\\n.social-icon {\\n    margin: 2rem;\\n    height: 3rem;\\n    width: 3rem;\\n    transition: 0.5s ease;\\n}\\n\\n.social-icon:hover {\\n    transform: scale(1.4);\\n    transition: all 0.5s ease;\\n}\\n\\n.social-txt {\\n    padding-left: 2rem;\\n}\\n\\n.footer {\\n    color: var(--text-sec);\\n    min-height: 20rem;\\n    width: 100vw;\\n    background: linear-gradient(90deg, #38d39f 30%, rgba(108, 179, 87, 0.711) 70%);\\n    text-align: center;\\n    font-weight: 400;\\n    font-size: 1.2rem;\\n    padding: 1rem;\\n}\\n\\n.footer>p {\\n    padding: 1.3rem;\\n}\\n\\n.footer>p>a {\\n    text-decoration: none;\\n    color: var(--text-sec);\\n    font-style: oblique;\\n    font-weight: 700;\\n    background-image: linear-gradient(90deg, transparent 50%, #6DB357 50%);\\n    background-size: 200%;\\n    transition: background-position 0.3s linear;\\n    border-radius: 18px;\\n    padding: 0 0.2rem;\\n}\\n\\n.footer>p>a:hover {\\n    background-position: -100%;\\n}\\n\\n.copy-icon {\\n    height: 2rem;\\n    width: 2rem;\\n    vertical-align: middle;\\n}\\n\\n\\n/* #B8EBD0\\nsvg green #38D39F\\n\\n\\n#3B6C77\\n\\n#0D0A09\\n#9CD4ED\\n#7FB862\\n#82C0DD\\n#5DA2B7\\n#F2CDD2\\n*/\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/dynamicHero.js":
/*!****************************!*\
  !*** ./src/dynamicHero.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Dynamic landing page\n// All image files\nconst images = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\nconst time = document.querySelector('.time');\nconst hero = document.querySelector('.hero');\nconst greetingJs = document.querySelector('.greeting-js'); // Get time\n\nfunction getTime() {\n  let today = new Date(),\n      hour = today.getHours(),\n      minutes = today.getMinutes(); // Set Am or Pm\n\n  const amPm = hour >= 12 ? ' PM' : ' AM'; // 12 hour format\n\n  hour = hour % 12 || 12; // Display time \n\n  time.innerHTML = `${hour}<span>:</span>${addZero(minutes)}${amPm}`; // Update time every second even in bg\n\n  setTimeout(getTime, 1000);\n} // add 0 to minutes values below 10\n// n is minutes\n\n\nfunction addZero(n) {\n  return (parseInt(n, 10) < 10 ? '0' : '') + n;\n} // Set dynamic background\n\n\nfunction setBg() {\n  console.log(' I am Working');\n  let today = new Date(); // let today = new Date(),\n\n  hour = today.getHours(); // Randomize bg\n  // morning\n\n  let morningArray = ['sunset-view-of-mountains-733100.jpg', 'purple-petal-flower-surrounded-by-green-plants-during-66288.jpg', 'time-lapse-photography-of-waterfalls-during-sunset-210186.jpg', 'two-cargo-ships-sailing-near-city-2144905.jpg'];\n  let morningBg = morningArray[Math.floor(Math.random() * morningArray.length)];\n  let morningPath = '../src/img/hero/';\n  let morning = morningPath + morningBg;\n  console.log(morning); // afternoon\n\n  let afternoonArray = ['empty-dining-tables-and-chairs-1579739.jpg', 'brown-and-green-mountain-view-photo-842711.jpg', 'photo-of-keyboard-near-mouse-3184460.jpg', 'america-arid-bushes-california-221148.jpg'];\n  let afternoonBg = afternoonArray[Math.floor(Math.random() * afternoonArray.length)];\n  let afternoonPath = '../src/img/hero/';\n  let afternoon = afternoonPath + afternoonBg; // evening\n\n  let eveningArray = ['twisted-building-during-nighttime-1470405  s.jpg', 'beautiful-beauty-blue-bright-414612.jpg', 'landscape-photo-of-mountain-with-polar-lights-1434608.jpg', 'photo-of-toronto-cityscape-at-night-2478248.jpg'];\n  let eveningBg = eveningArray[Math.floor(Math.random() * eveningArray.length)];\n  let eveningPath = '../src/img/hero/';\n  let evening = eveningPath + eveningBg; // Show bg\n  //morning\n\n  if (hour < 12) {\n    hero.style.background = `url(${morning}) no-repeat center center / cover`;\n    greetingJs.textContent = 'Hi Good Morning,'; // afternoon\n  } else if (hour < 18) {\n    hero.style.background = `url(${afternoon}) no-repeat center center / cover`;\n    greetingJs.textContent = 'Hi Good Afternoon,';\n  } // evening and night\n  else {\n      hero.style.background = `url(${evening}) no-repeat center center / cover`;\n      greetingJs.textContent = 'Hi Good Evening,';\n    }\n}\n\nconsole.log(images); // Run functions\n\ngetTime();\naddZero();\nsetBg();\n\n//# sourceURL=webpack:///./src/dynamicHero.js?");

/***/ }),

/***/ "./src/eyes.js":
/*!*********************!*\
  !*** ./src/eyes.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Eyes follow mouse\nconst balls = document.getElementsByClassName('ball');\n\ndocument.onmousemove = function () {\n  // event.clientX => get the horizontal coordinates of the mouse\n  // event.clientY => get the vertical coordinates of the mouse\n  // window.innerHeight => get the browser height\n  // window.innerWidth => get the browser width\n  let x = event.clientX * 100 / window.innerWidth + '%';\n  let y = event.clientY * 100 / window.innerHeight + '%';\n\n  for (let i = 0; i < balls.length; i++) {\n    balls[i].style.left = x;\n    balls[i].style.top = y;\n    balls[i].style.transform = 'translate(-\"+x+\", -\"+y+\")';\n  }\n};\n\n//# sourceURL=webpack:///./src/eyes.js?");

/***/ }),

/***/ "./src/hover.js":
/*!**********************!*\
  !*** ./src/hover.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// node lists\nconst icons = document.querySelectorAll('.social-icon'); // Event delegation approach\n\ndocument.addEventListener('mouseover', function (event) {\n  if (event.target.matches('.social-icon')) {\n    console.log('Yaaay I work see?');\n  }\n}, false); //  Regular event approach\n// icons.forEach((icon) => icon.addEventListener('mouseover', e => console.log('Yaaay I work see?')))\n\n/* document.addEventListener('click', function (event) {\n\n    if (event.target.matches('.modal-open')) {\n        // Run your code to open a modal\n    }\n\n    if (event.target.matches('.close')) {\n        // Run your code to close a modal\n    }\n\n}, false); */\n\n//# sourceURL=webpack:///./src/hover.js?");

/***/ }),

/***/ "./src/img/achievements/scenic-view-of-mountains-during-dawn-1266810.jpg":
/*!*******************************************************************************!*\
  !*** ./src/img/achievements/scenic-view-of-mountains-during-dawn-1266810.jpg ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"769a1486995da6940d7bbe98d97800d4.jpg\";\n\n//# sourceURL=webpack:///./src/img/achievements/scenic-view-of-mountains-during-dawn-1266810.jpg?");

/***/ }),

/***/ "./src/img/contact/021-facebook.svg":
/*!******************************************!*\
  !*** ./src/img/contact/021-facebook.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"06468580303d77d9afd2801a2ca80086.svg\";\n\n//# sourceURL=webpack:///./src/img/contact/021-facebook.svg?");

/***/ }),

/***/ "./src/img/contact/025-instagram.svg":
/*!*******************************************!*\
  !*** ./src/img/contact/025-instagram.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b050376405aaf7b4ca36ca34149f9b30.svg\";\n\n//# sourceURL=webpack:///./src/img/contact/025-instagram.svg?");

/***/ }),

/***/ "./src/img/contact/038-github.svg":
/*!****************************************!*\
  !*** ./src/img/contact/038-github.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"67910a24ef067bf5dc2400ab841889c4.svg\";\n\n//# sourceURL=webpack:///./src/img/contact/038-github.svg?");

/***/ }),

/***/ "./src/img/contact/043-twitter.svg":
/*!*****************************************!*\
  !*** ./src/img/contact/043-twitter.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"39ece94a83be02b99a7a4c88c2ca322f.svg\";\n\n//# sourceURL=webpack:///./src/img/contact/043-twitter.svg?");

/***/ }),

/***/ "./src/img/contact/045-linkedin.svg":
/*!******************************************!*\
  !*** ./src/img/contact/045-linkedin.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"73e8a8ac6fa479ec19e5fe0cb7a81c01.svg\";\n\n//# sourceURL=webpack:///./src/img/contact/045-linkedin.svg?");

/***/ }),

/***/ "./src/img/contact/048-arrow.svg":
/*!***************************************!*\
  !*** ./src/img/contact/048-arrow.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8920a8920d94a3b3fcbd9f5e3437b437.svg\";\n\n//# sourceURL=webpack:///./src/img/contact/048-arrow.svg?");

/***/ }),

/***/ "./src/img/contact/copyright.svg":
/*!***************************************!*\
  !*** ./src/img/contact/copyright.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8dec534e0fd6c4e444756d94d198dc37.svg\";\n\n//# sourceURL=webpack:///./src/img/contact/copyright.svg?");

/***/ }),

/***/ "./src/img/contact/download.svg":
/*!**************************************!*\
  !*** ./src/img/contact/download.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"35e8e7c4403c474c08f66789ecfea79d.svg\";\n\n//# sourceURL=webpack:///./src/img/contact/download.svg?");

/***/ }),

/***/ "./src/img/contact/email.svg":
/*!***********************************!*\
  !*** ./src/img/contact/email.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f1269b0bf1d36606cee0a3e6e8f4d47a.svg\";\n\n//# sourceURL=webpack:///./src/img/contact/email.svg?");

/***/ }),

/***/ "./src/img/contact/flash.svg":
/*!***********************************!*\
  !*** ./src/img/contact/flash.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"67bc8a5855e97fce96e9066aace5ef38.svg\";\n\n//# sourceURL=webpack:///./src/img/contact/flash.svg?");

/***/ }),

/***/ "./src/img/contact/icons8-gmail.svg":
/*!******************************************!*\
  !*** ./src/img/contact/icons8-gmail.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"86cc47b613057859dfff4372f1dd8cb7.svg\";\n\n//# sourceURL=webpack:///./src/img/contact/icons8-gmail.svg?");

/***/ }),

/***/ "./src/img/contact/phone.svg":
/*!***********************************!*\
  !*** ./src/img/contact/phone.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f71e3a611ad36a30dd1d9d6fed157675.svg\";\n\n//# sourceURL=webpack:///./src/img/contact/phone.svg?");

/***/ }),

/***/ "./src/img/contact/whatsapp.svg":
/*!**************************************!*\
  !*** ./src/img/contact/whatsapp.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d89731b4869a0f0b9d69bf86146f8be2.svg\";\n\n//# sourceURL=webpack:///./src/img/contact/whatsapp.svg?");

/***/ }),

/***/ "./src/img/hero sync recursive \\.(png|jpe?g|svg)$":
/*!**********************************************!*\
  !*** ./src/img/hero sync \.(png|jpe?g|svg)$ ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./america-arid-bushes-california-221148 m.jpg\": \"./src/img/hero/america-arid-bushes-california-221148 m.jpg\",\n\t\"./america-arid-bushes-california-221148 s.jpg\": \"./src/img/hero/america-arid-bushes-california-221148 s.jpg\",\n\t\"./america-arid-bushes-california-221148.jpg\": \"./src/img/hero/america-arid-bushes-california-221148.jpg\",\n\t\"./beautiful-beauty-blue-bright-414612  s.jpg\": \"./src/img/hero/beautiful-beauty-blue-bright-414612  s.jpg\",\n\t\"./beautiful-beauty-blue-bright-414612 m.jpg\": \"./src/img/hero/beautiful-beauty-blue-bright-414612 m.jpg\",\n\t\"./beautiful-beauty-blue-bright-414612.jpg\": \"./src/img/hero/beautiful-beauty-blue-bright-414612.jpg\",\n\t\"./brown-and-green-mountain-view-photo-842711  m.jpg\": \"./src/img/hero/brown-and-green-mountain-view-photo-842711  m.jpg\",\n\t\"./brown-and-green-mountain-view-photo-842711  s.jpg\": \"./src/img/hero/brown-and-green-mountain-view-photo-842711  s.jpg\",\n\t\"./brown-and-green-mountain-view-photo-842711.jpg\": \"./src/img/hero/brown-and-green-mountain-view-photo-842711.jpg\",\n\t\"./empty-dining-tables-and-chairs-1579739 m.jpg\": \"./src/img/hero/empty-dining-tables-and-chairs-1579739 m.jpg\",\n\t\"./empty-dining-tables-and-chairs-1579739 s.jpg\": \"./src/img/hero/empty-dining-tables-and-chairs-1579739 s.jpg\",\n\t\"./empty-dining-tables-and-chairs-1579739.jpg\": \"./src/img/hero/empty-dining-tables-and-chairs-1579739.jpg\",\n\t\"./landscape-photo-of-mountain-with-polar-lights-1434608  s.jpg\": \"./src/img/hero/landscape-photo-of-mountain-with-polar-lights-1434608  s.jpg\",\n\t\"./landscape-photo-of-mountain-with-polar-lights-1434608 m.jpg\": \"./src/img/hero/landscape-photo-of-mountain-with-polar-lights-1434608 m.jpg\",\n\t\"./landscape-photo-of-mountain-with-polar-lights-1434608.jpg\": \"./src/img/hero/landscape-photo-of-mountain-with-polar-lights-1434608.jpg\",\n\t\"./photo-of-keyboard-near-mouse-3184460 m.jpg\": \"./src/img/hero/photo-of-keyboard-near-mouse-3184460 m.jpg\",\n\t\"./photo-of-keyboard-near-mouse-3184460 s.jpg\": \"./src/img/hero/photo-of-keyboard-near-mouse-3184460 s.jpg\",\n\t\"./photo-of-keyboard-near-mouse-3184460.jpg\": \"./src/img/hero/photo-of-keyboard-near-mouse-3184460.jpg\",\n\t\"./photo-of-toronto-cityscape-at-night-2478248 m.jpg\": \"./src/img/hero/photo-of-toronto-cityscape-at-night-2478248 m.jpg\",\n\t\"./photo-of-toronto-cityscape-at-night-2478248 s.jpg\": \"./src/img/hero/photo-of-toronto-cityscape-at-night-2478248 s.jpg\",\n\t\"./photo-of-toronto-cityscape-at-night-2478248.jpg\": \"./src/img/hero/photo-of-toronto-cityscape-at-night-2478248.jpg\",\n\t\"./purple-petal-flower-surrounded-by-green-plants-during-66288 m.jpg\": \"./src/img/hero/purple-petal-flower-surrounded-by-green-plants-during-66288 m.jpg\",\n\t\"./purple-petal-flower-surrounded-by-green-plants-during-66288 s.jpg\": \"./src/img/hero/purple-petal-flower-surrounded-by-green-plants-during-66288 s.jpg\",\n\t\"./purple-petal-flower-surrounded-by-green-plants-during-66288.jpg\": \"./src/img/hero/purple-petal-flower-surrounded-by-green-plants-during-66288.jpg\",\n\t\"./sunset-view-of-mountains-733100 m.jpg\": \"./src/img/hero/sunset-view-of-mountains-733100 m.jpg\",\n\t\"./sunset-view-of-mountains-733100 s.jpg\": \"./src/img/hero/sunset-view-of-mountains-733100 s.jpg\",\n\t\"./sunset-view-of-mountains-733100.jpg\": \"./src/img/hero/sunset-view-of-mountains-733100.jpg\",\n\t\"./time-lapse-photography-of-waterfalls-during-sunset-210186 m.jpg\": \"./src/img/hero/time-lapse-photography-of-waterfalls-during-sunset-210186 m.jpg\",\n\t\"./time-lapse-photography-of-waterfalls-during-sunset-210186 s.jpg\": \"./src/img/hero/time-lapse-photography-of-waterfalls-during-sunset-210186 s.jpg\",\n\t\"./time-lapse-photography-of-waterfalls-during-sunset-210186.jpg\": \"./src/img/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg\",\n\t\"./twisted-building-during-nighttime-1470405  m.jpg\": \"./src/img/hero/twisted-building-during-nighttime-1470405  m.jpg\",\n\t\"./twisted-building-during-nighttime-1470405  s.jpg\": \"./src/img/hero/twisted-building-during-nighttime-1470405  s.jpg\",\n\t\"./twisted-building-during-nighttime-1470405.jpg\": \"./src/img/hero/twisted-building-during-nighttime-1470405.jpg\",\n\t\"./two-cargo-ships-sailing-near-city-2144905 m.jpg\": \"./src/img/hero/two-cargo-ships-sailing-near-city-2144905 m.jpg\",\n\t\"./two-cargo-ships-sailing-near-city-2144905 s.jpg\": \"./src/img/hero/two-cargo-ships-sailing-near-city-2144905 s.jpg\",\n\t\"./two-cargo-ships-sailing-near-city-2144905.jpg\": \"./src/img/hero/two-cargo-ships-sailing-near-city-2144905.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img/hero sync recursive \\\\.(png|jpe?g|svg)$\";\n\n//# sourceURL=webpack:///./src/img/hero_sync_\\.(png%7Cjpe?");

/***/ }),

/***/ "./src/img/hero/america-arid-bushes-california-221148 m.jpg":
/*!******************************************************************!*\
  !*** ./src/img/hero/america-arid-bushes-california-221148 m.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"49bcd90fb8683446c8d8c9b3fbd8d2a5.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/america-arid-bushes-california-221148_m.jpg?");

/***/ }),

/***/ "./src/img/hero/america-arid-bushes-california-221148 s.jpg":
/*!******************************************************************!*\
  !*** ./src/img/hero/america-arid-bushes-california-221148 s.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3fe6cc1962d3eaccbbf529ebcf02ac13.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/america-arid-bushes-california-221148_s.jpg?");

/***/ }),

/***/ "./src/img/hero/america-arid-bushes-california-221148.jpg":
/*!****************************************************************!*\
  !*** ./src/img/hero/america-arid-bushes-california-221148.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"af70348b10fb0d36aac0abba434064d0.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/america-arid-bushes-california-221148.jpg?");

/***/ }),

/***/ "./src/img/hero/beautiful-beauty-blue-bright-414612  s.jpg":
/*!*****************************************************************!*\
  !*** ./src/img/hero/beautiful-beauty-blue-bright-414612  s.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"52f82a2b5aeeba8f1cc71b7827a21fce.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/beautiful-beauty-blue-bright-414612__s.jpg?");

/***/ }),

/***/ "./src/img/hero/beautiful-beauty-blue-bright-414612 m.jpg":
/*!****************************************************************!*\
  !*** ./src/img/hero/beautiful-beauty-blue-bright-414612 m.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"767f094a5b585e103d238d32b701f8cb.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/beautiful-beauty-blue-bright-414612_m.jpg?");

/***/ }),

/***/ "./src/img/hero/beautiful-beauty-blue-bright-414612.jpg":
/*!**************************************************************!*\
  !*** ./src/img/hero/beautiful-beauty-blue-bright-414612.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c435e10c3124d1eeb46532061e627cae.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/beautiful-beauty-blue-bright-414612.jpg?");

/***/ }),

/***/ "./src/img/hero/brown-and-green-mountain-view-photo-842711  m.jpg":
/*!************************************************************************!*\
  !*** ./src/img/hero/brown-and-green-mountain-view-photo-842711  m.jpg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"633d85c473128b9d4f38882b7ee8534f.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/brown-and-green-mountain-view-photo-842711__m.jpg?");

/***/ }),

/***/ "./src/img/hero/brown-and-green-mountain-view-photo-842711  s.jpg":
/*!************************************************************************!*\
  !*** ./src/img/hero/brown-and-green-mountain-view-photo-842711  s.jpg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"19cff9566e8eb3b37e97d315c36bceb4.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/brown-and-green-mountain-view-photo-842711__s.jpg?");

/***/ }),

/***/ "./src/img/hero/brown-and-green-mountain-view-photo-842711.jpg":
/*!*********************************************************************!*\
  !*** ./src/img/hero/brown-and-green-mountain-view-photo-842711.jpg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b559794ca6bf305d8d041fc5199178e8.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/brown-and-green-mountain-view-photo-842711.jpg?");

/***/ }),

/***/ "./src/img/hero/empty-dining-tables-and-chairs-1579739 m.jpg":
/*!*******************************************************************!*\
  !*** ./src/img/hero/empty-dining-tables-and-chairs-1579739 m.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"08a7b2aa123b6c63dc9a8f5d87a55257.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/empty-dining-tables-and-chairs-1579739_m.jpg?");

/***/ }),

/***/ "./src/img/hero/empty-dining-tables-and-chairs-1579739 s.jpg":
/*!*******************************************************************!*\
  !*** ./src/img/hero/empty-dining-tables-and-chairs-1579739 s.jpg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"34d27894390e7fc0bb706f04a054836e.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/empty-dining-tables-and-chairs-1579739_s.jpg?");

/***/ }),

/***/ "./src/img/hero/empty-dining-tables-and-chairs-1579739.jpg":
/*!*****************************************************************!*\
  !*** ./src/img/hero/empty-dining-tables-and-chairs-1579739.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"902184188738e1a29616f71999b8c788.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/empty-dining-tables-and-chairs-1579739.jpg?");

/***/ }),

/***/ "./src/img/hero/landscape-photo-of-mountain-with-polar-lights-1434608  s.jpg":
/*!***********************************************************************************!*\
  !*** ./src/img/hero/landscape-photo-of-mountain-with-polar-lights-1434608  s.jpg ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f423e32729d0976c7e966836923082fb.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/landscape-photo-of-mountain-with-polar-lights-1434608__s.jpg?");

/***/ }),

/***/ "./src/img/hero/landscape-photo-of-mountain-with-polar-lights-1434608 m.jpg":
/*!**********************************************************************************!*\
  !*** ./src/img/hero/landscape-photo-of-mountain-with-polar-lights-1434608 m.jpg ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"97183b865997b3b0decd2706adc4823d.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/landscape-photo-of-mountain-with-polar-lights-1434608_m.jpg?");

/***/ }),

/***/ "./src/img/hero/landscape-photo-of-mountain-with-polar-lights-1434608.jpg":
/*!********************************************************************************!*\
  !*** ./src/img/hero/landscape-photo-of-mountain-with-polar-lights-1434608.jpg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1b67b0534c01796f389d0474eee7d8f5.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/landscape-photo-of-mountain-with-polar-lights-1434608.jpg?");

/***/ }),

/***/ "./src/img/hero/photo-of-keyboard-near-mouse-3184460 m.jpg":
/*!*****************************************************************!*\
  !*** ./src/img/hero/photo-of-keyboard-near-mouse-3184460 m.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6511728f5cd5ecc767754d4b5ac9d0f3.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/photo-of-keyboard-near-mouse-3184460_m.jpg?");

/***/ }),

/***/ "./src/img/hero/photo-of-keyboard-near-mouse-3184460 s.jpg":
/*!*****************************************************************!*\
  !*** ./src/img/hero/photo-of-keyboard-near-mouse-3184460 s.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e75acf8aafb8e5e1368958892d6b51dc.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/photo-of-keyboard-near-mouse-3184460_s.jpg?");

/***/ }),

/***/ "./src/img/hero/photo-of-keyboard-near-mouse-3184460.jpg":
/*!***************************************************************!*\
  !*** ./src/img/hero/photo-of-keyboard-near-mouse-3184460.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c479f37c9665c2acab5be7775de59728.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/photo-of-keyboard-near-mouse-3184460.jpg?");

/***/ }),

/***/ "./src/img/hero/photo-of-toronto-cityscape-at-night-2478248 m.jpg":
/*!************************************************************************!*\
  !*** ./src/img/hero/photo-of-toronto-cityscape-at-night-2478248 m.jpg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"dbd0100d393017c5d14a7c784e074a9e.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/photo-of-toronto-cityscape-at-night-2478248_m.jpg?");

/***/ }),

/***/ "./src/img/hero/photo-of-toronto-cityscape-at-night-2478248 s.jpg":
/*!************************************************************************!*\
  !*** ./src/img/hero/photo-of-toronto-cityscape-at-night-2478248 s.jpg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"07665691cd1a4c8954a893659d711c32.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/photo-of-toronto-cityscape-at-night-2478248_s.jpg?");

/***/ }),

/***/ "./src/img/hero/photo-of-toronto-cityscape-at-night-2478248.jpg":
/*!**********************************************************************!*\
  !*** ./src/img/hero/photo-of-toronto-cityscape-at-night-2478248.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e8594e3314c9e33e35f4a4b1f20dca3c.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/photo-of-toronto-cityscape-at-night-2478248.jpg?");

/***/ }),

/***/ "./src/img/hero/purple-petal-flower-surrounded-by-green-plants-during-66288 m.jpg":
/*!****************************************************************************************!*\
  !*** ./src/img/hero/purple-petal-flower-surrounded-by-green-plants-during-66288 m.jpg ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e51924c98b6cb853668cf9bd371eaa70.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/purple-petal-flower-surrounded-by-green-plants-during-66288_m.jpg?");

/***/ }),

/***/ "./src/img/hero/purple-petal-flower-surrounded-by-green-plants-during-66288 s.jpg":
/*!****************************************************************************************!*\
  !*** ./src/img/hero/purple-petal-flower-surrounded-by-green-plants-during-66288 s.jpg ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"82d74ee93fe81d5513f49b7754622657.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/purple-petal-flower-surrounded-by-green-plants-during-66288_s.jpg?");

/***/ }),

/***/ "./src/img/hero/purple-petal-flower-surrounded-by-green-plants-during-66288.jpg":
/*!**************************************************************************************!*\
  !*** ./src/img/hero/purple-petal-flower-surrounded-by-green-plants-during-66288.jpg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3841d0581afc4c547eb475547e62b8f9.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/purple-petal-flower-surrounded-by-green-plants-during-66288.jpg?");

/***/ }),

/***/ "./src/img/hero/sunset-view-of-mountains-733100 m.jpg":
/*!************************************************************!*\
  !*** ./src/img/hero/sunset-view-of-mountains-733100 m.jpg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7f797fefe774d1cdd36481f023342e88.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/sunset-view-of-mountains-733100_m.jpg?");

/***/ }),

/***/ "./src/img/hero/sunset-view-of-mountains-733100 s.jpg":
/*!************************************************************!*\
  !*** ./src/img/hero/sunset-view-of-mountains-733100 s.jpg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"16ddcecb6a73bc0aff548459bcd37930.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/sunset-view-of-mountains-733100_s.jpg?");

/***/ }),

/***/ "./src/img/hero/sunset-view-of-mountains-733100.jpg":
/*!**********************************************************!*\
  !*** ./src/img/hero/sunset-view-of-mountains-733100.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2cdff984eb4b16a8a8192b75d7e4ab7f.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/sunset-view-of-mountains-733100.jpg?");

/***/ }),

/***/ "./src/img/hero/time-lapse-photography-of-waterfalls-during-sunset-210186 m.jpg":
/*!**************************************************************************************!*\
  !*** ./src/img/hero/time-lapse-photography-of-waterfalls-during-sunset-210186 m.jpg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"49d95b998ed9f4c1500b4ae9d8cd87d0.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/time-lapse-photography-of-waterfalls-during-sunset-210186_m.jpg?");

/***/ }),

/***/ "./src/img/hero/time-lapse-photography-of-waterfalls-during-sunset-210186 s.jpg":
/*!**************************************************************************************!*\
  !*** ./src/img/hero/time-lapse-photography-of-waterfalls-during-sunset-210186 s.jpg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c16c8df76d1134bb6f4b5b633aef67a1.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/time-lapse-photography-of-waterfalls-during-sunset-210186_s.jpg?");

/***/ }),

/***/ "./src/img/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg":
/*!************************************************************************************!*\
  !*** ./src/img/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f3614825a379086a169403edee56c8d9.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg?");

/***/ }),

/***/ "./src/img/hero/twisted-building-during-nighttime-1470405  m.jpg":
/*!***********************************************************************!*\
  !*** ./src/img/hero/twisted-building-during-nighttime-1470405  m.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f13a3b0e52f5da56ae450103c7421e82.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/twisted-building-during-nighttime-1470405__m.jpg?");

/***/ }),

/***/ "./src/img/hero/twisted-building-during-nighttime-1470405  s.jpg":
/*!***********************************************************************!*\
  !*** ./src/img/hero/twisted-building-during-nighttime-1470405  s.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cd9359f6954ebf58d7af9c9373c11c6c.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/twisted-building-during-nighttime-1470405__s.jpg?");

/***/ }),

/***/ "./src/img/hero/twisted-building-during-nighttime-1470405.jpg":
/*!********************************************************************!*\
  !*** ./src/img/hero/twisted-building-during-nighttime-1470405.jpg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ce80b96c5a34fe8e8e12944c466b757e.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/twisted-building-during-nighttime-1470405.jpg?");

/***/ }),

/***/ "./src/img/hero/two-cargo-ships-sailing-near-city-2144905 m.jpg":
/*!**********************************************************************!*\
  !*** ./src/img/hero/two-cargo-ships-sailing-near-city-2144905 m.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c0f51d0e8c30a3b0ec9fa619e963d99d.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/two-cargo-ships-sailing-near-city-2144905_m.jpg?");

/***/ }),

/***/ "./src/img/hero/two-cargo-ships-sailing-near-city-2144905 s.jpg":
/*!**********************************************************************!*\
  !*** ./src/img/hero/two-cargo-ships-sailing-near-city-2144905 s.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8fa030dacaef967d2c1acdaed5442eb5.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/two-cargo-ships-sailing-near-city-2144905_s.jpg?");

/***/ }),

/***/ "./src/img/hero/two-cargo-ships-sailing-near-city-2144905.jpg":
/*!********************************************************************!*\
  !*** ./src/img/hero/two-cargo-ships-sailing-near-city-2144905.jpg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"0f20215f4955e504de7e445202624d27.jpg\";\n\n//# sourceURL=webpack:///./src/img/hero/two-cargo-ships-sailing-near-city-2144905.jpg?");

/***/ }),

/***/ "./src/img/reasons/undraw_Mobile_application_mr4r.svg":
/*!************************************************************!*\
  !*** ./src/img/reasons/undraw_Mobile_application_mr4r.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"20c9c2fb537b80b1a15bbf9e7150f932.svg\";\n\n//# sourceURL=webpack:///./src/img/reasons/undraw_Mobile_application_mr4r.svg?");

/***/ }),

/***/ "./src/img/reasons/undraw_creative_thinking_b3bc.svg":
/*!***********************************************************!*\
  !*** ./src/img/reasons/undraw_creative_thinking_b3bc.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"07e650e9c1dfb6f764f3e532f7a29945.svg\";\n\n//# sourceURL=webpack:///./src/img/reasons/undraw_creative_thinking_b3bc.svg?");

/***/ }),

/***/ "./src/img/reasons/undraw_developer_activity_bv83.svg":
/*!************************************************************!*\
  !*** ./src/img/reasons/undraw_developer_activity_bv83.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d922bcde647628b45bd69340347fd12a.svg\";\n\n//# sourceURL=webpack:///./src/img/reasons/undraw_developer_activity_bv83.svg?");

/***/ }),

/***/ "./src/img/reasons/undraw_programming_2svr.svg":
/*!*****************************************************!*\
  !*** ./src/img/reasons/undraw_programming_2svr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7ec02c82e69560d9e94143b912b3c9bc.svg\";\n\n//# sourceURL=webpack:///./src/img/reasons/undraw_programming_2svr.svg?");

/***/ }),

/***/ "./src/img/reasons/undraw_reviewed_docs_neeb.svg":
/*!*******************************************************!*\
  !*** ./src/img/reasons/undraw_reviewed_docs_neeb.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ba9b4583177d07a9a1c1d167898147fd.svg\";\n\n//# sourceURL=webpack:///./src/img/reasons/undraw_reviewed_docs_neeb.svg?");

/***/ }),

/***/ "./src/img/reasons/undraw_team_spirit_hrr4.svg":
/*!*****************************************************!*\
  !*** ./src/img/reasons/undraw_team_spirit_hrr4.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"26b017f6c07dc1646f1ba33bb6382650.svg\";\n\n//# sourceURL=webpack:///./src/img/reasons/undraw_team_spirit_hrr4.svg?");

/***/ }),

/***/ "./src/img/showcase/boldness_macbookpro15_front.png":
/*!**********************************************************!*\
  !*** ./src/img/showcase/boldness_macbookpro15_front.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b21b1ee93e3545006c7159552a00697b.png\";\n\n//# sourceURL=webpack:///./src/img/showcase/boldness_macbookpro15_front.png?");

/***/ }),

/***/ "./src/img/showcase/face box_dell-xps15-front.png":
/*!********************************************************!*\
  !*** ./src/img/showcase/face box_dell-xps15-front.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c748b8a3d24c48b3dd7f7d09d0b8d906.png\";\n\n//# sourceURL=webpack:///./src/img/showcase/face_box_dell-xps15-front.png?");

/***/ }),

/***/ "./src/img/showcase/link.svg":
/*!***********************************!*\
  !*** ./src/img/showcase/link.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7e21d4da7ff03af9afa8095ccea33ca2.svg\";\n\n//# sourceURL=webpack:///./src/img/showcase/link.svg?");

/***/ }),

/***/ "./src/img/showcase/logistics iphone_iphonexspacegrey_portrait.png":
/*!*************************************************************************!*\
  !*** ./src/img/showcase/logistics iphone_iphonexspacegrey_portrait.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"efd2628bfb808d90e4946a43a439b184.png\";\n\n//# sourceURL=webpack:///./src/img/showcase/logistics_iphone_iphonexspacegrey_portrait.png?");

/***/ }),

/***/ "./src/img/showcase/logistics landing_macbookpro13_front.png":
/*!*******************************************************************!*\
  !*** ./src/img/showcase/logistics landing_macbookpro13_front.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d5805de1096cb91bf5fa7a60ff88647e.png\";\n\n//# sourceURL=webpack:///./src/img/showcase/logistics_landing_macbookpro13_front.png?");

/***/ }),

/***/ "./src/img/showcase/robo ipad_ipad_black_landscape.png":
/*!*************************************************************!*\
  !*** ./src/img/showcase/robo ipad_ipad_black_landscape.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"739c832b68156c7828901e52519940c0.png\";\n\n//# sourceURL=webpack:///./src/img/showcase/robo_ipad_ipad_black_landscape.png?");

/***/ }),

/***/ "./src/img/showcase/robo iphone 5_iphone5c_green_portrait.png":
/*!********************************************************************!*\
  !*** ./src/img/showcase/robo iphone 5_iphone5c_green_portrait.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2906aa9381d36f320bf9db4fdb552a96.png\";\n\n//# sourceURL=webpack:///./src/img/showcase/robo_iphone_5_iphone5c_green_portrait.png?");

/***/ }),

/***/ "./src/img/showcase/smart brain ipad_ipad_black_portrait.png":
/*!*******************************************************************!*\
  !*** ./src/img/showcase/smart brain ipad_ipad_black_portrait.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b8074a1d1c5cccd6e40a4ed3359b4361.png\";\n\n//# sourceURL=webpack:///./src/img/showcase/smart_brain_ipad_ipad_black_portrait.png?");

/***/ }),

/***/ "./src/img/showcase/stories ipad_ipad_black_portrait.png":
/*!***************************************************************!*\
  !*** ./src/img/showcase/stories ipad_ipad_black_portrait.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c3895cbac8fefa8a8d45520b27db9f62.png\";\n\n//# sourceURL=webpack:///./src/img/showcase/stories_ipad_ipad_black_portrait.png?");

/***/ }),

/***/ "./src/img/showcase/survey_macbookair13_front.png":
/*!********************************************************!*\
  !*** ./src/img/showcase/survey_macbookair13_front.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"21bc6e572df44badbd147d61d4cd2e79.png\";\n\n//# sourceURL=webpack:///./src/img/showcase/survey_macbookair13_front.png?");

/***/ }),

/***/ "./src/img/showcase/web-programming.svg":
/*!**********************************************!*\
  !*** ./src/img/showcase/web-programming.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e4c25de42623633b3496afca3ce01e06.svg\";\n\n//# sourceURL=webpack:///./src/img/showcase/web-programming.svg?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<!doctype html> <html lang=en> <head> <meta charset=UTF-8> <meta name=viewport content=\\\"width=device-width,initial-scale=1\\\"> <meta http-equiv=X-UA-Compatible content=\\\"ie=edge\\\"> <title>Portfolio</title> </head> <body> <nav class=nav> <span class=nav-logo>A_S</span> <ul class=nav-ul> <li class=nav-link><a href=#home class=nav-items>Home</a></li> <li class=nav-link><a href=#showcase class=nav-items>Showcase</a></li> <li class=nav-link><a href=#achievements class=nav-items>Achievements</a></li> <li class=nav-link><a href=#whyme class=nav-items>Reasons</a></li> <li class=nav-link><a href=#talk class=nav-items>Contact</a></li> <li class=nav-link><a href=\\\"\\\" class=nav-items>Blog</a></li> </ul> </nav> <main class=hero id=home> <time class=time></time> <h1 class=greeting> <span class=greeting-js> </span> I'm Joel </h1> <h2 id=description><span class=txt-type data-words='[\\\"a web developer\\\", \\\"a responsive web designer\\\", \\\"a UI/UX enthusaist\\\", \\\"a blogger\\\"]' data-wait=2000></span></h2> </main> <section class=cards-container id=showcase> <div class=\\\"cards cards-one\\\"> <div class=\\\"cards-main cards-main-one\\\"> <img src=\" + __webpack_require__(/*! ../src/img/showcase/face box_dell-xps15-front.png */ \"./src/img/showcase/face box_dell-xps15-front.png\") + \" alt=\\\"\\\" class=\\\"card-pic card-pic-one\\\"> <img src=\" + __webpack_require__(/*! ../src/img/showcase/smart brain ipad_ipad_black_portrait.png */ \"./src/img/showcase/smart brain ipad_ipad_black_portrait.png\") + \" alt=\\\" \\\" class=\\\"card-pic card-pic-two\\\"> </div> <div class=cards-info> <h1 class=info-head>Recognize</h1> <p class=info-body>An app that recognizes the faces in pictures and predicts it's location with a bounding box. </p><p> The front-end was built in react, it's backend utilizes an express server running on-top of node.js </p> <p>It also boasts of a fully functional SQL database built with PostgreSQL </p> <p></p> <span class=info-bottom> <a href=https://github.com/stealthman22/smart-brain target=_blank> <img src=\" + __webpack_require__(/*! ./img/showcase/web-programming.svg */ \"./src/img/showcase/web-programming.svg\") + \" alt=\\\"\\\" class=info-icons></a> <a href=https://image-recog-front-end.herokuapp.com/ target=_blank> <img src=\" + __webpack_require__(/*! ./img/showcase/link.svg */ \"./src/img/showcase/link.svg\") + \" alt=\\\"\\\" class=info-icons> </a> </span> </div> </div> <div class=\\\"cards cards-two\\\"> <div class=\\\"cards-main cards-main-two\\\"> <img src=\" + __webpack_require__(/*! ../src/img/showcase/robo ipad_ipad_black_landscape.png */ \"./src/img/showcase/robo ipad_ipad_black_landscape.png\") + \" alt=\\\"\\\" class=\\\"card-pic card-pic-three\\\"> <img src=\" + __webpack_require__(/*! ../src/img/showcase/robo iphone 5_iphone5c_green_portrait.png */ \"./src/img/showcase/robo iphone 5_iphone5c_green_portrait.png\") + \" alt=\\\"\\\" class=\\\"card-pic card-pic-four\\\"> </div> <div class=cards-info> <h1 class=info-head> Friendz</h1> <p class=info-body> </p><p>A simple react and redux app that filters profiles based on search results.</p> <p>It uses react for the UI, and redux for state management, so the state of the search box can be recorded at all times. The profiles structure are fetched from an API. </p> <p></p> <span class=info-bottom> <a href=\\\"\\\"> <img src=\" + __webpack_require__(/*! ./img/showcase/web-programming.svg */ \"./src/img/showcase/web-programming.svg\") + \" alt=\\\"\\\" class=info-icons></a> <a href=\\\"\\\"> <img src=\" + __webpack_require__(/*! ./img/showcase/link.svg */ \"./src/img/showcase/link.svg\") + \" alt=\\\"\\\" class=info-icons> </a></span> </div> </div> <div class=\\\"cards cards-three\\\"> <div class=\\\"cards-main cards-main-three\\\"> <img src=\" + __webpack_require__(/*! ../src/img/showcase/boldness_macbookpro15_front.png */ \"./src/img/showcase/boldness_macbookpro15_front.png\") + \" alt=\\\"\\\" class=card-pic-five> <img src=\" + __webpack_require__(/*! ../src/img/showcase/stories ipad_ipad_black_portrait.png */ \"./src/img/showcase/stories ipad_ipad_black_portrait.png\") + \" alt=\\\"\\\" class=card-pic-six> </div> <div class=cards-info> <h1 class=info-head>Dev Portfolio</h1> <p class=info-body> </p><p>An elegant portfolio template that dev and desing teams can utilize to quickly bootstrap theirs and make necessary changes.</p> <p>It has a beautiful carousel that highlights the teams main strengths and skills.</p> <p>It is built in vanilla js and is simple to set up.</p> <p></p> <span class=info-bottom> <a href=https://codepen.io/alara_joel_stealth/pen/yrjLjB target=_blank> <img src=\" + __webpack_require__(/*! ./img/showcase/web-programming.svg */ \"./src/img/showcase/web-programming.svg\") + \" alt=\\\"\\\" class=info-icons></a> <a href=https://codepen.io/alara_joel_stealth/full/yrjLjB target=_blank> <img src=\" + __webpack_require__(/*! ./img/showcase/link.svg */ \"./src/img/showcase/link.svg\") + \" alt=\\\"\\\" class=info-icons> </a></span> </div> </div> <div class=\\\"cards cards-four\\\"> <div class=\\\"cards-main cards-main-four\\\"> <img src=\" + __webpack_require__(/*! ../src/img/showcase/logistics landing_macbookpro13_front.png */ \"./src/img/showcase/logistics landing_macbookpro13_front.png\") + \" alt=\\\"\\\" class=card-pic-seven> <img src=\" + __webpack_require__(/*! ../src/img/showcase/logistics iphone_iphonexspacegrey_portrait.png */ \"./src/img/showcase/logistics iphone_iphonexspacegrey_portrait.png\") + \" alt=\\\"\\\" class=card-pic-eight> </div> <div class=cards-info> <h1 class=info-head>Stealth Logistics</h1> <p class=info-body>An elegant landing page for a logistics office, to help them get clients contact information and meeting schedule quickly</p> <p>It uses an form that submits directly to an email account, for fast processing. </p> <p>And with a click, potential clients can be redirected to a social page to learn more about the company </p> <span class=info-bottom> <a href=https://github.com/stealthman22/stealthman22.github.io target=_blank> <img src=\" + __webpack_require__(/*! ./img/showcase/web-programming.svg */ \"./src/img/showcase/web-programming.svg\") + \" alt=\\\"\\\" class=info-icons></a> <a href=https://stealthman22.github.io/ target=_blank> <img src=\" + __webpack_require__(/*! ./img/showcase/link.svg */ \"./src/img/showcase/link.svg\") + \" alt=\\\"\\\" class=info-icons> </a></span> </div> </div> <div class=\\\"cards cards-five\\\"> <div class=cards-main> <img src=\" + __webpack_require__(/*! ../src/img/showcase/survey_macbookair13_front.png */ \"./src/img/showcase/survey_macbookair13_front.png\") + \" alt=\\\"\\\" class=card-pic-nine> </div> <div class=cards-info> <h1 class=info-head>Survey form Page</h1> <p class=info-body> </p><p>An extensively detailed survery form template</p> <p>A survey form that can be used to get valuable feedback from customers and stakeholders</p> <p></p> <span class=info-bottom> <a href=https://github.com/stealthman22/product-page-FCC target=_blank> <img src=\" + __webpack_require__(/*! ./img/showcase/web-programming.svg */ \"./src/img/showcase/web-programming.svg\") + \" alt=\\\"\\\" class=info-icons></a> <a href=https://stealthman22.github.io/survey-form-FCC/ target=_blank> <img src=\" + __webpack_require__(/*! ./img/showcase/link.svg */ \"./src/img/showcase/link.svg\") + \" alt=\\\"\\\" class=info-icons> </a></span> </div> </div> </section> <section class=timeline id=achievements> <div class=\\\"container left\\\"> <div class=content> <h2>January, 2020</h2> <h3>Data Science and Machine Learning </h3> <p>Started the diploma in DS/ML offered by WorldQuant University.</p> <a href=https://wqu.org/programs/data-science target=_blank>Check it out here</a> </div> </div> <div class=\\\"container right\\\"> <div class=content> <h2>November, 2019</h2> <h3>Cerification: Complete Web Developer</h3> <p> I completed this intensive Zero to Mastery course with tutor Andrei Neagoie.</p> <p>Used React, Node, Express and PostgreSQL</p> <a href=https://res.cloudinary.com/stealthman22/image/upload/v1574698452/ZTM_grad.jpg target=_blank>View my certificate here</a> </div> </div> <div class=\\\"container left\\\"> <div class=content> <h2>May, 2018</h2> <h3>Certification: RWD Principles: Udemy</h3> <p>This Added to my knowledge in RWD principles, by Jonas Schmedtmann.</p> <p>Learn how to build websites, with user experience in mind.</p> <a href=https://res.cloudinary.com/stealthman22/image/upload/v1583261244/RWD_Cert.jpg target=_blank>View my certificate here</a> </div> </div> <div class=\\\"container right\\\"> <div class=content> <h2>April, 2019</h2> <h3>Certification: RWD: FreeCodeCamp</h3> <p>This was a very intensive one for me, this is how I got my Web Dev groove.</p> <p> Thanks to the FCC community</p> <a href=https://www.freecodecamp.org/certification/alara_joel_stealth/responsive-web-design target=_blank> View my certificate here</a> </div> </div> <div class=\\\"container left\\\"> <div class=content> <h2>2015</h2> <h3>HTML 4 and 5 with CSS: VTC</h3> <p>My introduction into frontend web design.</p> <p>Taught me the very basics</p> <a href=https://www.vtc.com/products/HTML-45-with-CSS-Tutorials.htm target=_blank> Check it out here</a> </div> </div> <div class=\\\"container right\\\"> <div class=content> <h2>2014</h2> <h3>Introduction to programming: Udacity</h3> <p>This was where it all began, with the Udacity app</p> <p>Learnt some basic web manipulations with python.</p> <a href=https://www.udacity.com/course/intro-to-programming-nanodegree--nd000 target=_blank> Check it out here</a> </div> </div> </section> <section class=reasons id=whyme> <div class=reasons-card> <div class=\\\"reasons-card-img reasons-card-img-one\\\"></div> <div class=reasons-card-text> <h2>Resilience</h2> <p>I do not stop, I dig deeper until I produce tangible results. Whatever be the case, I prevail. </p> </div> <div class=\\\"reasons-footer reasons-footer-odd\\\"> </div> </div> <div class=reasons-card> <div class=\\\"reasons-card-img reasons-card-img-three\\\"></div> <div class=reasons-card-text> <h2>Concentration</h2> <p>I am capable of pouring in the necessary hours that is needed to bring projects and tasks to fruition. </p> </div> <div class=\\\"reasons-footer reasons-footer-odd\\\"> </div> </div> <div class=reasons-card> <div class=\\\"reasons-card-img reasons-card-img-two\\\"></div> <div class=reasons-card-text> <h2>Boldness</h2> <p>I am never afraid to take on mammoth and herculian tasks. So don't worry about how, give me the what. </p> </div> <div class=\\\"reasons-footer reasons-footer-even\\\"> </div> </div> <div class=reasons-card> <div class=\\\"reasons-card-img reasons-card-img-four\\\"></div> <div class=reasons-card-text> <h2>Modern</h2> <p>I strive to stay abrest with modern techniques and approaches, hence always giving my team/clients a competitive edge </p> </div> <div class=\\\"reasons-footer reasons-footer-odd\\\"> </div> </div> <div class=reasons-card> <div class=\\\"reasons-card-img reasons-card-img-five\\\"></div> <div class=reasons-card-text> <h2>Imagination</h2> <p>I am supercharged with a creative mind, that allows my imagination run wild, hence I bring freshness to the table always. </p> </div> <div class=\\\"reasons-footer reasons-footer-even\\\"> </div> </div> <div class=reasons-card> <div class=\\\"reasons-card-img reasons-card-img-six\\\"></div> <div class=reasons-card-text> <h2>Team-Spirit</h2> <p> I thrive well in team-motivated environments, and always ensure to carry team members and stakeholders along.. </p> </div> <div class=\\\"reasons-footer reasons-footer-even\\\"> </div> </div> </section> <section class=contact id=talk> <div class=hiring> <h2>You should checkout my Resume </h2> <a href=\\\"\\\"> <button class=hiring-btn> Grab a copy <img src=\" + __webpack_require__(/*! ./img/contact/download.svg */ \"./src/img/contact/download.svg\") + \" alt=\\\"\\\" class=hiring-icon> </button> </a> </div> <div class=message> <h2> <img src=\" + __webpack_require__(/*! ./img/contact/flash.svg */ \"./src/img/contact/flash.svg\") + \" class=flash-icon alt=\\\"\\\">Want to get in touch with lightning speed ? Reach me here then <img src=\" + __webpack_require__(/*! ./img/contact/048-arrow.svg */ \"./src/img/contact/048-arrow.svg\") + \" alt=\\\"\\\" class=down-icon></h2> <ul class=message-list> <li> <a href=mailto:alaratj@hotmail.com> <button class=message-btn><img src=\" + __webpack_require__(/*! ./img/contact/email.svg */ \"./src/img/contact/email.svg\") + \" alt=\\\"\\\" class=message-icon> <span class=message-text>alaratj@hotmail.com</span> </button> </a> </li> <li> <a href=mailto:tdotonline@gmail.com> <button class=message-btn><img src=\" + __webpack_require__(/*! ./img/contact/icons8-gmail.svg */ \"./src/img/contact/icons8-gmail.svg\") + \" alt=\\\"\\\" class=message-icon> tdotonline@gmail.com</button> </a> </li> <li> <a href=\\\"tel: +233240070101\\\"> <button class=message-btn><img src=\" + __webpack_require__(/*! ./img/contact/phone.svg */ \"./src/img/contact/phone.svg\") + \" alt=\\\"\\\" class=message-icon> +233240070101 </button> </a> </li> <li> <a target=_blank href=https://wa.me/233201100146> <button class=message-btn> <img src=\" + __webpack_require__(/*! ./img/contact/whatsapp.svg */ \"./src/img/contact/whatsapp.svg\") + \" alt=\\\"\\\" class=message-icon> +233201100146 </button> </a> </li> </ul> </div> <div class=socialize> <h2>How about we become friends here :) <img src=\" + __webpack_require__(/*! ./img/contact/048-arrow.svg */ \"./src/img/contact/048-arrow.svg\") + \" alt=\\\"\\\" class=down-icon> </h2> <ul class=social> <li class=social-li> <a href=https://www.linkedin.com/in/alara-joel-b16865b6/ target=_blank><img src=\" + __webpack_require__(/*! ./img/contact/045-linkedin.svg */ \"./src/img/contact/045-linkedin.svg\") + \" alt=\\\"\\\" class=social-icon> <p class=social-txt>Linkedin</p> </a> </li> <li class=social-li> <a href=https://twitter.com/alara_joel target=_blank><img src=\" + __webpack_require__(/*! ./img/contact/043-twitter.svg */ \"./src/img/contact/043-twitter.svg\") + \" alt=\\\"\\\" class=social-icon> <p class=social-txt>Twitter</p> </a> </li> <li class=social-li> <a href=https://www.instagram.com/alara_joel_stealth/ target=_blank><img src=\" + __webpack_require__(/*! ./img/contact/025-instagram.svg */ \"./src/img/contact/025-instagram.svg\") + \" alt=\\\"\\\" class=social-icon> <p class=social-txt>instagram</p> </a> </li> <li class=social-li> <a href=https://github.com/stealthman22 target=_blank><img src=\" + __webpack_require__(/*! ./img/contact/038-github.svg */ \"./src/img/contact/038-github.svg\") + \" alt=\\\"\\\" class=social-icon> <p class=social-txt>GitHub</p> </a> </li> <li class=social-li> <a href=https://www.facebook.com/alaratj target=_blank><img src=\" + __webpack_require__(/*! ./img/contact/021-facebook.svg */ \"./src/img/contact/021-facebook.svg\") + \" alt=\\\"\\\" class=social-icon> <p class=social-txt>Facebook</p> </a> </li> </ul> </div> </section> <footer class=footer> <p> <img src=\" + __webpack_require__(/*! ./img/contact/copyright.svg */ \"./src/img/contact/copyright.svg\") + \" alt=\\\"\\\" class=copy-icon> Designed and developed by <a href=https://twitter.com/alara_joel target=_blank> Alara O. Joel</a> a.k.a <a href=https://github.com/stealthman22 target=_blank> Alara_Stealth</a> </p> <p>Authors of the background images can be linked here at <a href=https://www.pexels.com/@alara-joel-597602/collections/ target=_blank>pexels</a> also quickly build your mockups here <a href=https://mockuphone.com/ target=_blank>mockuphone</a> </p> <p> Icons are from <a href=https://www.flaticon.com/authors/freepik title=Freepik target=_blank>Freepik,</a> <a href=https://www.flaticon.com/authors/vectors-market title=\\\"Vectors Market\\\" target=_blank>Vectors Market,</a> <a href=https://www.flaticon.com/authors/pixel-perfect title=\\\"Pixel perfect\\\" target=_blank>Pixel perfect,</a> <a href=https://www.flaticon.com/authors/fps-web-agency title=\\\"fps web agency\\\" target=_blank>fps web agency</a> and <a href=https://www.flaticon.com/ title=Flaticon target=_blank> flaticon</a> </p> <p>Other icons from <a target=_blank href=https://icons8.com>Icons8</a> and <a href=https://freesvg.org/ target=_blank>freesvg</a></p> </footer> <script src=https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js></script> <script> const scroll = new SmoothScroll('a[href*=\\\"#\\\"]'); </script> </body> </html>\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _eyes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eyes */ \"./src/eyes.js\");\n/* harmony import */ var _eyes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eyes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dynamicHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamicHero */ \"./src/dynamicHero.js\");\n/* harmony import */ var _dynamicHero__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dynamicHero__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _typewriter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typewriter */ \"./src/typewriter.js\");\n/* harmony import */ var _typewriter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_typewriter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hover */ \"./src/hover.js\");\n/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hover__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lazy */ \"./src/lazy.js\");\n// Import multiple image\nfunction importAll(r) {\n  let images = {};\n  r.keys().map(item => {\n    images[item.replace('./', '')] = r(item);\n  });\n  return images;\n}\n\nconst images = importAll(__webpack_require__(\"./src/img/hero sync recursive \\\\.(png|jpe?g|svg)$\"));\n\n\n\n\n\n\n\n/* import SmoothScroll from \"../node_modules/smooth-scroll\";\nconst scroll = new SmoothScroll(\"[data-scroll]\"); */\n\n\n/* function importAll(r) {\n    r.keys().reduce((acc, next) => {\n        acc[next.replace('./', '')] = r(next);\n        return acc\n    }, {})\n} */\n\n/*\nconst importAll = require =>\n    require.keys().reduce((acc, next) => {\n        acc[next.replace(\"./\", \"\")] = require(next);\n        return acc;\n    }, {}); */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (images);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lazy.js":
/*!*********************!*\
  !*** ./src/lazy.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var yall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yall-js */ \"./node_modules/yall-js/src/yall.mjs\");\n\ndocument.addEventListener('DomContentLoaded', yall_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/lazy.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Grab node list\nlet nav = document.querySelector('.nav');\nlet prevScrollPos = window.pageYOffset;\n\nwindow.onscroll = function () {\n  let currentScrollPos = window.pageYOffset;\n\n  if (prevScrollPos > currentScrollPos) {\n    nav.style.top = '0';\n  } else {\n    nav.style.top = '-150px';\n  }\n\n  prevScrollPos = currentScrollPos;\n};\n\nconsole.log(nav);\nconsole.log(prevScrollPos);\n\n//# sourceURL=webpack:///./src/nav.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar id = \"!!../node_modules/css-loader/dist/cjs.js!./style.css\";\nvar update = api(id, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/typewriter.js":
/*!***************************!*\
  !*** ./src/typewriter.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function init() {\n  // Grab the Dom elements\n  const txtElement = document.querySelector('.txt-type');\n  const words = JSON.parse(txtElement.getAttribute('data-words'));\n  const wait = txtElement.getAttribute('data-wait'); // Initialize the constructor function\n\n  new TypeWriter(txtElement, words, wait);\n} // Building class\n\n\nclass TypeWriter {\n  constructor(txtElement, words, wait = 2000) {\n    // Selecting poperties\n    this.txtElement = txtElement;\n    this.words = words;\n    this.txt = '';\n    this.wait = parseInt(wait, 10);\n    this.wordIndex = 0;\n    this.isDeleting = false; // method\n\n    this.type();\n  } // Define the type\n\n\n  type() {\n    // Current index of word\n    const current = this.wordIndex % this.words.length; // Get text of current\n\n    const fullTxt = this.words[current]; // Check if text is deleting\n\n    if (this.isDeleting) {\n      // Remove character\n      this.txt = fullTxt.substring(0, this.txt.length - 1);\n    } else {\n      this.txt = fullTxt.substring(0, this.txt.length + 1);\n    } // Insert txt value into html\n\n\n    this.txtElement.innerHTML = `<span class=\"txt\">${this.txt}</span>`; // Initial typing speed\n\n    let typeSpeed = 120; // Deleting typespeed\n\n    if (this.isDeleting) {\n      typeSpeed /= 2;\n    } // Building core fucntionality for switching words\n\n\n    if (!this.isDeleting && this.txt === fullTxt) {\n      // Make pause/wait at the end\n      typeSpeed = this.wait; // Turn on deleting\n\n      this.isDeleting = true;\n    } else if (this.isDeleting && this.txt === '') {\n      // Turn off deleting\n      this.isDeleting = false; // Move to the next word\n\n      this.wordIndex++; // Pause before typing\n\n      typeSpeed = 120;\n    }\n\n    setTimeout(() => this.type(), typeSpeed);\n  }\n\n} // init on DOM load\n\n\ndocument.addEventListener('DOMContentLoaded', init);\n\n//# sourceURL=webpack:///./src/typewriter.js?");

/***/ })

/******/ });