const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prestamo', {
    id_prestamo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cliente',
        key: 'id_cliente'
      }
    },
    id_libro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'libro',
        key: 'id_libro'
      }
    },
    f_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    f_fin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('DEVUELTO','EN PRESTAMO'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'prestamo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_prestamo" },
        ]
      },
      {
        name: "id_prestamo_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_prestamo" },
        ]
      },
      {
        name: "fk_Prestamo_Cliente_idx",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
      {
        name: "fk_Prestamo_Libro1_idx",
        using: "BTREE",
        fields: [
          { name: "id_libro" },
        ]
      },
    ]
  });
};
