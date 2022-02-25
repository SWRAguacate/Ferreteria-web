const express = require('express');
const usersRouter = require('./users.router');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const ordersRouter = require('./orders.router');
const productsOrderedRouter = require('./products.ordered.router');
const cartsRouter = require('./carts.router');
const deliveriesRouter = require('./deliveries.router');
const expirationsRouter = require('./expirations.router');
const inventoriesRouter = require('./inventories.router');
const calificationsRouter = require('./califications.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', usersRouter);
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
    router.use('/orders', ordersRouter);
    router.use('/products_ordered', productsOrderedRouter);
    router.use('/carts', cartsRouter);
    router.use('/deliveries', deliveriesRouter);
    router.use('/expirations', expirationsRouter);
    router.use('/inventories', inventoriesRouter);
    router.use('/califications', calificationsRouter);
}

module.exports = routerApi;
