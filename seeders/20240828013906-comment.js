'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('comments', [{
        comment: 'Jokowi kerjanya ngapain sih anjir',
        commenter: "rizky",
        blogpost_id: "op"
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('comments', null, {});
  }
};
