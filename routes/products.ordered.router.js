const express = require('express');
const ProductsOrderedService = require('../services/products.ordered.service');
const service = new ProductsOrderedService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createProductOrderedDto, updateProductOrderedDto, getIdProductOrderedDto } = require('../middlewares/dtos/product.ordered.dto');

// SELECT
router.get('/',async (req, res, next)=> {
  try{
  const { size } = req.query;
    const productoPedido = await service.findDB(size || 10);
    res.json({
      'success': true,
      'message': 'Productos pedidos encontrados',
      'Data': productoPedido
    });
  } catch (error) {
    next(error);
  }
});

//SELECT
router.get('/:id', validatorHandler(getIdProductOrderedDto, 'params'),async (req, res, next)=> {
    try {
      const { id } = req.params;
      const productoPedido = await service.findOneDB(id);
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
router.post('/', validatorHandler(createProductOrderedDto, 'body'),async (req, res, next)=> {
  try {
    const body = req.body;
    const productoPedido = await service.createDB(body);
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
router.patch('/:id', validatorHandler(getIdProductOrderedDto, 'params'), validatorHandler(updateProductOrderedDto, 'body'),async (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {original, actualizado} = await service.updateDB(id, body);
      res.json({
          'success': true,
          'message': 'Producto pedido actualizado',
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
router.delete('/:id', validatorHandler(getIdProductOrderedDto, 'params'),async (req, res, next)=> {
    try {
      const { id } = req.params;
      const productoPedido = await service.deleteDB(id);
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
