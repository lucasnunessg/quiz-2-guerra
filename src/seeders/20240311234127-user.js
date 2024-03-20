'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('User', [
  {
    fullName: 'Lucas Pacheco Nunes',
    email: 'lucasnunespacheco@gmail.com',
    contact: '55 9 99909852'
  }
], {
  timestamps: true
})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {})
  }
};
