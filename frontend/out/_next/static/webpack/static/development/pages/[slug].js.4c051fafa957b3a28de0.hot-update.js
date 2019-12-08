webpackHotUpdate("static/development/pages/[slug].js",{

/***/ "./components/Sponsor/index.js":
/*!*************************************!*\
  !*** ./components/Sponsor/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./components/Sponsor/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/brandon/dev/personal/2018.texascamp.org/frontend/components/Sponsor/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Sponsor = function Sponsor(_ref) {
  var _ref$sponsor = _ref.sponsor,
      title = _ref$sponsor.title,
      image = _ref$sponsor.image,
      sponsorUrl = _ref$sponsor.sponsorUrl;
  console.log(image.url.replace(/.*?(\/sites\/default\/files\/sponsors\/.*)/, "$2"));
  var noLogoAvailable = !image.url;

  var SponsorWithTitleOnly = __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, title);

  var titleOnlyClass = noLogoAvailable ? _styles_css__WEBPACK_IMPORTED_MODULE_1___default.a.noImage : '';

  var SponsorWithLogo = __jsx("img", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1___default.a.sponsorImage,
    src: image.url.replace(/(\/sites\/default\/files\/sponsors\/.*)/, "$2"),
    alt: image.alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }); // if image is not included, render title only.


  var SponsorEntity = noLogoAvailable ? SponsorWithTitleOnly : SponsorWithLogo; // if sponsor has url, wrap with link

  if (sponsorUrl) {
    SponsorEntity = __jsx("a", {
      href: sponsorUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, SponsorEntity);
  }

  return __jsx("div", {
    className: titleOnlyClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, SponsorEntity);
};

/* harmony default export */ __webpack_exports__["default"] = (Sponsor);

/***/ })

})
//# sourceMappingURL=[slug].js.4c051fafa957b3a28de0.hot-update.js.map