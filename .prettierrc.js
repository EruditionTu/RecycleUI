module.exports = {
  singleQuote: true, // 字符串使用单引号
  trailingComma: 'all', // 尽可能的使用尾随逗号
  printWidth: 100, // 打印宽度
  proseWrap: 'never', // 强制所有散文块位于一行
  arrowParens: 'avoid', // 省略箭头函数参数的括号
  overrides: [
    {
      files: '.babelrc', // 识别特殊配置文件
      options: {
        parser: 'json',
      },
    },
  ],
};
