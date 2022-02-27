const Joi = require('joi');

//CRITERIOS DE LOS CAMPOS
const idValidation = Joi.string().uuid();
const chargeValidation = Joi.number().integer().min(10);

//CASOS DE USO
//CREACIÓN
const createProductOrderedDto = Joi.object({
  id_pedido: idValidation.required(),
  id_producto: idValidation.required(),
  cantidad: chargeValidation.required(),
  total_producto: chargeValidation.required()
});

//ACTUALIZACIÓN
const updateProductOrderedDto = Joi.object({
  id_pedido: idValidation,
  id_producto: idValidation,
  cantidad: chargeValidation,
  total_producto: chargeValidation
});

//CUANDO REQUERIMOS UN ID
const getIdProductOrderedDto = Joi.object({
  id: idValidation.required(),
});

module.exports = { createProductOrderedDto, updateProductOrderedDto, getIdProductOrderedDto };
