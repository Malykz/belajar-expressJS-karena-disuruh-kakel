const { Siswa } = require("../models/siswa")
var exports = module.exports = {}

// Post
exports.insert_data = async (req, res, next) => {
    const { firstName, lastName } = req.body;
    const siswa = await Siswa.create({
        firstName: firstName,
        lastName: lastName
    })
    // res.send(siswa)
    console.log(siswa.createdAt)
    next()
}