const Joi = require('joi');

//CRITERIOS DE LOS CAMPOS
const idValidation = Joi.string();
const dateValidation = Joi.date().greater('now');
const chargeValidation = Joi.number().integer().min(10);

//CASOS DE USO
//CREACIÓN
const createOrderDto = Joi.object({
  id_usuario: idValidation.required(),
  fecha: dateValidation.required(),
  total_pedido: chargeValidation.required(),
  codigo: chargeValidation.required()
});

//ACTUALIZACIÓN
const updateOrderDto = Joi.object({
  id_usuario: idValidation,
  fecha: dateValidation,
  total_pedido: chargeValidation,
  codigo: chargeValidation
});

//CUANDO REQUERIMOS UN ID
const getIdOrderDto = Joi.object({
  id: idValidation.required(),
});

module.exports = { createOrderDto, updateOrderDto, getIdOrderDto };
