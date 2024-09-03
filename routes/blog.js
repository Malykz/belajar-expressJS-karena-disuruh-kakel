var express = require('express');
var router = express.Router();
var blog = require('../controllers/blogController')

router.get('/', blog.trending)

module.exports = router