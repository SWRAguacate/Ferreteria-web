const express = require('express');
const orderService = require('../services/orders.service');
const service = new orderService();
const router = express.Router();

// SELECT
router.get('/', (req, res)=> {
  const { size } = req.query;
    const pedido = service.find(size || 10);
    res.json({
      'success': true,
      'message': 'Pedidos encontrados',
      'Data': pedido
    });
});

//SELECT
router.get('/:id', (req, res, next)=> {
    try {
      const { id } = req.params;
      const pedido = service.findOne(id);
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
router.post('/', (req, res, next)=> {
  try {
    const body = req.body;
    const pedido = service.create(body);
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
router.patch('/:id', (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {old, changed} = service.update(id, body);
      res.json({
          'success': true,
          'message': 'Pedido actualizado',
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
      const pedido = service.delete(id);
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
