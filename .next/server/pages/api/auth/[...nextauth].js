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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Google({\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SECRET\n  }) // Providers.GitHub({\n  //   clientId: process.env.GITHUB_ID,\n  //   clientSecret: process.env.GITHUB_SECRET,\n  // }),\n  ],\n  // database: process.env.REACT_APP_DB_URL,\n  database: \"postgres://nyppyqdjutgoie:88d0645703233188fea122e3460e4d7cc304031ca36b85dc7cf5346985e2a5e1@ec2-54-211-160-34.compute-1.amazonaws.com:5432/dk3sv73tcl54h\",\n  session: {\n    jwt: true\n  },\n  jwt: {\n    secret: 'asdcvbtjhm'\n  },\n  callbacks: {\n    async jwt(token, user) {\n      if (user) {\n        token.id = user.id;\n      }\n\n      return token;\n    },\n\n    async session(session, token) {\n      session.user.id = token.id;\n      return session;\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLGlFQUFlQSxnREFBUSxDQUFDO0FBQ3RCRSxFQUFBQSxTQUFTLEVBQUUsQ0FFVEQsaUVBQUEsQ0FBaUI7QUFDZkcsSUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRFA7QUFFZkMsSUFBQUEsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGWCxHQUFqQixDQUZTLENBTVQ7QUFDQTtBQUNBO0FBQ0E7QUFUUyxHQURXO0FBWXRCO0FBQ0FDLEVBQUFBLFFBQVEsRUFBRUwseUpBYlk7QUFjdEJPLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxHQUFHLEVBQUU7QUFERSxHQWRhO0FBaUJ0QkEsRUFBQUEsR0FBRyxFQUFFO0FBQ0hDLElBQUFBLE1BQU0sRUFBRTtBQURMLEdBakJpQjtBQW9CdEJDLEVBQUFBLFNBQVMsRUFBRTtBQUNULFVBQU1GLEdBQU4sQ0FBVUcsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckIsVUFBSUEsSUFBSixFQUFVO0FBQ1JELFFBQUFBLEtBQUssQ0FBQ0UsRUFBTixHQUFXRCxJQUFJLENBQUNDLEVBQWhCO0FBQ0Q7O0FBQ0QsYUFBT0YsS0FBUDtBQUNELEtBTlE7O0FBT1QsVUFBTUosT0FBTixDQUFjQSxPQUFkLEVBQXVCSSxLQUF2QixFQUE4QjtBQUM1QkosTUFBQUEsT0FBTyxDQUFDSyxJQUFSLENBQWFDLEVBQWIsR0FBa0JGLEtBQUssQ0FBQ0UsRUFBeEI7QUFDQSxhQUFPTixPQUFQO0FBQ0Q7O0FBVlE7QUFwQlcsQ0FBRCxDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz85OTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcblxuICAgIFByb3ZpZGVycy5Hb29nbGUoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICAgIC8vIFByb3ZpZGVycy5HaXRIdWIoe1xuICAgIC8vICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAvLyAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICAvLyB9KSxcbiAgXSxcbiAgLy8gZGF0YWJhc2U6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9EQl9VUkwsXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19EQVRBQkFTRV9VUkwsXG4gIHNlc3Npb246IHtcbiAgICBqd3Q6IHRydWUsXG4gIH0sXG4gIGp3dDoge1xuICAgIHNlY3JldDogJ2FzZGN2YnRqaG0nLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QodG9rZW4sIHVzZXIpIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oc2Vzc2lvbiwgdG9rZW4pIHtcbiAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkO1xuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbn0pO1xuXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJQcm92aWRlcnMiLCJwcm92aWRlcnMiLCJHb29nbGUiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJkYXRhYmFzZSIsIk5FWFRfUFVCTElDX0RBVEFCQVNFX1VSTCIsInNlc3Npb24iLCJqd3QiLCJzZWNyZXQiLCJjYWxsYmFja3MiLCJ0b2tlbiIsInVzZXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();