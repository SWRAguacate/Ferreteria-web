const express = require('express');
const CategorieService = require('../services/categories.service');
const service = new CategorieService();
const router = express.Router();

// SELECT
router.get('/', (req, res)=> {
  const { size } = req.query;
    const categoria = service.find(size || 10);
    res.json({
      'success': true,
      'message': 'Categorias encontradas',
      'Data': categoria
    });
});

//SELECT
router.get('/:id', (req, res, next)=> {
    try {
      const { id } = req.params;
      const categoria = service.findOne(id);
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
router.post('/', (req, res, next)=> {
  try {
    const body = req.body;
    const categoria = service.create(body);
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
router.patch('/:id', (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {old, changed} = service.update(id, body);
      res.json({
          'success': true,
          'message': 'Categoria actualizada',
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
      const categoria = service.delete(id);
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
