var express = require('express');
var router = express.Router();
var anm = require('../controllers/animeController')
var siswa = require('../controllers/siswaController')

router.get('/', function(req, res) {
  res.render('test/index', { title: 'Express' });
});

router.get('/db/:ide', siswa.select_by_attr)

router.get('/p', (req, res) => {
  res.render("test/form", {title : "Form"})
})

router.get('/p/data', siswa.select_all_data)
router.post('/p/data', siswa.select_by_attr)


module.exports = router;

