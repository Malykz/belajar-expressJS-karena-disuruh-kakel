var express = require('express');
var router = express.Router();
var komen = require('../controllers/komenController')
var authJWT = require('../middleware/authJWT')
var auth = authJWT.authJWT

router.get('/upload', auth, komen.upload_komen)
router.post('/upp', auth,komen.send_komen)
router.get('/komentar', auth,komen.get_komen)
router.get('/', (req, res) => {
  res.redirect('/komen/komentar')
})

module.exports = router;

