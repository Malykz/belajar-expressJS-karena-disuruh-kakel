var express = require('express');
var router = express.Router();
var anm = require('../controllers/animeController')
var siswa = require('../controllers/siswaController')

router.get('/', function(req, res) {
  res.render('test/index', { title: 'Express' });
});




router.get('/db/:ide', siswa.select_by_attr)

router.route('/p')
  .get((req, res) => res.render("test/form", {title : "None"}))
  .post((req, res, next) => {
    res.render("test/form", {title : "Nothing"})
    next()
  }, siswa.insert_data) 



router.get('/tugas', (req, res) => {
  res.render("tugas", {title : "Bangsa Indonesia"})
})
router.get('/home', (req, res) => {
  res.render("tugas", {title : "Home"})
})
router.get('/saya', (req, res) => {
  res.render("tugas", {title : "Saya"})
})
router.get('/kelas', (req, res) => {
  res.render("tugas", {title : "Kelas"})
})

module.exports = router;

