// const environment = process.env.NODE_ENV || 'test';
// const configuration = require('../../knexfile')[environment];
// const database = require('knex')(configuration);
// // const helpers = require('../../utils/olympiansHelpers');
// const helpers = require('../../routes/api/v1/olympians')
// const allOlympians = helpers.allOlympians;
//
// describe('favoritesHelpers functions', () => {
//   beforeEach(async () => {
//     await database.raw('TRUNCATE TABLE olympics_data CASCADE');
//
//     let olympian1 = await database('olympics_data')
//       .insert({id: 1, name:'Tathan Nhomas', sex: 'M', age: 33, height: 180, weight: 145, sport: 'climbing', team: 'Colorado'})
//       .returning(['id', 'name', 'sex', 'age', 'height', 'weight','sport', 'team'])
//
//     let olympian2 = await database('olympics_data')
//     .insert({id: 2, name:'Tamille Cerry', sex: 'F', age: 32, height: 179, weight: 180, sport: 'skiing', team: 'Colorado'})
//     .returning(['id', 'name', 'sex', 'age', 'height', 'weight','sport', 'team'])
//   });
//
//   afterEach(async () => {
//     await database.raw('TRUNCATE TABLE olympics_data CASCADE');
//   })
//
//   describe('allOlympians', () => {
//     it('returns a list of all olympians', async () => {
//       const olympians = await allOlympians();
//       expect(olympians[0].name).toBe('Tathan Nhomas');
//       expect(olympians[0].team).toBe('Colorado');
//       expect(olympians[0].age).toBe(33);
//       expect(olympians[0].sport).toBe('climbing');
//       expect(olympians[1].name).toBe('Tamille Cerry')
//     })
//   })
//
// })
