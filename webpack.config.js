/*
 * webpack.config.java
 * 
 * Copyright(c) 2007-2017 by Yingzhi Tech
 * All Rights Reserved
 * 
 * Created at 2017-11-24 16:03:25
 */


const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: "./app/index.js", //入口文件
    output: {
        path: path.join(__dirname, "/dist/"), // 所有输出文件的目标路径，绝对路径！
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/, loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                },
                exclude: /node_modules/
            },
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};