var express = require('express');
var router = express.Router();
var komen = require('../controllers/komenController')

router.get('/', function(req, res) {
  res.render('test/index', { title: 'Express' });
});

module.exports = router

