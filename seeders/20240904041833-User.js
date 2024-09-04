'use strict';

var uniqid = require('uniqid')

const fields = [{
  id : uniqid("user-"),
  userName : "Jokowi",
  userAge : 12,
  userAuthKey : uniqid()
}]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Users', fields, {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
