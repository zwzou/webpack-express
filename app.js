var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 使用webpack中间件处理HTML
const webConfig = require('./webpack/config.js');
const historyApiFallback = require('connect-history-api-fallback');

if (process.env.NODE_ENV === 'development') {
	const config = require('./webpack/webpack.dev.conf.js');
	const webpack = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');

	const compiler = webpack(config);

	app.use(webpackDevMiddleware(compiler, {
		publicPath: webConfig.dev.assetsPublicPath
	}));

	app.use(webpackHotMiddleware(compiler, {
		heartbeat: 2000
	}))

	// app.get("*", (req, res) => {
	//     res.sendFile(path.join(__dirname, "index.html"));
	// });

}
app.use(historyApiFallback({
	index: '/index.html'
}));
app.use(express.static(webConfig.build.assetsRoot));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;