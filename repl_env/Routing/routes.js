
// http response status code
// ref :https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)

// writeHead is used to define the port no

const http = require("http");

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
    else{
        res.writeHead(404),{"Content-type":"text/html"};  
        res.end('ERROR PAGE')
    } 
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('listening to port 3000')
});