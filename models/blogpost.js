'use strict';
const {
  Model
} = require('sequelize');
const randomkomen = require('./randomkomen');
module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  BlogPost.init({
    caption: DataTypes.STRING,
    img_url: DataTypes.STRING,
    author: DataTypes.STRING,
    comments: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    
    
  }, {
    sequelize,
    modelName: 'BlogPost',
  });

  return BlogPost;
};