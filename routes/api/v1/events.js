
var express = require('express');
var router = express.Router();
const Olympian = require("../../../models/olympian");
// const olympiansHelpers = require("../../../utils/olympiansHelpers")
// const allOlympians = olympiansHelpers.allOlympians;
const knex = require('../../../db/knex');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

router.get('/', async function(req, res) {

});

// private methods below this point eventually to be moved to the utils file



module.exports = router;
