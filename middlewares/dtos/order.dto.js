const Joi = require('joi');

//CRITERIOS DE LOS CAMPOS
const idValidation = Joi.string();
const chargeValidation = Joi.number();
const codeValidation = Joi.number().integer();
const arrayValidation = Joi.array();

//CASOS DE USO
//CREACIÓN
const createOrderDto = Joi.object({
  id_usuario: idValidation.required(),
  nombre: idValidation.required(),
  fecha: idValidation.required(),
  total_pedido: chargeValidation.required(),
  codigo: codeValidation.required(),
  productos: arrayValidation.required(),
  estatus: codeValidation.required()
});

//ACTUALIZACIÓN
const updateOrderDto = Joi.object({
  id_usuario: idValidation,
  nombre: idValidation,
  fecha: idValidation,
  total_pedido: chargeValidation,
  codigo: codeValidation,
  productos: arrayValidation,
  estatus: codeValidation
});

//CUANDO REQUERIMOS UN ID
const getIdOrderDto = Joi.object({
  id: idValidation.required(),
});

module.exports = { createOrderDto, updateOrderDto, getIdOrderDto };
