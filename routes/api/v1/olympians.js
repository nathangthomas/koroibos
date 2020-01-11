var express = require('express');
var router = express.Router();
const Olympian = require("../../../models/olympian");

//database connection
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);


router.get('/', (req, res) => {
  olympians()
  .then olympians => {
    if (olympians.length){
      res.status(200).send(olympians)
    } else {
      res.status(404).json({
        error: 'Not found.'
      })
    }
  }
  .catch(error => res.status(500).send({ error }))
});


async function olympians() {
  try{
    return await database('nathanthomas')
      .conlmn(['name', 'team', 'age', 'sport'])
  } catch(e) {
    return e;
  }
}

module.exports = router;
