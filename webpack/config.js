'use strict';
const path = require('path');

module.exports = {
	dev: {
		assetsPublicPath: '/',
		assetsSubDirectory: 'static',
		devtool: 'cheap-module-eval-source-map',

	},
	build: {
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsPublicPath: '/',
		assetsSubDirectory: 'static',

		devTool: 'source-map'
	}
}