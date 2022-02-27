const faker = require('faker');
const boom = require('@hapi/boom');

class categorieService
{
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
      id_categoria: faker.datatype.uuid(),
      nombre: faker.name.findName()
    });
  }
  return this.categories;
  }

  find(size){
    if(!this.categories)
      throw boom.notFound('Categorias no existentes');
    const category = this.categories.filter((item, index) => item && index < size);
    if(!category)
      throw boom.notFound('Sin categorias disponibles');
    return category;
  }

  findOne(id){
    if(!this.categories)
      throw boom.notFound('Carritos no existentes');
    const product = this.categories.find(item=> item.id_categoria === id);
    if(!product)
      throw boom.notFound('Categoria no encontrada');
    return product;
  }

  create(data){
    if(!data)
      throw boom.notFound('Data vacía');
    const newProduct = {
      id_categoria: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newProduct);
    return newProduct;
  }

  update(id, changes){
    const index = this.categories.findIndex(item => item.id_categoria === id);
    if(index === -1)
      throw boom.notFound('Categoria no encontrada');
    if(!changes)
      throw boom.notFound('Sin datos por cambiar');
    const currentUser = this.categories[index];
    this.categories[index] = {
      ...currentUser,
      ...changes
    }
    return {
      old: currentUser,
      changed: this.categories[index]
    };
  }

  delete(id){
    const index = this.categories.findIndex(item => item.id_categoria === id);
    if(index === -1)
      throw boom.notFound('Categoria no encontrada');
    const currentUser = this.categories[index];
    this.categories.splice(index, 1);
    return currentUser;
  }
}

module.exports = categorieService;
