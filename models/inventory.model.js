const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  id_producto: String,
  cantidad: Number
});

const model = mongoose.model('inventario', inventorySchema);
module.exports = model
