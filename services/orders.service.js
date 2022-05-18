const boom = require('@hapi/boom');
const OrderModel = require('../models/order.model.js');

class OrderService
{
  constructor() {}

  async findDB(limit, filter) {
    let ordersDB = await OrderModel.find(filter);
    ordersDB = limit ? ordersDB.filter((item, index) => item && index < limit) : ordersDB;
    return ordersDB;
  }

  async findOneDB(id) {
    const order = await OrderModel.findOne({
      _id: id
    });

    if(order == undefined || order == null)
     throw boom.notFound('Pedido no encontrado');
    else if (order.length <= 0)
     throw boom.notFound('Pedido no existente');

    return order;
  }

  async createDB(data) {
    const order_model = new OrderModel(data);
    await order_model.save();
    return data;
  }

  async updateDB(id, changes) {
    let order = await OrderModel.findOne({
      _id: id
    });
    let orderOriginal = {
      id_usuario: order.id_usuario,
      fecha: order.fecha,
      total_pedido: order.total_pedido,
      codigo: order.codigo
    };
    const { id_usuario, fecha, total_pedido, codigo } = changes;
    order.id_usuario = id_usuario || order.id_usuario;
    order.fecha = fecha || order.fecha;
    order.total_pedido = total_pedido || order.total_pedido;
    order.codigo = codigo || order.codigo;
    order.save();

    return {
      original: orderOriginal,
      actualizado: order
    }
  }

  async deleteDB(id){
    let order_model = await OrderModel.findOne({
      _id: id
    });

    const { deletedCount } = await OrderModel.deleteOne({
      _id: id
    });

    if(deletedCount <= 0)
      throw boom.notFound('El Pedido seleccionado no existe');

    return order_model;
  }
}

module.exports = OrderService;
