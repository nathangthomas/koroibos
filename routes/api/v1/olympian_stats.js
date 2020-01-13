var express = require('express');
var router = express.Router();
const Olympian = require("../../../models/olympian");
const knex = require('../../../db/knex');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);
