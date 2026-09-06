import http from 'http';

const port = 3999;
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Node.js server is working!');
});

server.listen(port, '127.0.0.1', () => {
  console.log(`✅ Listening on http://127.0.0.1:${port}`);
  setTimeout(() => {
    server.close(() => {
      console.log('Server closed.');
      process.exit(0);
    });
  }, 5000);
});

server.on('error', (err) => {
  console.error('❌ Server error:', err.message);
  process.exit(1);
});
