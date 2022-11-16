const filmRepo = require('../repositories/film')

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query
       
        const perPage = 10
    
        const films = await filmRepo.getAllFilms(perPage, page)
        
        return res.json(films)
    }
}