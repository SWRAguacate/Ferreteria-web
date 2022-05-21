const Joi = require('joi');

//CRITERIOS DE LOS CAMPOS
const idValidation = Joi.string();
const numberValidation = Joi.number().integer();
const nameValidation = Joi.string().min(3).max(15);
const priceValidation = Joi.number().integer();
const stringValidation = Joi.string();

//CASOS DE USO
//CREACIÓN
const createCartDto = Joi.object({
  id_usuario: idValidation.required(),
  id_producto: idValidation.required(),
  nombre: nameValidation.required(),
  descripcion: stringValidation.required(),
  imagen: stringValidation.required(),
  precio: priceValidation.required(),
  cantidad: numberValidation.required(),
  total_producto: priceValidation.required()
});

//ACTUALIZACIÓN
const updateCartDto = Joi.object({
  id_usuario: idValidation,
  id_producto: idValidation,
  nombre: nameValidation,
  descripcion: stringValidation,
  imagen: stringValidation,
  precio: priceValidation,
  cantidad: numberValidation,
  total_producto: numberValidation
});

//CUANDO REQUERIMOS UN ID
const getIdCartDto = Joi.object({
  id: idValidation.required(),
});

//CUANDO REQUERIMOS UN ID
const getIdUserProductDto = Joi.object({
  id_usuario: idValidation.required(),
  id_producto: idValidation.required(),
});

module.exports = { createCartDto, updateCartDto, getIdCartDto, getIdUserProductDto };
