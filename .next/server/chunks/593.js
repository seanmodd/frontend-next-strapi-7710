"use strict";
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 8593:
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
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(5030);
;// CONCATENATED MODULE: ./components/card.js






const Card = ({
  article
}) => {
  return /*#__PURE__*/_jsx(Link, {
    as: `/article/${article.slug}`,
    href: "/article/[id]",
    children: /*#__PURE__*/_jsx("a", {
      className: "uk-link-reset",
      children: /*#__PURE__*/_jsxs("div", {
        className: "uk-card uk-card-muted",
        children: [/*#__PURE__*/_jsx("div", {
          className: "uk-card-media-top",
          children: /*#__PURE__*/_jsx(NextImage, {
            image: article.image
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "uk-card-body",
          children: [/*#__PURE__*/_jsx("p", {
            id: "category",
            className: "uk-text-uppercase",
            children: article.category.name
          }), /*#__PURE__*/_jsx("p", {
            id: "title",
            className: "uk-text-large",
            children: article.title
          })]
        })]
      })
    })
  });
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

/***/ })

};
;