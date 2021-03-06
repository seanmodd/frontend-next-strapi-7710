"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers"
const providers_namespaceObject = require("next-auth/providers");
var providers_default = /*#__PURE__*/__webpack_require__.n(providers_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js


/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
  providers: [providers_default().Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }), providers_default().Twitter({
    clientId: process.env.TWITTER_ID,
    clientSecret: process.env.TWITTER_SECRET
  }), providers_default().GitHub({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }), providers_default().Email({
    server: {
      host: '',
      port: '',
      auth: {
        user: '',
        pass: ''
      }
    },
    from: ''
  })],
  // database: process.env.REACT_APP_DB_URL,
  database: "postgres://nyppyqdjutgoie:88d0645703233188fea122e3460e4d7cc304031ca36b85dc7cf5346985e2a5e1@ec2-54-211-160-34.compute-1.amazonaws.com:5432/dk3sv73tcl54h",
  session: {
    jwt: true
  },
  jwt: {
    secret: 'asdcvbtjhm'
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },

    async session(session, token) {
      session.user.id = token.id;
      return session;
    }

  }
}));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(555));
module.exports = __webpack_exports__;

})();