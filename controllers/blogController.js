var exports = module.exports = {}
var models = require('../models')

exports.trending = async (req, res, next) => {
    res.render("home/blogs", {
        blogs : await models.Blogpost.findAll({
            include : models.User
        }),
        title : "CIhuy",
    })
}