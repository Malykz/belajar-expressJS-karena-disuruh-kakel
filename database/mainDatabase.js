const { Sequelize } = require('sequelize')
// Dont forget to create the directory
const config = require('../config/config.json').development 

const username = config.username
const password = config.password
const database = config.database

const sequelize = new Sequelize(database, username, password, {
    host: config.host,
    dialect: config.dialect
  });
  
module.exports = { sequelize }