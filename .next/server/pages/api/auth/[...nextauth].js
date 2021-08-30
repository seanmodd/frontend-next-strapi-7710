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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n// frontend/pages/api/auth/[...nextauth].js\n// import NextAuth from \"next-auth\";\n// import Providers from \"next-auth/providers\";\n// const options = {\n//   providers: [\n//     Providers.Google({\n//       clientId: process.env.GOOGLE_CLIENT_ID,\n//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n//     }),\n//   ],\n//   database: process.env.NEXT_PUBLIC_DATABASE_URL,\n//   session: {\n//     jwt: true,\n//   },\n//   callbacks: {\n//     session: async (session, user) => {\n//       session.jwt = user.jwt;\n//       session.id = user.id;\n//       return Promise.resolve(session);\n//     },\n//     jwt: async (token, user, account) => {\n//       const isSignIn = user ? true : false;\n//       if (isSignIn) {\n//         const response = await fetch(\n//           `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`\n//         );\n//         const data = await response.json();\n//         token.jwt = data.jwt;\n//         token.id = data.user.id;\n//       }\n//       return Promise.resolve(token);\n//     },\n//   },\n// };\n// const Auth = (req, res) =>\n//   NextAuth(req, res, options);\n// export default Auth;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Google({\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SECRET\n  }) // Providers.GitHub({\n  //   clientId: process.env.GITHUB_ID,\n  //   clientSecret: process.env.GITHUB_SECRET,\n  // }),\n  ],\n  // database: process.env.REACT_APP_DB_URL,\n  database: \"postgres://nyppyqdjutgoie:88d0645703233188fea122e3460e4d7cc304031ca36b85dc7cf5346985e2a5e1@ec2-54-211-160-34.compute-1.amazonaws.com:5432/dk3sv73tcl54h\",\n  session: {\n    jwt: true\n  },\n  jwt: {\n    secret: 'asdcvbtjhm'\n  },\n  callbacks: {\n    async jwt(token, user) {\n      if (user) {\n        token.id = user.id;\n      }\n\n      return token;\n    },\n\n    async session(session, token) {\n      session.user.id = token.id;\n      return session;\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBRUEsaUVBQWVBLGdEQUFRLENBQUM7QUFDdEJFLEVBQUFBLFNBQVMsRUFBRSxDQUVURCxpRUFBQSxDQUFpQjtBQUNmRyxJQUFBQSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFEUDtBQUVmQyxJQUFBQSxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZYLEdBQWpCLENBRlMsQ0FNVDtBQUNBO0FBQ0E7QUFDQTtBQVRTLEdBRFc7QUFZdEI7QUFDQUMsRUFBQUEsUUFBUSxFQUFFTCx5SkFiWTtBQWN0Qk8sRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLEdBQUcsRUFBRTtBQURFLEdBZGE7QUFpQnRCQSxFQUFBQSxHQUFHLEVBQUU7QUFDSEMsSUFBQUEsTUFBTSxFQUFFO0FBREwsR0FqQmlCO0FBb0J0QkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1QsVUFBTUYsR0FBTixDQUFVRyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNyQixVQUFJQSxJQUFKLEVBQVU7QUFDUkQsUUFBQUEsS0FBSyxDQUFDRSxFQUFOLEdBQVdELElBQUksQ0FBQ0MsRUFBaEI7QUFDRDs7QUFDRCxhQUFPRixLQUFQO0FBQ0QsS0FOUTs7QUFPVCxVQUFNSixPQUFOLENBQWNBLE9BQWQsRUFBdUJJLEtBQXZCLEVBQThCO0FBQzVCSixNQUFBQSxPQUFPLENBQUNLLElBQVIsQ0FBYUMsRUFBYixHQUFrQkYsS0FBSyxDQUFDRSxFQUF4QjtBQUNBLGFBQU9OLE9BQVA7QUFDRDs7QUFWUTtBQXBCVyxDQUFELENBQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBmcm9udGVuZC9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzXG5cbi8vIGltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG4vLyBpbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XG5cbi8vIGNvbnN0IG9wdGlvbnMgPSB7XG4vLyAgIHByb3ZpZGVyczogW1xuLy8gICAgIFByb3ZpZGVycy5Hb29nbGUoe1xuLy8gICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4vLyAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuLy8gICAgIH0pLFxuLy8gICBdLFxuLy8gICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREFUQUJBU0VfVVJMLFxuLy8gICBzZXNzaW9uOiB7XG4vLyAgICAgand0OiB0cnVlLFxuLy8gICB9LFxuLy8gICBjYWxsYmFja3M6IHtcbi8vICAgICBzZXNzaW9uOiBhc3luYyAoc2Vzc2lvbiwgdXNlcikgPT4ge1xuLy8gICAgICAgc2Vzc2lvbi5qd3QgPSB1c2VyLmp3dDtcbi8vICAgICAgIHNlc3Npb24uaWQgPSB1c2VyLmlkO1xuLy8gICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXNzaW9uKTtcbi8vICAgICB9LFxuLy8gICAgIGp3dDogYXN5bmMgKHRva2VuLCB1c2VyLCBhY2NvdW50KSA9PiB7XG4vLyAgICAgICBjb25zdCBpc1NpZ25JbiA9IHVzZXIgPyB0cnVlIDogZmFsc2U7XG4vLyAgICAgICBpZiAoaXNTaWduSW4pIHtcbi8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbi8vICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hdXRoLyR7YWNjb3VudC5wcm92aWRlcn0vY2FsbGJhY2s/YWNjZXNzX3Rva2VuPSR7YWNjb3VudD8uYWNjZXNzVG9rZW59YFxuLy8gICAgICAgICApO1xuLy8gICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgICAgICB0b2tlbi5qd3QgPSBkYXRhLmp3dDtcbi8vICAgICAgICAgdG9rZW4uaWQgPSBkYXRhLnVzZXIuaWQ7XG4vLyAgICAgICB9XG4vLyAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRva2VuKTtcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gfTtcblxuLy8gY29uc3QgQXV0aCA9IChyZXEsIHJlcykgPT5cbi8vICAgTmV4dEF1dGgocmVxLCByZXMsIG9wdGlvbnMpO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBBdXRoO1xuXG5cblxuXG5cblxuXG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG5cbiAgICBQcm92aWRlcnMuR29vZ2xlKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICAvLyBQcm92aWRlcnMuR2l0SHViKHtcbiAgICAvLyAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgLy8gICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgLy8gfSksXG4gIF0sXG4gIC8vIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfVVJMLFxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREFUQUJBU0VfVVJMLFxuICBzZXNzaW9uOiB7XG4gICAgand0OiB0cnVlLFxuICB9LFxuICBqd3Q6IHtcbiAgICBzZWNyZXQ6ICdhc2RjdmJ0amhtJyxcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHRva2VuLCB1c2VyKSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHNlc3Npb24sIHRva2VuKSB7XG4gICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZDtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG59KTtcblxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiUHJvdmlkZXJzIiwicHJvdmlkZXJzIiwiR29vZ2xlIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiZGF0YWJhc2UiLCJORVhUX1BVQkxJQ19EQVRBQkFTRV9VUkwiLCJzZXNzaW9uIiwiand0Iiwic2VjcmV0IiwiY2FsbGJhY2tzIiwidG9rZW4iLCJ1c2VyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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