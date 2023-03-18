webpackHotUpdate("static/development/pages/news/[newsTitle].js",{

/***/ "./pages/news/[newsTitle]/index.js":
/*!*****************************************!*\
  !*** ./pages/news/[newsTitle]/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_lib_withApollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/lib/withApollo */ "./shared/lib/withApollo.js");
/* harmony import */ var _components_HeadTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/HeadTitle */ "./components/HeadTitle/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Menu */ "./components/Menu/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/NotFound */ "./components/NotFound/index.js");
/* harmony import */ var _shared_query_withNews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/query/withNews */ "./shared/query/withNews.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/utils */ "./shared/utils.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles.css */ "./pages/news/[newsTitle]/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/brandon/dev/personal/2018.texascamp.org/frontend/pages/news/[newsTitle]/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var NewsPage = function NewsPage(_ref) {
  var newsItem = _ref.newsItem;
  var formattedDate = newsItem.publishedDate ? Object(_shared_utils__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(newsItem.publishedDate) : '';
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_components_HeadTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: newsItem.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_11___default.a.contentWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_11___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h1", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_11___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, newsItem.title), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_11___default.a.detail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "News"), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_11___default.a.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_11___default.a.field,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_11___default.a.fieldLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Published"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, formattedDate))), __jsx("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_11___default.a.mainContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, Object(_shared_utils__WEBPACK_IMPORTED_MODULE_10__["cleanHtml"])(newsItem.body))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))));
};

var NewsLoader = function NewsLoader(_ref2) {
  var router = _ref2.router,
      loading = _ref2.loading,
      newsList = _ref2.newsList;

  if (!loading) {
    var newsTitle = router.query.newsTitle;
    var newsItem = newsList.find(function (_ref3) {
      var urlString = _ref3.urlString;
      return urlString === newsTitle;
    });

    if (newsItem) {
      return __jsx(NewsPage, {
        newsItem: newsItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      });
    } else {
      return __jsx(_components_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"], {
        linkText: "Back to more news",
        linkUrl: "/News",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      });
    }
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_1___default()(Object(_shared_lib_withApollo__WEBPACK_IMPORTED_MODULE_3__["withApollo"])({
  ssr: true
}), _shared_query_withNews__WEBPACK_IMPORTED_MODULE_9__["default"], next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(NewsLoader));

/***/ })

})
//# sourceMappingURL=[newsTitle].js.9bad8abdb98e72c3f3b5.hot-update.js.map