"use strict";
exports.id = 160;
exports.ids = [160];
exports.modules = {

/***/ 7966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ articles)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/image.js




const Image = ({
  image,
  style
}) => {
  const {
    url,
    alternativeText
  } = image;

  const loader = () => {
    return getStrapiMedia(image);
  };

  return /*#__PURE__*/_jsx(NextImage, {
    loader: loader,
    layout: "responsive",
    width: image.width,
    height: image.height,
    objectFit: "contain",
    src: url,
    alt: alternativeText || ""
  });
};

/* harmony default export */ const components_image = ((/* unused pure expression or super */ null && (Image)));
;// CONCATENATED MODULE: ./components/card.js






const Card = ({
  article
}) => {
  return (
    /*#__PURE__*/
    // <Link as={`/article/${article.slug}`} href="/article/[id]">
    //   <a className="uk-link-reset">
    //     <div className="uk-card uk-card-muted">
    //       <div className="uk-card-media-top">
    //         <NextImage image={article.image} />
    //       </div>
    //       <div className="uk-card-body">
    //         <p id="category" className="uk-text-uppercase">
    //           {article.category.name}
    //         </p>
    //         <p id="title" className="uk-text-large">
    //           {article.title}
    //         </p>
    //       </div>
    //     </div>
    //   </a>
    // </Link>
    _jsx(Heading, {
      children: "Card Component which loops articles component"
    })
  );
};

/* harmony default export */ const card = ((/* unused pure expression or super */ null && (Card)));
;// CONCATENATED MODULE: ./components/articles.js



 // const Articles = ({ articles }) => {
//   const leftArticlesCount = Math.ceil(articles.length / 5)
//   const leftArticles = articles.slice(0, leftArticlesCount)
//   const rightArticles = articles.slice(leftArticlesCount, articles.length)

const Articles = () => {
  // const leftArticlesCount = Math.ceil(articles.length / 5)
  // const leftArticles = articles.slice(0, leftArticlesCount)
  // const rightArticles = articles.slice(leftArticlesCount, articles.length)
  return (
    /*#__PURE__*/
    // <div>
    //   <div className="uk-child-width-1-2@s" data-uk-grid="true">
    //     <div>
    //       {leftArticles.map((article, i) => {
    //         return (
    //           <Box borderWidth="1px">
    //             <Card
    //               article={article}
    //               key={`article__left__${article.slug}`}
    //             />
    //           </Box>
    //         )
    //       })}
    //     </div>
    //     <div>
    //       <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
    //         {rightArticles.map((article, i) => {
    //           return (
    //             <Box borderWidth="1px">
    //               <Card
    //                 article={article}
    //                 key={`article__left__${article.slug}`}
    //               />
    //             </Box>
    //           )
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    jsx_runtime_.jsx(react_.Heading, {
      children: "Articles Component"
    })
  );
};

/* harmony default export */ const articles = (Articles);

/***/ }),

/***/ 6347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
;// CONCATENATED MODULE: ./components/nav.js





const Nav = ({
  categories
}) => {
  return (
    /*#__PURE__*/
    // <div>
    //   <nav className="uk-navbar-container" data-uk-navbar>
    //     <div className="uk-navbar-left">
    //       <ul className="uk-navbar-nav">
    //         <li>
    //           <Link href="/">
    //             <a>Strapi Blog</a>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="uk-navbar-right">
    //       <ul className="uk-navbar-nav">
    //         {categories.map((category) => {
    //           return (
    //             <li key={category.id}>
    //               <Link as={`/category/${category.slug}`} href="/category/[id]">
    //                 <a className="uk-link-reset">{category.name}</a>
    //               </Link>
    //             </li>
    //           )
    //         })}
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
    jsx_runtime_.jsx(react_.Heading, {
      children: "Nav component"
    })
  );
};

/* harmony default export */ const nav = (Nav);
;// CONCATENATED MODULE: ./components/layout.js





const Layout = ({
  children,
  categories,
  seo
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(nav, {
    categories: categories
  }), children]
});

/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 8303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3103);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1422);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Seo = ({
  seo
}) => {
  const {
    defaultSeo,
    siteName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.GlobalContext);

  const seoWithDefaults = _objectSpread(_objectSpread({}, defaultSeo), seo);

  const fullSeo = _objectSpread(_objectSpread({}, seoWithDefaults), {}, {
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    // Get full image URL
    shareImage: (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__/* .getStrapiMedia */ .$)(seoWithDefaults.shareImage)
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [fullSeo.metaTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: fullSeo.metaTitle
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:title",
        content: fullSeo.metaTitle
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "twitter:title",
        content: fullSeo.metaTitle
      })]
    }), fullSeo.metaDescription && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "description",
        content: fullSeo.metaDescription
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:description",
        content: fullSeo.metaDescription
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "twitter:description",
        content: fullSeo.metaDescription
      })]
    }), fullSeo.shareImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:image",
        content: fullSeo.shareImage
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "twitter:image",
        content: fullSeo.shareImage
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "image",
        content: fullSeo.shareImage
      })]
    }), fullSeo.article && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:type",
      content: "article"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ })

};
;