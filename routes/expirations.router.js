const express = require('express');
const ExpirationService = require('../services/expirations.service');
const service = new ExpirationService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createExpirationDto, updateExpirationDto, getIdExpirationDto } = require('../middlewares/dtos/expiration.dto');

// SELECT
router.get('/', async (req, res, next)=> {
  try{
  const { size } = req.query;
    const expiracion = await service.findDB(size || 1000);
    res.json({
      'success': true,
      'message': 'Expiraciones encontradas',
      'Data': expiracion
    });
  } catch (error) {
    next(error);
  }
});

//SELECT
router.get('/:id', validatorHandler(getIdExpirationDto, 'params'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const expiracion = await service.findOneDB(id);
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
router.post('/', validatorHandler(createExpirationDto, 'body'), async (req, res, next)=> {
  try {
    const body = req.body;
    const expiracion = await service.createDB(body);
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
router.patch('/:id', validatorHandler(getIdExpirationDto, 'params'), validatorHandler(updateExpirationDto, 'body'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {original, actualizado} = await service.updateDB(id, body);
      res.json({
          'success': true,
          'message': 'Expiracion actualizada',
          'Data': {
            "cambios": actualizado,
            "original": original
          }
      });
    } catch (error) {
      next(error);
    }
});

//DELETE
router.delete('/:id', validatorHandler(getIdExpirationDto, 'params'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const expiracion = await service.deleteDB(id);
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
