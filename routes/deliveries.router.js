const express = require('express');
const DeliverieService = require('../services/deliveries.service');
const service = new DeliverieService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createDeliverDto, updateDeliverDto, getIdDeliverDto } = require('../middlewares/dtos/deliver.dto');

// SELECT
router.get('/', (req, res)=> {
  const { size } = req.query;
    const entrega = service.find(size || 10);
    res.json({
      'success': true,
      'message': 'Entregas encontradas',
      'Data': entrega
    });
});

//SELECT
router.get('/:id', validatorHandler(getIdDeliverDto, 'params'), (req, res, next)=> {
    try {
      const { id } = req.params;
      const entrega = service.findOne(id);
     res.json({
          'success': true,
          'message': 'Entrega encontrada',
          'Data': entrega
      });
    } catch (error) {
      next(error);
    }
});

//CREATE
router.post('/', validatorHandler(createDeliverDto, 'body'), (req, res, next)=> {
  try {
    const body = req.body;
    const entrega = service.create(body);
    res.json({
        'success': true,
       'message': 'Entrega creada',
       'Data': entrega
    });
  } catch (error) {
    next(error);
  }
});

//UPDATE
router.patch('/:id', validatorHandler(getIdDeliverDto, 'params'), validatorHandler(updateDeliverDto, 'body'), (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {old, changed} = service.update(id, body);
      res.json({
          'success': true,
          'message': 'Entrega actualizada',
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
router.delete('/:id', validatorHandler(getIdDeliverDto, 'params'), (req, res, next)=> {
    try {
      const { id } = req.params;
      const entrega = service.delete(id);
      res.json({
          'success': true,
          'message': 'Entrega eliminada',
          'Data': entrega
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
