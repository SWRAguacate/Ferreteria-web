const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverSchema = new Schema({
  id_pedido: String,
  cantidad: Number
});

const model = mongoose.model('entrega', deliverSchema);
module.exports = model
