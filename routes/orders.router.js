const express = require('express');
const orderService = require('../services/orders.service');
const service = new orderService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createOrderDto, updateOrderDto, getIdOrderDto } = require('../middlewares/dtos/order.dto');

// SELECT
router.get('/', async (req, res, next)=> {
  try {
  const { size } = req.query;
    const pedido = await service.findDB(size || 10);
    res.json({
      'success': true,
      'message': 'Pedidos encontrados',
      'Data': pedido
    });
  } catch (error) {
    next(error);
  }
});

//SELECT
router.get('/:id', validatorHandler(getIdOrderDto, 'params'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const pedido = await service.findOneDB(id);
     res.json({
          'success': true,
          'message': 'Pedido encontrado',
          'Data': pedido
      });
    } catch (error) {
      next(error);
    }
});

//CREATE
router.post('/', validatorHandler(createOrderDto, 'body'), async (req, res, next)=> {
  try {
    const body = req.body;
    const pedido = await service.createDB(body);
    res.json({
        'success': true,
       'message': 'Pedido creado',
       'Data': pedido
    });
  } catch (error) {
    next(error);
  }
});

//UPDATE
router.patch('/:id', validatorHandler(getIdOrderDto, 'params'), validatorHandler(updateOrderDto, 'body'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {original, actualizado} = await service.updateDB(id, body);
      res.json({
          'success': true,
          'message': 'Pedido actualizado',
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
router.delete('/:id', validatorHandler(getIdOrderDto, 'params'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const pedido = await service.deleteDB(id);
      res.json({
          'success': true,
          'message': 'Pedido eliminado',
          'Data': pedido
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
