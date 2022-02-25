const express = require('express');
const ProductService = require('../services/products.service');
const service = new ProductService();
const router = express.Router();

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
router.get('/:id', (req, res, next)=> {
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
router.post('/', (req, res, next)=> {
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
router.patch('/:id', (req, res, next)=> {
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
router.delete('/:id', (req, res, next)=> {
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
