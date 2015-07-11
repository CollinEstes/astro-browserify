/**
*
* buildArgsSpec.js
*
**/

var buildArgs = require('../src/buildArgs');

describe('buildArgs.js', function () {

	beforeEach(function () {
		this.allOptions = {
			"debug": true,
			"input": 'public/javascript'
		};

		this.someOptions = {
			"debug": true
		};

		this.mockPath = '/project'

	});

	it('should return a string array', function () {
		expect(buildArgs(this.mockPath, this.allOptions)).to.be.an.instanceof(Array);
	});

	it('should default to public/js', function () {
		var args = buildArgs(this.mockPath, {}).join(' ');
		expect(args.indexOf('/public/js')).to.not.equal(-1);
		expect(args.indexOf('--outfile')).to.not.equal(-1);
		expect(args.indexOf('/public/dist/js')).to.not.equal(-1);
	});

	it('should have options passed in in the args array', function () {
		var args = buildArgs(this.mockPath, this.allOptions).join(' ');
		console.log(args);
		expect(args.indexOf('--debug')).to.not.equal(-1);
		expect(args.indexOf('--outfile')).to.not.equal(-1);
		expect(args.indexOf('project/public/dist/js')).to.not.equal(-1);
		expect(args.indexOf('project/public/javascript')).to.not.equal(-1);
	});

	it('should handle no args', function () {
		var args = buildArgs(this.mockPath, {});
		expect(args).to.be.ok;
	});


});
