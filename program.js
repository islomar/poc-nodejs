var totalSum = 0;
var numberOfArguments = process.argv.length;
if (numberOfArguments >= 3) {
	for (var i=2; i<numberOfArguments; i++) {
		totalSum += Number(process.argv[i]);
	}	
}

console.log(totalSum);