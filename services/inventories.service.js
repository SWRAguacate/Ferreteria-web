const faker = require('faker');
const boom = require('@hapi/boom');

class InventorieService
{
  constructor() {
    this.inventories = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.inventories.push({
      id_inventario: faker.datatype.uuid(),
      name: faker.name.findName(),
      mail: faker.internet.email(),
      password: faker.internet.password()
    });
  }
  return this.inventories;
  }

  find(size){
    return this.inventories.filter((item, index) => item && index < size);
  }

  findOne(id){
    const product = this.inventories.find(item=> item.id_inventario === id);
    if(!product)
      throw boom.notFound('Inventario no encontrado');
    return product;
  }

  create(data){
    const newProduct = {
      id_inventario: faker.datatype.uuid(),
      ...data
    }
    this.inventories.push(newProduct);
    return newProduct;
  }

  update(id, changes){
    const index = this.inventories.findIndex(item => item.id_inventario === id);
    if(index === -1)
      throw boom.notFound('Inventario no encontrado');
    const currentUser = this.inventories[index];
    this.inventories[index] = {
      ...currentUser,
      ...changes
    }
    return {
      old: currentUser,
      changed: this.inventories[index]
    };
  }

  delete(id){
    const index = this.inventories.findIndex(item => item.id_inventario === id);
    if(index === -1)
      throw boom.notFound('Inventario no encontrado');
    const currentUser = this.inventories[index];
    this.inventories.splice(index, 1);
    return currentUser;
  }
}

module.exports = InventorieService;
