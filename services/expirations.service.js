const faker = require('faker');
const boom = require('@hapi/boom');

class ExpirationService
{
  constructor() {
    this.expirations = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.expirations.push({
      id_expiracion: faker.datatype.uuid(),
      name: faker.name.findName(),
      mail: faker.internet.email(),
      password: faker.internet.password()
    });
  }
  return this.expirations;
  }

  find(size){
    return this.expirations.filter((item, index) => item && index < size);
  }

  findOne(id){
    const product = this.expirations.find(item=> item.id_expiracion === id);
    if(!product)
      throw boom.notFound('Expiracion no encontrada');
    return product;
  }

  create(data){
    const newProduct = {
      id_expiracion: faker.datatype.uuid(),
      ...data
    }
    this.expirations.push(newProduct);
    return newProduct;
  }

  update(id, changes){
    const index = this.expirations.findIndex(item => item.id_expiracion === id);
    if(index === -1)
      throw boom.notFound('Expiracion no encontrada');
    const currentUser = this.expirations[index];
    this.expirations[index] = {
      ...currentUser,
      ...changes
    }
    return {
      old: currentUser,
      changed: this.expirations[index]
    };
  }

  delete(id){
    const index = this.expirations.findIndex(item => item.id_expiracion === id);
    if(index === -1)
      throw boom.notFound('Expiracion no encontrada');
    const currentUser = this.expirations[index];
    this.expirations.splice(index, 1);
    return currentUser;
  }
}

module.exports = ExpirationService;
