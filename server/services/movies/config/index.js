// const MongoClient = require('mongodb').MongoClient;
// const dbUrl = 'mongodb://localhost:27017';
// const dbName = 'entertainMeMovie';

// const client = new MongoClient(dbUrl, {useUnifiedTopology: true})
// client.connect()

// const db = client.db(dbName)

// module.exports = db

// const MongoURI = 'mongodb+srv://entertainMeMovie:mongoDB@cluster0.t0ath.mongodb.net/entertainMeMovie?retryWrites=true&w=majority'

const MongoURI = process.env.MONGO_SERVER_URI || 'mongodb://localhost:27017';
if (process.env.MONGO_SERVER_URI) {
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    const db = mongoose.createConnection(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    module.exports = db;
} else {
    const MongoClient = require('mongodb').MongoClient;
    const db_name = 'entertainMeMovie';
    const client = new MongoClient(MongoURI, { useUnifiedTopology: true });
    client.connect();
    const db = client.db(db_name);
    module.exports = db;
}