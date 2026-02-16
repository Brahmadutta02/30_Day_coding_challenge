// Simple HTTP Server example in Node.js
const http = require('http');

const PORT = 3000;

// Create a server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send response
  res.end('Hello World from Node.js Server!\n');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});
