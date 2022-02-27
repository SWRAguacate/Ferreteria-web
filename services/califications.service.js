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
    if(!this.califications)
      throw boom.notFound('Calificaciones no existentes');
    const calification = this.califications.filter((item, index) => item && index < size);
    if(!calification)
      throw boom.notFound('Sin calificaciones disponibles');
    return calification;
  }

  findOne(id){
    if(!this.califications)
      throw boom.notFound('Calificaciones no existentes');
    const calification = this.califications.find(item=> item.id_calificacion === id);
    if(!calification)
      throw boom.notFound('Calificacion no encontrada');
    return calification;
  }

  create(data){
    if(!data)
      throw boom.notFound('Sin datos por crear');
    const newCalification = {
      id_calificacion: faker.datatype.uuid(),
      ...data
    }
    this.califications.push(newCalification);
    return newCalification;
  }

  update(id, changes){
    const index = this.califications.findIndex(item => item.id_calificacion === id);
    if(index === -1)
      throw boom.notFound('Calificacion no encontrada');
    if(!changes)
      throw boom.notFound('Sin datos por cambiar');

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
