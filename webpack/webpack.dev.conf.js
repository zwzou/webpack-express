'use strict';
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config.js');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', './views/index.js'],
	devtool: config.dev.devtool,
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './views/index.html',
			// chunks: ['manifest', 'vendor', 'index'], // 每个HTML引用的js模块
			inject: true // js插入的位置
		})
	]
}) 

module.exports = devWebpackConfig;
