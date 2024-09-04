'use strict';

var uniqid = require('uniqid')

/** @type {import('sequelize-cli').Migration} */
const fields = [{
  id : "testk",
  author_id : "test",
  imgUrl : "https://awsimages.detik.net.id/community/media/visual/2021/05/28/boeings-new-737-max-10_169.jpeg?w=1200",
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
