module.exports = function(dir, filterStr, callback) {
	var fs = require('fs');
	var path = require('path');
	var filteredList = [];
	fs.readdir(dir, function(err, fileArray) {
		if(err) return callback(err);
		var list = fileArray.filter(function(file) {
			return path.extname(file) === '.'+filterStr
		});
		
		callback(null, list);
	});
}