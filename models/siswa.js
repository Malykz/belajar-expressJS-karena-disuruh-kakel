const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database/mainDatabase')


class Siswa extends Model {}

Siswa.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Siswa', 
  },
);

console.log(Siswa === sequelize.models.Siswa);
module.exports = { Siswa }