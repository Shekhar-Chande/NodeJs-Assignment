const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('Hello Students');
    res.end()
})

server.listen(4000, ()=>{
    console.log("Server is running at Port 4000");
})