const fs =  require("fs");


// throws Error for this methods so we have to use callback for async function

// fs.writeFile("fsAsyncdemo/Async.txt","this is Asnchronous data");

fs.writeFile("fsAsyncdemo/Async.txt","this is Asnchronous data",(err)=>
{
    console.log("files are created");
    console.log(err);
});

// To Append the data

fs.appendFile("fsAsyncdemo/Async.txt"," this is appended statement",(err)=>
{
    console.log("statement is appended");
    console.log(err);
});


// Read file 

fs.readFile("fsAsyncdemo/Async.txt","UTF-8",(err,data)=>{
    console.log(data);
});

// Rename

fs.readFile("fsAsyncdemo/Async.txt","fsAsyncdemo/Async.txt",(err)=>{
    console.log("rename is done");
    console.log(err);
});

// Delete file

fs.readFile("fsAsyncdemo/Async.txt",(err)=>{
    console.log("file deleted");
    console.log(err);
});


//  remove folder

fs.rmdir("./Async",(err)=>{
    console.log("folder deleted");
    console.log(err);
});












// Notes for Asnc function

// CODE

// const fs =  require("fs");

// fs.writeFile("fsAsyncdemo/Async.txt","this is Asnchronous data");


// sumeetpravinjumde@Sumeets-Air fsAsync % cd ..              
// sumeetpravinjumde@Sumeets-Air repl_env % cd fsAsync
// sumeetpravinjumde@Sumeets-Air fsAsync % mkdir fsAsyncdemo
// sumeetpravinjumde@Sumeets-Air fsAsync % type nul > fsAsync.js
// sumeetpravinjumde@Sumeets-Air fsAsync % node fsAsync.js
// node:internal/validators:223
//     throw new ERR_INVALID_CALLBACK(callback);
//     ^

// TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined
//     at maybeCallback (node:fs:177:3)
//     at Object.writeFile (node:fs:2101:14)
//     at Object.<anonymous> (/Users/sumeetpravinjumde/Documents/Work/Coding/Nodejs/repl_env/fsAsync/fsAsync.js:3:4)
//     at Module._compile (node:internal/modules/cjs/loader:1095:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1147:10)
//     at Module.load (node:internal/modules/cjs/loader:975:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47 {
//   code: 'ERR_INVALID_CALLBACK'
// }

// Node.js v17.0.1
// sumeetpravinjumde@Sumeets-Air fsAsync % node fsAsync.js


// This error because While using aSync function you have to use call back

// Code
// fs.writeFile("fsAsyncdemo/Async.txt","this is Asnchronous data",(err)=>
// {
//     console.log("files are created");
//     console.log(err);
// });

// console

// Node.js v17.0.1
// sumeetpravinjumde@Sumeets-Air fsAsync % node fsAsync.js
// files are created
// null
// sumeetpravinjumde@Sumeets-Air fsAsync % 