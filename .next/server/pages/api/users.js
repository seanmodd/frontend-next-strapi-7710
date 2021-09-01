"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 9244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ../users-data.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = [
  {
    id: 1,
    name: 'Shayan Modjtehedi',
    age: '300',
    hobbies: 'Coding! Here is my fake API I just made btw...',
    image: 'https://learnyzen.com/wp-content/uploads/2017/08/test1-481x385.png',
  },
  {
    id: 2,
    name: 'Chief Keef',
    age: '30',
    hobbies: 'Rapping and shit nigga!',
    image:
      'https://t4.ftcdn.net/jpg/02/85/48/23/360_F_285482318_ZKHUUIcPj6xBjt3JZIKHJfRxUWlKyflN.jpg',
  },
  {
    id: 3,
    name: 'Sean Modd',
    age: '100',
    hobbies: 'Persina history... it is awesome.',
    image:
      'https://thumbs.dreamstime.com/b/man-hipster-avatar-cartoon-guy-black-hair-flat-icon-blue-background-user-person-character-vector-illustration-185480506.jpg',
  },
]
// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.status(200).json([
//     {
//       id: 1,
//       name: 'Shayan Modjtehedi',
//       age: '300',
//       hobbies: 'Coding! Here is my fake API I just made btw...',
//       image:
//         'https://learnyzen.com/wp-content/uploads/2017/08/test1-481x385.png',
//     },
//     {
//       id: 2,
//       name: 'Chief Keef',
//       age: '30',
//       hobbies: 'Rapping and shit nigga!',
//       image:
//         'https://t4.ftcdn.net/jpg/02/85/48/23/360_F_285482318_ZKHUUIcPj6xBjt3JZIKHJfRxUWlKyflN.jpg',
//     },
//     {
//       id: 3,
//       name: 'Sean Modd',
//       age: '100',
//       hobbies: 'Persina history... it is awesome.',
//       image:
//         'https://thumbs.dreamstime.com/b/man-hipster-avatar-cartoon-guy-black-hair-flat-icon-blue-background-user-person-character-vector-illustration-185480506.jpg',
//     },
//   ])
// }

;// CONCATENATED MODULE: ./pages/api/users/index.js

function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const {
      user
    } = req.body;
    const newUser = {
      id: Date.now(),
      name: user
    };
    users.push(newUser);
    res.status(201).json(newUser);
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9244));
module.exports = __webpack_exports__;

})();