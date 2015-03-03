var fs = require('fs');

var numberOfLinesInFile;



	fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
		if (err) {
			console.error('You screwed it up, man!!!: ' + err);
		} else {
			numberOfLinesInFile = fileContents.toString().split('\n').length - 1;
		}
		console.log(numberOfLinesInFile);
	})