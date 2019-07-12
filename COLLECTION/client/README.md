<!-- babel 插件 说明 -->
babel 将一系列js feature 输出为 browser兼容的es5 语法

babel-preset-**: babel preset 告诉babel解析的语法版本
babel-plugin-**: babel 插件

Plugin 会运行在 Preset 之前。
Plugin 会从前到后顺序执行。
Preset 的顺序则 刚好相反(从后向前)。

- babel-cli 允许命令行使用 babel 命令转译文件

- babel-node 允许命令行使用 babel-node 直接转译+执行 node 文件,随 babel-cli 一同安装 
babel-node = babel-polyfill + babel-register

- babel-register 改写 require 命令，为其加载的文件进行转码，不对当前文件转码, 只适用于开发环境

- babel-polyfill 为所有 API 增加兼容方法, 需要在所有代码之前 require，且体积比较大

- babel-plugin-transform-runtime & babel-runtime 把帮助类方法从每次使用前定义改为统一 require，精简代码, babel-runtime 需要安装为依赖，而不是开发依赖

- babel-loader 使用 webpack 时作为一个 loader 在代码混淆之前进行代码转换
