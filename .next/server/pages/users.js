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
exports.id = "pages/users";
exports.ids = ["pages/users"];
exports.modules = {

/***/ "./pages/users/index.js":
/*!******************************!*\
  !*** ./pages/users/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/seanmodd/Development/2021/perkins-strapi-next/my-project/frontend/pages/users/index.js\";\n\n\n\nfunction UsersPage() {\n  const {\n    0: users,\n    1: setUsers\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n\n  const fetchComments = async () => {\n    const response = await fetch('/api/hello');\n    const data = await response.json();\n    setUsers(data);\n  };\n\n  const submitUser = async () => {\n    const response = await fetch('/api/hello', {\n      method: 'POST',\n      body: JSON.stringify({\n        user\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n    const data = await response.json();\n    console.log(data);\n  }; // const [users, setUsers] = useState([])\n  // const [name, setName] = useState('')\n  // const fetchComments = async () => {\n  //   const response = await fetch('/api/hello')\n  //   const data = await response.json()\n  //   console.log(data)\n  //   setUsers(data)\n  // }\n  // const submitName = async () => {\n  //   const response = await fetch('/api/hello', {\n  //     method: 'POST',\n  //     headers: {\n  //       'Content-Type': 'application/json',\n  //     },\n  //     body: JSON.stringify({ name }),\n  //   })\n  //   const data = await response.json()\n  //   console.log(\n  //     'here is what you get... from here on we handle data in our api route folder',\n  //     data\n  //   )\n  // }\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Users\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n        mb: \"15px\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n          children: \"Interested? Add your name below!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          value: user,\n          onChange: e => setUser(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: submitUser,\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: fetchComments,\n        children: \"Load Users!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), users.map(user => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: user.id\n      }, user.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, this))]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNLLFNBQVQsR0FBcUI7QUFDbkIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ksSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JMLCtDQUFRLENBQUMsRUFBRCxDQUFoQzs7QUFFQSxRQUFNTSxhQUFhLEdBQUcsWUFBWTtBQUNoQyxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLFlBQUQsQ0FBNUI7QUFDQSxVQUFNQyxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQW5CO0FBQ0FQLElBQUFBLFFBQVEsQ0FBQ00sSUFBRCxDQUFSO0FBQ0QsR0FKRDs7QUFNQSxRQUFNRSxVQUFVLEdBQUcsWUFBWTtBQUM3QixVQUFNSixRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLFlBQUQsRUFBZTtBQUN6Q0ksTUFBQUEsTUFBTSxFQUFFLE1BRGlDO0FBRXpDQyxNQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVYLFFBQUFBO0FBQUYsT0FBZixDQUZtQztBQUd6Q1ksTUFBQUEsT0FBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQ7QUFIZ0MsS0FBZixDQUE1QjtBQU9BLFVBQU1QLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFDQU8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULElBQVo7QUFDRCxHQVZELENBVm1CLENBc0JuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsb0RBQUQ7QUFBQSw4QkFDRSw4REFBQyxtREFBRDtBQUFPLFVBQUUsRUFBQyxNQUFWO0FBQUEsZ0NBQ0UsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsZUFBSyxFQUFFTCxJQUZUO0FBR0Usa0JBQVEsRUFBR2UsQ0FBRCxJQUFPZCxPQUFPLENBQUNjLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWO0FBSDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFPRTtBQUFRLGlCQUFPLEVBQUVWLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUU7QUFBUSxlQUFPLEVBQUVMLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsRUFZR0osS0FBSyxDQUFDb0IsR0FBTixDQUFXbEIsSUFBRCxpQkFDVDtBQUFBLGtCQUFvQkEsSUFBSSxDQUFDbUI7QUFBekIsU0FBVW5CLElBQUksQ0FBQ21CLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELENBWkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0FBRUQsaUVBQWV0QixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9wYWdlcy91c2Vycy9pbmRleC5qcz81YmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRpbmcsIFN0YWNrLCBUZXh0LCBWU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gVXNlcnNQYWdlKCkge1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBmZXRjaENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvaGVsbG8nKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBzZXRVc2VycyhkYXRhKVxuICB9XG5cbiAgY29uc3Qgc3VibWl0VXNlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2hlbGxvJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXIgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICAvLyBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKVxuICAvLyBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgLy8gY29uc3QgZmV0Y2hDb21tZW50cyA9IGFzeW5jICgpID0+IHtcbiAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2hlbGxvJylcbiAgLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIC8vICAgY29uc29sZS5sb2coZGF0YSlcbiAgLy8gICBzZXRVc2VycyhkYXRhKVxuICAvLyB9XG4gIC8vIGNvbnN0IHN1Ym1pdE5hbWUgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9oZWxsbycsIHtcbiAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuICAvLyAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAvLyAgICAgfSxcbiAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSB9KSxcbiAgLy8gICB9KVxuICAvLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgLy8gICBjb25zb2xlLmxvZyhcbiAgLy8gICAgICdoZXJlIGlzIHdoYXQgeW91IGdldC4uLiBmcm9tIGhlcmUgb24gd2UgaGFuZGxlIGRhdGEgaW4gb3VyIGFwaSByb3V0ZSBmb2xkZXInLFxuICAvLyAgICAgZGF0YVxuICAvLyAgIClcbiAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Vc2VyczwvaDE+XG4gICAgICA8VlN0YWNrPlxuICAgICAgICA8U3RhY2sgbWI9XCIxNXB4XCI+XG4gICAgICAgICAgPFRleHQ+SW50ZXJlc3RlZD8gQWRkIHlvdXIgbmFtZSBiZWxvdyE8L1RleHQ+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dXNlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdFVzZXJ9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoQ29tbWVudHN9PkxvYWQgVXNlcnMhPC9idXR0b24+XG5cbiAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXt1c2VyLmlkfT57dXNlci5pZH08L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L1ZTdGFjaz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1BhZ2VcbiJdLCJuYW1lcyI6WyJIZWFkaW5nIiwiU3RhY2siLCJUZXh0IiwiVlN0YWNrIiwidXNlU3RhdGUiLCJVc2Vyc1BhZ2UiLCJ1c2VycyIsInNldFVzZXJzIiwidXNlciIsInNldFVzZXIiLCJmZXRjaENvbW1lbnRzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic3VibWl0VXNlciIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/index.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/users/index.js"));
module.exports = __webpack_exports__;

})();