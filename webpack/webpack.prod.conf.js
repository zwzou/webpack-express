'use strict';
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./config.js');
const baseWebpackConfig = require('./webpack.base.conf');

const prodWebpackConfig = merge(baseWebpackConfig, {
	mode: 'production',
	devtool: config.build.devtool,
	output: {
		path: config.build.assetsRoot,
		filename: path.join(config.build.assetsSubDirectory, 'js/[name].[chunkhash].js')
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
			 	vendors: {
		            test: /[\\/]node_modules[\\/]/,
		            priority: -10
		        },
		        commons: {
		        	name: "commons",
		            chunks: "initial",
		            minChunks: 2
		        }
			},
		},
		runtimeChunk: 'single'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './web/index.html',
			// chunks: ['manifest', 'vendor', 'index'], // 每个HTML引用的js模块
			inject: true, // js插入的位置
			minify: {
		        removeComments: true,
		        collapseWhitespace: true,
		        removeAttributeQuotes: true
		        // more options:
		        // https://github.com/kangax/html-minifier#options-quick-reference
	      	},
			// necessary to consistently work with multiple chunks via CommonsChunkPlugin
			chunksSortMode: 'dependency'
		}),
		new MiniCssExtractPlugin({
			filename: path.join(config.build.assetsSubDirectory, 'css/[name].[contenthash].js')
		})
	]
}) 

module.exports = prodWebpackConfig;
