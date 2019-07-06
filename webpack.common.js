/**
 * webpack开发环境和生产环境配置common
 * 通用配置：开发环境和生产环境都可以使用的配置项
 */

const path = require('path');

// 可以自动更新输出文件的配置信息
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理/dist文件夹
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  entry: { // 管理资源入口
    app: './src/index.js',
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
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
