const faker = require('faker');
const boom = require('@hapi/boom');

class CartService
{
  constructor() {
    this.carts = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.carts.push({
      id_carrito: faker.datatype.uuid(),
      id_usuario: faker.name.findName(),
      id_producto: faker.internet.email(),
      cantidad: faker.internet.password(),
      total_producto: parseInt(faker.commerce.price(), 10)
    });
  }
  return this.carts;
  }

  find(size){
    return this.carts.filter((item, index) => item && index < size);
  }

  findOne(id){
    const product = this.carts.find(item=> item.id_carrito === id);
    if(!product)
      throw boom.notFound('Carrito no encontrado');
    return product;
  }

  create(data){
    const newProduct = {
      id_carrito: faker.datatype.uuid(),
      ...data
    }
    this.carts.push(newProduct);
    return newProduct;
  }

  update(id, changes){
    const index = this.carts.findIndex(item => item.id_carrito === id);
    if(index === -1)
      throw boom.notFound('Carrito no encontrado');
    const currentUser = this.carts[index];
    this.carts[index] = {
      ...currentUser,
      ...changes
    }
    return {
      old: currentUser,
      changed: this.carts[index]
    };
  }

  delete(id){
    const index = this.carts.findIndex(item => item.id_carrito === id);
    if(index === -1)
      throw boom.notFound('Carrito no encontrado');
    const currentUser = this.carts[index];
    this.carts.splice(index, 1);
    return currentUser;
  }
}

module.exports = CartService;
