var exports = module.exports = {}
require('dotenv').config()
const key = process.env.JWT_KEY.toString()
const jwt = require('jsonwebtoken')

// GET
exports.login = (req, res, next) => {
    res.render('login/index', {
        title : "Log in to web",
        send_post : "/login/post"
    })
    next()
}
// POST
exports.create_login = (req, res, next) => {
    const {name, password} = req.body;
    let token = jwt.sign({
        name: name,
        password: password
    }, key, {expiresIn : '1d'})

    res.cookie("login_token", token, {
        httpOnly: true
    })

    res.redirect('/komen/upload') 
    next()
}
