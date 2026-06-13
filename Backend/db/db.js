const mongoose = require('mongoose');

async function connectToDb() {
    const uri = process.env.DB_CONNECT;

    if (!uri) {
        throw new Error('DB_CONNECT is not defined in .env');
    }

    await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 10000,
    });

    console.log('Connected to DB');
}


module.exports = connectToDb;
