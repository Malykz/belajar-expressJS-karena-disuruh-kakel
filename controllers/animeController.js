const connection = require("../models/mahasiswa")

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
        }
      })
}