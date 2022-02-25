const express = require('express');
const InventorieService = require('../services/inventories.service');
const service = new InventorieService();
const router = express.Router();

// SELECT
router.get('/', (req, res)=> {
  const { size } = req.query;
    const inventario = service.find(size || 10);
    res.json({
      'success': true,
      'message': 'Inventarios encontrados',
      'Data': inventario
    });
});

//SELECT
router.get('/:id', (req, res, next)=> {
    try {
      const { id } = req.params;
      const inventario = service.findOne(id);
     res.json({
          'success': true,
          'message': 'Inventario encontrado',
          'Data': inventario
      });
    } catch (error) {
      next(error);
    }
});

//CREATE
router.post('/', (req, res, next)=> {
  try {
    const body = req.body;
    const inventario = service.create(body);
    res.json({
        'success': true,
       'message': 'Inventario creado',
       'Data': inventario
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
          'message': 'Inventario actualizado',
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
      const inventario = service.delete(id);
      res.json({
          'success': true,
          'message': 'Inventario eliminado',
          'Data': inventario
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
