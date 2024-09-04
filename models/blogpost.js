
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blogpost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Blogpost.hasMany(models.Comment, {
        foreignKey: {
          name: "blogpost_id",
          type: DataTypes.UUID,
          allowNull: false
        },
        onDelete: 'cascade',
      })

      Blogpost.belongsTo(models.User, {
        foreignKey: {
          name: "author_id"
        }
      })
    }
  }
  Blogpost.init({
    caption: DataTypes.TEXT,
    imgUrl: DataTypes.STRING,
    author_id : DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Blogpost',
  });
  return Blogpost;
};