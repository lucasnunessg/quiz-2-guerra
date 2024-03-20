'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Users', [
  {
    full_name: 'Lucas Pacheco Nunes',
    email: 'lucasnunespacheco@gmail.com',
    contact: '55 9 99909852'
  }
], {
  timestamps: true,
})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
