var fs = require('fs');

var numberOfLinesInFile;

function countNumberOfLines(filePath) {

	console.log(filePath);

	fs.readFile(filePath, 'utf8', function doneReading(err, fileContents) {
		if (err) {
			console.warn('You screwed it up, man!!!');
		} else {
			console.log(fileContents.toString());
			numberOfLinesInFile = fileContents.toString().split('\n').length - 1;
			console.log(numberOfLinesInFile);
		}
	})

}

console.log(process.argv[2]);
//countNumberOfLines(process.argv[2]);

console.log(numberOfLinesInFile);