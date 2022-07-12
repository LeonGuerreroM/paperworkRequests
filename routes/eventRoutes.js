const express = require('express');
const success = require('../utils/successResponse');

const router = express.Router();

    /** 
    * @module EventsRoutes
    */

    /**
    * @Function getEvents
    * 
    * @returns {object} Events List
    */
router.get('/calendar', 
    async (req, res) => {
        const events = await service.getEvents();
        success(res, 200, 'events', events, 'events list');
    }
);



/**
    * @Function getEvent
    * @param {number} id wanted event id
    * 
    * @returns {object} wanted event
    */
router.get('/:id', 
    async (res, req) => {
        const { id } = req.params;
        const event = await service.getPost(id);
        success(res, 200, 'event', event, 'wanted event');
    }
)



    /**
     * @Function createEvent
     * @param {date} date event date
     * @param {string} eventName event name
     * @param {number} idArea area publishing the event
     * @param {string} startTime event starting time 
     * @param {string} endTime event ending time 
     * 
     * @returns {object} created event
     */
router.post('/calendar/create-event', 
    async (req, res) => {
        const { body } = req;
        const newEvent = await service.createEvent(body);
        success(res, 201, 'newEvent', newEvent, 'event created')
    }
);



    /**
     * @Function updateEvent
     * @param {date} date event date
     * @param {string} eventName event name
     * @param {number} idArea area publishing the event
     * @param {string} startTime event starting time 
     * @param {string} endTime event ending time 
     * 
     * @returns {object} updated event
     */
router.patch('/:id', 
    async (req, res) => {
        const { id } = req.params;
        const { body } =  req;
        const updatedEvent = await service.updateEvent(id, body);
        success(res, 200, 'updatedEvent', updatedEvent, 'event updated');
    }
);

    /**
     * @Function deleteEvent
     * @param {number} id event's id
     * 
     * @returns {boolean} indicates successful deletion
     */

router.delete('/:id', 
    async (req, res) => {
        const { id } = req.params;
        const deletedEventStatus = await service.deleteEvent(id);
        success(res, 200, 'result', deletedEventStatus, 'event deleted');
    }
);



module.exports = router;