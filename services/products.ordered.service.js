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
      id_pedido: faker.datatype.uuid(),
      id_producto: faker.datatype.uuid(),
      cantidad: faker.datatype.number(),
      total_producto: faker.datatype.number()
    });
  }
  return this.productsOrdered;
  }

  find(size){
    if(!this.productsOrdered)
      throw boom.notFound('Productos pedidos no existentes');
    const productOrdered = this.productsOrdered.filter((item, index) => item && index < size);
    if(!productOrdered)
      throw boom.notFound('Productos pedidos no disponibles');
    return productOrdered;
  }

  findOne(id){
    if(!this.productsOrdered)
      throw boom.notFound('Productos pedidos no existentes');
    const product = this.productsOrdered.find(item=> item.id_producto_pedido === id);
    if(!product)
      throw boom.notFound('Producto pedido no encontrado');
    return product;
  }

  create(data){
    if(!data)
      throw boom.notFound('Data vacía');
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
    if(!changes)
      throw boom.notFound('Sin datos por cambiar');
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
