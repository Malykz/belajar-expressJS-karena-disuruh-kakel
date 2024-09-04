'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Blogpost, {
        foreignKey: {
          name: "author_id",
          type: DataTypes.UUID,
          allowNull: false
        }
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    joinDate: DataTypes.DATE,
    profilePic: DataTypes.STRING,
    age: DataTypes.INTEGER,
    authKey: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};