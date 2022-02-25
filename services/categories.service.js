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
      name: faker.name.findName(),
      mail: faker.internet.email(),
      password: faker.internet.password()
    });
  }
  return this.categories;
  }

  find(size){
    return this.categories.filter((item, index) => item && index < size);
  }

  findOne(id){
    const product = this.categories.find(item=> item.id_categoria === id);
    if(!product)
      throw boom.notFound('Categoria no encontrada');
    return product;
  }

  create(data){
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
