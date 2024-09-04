'use strict';

var uniqid = require('uniqid')

/** @type {import('sequelize-cli').Migration} */
const fields = [{
  id : uniqid("post-"),
  author_id : 12,
  imgUrl : uniqid(),
  caption : "Ini adalah Kepsen",
  createdAt : Date.now(),
  updatedAt : Date.now()

}]

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Blogposts', fields, {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Blogposts', null, {});
  }
};
