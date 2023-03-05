const { resolve } = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const WebpackBar =require("webpackbar")



const basePath = resolve(__dirname, '../');

module.exports = {
  devtool: 'source-map',
  output: {
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_moudles/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use:['@svgr/webpack',"url-loader"], // 使用webpack 5 内置 loader
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar({
    name: '🍔  RecycleUI',
    color: '#2f54eb',
  }),
    new BundleAnalyzerPlugin()
  ],
  resolve:{
    extensions:['.js','.ts','.jsx','.tsx','.json'],
    mainFiles:["index", "default"],
    alias:{
      '@':basePath
    }
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      module:"react",
      amd: 'react',
    },
    
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      module:"react-dom",
      amd: 'react-dom',
    },
    optimization: {
      // 使用 ES module 方式引用的模块将被 tree shaking 优化
      usedExports: true,
    },
  },
};
