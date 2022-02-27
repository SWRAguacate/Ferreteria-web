const faker = require('faker');
const boom = require('@hapi/boom');

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
}

module.exports = UserService;
