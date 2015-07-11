/**
*
* astroBrowserifySpec.js - main test
*
**/

var astroB = require('../')
	, cwd = '/test';

describe('astro-browserify', function () {

	it('should return command as browserify', function () {
		var result = astroB(cwd, {});
		expect(result.cmd.indexOf('astro-browserify/node_modules/.bin/browserify')).to.not.equal(-1);
	});

});