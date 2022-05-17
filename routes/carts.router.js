const express = require('express');
const CartService = require('../services/carts.service');
const service = new CartService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createCartDto, updateCartDto, getIdCartDto } = require('../middlewares/dtos/cart.dto');

// SELECT CART DE UN USUARIO
router.get('/', async (req, res)=> {
  const { size, id } = req.query;
  const filter = { id_usuario: id}
    const carrito = await service.findDB((size || 10), filter);
    res.json({
      'success': true,
      'message': 'Carritos encontrados',
      'Data': carrito
    });
});

//SELECT
router.get('/:id', validatorHandler(getIdCartDto, 'params'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const carrito = await service.findOneDB(id);
     res.json({
          'success': true,
          'message': 'Carrito encontrado',
          'Data': carrito
      });
    } catch (error) {
      next(error);
    }
});

//SELECT
router.get('/product/:id', validatorHandler(getIdCartDto, 'params'), async (req, res, next)=> {
  try {
    const { id } = req.params;
    const carrito = await service.findOneCartDB(id);
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
router.post('/', validatorHandler(createCartDto, 'body'), async (req, res, next)=> {
  try {
    const body = req.body;
    const carrito = await service.createDB(body);
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
router.patch('/:id', validatorHandler(getIdCartDto, 'params'), validatorHandler(updateCartDto, 'body'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {old, changed} = await service.updateDB(id, body);
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
router.delete('/:id', validatorHandler(getIdCartDto, 'params'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const carrito = await service.deleteDB(id);
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
