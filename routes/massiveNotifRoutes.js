const express = require('express');
const success = require('../utils/successResponse');

const Service = require('../services/massiveNotifServices');
const service = new Service();

const router = express.Router();

    /**
     * @module MassiveNotificationsRoutes
     */

    /**
     * @name getStudentMassiveNotifications
     * @path {GET} /api/v1/massive-notifications/my-notifications
     * 
     * @header {String} Authorization Bearer token (Student)
     * 
     * @response {Object} every correspondent registered element
     * 
     * @code {200} elements list returned
     * @code {400} wrong body parameters
     * @code {500} internal errors with the request
     */
router.get('/my-notifications', //sub.id
    async(req, res, next) => {
        try{
            //TODO use sub.id
            //? define query stuff
            //const { query } = req;
            const notifications = await service.getStudentNotifications(3);
            success(res, 200, 'notifications', notifications, 'wanted notifications');
        }catch(error){
            next(error);
        }
    }
);

    
    /**
     * @name getMassiveNotification
     * @path {GET} /api/v1/massive-notifications/single/:id
     * 
     * @header {String} Authorization Bearer token (Student)
     * 
     * @params {Number} notificationId searched massive notification id
     * 
     * @response {Object} requested element
     *
     * @code {200} correct element return
     * @code {401} in case of unmatched privileges or token absence
     * @code {404} in case of not founded element
     * @code {500} in case of internal errors with the request
     * 
     */
router.get('/single/:notificationId', 
    async(req, res, next) => {
        try{
            const { notificationId } = req.params;
            const notification = await service.get(notificationId);
            success(res, 200, 'notification', notification, 'wanted notification');
        }catch(error){
            next(error);
        }
    }
);




module.exports = router;