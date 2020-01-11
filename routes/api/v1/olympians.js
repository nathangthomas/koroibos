var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('Testing testing one two three... ')
});

module.exports = router;
