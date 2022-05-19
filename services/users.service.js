const boom = require('@hapi/boom');
const UsuarioModel = require('../models/user.model.js');

class UserService
{
  constructor() {}

  async findDB(limit, filter) {
    let usersDB = await UsuarioModel.find(filter);
    usersDB = limit ? usersDB.filter((item, index) => item && index < limit) : usersDB;
    return usersDB;
  }

  async findOneDB(id) {
    const user = await UsuarioModel.findOne({
      _id: id
    });

    if(user == undefined || user == null)
     throw boom.notFound('Usuario no encontrado');
    else if (user.length <= 0)
     throw boom.notFound('Usuario no existente');

    return user;
  }

  async loginDB(data) {
    const { correo, contrasenia } = data;
    const user = await UsuarioModel.findOne({
      contrasenia: contrasenia,
      correo: correo
    });

    if(user == undefined || user == null)
     throw boom.notFound('Usuario no encontrado');
    else if (user.length <= 0)
     throw boom.notFound('Usuario no existente');

    return user;
  }

  async createDB(data) {
    const user_model = new UsuarioModel(data);
    await user_model.save();
    return data;
  }

  async updateDB(id, changes) {
    let user = await UsuarioModel.findOne({
      _id: id
    });
    let userOriginal = {
      nombre: user.nombre,
      correo: user.correo,
      contrasenia: user.contrasenia
    };
    const { nombre, correo, contrasenia } = changes;
    user.nombre = nombre || user.nombre;
    user.correo = correo || user.correo;
    user.contrasenia = contrasenia || user.contrasenia;
    user.save();

    return {
      original: userOriginal,
      actualizado: user
    }
  }

  async deleteDB(id){
    let user_model = await UsuarioModel.findOne({
      _id: id
    });

    const { deletedCount } = await UsuarioModel.deleteOne({
      _id: id
    });

    if(deletedCount <= 0)
      throw boom.notFound('El usuario seleccionado no existe');

    return user_model;
  }
}

module.exports = UserService;
