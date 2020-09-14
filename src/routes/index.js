var express = require('express');
var router = express.Router();
const model = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
  const io = req.app.get('io');
  io.emit('----',{})
  res.render('index', { title: 'Express' });
});

module.exports = router;
