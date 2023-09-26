const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  fs.createReadStream('index.html').pipe(res);
});

const port = process.env.PORT || 3210;
server.listen(port);

console.log(`Application started : http://localhost:${port}`);
