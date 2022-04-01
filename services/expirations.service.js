const faker = require('faker');
const boom = require('@hapi/boom');
const expirationModel = require('../models/expiration.model.js');

class ExpirationService
{
  constructor() {
    this.expirations = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.expirations.push({
      id_expiracion: faker.datatype.uuid(),
      id_pedido: faker.datatype.uuid(),
      fecha: faker.date.future(),
    });
  }
  return this.expirations;
  }

  find(size){
    if(!this.expirations)
      throw boom.notFound('Expiraciones no existentes');
    const expiration = this.expirations.filter((item, index) => item && index < size);
    if(!expiration)
      throw boom.notFound('Expiraciones no disponibles');
    return expiration;
  }

  findOne(id){
    if(!this.expirations)
      throw boom.notFound('Expiraciones no existentes');
    const product = this.expirations.find(item=> item.id_expiracion === id);
    if(!product)
      throw boom.notFound('Expiracion no encontrada');
    return product;
  }

  create(data){
    if(!data)
      throw boom.notFound('Data vacía');
    const newProduct = {
      id_expiracion: faker.datatype.uuid(),
      ...data
    }
    this.expirations.push(newProduct);
    return newProduct;
  }

  update(id, changes){
    const index = this.expirations.findIndex(item => item.id_expiracion === id);
    if(index === -1)
      throw boom.notFound('Expiracion no encontrada');
    if(!changes)
      throw boom.notFound('Sin datos por cambiar');
    const currentUser = this.expirations[index];
    this.expirations[index] = {
      ...currentUser,
      ...changes
    }
    return {
      old: currentUser,
      changed: this.expirations[index]
    };
  }

  delete(id){
    const index = this.expirations.findIndex(item => item.id_expiracion === id);
    if(index === -1)
      throw boom.notFound('Expiracion no encontrada');
    const currentUser = this.expirations[index];
    this.expirations.splice(index, 1);
    return currentUser;
  }

  async findDB(limit, filter) {
    let expirationDB = await expirationModel.find(filter);
    expirationDB = limit ? expirationDB.filter((item, index) => item && index < limit) : expirationDB;
    return expirationDB;
  }

  async findOneDB(id) {
    const expiration = await expirationModel.findOne({
      _id: id
    });

    if(expiration == undefined || expiration == null)
     throw boom.notFound('Expiracion no encontrada');
    else if (expiration.length <= 0)
     throw boom.notFound('Expiracion no existente');

    return expiration;
  }

  async createDB(data) {
    const expiration_model = new expirationModel(data);
    await expiration_model.save();
    return data;
  }

  async updateDB(id, changes) {
    let expiration = await expirationModel.findOne({
      _id: id
    });
    let expirationOriginal = {
      id_pedido: expiration.id_pedido,
      fecha: expiration.fecha
    };
    const { id_pedido, fecha } = changes;
    expiration.id_pedido = id_pedido;
    expiration.fecha = fecha;
    expiration.save();

    return {
      original: expirationOriginal,
      actualizado: expiration
    }
  }

  async deleteDB(id){
    let expiration_model = await expirationModel.findOne({
      _id: id
    });

    const { deletedCount } = await expirationModel.deleteOne({
      _id: id
    });

    if(deletedCount <= 0)
      throw boom.notFound('La expiracion seleccionada no existe');

    return expiration_model;
  }
}

module.exports = ExpirationService;
