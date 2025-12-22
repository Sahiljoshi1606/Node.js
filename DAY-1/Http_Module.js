var http = require('http');
var url = require('url');



http.createServer(function (req, res) {                         //above line show how to create server
    res.writeHead(200, {  'Content-Type': 'text/html'});

    var parseUrl = url.parse(req.url, true);
    var parseName = parseUrl.query.name;
    var parseBrand = parseUrl.query.brand;

    if (parseUrl.pathname === '/') {
        res.write("<h1>Home Page</h1>");
        res.write("<p>Welcome to my Node.js Server</p>");
    }
    else if (parseUrl.pathname === '/about') {
        res.write("<h1>About Page</h1>");
        res.write("<p>This is the about page</p>");
    }
    else if (parseUrl.pathname === '/contact') {
        res.write("<h1>Contact Page</h1>");
        res.write("<p>Contact us at support@example.com</p>");
    }
    else if (parseUrl.pathname === '/product') {
        res.write("<h1>Product Page</h1>");
        res.write(`<p>You are searching for <b>${parseName}</b> product of <b>${parseBrand}</b> brand</p>`);
    }
    else {
        res.write("<h1>404 Page Not Found</h1>");
    }

    res.end();
}).listen(8888);

console.log("Server running on port 9999");
