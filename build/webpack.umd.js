const { resolve } = require('path');
const {merge} = require('webpack-merge');
const WebpackCommonConfig = require('./webpack.common');

const basePath = resolve(__dirname, '..');

module.exports = merge(WebpackCommonConfig, {
  entry: {
    index: {
      import: resolve(basePath, 'packages/index.tsx'),
      filename: 'index.js',
    },
  },
  output: {
    path: resolve(basePath, 'dist'),
    filename: '[name].js',
    globalObject: 'this',
    library: {
      name: 'RecycleUI',
      type: 'umd',
    },
  },
});
