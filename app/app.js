const http = require('http');
const os = require('os');

const AUTHOR = process.env.AUTHOR || 'Unknown Author';
const UUID = process.env.UUID || '00000000-0000-0000-0000-000000000000';

const hostname = os.hostname();

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method === 'GET') {
    if (req.url === '/hostname') {
      res.writeHead(200);
      res.end(JSON.stringify({ hostname: hostname }));
    } 
    else if (req.url === '/author') {
      res.writeHead(200);
      res.end(JSON.stringify({ author: AUTHOR }));
    } 
    else if (req.url === '/id') {
      res.writeHead(200);
      res.end(JSON.stringify({ id: UUID }));
    } 
    else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Not Found' }));
    }
  } 
  else {
    res.writeHead(405);
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
});

server.listen(8000, () => {
  console.log('Serving on port 8000');
});
