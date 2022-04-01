const Joi = require('joi');

//CRITERIOS DE LOS CAMPOS
const idValidation = Joi.string();
const nameValidation = Joi.string().min(10).max(45);
const mailValidation = Joi.string().email();
const passValidation = Joi.string();

//CASOS DE USO
//CREACIÓN
const createUserDto = Joi.object({
  nombre: nameValidation.required(),
  correo: mailValidation.required(),
  contrasenia: passValidation.required()
});

//ACTUALIZACIÓN
const updateUserDto = Joi.object({
  nombre: nameValidation,
  correo: mailValidation,
  contrasenia: passValidation
});

//CUANDO REQUERIMOS UN ID
const getIdUserDto = Joi.object({
  id: idValidation.required(),
});

module.exports = { createUserDto, updateUserDto, getIdUserDto };
