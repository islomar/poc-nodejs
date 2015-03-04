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

