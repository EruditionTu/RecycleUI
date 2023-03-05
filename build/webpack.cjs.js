const { resolve } = require('path');
const {merge} = require('webpack-merge');
const WebpackCommonConfig = require('./webpack.common');

const basePath = resolve(__dirname, '..');

module.exports = merge(WebpackCommonConfig, {
  output: {
    path: resolve(basePath, 'lib'),
    filename: '[name].js',
    library: {
      name: 'RecycleUI',
      type: 'commonjs',
    },
  },
});
