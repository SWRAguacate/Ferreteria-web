const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsOrderedService
{
  constructor() {
    this.productsOrdered = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.productsOrdered.push({
        id_producto_pedido: faker.datatype.uuid(),
      name: faker.name.findName(),
      mail: faker.internet.email(),
      password: faker.internet.password()
    });
  }
  return this.productsOrdered;
  }

  find(size){
    return this.productsOrdered.filter((item, index) => item && index < size);
  }

  findOne(id){
    const product = this.productsOrdered.find(item=> item.id_producto_pedido === id);
    if(!product)
      throw boom.notFound('Producto pedido no encontrado');
    return product;
  }

  create(data){
    const newProduct = {
      id_producto_pedido: faker.datatype.uuid(),
      ...data
    }
    this.productsOrdered.push(newProduct);
    return newProduct;
  }

  update(id, changes){
    const index = this.productsOrdered.findIndex(item => item.id_producto_pedido === id);
    if(index === -1)
      throw boom.notFound('Producto pedido no encontrado');
    const currentUser = this.productsOrdered[index];
    this.productsOrdered[index] = {
      ...currentUser,
      ...changes
    }
    return {
      old: currentUser,
      changed: this.productsOrdered[index]
    };
  }

  delete(id){
    const index = this.productsOrdered.findIndex(item => item.id_producto_pedido === id);
    if(index === -1)
      throw boom.notFound('Producto pedido no encontrado');
    const currentUser = this.productsOrdered[index];
    this.productsOrdered.splice(index, 1);
    return currentUser;
  }
}

module.exports = ProductsOrderedService;
