const Joi = require('joi');

//CRITERIOS DE LOS CAMPOS
const idValidation = Joi.string();
const dateValidation = Joi.date().greater('now');

//CASOS DE USO
//CREACIÓN
const createExpirationDto = Joi.object({
  id_pedido: idValidation.required(),
  fecha: dateValidation.required()
});

//ACTUALIZACIÓN
const updateExpirationDto = Joi.object({
  id_pedido: idValidation,
  fecha: dateValidation
});

//CUANDO REQUERIMOS UN ID
const getIdExpirationDto = Joi.object({
  id: idValidation.required(),
});

module.exports = { createExpirationDto, updateExpirationDto, getIdExpirationDto };
