const faker = require('faker');
const boom = require('@hapi/boom');
const ProductModel = require('../models/product.model.js');

class ProductService
{
  constructor() {
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
      id_producto: faker.datatype.uuid(),
      nombre: faker.commerce.productName(),
      precio: parseInt(faker.commerce.price(), 10),
      imagen: faker.image.imageUrl(),
      descripcion: faker.commerce.productDescription(),
      color: faker.commerce.color(),
      modelo: faker.commerce.productAdjective(),
      tipo: faker.commerce.department(),
      marca: faker.commerce.product(),
      material: faker.commerce.productMaterial(),
      garantia: "1 año de garantia",
      capacidad_tamanio: "grande",
      categoria: faker.commerce.department()
    });
  }
  return this.products;
  }

  find(size){
    if(!this.products)
      throw boom.notFound('Productos no existentes');
    const product = this.products.filter((item, index) => item && index < size);
    if(!product)
      throw boom.notFound('Productos no disponibles');
    return product;
  }

  findOne(id){
    if(!this.products)
      throw boom.notFound('Productos no existentes');
    const product = this.products.find(item=> item.id_producto === id);
    if(!product)
      throw boom.notFound('Producto no encontrado');
    return product;
  }

  create(data){
    if(!data)
      throw boom.notFound('Data vacía');
    const newProduct = {
      id_producto: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  update(id, changes){
    const index = this.products.findIndex(item => item.id_producto === id);
    if(index === -1)
      throw boom.notFound('Producto no encontrado');
    if(!changes)
      throw boom.notFound('Sin datos por cambiar');
    const currentProduct = this.products[index];
    this.products[index] = {
      ...currentProduct,
      ...changes
    }
    return {
      old: currentProduct,
      changed: this.products[index]
    };
  }

  delete(id){
    const index = this.products.findIndex(item => item.id_producto === id);
    if(index === -1)
      throw boom.notFound('Producto no encontrado');
    const currentProduct = this.products[index];
    this.products.splice(index, 1);
    return currentProduct;
  }

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
    product.nombre = nombre;
    product.precio = precio;
    product.imagen = imagen;
    product.descripcion = descripcion;
    product.color = color;
    product.modelo = modelo;
    product.tipo = tipo;
    product.marca = marca;
    product.material = material;
    product.garantia = garantia;
    product.capacidad_tamanio = capacidad_tamanio;
    product.categoria = categoria;
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
