const faker = require('faker');
const boom = require('@hapi/boom');

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
}

module.exports = ProductService;
