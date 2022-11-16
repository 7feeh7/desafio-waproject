const { Router } = require('express')
const FilmController = require('./controllers/FilmController')

const routes = Router()

routes.get('/films', FilmController.index)

module.exports = routes