const express = require('express');
const CategorieService = require('../services/categories.service');
const service = new CategorieService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createCategoryDto, updateCategoryDto, getIdCategoryDto } = require('../middlewares/dtos/category.dto');

// SELECT
router.get('/', async (req, res, next)=> {
  try {
  const { size } = req.query;
    const categoria = await service.findDB(size || 1000);
    res.json({
      'success': true,
      'message': 'Categorias encontradas',
      'Data': categoria
    });
  } catch (error) {
      next(error);
    }
});

//SELECT
router.get('/:id', validatorHandler(getIdCategoryDto, 'params'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const categoria = await service.findOneDB(id);
     res.json({
          'success': true,
          'message': 'Categoria encontrada',
          'Data': categoria
      });
    } catch (error) {
      next(error);
    }
});

//CREATE
router.post('/', validatorHandler(createCategoryDto, 'body'), async (req, res, next)=> {
  try {
    const body = req.body;
    const categoria = await service.createDB(body);
    res.json({
        'success': true,
       'message': 'Categoria creada',
       'Data': categoria
    });
  } catch (error) {
    next(error);
  }
});

//UPDATE
router.patch('/:id', validatorHandler(getIdCategoryDto, 'params'), validatorHandler(updateCategoryDto, 'body'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {original, actualizado} = await service.updateDB(id, body);
      res.json({
          'success': true,
          'message': 'Categoria actualizada',
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
router.delete('/:id', validatorHandler(getIdCategoryDto, 'params'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const categoria = await service.deleteDB(id);
      res.json({
          'success': true,
          'message': 'Categoria eliminada',
          'Data': categoria
      });
    } catch (error) {
      next(error);
    }
});

module.exports = router;
