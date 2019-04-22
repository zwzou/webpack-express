'use strict';
const config = require('./config');

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
		rules: []
	}
}
