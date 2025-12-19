var http = require('http');
http.createServer(function(req , res){
res.writeHead(200 , {'content-type': 'text/html'});

res.write(<h1>hello world</h1>);
res.end();


}
).listen(1111);