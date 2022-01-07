// Async vs Sync File System


// We should all ways prefer async rather than sync be case Async doesn't let other lines of code wait till it complete the other tasks

// Sync way to read

const fs = require("fs");

const data = fs.readFileSync("fsAsyncdemo/Async.txt","utf-8");
console.log(data);


// Aync Way to read

fs.readFile("fsAsyncdemo/Async.txt","utf-8",(err,data)=>{
    console.log(data);
    console.log(err);
});
console.log("after the data");