'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogposts', [{
      id: "op",
      caption: 'Kerja hari ini lancar banget',
      author: "anies baswedan",
      img_url: "img.png"
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blogposts', null, {});
  }
};
