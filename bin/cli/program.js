var localconfig = require('../config/application'),
	logo = require('../cli/header'),
	request = require('request'),
	program = require('commander');

program
    .version(localconfig.version);

program
    .command('init')
    .description('')
    .action(function(path) {
    	request('http://www.google.com/search?q=bill+material&output=json', function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    console.log(body) // Print the google web page.
		  }
		});
    });

program.parse(process.argv);

if (!program.args.length) {
    console.log(logo);
    program.help();
}