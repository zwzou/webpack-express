var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 使用webpack中间件处理HTML
if (process.env.NODE_ENV === 'development') {
	const config = require('./webpack/webpack.dev.conf.js');
	const webpack = require('webpack');
	// const merge = require('webpack-merge');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const historyApiFallback = require('connect-history-api-fallback');

	const options = {
		
		publicPath: '/',
	};

	const compiler = webpack(config);

	app.use(historyApiFallback({
		index: '/index.html'
	}));
	// app.use(express.static(path.join(__dirname, "/")));

	app.use(webpackDevMiddleware(compiler, options));

	// app.get("*", (req, res) => {
	//     res.sendFile(path.join(__dirname, "index.html"));
	// });

} else if (process.env.NODE_ENV === 'production'){
	const webConfig = require('./webpack/config.js');

	app.use(express.static(webConfig.build.assetsRoot));
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;