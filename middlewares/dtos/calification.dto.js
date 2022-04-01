const Joi = require('joi');

//CRITERIOS DE LOS CAMPOS
const idValidation = Joi.string();
const idUserValidation = Joi.string();
const likeDislikeValidation = Joi.number().integer().min(0).max(1);

//CASOS DE USO
//CREACIÓN
const createCalificationDto = Joi.object({
  id_producto: idValidation.required(),
  id_usuario: idUserValidation.required(),
  like_dislike: likeDislikeValidation.required()
});

//ACTUALIZACIÓN
const updateCalificationtDto = Joi.object({
  id_producto: idValidation,
  id_usuario: idUserValidation,
  like_dislike: likeDislikeValidation
});

//CUANDO REQUERIMOS UN ID
const getIdCalificationDto = Joi.object({
  id: idValidation.required(),
});

module.exports = { createCalificationDto, updateCalificationtDto, getIdCalificationDto };
