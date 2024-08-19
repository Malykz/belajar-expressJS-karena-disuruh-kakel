const model = require('../models')
var exports = module.exports = {}

// Post
exports.insert_data = async (req, res, next) => {
    const { firstName, lastName } = req.body;
    const siswa = await model.Mahasiswa.create({
        fullName: firstName,
        jurusan: lastName
    })
    console.log(siswa.createdAt)
    next()
}

// GET 
exports.select_all_data = async (req, res) => {
    const siswa = await model.Mahasiswa.findAll()
    let data_siswa = JSON.stringify(siswa)
    res.render("test/form", {title : "data", data: siswa})
}

exports.select_by_attr = async (req, res, next) => {
    const { name } = req.body;
    const siswa = await model.Mahasiswa.findAll({
        where: {
            fullName: name
        }
    })
    res.render("test/form", {title : "bebas", data : siswa})
    next()

}