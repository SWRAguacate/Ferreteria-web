const faker = require('faker');
const boom = require('@hapi/boom');
const cartModel = require('../models/cart.model.js');

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
    if(!this.carts)
      throw boom.notFound('Carritos no existentes');
    const cart = this.carts.filter((item, index) => item && index < size);
    if(!cart)
      throw boom.notFound('Sin carritos');
    return cart
  }

  findOne(id){
    if(!this.carts)
      throw boom.notFound('Carritos no existentes');
    const product = this.carts.find(item=> item.id_carrito === id);
    if(!product)
      throw boom.notFound('Carrito no encontrado');
    return product;
  }

  create(data){
    if(!data)
      throw boom.notFound('Data vacía');
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
    if(!changes)
      throw boom.notFound('Sin datos por cambiar');
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

  async findDB(limit, filter) {
    let cartDB = await cartModel.find(filter);
    cartDB = limit ? cartDB.filter((item, index) => item && index < limit) : cartDB;
    return cartDB;
  }

  async findUserCartDB(limit, filter) {
    let cartDB = await cartModel.find(filter);
    cartDB = limit ? cartDB.filter((item, index) => item && index < limit) : cartDB;
    return cartDB;
  }

  async findOneDB(id) {
    const cart = await cartModel.findOne({
      id_usuario: id
    });

    if(cart == undefined || cart == null)
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
      _id: id
    });
    let cartOriginal = {
      id_usuario: cart.id_usuario,
      id_producto: cart.id_producto,
      nombre: cart.nombre,
      descripcion: cart.descripcion,
      imagen: cart.imagen,
      precio: cart.precio,
      cantidad: cart.cantidad,
      total_producto: cart.total_producto
    };
    const { id_usuario, id_producto, nombre, descripcion, imagen, precio, cantidad, total_producto } = changes;
    cart.id_usuario = id_usuario;
    cart.id_producto = id_producto;
    cart.nombre = nombre;
    cart.descripcion = descripcion;
    cart.imagen = imagen;
    cart.precio = precio;
    cart.cantidad = cantidad;
    cart.total_producto = total_producto;
    cart.save();

    return {
      original: cartOriginal,
      actualizado: cart
    }
  }

  async deleteDB(id){
    let cart_model = await cartModel.findOne({
      _id: id
    });

    const { deletedCount } = await cartModel.deleteOne({
      _id: id
    });

    if(deletedCount <= 0)
      throw boom.notFound('El carrito seleccionado no existe');

    return cart_model;
  }
}

module.exports = CartService;
