const Joi = require('joi');

//CRITERIOS DE LOS CAMPOS
const idValidation = Joi.string();
const numberValidation = Joi.number().integer().min(10);

//CASOS DE USO
//CREACIÓN
const createCartDto = Joi.object({
  id_usuario: idValidation.required(),
  id_producto: idValidation.required(),
  cantidad: numberValidation.required(),
  total_producto: numberValidation.required()
});

//ACTUALIZACIÓN
const updateCartDto = Joi.object({
  id_usuario: idValidation,
  id_producto: idValidation,
  cantidad: numberValidation,
  total_producto: numberValidation
});

//CUANDO REQUERIMOS UN ID
const getIdCartDto = Joi.object({
  id: idValidation.required(),
});

module.exports = { createCartDto, updateCartDto, getIdCartDto };
