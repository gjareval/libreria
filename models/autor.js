const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autor', {
    id_autor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nacionalidad: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'autor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_autor" },
        ]
      },
      {
        name: "idAutor_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_autor" },
        ]
      },
    ]
  });
};
