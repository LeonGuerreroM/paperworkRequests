const express = require('express');
const studentRouter = require('./studentRoutes');
const employeeRouter = require('./employeeRoutes');
const postRouter = require('./postRoutes');
const eventRouter = require('./eventRoutes');
const unitaryNotifRouter = require('./unitaryNotifRoutes');
const massiveNotifRouter = require('./massiveNotifRoutes');
const processStepRouter = require('./processStepRoutes');
const dischargeDocsRouter = require('./dischargeDocsRoutes');
const dictamenDocsRouter = require('./dictamenDocsRoutes');
const graduationDocsRouter = require('./graduationDocsRoutes');
const ssDocsRouter = require('./ssDocsRoutes');

const router = express.Router();
const docsRouter = express.Router();

function generalRoutes(app){
    app.use('/api/v1', router);
    router.use('/students', studentRouter);
    router.use('/employees', employeeRouter);
    router.use('/posts', postRouter);
    router.use('/event', eventRouter);
    router.use('/unitary-notifications', unitaryNotifRouter);
    router.use('/massive-notifications', massiveNotifRouter);
    router.use('/process-step', processStepRouter);
    router.use('/docs', docsRouter);
        docsRouter.use('/discharge', dischargeDocsRouter);
        docsRouter.use('/dictamen', dictamenDocsRouter);
        docsRouter.use('/graduation', graduationDocsRouter);
        docsRouter.use('/ss', ssDocsRouter);

};

module.exports = generalRoutes;

