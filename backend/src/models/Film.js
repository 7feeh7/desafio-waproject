const mongoose = require('mongoose')

const FilmSchema = new mongoose.Schema({
    title: String, 
    banner: String, 
    description: String, 
    director: String, 
    producer: String
})

module.exports = mongoose.model('Film', FilmSchema)