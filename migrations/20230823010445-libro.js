'use strict';

/** @type {import('sequelize-cli').Migration} */

const libro = require('../models').libro;

module.exports = {
  async up (queryInterface, Sequelize) {
    await libro.sync()
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('libro');
  }
};
