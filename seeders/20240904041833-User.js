'use strict';

var uniqid = require('uniqid')

const fields = [{
  id : "test",
  name : "Jokowi",
  profilePic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJdvMCLnoRNJS71p04s2ahHfBmzcOTIwtQg&shttps://www.kemhan.go.id/wp-content/uploads/2019/10/tmp_6644-20191028_142938-770056681.jpg",
  Age : 12,
  AuthKey : uniqid()
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
