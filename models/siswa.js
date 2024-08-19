const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database/mainDatabase')


class Siswa extends Model {}

// Schema Siswa
Siswa.init(
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
    modelName: 'Siswa', 
  },
);

if (Siswa === sequelize.models.Siswa) {
  console.log("Models Siswa Ready")
}

module.exports = { Siswa }