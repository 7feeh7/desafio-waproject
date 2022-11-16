const axios = require('axios')

const filmRepo = require('../repositories/film')

const apiFilms = 'https://ghibliapi.herokuapp.com/films'

const saveDataApiExternal = async () => {
    const dbFilms = await filmRepo.getAllFilms() || []

    if (dbFilms.length === 0) {
        const response = await axios.get(apiFilms)

        const films = response.data

        for await (const film of films) {
            const { title, movie_banner, description, director, producer } = film

            await filmRepo.create({
                title,
                banner: movie_banner,
                description,
                director,
                producer
            })
        }
    }
}

module.exports = saveDataApiExternal