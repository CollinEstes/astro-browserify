/**
*
* buildArgs.js - build arguments for the command
*
**/

var path = require('path');

module.exports = function (projectDir, options) {

	var args = []
	, defaultIn = path.join(projectDir, '/public/js')
	, defaultOut = path.join(projectDir, '/public/dist/js')
	;

	if (options.input) {
		defaultIn = path.join(projectDir, options.input);
	}

	if (options.output) {
		defaultOut = path.join(projectDir, options.output);
	}

	// set input source (switches between client/server)
	args.push(defaultIn);

	// set output directory
	args.push('--outfile')
	args.push(defaultOut + '/bundle.js');


	if (options.debug) {
		args.push('--debug');
	}

	return args;
}
