const express = require('express');
const CartService = require('../services/carts.service');
const service = new CartService();
const router = express.Router();

// SELECT
router.get('/', (req, res)=> {
  const { size } = req.query;
    const carrito = service.find(size || 10);
    res.json({
      'success': true,
      'message': 'Carritos encontrados',
      'Data': carrito
    });
});

//SELECT
router.get('/:id', (req, res, next)=> {
    try {
      const { id } = req.params;
      const carrito = service.findOne(id);
     res.json({
          'success': true,
          'message': 'Carrito encontrado',
          'Data': carrito
      });
    } catch (error) {
      next(error);
    }
});

//CREATE
router.post('/', (req, res, next)=> {
  try {
    const body = req.body;
    const carrito = service.create(body);
    res.json({
        'success': true,
       'message': 'Carrito creado',
       'Data': carrito
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
          'message': 'Carrito actualizado',
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
      const carrito = service.delete(id);
      res.json({
          'success': true,
          'message': 'Carrito eliminado',
          'Data': carrito
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
