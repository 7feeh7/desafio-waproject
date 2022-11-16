const mongoose = require('mongoose')

const FilmSchema = new mongoose.Schema({
    title: String, 
    movie_banner: String, 
    description: String, 
    director: String, 
    producer: String
})

module.exports = mongoose.model('Film', FilmSchema)