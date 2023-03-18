webpackHotUpdate("static/development/pages/news.js",{

/***/ "./pages/news/index.js":
/*!*****************************!*\
  !*** ./pages/news/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_lib_withApollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/lib/withApollo */ "./shared/lib/withApollo.js");
/* harmony import */ var _components_HeadTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/HeadTitle */ "./components/HeadTitle/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Menu */ "./components/Menu/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_NewsTeaser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/NewsTeaser */ "./components/NewsTeaser/index.js");
/* harmony import */ var _shared_query_withNews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/query/withNews */ "./shared/query/withNews.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.css */ "./pages/news/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/brandon/dev/personal/2018.texascamp.org/frontend/pages/news/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var NewsOverview = function NewsOverview(_ref) {
  var loading = _ref.loading,
      newsList = _ref.newsList;
  return !loading && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_HeadTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "News",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_9___default.a.contentWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h1", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "News"), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_9___default.a.detail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, newsList.sort(function (a, b) {
    return b.publishedDate.format('X') - a.publishedDate.format('X');
  }).map(function (newsTeaser) {
    return __jsx(_components_NewsTeaser__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: newsTeaser.id,
      newsTeaser: newsTeaser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    });
  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })))) || null;
};

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_1___default()(Object(_shared_lib_withApollo__WEBPACK_IMPORTED_MODULE_2__["withApollo"])(), _shared_query_withNews__WEBPACK_IMPORTED_MODULE_8__["default"])(NewsOverview));

/***/ })

})
//# sourceMappingURL=news.js.117bb658109b2b45e2be.hot-update.js.map