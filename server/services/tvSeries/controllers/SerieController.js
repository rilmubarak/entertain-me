const Serie = require(`../models/serie`);

class SerieController {
    static async findAll (req, res) {
        try {
            const series = await Serie.findAll();
            res.status(200).json(series)
        } catch(err) {
            res.status(500).json({message: err})
        }
    }

    static async findOne (req, res) {
        const SerieId = req.params.id
        try {
            const serie = await Serie.findOne(SerieId)
            if (!serie) {
                res.status(404).json({message: 'cant find the data'})
            } else {
                res.status(200).json(serie)
            }
        } catch(err) {
            res.status(500).json({message: err})
        }
    }

    static async insertOne (req, res) {
        const newSerie = req.body
        try {
            const result = await Serie.insertOne(newSerie)
            res.status(201).json(result.ops[0])
        } catch(err) {
            res.status(500).json({message: err})
        }
    }

    static async updateOne (req, res) {
        const SerieId = req.params.id
        const updateSerie = req.body
        try {
            const result = await Serie.updateOne(SerieId, updateSerie)
            res.status(200).json(result.value)
        } catch(err) {
            res.status(500).json({message: err})
        }
    }

    static async deleteOne (req, res) {
        const SerieId = req.params.id
        try {
            const result = await Serie.deleteOne(SerieId)
            res.status(200).json(result.value)
        } catch(err) {
            res.status(500).json({message: err})
        }
    }
}


module.exports = SerieController