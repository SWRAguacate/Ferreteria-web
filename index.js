const express = require('express');
const routerApi = require('./routes');
const { errorHandler, logErrors, boomErrorHandler } = require('./middlewares/error.handler');
const db = require('./db');
const { DBCONNECTION } = require('./consts.json');
const app = express();
const port = 3000;

db(DBCONNECTION);

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Mi port ' +  port);
});
