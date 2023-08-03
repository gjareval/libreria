const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('genero', {
    id_genero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'genero',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_genero" },
        ]
      },
      {
        name: "id_genero_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_genero" },
        ]
      },
    ]
  });
};
