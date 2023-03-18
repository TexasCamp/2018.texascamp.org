webpackHotUpdate("static/development/pages/news.js",{

/***/ "./components/NewsTeaser/index.js":
/*!****************************************!*\
  !*** ./components/NewsTeaser/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Html */ "./components/Html/index.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils */ "./shared/utils.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./components/NewsTeaser/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/brandon/dev/personal/2018.texascamp.org/frontend/components/NewsTeaser/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var NewsTeaser = function NewsTeaser(_ref) {
  var newsTeaser = _ref.newsTeaser,
      hompageNews = _ref.hompageNews,
      hompageNewsSecondColumn = _ref.hompageNewsSecondColumn;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "teaser"); // Use body summary if available
  // If not trim to 400 characters

  var strippedBody = newsTeaser.body.replace(/(<([^>]+)>)/gi, '');
  var trimmedBody = strippedBody.length > 200 ? "".concat(strippedBody.substr(0, 200), "...") : strippedBody;
  var formattedBody = newsTeaser.summary ? newsTeaser.summary : trimmedBody;
  var formattedDate = newsTeaser.publishedDate ? Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(moment__WEBPACK_IMPORTED_MODULE_2___default.a.utc(newsTeaser.publishedDate)) : '';
  var newsContext = hompageNews ? _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.hompageNews : _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.newOverview;
  var homepageStyles = hompageNewsSecondColumn ? _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.secondColumn : null;
  return __jsx("div", {
    className: "".concat(_styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.teaserWrapper, " ").concat(newsContext, " ").concat(homepageStyles),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/news/[newsTitle]",
    as: "/news/".concat(newsTeaser.urlString),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, formattedDate), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, newsTeaser.title), __jsx(_Html__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, formattedBody), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_5___default.a.moreLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "More"))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewsTeaser);

/***/ })

})
//# sourceMappingURL=news.js.0381b9f4fa642d055a1a.hot-update.js.map