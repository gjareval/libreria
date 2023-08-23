'use strict';

/** @type {import('sequelize-cli').Migration} */

const genero = require('../models').genero;

module.exports = {
  async up (queryInterface, Sequelize) {
    await genero.sync()
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('genero');
  }
};
