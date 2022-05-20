const boom = require('@hapi/boom');
const cartModel = require('../models/cart.model.js');

class CartService {
  constructor() {}

  async findDB(filter) {
    let cartDB = await cartModel.find(filter);

    if(cartDB.length <= 0)
      throw boom.notFound('Carrito vacio');

    return cartDB;
  }

  async findOneDB(id) {
    const cart = await cartModel.findOne({
      id_usuario: id,
    });

    if (cart == undefined || cart == null)
      throw boom.notFound('Carrito no encontrado');
    else if (cart.length <= 0)
      throw boom.notFound('Carrito no existente');

    return cart;
  }

  async findOneCartDB(id) {
    const cart = await cartModel.findOne({
      _id: id,
    });

    if (cart == undefined || cart == null)
      throw boom.notFound('Carrito no encontrado');
    else if (cart.length <= 0)
      throw boom.notFound('Carrito no existente');

    return cart;
  }

  async createDB(data) {
    const cart_model = new cartModel(data);
    await cart_model.save();
    return data;
  }

  async updateDB(id, changes) {
    let cart = await cartModel.findOne({
      _id: id,
    });
    let cartOriginal = {
      id_usuario: cart.id_usuario,
      id_producto: cart.id_producto,
      nombre: cart.nombre,
      descripcion: cart.descripcion,
      imagen: cart.imagen,
      precio: cart.precio,
      cantidad: cart.cantidad,
      total_producto: cart.total_producto,
    };
    const {
      id_usuario,
      id_producto,
      nombre,
      descripcion,
      imagen,
      precio,
      cantidad,
      total_producto,
    } = changes;
    cart.id_usuario = id_usuario || cart.id_usuario;
    cart.id_producto = id_producto || cart.id_producto;
    cart.nombre = nombre || cart.nombre;
    cart.descripcion = descripcion || cart.descripcion;
    cart.imagen = imagen || cart.imagen;
    cart.precio = precio || cart.precio;
    cart.cantidad = cantidad || cart.cantidad;
    cart.total_producto = total_producto || cart.total_producto;
    cart.save();

    return {
      original: cartOriginal,
      actualizado: cart,
    };
  }

  async deleteDB(id) {
    let cart_model = await cartModel.findOne({
      _id: id,
    });

    const { deletedCount } = await cartModel.deleteOne({
      _id: id,
    });

    if (deletedCount <= 0)
      throw boom.notFound('El carrito seleccionado no existe');

    return cart_model;
  }

  async deleteOneProductDB(filter) {
    let cart_model = await cartModel.findOne(filter);

    const { deletedCount } = await cartModel.deleteOne(filter);

    if (deletedCount <= 0)
      throw boom.notFound('El carrito seleccionado no existe');

    return cart_model;
  }

  async deleteUserCartDB(filter) {
    let cartDB = await cartModel.find(filter);
    await cartModel.deleteMany(filter);

    if(cartDB.length <= 0)
      throw boom.notFound('Carrito vacio');

    return cartDB;
  }
}

module.exports = CartService;
