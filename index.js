const express = require('express');
const config = require('./config');

const generalRoutes = require('./routes');
const { logErrors, ormErrorHandler, boomErrorHandler, generalErrorHandler } = require('./utils/middlewares/errorHandlers');

const app = express();

app.use(express.json());

generalRoutes(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(generalErrorHandler);

app.listen(config.port, () => {
    console.log('listening on port ' + config.port);
});