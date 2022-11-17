const Film = require('../models/Film');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        
        const perPage = 10
        
        const films = await Film.find()
            .skip((page-1)*perPage)
            .limit(perPage);
        
        const count = await Film.find().count();
        
        res.header('X-Total-Count', count);
        
        return res.status(200).json(films);
    }
}