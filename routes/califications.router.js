const express = require('express');
const CalificationService = require('../services/califications.service');
const service = new CalificationService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createCalificationDto, updateCalificationDto, getIdCalificationDto } = require('../middlewares/dtos/calification.dto');

// SELECT
router.get('/', (req, res)=> {
  const { size } = req.query;
    const calificacion = service.find(size || 10);
    res.json({
      'success': true,
      'message': 'Calificaciones encontradas',
      'Data': calificacion
    });
});

//SELECT
router.get('/:id', validatorHandler(getIdCalificationDto, 'params'), (req, res, next)=> {
    try {
      const { id } = req.params;
      const calificacion = service.findOne(id);
     res.json({
          'success': true,
          'message': 'Calificacion encontrada',
          'Data': calificacion
      });
    } catch (error) {
      next(error);
    }
});

//CREATE
router.post('/', validatorHandler(createCalificationDto, 'body'), (req, res, next)=> {
  try {
    const body = req.body;
    const calificacion = service.create(body);
    res.json({
        'success': true,
       'message': 'Calificacion creada',
       'Data': calificacion
    });
  } catch (error) {
    next(error);
  }
});

//UPDATE
router.patch('/:id', validatorHandler(getIdCalificationDto, 'params'), validatorHandler(updateCalificationDto, 'body'), (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {old, changed} = service.update(id, body);
      res.json({
          'success': true,
          'message': 'Calificacion actualizada',
          'Data': {
            "cambios": changed,
            "original": old
          }
      });
    } catch (error) {
      next(error);
    }
});

//DELETE
router.delete('/:id', validatorHandler(getIdCalificationDto, 'params'), (req, res, next)=> {
    try {
      const { id } = req.params;
      const calificacion = service.delete(id);
      res.json({
          'success': true,
          'message': 'Calificacion eliminada',
          'Data': calificacion
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
