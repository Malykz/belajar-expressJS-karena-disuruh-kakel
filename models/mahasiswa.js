'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {}
  Mahasiswa.init({
    fullName: DataTypes.STRING,
    jurusan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mahasiswa',
  });
  return Mahasiswa;
};

