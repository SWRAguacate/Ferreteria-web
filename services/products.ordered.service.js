const boom = require('@hapi/boom');
const ProductOrderedModel = require('../models/product.ordered.model.js');

class ProductsOrderedService
{
  constructor() {}

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
    productOrdered.id_pedido = id_pedido || productOrdered.id_pedido;
    productOrdered.id_producto = id_producto || productOrdered.id_producto;
    productOrdered.cantidad = cantidad || productOrdered.cantidad;
    productOrdered.total_producto = total_producto || productOrdered.total_producto;
    productOrdered.save();

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
