const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expirationSchema = new Schema({
  id_pedido: String,
  fecha: Date
});

const model = mongoose.model('expiracion', expirationSchema);
module.exports = model
