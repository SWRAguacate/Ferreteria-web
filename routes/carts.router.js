const express = require('express');
const CartService = require('../services/carts.service');
const service = new CartService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createCartDto, updateCartDto, getIdCartDto } = require('../middlewares/dtos/cart.dto');

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
router.get('/:id', validatorHandler(getIdCartDto, 'params'), (req, res, next)=> {
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
router.post('/', validatorHandler(createCartDto, 'body'), (req, res, next)=> {
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
router.patch('/:id', validatorHandler(getIdCartDto, 'params'), validatorHandler(updateCartDto, 'body'), (req, res, next)=> {
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
router.delete('/:id', validatorHandler(getIdCartDto, 'params'), (req, res, next)=> {
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
