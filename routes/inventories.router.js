const express = require('express');
const InventorieService = require('../services/inventories.service');
const service = new InventorieService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createInventoryDto, updateInventoryDto, getIdInventoryDto } = require('../middlewares/dtos/inventory.dto');

// SELECT
router.get('/', async (req, res)=> {
  const { size } = req.query;
    const inventario = await service.findDB(size || 10);
    res.json({
      'success': true,
      'message': 'Inventarios encontrados',
      'Data': inventario
    });
});

//SELECT
router.get('/:id', validatorHandler(getIdInventoryDto, 'params'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const inventario = await service.findOneDB(id);
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
router.post('/', validatorHandler(createInventoryDto, 'body'), async (req, res, next)=> {
  try {
    const body = req.body;
    const inventario = await service.createDB(body);
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
router.patch('/:id', validatorHandler(getIdInventoryDto, 'params'), validatorHandler(updateInventoryDto, 'body'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {original, actualizado} = await service.updateDB(id, body);
      res.json({
          'success': true,
          'message': 'Inventario actualizado',
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
router.delete('/:id', validatorHandler(getIdInventoryDto, 'params'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const inventario = await service.deleteDB(id);
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
