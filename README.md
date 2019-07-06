
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
- 生产环境和开发环境的构建目标：我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间，所以需要不同的配置文件。
- 代码分离
- 懒加载，这种方式实际上是先把你的代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。比如点击按钮后加载对应的处理逻辑js文件。
- 缓存问题，前端缓存技术可能会导致本次部署的项目的一些变更无效，比如更改资源但没改变名称，就会使用缓存版本，那么要做的事情就是手动清空缓存。或者可以。。。
  - 给文件名使用[chunkhash]进行替换：
  
    ```javascirpt
       output: {
       filename: '[name].[chunkhash].js',
       path: path.resolve(__dirname, 'dist')
    }
    ```
  - 提取模板
  - 模板标识符

