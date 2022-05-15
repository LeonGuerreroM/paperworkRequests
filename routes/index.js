const express = require('express');
const studentRouter = require('./studentRoutes');
const employeeRouter = require('./employeeRoutes');
const postRouter = require('./postRoutes');
const eventRouter = require('./eventRoutes');

const router = express.Router();

function generalRoutes(app){
    app.use('/api/v1', router);
    router.use('/students', studentRouter);
    router.use('/employees', employeeRouter);
    router.use('/posts', postRouter);
    router.use('/event', eventRouter);

};

module.exports = generalRoutes;

