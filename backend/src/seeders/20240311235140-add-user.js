'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        full_name: 'Douglas Bacelar',
        email: 'douglasbacelar@gmail.com',
        contact: '21 9 8223 8741'
      },
      {
        full_name: 'Julia Trindade Modernel',
        email: 'juliatmodernel@gmail.com',
        contact: '55 123908129034'
      }
    ],{
      timestamps:true,
      underscored: true,
    }),
    {
      full_name: 'Eli Fernando Marques Nunes',
      email: 'eli@gmail.com',
      contact: '59058958',
    }
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Users', null, {})
  }
};
