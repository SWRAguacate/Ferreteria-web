const express = require('express');
const ProductService = require('../services/products.service');
const service = new ProductService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createProductDto, updateProductDto, getIdProductDto } = require('../middlewares/dtos/product.dto');

// SELECT
router.get('/', (req, res)=> {
  const { size } = req.query;
    const product = service.find(size || 10);
    res.json({
      'success': true,
      'message': 'Productos encontrados',
      'Data': product
    });
});

//SELECT
router.get('/:id', validatorHandler(getIdProductDto, 'params'), (req, res, next)=> {
    try {
      const { id } = req.params;
      const product = service.findOne(id);
     res.json({
          'success': true,
          'message': 'Producto encontrado',
          'Data': product
      });
    } catch (error) {
      next(error);
    }
});

//CREATE
router.post('/', validatorHandler(createProductDto, 'body'), (req, res, next)=> {
  try {
    const body = req.body;
    const product = service.create(body);
    res.json({
        'success': true,
       'message': 'Producto creado',
       'Data': product
    });
  } catch (error) {
    next(error);
  }
});

//UPDATE
router.patch('/:id', validatorHandler(getIdProductDto, 'params'), validatorHandler(updateProductDto, 'body'), (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {old, changed} = service.update(id, body);
      res.json({
          'success': true,
          'message': 'Producto actualizado',
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
router.delete('/:id', validatorHandler(getIdProductDto, 'params'), (req, res, next)=> {
    try {
      const { id } = req.params;
      const product = service.delete(id);
      res.json({
          'success': true,
          'message': 'Producto eliminado',
          'Data': product
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
