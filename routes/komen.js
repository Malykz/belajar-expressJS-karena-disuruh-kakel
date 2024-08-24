var express = require('express');
var router = express.Router();
var komen = require('../controllers/komenController')
var authJWT = require('../middleware/authJWT')

router.get('/upload', authJWT.authJWT, komen.upload_komen)
router.post('/upp', komen.send_komen)
router.get('/komentar', komen.get_komen)
router.get('/', (req, res) => {
  res.redirect('/komen/komentar')
})

module.exports = router;

