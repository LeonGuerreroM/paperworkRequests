const express = require('express');
const config = require('./config');

const generalRoutes = require('./routes');

const app = express();

generalRoutes(app);

app.listen(config.port, () => {
    console.log('listening on port ' + config.port);
});