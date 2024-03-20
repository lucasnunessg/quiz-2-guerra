'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('User', [
      {
        fullName: 'Douglas Bacelar',
        email: 'douglasbacelar@gmail.com',
        contact: '21 9 8223 8741'
      },
      {
        fullName: 'Julia Trindade Modernel',
        email: 'juliatmodernel@gmail.com',
        contact: '55 123908129034'
      }
    ],{
      timestamps:true,
    })
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('User', null, {})
  }
};
