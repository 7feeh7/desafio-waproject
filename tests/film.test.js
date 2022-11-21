const request = require('supertest');
const { faker } = require('@faker-js/faker')

const app = require('../src/server');
const db = require('./config/database');
const Film = require('../src/models/Film');

const agent = request.agent(app);

const total = 30;

const mockFilm = async (total) => {
  for (let index = 0; index < total; index++) {
    const mock = {
      title: faker.name.jobTitle(),
      banner: faker.internet.url(),
      description: faker.name.jobDescriptor(),
      director: faker.name.fullName(),
      producer: faker.name.fullName()
    };

    const film = new Film(mock);

    await film.save();
  }
}

beforeAll(async () => {
  await db.connect();
  await mockFilm(total);
});

afterEach(async () => await db.clear());
afterAll(async () => await db.close());

describe("Film", () => {
  test("should return a list of movies when called", async () => {
    const res = await agent.get("/films");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(10);
    expect(res.headers).toHaveProperty('x-total-count', `${total}`);
  });

  test("should return a statusCode 200 if it manages to update the base", async () => {
    const res = await agent.get("/films/update");

    expect(res.statusCode).toEqual(200);
  });
});