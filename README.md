
---
title: webpack学习记录
date: 2019-07-02
categories:
 - webpack
tags:
 - webpack
---

###  2019-07-02 

- webpack4中可以无需任何配置，但是很多项目需要复杂的配置，比如：什么场景？
- 执行webpack-cli脚本：npx webpack --config webpack.config.js
- npx: 在 npmv5.2.0引入的一条命令（链接）。引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验
- npm 5，你可能还会在目录中看到一个 package-lock.json 文件,这个文件的作用是什么呢
- 动态打包 创建依赖图，好处，和其它的打包工具比如grunt、gulp对比？
- 通过loader引入其它任何资源文件，比如：style-loader 样式  file-loader：图片 文件 字体，其它的loader可以了解一下，官网给出的一个优点：`以这种方式加载资源，你可以以更直观的方式将模块和资源组合在一起。无需依赖于含有全部资源的 /assets 目录，而是将资源与代码组合在一起`，理解就是将不同的功能模块解耦，减小功能模块间的耦合依赖关系，让代码更具可移植性
- webpack可以配置多个入口，配置输入输入插件HtmlWebpackPlugin、CleanWebpackPlugin  `Manifest`对模块映射到输出 bundle 的过程保持追踪
- 错误问题追踪，inline-source-map，可以将编译后的源代码映射回原始源文件 funning！！ 咋映射的： `devtool: 'inline-source-map'`，这有助于我们在开发过程中定位问题。
- webpack自动编译：

	```javascript
	1. webpack's Watch Mode  '观察者模式'， 添加并运行脚本watch": "webpack --watch， 缺点需手动刷新浏览器
	2. webpack-dev-server: 内部使用的就是webpack-dev-middleware
	  安装： npm install --save-dev webpack-dev-server 
      配置： devServer: { contentBase: './dist'},     
      执行： "start": "webpack-dev-server --open",
	3. webpack-dev-middleware
	```
