'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('libro', [
      {
        id_libro: 1,
        titulo: "Orgullo y prejuicio",
        isbn: "123412341234",
        anio_publicacion: 1813,
        id_genero: 1,
        id_autor: 1,
    
      },

      {
        id_libro: 2,
        titulo: "El código Da Vinci",
        isbn: "234523452345",
        anio_publicacion: 2003,
        id_genero: 2,
        id_autor: 2,
    
      },

      {
        id_libro: 3,
        titulo: "El diario de Bridget Jones",
        isbn: "345634563456",
        anio_publicacion: 1996,
        id_genero: 3,
        id_autor: 3,
    
      },

      {
        id_libro: 4,
        titulo: "El visitante",
        isbn: "456745674567",
        anio_publicacion: 2018,
        id_genero: 4,
        id_autor: 4,
    
      },

      {
        id_libro: 5,
        titulo: "Ciudad de hueso",
        isbn: "567856785678",
        anio_publicacion: 2007,
        id_genero: 5,
        id_autor: 5,
    
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('libro', null, {});
  }
};
