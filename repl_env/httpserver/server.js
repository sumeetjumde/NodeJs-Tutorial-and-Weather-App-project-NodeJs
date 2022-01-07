// To create nodejs Server follow the steps
// require to get current http requires
// It requires http module
// server takes an fun with req and res callback fun
// listen is port number where you want server to start so localhost is 127.0.0.1 and port is whatever you want i have taken port as 3000

const http = require("http");

const server = http.createServer((req,res)=>{
    res.end('Hello World Sumeewt');
    
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('listening to port 3000')
});