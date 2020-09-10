const express = require('express')
const routes = require('./routes')
const app = express()
const PORT = 3002

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(`/movies`, routes)

app.listen(PORT, () => {
    console.log('Listen port at:', PORT)
})