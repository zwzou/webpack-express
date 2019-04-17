'use strict';
const path = require('path');

module.exports = {
	dev: {
		assetsPublicPath: './'

	},
	build: {
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsPublicPath: './',


	}
}