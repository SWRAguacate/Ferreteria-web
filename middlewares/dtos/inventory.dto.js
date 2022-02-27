const Joi = require('joi');

//CRITERIOS DE LOS CAMPOS
const idValidation = Joi.string().uuid();
const numberValidation = Joi.number().integer().min(10);

//CASOS DE USO
//CREACIÓN
const createInventoryDto = Joi.object({
  id_producto: idValidation.required(),
  fecha: numberValidation.required()
});

//ACTUALIZACIÓN
const updateInventoryDto = Joi.object({
  id_producto: idValidation,
  fecha: numberValidation
});

//CUANDO REQUERIMOS UN ID
const getIdInventoryDto = Joi.object({
  id: idValidation.required(),
});

module.exports = { createInventoryDto, updateInventoryDto, getIdInventoryDto };
