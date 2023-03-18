webpackHotUpdate("static/development/pages/news.js",{

/***/ "./shared/query/withNews.js":
/*!**********************************!*\
  !*** ./shared/query/withNews.js ***!
  \**********************************/
/*! exports provided: NEWS_QUERY, newsListMapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWS_QUERY", function() { return NEWS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListMapper", function() { return newsListMapper; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./shared/utils.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query allNews {\n    nodeQuery(offset: 0, limit: 999, filter: { type: \"news\" }) {\n      entities {\n        id: entityId\n        ...NewsTeaserFragment\n      }\n    }\n  }\n\n  fragment NewsTeaserFragment on NodeNews {\n    entityId\n    title\n    body {\n      value\n      summary\n    }\n    fieldNewsDate {\n      value\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var NEWS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var newsListMapper = function newsListMapper(entities) {
  return entities.map(function (entity) {
    return {
      title: entity.title,
      body: entity.body.value,
      summary: entity.body.summary,
      publishedDate: entity.fieldNewsDate && moment__WEBPACK_IMPORTED_MODULE_3___default.a.utc(entity.fieldNewsDate.value).format('X'),
      urlString: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["titleToLink"])(entity.title),
      id: entity.entityId
    };
  });
};
var withNews = Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(NEWS_QUERY, {
  props: function props(_ref) {
    var _ref$data = _ref.data,
        _ref$data$nodeQuery = _ref$data.nodeQuery;
    _ref$data$nodeQuery = _ref$data$nodeQuery === void 0 ? {} : _ref$data$nodeQuery;
    var _ref$data$nodeQuery$e = _ref$data$nodeQuery.entities,
        entities = _ref$data$nodeQuery$e === void 0 ? [] : _ref$data$nodeQuery$e,
        loading = _ref$data.loading;
    return {
      newsList: loading ? [] : newsListMapper(entities)
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (withNews);

/***/ })

})
//# sourceMappingURL=news.js.7bb6dcfbe856dbdd9dab.hot-update.js.map