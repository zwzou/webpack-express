'use strict';
const config = require('./config');
const utils = require('./utils');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: './views/index.js',
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production'
		? config.build.assetsPublicPath
		: config.dev.assetsPublicPath
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
		        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          	limit: 10000,
		          	name: utils.assetsPath('media/[name].[hash:7].[ext]')
		        }
	      	},
	      	{
		        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          	limit: 10000,
		          	name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
		        }
	      	}
		]
	}
}
