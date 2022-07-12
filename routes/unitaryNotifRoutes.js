const express = require('express');
const success = require('../utils/successResponse');

const router = express.Router();

router.get('/:id',
    async(req, res) => {
        const { id } = req.params;
        const notification = await service.getNotification(id);
        success(res, 200, 'notification', notification, 'wanted notification');
    }
);

router.get('/', //sub.id
    async(req, res) => {
        const { query } = req;
        const notifications = await service.getStudentNotifications(query);
        success(res, 200, 'notifications', notifications, 'wanted notifications');
    }
);

module.exports = router;