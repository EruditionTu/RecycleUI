module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['.prettierrc', '.babelrc'],
      options: {
        parser: 'json',
      },
    },
  ],
};
