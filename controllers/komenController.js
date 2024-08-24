var exports = module.exports = {}
const models = require("../models")
require('dotenv').config()
// GET
exports.upload_komen = async (req, res, next) => {
    res.render("form/uploadkomen", {
        title: "Pernah kah kau merasa?",
        base_url: "/komen/upp",
        name: req.user.name
    })
    next()
}

exports.get_komen = async (req, res, next) => {
    res.render("form/allkomen", ({
        title: "Daftar Komen",
        data: await models.randomKomen.findAll()
    }))
}

// POST
exports.send_komen = async (req, res, next) => {
    const { name, komen } = req.body;
    let nama_pengirim = name + "@" + req.user.name
    models.randomKomen.create({
        name: nama_pengirim,
        pesan: komen,
    })
    res.redirect('/komen/komentar')
    next()
}
