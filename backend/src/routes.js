const { Router } = require('express')

const routes = Router()

routes.get('/films', async (req, res) => {
    return res.send("Cadastrado")
})

module.exports = routes