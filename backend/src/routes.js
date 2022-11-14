const express = require('express')

const routes = express.Router()

routes.get('/films', (req, res) => {
    return res.json({ name: "teste" })
})

routes.post('/films', (req, res) => {
    const { name } = req.body
    console.log("name", name)
    return res.status(200)
})

module.exports = routes