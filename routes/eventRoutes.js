const express = require('express');
const success = require('../utils/successResponse');

const router = express.Router();

const Service = require('../services/eventServices');
const service = new Service();

    /** 
    * @module EventsRoutes
    */

    /**
     * @name getEvents
     * @path {GET} /api/v1/events/calendar
     * 
     * @header {String} Authorization Bearer token (Student, Employee)
     * 
     * @response {Object} every registered element
     * 
     * @code {200} elements list returned
     * @code {400} wrong body parameters
     * @code {500} internal errors with the request
     */
router.get('/calendar', 
    async (req, res) => {
        const events = await service.getAll();
        success(res, 200, 'events', events, 'events list');
    }
);


    /**
    * @name getEvent
    * @path {GET} /api/v1/events/calendar/:idEvent
    *
    * @header {String} Authorization Bearer token (Student, Employee)
    * 
    * @params {Number} idEvent searched event id
    * 
    * @header {String} Authorization Bearer token (StudentEmployee)
    *
    * @response {Object} requested element
    *
    * @code {200} correct element return
    * @code {401} in case of unmatched privileges or token absence
    * @code {404} in case of not founded element
    * @code {500} in case of internal errors with the request
    *
    */
router.get('/calendar/:idEvent', 
    async (req, res) => {
        const { idEvent } = req.params;
        const event = await service.get(idEvent);
        success(res, 200, 'event', event, 'wanted event');
    }
)


    /**
   * @name createEvent
   * @path {POST} /api/v1/events/create-event
   *
   * @header {String} Authorization Bearer token (Employee)
   * 
   * @body {String} name event name
   * @body {Date} startDateTime event starting moment
   * @body {Date} endDateTime  event ending moment
   * @body {Number} idArea event area 
   *
   * @response {Object} object.data created element data
   *
   * @code {200} element created
   * @code {401} unmatched privileges or token absence
   * @code {400} wrong body parameters
   * @code {500} internal errors with the request
   *
   */
router.post('/create', 
    async (req, res) => {
        const body  = req.body;
        //todo verify datetime time zone and sequelize.now
        const newEvent = await service.create(body);
        success(res, 201, 'newEvent', newEvent, 'event created')
    }
);


    /**
   * @name updateEvent
   * @path {PATCH} /api/v1/events/:idEvent
   *
   * @header {String} Authorization Bearer token (Employee)
   *
   * @body {String} name event name
   * @body {Date} startDateTime event starting moment
   * @body {Date} endDateTime  event ending moment
   * @body {Number} idArea event area
   * 
   * @response {Object} object.data updated element data
   *
   * @code {200} element updated
   * @code {401} unmatched privileges or token absence
   * @code {400} wrong body parameters
   * @code {404} not founded element
   * @code {500} internal errors with the request
   *
   */
router.patch('/:idEvent', 
    async (req, res) => {
        const { idEvent } = req.params;
        const body =  req.body;
        const updatedEvent = await service.update(idEvent, body);
        success(res, 200, 'updatedEvent', updatedEvent, 'event updated');
    }
);


    /**
   * @name deleteEvent
   * @path {DELETE} /api/v1/events/:idEmployee
   *
   * @header {String} Authorization Bearer token (Employee)
   *
   * @params {Number} idEvent searched event id
   *
   * @response {Boolean} object.confirmation done deletion boolean confirmation
   *
   * @code {200} in case of element deleted
   * @code {401} in case of unmatched privileges or token absence
   * @code {404} in case of not founded element
   * @code {500} in case of internal errors with the request
   *
   */
router.delete('/:idEvent', 
    async (req, res) => {
        const { idEvent } = req.params;
        const deletedEventStatus = await service.delete(idEvent);
        success(res, 200, 'result', deletedEventStatus, 'event deleted');
    }
);


module.exports = router;