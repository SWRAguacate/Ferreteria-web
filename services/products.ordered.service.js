const faker = require('faker');
const boom = require('@hapi/boom');
const ProductOrderedModel = require('../models/product.ordered.model.js');

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

  async findDB(limit, filter) {
    let productsOrderedDB = await ProductOrderedModel.find(filter);
    productsOrderedDB = limit ? productsOrderedDB.filter((item, index) => item && index < limit) : productsOrderedDB;
    return productsOrderedDB;
  }

  async findOneDB(id) {
    const productOrdered = await ProductOrderedModel.findOne({
      _id: id
    });

    if(productOrdered == undefined || productOrdered == null)
     throw boom.notFound('Producto ordenado no encontrado');
    else if (productOrdered.length <= 0)
     throw boom.notFound('Producto ordenado no existente');

    return productOrdered;
  }

  async createDB(data) {
    const product_model = new ProductOrderedModel(data);
    await product_model.save();
    return data;
  }

  async updateDB(id, changes) {
    let productOrdered = await ProductOrderedModel.findOne({
      _id: id
    });
    let productOrderedOriginal = {
      id_pedido: productOrdered.id_pedido,
      id_producto: productOrdered.id_producto,
      cantidad: productOrdered.cantidad,
      total_producto: productOrdered.total_producto
    };
    const { id_pedido, id_producto, cantidad, total_producto } = changes;
    productOrderedOriginal.id_pedido = id_pedido;
    productOrderedOriginal.id_producto = id_producto;
    productOrderedOriginal.cantidad = cantidad;
    productOrderedOriginal.total_producto = total_producto;
    productOrderedOriginal.save();

    return {
      original: productOrderedOriginal,
      actualizado: productOrdered
    }
  }

  async deleteDB(id){
    let product_ordered_model = await ProductOrderedModel.findOne({
      _id: id
    });

    const { deletedCount } = await ProductOrderedModel.deleteOne({
      _id: id
    });

    if(deletedCount <= 0)
      throw boom.notFound('El producto ordenado seleccionado no existe');

    return product_ordered_model;
  }
}

module.exports = ProductsOrderedService;
