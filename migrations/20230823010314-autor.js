'use strict';

/** @type {import('sequelize-cli').Migration} */

const autor = require('../models').autor;

module.exports = {
  async up (queryInterface, Sequelize) {
    await autor.sync()
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('autor');
  }
};
