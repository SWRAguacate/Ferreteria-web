const boom = require('@hapi/boom');
const deliverieModel = require('../models/deliver.model.js');

class DeliverieService
{
  constructor() {}

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
    deliver.id_pedido = id_pedido || deliver.id_pedido;
    deliver.fecha = fecha || deliver.fecha;
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
