'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teachers', [
      {
        name: "Rohajon",
        jabatan: "Ketua Devaccto",
        email: "kaplingtumbal@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teachers', null, {})
  }
};
