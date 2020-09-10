const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'entertainMe';

const client = new MongoClient(dbUrl, { useUnifiedTopology: true});
client.connect()

const db = client.db(dbName)

module.exports = db