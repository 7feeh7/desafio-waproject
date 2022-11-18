const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
    id_film: String,
    title: String, 
    banner: String, 
    description: String, 
    director: String, 
    producer: String
});

module.exports = mongoose.model('Film', FilmSchema);