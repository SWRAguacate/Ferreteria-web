const express = require('express');
const ProductsOrderedService = require('../services/products.ordered.service');
const service = new ProductsOrderedService();
const router = express.Router();

// SELECT
router.get('/', (req, res)=> {
  const { size } = req.query;
    const productoPedido = service.find(size || 10);
    res.json({
      'success': true,
      'message': 'Productos pedidos encontrados',
      'Data': productoPedido
    });
});

//SELECT
router.get('/:id', (req, res, next)=> {
    try {
      const { id } = req.params;
      const productoPedido = service.findOne(id);
     res.json({
          'success': true,
          'message': 'Producto pedido encontrado',
          'Data': productoPedido
      });
    } catch (error) {
      next(error);
    }
});

//CREATE
router.post('/', (req, res, next)=> {
  try {
    const body = req.body;
    const productoPedido = service.create(body);
    res.json({
        'success': true,
       'message': 'Producto pedido creado',
       'Data': productoPedido
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
          'message': 'Producto pedido actualizado',
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
      const productoPedido = service.delete(id);
      res.json({
          'success': true,
          'message': 'Producto pedido eliminado',
          'Data': productoPedido
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
