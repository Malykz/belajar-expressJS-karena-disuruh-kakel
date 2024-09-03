var exports = module.exports = {}
var models = require('../models')

exports.trending = async (req, res, next) => {
    res.render("home/blogs", {
        blogs : await models.blogpost.findAll(),
        title : "CIhuy"
    })
}