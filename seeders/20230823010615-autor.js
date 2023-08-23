'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('autor', [
      {
        id_autor: 1,
        nombre: "Oscar",
        apellido: "Wilde",
        nacionalidad: "Irlandés",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('autor', null, {});
  }
};
