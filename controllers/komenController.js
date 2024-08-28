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
    let data = await models.blogpost.findAll({
        include: models.comment
    })


    res.render("form/allkomen", {
        title : "wahyu",
        data : data,
    })
}
// POST
exports.send_komen = async (req, res, next) => {
    const { name, komen } = req.body;
    let nama_pengirim = name 
    const send = async () => {
        const x = await models.comment.create({
            name: nama_pengirim,
            pesan: komen,
    })}
    console.log(send)
    res.redirect('/komen/komentar')
    next()
}

