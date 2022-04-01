const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calificationSchema = new Schema({
  id_producto: String,
  id_usuario: String,
  like_dislike: Boolean
});

const model = mongoose.model('calificacion', calificationSchema);
module.exports = model
