(() => {
var exports = {};
exports.id = "pages/article/[slug]";
exports.ids = ["pages/article/[slug]"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./components/image.js":
/*!*****************************!*\
  !*** ./components/image.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Refresh\\Desktop\\blog\\frontend\\components\\image.js";




const Image = ({
  image,
  width,
  style
}) => {
  const {
    url,
    alternativeText
  } = image;

  const loader = () => {
    return (0,_lib_media__WEBPACK_IMPORTED_MODULE_0__.getStrapiMedia)(image); // return `http://localhost:1337/articles/image `
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
    loader: loader,
    layout: "responsive",
    width: image.width,
    height: image.height,
    objectFit: "contain",
    src: url,
    alt: alternativeText || ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Refresh\\Desktop\\blog\\frontend\\components\\layout.js";




const Layout = ({
  children,
  categories,
  seo
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nav__WEBPACK_IMPORTED_MODULE_0__.default, {
    categories: categories
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), children]
}, void 0, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_mobile_menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/mobile_menu.svg */ "./assets/mobile_menu.svg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Refresh\\Desktop\\blog\\frontend\\components\\nav.js";






const Nav = ({
  categories
}) => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const hideNavBar = () => {
    if (window.scrollY >= 10) {
      setState(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("scroll", hideNavBar);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("nav", {
      className: "uk-navbar-container",
      "data-uk-navbar": true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "uk-navbar-left",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
          className: "uk-navbar-nav",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                style: {
                  fontSize: '20px'
                },
                children: "Art\xEDculo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "uk-navbar-right",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
          className: "uk-navbar-nav",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "menu__img",
            onClick: () => setState(!state),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: _assets_mobile_menu_svg__WEBPACK_IMPORTED_MODULE_3__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined), categories.map(category => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/category/${category.slug}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  className: "uk-link-reset",
                  children: category.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 19
              }, undefined)
            }, category.id, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 17
            }, undefined);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), state ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "nav__collapse",
      children: categories.map(category => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/category/${category.slug}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
              className: "uk-link-reset",
              children: category.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 19
          }, undefined)
        }, category.id, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }, undefined) : '']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./components/seo.js":
/*!***************************!*\
  !*** ./components/seo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Refresh\\Desktop\\blog\\frontend\\components\\seo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Seo = ({
  seo
}) => {
  const {
    defaultSeo,
    siteName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_2__.GlobalContext);

  const seoWithDefaults = _objectSpread(_objectSpread({}, defaultSeo), seo);

  const fullSeo = _objectSpread(_objectSpread({}, seoWithDefaults), {}, {
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    // Get full image URL
    shareImage: (0,_lib_media__WEBPACK_IMPORTED_MODULE_3__.getStrapiMedia)(seoWithDefaults.shareImage)
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
    children: [fullSeo.metaTitle && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        property: "og:title",
        content: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "twitter:title",
        content: fullSeo.metaTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.metaDescription && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        property: "og:description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "twitter:description",
        content: fullSeo.metaDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.shareImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        property: "og:image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "twitter:image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "image",
        content: fullSeo.shareImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), fullSeo.article && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
      property: "og:type",
      content: "article"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 27
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": () => (/* binding */ getStrapiURL),
/* harmony export */   "fetchAPI": () => (/* binding */ fetchAPI)
/* harmony export */ });
function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://dry-woodland-60199.herokuapp.com"}${path}`;
} // http://localhost:1337
// Helper to make GET requests to Strapi

async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

/***/ }),

/***/ "./lib/media.js":
/*!**********************!*\
  !*** ./lib/media.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": () => (/* binding */ getStrapiMedia)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./lib/api.js");

function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/") ? (0,_api__WEBPACK_IMPORTED_MODULE_0__.getStrapiURL)(media.url) : media.url;
  return imageUrl;
}

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AppInitialProps", ({
  enumerable: true,
  get: function () {
    return _utils.AppInitialProps;
  }
}));
Object.defineProperty(exports, "NextWebVitalsMetric", ({
  enumerable: true,
  get: function () {
    return _utils.NextWebVitalsMetric;
  }
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _appGetInitialProps() {
  _appGetInitialProps =
  /**
  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
  * This allows for keeping state between navigation, custom error handling, injecting additional data.
  */
  _asyncToGenerator(function* ({
    Component,
    ctx
  }) {
    const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

function appGetInitialProps(_) {
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps));
  }

}

App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
exports.default = App;

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": () => (/* binding */ GlobalContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Refresh\\Desktop\\blog\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // Store Strapi Global object in context



const GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});

const MyApp = ({
  Component,
  pageProps
}) => {
  const {
    global
  } = pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,_lib_media__WEBPACK_IMPORTED_MODULE_5__.getStrapiMedia)(global.favicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(GlobalContext.Provider, {
      value: global,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


MyApp.getInitialProps = async ctx => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_0___default().getInitialProps(ctx); // Fetch global site settings from Strapi

  const global = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__.fetchAPI)("/global"); // Pass the data to our page via props

  return _objectSpread(_objectSpread({}, appProps), {}, {
    pageProps: {
      global
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./pages/article/[slug].js":
/*!*********************************!*\
  !*** ./pages/article/[slug].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/image */ "./components/image.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/seo */ "./components/seo.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/media */ "./lib/media.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Refresh\\Desktop\\blog\\frontend\\pages\\article\\[slug].js";









const Article = ({
  article,
  categories
}) => {
  const imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(article.image);
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    categories: categories,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_5__.default, {
      seo: seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "article__content",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        id: "banner",
        className: "uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin",
        "data-src": imageUrl,
        "data-srcset": imageUrl,
        "data-uk-img": true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "uk-section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "uk-container uk-container-small",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
          children: article.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_0___default()), {
          source: article.content,
          escapeHtml: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("hr", {
          className: "uk-divider-small"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "uk-grid-small uk-flex-left",
          "data-uk-grid": "true",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            children: article.author.picture && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_4__.default, {
              image: article.author.picture
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "uk-width-expand",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: "uk-margin-remove-bottom",
              children: ["By ", article.author.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: "uk-text-meta uk-margin-remove-top",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_1___default()), {
                format: "MMM Do YYYY",
                children: article.published_at
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

async function getStaticPaths() {
  const articles = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)("/articles");
  return {
    paths: articles.map(article => ({
      params: {
        slug: article.slug
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const articles = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)(`/articles?slug=${params.slug}`);
  const categories = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)("/categories");
  return {
    props: {
      article: articles[0],
      categories
    },
    revalidate: 1
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);

/***/ }),

/***/ "./assets/mobile_menu.svg":
/*!********************************!*\
  !*** ./assets/mobile_menu.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/assets/mobile_menu.2ee3d509a55d668ff8c13eb15e2cf3ad.svg","height":24,"width":36});

/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-markdown");

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-moment");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/article/[slug].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL2ltYWdlLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvc2VvLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2xpYi9tZWRpYS5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL3BhZ2VzL2FydGljbGUvW3NsdWddLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vYXNzZXRzL21vYmlsZV9tZW51LnN2ZyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC1tYXJrZG93blwiIiwid2VicGFjazovL3N0cmFwaS1zdGFydGVyLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vc3RyYXBpLXN0YXJ0ZXItZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC9pZ25vcmVkfEM6XFxVc2Vyc1xcUmVmcmVzaFxcRGVza3RvcFxcYmxvZ1xcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5cbmNvbnN0IEltYWdlID0gKHsgaW1hZ2Usd2lkdGgsIHN0eWxlIH0pID0+IHtcbiAgY29uc3QgeyB1cmwsIGFsdGVybmF0aXZlVGV4dCB9ID0gaW1hZ2VcblxuICBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XG4gXG4gICAgcmV0dXJuIGdldFN0cmFwaU1lZGlhKGltYWdlKVxuICAgIC8vIHJldHVybiBgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FydGljbGVzL2ltYWdlIGBcblxufVxuXG4gIHJldHVybiAoXG4gICAgPE5leHRJbWFnZVxuICAgICAgbG9hZGVyPXtsb2FkZXJ9XG4gIFxuICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICB3aWR0aD17aW1hZ2Uud2lkdGh9XG4gICAgICBoZWlnaHQ9e2ltYWdlLmhlaWdodH1cbiAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgc3JjPXt1cmx9XG4gICAgICBhbHQ9e2FsdGVybmF0aXZlVGV4dCB8fCBcIlwifVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcbiIsImltcG9ydCBOYXYgZnJvbSBcIi4vbmF2XCJcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIGNhdGVnb3JpZXMsIHNlbyB9KSA9PiAoXG4gIDw+XG4gICAgPE5hdiBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPlxuICAgIHtjaGlsZHJlbn1cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vYXNzZXRzL21vYmlsZV9tZW51LnN2ZydcbmNvbnN0IE5hdiA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuXG4gIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgaGlkZU5hdkJhciA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gMTApIHtcbiAgICAgIHNldFN0YXRlKGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGlkZU5hdkJhcik7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLWNvbnRhaW5lclwiIGRhdGEtdWstbmF2YmFyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1sZWZ0XCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17e2ZvbnRTaXplOicyMHB4J319PkFydMOtY3VsbzwvYT5cblxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1yaWdodFwiPlxuXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51X19pbWcnIG9uQ2xpY2s9eygpPT4gc2V0U3RhdGUoIXN0YXRlKX0+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e01lbnV9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0XCI+e2NhdGVnb3J5Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICB7c3RhdGUgPyAgPGRpdiBjbGFzc05hbWU9J25hdl9fY29sbGFwc2UnPlxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0XCI+e2NhdGVnb3J5Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+IDogJyd9XG4gICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiLi4vcGFnZXMvX2FwcFwiXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxuXG5jb25zdCBTZW8gPSAoeyBzZW8gfSkgPT4ge1xuICBjb25zdCB7IGRlZmF1bHRTZW8sIHNpdGVOYW1lIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpXG4gIGNvbnN0IHNlb1dpdGhEZWZhdWx0cyA9IHtcbiAgICAuLi5kZWZhdWx0U2VvLFxuICAgIC4uLnNlbyxcbiAgfVxuICBjb25zdCBmdWxsU2VvID0ge1xuICAgIC4uLnNlb1dpdGhEZWZhdWx0cyxcbiAgICAvLyBBZGQgdGl0bGUgc3VmZml4XG4gICAgbWV0YVRpdGxlOiBgJHtzZW9XaXRoRGVmYXVsdHMubWV0YVRpdGxlfSB8ICR7c2l0ZU5hbWV9YCxcbiAgICAvLyBHZXQgZnVsbCBpbWFnZSBVUkxcbiAgICBzaGFyZUltYWdlOiBnZXRTdHJhcGlNZWRpYShzZW9XaXRoRGVmYXVsdHMuc2hhcmVJbWFnZSksXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAge2Z1bGxTZW8ubWV0YVRpdGxlICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8dGl0bGU+e2Z1bGxTZW8ubWV0YVRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YVRpdGxlfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17ZnVsbFNlby5tZXRhVGl0bGV9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtmdWxsU2VvLm1ldGFEZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZnVsbFNlby5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Z1bGxTZW8ubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZnVsbFNlby5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtmdWxsU2VvLnNoYXJlSW1hZ2UgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtmdWxsU2VvLnNoYXJlSW1hZ2V9IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtmdWxsU2VvLnNoYXJlSW1hZ2V9IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImltYWdlXCIgY29udGVudD17ZnVsbFNlby5zaGFyZUltYWdlfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7ZnVsbFNlby5hcnRpY2xlICYmIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJhcnRpY2xlXCIgLz59XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgIDwvSGVhZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZW9cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9IFwiXCIpIHtcbiAgcmV0dXJuIGAke1xuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8IFwiaHR0cHM6Ly9kcnktd29vZGxhbmQtNjAxOTkuaGVyb2t1YXBwLmNvbVwiXG4gIH0ke3BhdGh9YFxufVxuLy8gaHR0cDovL2xvY2FsaG9zdDoxMzM3XG4vLyBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBUEkocGF0aCkge1xuICBjb25zdCByZXF1ZXN0VXJsID0gZ2V0U3RyYXBpVVJMKHBhdGgpXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVybClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICByZXR1cm4gZGF0YVxufVxuIiwiaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSBcIi4vYXBpXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaU1lZGlhKG1lZGlhKSB7XG4gIGNvbnN0IGltYWdlVXJsID0gbWVkaWEudXJsLnN0YXJ0c1dpdGgoXCIvXCIpXG4gICAgPyBnZXRTdHJhcGlVUkwobWVkaWEudXJsKVxuICAgIDogbWVkaWEudXJsXG4gIHJldHVybiBpbWFnZVVybFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBcHBJbml0aWFsUHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5BcHBJbml0aWFsUHJvcHM7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOZXh0V2ViVml0YWxzTWV0cmljXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYztcbiAgICB9XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gICAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX2FwcEdldEluaXRpYWxQcm9wcygpIHtcbiAgICBfYXBwR2V0SW5pdGlhbFByb3BzID0gLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqLyBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiooeyBDb21wb25lbnQgLCBjdHggIH0pIHtcbiAgICAgICAgY29uc3QgcGFnZVByb3BzID0geWllbGQgKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlUHJvcHNcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF8pIHtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuY2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50ICwgcGFnZVByb3BzICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB9LCBwYWdlUHJvcHMpKSk7XG4gICAgfVxufVxuQXBwLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzXCJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi9saWIvbWVkaWFcIlxuXG4vLyBTdG9yZSBTdHJhcGkgR2xvYmFsIG9iamVjdCBpbiBjb250ZXh0XG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtnZXRTdHJhcGlNZWRpYShnbG9iYWwuZmF2aWNvbil9IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Z2xvYmFsfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG5cbi8vIGdldEluaXRpYWxQcm9wcyBkaXNhYmxlcyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiBmb3IgcGFnZXMgdGhhdCBkb24ndFxuLy8gaGF2ZSBnZXRTdGF0aWNQcm9wcy4gU28gYXJ0aWNsZSwgY2F0ZWdvcnkgYW5kIGhvbWUgcGFnZXMgc3RpbGwgZ2V0IFNTRy5cbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Rpc2N1c3Npb25zLzEwOTQ5XG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIC8vIENhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2BcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgLy8gRmV0Y2ggZ2xvYmFsIHNpdGUgc2V0dGluZ3MgZnJvbSBTdHJhcGlcbiAgY29uc3QgZ2xvYmFsID0gYXdhaXQgZmV0Y2hBUEkoXCIvZ2xvYmFsXCIpXG4gIC8vIFBhc3MgdGhlIGRhdGEgdG8gb3VyIHBhZ2UgdmlhIHByb3BzXG4gIHJldHVybiB7IC4uLmFwcFByb3BzLCBwYWdlUHJvcHM6IHsgZ2xvYmFsIH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW1hZ2VcIlxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZW9cIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vLi4vbGliL21lZGlhXCJcblxuY29uc3QgQXJ0aWNsZSA9ICh7IGFydGljbGUsIGNhdGVnb3JpZXMgfSkgPT4ge1xuICBjb25zdCBpbWFnZVVybCA9IGdldFN0cmFwaU1lZGlhKGFydGljbGUuaW1hZ2UpXG5cbiAgY29uc3Qgc2VvID0ge1xuICAgIG1ldGFUaXRsZTogYXJ0aWNsZS50aXRsZSxcbiAgICBtZXRhRGVzY3JpcHRpb246IGFydGljbGUuZGVzY3JpcHRpb24sXG4gICAgc2hhcmVJbWFnZTogYXJ0aWNsZS5pbWFnZSxcbiAgICBhcnRpY2xlOiB0cnVlLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9PlxuICAgICAgPFNlbyBzZW89e3Nlb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcnRpY2xlX19jb250ZW50Jz5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJiYW5uZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJ1ay1oZWlnaHQtbWVkaXVtIHVrLWZsZXggdWstZmxleC1jZW50ZXIgdWstZmxleC1taWRkbGUgdWstYmFja2dyb3VuZC1jb3ZlciB1ay1saWdodCB1ay1wYWRkaW5nIHVrLW1hcmdpblwiXG4gICAgICAgIGRhdGEtc3JjPXtpbWFnZVVybH1cbiAgICAgICAgZGF0YS1zcmNzZXQ9e2ltYWdlVXJsfVxuICAgICAgICBkYXRhLXVrLWltZ1xuICAgICAgPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lciB1ay1jb250YWluZXItc21hbGxcIj5cbiAgICAgICAgPGgxPnthcnRpY2xlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXthcnRpY2xlLmNvbnRlbnR9IGVzY2FwZUh0bWw9e2ZhbHNlfSAvPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ1ay1kaXZpZGVyLXNtYWxsXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWdyaWQtc21hbGwgdWstZmxleC1sZWZ0XCIgZGF0YS11ay1ncmlkPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2FydGljbGUuYXV0aG9yLnBpY3R1cmUgJiYgKFxuICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2FydGljbGUuYXV0aG9yLnBpY3R1cmV9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstd2lkdGgtZXhwYW5kXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVrLW1hcmdpbi1yZW1vdmUtYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgQnkge2FydGljbGUuYXV0aG9yLm5hbWV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidWstdGV4dC1tZXRhIHVrLW1hcmdpbi1yZW1vdmUtdG9wXCI+XG4gICAgICAgICAgICAgICAgPE1vbWVudCBmb3JtYXQ9XCJNTU0gRG8gWVlZWVwiPnthcnRpY2xlLnB1Ymxpc2hlZF9hdH08L01vbWVudD5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2FydGljbGVzXCIpXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IGFydGljbGUuc2x1ZyxcbiAgICAgIH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IGZldGNoQVBJKGAvYXJ0aWNsZXM/c2x1Zz0ke3BhcmFtcy5zbHVnfWApXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhcnRpY2xlOiBhcnRpY2xlc1swXSwgY2F0ZWdvcmllcyB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVxuIiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9tb2JpbGVfbWVudS4yZWUzZDUwOWE1NWQ2NjhmZjhjMTNlYjE1ZTJjZjNhZC5zdmdcIixcImhlaWdodFwiOjI0LFwid2lkdGhcIjozNn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiZ2V0U3RyYXBpTWVkaWEiLCJOZXh0SW1hZ2UiLCJJbWFnZSIsImltYWdlIiwid2lkdGgiLCJzdHlsZSIsInVybCIsImFsdGVybmF0aXZlVGV4dCIsImxvYWRlciIsImhlaWdodCIsIk5hdiIsIkxheW91dCIsImNoaWxkcmVuIiwiY2F0ZWdvcmllcyIsInNlbyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiTWVudSIsInN0YXRlIiwic2V0U3RhdGUiLCJoaWRlTmF2QmFyIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb250U2l6ZSIsIm1hcCIsImNhdGVnb3J5Iiwic2x1ZyIsIm5hbWUiLCJpZCIsIkhlYWQiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsIlNlbyIsImRlZmF1bHRTZW8iLCJzaXRlTmFtZSIsInNlb1dpdGhEZWZhdWx0cyIsImZ1bGxTZW8iLCJtZXRhVGl0bGUiLCJzaGFyZUltYWdlIiwibWV0YURlc2NyaXB0aW9uIiwiYXJ0aWNsZSIsImdldFN0cmFwaVVSTCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJmZXRjaEFQSSIsInJlcXVlc3RVcmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJtZWRpYSIsImltYWdlVXJsIiwic3RhcnRzV2l0aCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIkltYWdlMSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJfdG9CYXNlNjQiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19lc01vZHVsZSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJmb3JFYWNoIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsImxvYWRlZEltYWdlVVJMcyIsIlNldCIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImRlZmF1bHRMb2FkZXIiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJjdXN0b21Mb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImNvbmZpZ0xvYWRlciIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwicyIsImtpbmQiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicmVmIiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwiY29uc29sZSIsIndhcm4iLCJwb3NpdGlvbiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInNldEludGVyc2VjdGlvblJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZnV0dXJlIiwicmVzb2x2ZXIiLCJwcm9tIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsImFyZyIsImluZm8iLCJkb25lIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcHBseSIsIl9hcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiQXBwIiwicmVuZGVyIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIndyYXBBcHAiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJBcHAxIiwiQXBwVHJlZSIsImNyZWF0ZUNvbnRleHQiLCJNeUFwcCIsImZhdmljb24iLCJhcHBQcm9wcyIsIlJlYWN0TWFya2Rvd24iLCJNb21lbnQiLCJBcnRpY2xlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImF1dGhvciIsInBpY3R1cmUiLCJwdWJsaXNoZWRfYXQiLCJnZXRTdGF0aWNQYXRocyIsImFydGljbGVzIiwicGF0aHMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=