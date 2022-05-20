const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  nombre: String,
  precio: Number,
  imagen: String,
  descripcion: String,
  color: String,
  modelo: String,
  tipo: String,
  marca: String,
  material: String,
  garantia: String,
  capacidad_tamanio: String,
  categoria: Array,
  cantidad: Number
});

const model = mongoose.model('producto', productSchema);
module.exports = model
