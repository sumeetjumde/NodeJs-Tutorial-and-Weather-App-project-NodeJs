const fs =require("fs");

const http = require ("http");

const server = http.createServer();

server.on('request',(req,res)=>{

    // normay way

    // fs.readFile('input.txt',(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // })

    //Stream Way 
    // const readablestream = fs.createReadStream("input.txt");
    // readablestream.on('data',(chuckdata)=>{
    //     res.write(chuckdata);
    // });
    // readablestream.on('end',()=>{
    //     res.end();
    // })
    // readablestream.on('error',(err)=>{
    //     console.log(err);
    //     res.end("file not found");
    // })
    
    // 3rd Stream pipes way
    const readablestream = fs.createReadStream("input.txt");
    readablestream.pipe(res);
})


server.listen(8000,'127.0.0.1');