const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('libro', {
    id_libro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    anio_publicacion: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    id_genero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'genero',
        key: 'id_genero'
      }
    },
    id_autor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'autor',
        key: 'id_autor'
      }
    }
  }, {
    sequelize,
    tableName: 'libro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_libro" },
        ]
      },
      {
        name: "id_libro_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_libro" },
        ]
      },
      {
        name: "fk_Libro_Genero1_idx",
        using: "BTREE",
        fields: [
          { name: "id_genero" },
        ]
      },
      {
        name: "fk_Libro_Autor1_idx",
        using: "BTREE",
        fields: [
          { name: "id_autor" },
        ]
      },
    ]
  });
};
