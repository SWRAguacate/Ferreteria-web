const express = require('express');
const UserService = require('../services/users.service');
const service = new UserService();
const router = express.Router();

// SELECT
router.get('/', (req, res)=> {
  const { size } = req.query;
    const user = service.find(size || 10);
    res.json({
      'success': true,
      'message': 'Usuario encontrados',
      'Data': user
    });
});

//SELECT ONE
router.get('/:id', (req, res, next)=> {
    try {
      const { id } = req.params;
      const user = service.findOne(id);
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
router.post('/', (req, res, next)=> {
  try {
    const body = req.body;
    const user = service.create(body);
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
router.patch('/:id', (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {old, changed} = service.update(id, body);
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
router.delete('/:id', (req, res, next)=> {
    try {
      const { id } = req.params;
      const user = service.delete(id);
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
