const { Sequelize } = require('sequelize')
require('dotenv').config()

const username = process.env.DB_USER.toString()
const password = process.env.DB_PASSWORD.toString()
// const database = process.env.DB_DATABASE.toString()
const database = "test1"

const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'mysql'
  });
  
module.exports = { sequelize }