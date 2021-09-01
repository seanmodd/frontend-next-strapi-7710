"use strict";
(() => {
var exports = {};
exports.id = 24;
exports.ids = [24,888];
exports.modules = {

/***/ 7956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_)
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
;// CONCATENATED MODULE: ./components/blog/image.js




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

/* harmony default export */ const blog_image = ((/* unused pure expression or super */ null && (Image)));
;// CONCATENATED MODULE: ./components/blog/card.js






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
;// CONCATENATED MODULE: ./components/blog/articles.js



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
;// CONCATENATED MODULE: ./components/blog/nav.js





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
;// CONCATENATED MODULE: ./components/blog/layout.js





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
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: ./pages/_app.js + 4 modules
var _app = __webpack_require__(3090);
;// CONCATENATED MODULE: ./components/blog/seo.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Seo = ({
  seo
}) => {
  const {
    defaultSeo,
    siteName
  } = useContext(GlobalContext);

  const seoWithDefaults = _objectSpread(_objectSpread({}, defaultSeo), seo);

  const fullSeo = _objectSpread(_objectSpread({}, seoWithDefaults), {}, {
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    // Get full image URL
    shareImage: getStrapiMedia(seoWithDefaults.shareImage)
  });

  return /*#__PURE__*/_jsxs(Head, {
    children: [fullSeo.metaTitle && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("title", {
        children: fullSeo.metaTitle
      }), /*#__PURE__*/_jsx("meta", {
        property: "og:title",
        content: fullSeo.metaTitle
      }), /*#__PURE__*/_jsx("meta", {
        name: "twitter:title",
        content: fullSeo.metaTitle
      })]
    }), fullSeo.metaDescription && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("meta", {
        name: "description",
        content: fullSeo.metaDescription
      }), /*#__PURE__*/_jsx("meta", {
        property: "og:description",
        content: fullSeo.metaDescription
      }), /*#__PURE__*/_jsx("meta", {
        name: "twitter:description",
        content: fullSeo.metaDescription
      })]
    }), fullSeo.shareImage && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx("meta", {
        property: "og:image",
        content: fullSeo.shareImage
      }), /*#__PURE__*/_jsx("meta", {
        name: "twitter:image",
        content: fullSeo.shareImage
      }), /*#__PURE__*/_jsx("meta", {
        name: "image",
        content: fullSeo.shareImage
      })]
    }), fullSeo.article && /*#__PURE__*/_jsx("meta", {
      property: "og:type",
      content: "article"
    }), /*#__PURE__*/_jsx("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    })]
  });
};

/* harmony default export */ const seo = ((/* unused pure expression or super */ null && (Seo)));
;// CONCATENATED MODULE: ./pages/category/[slug].js






 // const Category = ({ category, categories }) => {

const Category = () => {
  // const seo = {
  //   metaTitle: category.name,
  //   metaDescription: `All ${category.name} articles`,
  // }
  return (
    /*#__PURE__*/
    // <Layout categories={categories}>
    jsx_runtime_.jsx(layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "uk-section",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "uk-container uk-container-large",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: "Slug Page"
          }), /*#__PURE__*/jsx_runtime_.jsx(articles, {})]
        })
      })
    })
  );
}; // export async function getStaticPaths() {
//   const categories = await fetchAPI("/categories")
//   return {
//     paths: categories.map((category) => ({
//       params: {
//         slug: category.slug,
//       },
//     })),
//     fallback: false,
//   }
// }
// export async function getStaticProps({ params }) {
//   const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0]
//   const categories = await fetchAPI("/categories")
//   return {
//     props: { category, categories },
//     revalidate: 1,
//   }
// }


/* harmony default export */ const _slug_ = (Category);

/***/ }),

/***/ 3426:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 8547:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 8104:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,544,675,56], () => (__webpack_exec__(7956)));
module.exports = __webpack_exports__;

})();