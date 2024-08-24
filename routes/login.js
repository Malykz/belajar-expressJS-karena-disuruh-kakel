var express = require('express');
var router = express.Router();
var komen = require('../controllers/komenController')
require('dotenv').config()


const jwt = require('jsonwebtoken')
const key = process.env.JWT_KEY.toString()

router.get('/upload', (req, res, next) => {
    res.render('login/index', {
        title : "wahyu",
        base_url : "/login/post"
    })
    next()
})

router.post('/post', (req, res, next) => {
    const { name, password } = req.body
    let token = jwt.sign({
        name: name,
        password: password
    }, key, {expiresIn : '1h'})

    res.cookie("login_token", token, {
        httpOnly: true
    })
    res.redirect('/komen/upload')
    next()
})

router.get('/debuganjing', )

module.exports = router