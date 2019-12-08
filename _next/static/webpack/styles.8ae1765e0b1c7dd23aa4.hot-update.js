webpackHotUpdate("styles",{

/***/ "./components/BasicPage/styles.css":
/*!*****************************************!*\
  !*** ./components/BasicPage/styles.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"contentWrapper":"components-BasicPage-styles__contentWrapper--34gH1","content":"components-BasicPage-styles__content--ckqd_ shared-css-compose__contentWrapper--1QUeL","title":"components-BasicPage-styles__title--2IhUF shared-css-compose__title--3jpr9","detail":"components-BasicPage-styles__detail--3NLk4 shared-css-compose__contentArea--3lHpT","mainContent":"components-BasicPage-styles__mainContent--1VXd2"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1575823428188");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.8ae1765e0b1c7dd23aa4.hot-update.js.map