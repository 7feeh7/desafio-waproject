const mongoose = require('mongoose');
const Film = require('../models/Film')

exports.create = async (data) => {
    const film = new Film(data)
    return await film.save()
}

exports.getAllFilms = async () => {
    return await Film.find()
}
