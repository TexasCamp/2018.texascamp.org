module.exports = {
  env: {
    jest: true,
  },
  extends: ['@amazee/eslint-config-amazee', 'plugin:jsx-a11y/recommended'],
  globals: {
    fixture: true,
  },
  rules: {
    curly: [2, 'all'], // make braces with if statements mandatory.
    'arrow-body-style': 0, // makes debugging easier
    'no-unused-expressions': 0, // allowing ternary function calls makes calling action methods nicer
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-extraneous-dependencies': 0, // shared error
    'import/no-unresolved': 0, // shared error
    'import/extensions': 0, // shared error
    'import/no-webpack-loader-syntax': 0, // e.g. !url-loader!assets/selected.svg is allowed
    'react/require-default-props': 0, // shared error
    'react/no-danger': 0, // dangerouslySetInnerHTML - there's no need for eslint to warn us about an attribute to with 'dangerous' in the name.
    'jsx-a11y/no-onchange': 0,
  },
};
