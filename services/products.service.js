const boom = require('@hapi/boom');
const ProductModel = require('../models/product.model.js');

class ProductService
{
  constructor() {}

  async findDB(limit, filter) {
    let productsDB = await ProductModel.find(filter);
    productsDB = limit ? productsDB.filter((item, index) => item && index < limit) : productsDB;
    return productsDB;
  }

  async findOneDB(id) {
    const product = await ProductModel.findOne({
      _id: id
    });

    if(product == undefined || product == null)
     throw boom.notFound('Producto no encontrado');
    else if (product.length <= 0)
     throw boom.notFound('Producto no existente');

    return product;
  }

  async findOneCatDB(id) {
    const product = await ProductModel.findOne({
      _id: id
    });

    if(product == undefined || product == null)
     throw boom.notFound('Producto no encontrado');
    else if (product.length <= 0)
     throw boom.notFound('Producto no existente');

    return product;
  }

  async createDB(data) {
    const product_model = new ProductModel(data);
    await product_model.save();
    return data;
  }

  async updateDB(id, changes) {
    let product = await ProductModel.findOne({
      _id: id
    });
    let productOriginal = {
      nombre: product.nombre,
      precio: product.precio,
      imagen: product.imagen,
      descripcion: product.descripcion,
      color: product.color,
      modelo: product.modelo,
      tipo: product.tipo,
      marca: product.marca,
      material: product.material,
      garantia: product.garantia,
      capacidad_tamanio: product.capacidad_tamanio,
      categoria: product.categoria
    };
    const { nombre, precio, imagen, descripcion, color, modelo, tipo, marca, material, garantia, capacidad_tamanio, categoria } = changes;
    product.nombre = nombre || product.nombre;
    product.precio = precio || product.precio;
    product.imagen = imagen || product.imagen;
    product.descripcion = descripcion || product.descripcion;
    product.color = color || product.color;
    product.modelo = modelo || product.modelo;
    product.tipo = tipo || product.tipo;
    product.marca = marca || product.marca;
    product.material = material || product.material;
    product.garantia = garantia || product.garantia;
    product.capacidad_tamanio = capacidad_tamanio || product.capacidad_tamanio;
    product.categoria = categoria || product.categoria;
    product.save();

    return {
      original: productOriginal,
      actualizado: product
    }
  }

  async deleteDB(id){
    let product_model = await ProductModel.findOne({
      _id: id
    });

    const { deletedCount } = await ProductModel.deleteOne({
      _id: id
    });

    if(deletedCount <= 0)
      throw boom.notFound('El producto seleccionado no existe');

    return product_model;
  }
}

module.exports = ProductService;
