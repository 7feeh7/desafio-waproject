const express = require('express')
const axios = require('axios')

const routes = express.Router()

const apiFilms = 'https://ghibliapi.herokuapp.com/films'

routes.get('/films', async (req, res) => {
    const response = await axios.get(apiFilms)

    const films = response.data

    // console.log(films)

    for (const film of films) {
        const { title, movie_banner, description, director, producer } = film
        console.log('title', title)
        console.log('description', description)
        console.log('director', director)
        console.log('producer', producer)
        console.log('movie_banner', movie_banner)
    }
    
    return res.send("Searching")
})

module.exports = routes