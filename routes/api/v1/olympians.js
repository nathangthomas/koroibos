
var express = require('express');
var router = express.Router();
const Olympian = require("../../../models/olympian");
// const olympiansHelpers = require("../../../utils/olympiansHelpers")
// const allOlympians = olympiansHelpers.allOlympians;
const knex = require('../../../db/knex');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

router.get('/', (req, res) => {
  allOlympians()
  .then(olympians => {
    if (olympians.length){
      res.status(200).send(olympians)
    } else {
      res.status(404).json({
        error: 'Not found.'
      })
    }
  })
  .catch(error => res.status(500).send({ error }))
});


// private methods below this point -- move to utils/olympiansHelpers.js

async function allOlympians() {
  try{
    // return await database('olympians')
    return await database('olympics_data')
    .column(['name', 'team', 'age', 'sport'])
  } catch(e) {
    return e;
  }
}


function medalCount(name){
  knex.from('olympics_data').select('name', 'medal')
  .where({name: 'Almaz Ayana Eba'})
  // .where({medal: ['Gold','Silver','Bronze']})
  .then((rows) => {
    return rows.length
  })
}

// router.get('/medals', (req, res) => {
  //   medalCount('Almaz Ayana Eba')
  //   // knex.from('olympics_data').select('name', 'medal')
  //   // .where({name: 'Almaz Ayana Eba'})
  //   // // .where({medal: ['Gold','Silver','Bronze']})
  //   // .then((rows) => {
    //   //   console.log(rows.length)
    //   //     res.send(rows)
    //   // })
    //   .catch((err) => { console.log( err); throw err })
    //   .finally(() => {
      //       knex.destroy();
      //   });
      // })

//   knex('olympics_data')
//   .select('name')
//   .where({name: 'Luc Abalo'})
//   .where({medals: ['Gold','Silver','Bronze']})
//   .count('name')
//     res.send(olympics_data)
//
// })

  // ("select medal from olympics_data where medal != Null")
  //   .then(function(olympics_data){
//       res.send(olympics_data)
//     })
// })


// async function olympians() {
//   try{
//     return await database('nathanthomas')
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

module.exports = router;
