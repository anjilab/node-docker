var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Docker101 with Express', data: 'Learning Docker with Express' });
});

module.exports = router;
