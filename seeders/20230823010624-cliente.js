'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cliente', [
      {
        id_cliente: 1,
        nombre: "Pepito",
        apellido: "Saenz",
        telefono: "0912345678",
        direccion: "Socio Vivienda 2",
        email: "elbrayan69@espol.edu.ec",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cliente', null, {});
  }
};
