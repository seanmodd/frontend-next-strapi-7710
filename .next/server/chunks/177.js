"use strict";
exports.id = 177;
exports.ids = [177];
exports.modules = {

/***/ 883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ getStrapiURL),
/* harmony export */   "I": () => (/* binding */ fetchAPI)
/* harmony export */ });
function getStrapiURL(path = "") {
  return `${// process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://nextjs-strapiapi.herokuapp.com"}${path}`;
} // Helper to make GET requests to Strapi

async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

/***/ }),

/***/ 1422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ getStrapiMedia)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(883);

function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/") ? (0,_api__WEBPACK_IMPORTED_MODULE_0__/* .getStrapiURL */ .p)(media.url) : media.url;
  return imageUrl;
}

/***/ }),

/***/ 2177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GlobalContext": () => (/* binding */ GlobalContext),
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@chakra-ui/theme-tools"
var theme_tools_ = __webpack_require__(8547);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
;// CONCATENATED MODULE: ./styles/theme.js




const theme = (0,react_.extendTheme)({
  styles: {
    global: props => ({
      h1: {
        textShadow: "-1px 1px 1px #ff00007e",
        fontFamily: "Poppins, sans-serif",
        fontSize: "4.5rem",
        textAlign: "center",
        color: props.colorMode === "dark" ? "red.400" : "#ff00ea",
        transition: "all 0.1s ease-in-out",
        fontWeight: "semibold",
        letterSpacing: "-0.02em",
        // lineHeight: '1.5',
        padding: "0 1rem",
        textShadow: props.colorMode === "dark" ? "2px 1px red" : "0px 1px#0000006c",
        _hover: {
          letterSpacing: "0.05em"
        }
      },
      body: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
        backgroundColor: props.colorMode === "dark" ? "gray.900" : "gray.100",
        transition: "all 0.1s ease-in-out"
      },
      input: {
        backgroundColor: props.colorMode === "dark" ? "gray.900" : "gray.100",
        boxShadow: "md",
        margin: "10px",
        padding: "10px",
        border: props.colorMode === "dark" ? "0.1px solid #88888886" : "0.1px solid #f0121285",
        transition: "all 0.1s ease-in-out",
        borderRadius: "5px",
        _hover: {
          transition: "ease-in-out, width .35s ease-in-out",
          backgroundColor: props.colorMode === "dark" ? "gray.700" : "blue.50",
          boxShadow: props.colorMode === "dark" ? "0 0 1px 1px #dee4ef" : "0 0 2px 4px #dee4ef"
        },
        _focus: {
          transition: "all 0.1s ease-in-out"
        }
      },
      // div: {
      //   backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
      //   transition: 'all 0.1s ease-in-out',
      // },
      a: {
        // color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
        fontWeight: "700",
        transition: "all 0.1s ease-in-out",
        textTransform: "uppercase",
        textAlign: "center",
        color: props.colorMode === "dark" ? "gray.50" : "#ff00ea",
        textDecoration: "underline",
        _hover: {
          textShadow: "-1px 1px 5px #30303029",
          color: props.colorMode === "dark" ? "#0077ff" : "#0077ff",
          transition: "all 0.1s ease-in-out"
        }
      },
      button: {
        px: "4",
        py: "3",
        m: "2",
        textAlign: "center",
        // bg: 'gray.700',
        // color: 'blue.50',
        bg: props.colorMode === "dark" ? "gray.300" : "gray.300",
        // boxShadow: '3px 3px 2px 1px rgba(0, 0, 255, .2);',
        boxShadow: props.colorMode === "dark" ? "1px 1px 1px 1px #aaaaaa47;" : "1px 1px 1px 1px #0000ff0;",
        color: props.colorMode === "dark" ? "#6f00ff" : "#6f00ff",
        // fontWeight: 'normal',
        // textShadow: '1px 1px 0.2px rgba(0, 0, 255, .2);',
        // borderWidth: '1px',
        borderRadius: "10px",
        transition: "all 0.5s ease-in-out",
        // borderColor: 'gray.700',
        _hover: {
          // borderColor: '#0022e4',
          // bg: 'purple.400',
          transition: "all 0.5s ease-in-out" // color: props.colorMode === 'dark' ? '#ff00ea' : '#ff00ea',
          // fontWeight: 'bold',
          // fontSize: '18px',
          // boxShadow:
          //   props.colorMode === 'dark'
          //     ? '2px 2px 2px 1px #aaaaaaca;'
          //     : '3px 3px 2px 1px rgba(0, 0, 255, .2);',
          // textShadow: '0 3px 0 #a0a0a07e',
          // borderRadius: '7.5px',
          // borderColor: '#0022e4',

        },
        transition: "all 0.5s ease-in-out"
      }
    })
  },
  components: {
    Heading: {
      baseStyle: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        lineHeight: "1.5",
        fontFamily: "Poppins, sans-serif" // color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',

      },
      variants: {
        "with-shadow": {// bg: 'red.400',
          // boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: props => ({
          bg: (0,theme_tools_.mode)("blue.500", "red.500")(props),
          // bg: 'gray.300',
          color: props.colorMode === "dark" ? "red.500" : "blue.800",
          _hover: {
            bg: props.colorMode === "dark" ? "blue.500" : "red.500",
            bg: "gray.300",
            textShadow: "0 3px 0 #a0a0a07e" // borderRadius: '15px',

          }
        })
      }
    },
    Text: {
      baseStyle: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        lineHeight: "1.5",
        fontFamily: "Poppins, sans-serif" // color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',

      },
      variants: {
        "with-shadow": {// bg: 'red.400',
          // boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: props => ({
          bg: (0,theme_tools_.mode)("blue.500", "red.500")(props),
          // bg: 'gray.300',
          color: props.colorMode === "dark" ? "red.500" : "blue.800",
          _hover: {
            bg: props.colorMode === "dark" ? "blue.500" : "red.500",
            bg: "gray.300",
            textShadow: "0 3px 0 #a0a0a07e" // borderRadius: '15px',

          }
        })
      }
    },
    Drawer: {
      // setup light/dark mode component defaults
      baseStyle: props => ({
        dialog: {
          bg: (0,theme_tools_.mode)("red.500", "blue.500")(props)
        }
      })
    },
    // Text: {
    //   // setup light/dark mode component defaults
    //   baseStyle: (props) => ({
    //     bg: mode('red.500', 'blue.500')(props),
    //   }),
    // },
    Button: {
      baseStyle: {
        fontWeight: "normal",
        // borderColor: '#ff0000',
        bg: "gray.50",
        textShadow: "0 3px 0 #a0a0a07e" // borderWidth: '2px',
        // borderRadius: '15px',

      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px"
        },
        lg: {
          h: "48px",
          fontSize: "lg",
          px: "24px"
        },
        md: {
          h: "40px",
          fontSize: "lg",
          px: "20px"
        },
        sm: {
          h: "32px",
          fontSize: "lg",
          px: "16px"
        },
        xs: {
          h: "28px",
          fontSize: "lg",
          px: "14px"
        }
      },
      variants: {
        "with-shadow": {// bg: 'red.400',
          // boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: props => ({
          // bg: props.colorMode === 'dark' ? 'blue.500' : 'red.500',
          bg: "gray.300",
          // color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
          _hover: {
            // bg: props.colorMode === 'dark' ? 'blue.500' : 'red.500',
            bg: "gray.300",
            textShadow: "0 3px 0 #a0a0a07e" // borderRadius: '15px',

          }
        })
      }
    }
  }
}); // ! BELOW IS MY THEME FROM GEIST UI!!!!

const myTheme = {
  type: "Custom",
  palette: {
    accents_1: "#111",
    accents_2: "#333",
    accents_3: "#444",
    accents_4: "#666",
    accents_5: "#888",
    accents_6: "#999",
    accents_7: "#eaeaea",
    accents_8: "#fafafa",
    background: "#000",
    foreground: "#fff",
    selection: "#f81ce5",
    secondary: "#888",
    code: "#79ffe1",
    border: "#333",
    link: "#3291ff"
  },
  expressiveness: {
    dropdownBoxShadow: "0 0 0 1px #333",
    shadowSmall: "0 0 0 1px #333",
    shadowMedium: "0 0 0 1px #333",
    shadowLarge: "0 0 0 1px #333",
    portalOpacity: 0.75
  }
};
/** *
 *  Usage::
 *
 *  export const App = () => {
 *    return (
 *      <GeistProvider themes={[myTheme]} themeType="Custom">
 *        <CssBaseline />
 *        <YourComponent />
 *      </GeistProvider>
 *    )
 *  }
 * */
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__(1422);
;// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Store Strapi Global object in context

const GlobalContext = /*#__PURE__*/(0,external_react_.createContext)({});

const MyApp = ({
  Component,
  pageProps,
  router
}) => {
  const {
    global
  } = pageProps;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
      resetCSS: true,
      theme: theme,
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "shortcut icon",
          href: (0,media/* getStrapiMedia */.$)(global.favicon)
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(GlobalContext.Provider, {
        value: global,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
          initial: "pageInitial",
          animate: "pageAnimate",
          variants: {
            pageInitial: {
              scale: 1.2,
              opacity: 0
            },
            pageAnimate: {
              scale: 1,
              opacity: 1
            }
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
        }, router.route)
      })]
    })
  });
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


MyApp.getInitialProps = async ctx => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await app.default.getInitialProps(ctx); // Fetch global site settings from Strapi

  const global = await (0,api/* fetchAPI */.I)("/global"); // Pass the data to our page via props

  return _objectSpread(_objectSpread({}, appProps), {}, {
    pageProps: {
      global
    }
  });
};

/* harmony default export */ const _app = (MyApp);

/***/ })

};
;