var fs = require('fs');
var path = require('path');

function printListOfFilesOfType(filePath, fileType) {

	fs.readdir(filePath, function doneReading(err, listOfFiles) {
		if (err) {
			console.error('You screwed it up, man!!!: ' + err);
		} else {
			listOfFiles
				.filter(function(fileName) {
					return path.extname(fileName) === "." + fileType;
				})
				.forEach(function(fileName){ console.log(fileName) });
		}
	})
}

printListOfFilesOfType(process.argv[2], process.argv[3]);