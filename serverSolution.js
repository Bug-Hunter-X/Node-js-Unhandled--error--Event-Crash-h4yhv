const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const port = 3000;

// Use a process.on('uncaughtException') handler to gracefully handle errors:
process.on('uncaughtException', (err) => {
  console.error('An unhandled exception occurred:', err);
  // Perform cleanup tasks here (e.g., log, notify monitoring system, etc.)
  process.exit(1); // Exit the process with an error code
});

// Alternative: use a try catch block to handle errors within specific functions
try {
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
} catch (err) {
  console.error("Error starting server:", err);
}
