const connection = require("../models/mahasiswa")
var exports = module.exports = {}

exports.get_anime_information = async (req, res) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${req.params.judul}&sfw`)
    const data = await response.json()
    res.send(data)
}


