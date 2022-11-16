const express = require('express')
const axios = require('axios')

const routes = express.Router()

const apiFilms = 'https://ghibliapi.herokuapp.com/films'

routes.get('/films', async (req, res) => {
    const response = await axios.get(apiFilms)

    const films = response.data

    for (const film of films) {
        const { title, description, director, producer } = film
        console.log('title', title)
        console.log('description', description)
        console.log('director', director)
        console.log('producer', producer)
    }
    
    return res.send("Searching")
})

module.exports = routes