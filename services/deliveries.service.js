const faker = require('faker');
const boom = require('@hapi/boom');

class DeliverieService
{
  constructor() {
    this.deliveries = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.deliveries.push({
      id_entrega: faker.datatype.uuid(),
      id_pedido: faker.datatype.uuid(),
      fecha: faker.date.past()
    });
  }
  return this.deliveries;
  }

  find(size){
    if(!this.deliveries)
      throw boom.notFound('Entregas no existentes');
    const deliver = this.deliveries.filter((item, index) => item && index < size);
    if(!deliver)
      throw boom.notFound('Sin entregas disponibles');
    return deliver;
  }

  findOne(id){
    if(!this.deliveries)
      throw boom.notFound('Entregas no existentes');
    const product = this.deliveries.find(item=> item.id_entrega === id);
    if(!product)
      throw boom.notFound('Entrega no encontrada');
    return product;
  }

  create(data){
    if(!data)
      throw boom.notFound('Data vacía');
    const newProduct = {
      id_entrega: faker.datatype.uuid(),
      ...data
    }
    this.deliveries.push(newProduct);
    return newProduct;
  }

  update(id, changes){
    const index = this.deliveries.findIndex(item => item.id_entrega === id);
    if(index === -1)
      throw boom.notFound('Entrega no encontrada');
    if(!changes)
      throw boom.notFound('Sin datos por cambiar');
    const currentUser = this.deliveries[index];
    this.deliveries[index] = {
      ...currentUser,
      ...changes
    }
    return {
      old: currentUser,
      changed: this.deliveries[index]
    };
  }

  delete(id){
    const index = this.deliveries.findIndex(item => item.id_entrega === id);
    if(index === -1)
      throw boom.notFound('Entrega no encontrada');
    const currentUser = this.deliveries[index];
    this.deliveries.splice(index, 1);
    return currentUser;
  }
}

module.exports = DeliverieService;
