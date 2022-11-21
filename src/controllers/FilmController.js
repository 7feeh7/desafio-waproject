const repository = require('../repositories/film-repository');

const { getDataApiExternal } = require('../api-data');

module.exports = {
  async index(req, res, next) {
    try {
      const { page = 1, perPage = 10 } = req.query;

      const films = await repository.getAllBooks(page, perPage);
      const count = await repository.countBooks();

      res.header('X-Total-Count', count);

      return res.status(200).json(films);
    } catch (err) {
      next(err)
    }
  },
  async update(req, res, next) {
    try {
      const films = await getDataApiExternal() || [];

      if (films.length !== 0) {
        await repository.deleteAllBooks();

        for await (const film of films) {
          const { title, movie_banner, description, director, producer } = film;

          await repository.create({ title, banner: movie_banner, description, director, producer });
        }
      }

      return res.status(200).json();
    } catch (err) {
      next(err)
    }

  }
}