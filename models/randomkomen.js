'use strict';
const {
  Model
} = require('sequelize');
const blogpost = require('./blogpost');
module.exports = (sequelize, DataTypes) => {
  class randomKomen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  randomKomen.init({
    name: DataTypes.STRING,
    pesan: DataTypes.STRING,
    BlogId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'randomKomen',
  });
  return randomKomen;

};