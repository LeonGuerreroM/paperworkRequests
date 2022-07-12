const express = require('express');
const success = require('../utils/successResponse'); //eslint-disable-line

const router = express.Router();

router.get('student-file/:id', //by sub.id
    async(req, res) => { //by sub.id
        const { id } = req.params;
        const procedure = await service.getProcedure(id);
        success(res, 200, 'procedure', procedure, 'wanted procedure');
    }
);

router.post('/',
    async(req, res) => {
        const { body } = req;
        const newProcedure = await service.createProcedure(body);
        success(res, 201, 'newProcedure', newProcedure, 'created procedure');
    }
);

router.patch('/',
    async(req, res) => {
        const { id } = req.params;
        const { body } = req;
        const updatedProcedure = await service.updateProcedure(id, body);
        success(res, 200, 'updatedProcedure', updatedProcedure, 'updated procedure');
    }
);

module.exports = router;