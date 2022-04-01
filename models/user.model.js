const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre: String,
  correo: String,
  contrasenia: String
});

const model = mongoose.model('usuario', userSchema);
module.exports = model
