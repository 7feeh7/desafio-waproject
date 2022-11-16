const { Router } = require('express')
const axios = require('axios')
const Film = require('./models/Film')

const routes = Router()

const apiFilms = 'https://ghibliapi.herokuapp.com/films'

routes.get('/films', async (req, res) => {
    const response = await axios.get(apiFilms)

    const films = response.data


    for await (const film of films) {
        const { title, movie_banner, description, director, producer } = film
        
        await Film.create({
            title, 
            banner: movie_banner, 
            description, 
            director, 
            producer
        })
    }
    
    return res.send("Cadastrado")
})

module.exports = routes