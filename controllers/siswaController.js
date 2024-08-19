const model = require('../models')
var exports = module.exports = {}
const { Op } = require('sequelize');

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
    res.render("test/form", {title : "data", data: siswa})
}

exports.select_by_attr = async (req, res, next) => {
    const { name } = req.body;
    const siswa = await model.Mahasiswa.findAll({
        where: {
            fullName: {
                [Op.substring]: name,
            }
        }
    })
    res.render("test/form", {title : "bebas", data : siswa})
    next()

}