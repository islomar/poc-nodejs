//Version concat-stream

var http = require('http');
var concat = require('concat-stream');

http.get(process.argv[2], function callback(response) {
	
	response.setEncoding('utf8');

	response.pipe(concat(function (data) { 
		console.log(data.length);
		console.log(data);
	}))

	response.on("error", console.error);
});