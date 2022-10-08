const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[contenthash].[name].js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), //服务启动的根目录
    compress: true, //为每个静态文件开启gzip压缩
    open: false, //是否自动打开
    port: 8080, //启动端口
    hot: true, //是否开启热更新
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|webg)$/,
        type: "asset",
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                module: true,
              },
            },
          },
        ],
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new ReactRefreshPlugin(),
  ],
};
