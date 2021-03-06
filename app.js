const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];

var indexRouter = require('./routes/index');
var olympiansRouter = require('./routes/api/v1/olympians');
var olympianStatsRouter = require('./routes/api/v1/olympian_stats');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/olympians', olympiansRouter);
app.use('/api/v1/olympian_stats', olympianStatsRouter);

// app.listen('3000');

module.exports = app;
