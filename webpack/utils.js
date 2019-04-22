'use strict';
const config = require('./config.js');
const path = require('path');

exports.assetsPath = function (_path) {
  const assetsSubDirectory = (process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory);
  return path.posix.join(assetsSubDirectory, _path)
}