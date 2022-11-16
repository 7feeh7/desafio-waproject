const filmRepo = require('../repositories/film')

module.exports = {
    async index(req, res) {
        const perPage = 10 
        const page = 1 
    
        const films = await filmRepo.getAllFilms(perPage, page)
        
        return res.json(films)
    }
}