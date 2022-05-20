const Joi = require('joi');

//CRITERIOS DE LOS CAMPOS
const idValidation = Joi.string();
const nameValidation = Joi.string().min(3).max(15);
const priceValidation = Joi.number().integer().min(10);
const intValidation = Joi.number().integer();
const stringValidation = Joi.string();
const categoriesValidation = Joi.array();

//CASOS DE USO
//CREACIÓN
const createProductDto = Joi.object({
  nombre: nameValidation.required(),
  precio: priceValidation.required(),
  imagen: stringValidation.required(),
  descripcion: stringValidation.required(),
  color: stringValidation.required(),
  modelo: stringValidation.required(),
  tipo: stringValidation.required(),
  marca: stringValidation.required(),
  material: stringValidation.required(),
  garantia: stringValidation.required(),
  capacidad_tamanio: stringValidation.required(),
  categoria: categoriesValidation.required(),
  cantidad: intValidation.required()
});

//ACTUALIZACIÓN
const updateProductDto = Joi.object({
  nombre: nameValidation,
  precio: priceValidation,
  imagen: stringValidation,
  descripcion: stringValidation,
  color: stringValidation,
  modelo: stringValidation,
  tipo: stringValidation,
  marca: stringValidation,
  material: stringValidation,
  garantia: stringValidation,
  capacidad_tamanio: stringValidation,
  categoria: categoriesValidation,
  cantidad: intValidation
});

//CUANDO REQUERIMOS UN ID
const getIdProductDto = Joi.object({
  id: idValidation.required(),
});

module.exports = { createProductDto, updateProductDto, getIdProductDto };
