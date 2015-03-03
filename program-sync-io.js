var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var fileInStringFormat = buffer.toString();

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

console.log(fileInStringFormat.split('\n').length - 1);