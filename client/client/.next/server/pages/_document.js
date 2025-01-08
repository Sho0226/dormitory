"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./common/constants.ts":
/*!*****************************!*\
  !*** ./common/constants.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   APP_NAME: () => (/* binding */ APP_NAME),\n/* harmony export */   ID_NAMES: () => (/* binding */ ID_NAMES),\n/* harmony export */   ID_NAME_LIST: () => (/* binding */ ID_NAME_LIST),\n/* harmony export */   IS_PROD: () => (/* binding */ IS_PROD)\n/* harmony export */ });\nconst APP_NAME = \"AI House Portal\";\nconst ID_NAME_LIST = [\n    \"user\",\n    \"task\"\n];\nconst IS_PROD = \"development\" === \"production\";\nconst listToDict = (list)=>list.reduce((dict, type)=>({\n            ...dict,\n            [type]: type\n        }), {});\nconst ID_NAMES = listToDict(ID_NAME_LIST);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29uc3RhbnRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxXQUFXLGtCQUFrQjtBQUVuQyxNQUFNQyxlQUFlO0lBQUM7SUFBUTtDQUFPLENBQVU7QUFFL0MsTUFBTUMsVUFBVUMsa0JBQXlCLGFBQWE7QUFFN0QsTUFBTUMsYUFBYSxDQUNqQkMsT0FFQUEsS0FBS0MsTUFBTSxDQUNULENBQUNDLE1BQU1DLE9BQVU7WUFBRSxHQUFHRCxJQUFJO1lBQUUsQ0FBQ0MsS0FBSyxFQUFFQTtRQUFLLElBQ3pDLENBQUM7QUFHRSxNQUFNQyxXQUFXTCxXQUFXSCxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tbW9uL2NvbnN0YW50cy50cz9kMjZmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUFBfTkFNRSA9IFwiQUkgSG91c2UgUG9ydGFsXCI7XG5cbmV4cG9ydCBjb25zdCBJRF9OQU1FX0xJU1QgPSBbXCJ1c2VyXCIsIFwidGFza1wiXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IElTX1BST0QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XG5cbmNvbnN0IGxpc3RUb0RpY3QgPSA8VCBleHRlbmRzIHJlYWRvbmx5IFtzdHJpbmcsIC4uLnN0cmluZ1tdXT4oXG4gIGxpc3Q6IFQsXG4pOiB7IFtVIGluIFRbbnVtYmVyXV06IFUgfSA9PlxuICBsaXN0LnJlZHVjZShcbiAgICAoZGljdCwgdHlwZSkgPT4gKHsgLi4uZGljdCwgW3R5cGVdOiB0eXBlIH0pLFxuICAgIHt9IGFzIHsgW1UgaW4gVFtudW1iZXJdXTogVSB9LFxuICApO1xuXG5leHBvcnQgY29uc3QgSURfTkFNRVMgPSBsaXN0VG9EaWN0KElEX05BTUVfTElTVCk7XG4iXSwibmFtZXMiOlsiQVBQX05BTUUiLCJJRF9OQU1FX0xJU1QiLCJJU19QUk9EIiwicHJvY2VzcyIsImxpc3RUb0RpY3QiLCJsaXN0IiwicmVkdWNlIiwiZGljdCIsInR5cGUiLCJJRF9OQU1FUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/constants.ts\n");

/***/ }),

/***/ "./pages/_document.page.tsx":
/*!**********************************!*\
  !*** ./pages/_document.page.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/constants */ \"./common/constants.ts\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var utils_$path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/$path */ \"./utils/$path.ts\");\n\n\n\n\nfunction Document() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n        lang: \"ja\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: common_constants__WEBPACK_IMPORTED_MODULE_1__.APP_NAME\n                    }, void 0, false, {\n                        fileName: \"/Users/a/domitory/client/pages/_document.page.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: utils_$path__WEBPACK_IMPORTED_MODULE_3__.staticPath.favicon_png\n                    }, void 0, false, {\n                        fileName: \"/Users/a/domitory/client/pages/_document.page.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/a/domitory/client/pages/_document.page.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                        fileName: \"/Users/a/domitory/client/pages/_document.page.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                        fileName: \"/Users/a/domitory/client/pages/_document.page.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/a/domitory/client/pages/_document.page.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/a/domitory/client/pages/_document.page.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Document);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQucGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDaUI7QUFDcEI7QUFFekMsU0FBU007SUFDUCxxQkFDRSw4REFBQ0osK0NBQUlBO1FBQUNLLE1BQUs7OzBCQUNULDhEQUFDTiwrQ0FBSUE7O2tDQUNILDhEQUFDTzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBU1Ysc0RBQVFBOzs7Ozs7a0NBQzFDLDhEQUFDVzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBTVIsbURBQVVBLENBQUNTLFdBQVc7Ozs7Ozs7Ozs7OzswQkFFL0MsOERBQUNDOztrQ0FDQyw4REFBQ1osK0NBQUlBOzs7OztrQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQjtBQUVBLGlFQUFlRSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2RvY3VtZW50LnBhZ2UudHN4PzBkNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tIFwiY29tbW9uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSGVhZCwgSHRtbCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5pbXBvcnQgeyBzdGF0aWNQYXRoIH0gZnJvbSBcInV0aWxzLyRwYXRoXCI7XG5cbmZ1bmN0aW9uIERvY3VtZW50KCkge1xuICByZXR1cm4gKFxuICAgIDxIdG1sIGxhbmc9XCJqYVwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e0FQUF9OQU1FfSAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17c3RhdGljUGF0aC5mYXZpY29uX3BuZ30gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8TWFpbiAvPlxuICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvSHRtbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnQ7XG4iXSwibmFtZXMiOlsiQVBQX05BTUUiLCJIZWFkIiwiSHRtbCIsIk1haW4iLCJOZXh0U2NyaXB0Iiwic3RhdGljUGF0aCIsIkRvY3VtZW50IiwibGFuZyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiZmF2aWNvbl9wbmciLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_document.page.tsx\n");

/***/ }),

/***/ "./utils/$path.ts":
/*!************************!*\
  !*** ./utils/$path.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pagesPath: () => (/* binding */ pagesPath),\n/* harmony export */   staticPath: () => (/* binding */ staticPath)\n/* harmony export */ });\nconst pagesPath = {\n    \"calendar\": {\n        $url: (url)=>({\n                pathname: \"/calendar\",\n                hash: url?.hash\n            })\n    },\n    \"docs\": {\n        $url: (url)=>({\n                pathname: \"/docs\",\n                hash: url?.hash\n            })\n    },\n    \"faq\": {\n        $url: (url)=>({\n                pathname: \"/faq\",\n                hash: url?.hash\n            })\n    },\n    \"login\": {\n        $url: (url)=>({\n                pathname: \"/login\",\n                hash: url?.hash\n            })\n    },\n    \"rule\": {\n        $url: (url)=>({\n                pathname: \"/rule\",\n                hash: url?.hash\n            })\n    },\n    $url: (url)=>({\n            pathname: \"/\",\n            hash: url?.hash\n        })\n};\nconst staticPath = {\n    docs: {\n        openapi_json: \"/docs/openapi.json\"\n    },\n    favicon_png: \"/favicon.png\",\n    frourio_svg: \"/frourio.svg\",\n    images: {\n        bg_jpg: \"/images/bg.jpg\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy8kcGF0aC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLFlBQVk7SUFDdkIsWUFBWTtRQUNWQyxNQUFNLENBQUNDLE1BQXFEO2dCQUFFQyxVQUFVO2dCQUFzQkMsTUFBTUYsS0FBS0U7WUFBSztJQUNoSDtJQUNBLFFBQVE7UUFDTkgsTUFBTSxDQUFDQyxNQUFxRDtnQkFBRUMsVUFBVTtnQkFBa0JDLE1BQU1GLEtBQUtFO1lBQUs7SUFDNUc7SUFDQSxPQUFPO1FBQ0xILE1BQU0sQ0FBQ0MsTUFBcUQ7Z0JBQUVDLFVBQVU7Z0JBQWlCQyxNQUFNRixLQUFLRTtZQUFLO0lBQzNHO0lBQ0EsU0FBUztRQUNQSCxNQUFNLENBQUNDLE1BQXFEO2dCQUFFQyxVQUFVO2dCQUFtQkMsTUFBTUYsS0FBS0U7WUFBSztJQUM3RztJQUNBLFFBQVE7UUFDTkgsTUFBTSxDQUFDQyxNQUFxRDtnQkFBRUMsVUFBVTtnQkFBa0JDLE1BQU1GLEtBQUtFO1lBQUs7SUFDNUc7SUFDQUgsTUFBTSxDQUFDQyxNQUFxRDtZQUFFQyxVQUFVO1lBQWNDLE1BQU1GLEtBQUtFO1FBQUs7QUFDeEcsRUFBRTtBQUlLLE1BQU1DLGFBQWE7SUFDeEJDLE1BQU07UUFDSkMsY0FBYztJQUNoQjtJQUNBQyxhQUFhO0lBQ2JDLGFBQWE7SUFDYkMsUUFBUTtRQUNOQyxRQUFRO0lBQ1Y7QUFDRixFQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vdXRpbHMvJHBhdGgudHM/M2FlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcGFnZXNQYXRoID0ge1xuICBcImNhbGVuZGFyXCI6IHtcbiAgICAkdXJsOiAodXJsPzogeyBoYXNoPzogc3RyaW5nIHwgdW5kZWZpbmVkIH0gfCB1bmRlZmluZWQpID0+ICh7IHBhdGhuYW1lOiAnL2NhbGVuZGFyJyBhcyBjb25zdCwgaGFzaDogdXJsPy5oYXNoIH0pXG4gIH0sXG4gIFwiZG9jc1wiOiB7XG4gICAgJHVybDogKHVybD86IHsgaGFzaD86IHN0cmluZyB8IHVuZGVmaW5lZCB9IHwgdW5kZWZpbmVkKSA9PiAoeyBwYXRobmFtZTogJy9kb2NzJyBhcyBjb25zdCwgaGFzaDogdXJsPy5oYXNoIH0pXG4gIH0sXG4gIFwiZmFxXCI6IHtcbiAgICAkdXJsOiAodXJsPzogeyBoYXNoPzogc3RyaW5nIHwgdW5kZWZpbmVkIH0gfCB1bmRlZmluZWQpID0+ICh7IHBhdGhuYW1lOiAnL2ZhcScgYXMgY29uc3QsIGhhc2g6IHVybD8uaGFzaCB9KVxuICB9LFxuICBcImxvZ2luXCI6IHtcbiAgICAkdXJsOiAodXJsPzogeyBoYXNoPzogc3RyaW5nIHwgdW5kZWZpbmVkIH0gfCB1bmRlZmluZWQpID0+ICh7IHBhdGhuYW1lOiAnL2xvZ2luJyBhcyBjb25zdCwgaGFzaDogdXJsPy5oYXNoIH0pXG4gIH0sXG4gIFwicnVsZVwiOiB7XG4gICAgJHVybDogKHVybD86IHsgaGFzaD86IHN0cmluZyB8IHVuZGVmaW5lZCB9IHwgdW5kZWZpbmVkKSA9PiAoeyBwYXRobmFtZTogJy9ydWxlJyBhcyBjb25zdCwgaGFzaDogdXJsPy5oYXNoIH0pXG4gIH0sXG4gICR1cmw6ICh1cmw/OiB7IGhhc2g/OiBzdHJpbmcgfCB1bmRlZmluZWQgfSB8IHVuZGVmaW5lZCkgPT4gKHsgcGF0aG5hbWU6ICcvJyBhcyBjb25zdCwgaGFzaDogdXJsPy5oYXNoIH0pXG59O1xuXG5leHBvcnQgdHlwZSBQYWdlc1BhdGggPSB0eXBlb2YgcGFnZXNQYXRoO1xuXG5leHBvcnQgY29uc3Qgc3RhdGljUGF0aCA9IHtcbiAgZG9jczoge1xuICAgIG9wZW5hcGlfanNvbjogJy9kb2NzL29wZW5hcGkuanNvbidcbiAgfSxcbiAgZmF2aWNvbl9wbmc6ICcvZmF2aWNvbi5wbmcnLFxuICBmcm91cmlvX3N2ZzogJy9mcm91cmlvLnN2ZycsXG4gIGltYWdlczoge1xuICAgIGJnX2pwZzogJy9pbWFnZXMvYmcuanBnJ1xuICB9XG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBTdGF0aWNQYXRoID0gdHlwZW9mIHN0YXRpY1BhdGg7XG4iXSwibmFtZXMiOlsicGFnZXNQYXRoIiwiJHVybCIsInVybCIsInBhdGhuYW1lIiwiaGFzaCIsInN0YXRpY1BhdGgiLCJkb2NzIiwib3BlbmFwaV9qc29uIiwiZmF2aWNvbl9wbmciLCJmcm91cmlvX3N2ZyIsImltYWdlcyIsImJnX2pwZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/$path.ts\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.page.tsx")));
module.exports = __webpack_exports__;

})();