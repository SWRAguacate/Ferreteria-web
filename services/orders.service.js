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
      id_usuario: faker.datatype.uuid(),
      fecha: faker.date.future(),
      total_pedido: faker.finance.amount(),
      codigo: faker.datatype.number()
    });
  }
  return this.orders;
  }

  find(size){
    if(!this.orders)
      throw boom.notFound('Ordenes no existentes');
    const order = this.orders.filter((item, index) => item && index < size);
    if(!order)
      throw boom.notFound('Ordenes no disponibles');
    return order;
  }

  findOne(id){
    if(!this.orders)
      throw boom.notFound('Ordenes no existentes');
    const product = this.orders.find(item=> item.id_pedido === id);
    if(!product)
      throw boom.notFound('Pedido no encontrado');
    return product;
  }

  create(data){
    if(!data)
      throw boom.notFound('Data vacía');
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
    if(!changes)
      throw boom.notFound('Sin datos por cambiar');
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
