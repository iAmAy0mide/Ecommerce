const http = require('http');
require('dotenv').config();

const { 
    mongooseConnection,
} = require('./services/mongo')

const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

(async function startServer() {
    try {
        await mongooseConnection();
        console.log('MongoDB connected!');
    } catch (err) {
        throw new Error(err);
    }

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
})();