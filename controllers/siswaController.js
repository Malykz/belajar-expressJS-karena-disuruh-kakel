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

exports.select_all_data = async (req, res) => {
    const siswa = await model.Mahasiswa.findAll()
    res.json(siswa)
}

exports.select_by_attr = async (req, res) => {
    const siswa = await model.Mahasiswa.findAll({
        where: {
            id: req.params.ide
        }
    })
    res.json(siswa)
}