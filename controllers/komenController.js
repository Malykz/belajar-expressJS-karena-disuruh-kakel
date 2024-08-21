var exports = module.exports = {}
const models = require("../models")

// GET
exports.upload_komen = async (req, res, next) => {
    res.render("form/uploadkomen", {
        title: "Pernah kah kau merasa?",
    })
    next()
}

exports.get_komen = async (req, res, next) => {
    res.render("form/allkomen", ({
        title: "CITO CITO II SONI",
        data: await models.randomKomen.findAll()
    }))
}

// POST
exports.send_komen = async (req, res, next) => {
    const { name, komen } = req.body;
    models.randomKomen.create({
        name: name,
        pesan: komen,
    })
    res.redirect('/komen/komentar')
    next()
}
