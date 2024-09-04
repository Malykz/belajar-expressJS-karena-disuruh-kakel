'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Blogpost, {
        foreignKey : {
          name : "blogpost_id"
        }
      })
    }
  }
  Comment.init({
    comment: DataTypes.TEXT,
    commenter: DataTypes.STRING,
    blogpost_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};