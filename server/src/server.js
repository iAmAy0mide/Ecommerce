const http = require('http');
require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});