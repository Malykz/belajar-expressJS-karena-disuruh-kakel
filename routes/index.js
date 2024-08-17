var express = require('express');
var router = express.Router();
var anm = require('../controllers/animeController')
var connection = require('../models/mahasiswa')

router.get('/', function(req, res) {
  res.render('test/index', { title: 'Express' });
});

router.get('/cari/:judul', anm.get_anime_information)
router.get('/jokowi', anm.alihkan)
router.get('/database', anm.get_data_from_database)




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
