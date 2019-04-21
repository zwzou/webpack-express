'use strict';
const webpack = require('webpack');
const rm = require('rimraf');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk')

const config = require('./config.js');
const prodConfig = require('./webpack.prod.conf.js');

const spinner = ora('build for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
	if (err) throw err;
	webpack(prodConfig, (err, stats) => {
		spinner.stop();
		if (err) throw err
		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chumkModules: false
		}) + '\n\n');

		if(stats.hasErrors()) {
			console.log(chalk.red('  Build failed with errors.\n '))
			process.exit(1)
		}

		console.log(chalk.cyan(' Build complete.\n'));
		console.log(chalk.yellow(
			'  Tip: 通过` npm start `在服务器端运行。'
		))
	});
})
