const http = require("http");
const url = require("url");

// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     // res.write("hello world, this is priyansh");
//     var q = url.parse(req.url, true).query;
//     var text = q.year + " " + q.month;
//     // res.write(req.url);
//     res.end(text);
// }).listen(3030);

// importing modules
const dt = require("./create_modules");
const uc = require('upper-case');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(uc.upperCase("The date and time are currently: ") + dt.date());
    res.end();
}).listen(3030);