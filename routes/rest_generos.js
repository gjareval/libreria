var express = require('express');
var router = express.Router();

const Genero = require('../models').genero;

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* SOLICITUD GET PARA TODOS LOS REGISTROS */
router.get('/findAll/json', function(req, res, next) {

  /* METODO ESTATICO findAll */
  Genero.findAll({
    attributes: { exclude: ["updatedAt", "createdAt"] },
  })
  .then(resultado => {
    res.json(resultado);
  })
  .catch(error => res.status(400).send(error))
});

/* SOLICITUDES GET POR IDENTIFICADOR */ 
router.get('/findById/:id/json', function(req, res, next) {  

  let id = req.params.id;

  Genero.findByPk(id)
      .then(instancia => {
        if(instancia) {
          res.status(200).json(instancia);
        } else {
          res.status(404).json({error: "No existe registro con el identificador "+id})
        }
      })
      .catch(error => res.status(400).send(error))
});

/* SOLICITUD POST PARA CREAR REGISTRO EN TABLA */ 
router.post('/save', function(req, res, next) {  

  Genero.create(req.body)
    .then(instancia => {
      res.status(201).json(instancia);
    })
    .catch(error => {
      res.status(500).json({ error: 'Error al crear el registro' });
    });

});

/* SOLICITUD PUT PARA ACTUALIZAR REGISTROS */
router.put('/update/:id', function(req, res, next) {  

  let id = req.params.id;

  Generoro.findByPk(id)
    .then(instancia => {
      if(instancia) {

        instancia.update(req.body)
          .then(instanciaActualizada => {
            res.status(201).json(instanciaActualizada);
          })
          .catch(error => {
            res.status(500).json({ error: 'Error al actualizar el registro' });
          });

      } else {
        res.status(404).json({error: "No existe registro con el identificador "+id})
      }
    })
    .catch(error => res.status(400).send(error))

});

/* SOLICITUD DELETE PARA ELIMINAR UN REGISTRO */
router.delete('/delete/:id', function(req, res, next) {  

  let id = req.params.id;

  Genero.findByPk(id)
    .then(instancia => {
      if(instancia) {

        instancia.destroy()
          .then(() => {
            res.status(204).json({ mensaje: 'Registro eliminado'});
          })
          .catch(error => {
            res.status(500).json({ error: 'Error al actualizar el registro' });
          });

      } else {
        res.status(404).json({error: "No existe registro con el identificador "+id})
      }
    })
    .catch(error => res.status(400).send(error))

});

module.exports = router;  