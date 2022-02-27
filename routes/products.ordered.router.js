const express = require('express');
const ProductsOrderedService = require('../services/products.ordered.service');
const service = new ProductsOrderedService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createProductOrderedDto, updateProductOrderedDto, getIdProductOrderedDto } = require('../middlewares/dtos/product.ordered.dto');

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
router.get('/:id', validatorHandler(getIdProductOrderedDto, 'params'), (req, res, next)=> {
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
router.post('/', validatorHandler(createProductOrderedDto, 'body'), (req, res, next)=> {
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
router.patch('/:id', validatorHandler(getIdProductOrderedDto, 'params'), validatorHandler(updateProductOrderedDto, 'body'), (req, res, next)=> {
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
router.delete('/:id', validatorHandler(getIdProductOrderedDto, 'params'), (req, res, next)=> {
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
