const express = require('express');
const config = require('./config');

const generalRoutes = require('./routes');

const app = express();

app.use(express.json());

generalRoutes(app);

app.listen(config.port, () => {
    console.log('listening on port ' + config.port);
});