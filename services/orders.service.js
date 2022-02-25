const faker = require('faker');
const boom = require('@hapi/boom');

class OrderService
{
  constructor() {
    this.orders = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.orders.push({
      id_pedido: faker.datatype.uuid(),
      name: faker.name.findName(),
      mail: faker.internet.email(),
      password: faker.internet.password()
    });
  }
  return this.orders;
  }

  find(size){
    return this.orders.filter((item, index) => item && index < size);
  }

  findOne(id){
    const product = this.orders.find(item=> item.id_pedido === id);
    if(!product)
      throw boom.notFound('Pedido no encontrado');
    return product;
  }

  create(data){
    const newProduct = {
      id_pedido: faker.datatype.uuid(),
      ...data
    }
    this.orders.push(newProduct);
    return newProduct;
  }

  update(id, changes){
    const index = this.orders.findIndex(item => item.id_pedido === id);
    if(index === -1)
      throw boom.notFound('Pedido no encontrado');
    const currentUser = this.orders[index];
    this.orders[index] = {
      ...currentUser,
      ...changes
    }
    return {
      old: currentUser,
      changed: this.orders[index]
    };
  }

  delete(id){
    const index = this.orders.findIndex(item => item.id_pedido === id);
    if(index === -1)
      throw boom.notFound('Pedido no encontrado');
    const currentUser = this.orders[index];
    this.orders.splice(index, 1);
    return currentUser;
  }
}

module.exports = OrderService;
