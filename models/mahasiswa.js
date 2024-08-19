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

"npx sequelize-cli model:generate --name Teacher --attributes name:string,jabatan:string,email:string"