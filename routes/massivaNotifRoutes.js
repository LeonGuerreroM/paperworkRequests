const express = require('express');
const success = require('../utils/successResponse');

const router = express.Router();

    /**
     * @module MassiveNotificationsRoutes
     */

    /**
     * @name getMassiveNotification
     * @path {GET} /api/v1/massive-notifications/:id
     * 
     * @header {String} Authorization Bearer token (Student)
     * 
     * @params {Number} id searched notification id
     * 
     * @response {Object} requested element
     *
     * @code {200} correct element return
     * @code {401} in case of unmatched privileges or token absence
     * @code {404} in case of not founded element
     * @code {500} in case of internal errors with the request
     * 
     */
router.get('/:id', 
    async(req, res) => {
        const { id } = req.params;
        const notification = await service.getNotification(id);
        success(res, 200, 'notification', notification, 'wanted notification');
    }
);



    /**
     * @name getStudentMassiveNotifications
     * @path {GET} /api/v1/massive-notifications/my-notifications
     * 
     * @header {String} Authorization Bearer token (Student)
     * 
     * @response {Object} every registered element
     * 
     * @code {200} elements list returned
     * @code {400} wrong body parameters
     * @code {500} internal errors with the request
     */
router.get('/my-notifications', //sub.id
    async(req, res) => {
        //TODO use sub.id
        const { query } = req;
        const notifications = await service.getStudentNotifications(query);
        success(res, 200, 'notifications', notifications, 'wanted notifications');
    }
);

module.exports = router;