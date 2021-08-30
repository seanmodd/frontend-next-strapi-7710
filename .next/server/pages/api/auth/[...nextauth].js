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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n// frontend/pages/api/auth/[...nextauth].js\n// import NextAuth from \"next-auth\";\n// import Providers from \"next-auth/providers\";\n// const options = {\n//   providers: [\n//     Providers.Google({\n//       clientId: process.env.GOOGLE_CLIENT_ID,\n//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n//     }),\n//   ],\n//   database: process.env.NEXT_PUBLIC_DATABASE_URL,\n//   session: {\n//     jwt: true,\n//   },\n//   callbacks: {\n//     session: async (session, user) => {\n//       session.jwt = user.jwt;\n//       session.id = user.id;\n//       return Promise.resolve(session);\n//     },\n//     jwt: async (token, user, account) => {\n//       const isSignIn = user ? true : false;\n//       if (isSignIn) {\n//         const response = await fetch(\n//           `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`\n//         );\n//         const data = await response.json();\n//         token.jwt = data.jwt;\n//         token.id = data.user.id;\n//       }\n//       return Promise.resolve(token);\n//     },\n//   },\n// };\n// const Auth = (req, res) =>\n//   NextAuth(req, res, options);\n// export default Auth;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Google({\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SECRET\n  }) // Providers.GitHub({\n  //   clientId: process.env.GITHUB_ID,\n  //   clientSecret: process.env.GITHUB_SECRET,\n  // }),\n  ],\n  // database: process.env.REACT_APP_DB_URL,\n  database: process.env.NEXT_PUBLIC_DATABASE_URL,\n  session: {\n    jwt: true\n  },\n  jwt: {\n    secret: 'asdcvbtjhm'\n  },\n  callbacks: {\n    async jwt(token, user) {\n      if (user) {\n        token.id = user.id;\n      }\n\n      return token;\n    },\n\n    async session(session, token) {\n      session.user.id = token.id;\n      return session;\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBRUEsaUVBQWVBLGdEQUFRLENBQUM7QUFDdEJFLEVBQUFBLFNBQVMsRUFBRSxDQUVURCxpRUFBQSxDQUFpQjtBQUNmRyxJQUFBQSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFEUDtBQUVmQyxJQUFBQSxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZYLEdBQWpCLENBRlMsQ0FNVDtBQUNBO0FBQ0E7QUFDQTtBQVRTLEdBRFc7QUFZdEI7QUFDQUMsRUFBQUEsUUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssd0JBYkE7QUFjdEJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxHQUFHLEVBQUU7QUFERSxHQWRhO0FBaUJ0QkEsRUFBQUEsR0FBRyxFQUFFO0FBQ0hDLElBQUFBLE1BQU0sRUFBRTtBQURMLEdBakJpQjtBQW9CdEJDLEVBQUFBLFNBQVMsRUFBRTtBQUNULFVBQU1GLEdBQU4sQ0FBVUcsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckIsVUFBSUEsSUFBSixFQUFVO0FBQ1JELFFBQUFBLEtBQUssQ0FBQ0UsRUFBTixHQUFXRCxJQUFJLENBQUNDLEVBQWhCO0FBQ0Q7O0FBQ0QsYUFBT0YsS0FBUDtBQUNELEtBTlE7O0FBT1QsVUFBTUosT0FBTixDQUFjQSxPQUFkLEVBQXVCSSxLQUF2QixFQUE4QjtBQUM1QkosTUFBQUEsT0FBTyxDQUFDSyxJQUFSLENBQWFDLEVBQWIsR0FBa0JGLEtBQUssQ0FBQ0UsRUFBeEI7QUFDQSxhQUFPTixPQUFQO0FBQ0Q7O0FBVlE7QUFwQlcsQ0FBRCxDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz85OTA5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gZnJvbnRlbmQvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qc1xuXG4vLyBpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuLy8gaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiO1xuXG4vLyBjb25zdCBvcHRpb25zID0ge1xuLy8gICBwcm92aWRlcnM6IFtcbi8vICAgICBQcm92aWRlcnMuR29vZ2xlKHtcbi8vICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuLy8gICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbi8vICAgICB9KSxcbi8vICAgXSxcbi8vICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RBVEFCQVNFX1VSTCxcbi8vICAgc2Vzc2lvbjoge1xuLy8gICAgIGp3dDogdHJ1ZSxcbi8vICAgfSxcbi8vICAgY2FsbGJhY2tzOiB7XG4vLyAgICAgc2Vzc2lvbjogYXN5bmMgKHNlc3Npb24sIHVzZXIpID0+IHtcbi8vICAgICAgIHNlc3Npb24uand0ID0gdXNlci5qd3Q7XG4vLyAgICAgICBzZXNzaW9uLmlkID0gdXNlci5pZDtcbi8vICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2Vzc2lvbik7XG4vLyAgICAgfSxcbi8vICAgICBqd3Q6IGFzeW5jICh0b2tlbiwgdXNlciwgYWNjb3VudCkgPT4ge1xuLy8gICAgICAgY29uc3QgaXNTaWduSW4gPSB1c2VyID8gdHJ1ZSA6IGZhbHNlO1xuLy8gICAgICAgaWYgKGlzU2lnbkluKSB7XG4vLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vYXV0aC8ke2FjY291bnQucHJvdmlkZXJ9L2NhbGxiYWNrP2FjY2Vzc190b2tlbj0ke2FjY291bnQ/LmFjY2Vzc1Rva2VufWBcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICAgICAgdG9rZW4uand0ID0gZGF0YS5qd3Q7XG4vLyAgICAgICAgIHRva2VuLmlkID0gZGF0YS51c2VyLmlkO1xuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0b2tlbik7XG4vLyAgICAgfSxcbi8vICAgfSxcbi8vIH07XG5cbi8vIGNvbnN0IEF1dGggPSAocmVxLCByZXMpID0+XG4vLyAgIE5leHRBdXRoKHJlcSwgcmVzLCBvcHRpb25zKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgQXV0aDtcblxuXG5cblxuXG5cblxuaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuXG4gICAgUHJvdmlkZXJzLkdvb2dsZSh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gICAgLy8gUHJvdmlkZXJzLkdpdEh1Yih7XG4gICAgLy8gICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAgIC8vICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxuICAgIC8vIH0pLFxuICBdLFxuICAvLyBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RCX1VSTCxcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RBVEFCQVNFX1VSTCxcbiAgc2Vzc2lvbjoge1xuICAgIGp3dDogdHJ1ZSxcbiAgfSxcbiAgand0OiB7XG4gICAgc2VjcmV0OiAnYXNkY3ZidGpobScsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh0b2tlbiwgdXNlcikge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbihzZXNzaW9uLCB0b2tlbikge1xuICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQ7XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxufSk7XG5cbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlByb3ZpZGVycyIsInByb3ZpZGVycyIsIkdvb2dsZSIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImRhdGFiYXNlIiwiTkVYVF9QVUJMSUNfREFUQUJBU0VfVVJMIiwic2Vzc2lvbiIsImp3dCIsInNlY3JldCIsImNhbGxiYWNrcyIsInRva2VuIiwidXNlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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