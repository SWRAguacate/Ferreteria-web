const faker = require('faker');
const boom = require('@hapi/boom');
const deliverieModel = require('../models/deliver.model.js');

class DeliverieService
{
  constructor() {
    this.deliveries = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.deliveries.push({
      id_entrega: faker.datatype.uuid(),
      id_pedido: faker.datatype.uuid(),
      fecha: faker.date.past()
    });
  }
  return this.deliveries;
  }

  find(size){
    if(!this.deliveries)
      throw boom.notFound('Entregas no existentes');
    const deliver = this.deliveries.filter((item, index) => item && index < size);
    if(!deliver)
      throw boom.notFound('Sin entregas disponibles');
    return deliver;
  }

  findOne(id){
    if(!this.deliveries)
      throw boom.notFound('Entregas no existentes');
    const product = this.deliveries.find(item=> item.id_entrega === id);
    if(!product)
      throw boom.notFound('Entrega no encontrada');
    return product;
  }

  create(data){
    if(!data)
      throw boom.notFound('Data vacía');
    const newProduct = {
      id_entrega: faker.datatype.uuid(),
      ...data
    }
    this.deliveries.push(newProduct);
    return newProduct;
  }

  update(id, changes){
    const index = this.deliveries.findIndex(item => item.id_entrega === id);
    if(index === -1)
      throw boom.notFound('Entrega no encontrada');
    if(!changes)
      throw boom.notFound('Sin datos por cambiar');
    const currentUser = this.deliveries[index];
    this.deliveries[index] = {
      ...currentUser,
      ...changes
    }
    return {
      old: currentUser,
      changed: this.deliveries[index]
    };
  }

  delete(id){
    const index = this.deliveries.findIndex(item => item.id_entrega === id);
    if(index === -1)
      throw boom.notFound('Entrega no encontrada');
    const currentUser = this.deliveries[index];
    this.deliveries.splice(index, 1);
    return currentUser;
  }

  async findDB(limit, filter) {
    let deliverDB = await deliverieModel.find(filter);
    deliverDB = limit ? deliverDB.filter((item, index) => item && index < limit) : deliverDB;
    return deliverDB;
  }

  async findOneDB(id) {
    const deliver = await deliverieModel.findOne({
      _id: id
    });

    if(deliver == undefined || deliver == null)
     throw boom.notFound('Entrega no encontrada');
    else if (deliver.length <= 0)
     throw boom.notFound('Entrega no existente');

    return deliver;
  }

  async createDB(data) {
    const deliver_model = new deliverieModel(data);
    await deliver_model.save();
    return data;
  }

  async updateDB(id, changes) {
    let deliver = await deliverieModel.findOne({
      _id: id
    });
    let deliverOriginal = {
      id_pedido: deliver.id_pedido,
      fecha: deliver.fecha
    };
    const { id_pedido, fecha } = changes;
    deliver.id_pedido = id_pedido;
    deliver.fecha = fecha;
    deliver.save();

    return {
      original: deliverOriginal,
      actualizado: deliver
    }
  }

  async deleteDB(id){
    let deliver_model = await deliverieModel.findOne({
      _id: id
    });

    const { deletedCount } = await deliverieModel.deleteOne({
      _id: id
    });

    if(deletedCount <= 0)
      throw boom.notFound('La entrega seleccionada no existe');

    return deliver_model;
  }
}

module.exports = DeliverieService;
