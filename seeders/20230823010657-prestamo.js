'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('prestamo', [
      {
        id_prestamo: 1,
        id_cliente: 1,
        id_libro: 1,
        f_inicio: "2023-8-1",
        f_fin: "2023-8-7",
        estado: "EN PRESTAMO",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('prestamo', null, {});
  }
};
