var http = require('http');
var concat = require('concat-stream');

var urls = process.argv.slice(2);
var allData = [];
var numberOfUrlsRetrieved = 0;

function getDataFromUrl(url) {
	return function() {
		http.get(url, function callback(response) {
		
			response.setEncoding('utf8');

			response.pipe(concat(function (data) { 			
				allData.push(data);
			}));

			response.on("error", console.error);

			response.on("end", function() {	
				console.log('Finished ' + url);	
				printAllDataIfFinished();
			});
		});
	};
}

function printAllDataIfFinished() {
	numberOfUrlsRetrieved++
 	if (numberOfUrlsRetrieved == 3) {
		console.log('All finished!!');
		//allData.forEach(printElement);
	}
}

function printElement(element) {
	console.log(element);
}

for (index in urls) {
	getDataFromUrl(urls[index])();
}


// var http = require('http')

// var urls = process.argv.slice(2);
// var strs = []; 
// var counter = 0;
// function work(id){
//     http.get(urls[id], function(res){
//         res.setEncoding('utf8');
//         var allData = ""; 
//         counter++;
//         res.on('data', function(data){
//             allData += data;    
//         }); 
//         res.on('end', function(){
//                 counter--;
//                 strs[id] = allData;
//                 if(counter === 0)   
//                     print();    
//             })  
//         }).on('error', function(e){
//                 console.log("error:" + e.message);
//             })  
// }
// for(var i = 0; i < urls.length; i++){
//     work(i)
// }

// function print(){
//     for(var i = 0; i < strs.length; i++)
//         console.log(strs[i])
// }