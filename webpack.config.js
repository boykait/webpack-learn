const path = require('path');

// 可以自动更新输出文件的配置信息
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理/dist文件夹
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  // entry: './src/index.js', // 管理资源入口
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map', // 源码映射
  devServer: {    // 自动编译 热更新
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
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
