const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const resolve = dir => path.resolve(__dirname, dir);
const webpack = require('webpack');

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: "source-map",
  devServer: {
    contentBase: [path.resolve(__dirname, '../src/html'),
    path.resolve(__dirname, 'dist') ], //服务路径
    port: 8080,
    clientLogLevel: "none", //关闭log
    quiet: true, //关闭命令行log
    open: true, //自动打开页面
    hot: true,
    host: 'localhost',
    publicPath:'/',
    compress: true, // 服务器压缩式，一般为`true`，
    inline: true, // 默认为true,在打包时会注入一段代码到最后的js中，用来监视页面的改动而自动刷新页面
    // publicPath: './static',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      '@mvs': resolve('src/mvs'),
      '@': resolve('src'),
      '@libs': resolve('libs')
    }
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }, //ts 配置
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }, //源码映射
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
      favicon: 'favicon.ico'
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: 'static',
      ignore: ['.*']
    }]),
    new webpack.NamedModulesPlugin()
    
  ],
};