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
exports.id = "pages/myaccount";
exports.ids = ["pages/myaccount"];
exports.modules = {

/***/ "./pages/myaccount.js":
/*!****************************!*\
  !*** ./pages/myaccount.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/seanmodd/Development/2021/perkins-strapi-next/my-project/frontend/pages/myaccount.js\";\n\n\n\n\nfunction MyAccount() {\n  const {\n    0: loading,\n    1: setLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n  const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const securePage = async () => {\n      const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.getSession)();\n\n      if (!session) {\n        (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signIn)();\n      } else {\n        setLoading(false);\n      }\n    };\n\n    securePage();\n  }, []);\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n      pt: \"50px\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n        className: \"title\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n    pt: \"50px\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n      className: \"title\",\n      pb: \"20px\",\n      children: \"My Account Page!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n      fontSize: \"2xl\",\n      children: [\"Owner: \", session.user.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyAccount);\nasync function getServerSideProps(context) {\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.getSession)(context);\n\n  if (!session) {\n    return {\n      redirect: {\n        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/',\n        permanent: false\n      }\n    };\n  }\n\n  return {\n    props: {\n      data: 'List of 100 Blog Titles',\n      session\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9teWFjY291bnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLFNBQVNPLFNBQVQsR0FBcUI7QUFDbkIsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCVCwrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFNLENBQUNVLE9BQUQsSUFBWUosNERBQVUsRUFBNUI7QUFFQUwsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTVUsVUFBVSxHQUFHLFlBQVk7QUFDN0IsWUFBTUQsT0FBTyxHQUFHLE1BQU1OLDREQUFVLEVBQWhDOztBQUNBLFVBQUksQ0FBQ00sT0FBTCxFQUFjO0FBQ1pMLFFBQUFBLHdEQUFNO0FBQ1AsT0FGRCxNQUVPO0FBQ0xJLFFBQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDtBQUNGLEtBUEQ7O0FBUUFFLElBQUFBLFVBQVU7QUFDWCxHQVZRLEVBVU4sRUFWTSxDQUFUOztBQVlBLE1BQUlILE9BQUosRUFBYTtBQUNYLHdCQUNFLDhEQUFDLG9EQUFEO0FBQVEsUUFBRSxFQUFDLE1BQVg7QUFBQSw2QkFDRSw4REFBQyxxREFBRDtBQUFTLGlCQUFTLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDs7QUFDRCxzQkFDRSw4REFBQyxvREFBRDtBQUFRLE1BQUUsRUFBQyxNQUFYO0FBQUEsNEJBQ0UsOERBQUMscURBQUQ7QUFBUyxlQUFTLEVBQUMsT0FBbkI7QUFBMkIsUUFBRSxFQUFDLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSw4REFBQyxxREFBRDtBQUFTLGNBQVEsRUFBQyxLQUFsQjtBQUFBLDRCQUFnQ0UsT0FBTyxDQUFDRSxJQUFSLENBQWFDLElBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0FBQ0QsaUVBQWVOLFNBQWY7QUFDTyxlQUFlTyxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDaEQsUUFBTUwsT0FBTyxHQUFHLE1BQU1OLDREQUFVLENBQUNXLE9BQUQsQ0FBaEM7O0FBQ0EsTUFBSSxDQUFDTCxPQUFMLEVBQWM7QUFDWixXQUFPO0FBQ0xNLE1BQUFBLFFBQVEsRUFBRTtBQUNSQyxRQUFBQSxXQUFXLEVBQUUscURBREw7QUFFUkMsUUFBQUEsU0FBUyxFQUFFO0FBRkg7QUFETCxLQUFQO0FBTUQ7O0FBQ0QsU0FBTztBQUNMQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsSUFBSSxFQUFFLHlCQUREO0FBRUxWLE1BQUFBO0FBRks7QUFERixHQUFQO0FBTUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3BhZ2VzL215YWNjb3VudC5qcz9lNDQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0hlYWRpbmcsIFZTdGFja30gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgc2lnbkluLCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XG5cblxuXG5mdW5jdGlvbiBNeUFjY291bnQoKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZWN1cmVQYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKTtcbiAgICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgICBzaWduSW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgc2VjdXJlUGFnZSgpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFZTdGFjayBwdD1cIjUwcHhcIj5cbiAgICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPVwidGl0bGVcIj5Mb2FkaW5nLi4uPC9IZWFkaW5nPlxuICAgICAgPC9WU3RhY2s+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxWU3RhY2sgcHQ9XCI1MHB4XCI+XG4gICAgICA8SGVhZGluZyBjbGFzc05hbWU9XCJ0aXRsZVwiIHBiPVwiMjBweFwiPlxuICAgICAgICBNeSBBY2NvdW50IFBhZ2UhXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjJ4bFwiPk93bmVyOiB7c2Vzc2lvbi51c2VyLm5hbWV9PC9IZWFkaW5nPlxuICAgIDwvVlN0YWNrPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgTXlBY2NvdW50O1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246ICcvYXBpL2F1dGgvc2lnbmluP2NhbGxiYWNrVXJsPWh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nLFxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGE6ICdMaXN0IG9mIDEwMCBCbG9nIFRpdGxlcycsXG4gICAgICBzZXNzaW9uLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkaW5nIiwiVlN0YWNrIiwiZ2V0U2Vzc2lvbiIsInNpZ25JbiIsInVzZVNlc3Npb24iLCJNeUFjY291bnQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlc3Npb24iLCJzZWN1cmVQYWdlIiwidXNlciIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsInByb3BzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/myaccount.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

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
var __webpack_exports__ = (__webpack_exec__("./pages/myaccount.js"));
module.exports = __webpack_exports__;

})();