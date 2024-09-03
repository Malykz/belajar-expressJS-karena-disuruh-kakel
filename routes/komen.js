var express = require('express');
var router = express.Router();
var komen = require('../controllers/komenController')
var authJWT = require('../middleware/authJWT')
var auth = authJWT.authJWT
var models = require('../models/')

router.get('/', auth, komen.upload_komen)
router.get('/komentar', auth, komen.get_komen)
router.post('/post', auth, komen.send_komen)

module.exports = router;

