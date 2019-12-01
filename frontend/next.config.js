require('dotenv-extended').load();
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[path][name]__[local]--[hash:base64:5]",
  },
  publicRuntimeConfig: {
    API: process.env.API
  }
})