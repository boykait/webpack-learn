
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
- 通过loader引入其它任何资源文件，比如：style-loader 样式  file-loader：图片 文件 字体，其它的loader可以了解一下