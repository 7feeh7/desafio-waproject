const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGODB)

app.use(express.json())

// Enable CORS
app.use(cors())

const extenalData = require('./api-data')

setTimeout(()=> { extenalData() }, 300)

app.use(routes)

// Adding generic catch
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})

module.exports = app