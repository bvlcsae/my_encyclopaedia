const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    hot: true, // 热更新
    open: true, // 自动打开浏览器
    contentBase: path.resolve(__dirname, '../dist'), // 网站根目录
    host: "0.0.0.0",
    port: 8080,
    index: 'index.html'
  }
})