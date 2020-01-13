var app = require('../../app');
var request = require("supertest");

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);

describe('get all olympians and there medal count', () => {

  beforeEach(async () => {
    await database.raw('truncate table olympics_data cascade');

    await database('olympics_data').insert([
      {name: 'Olympian One', sex: 'M', age: 23, height: 180, weight: 145, team: 'USA', games: 'I like games', sport: 'The gamey kind', event: 'sports', medal: 'Gold'},
      {name: 'Olympian Two', sex: 'F', age: 20, height: 160, weight: 120, team: 'Belgium', games: 'I too like games', sport: 'boardgames', event: 'chess', medal: 'Silver'},
      {name: 'Olympian Two', sex: 'F', age: 20, height: 160, weight: 120, team: 'Belgium', games: 'I too like games', sport: 'boardgames', event: 'checkers', medal: 'Bronze'},
      {name: 'Olympian Three', sex: 'F', age: 45, height: 165, weight: 144, team: 'Hungary', games: 'I also like games', sport: 'free walking', event: 'skipping', medal: null },
      {name: 'Olympian Three', sex: 'F', age: 45, height: 165, weight: 144, team: 'Hungary', games: 'I also like games', sport: 'free walking', event: 'frollicking', medal: 'gold'}
    ]);
  });

  afterEach(() => {
    database.raw('truncate table olympics_data cascade');
  });

  describe('GET olympians', () => {
    it('happy path', async () => {
      const response = await request(app)
        .get("/api/v1/olympians");

      expect(response.statusCode).toBe(200);

      expect(response.body["olympians"].length).toBe(3);
      expect(response.body["olympians"][0]).toHaveProperty('name');
      expect(response.body["olympians"][0]).toHaveProperty('team');
      expect(response.body["olympians"][0]).toHaveProperty('age');
      expect(response.body["olympians"][0]).toHaveProperty('sport');
      expect(response.body["olympians"][0]).toHaveProperty('total_medals_won');
    });
  });
});
