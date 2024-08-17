const mysql = require('mysql')
const { insert_data } = require('../controllers/animeController')
require('dotenv').config()

let connection = mysql.createConnection({
    host: process.env.DB_USERNAME.toString(),
    user: process.env.DB_USER.toString(),
    password: process.env.DB_PASSWORD.toString(),
    database: process.env.DB_DATABASE.toString()
})

connection.connect((error) => {
    if(!error) {
        console.log(error)
    } else {
        console.log("Connected")
    }
})

module.exports = connection; 