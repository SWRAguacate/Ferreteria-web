const express = require('express');
const CartService = require('../services/carts.service');
const service = new CartService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createCartDto, updateCartDto, getIdCartDto } = require('../middlewares/dtos/cart.dto');

// SELECT CART DE UN USUARIO
router.get('/', validatorHandler(getIdCartDto, 'query'), async (req, res, next)=> {
  try {
  const { id } = req.query;
  const filter = { id_usuario: id}
    const carrito = await service.findDB(filter);
    res.json({
      'success': true,
      'message': 'Carritos encontrados',
      'Data': carrito
    });
  } catch (error) {
      next(error);
    }
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
      const {original, actualizado} = await service.updateDB(id, body);
      res.json({
          'success': true,
          'message': 'Carrito actualizado',
          'Data': {
            "cambios": actualizado,
            "original": original
          }
      });
    } catch (error) {
      next(error);
    }
});

// DELETE CART DE UN USUARIO
router.delete('/:id', validatorHandler(getIdCartDto, 'params'), async (req, res, next)=> {
  try{
  const { id } = req.params;
  const filter = { id_usuario: id}
    const carrito = await service.deleteUserCartDB(filter);
    res.json({
      'success': true,
      'message': 'Carritos eliminados',
      'Data': carrito
    });
  } catch (error) {
    next(error);
  }
});

// DELETE UN DESEADO DE UN USUARIO
router.delete('/delete/product/:id', validatorHandler(getIdCartDto, 'params'), async (req, res, next)=> {
  try{
    const { id } = req.params;
  const filter = { _id: id }
    const carrito = await service.deleteOneProductDB(filter);
    res.json({
      'success': true,
      'message': 'Carritos eliminados',
      'Data': carrito
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
