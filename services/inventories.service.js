const faker = require('faker');
const boom = require('@hapi/boom');
const inventoryModel = require('../models/inventory.model.js');

class InventorieService
{
  constructor() {
    this.inventories = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.inventories.push({
      id_inventario: faker.datatype.uuid(),
      id_producto: faker.datatype.uuid(),
      cantidad: faker.datatype.number(),
    });
  }
  return this.inventories;
  }

  find(size){
    if(!this.inventories)
      throw boom.notFound('Inventarios no existentes');
    const inventory = this.inventories.filter((item, index) => item && index < size);
    if(!inventory)
      throw boom.notFound('Inventarios no disponibles');
    return inventory;
  }

  findOne(id){
    if(!this.inventories)
      throw boom.notFound('Inventarios no existentes');
    const product = this.inventories.find(item=> item.id_inventario === id);
    if(!product)
      throw boom.notFound('Inventario no encontrado');
    return product;
  }

  create(data){
    if(!data)
      throw boom.notFound('Data vacía');
    const newProduct = {
      id_inventario: faker.datatype.uuid(),
      ...data
    }
    this.inventories.push(newProduct);
    return newProduct;
  }

  update(id, changes){
    const index = this.inventories.findIndex(item => item.id_inventario === id);
    if(index === -1)
      throw boom.notFound('Inventario no encontrado');
    if(!changes)
      throw boom.notFound('Sin datos por cambiar');
    const currentUser = this.inventories[index];
    this.inventories[index] = {
      ...currentUser,
      ...changes
    }
    return {
      old: currentUser,
      changed: this.inventories[index]
    };
  }

  delete(id){
    const index = this.inventories.findIndex(item => item.id_inventario === id);
    if(index === -1)
      throw boom.notFound('Inventario no encontrado');
    const currentUser = this.inventories[index];
    this.inventories.splice(index, 1);
    return currentUser;
  }

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
    inventory.id_producto = id_producto;
    inventory.cantidad = cantidad;
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
