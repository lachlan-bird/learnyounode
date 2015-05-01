var fs = require('fs');

var contents = fs.readFile(process.argv[2], function(err, fileContents) {
	if(!err) console.log(fileContents.toString().split('\n').length-1)
});