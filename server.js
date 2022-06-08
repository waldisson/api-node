const express = require('express');

const app = express();
const PORT = 3000;

app.use('/api', require('./src/routes'))
app.listen(PORT, () => console.log(`Listtening on ${PORT}`));

// const http = require('http');

// const requestListener = function(req, res) {
//   res.writeHead(200);
//   res.end('Hello, World!');
// }
// const server = http.createServer(requestListener);
// server.listen(PORT);