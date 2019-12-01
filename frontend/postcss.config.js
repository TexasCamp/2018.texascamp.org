const variables = require('./shared/css/variables');

module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-simple-vars': {
      variables: variables
    }
  }
}