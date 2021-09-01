"use strict";
(() => {
var exports = {};
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 6612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

// import ReactMarkdown from "react-markdown"
// import Moment from "react-moment"
// import { fetchAPI } from "../../lib/api"
// import Layout from "../../components/layout"
// import NextImage from "../../components/image"
// import Seo from "../../components/seo"
// import { getStrapiMedia } from "../../lib/media"


const Article = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
    children: "Article Slug"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article); // import ReactMarkdown from "react-markdown"
// import Moment from "react-moment"
// import { fetchAPI } from "../../lib/api"
// import Layout from "../../components/layout"
// import NextImage from "../../components/image"
// import Seo from "../../components/seo"
// import { getStrapiMedia } from "../../lib/media"
// const Article = ({ article, categories }) => {
//   const imageUrl = getStrapiMedia(article.image)
//   const seo = {
//     metaTitle: article.title,
//     metaDescription: article.description,
//     shareImage: article.image,
//     article: true,
//   }
//   return (
//     <Layout categories={categories}>
//       <Seo seo={seo} />
//       <div
//         id="banner"
//         className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
//         data-src={imageUrl}
//         data-srcset={imageUrl}
//         data-uk-img
//       >
//         <h1>{article.title}</h1>
//       </div>
//       <div className="uk-section">
//         <div className="uk-container uk-container-small">
//           <ReactMarkdown source={article.content} escapeHtml={false} />
//           <hr className="uk-divider-small" />
//           <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
//             <div>
//               {article.author.picture && (
//                 <NextImage image={article.author.picture} />
//               )}
//             </div>
//             <div className="uk-width-expand">
//               <p className="uk-margin-remove-bottom">
//                 By {article.author.name}
//               </p>
//               <p className="uk-text-meta uk-margin-remove-top">
//                 <Moment format="MMM Do YYYY">{article.published_at}</Moment>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }
// export async function getStaticPaths() {
//   const articles = await fetchAPI("/articles")
//   return {
//     paths: articles.map((article) => ({
//       params: {
//         slug: article.slug,
//       },
//     })),
//     fallback: false,
//   }
// }
// export async function getStaticProps({ params }) {
//   const articles = await fetchAPI(`/articles?slug=${params.slug}`)
//   const categories = await fetchAPI("/categories")
//   return {
//     props: { article: articles[0], categories },
//     revalidate: 1,
//   }
// }
// export default Article

/***/ }),

/***/ 3426:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6612));
module.exports = __webpack_exports__;

})();