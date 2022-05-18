const boom = require('@hapi/boom');
const calificationModel = require('../models/calification.model.js');

class CalificationService
{
  constructor() {}

  async findDB(limit, filter) {
    let calificationDB = await calificationModel.find(filter);
    calificationDB = limit ? calificationDB.filter((item, index) => item && index < limit) : calificationDB;
    return calificationDB;
  }

  async findOneDB(id) {
    const calification = await calificationModel.findOne({
      _id: id
    });

    if(calification == undefined || calification == null)
     throw boom.notFound('Calificacion no encontrada');
    else if (calification.length <= 0)
     throw boom.notFound('Calificacion no existente');

    return calification;
  }

  async createDB(data) {
    const calification_model = new calificationModel(data);
    await calification_model.save();
    return data;
  }

  async updateDB(id, changes) {
    let calification = await calificationModel.findOne({
      _id: id
    });
    let calificationOriginal = {
      id_producto: calification.id_producto,
      id_usuario: calification.id_usuario,
      like_dislike: calification.like_dislike
    };
    const { id_producto, id_usuario, like_dislike } = changes;
    calification.id_producto = id_producto || calification.id_producto;
    calification.id_usuario = id_usuario || calification.id_usuario;
    calification.like_dislike = like_dislike || calification.like_dislike;
    calification.save();

    return {
      original: calificationOriginal,
      actualizado: calification
    }
  }

  async deleteDB(id){
    let calification_model = await calificationModel.findOne({
      _id: id
    });

    const { deletedCount } = await calificationModel.deleteOne({
      _id: id
    });

    if(deletedCount <= 0)
      throw boom.notFound('La calificacion seleccionada no existe');

    return calification_model;
  }
}

module.exports = CalificationService;
