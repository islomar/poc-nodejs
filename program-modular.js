var mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], function(err, list){

	  if (err) {
	   console.error(err);
	  }
	  else list.forEach(function (file) {
	   console.log(file);
	  })

});