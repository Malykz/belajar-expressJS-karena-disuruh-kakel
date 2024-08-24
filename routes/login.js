var express = require('express');
var router = express.Router();
var login = require('../controllers/loginController')
require('dotenv').config()

router.get('/', login.login)

router.post('/post', login.create_login)


module.exports = router