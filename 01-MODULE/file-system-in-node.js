const fileSystem = require('fs');  // Built-in Module

// whatever code of this "fs" it will all go to this fileSystem variable name and with the help of this name we can use whatever we want from this "fs"

const content =  fileSystem.readFileSync('notes.txt', 'utf-8');
// Here "readFileSync" is the function name

console.log(content);


// Notes:- 
// How this require will work here ?
// Nodejs have the built-in a wrapper function that wrapper function contains require so, it reads the code through that.

// Example:- 

// (function (exports, require, module, __filename, __dirname) {  
       
    
//  });


// Another Example:- 
const contents = fs.readfileSync('notes.txt', 'utf-8');
console.log(contents);

fs.writeFileSync('copy.txt', 'hey', 'utf-8');
fs.appendFileSync('copy.txt', 'hey', 'utf-8');
// If there is no file with that name, it will create a new file with that name.

// Here 'writeFileSync' is responsible for overriding, if any thing is already written in the file then it will override it and add the things provided from here.

// If you do not want to override, you can use the option called "appendFileSync".

fs.mkdirSync('games', { recursive: true });
// It code will make a directory.

fs.mkdirSync('games/xyz/a', { recursive: true });
// This will make the nested directory.

fs.rmdirSync('games/xyz/a');
// This will delete first 'a' directory then again we have to run, then it will delete xyz, then again if we run it will delete games directory.

fs.unlinkSync('copy.txt');
// It will delete the file
//---------------------------------------------------------------------------------------------

// Task:- Read the contents of notes.txt using Async

const fs = require('fs');

fs.readFile('notes.txt', 'utf-8', function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log('Contents got:', data);
  }
});


