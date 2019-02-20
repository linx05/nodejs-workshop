const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const { query } = url.parse(req.url, true);
  const name = query.name || 'You';

  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello ${name}!`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
