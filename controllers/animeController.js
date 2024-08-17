const connection = require("../models/mahasiswa")
import { Mahasiswa } from "../models/mahasiswa"
var exports = module.exports = {}

exports.get_anime_information = async (req, res) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${req.params.judul}&sfw`)
    const data = await response.json()
    res.send(data)
}

exports.get_data_from_database = (req, res) => {
    connection.query('SELECT * FROM calonkandidat ORDER BY id desc', (err, rows) => {
        if (err) {
          res.send(err)
        } else {
          res.send(rows)
        }      })
}

exports.test_database = (req, res) => {
  let murid = new Mahasiswa()
  res.send(murid.getAllData())
  
}

exports.insert_data = (req, res) => {
  const { name } = req.body;
  
  connection.query("INSERT INTO `calonkandidat` (`id`, `nama`, `kelas`, `NomorHp`, `accRules`, `date`) VALUES (NULL,'" + name + "', '2', '349857', '1', '');" , (err) => {
    if (err) {
      res.send(err)
    }
  })
}
exports.edit_data = (req, res) => {
  const { nama } = req.body;
  connection.query("UPDATE `calonkandidat` SET `nama` = '" + "jokwi" +"' WHERE `calonkandidat`. `" + "id" + "` = " + 229 + ";", 
    (err) => {if (err) {res.send(err)}}
  )
}  