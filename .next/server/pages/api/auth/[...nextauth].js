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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [// Providers.Google({\n  //   clientId: process.env.GOOGLE_CLIENT_ID,\n  //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n  // }),\n  // Providers.Twitter({\n  //   clientId: process.env.TWITTER_ID,\n  //   clientSecret: process.env.TWITTER_SECRET,\n  // }),\n  next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Email({\n    server: {\n      host: '',\n      port: '',\n      auth: {\n        user: '',\n        pass: ''\n      }\n    },\n    from: ''\n  })],\n  // database: process.env.REACT_APP_DB_URL,\n  database: \"postgres://nyppyqdjutgoie:88d0645703233188fea122e3460e4d7cc304031ca36b85dc7cf5346985e2a5e1@ec2-54-211-160-34.compute-1.amazonaws.com:5432/dk3sv73tcl54h\",\n  session: {\n    jwt: true\n  },\n  jwt: {\n    secret: 'asdcvbtjhm'\n  },\n  callbacks: {\n    async jwt(token, user) {\n      if (user) {\n        token.id = user.id;\n      }\n\n      return token;\n    },\n\n    async session(session, token) {\n      session.user.id = token.id;\n      return session;\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLGlFQUFlQSxnREFBUSxDQUFDO0FBQ3RCRSxFQUFBQSxTQUFTLEVBQUUsQ0FDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FELEVBQUFBLGlFQUFBLENBQWlCO0FBQ2ZHLElBQUFBLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBRFA7QUFFZkMsSUFBQUEsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGWCxHQUFqQixDQVRTLEVBYVRSLGdFQUFBLENBQWdCO0FBQ2RVLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxJQUFJLEVBQUUsRUFEQTtBQUVOQyxNQUFBQSxJQUFJLEVBQUUsRUFGQTtBQUdOQyxNQUFBQSxJQUFJLEVBQUU7QUFDSkMsUUFBQUEsSUFBSSxFQUFFLEVBREY7QUFFSkMsUUFBQUEsSUFBSSxFQUFFO0FBRkY7QUFIQSxLQURNO0FBU2RDLElBQUFBLElBQUksRUFBRTtBQVRRLEdBQWhCLENBYlMsQ0FEVztBQTBCdEI7QUFDQUMsRUFBQUEsUUFBUSxFQUFFYix5SkEzQlk7QUE0QnRCZSxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsR0FBRyxFQUFFO0FBREUsR0E1QmE7QUErQnRCQSxFQUFBQSxHQUFHLEVBQUU7QUFDSEMsSUFBQUEsTUFBTSxFQUFFO0FBREwsR0EvQmlCO0FBa0N0QkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1QsVUFBTUYsR0FBTixDQUFVRyxLQUFWLEVBQWlCVCxJQUFqQixFQUF1QjtBQUNyQixVQUFJQSxJQUFKLEVBQVU7QUFDUlMsUUFBQUEsS0FBSyxDQUFDQyxFQUFOLEdBQVdWLElBQUksQ0FBQ1UsRUFBaEI7QUFDRDs7QUFDRCxhQUFPRCxLQUFQO0FBQ0QsS0FOUTs7QUFPVCxVQUFNSixPQUFOLENBQWNBLE9BQWQsRUFBdUJJLEtBQXZCLEVBQThCO0FBQzVCSixNQUFBQSxPQUFPLENBQUNMLElBQVIsQ0FBYVUsRUFBYixHQUFrQkQsS0FBSyxDQUFDQyxFQUF4QjtBQUNBLGFBQU9MLE9BQVA7QUFDRDs7QUFWUTtBQWxDVyxDQUFELENBQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycydcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcbiAgICAvLyBQcm92aWRlcnMuR29vZ2xlKHtcbiAgICAvLyAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgIC8vICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAvLyB9KSxcbiAgICAvLyBQcm92aWRlcnMuVHdpdHRlcih7XG4gICAgLy8gICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9JRCxcbiAgICAvLyAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9TRUNSRVQsXG4gICAgLy8gfSksXG4gICAgUHJvdmlkZXJzLkdpdEh1Yih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxuICAgIH0pLFxuICAgIFByb3ZpZGVycy5FbWFpbCh7XG4gICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgaG9zdDogJycsXG4gICAgICAgIHBvcnQ6ICcnLFxuICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgdXNlcjogJycsXG4gICAgICAgICAgcGFzczogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZnJvbTogJycsXG4gICAgfSksXG4gIF0sXG4gIC8vIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfVVJMLFxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREFUQUJBU0VfVVJMLFxuICBzZXNzaW9uOiB7XG4gICAgand0OiB0cnVlLFxuICB9LFxuICBqd3Q6IHtcbiAgICBzZWNyZXQ6ICdhc2RjdmJ0amhtJyxcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHRva2VuLCB1c2VyKSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWRcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlblxuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbihzZXNzaW9uLCB0b2tlbikge1xuICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWRcbiAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJQcm92aWRlcnMiLCJwcm92aWRlcnMiLCJHaXRIdWIiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiRW1haWwiLCJzZXJ2ZXIiLCJob3N0IiwicG9ydCIsImF1dGgiLCJ1c2VyIiwicGFzcyIsImZyb20iLCJkYXRhYmFzZSIsIk5FWFRfUFVCTElDX0RBVEFCQVNFX1VSTCIsInNlc3Npb24iLCJqd3QiLCJzZWNyZXQiLCJjYWxsYmFja3MiLCJ0b2tlbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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