const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

async function mongooseConnection() {
    await mongoose.connect(MONGO_URI, {
        wtimeoutMS: 500,
        maxPoolSize: 2500,
    });
}

module.exports = {
    mongooseConnection,
} 