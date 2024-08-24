'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blogpost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      blogpost.hasMany(models.comment, {
        foreignKey: {
          name: "blogpost_id",
          type: DataTypes.UUID,
          allowNull: false
        },
        onDelete: 'cascade',
      })
    }
  }
  blogpost.init({
    caption: DataTypes.TEXT,
    author: DataTypes.STRING,
    img_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'blogpost',
  });
  return blogpost;
};