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
// frontend/pages/api/auth/[...nextauth].js
// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
// const options = {
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   database: process.env.NEXT_PUBLIC_DATABASE_URL,
//   session: {
//     jwt: true,
//   },
//   callbacks: {
//     session: async (session, user) => {
//       session.jwt = user.jwt;
//       session.id = user.id;
//       return Promise.resolve(session);
//     },
//     jwt: async (token, user, account) => {
//       const isSignIn = user ? true : false;
//       if (isSignIn) {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`
//         );
//         const data = await response.json();
//         token.jwt = data.jwt;
//         token.id = data.user.id;
//       }
//       return Promise.resolve(token);
//     },
//   },
// };
// const Auth = (req, res) =>
//   NextAuth(req, res, options);
// export default Auth;


/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
  providers: [providers_default().Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }) // Providers.GitHub({
  //   clientId: process.env.GITHUB_ID,
  //   clientSecret: process.env.GITHUB_SECRET,
  // }),
  ],
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