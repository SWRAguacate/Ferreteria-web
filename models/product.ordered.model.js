const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productOrderedSchema = new Schema({
  id_pedido: String,
  id_producto: String,
  cantidad: Number,
  total_producto: Number
});

const model = mongoose.model('producto_pedido', productOrderedSchema);
module.exports = model
