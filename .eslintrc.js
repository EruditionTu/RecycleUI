module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:compat/recommended',
    'standard-with-typescript',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    polyfills: ['Promise', 'URL'],
  },
  parser: '@typescript-eslint/parser', // eslint默认espree作为parser
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};
