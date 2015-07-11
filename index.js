/**
*
* astro-browserify: astro module for transpiling JS with browserify
*
**/
'use strict';

var buildArgs = require('./src/buildArgs')
	, path = require('path')
	, fs = require('fs')
	;

module.exports = function (projectDir, options) {
	var args = buildArgs(projectDir, options)
	, cmd = path.resolve(fs.realpathSync(__dirname), './node_modules/.bin/browserify');

	//setup
	return { cmd: cmd, args: args };
}