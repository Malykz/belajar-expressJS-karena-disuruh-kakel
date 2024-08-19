const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database/mainDatabase')

class Mahasiswa extends Model {}

// Schema Mahasiswa
Mahasiswa.init(
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
    modelName: 'Mahasiswa'
  }
)

console.log(Mahasiswa === sequelize.models.Mahasiswa)