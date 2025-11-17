const {createServer} = require('http');

function requestListener(req, res){
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
}

const server = createServer(requestListener);

server.listen(8000, "127.0.0.1" , ()=>{
    console.log('Server is running');
});
