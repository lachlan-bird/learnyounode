var directoryReader = require('./directoryReader');

directoryReader(process.argv[2], process.argv[3], function(err, filteredList) {
	if(err) {
		console.error('Error reading files');
	}
	else {
		filteredList.forEach(function(file) {
			console.log(file);
		});
	}
});