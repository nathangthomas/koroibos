// const environment = process.env.NODE_ENV || 'development';
// const configuration = require('../knexfile')[environment];
// const database = require('knex')(configuration);
//
// async function allOlympians() {
//   try{
//     // return await database('olympians')
//     return await database('olympics_data')
//       .column(['name', 'team', 'age', 'sport'])
//   } catch(e) {
//     return e;
//   }
// }

// async function totalMetalsWon(name) {
//     knex.raw(`select ${name} from olympics_data where id != Null`) {
//       then.(function(olympics_data) {
//         return(olympics_data)
//       })
//     }
//
// }

// async function findOlympian(id) {
//   try {
//     let olympian =  await database('olympics_data')
//       .where({ id: id })
//       .column(['name', 'team', 'age', 'sport'])
//     return olympian[0];
//   } catch (e) {
//     return e;
//   }
// }

// async function olympiansInfo(olympian_id) {
//   try {
//     let info = await findOlympian(id);
//     let total_metals = await total_metals_won(olympian_name);
//
//     return {
//       name: info.name,
//       team: info.team,
//       age: info.age,
//       sport: info.sport,
//       total_metals_won: total_metals
//     }
//   } catch(e) {
//     return e;
//   }
// }

// module.exports = {
//   allOlympians: allOlympians
// }
