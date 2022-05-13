const faker = require('faker');
const boom = require('@hapi/boom');
const UsuarioModel = require('../models/user.model.js');

class UserService
{
  constructor() {
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
      id_usuario: faker.datatype.uuid(),
      nombre: faker.name.findName(),
      correo: faker.internet.email(),
      contrasenia: faker.internet.password()
    });
  }
  return this.users;
  }

  find(size){
    if(!this.users)
      throw boom.notFound('Usuarios no existentes');
    const user = this.users.filter((item, index) => item && index < size);
    if(!user)
      throw boom.notFound('Usuarios no disponibles');
    return user;
  }

  findOne(id){
    if(!this.users)
      throw boom.notFound('Usuarios no existentes');
    const product = this.users.find(item=> item.id_usuario === id);
    if(!product)
      throw boom.notFound('Usuario no encontrado');
    return product;
  }

  create(data){
    if(!data)
      throw boom.notFound('Data vacía');
    const newProduct = {
      id_usuario: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newProduct);
    return newProduct;
  }

  update(id, changes){
    const index = this.users.findIndex(item => item.id_usuario === id);
    if(index === -1)
      throw boom.notFound('Usuario no encontrado');
    if(!changes)
      throw boom.notFound('Sin datos por cambiar');
    const currentUser = this.users[index];
    this.users[index] = {
      ...currentUser,
      ...changes
    }
    return {
      old: currentUser,
      changed: this.users[index]
    };
  }

  delete(id){
    const index = this.users.findIndex(item => item.id_usuario === id);
    if(index === -1)
      throw boom.notFound('Usuario no encontrado');
    const currentUser = this.users[index];
    this.users.splice(index, 1);
    return currentUser;
  }

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
    user.nombre = nombre;
    user.correo = correo;
    user.contrasenia = contrasenia;
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
