'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('genero', [
      {
        id_genero: 1,
        nombre: "Romance",
        descripcion: "Género romance",
      },

      {
        id_genero: 2,
        nombre: "Suspenso",
        descripcion: "Género suspenso",
      },

      {
        id_genero: 3,
        nombre: "Comedia",
        descripcion: "Género comedia",
      },

      {
        id_genero: 4,
        nombre: "Misterio",
        descripcion: "Género misterio",
      },

      {
        id_genero: 5,
        nombre: "Fantasía",
        descripcion: "Género fantasía",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genero', null, {});
  }
};
