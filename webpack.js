
//node的路径模块
const path=require('path');
const webpack=require('webpack');
//构建页面资源的插件
const extractText=require('extract-text-webpack-plugin');
//因为我们是vue.js的应用，把各个.vue后缀的组件当做一个页面，所以引入这个可以编译这些.vue文件
var vue = require("vue-loader");
