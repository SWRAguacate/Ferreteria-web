const express = require('express');
const UserService = require('../services/users.service');
const service = new UserService();
const validatorHandler = require('../middlewares/validator.handler');
const { createUserDto, updateUserDto, getIdUserDto } = require('../middlewares/dtos/user.dto');
const router = express.Router();

// SELECT
router.get('/', async (req, res)=> {
  const { size } = req.query;
    const user = await service.findDB(size || 10);
    res.json({
      'success': true,
      'message': 'Usuario encontrados',
      'Data': user
    });
});

//SELECT ONE
router.get('/:id', validatorHandler(getIdUserDto, 'params'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const user = await service.findOneDB(id);
     res.json({
          'success': true,
          'message': 'Usuario encontrado',
          'Data': user
      });
    } catch (error) {
      next(error);
    }
});

//CREATE
router.post('/', validatorHandler(createUserDto, 'body'), async (req, res, next)=> {
  try {
    const body = req.body;
    const user = await service.createDB(body);
    res.json({
        'success': true,
       'message': 'Usuario creado',
       'Data': user
    });
  } catch (error) {
    next(error);
  }
});

//UPDATE
router.patch('/:id', validatorHandler(getIdUserDto, 'params'), validatorHandler(updateUserDto, 'body'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {old, changed} = await service.updateDB(id, body);
      res.json({
          'success': true,
          'message': 'Usuario actualizado',
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
router.delete('/:id', validatorHandler(getIdUserDto, 'params'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const user = await service.deleteDB(id);
      res.json({
          'success': true,
          'message': 'Usuario eliminado',
          'Data': user
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
