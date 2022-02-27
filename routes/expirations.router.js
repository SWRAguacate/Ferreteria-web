const express = require('express');
const ExpirationService = require('../services/expirations.service');
const service = new ExpirationService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createExpirationDto, updateExpirationDto, getIdExpirationDto } = require('../middlewares/dtos/expiration.dto');

// SELECT
router.get('/', (req, res)=> {
  const { size } = req.query;
    const expiracion = service.find(size || 10);
    res.json({
      'success': true,
      'message': 'Expiraciones encontradas',
      'Data': expiracion
    });
});

//SELECT
router.get('/:id', validatorHandler(getIdExpirationDto, 'params'), (req, res, next)=> {
    try {
      const { id } = req.params;
      const expiracion = service.findOne(id);
     res.json({
          'success': true,
          'message': 'Expiracion encontrada',
          'Data': expiracion
      });
    } catch (error) {
      next(error);
    }
});

//CREATE
router.post('/', validatorHandler(createExpirationDto, 'body'), (req, res, next)=> {
  try {
    const body = req.body;
    const expiracion = service.create(body);
    res.json({
        'success': true,
       'message': 'Expiracion creada',
       'Data': expiracion
    });
  } catch (error) {
    next(error);
  }
});

//UPDATE
router.patch('/:id', validatorHandler(getIdExpirationDto, 'params'), validatorHandler(updateExpirationDto, 'body'), (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {old, changed} = service.update(id, body);
      res.json({
          'success': true,
          'message': 'Expiracion actualizada',
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
router.delete('/:id', validatorHandler(getIdExpirationDto, 'params'), (req, res, next)=> {
    try {
      const { id } = req.params;
      const expiracion = service.delete(id);
      res.json({
          'success': true,
          'message': 'Expiracion eliminada',
          'Data': expiracion
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
