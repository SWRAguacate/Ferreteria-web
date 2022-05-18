const boom = require('@hapi/boom');
const expirationModel = require('../models/expiration.model.js');

class ExpirationService
{
  constructor() {}

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
    expiration.id_pedido = id_pedido || expiration.id_pedido;
    expiration.fecha = fecha || expiration.fecha;
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
