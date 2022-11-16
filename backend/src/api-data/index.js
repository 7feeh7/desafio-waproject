const axios = require('axios');
const mongoose = require('mongoose');

const Film = require('../models/Film');

const apiFilms = 'https://ghibliapi.herokuapp.com/films';

const saveDataApiExternal = async () => {
    const dbFilms = await Film.find() || [];

    if (dbFilms.length === 0) {
        const response = await axios.get(apiFilms);

        const films = response.data;

        for await (const film of films) {
            const { title, movie_banner, description, director, producer } = film;

            await Film.create({
                title,
                banner: movie_banner,
                description,
                director,
                producer
            });
        }
    }
}

module.exports = saveDataApiExternal;