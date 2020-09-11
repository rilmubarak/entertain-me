
const db = require(`../config`);
const Serie = db.collection(`series`);
const { ObjectID } = require('mongodb');

class SerieModel {

    static findAll() {
        return Serie.find().toArray();
    }

    static findOne (id) {
        return Serie.findOne({ _id: ObjectID(id) })
    }

    static insertOne(newSerie) {
        return Serie.insertOne(newSerie)
    }

    static updateOne(id, updateSerie) {
        return Serie.findOneAndUpdate({ _id: ObjectID(id) }, {$set: updateSerie}, {returnOriginal: false})
    }

    static deleteOne(id) {
        return Serie.findOneAndDelete({ _id: ObjectID(id) })
    }
}

module.exports = SerieModel