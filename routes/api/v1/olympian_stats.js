var express = require('express');
var router = express.Router();
const Olympian = require("../../../models/olympian");
const knex = require('../../../db/knex');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);


router.get('/', async function (req, res) {
 await olympianStats()
  .then((data) => {
     res.status(200).json(data);
   })
   .catch((error) => {
     return res.status(500).json({ error });
   });
});


// private methods below this point eventually to be moved to the utils file

async function olympianStats() {
  const exposureData = {}
    await totalNumOfOlympians()
      .then(totalNum => {
        exposureData['"total_competing_olympians"'] = totalNum
      })
    exposureData['"average_weight"'] = {}
    exposureData['"average_weight"']['"unit"'] = 'kg'
    await averageMaleWeight()
      .then(avgM => {
        console.log(avgM)
        exposureData['"average_weight"']['"male_olympians"'] = avgM
      })
    await averageFemaleWeight()
      .then(avgF => {
        console.log(avgF)
        exposureData['"average_weight"']['"female_olympians"'] = avgF
      })
    await averageAge()
      .then(age => {
        exposureData['"average_age"'] = age
      })
    return exposureData
}


async function totalNumOfOlympians() {
  const allOlympians = await database('olympics_data').select('name').groupBy('name')
  return allOlympians.length
}

async function averageMaleWeight() {
  let totalWeight = 0
  var men = await database('olympics_data').where('sex', '=', 'M').whereNotNull('weight').select('weight').groupBy('weight')
  await Promise.all(men.map(async (m) => {
    var weight = parseInt(m.weight)
    totalWeight += weight
  }))
  var numOfMen = men.length
  var averageWeight = totalWeight/numOfMen
  return parseFloat(averageWeight.toFixed(1));

}

async function averageFemaleWeight() {
  let totalWeight = 0
  var women = await database('olympics_data').where('sex', '=', 'F').whereNotNull('weight').select('weight').groupBy('weight')
  await Promise.all(women.map(async (f) => {
    var weight = parseInt(f.weight)
    totalWeight += weight
  }))
  var numOfWomen = women.length
  var averageWeight = (totalWeight/numOfWomen)
  return parseFloat(averageWeight.toFixed(1));
}

async function averageAge() {
  var totalAge = 0
  const allOlympians = await database('olympics_data').select('age').groupBy('age')
  await Promise.all(allOlympians.map(async (olympian) => {
    var age = parseInt(olympian.age)
    totalAge += age
  }))
var numOfOlympians = allOlympians.length
var averageAge = (totalAge/numOfOlympians)
return parseFloat(averageAge.toFixed(1));
}



module.exports = router;
