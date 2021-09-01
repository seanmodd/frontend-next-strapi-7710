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
exports.id = "pages/writers";
exports.ids = ["pages/writers"];
exports.modules = {

/***/ "./pages/writers/index.js":
/*!********************************!*\
  !*** ./pages/writers/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/seanmodd/Development/2021/perkins-strapi-next/my-project/frontend/pages/writers/index.js\";\n\n\nfunction UsersPage() {\n  const {\n    0: users,\n    1: setUsers\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n\n  const fetchComments = async () => {\n    const response = await fetch('https://nextjs-strapiapi.herokuapp.com/writers');\n    const data = await response.json();\n    console.log(data);\n    setUsers(data);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Writers\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: fetchComments,\n      children: \"Load Names of Writers!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), users.map(user => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: user.name\n    }, user.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93cml0ZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQyxTQUFULEdBQXFCO0FBQ25CLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkgsK0NBQVEsQ0FBQyxFQUFELENBQWxDOztBQUNBLFFBQU1JLGFBQWEsR0FBRyxZQUFZO0FBQ2hDLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQzFCLGdEQUQwQixDQUE1QjtBQUdBLFVBQU1DLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQUosSUFBQUEsUUFBUSxDQUFDSSxJQUFELENBQVI7QUFDRCxHQVBEOztBQVFBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQVEsYUFBTyxFQUFFSCxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0dGLEtBQUssQ0FBQ1MsR0FBTixDQUFXQyxJQUFELGlCQUNUO0FBQUEsZ0JBQW9CQSxJQUFJLENBQUNDO0FBQXpCLE9BQVVELElBQUksQ0FBQ0UsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsQ0FISCxlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztBQUVELGlFQUFlYixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9wYWdlcy93cml0ZXJzL2luZGV4LmpzPzIzOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gVXNlcnNQYWdlKCkge1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBmZXRjaENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAnaHR0cHM6Ly9uZXh0anMtc3RyYXBpYXBpLmhlcm9rdWFwcC5jb20vd3JpdGVycydcbiAgICApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgc2V0VXNlcnMoZGF0YSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+V3JpdGVyczwvaDE+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoQ29tbWVudHN9PkxvYWQgTmFtZXMgb2YgV3JpdGVycyE8L2J1dHRvbj5cbiAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3VzZXIuaWR9Pnt1c2VyLm5hbWV9PC9kaXY+XG4gICAgICApKX1cbiAgICAgIDx1bCAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzUGFnZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVXNlcnNQYWdlIiwidXNlcnMiLCJzZXRVc2VycyIsImZldGNoQ29tbWVudHMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibWFwIiwidXNlciIsIm5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/writers/index.js\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/writers/index.js"));
module.exports = __webpack_exports__;

})();