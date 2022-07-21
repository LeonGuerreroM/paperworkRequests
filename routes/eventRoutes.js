const express = require('express');
const success = require('../utils/successResponse');

const router = express.Router();

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
        const events = await service.getEvents();
        success(res, 200, 'events', events, 'events list');
    }
);



    /**
    * @name getEvent
    * @path {GET} /api/v1/events/calendar/:idEvent
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
router.get('calendar/:idEvent', 
    async (res, req) => {
        const { idEvent } = req.params;
        const event = await service.getPost(idEvent);
        success(res, 200, 'event', event, 'wanted event');
    }
)



    /**
   * @name createEvent
   * @path {POST} /api/v1/events/create-event
   *
   * @body {String} name event name
   * @body {Number} startYear event start year 
   * @body {Number} startMonth event start month
   * @body {Number} startDay event start month
   * @body {String} firstName student's first name
   * @body {String} lastName1 first student's last name
   * @body {String} lastName2 second student's last name
   * @body {String} password
   * @body {Number} idMajor student's major id
   * @body {Number} idAcademicStatus student's Academic Status id
   * @body {Number} idStatus student's status at the platform id
   * @body {String} image user profile picture
   *
   * @response {Object} object.data created element data
   *
   * @code {200} element created
   * @code {401} unmatched privileges or token absence
   * @code {400} wrong body parameters
   * @code {500} internal errors with the request
   *
   */
router.post('/create-event', 
    async (req, res) => {
        const { body } = req;
        const newEvent = await service.createEvent(body);
        success(res, 201, 'newEvent', newEvent, 'event created')
    }
);



    
router.patch('/:id', 
    async (req, res) => {
        const { id } = req.params;
        const { body } =  req;
        const updatedEvent = await service.updateEvent(id, body);
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
        const deletedEventStatus = await service.deleteEvent(idEvent);
        success(res, 200, 'result', deletedEventStatus, 'event deleted');
    }
);



module.exports = router;