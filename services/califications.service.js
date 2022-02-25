const faker = require('faker');
const boom = require('@hapi/boom');

class CalificationService
{
  constructor() {
    this.califications = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.califications.push({
      id_calificacion: faker.datatype.uuid(),
      id_producto: faker.datatype.uuid(),
      id_usuario: faker.datatype.uuid(),
      like_dislike: faker.datatype.boolean()
    });
  }
  return this.califications;
  }

  find(size){
    return this.califications.filter((item, index) => item && index < size);
  }

  findOne(id){
    const product = this.califications.find(item=> item.id_calificacion === id);
    if(!product)
      throw boom.notFound('Calificacion no encontrada');
    return product;
  }

  create(data){
    const newProduct = {
      id_calificacion: faker.datatype.uuid(),
      ...data
    }
    this.califications.push(newProduct);
    return newProduct;
  }

  update(id, changes){
    const index = this.califications.findIndex(item => item.id_calificacion === id);
    if(index === -1)
      throw boom.notFound('Calificacion no encontrada');
    const currentUser = this.califications[index];
    this.califications[index] = {
      ...currentUser,
      ...changes
    }
    return {
      old: currentUser,
      changed: this.califications[index]
    };
  }

  delete(id){
    const index = this.califications.findIndex(item => item.id_calificacion === id);
    if(index === -1)
      throw boom.notFound('Calificacion no encontrada');
    const currentUser = this.califications[index];
    this.califications.splice(index, 1);
    return currentUser;
  }
}

module.exports = CalificationService;
