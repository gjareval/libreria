'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('autor', [
      {
        id_autor: 1,
        nombre: "Jane",
        apellido: "Austen",
        nacionalidad: "Británica",
      },

      {
        id_autor: 2,
        nombre: "Dan",
        apellido: "Brown",
        nacionalidad: "Estadounidense",
      },

      {
        id_autor: 3,
        nombre: "Helen",
        apellido: "Fielding",
        nacionalidad: "Británica",
      },

      {
        id_autor: 4,
        nombre: "Stephen",
        apellido: "King",
        nacionalidad: "Estadounidense",
      },

      {
        id_autor: 5,
        nombre: "Cassandra",
        apellido: "Clare",
        nacionalidad: "Estadounidense",
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('autor', null, {});
  }
};
