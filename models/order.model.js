const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  id_usuario: String,
  fecha: Date,
  total_pedido: Number,
  codigo: Number,
  productos: Array
});

const model = mongoose.model('pedido', orderSchema);
module.exports = model
