const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// This is a very common error in Node.js applications, especially when using external modules.
// It usually occurs when the Node.js process is unable to find the required module. 
// This is often due to issues with the module's installation, such as typos in the name, or incorrect paths.