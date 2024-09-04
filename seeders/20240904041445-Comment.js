'use strict';

var uniqid = require('uniqid')

const fields = {
  id : uniqid("comment-"),
  comment : "Nagebray",
  commenter : "Jokowi",
  blogpost_id : "testk",
  createdAt : Date.now(),
  updatedAt : Date.now()
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Comments', [fields] , {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Comments', null, {});
  }
};
