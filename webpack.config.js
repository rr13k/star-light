const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: 'index.html' }),
        // new CopyWebpackPlugin([{from:"static"}]),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
        ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, './dist/'), //服务路径
    port:8080,
    open:false, //自动打开页面
    hot: true,
    compress: true, // 服务器压缩式，一般为`true`，
    inline: true, // 默认为true,在打包时会注入一段代码到最后的js中，用来监视页面的改动而自动刷新页面
    // publicPath: '/static',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
     rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" }, //ts 配置
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }, //源码映射
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
   }
};