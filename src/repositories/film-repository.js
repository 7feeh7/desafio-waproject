const Film = require('../models/Film');

module.exports = {
    async create (data) {
        const film = new Film(data);
        return await film.save();
    },
    async getAllBooks (page, perPage) {
        return await Film.find()
            .skip((page - 1) * perPage)
            .limit(perPage);
    },
    async countBooks () {
        return await Film.find()
            .count();
    },
    async deleteAllBooks () {
        return await Film.deleteMany();
    }
}

