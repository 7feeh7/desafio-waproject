const Film = require('../models/Film');

const { saveDataApiExternal, getDataApiExternal } = require('../api-data');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const perPage = 10

        const films = await Film.find()
            .skip((page - 1) * perPage)
            .limit(perPage);

        const count = await Film.find().count();

        res.header('X-Total-Count', count);

        return res.status(200).json(films);
    },
    async update(req, res) {
        const { update_all } = req.body;

        if (!update_all) {
            return res.status(400).send();
        }

        const films = await getDataApiExternal() || [];

        if (films.length !== 0) {
            await Film.deleteMany({});
            await saveDataApiExternal();
        }

        return res.status(202).send();

    }
}