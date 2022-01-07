const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == "/"){
        res.end('This is homepage');
    }
    else if (req.url == '/about'){
        res.end('This is about side')
    }
    else if (req.url == '/contact'){
        res.end('This is Contact side')
    }
    else if (req.url == '/userapi'){
        fs.readFile("userapi.json","utf-8",(err,data)=>{
            // console.log(data);
            // console.log(err);
            // objdata= JSON.parse(data);
            // res.end(objdata[2].name);
            res.end(data)
            
            res.writeHead(200,{"Content-type":"application/json"});
        })
        
    }
    else{
        res.writeHead(404),{"Content-type":"text/html"};  
        res.end('ERROR PAGE')
    } 
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('listening to port 3000')
});