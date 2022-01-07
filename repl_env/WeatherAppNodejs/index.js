const http = require("http");
const fs = require("fs");
var requests = require('requests');


const homeFile = fs.readFileSync("index.html","utf-8");

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        requests('http://api.openweathermap.org/data/2.5/weather?q=pune&appid=a581b5a9f443f697a406c557726430ba')
        .on('data',(chunk)=>{
        const objdata = JSON.parse(chunk);
        const arrdata = [objdata];
        console.log(arrdata);
        })
        .on('end',(err)=> {
        if (err) return console.log('connection closed due to errors', err);
        
        console.log('end');
        });
    }
})

server.listen(3000,"127.0.0.1");