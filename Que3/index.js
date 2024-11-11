const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Hello World</h1>');
    }
   else {
        // Handle 404 for any other routes
        res.statusCode = 404;
        res.end('<h1>Page Not Found</h1>');
    }
});

// Set the server to listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});