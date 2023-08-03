var express = require('express');
var router = express.Router();

const Libro = require('../models').libro;

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/findAll/json', function(req, res, next) {

  /* METODO ESTATICO findAll */
  Libro.findAll({
    attributes: { exclude: ["updatedAt", "createdAt"] },
  })
  .then(resultado => {
    res.json(resultado);
  })
  .catch(error => res.status(400).send(error))
});

module.exports = router;  