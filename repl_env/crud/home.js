const fs = require("fs");

//create new file

// fs.mkdirSync("crudoperation");

// fs.writeFileSync('crudoperation/bio.txt','this is file created from writefilesync command');

// fs.appendFileSync('crudoperation/bio.txt',' this is second data which is appended');

//Reading file without getting buffer with toString()

// const readfile = fs.readFileSync('crudoperation/bio.txt');
// console.log(readfile.toString());

//Reading file without converting to string

// const readfile = fs.readFileSync('crudoperation/bio.txt','utf-8');
// console.log(readfile);

//Rename the bio file

// fs.renameSync('crudoperation/bio.txt','crudoperation/mybio.txt');

//Deleting file from folder

// fs.unlinkSync("crudoperation/bio.txt");

// Deleting Folder 

// fs.rmdirSync("crudoperation");