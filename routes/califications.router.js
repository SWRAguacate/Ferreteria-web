const express = require('express');
const CalificationService = require('../services/califications.service');
const service = new CalificationService();
const router = express.Router();

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
router.get('/:id', (req, res, next)=> {
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
router.post('/', (req, res, next)=> {
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
router.patch('/:id', (req, res, next)=> {
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
router.delete('/:id', (req, res, next)=> {
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
