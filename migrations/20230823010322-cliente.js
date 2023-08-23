'use strict';

/** @type {import('sequelize-cli').Migration} */

const cliente = require('../models').cliente;

module.exports = {
  async up (queryInterface, Sequelize) {
    await cliente.sync()

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cliente');
  }
};
