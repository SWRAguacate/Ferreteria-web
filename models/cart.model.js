const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carritoSchema = new Schema({
  id_usuario: String,
  id_producto: String,
  cantidad: Number,
  total_producto: Number
});

const model = mongoose.model('carrito', carritoSchema);
module.exports = model
