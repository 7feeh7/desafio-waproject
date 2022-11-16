const mongoose = require('mongoose');
const Film = require('../models/Film')

exports.create = async (data) => {
    return Film.create(data)
}

exports.getAllFilms = async (perPage, page) => {
    return Film.find().skip((page-1)*perPage).limit(perPage)
}
