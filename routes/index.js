var express = require('express');
var router = express.Router();
var komen = require('../controllers/komenController')

router.get('/', function(req, res) {
  res.render('test/index', { title: 'Express' });
});

router.get('/komen/upload', komen.get_komen)
router.post('/komen/upp', komen.send_komen)
router.get('/komen/komentar', komen.get_komen)


module.exports = router;

