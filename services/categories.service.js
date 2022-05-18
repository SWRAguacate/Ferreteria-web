const boom = require('@hapi/boom');
const categoryModel = require('../models/category.model.js');

class categorieService
{
  constructor() {}

  async findDB(limit, filter) {
    let categoryDB = await categoryModel.find(filter);
    categoryDB = limit ? categoryDB.filter((item, index) => item && index < limit) : categoryDB;
    return categoryDB;
  }

  async findOneDB(id) {
    const category = await categoryModel.findOne({
      _id: id
    });

    if(category == undefined || category == null)
     throw boom.notFound('Categoria no encontrada');
    else if (category.length <= 0)
     throw boom.notFound('Categoria no existente');

    return category;
  }

  async createDB(data) {
    const category_model = new categoryModel(data);
    await category_model.save();
    return data;
  }

  async updateDB(id, changes) {
    let category = await categoryModel.findOne({
      _id: id
    });
    let categoryOriginal = {
      nombre: category.nombre
    };
    const { nombre } = changes;
    category.nombre = nombre || category.nombre;
    category.save();

    return {
      original: categoryOriginal,
      actualizado: category
    }
  }

  async deleteDB(id){
    let category_model = await categoryModel.findOne({
      _id: id
    });

    const { deletedCount } = await categoryModel.deleteOne({
      _id: id
    });

    if(deletedCount <= 0)
      throw boom.notFound('La categoria seleccionada no existe');

    return category_model;
  }
}

module.exports = categorieService;
