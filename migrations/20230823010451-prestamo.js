'use strict';

/** @type {import('sequelize-cli').Migration} */

const prestamo = require('../models').prestamo;

module.exports = {
  async up (queryInterface, Sequelize) {
    await prestamo.sync()
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('prestamo');
  }
};
