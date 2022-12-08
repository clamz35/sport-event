/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['@clamz/eslint-config-clamz'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
  },

  parserOptions: {
    ecmaVersion: 'latest',
  },
};
