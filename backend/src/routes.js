const express = require('express')

const routes = express.Router()

routes.get('/films', (req, res) => {
    return res.json({ name: "teste" })
})

module.exports = routes