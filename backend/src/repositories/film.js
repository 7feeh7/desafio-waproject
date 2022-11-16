const mongoose = require('mongoose');
const Film = require('../models/Film')

exports.create = async (data) => {
    return Film.create(data)
}

exports.getAllFilms = async () => {
    return Film.find()
}
