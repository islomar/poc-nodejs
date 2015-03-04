var fs = require('fs');
var path = require('path');

module.exports = function(directoryName, fileType, callback) {

	fs.readdir(directoryName, function doneReading(err, listOfFiles) {
		if (err) {
			console.error('You screwed it up, man!!!: ' + err);
			return callback(err, listOfFiles);
		} else {
			var filteredListOfFiles = listOfFiles
				.filter(function(fileName) {
					return path.extname(fileName) === "." + fileType;
				});
			callback(null, filteredListOfFiles);
		}
	})
}