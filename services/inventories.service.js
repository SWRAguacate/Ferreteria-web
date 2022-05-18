const boom = require('@hapi/boom');
const inventoryModel = require('../models/inventory.model.js');

class InventorieService
{
  constructor() {}

  async findDB(limit, filter) {
    let inventoriesDB = await inventoryModel.find(filter);
    inventoriesDB = limit ? inventoriesDB.filter((item, index) => item && index < limit) : inventoriesDB;
    return inventoriesDB;
  }

  async findOneDB(id) {
    const inventory = await inventoryModel.findOne({
      _id: id
    });

    if(inventory == undefined || inventory == null)
     throw boom.notFound('Inventario no encontrado');
    else if (inventory.length <= 0)
     throw boom.notFound('Inventario no existente');

    return inventory;
  }

  async createDB(data) {
    const inventory_model = new inventoryModel(data);
    await inventory_model.save();
    return data;
  }

  async updateDB(id, changes) {
    let inventory = await inventoryModel.findOne({
      _id: id
    });
    let inventoryOriginal = {
      id_producto: inventory.id_producto,
      cantidad: inventory.cantidad
    };
    const { id_producto, cantidad } = changes;
    inventory.id_producto = id_producto || inventory.id_producto;
    inventory.cantidad = cantidad || inventory.cantidad;
    inventory.save();

    return {
      original: inventoryOriginal,
      actualizado: inventory
    }
  }

  async deleteDB(id){
    let inventory_model = await inventoryModel.findOne({
      _id: id
    });

    const { deletedCount } = await inventoryModel.deleteOne({
      _id: id
    });

    if(deletedCount <= 0)
      throw boom.notFound('El inventario seleccionado no existe');

    return inventory_model;
  }
}

module.exports = InventorieService;
