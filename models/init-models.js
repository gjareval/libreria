var DataTypes = require("sequelize").DataTypes;
var _autor = require("./autor");
var _cliente = require("./cliente");
var _genero = require("./genero");
var _libro = require("./libro");
var _prestamo = require("./prestamo");

function initModels(sequelize) {
  var autor = _autor(sequelize, DataTypes);
  var cliente = _cliente(sequelize, DataTypes);
  var genero = _genero(sequelize, DataTypes);
  var libro = _libro(sequelize, DataTypes);
  var prestamo = _prestamo(sequelize, DataTypes);

  libro.belongsTo(autor, { as: "id_autor_autor", foreignKey: "id_autor"});
  autor.hasMany(libro, { as: "libros", foreignKey: "id_autor"});
  prestamo.belongsTo(cliente, { as: "id_cliente_cliente", foreignKey: "id_cliente"});
  cliente.hasMany(prestamo, { as: "prestamos", foreignKey: "id_cliente"});
  libro.belongsTo(genero, { as: "id_genero_genero", foreignKey: "id_genero"});
  genero.hasMany(libro, { as: "libros", foreignKey: "id_genero"});
  prestamo.belongsTo(libro, { as: "id_libro_libro", foreignKey: "id_libro"});
  libro.hasMany(prestamo, { as: "prestamos", foreignKey: "id_libro"});

  return {
    autor,
    cliente,
    genero,
    libro,
    prestamo,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
