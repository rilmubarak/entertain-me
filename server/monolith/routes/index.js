const router = require('express').Router();
const movieRoute = require('./movies')
const serieRoute = require('./series')

router.use('/movies', movieRoute)
router.use('/series', serieRoute)
router.get('/', (req, res) => {
    res.send(`hi, welcome to Entertain-Me`)
})

module.exports = router