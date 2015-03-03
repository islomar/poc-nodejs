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
$  node program.js /sample.txt