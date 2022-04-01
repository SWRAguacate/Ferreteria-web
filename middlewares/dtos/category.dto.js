const Joi = require('joi');

//CRITERIOS DE LOS CAMPOS
const idValidation = Joi.string();
const nameValidation = Joi.string().min(5).max(20);

//CASOS DE USO
//CREACIÓN
const createCategoryDto = Joi.object({
  nombre: nameValidation.required()
});

//ACTUALIZACIÓN
const updateCategoryDto = Joi.object({
  nombre: nameValidation
});

//CUANDO REQUERIMOS UN ID
const getIdCategoryDto = Joi.object({
  id: idValidation.required(),
});

module.exports = { createCategoryDto, updateCategoryDto, getIdCategoryDto };
