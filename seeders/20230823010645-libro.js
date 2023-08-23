'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('libro', [
      {
        id_libro: 1,
        titulo: "El Retrato de Dorian Gray",
        isbn: "9787594213589",
        anio_publicacion: 1890,
        id_genero: 1,
        id_autor: 1,
    
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('libro', null, {});
  }
};
