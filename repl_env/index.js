// FILE SYSYTEM IN NODE


const name = "sumeet";
console.log(name);

// file creation and enterting data in that file
// fs means file system ref node docs for that

const fs = require("fs");
fs.writeFileSync('read.txt','This is file created with file system');

// so if the file is already present then its write to same file (overwrites it)

fs.writeFileSync('read.txt','so if the file is already present the its right to same file');

// Lets say you dont want to overwrite the file and write data after that the you have to use append command

fs.appendFileSync('read.txt','this is appended data with append command');

//Read file

const bufdata = fs.readFileSync('read.txt');
console.log(bufdata);

// output will be Buffer  which is datatype for storing binary that is not present in javascript but present in node
{/* <Buffer 73 6f 20 69 66 20 74 68 65 20 66 69 6c 65 20 69 73 20 61 6c 72 65 61 64 79 20 70 72 65 73 65 6e 74 20 74 68 65 20 69 74 73 20 72 69 67 68 74 20 74 6f ... 51 more bytes> */}

// getting original data from buffer

originaldata = bufdata.toString();

console.log(originaldata);

// To rename the file

fs.renameSync("read.txt","write.txt");

