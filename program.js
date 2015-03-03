var fs = require('fs');

var numberOfLinesInFile;

function countNumberOfLines(filePath, callback) {

	fs.readFile(filePath, 'utf8', function doneReading(err, fileContents) {
		if (err) {
			console.warn('You screwed it up, man!!!: ' + err);
		} else {
			numberOfLinesInFile = fileContents.toString().split('\n').length - 1;
		}
		callback();
	})
}

function logMyNumber() {
  console.log(numberOfLinesInFile);
}	

countNumberOfLines(process.argv[2], logMyNumber);