var	path = require('path'),
	fs = require('fs');
console.log(__dirname);
exports.rootdir = path.normalize(__dirname + '/../../');
exports.version = JSON.parse(fs.readFileSync(this.rootdir + '/package.json').toString()).version;