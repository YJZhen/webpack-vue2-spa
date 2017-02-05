
//node的路径模块
const path=require('path');
const webpack=require('webpack');
//构建页面资源的插件
const extractText=require('extract-text-webpack-plugin');
//因为我们是vue.js的应用，把各个.vue后缀的组件当做一个页面，所以引入这个可以编译这些.vue文件
const vue = require("vue-loader");

const config={
    entry:[path.resolve(__dirname,'src/main.js')],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'build.js',
        publicPath:__dirname+'/dist/',
        // chunkFilename:'[id].build.js?[chunkhash]'
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue'
            },
            {
                test: /\.scss$/,
                loader: extractText.extract("style-loader", 'css-loader')
            },
            {
                test: /\.css$/,
                loader: extractText.extract("style-loader", "css-loader")
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url?limit=40000'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    vue: {
        css: extractText.extract("css"),
        sass: extractText.extract("css!sass-loader")
    },
    babel: {
        // 告诉babel你要解析的语言
        presets: ['es2015'],
        plugins: ["transform-runtime"]
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    plugins:[
        //将公用JS提到common.js文件中
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        // new webpack.LoaderOptionsPlugin({
        //     test: /\.css$/, // optionally pass test, include and exclude, default affects all loaders
        //                     // 可以传入 test、include 和 exclude，默认会影响所有的 loader
        //     minimize: true,
        //     debug: false,
        //     options: {        // pass stuff to the loader
        //         // 这里的选项会传给 loader
        //     }
        // }),
        //将样式合并到style.css文件中
        // new extractText('style.css',{
        //     allChunks: true
        // })
        //使用ProvidePlugin加载使用频率高的依赖库
        // new webpack.ProvidePlugin({
        //     $:'webpack-zepto'
        // })
    ]
}

module.exports=config;