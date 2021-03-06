##General info
Run programs with
$ node program.js

##Hello world
$ learnyounode verify program.js
$ learnyounode run program.js

##Baby steps
* Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).
* The first element of the process.argv array is always 'node', and the second element is always the path to your program.js file, so you need to start at the 3rd element (index 2), adding each item to the total until you reach the end of the array.

##MY FIRST I/O!
* Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.
* The full path to the file to read will be provided as the first command-line argument. You do not need to make your own test file. 

file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html
file:///usr/local/lib/node_modules/learnyounode/node_apidoc/buffer.html

##MY FIRST ASYNC I/O!
https://github.com/maxogden/art-of-node#callbacks

Usually things that have to talk to hard drives or networks will be asynchronous. If they just have to access things in memory or do some work on the CPU they will be synchronous.

Run with:
$  node program.js sample.txt

#FILTERED LS
Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html

#MAKE IT MODULAR
This problem is the same as the previous but introduces the concept of modules. You will need to create two files to solve this.

This problem is the same as the previous but introduces the concept of modules. You will need to create two files to solve this.

Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.

You must write a module file to do most of the work. The module must export a single function that takes three arguments: the directory name, the filename extension string and a callback function, in that order. The filename extension argument must be the same as what was passed to your program. Don't turn it into a RegExp or prefix with "." or do anything except pass it to your module where you can do what you need to make your filter work.

The callback function must be called using the idiomatic node(err, data) convention. This convention stipulates that unless there's an error, the first argument passed to the callback will be null, and the second will be your data. In this exercise, the data will be your filtered list of files, as an Array. If you receive an error, e.g. from your call to  fs.readdir(), the callback must be called with the error, and only the error, as the first argument.

You must not print directly to the console from your module file, only from your original program.

In the case of an error bubbling up to your original program file, simply check for it and print an informative message to the console.

These four things are the contract that your module must follow.

  * Export a single function that takes exactly the arguments described.
  * Call the callback exactly once with an error or some data as described.
  * Don't change anything else, like global variables or stdout.
  * Handle all the errors that may occur and pass them to the callback.

The benefit of having a contract is that your module can be used by anyone who expects this contract. So your module could be used by anyone else who does learnyounode, or the verifier, and just work.



#HTTP CLIENT
Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout).
-------------------------------------------------------------------------------

## HINTS

For this exercise you will need to use the http core module.

Documentation on the http module can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html

The http.get() method is a shortcut for simple GET requests, use it to simplify your solution. The first argument to http.get() can be the URL you want to GET; provide a callback as the second argument.

Unlike other callback functions, this one has the signature:

    function callback (response) { /* ... */ }

Where the response object is a Node Stream object. You can treat Node Streams as objects that emit events. The three events that are of most interest are: "data", "error" and "end". You listen to an event like so:

    response.on("data", function (data) { /* ... */ })

The "data" event is emitted when a chunk of data is available and can be processed. The size of the chunk depends upon the underlying data source.

The response object / Stream that you get from http.get() also has a setEncoding() method. If you call this method with "utf8", the "data" events will emit Strings rather than the standard Node Buffer objects which you have to explicitly convert to Strings.




#HTTP COLLECT

Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.

-------------------------------------------------------------------------------

## HINTS

There are two approaches you can take to this problem: 

1) Collect data across multiple "data" events and append the results together prior to printing the output. Use the "end" event to determine when the stream is finished and you can write the output.

2) Use a third-party package to abstract the difficulties involved in collecting an entire stream of data. Two different packages provide a useful API for solving this problem (there are likely more!): bl (Buffer List) and concat-stream; take your pick!

  <http://npm.im/bl>
  <http://npm.im/concat-stream>

To install a Node package, use the Node Package Manager npm. Simply type:

    $ npm install bl

And it will download and install the latest version of the package into a subdirectory named node_modules. Any package in this subdirectory under your main program file can be loaded with the require syntax without being prefixed by './':

    var bl = require('bl')

Node will first look in the core modules and then in the node_modules directory where the package is located.

If you don't have an Internet connection, simply make a node_modules directory and copy the entire directory for the package you want to use from inside the learnyounode installation directory:

  file:///usr/local/lib/node_modules/learnyounode/node_modules/bl
  file:///usr/local/lib/node_modules/learnyounode/node_modules/concat-stream

Both bl and concat-stream can have a stream piped in to them and they will collect the data for you. Once the stream has ended, a callback will be fired with the data:

    response.pipe(bl(function (err, data) { /* ... */ }))
    // or
    response.pipe(concatStream(function (data) { /* ... */ }))

Note that you will probably need to data.toString() to convert from a Buffer.

Documentation for both of these modules has been installed along with learnyounode on your system and you can read them by pointing your browser here:

  file:///usr/local/lib/node_modules/learnyounode/docs/bl.html
  file:///usr/local/lib/node_modules/learnyounode/docs/concat-stream.html



#JUGGLING ASYNC

node program.js http://www.google.es http://www.otogami.com http://www.unience.com

This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

-------------------------------------------------------------------------------

## HINTS

Don't expect these three servers to play nicely! They are not going to give you complete responses in the order you hope, so you can't naively just print the output as you get it because they will be out of order.

You will need to queue the results and keep track of how many of the URLs have returned their entire contents. Only once you have them all, you can print the data to the console.

Counting callbacks is one of the fundamental ways of managing async in Node. Rather than doing it yourself, you may find it more convenient to rely on a third-party library such as [async](http://npm.im/async) or [after](http://npm.im/after). But for this exercise, try and do it without any external helper library.
