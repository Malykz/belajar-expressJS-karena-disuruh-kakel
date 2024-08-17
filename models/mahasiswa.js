const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'luthfi',
    password: 'mkqnnimadluthf!277',
    database: 'bodrek'
})

connection.connect((error) => {
    if(!error) {
        console.log(error)
    } else {
        console.log("Connected")
    }
})

module.exports = connection; 