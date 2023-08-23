'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('genero', [
      {
        id_genero: 1,
        nombre: "Ficción",
        descripcion: "Simula, inventa o crea una realidad",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genero', null, {});
  }
};
