const express = require('express');
const ProductService = require('../services/products.service');
//const CategoryService = require('../services/categories.service');
const service = new ProductService();
//const categoryService = new CategoryService();
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const { createProductDto, updateProductDto, getIdProductDto, getSearchDto } = require('../middlewares/dtos/product.dto');

// SELECT
router.get('/', async (req, res, next)=> {
  try{
  const { size } = req.query;
    const product = await service.findDB(size || 1000);
    res.json({
      'success': true,
      'message': 'Productos encontrados',
      'Data': product
    });
  } catch (error) {
    next(error);
  }
});

//SELECT
router.get('/cheapest', async (req, res, next)=> {
  try {
    const product = await service.findCheapestDB(4);
   res.json({
        'success': true,
        'message': 'Producto encontrado',
        'Data': product
    });
  } catch (error) {
    next(error);
  }
});

//SELECT
router.get('/lowStock', async (req, res, next)=> {
  try {
    const product = await service.findLowStocktDB(4);
   res.json({
        'success': true,
        'message': 'Producto encontrado',
        'Data': product
    });
  } catch (error) {
    next(error);
  }
});

//SELECT
router.get('/:id', validatorHandler(getIdProductDto, 'params'), async (req, res, next)=> {
  try {
    const { id } = req.params;
    const product = await service.findOneDB(id);
   res.json({
        'success': true,
        'message': 'Producto encontrado',
        'Data': product
    });
  } catch (error) {
    next(error);
  }
});

//CREATE
router.post('/', validatorHandler(createProductDto, 'body'), async (req, res, next)=> {
  try {
    const body = req.body;
    const product = await service.createDB(body);
    res.json({
        'success': true,
       'message': 'Producto creado',
       'Data': product
    });
  } catch (error) {
    next(error);
  }
});

// SELECT CART DE UN USUARIO
router.post('/search', validatorHandler(getSearchDto, 'body'), async (req, res, next)=> {
  try {
  const { nombre, precio } = req.body;
  const filter = { nombre: nombre, precio: precio }
    const product = await service.findSearchDB(filter);
    res.json({
      'success': true,
      'message': 'Carritos encontrados',
      'Data': product
    });
  } catch (error) {
      next(error);
    }
});

//UPDATE
router.patch('/:id', validatorHandler(getIdProductDto, 'params'), validatorHandler(updateProductDto, 'body'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const body = req.body;
      const {original, actualizado} = await service.updateDB(id, body);
      res.json({
          'success': true,
          'message': 'Producto actualizado',
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
router.delete('/:id', validatorHandler(getIdProductDto, 'params'), async (req, res, next)=> {
    try {
      const { id } = req.params;
      const product = await service.deleteDB(id);
      res.json({
          'success': true,
          'message': 'Producto eliminado',
          'Data': product
      });
    } catch (error) {
      next(error);
    }
});

//RUTAS CON MAS PARAMETROS

router.get('/:id/category/', validatorHandler(getIdProductDto, 'params'), async (req, res, next)=> {
  try {
    const { id } = req.params;
    const product = await service.findOneCatDB(id);
    //const category = await categoryService.findCatsDB(product['categoria']);
   res.json({
        'success': true,
        'message': 'Producto encontrado',
        'Data': product
        //'cat': category
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
