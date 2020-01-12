
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
      res.status(200).send({olympians: olympians})
    } else {
      res.status(404).json({
        error: 'Not found.'
      })
    }
  })
  .catch(error => res.status(500).send({ error }))
});

async function allOlympians() {
    const olympians = await database('olympics_data').select('name', 'age', 'team', 'sport').groupBy('name', 'age', 'team', 'sport')
    await Promise.all(olympians.map(async (olympian) => {
      const athlete = await database('olympics_data').whereNotNull('medal').whereNot('medal', 'NULL').where('name', olympian.name).select('name').groupBy('name').count('name')

      if (athlete.length == 0) {
         olympian['total_medals_won'] = "0"
      }
      if (athlete.length != 0) {
         olympian['total_medals_won'] = athlete[0].count
      }
    }));
    var data = olympians
    return data
  }

module.exports = router;
