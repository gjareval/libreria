const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    id_cliente: {
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
    telefono: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
      {
        name: "id_cliente_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
};
