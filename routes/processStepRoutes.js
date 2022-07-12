const express = require('express');
const success = require('../utils/successResponse');

const router = express.Router();

router.get('/:id',
    async (req, res) => {
        const { id } = req.params;
        const procedure = await service.getProcedure(id);
        success(res, 200, 'procedure', procedure, 'wanted procedure');
    }
);

//in case of get for all student open processes use sub.id

router.post('/',
    async (req, res) => {
        const { body } = req;
        const newProcedure = await service.createProcedure(body);
        success(res, 201, 'newProcedure', newProcedure, 'created procedure');
    }
);

router.patch('/',
    async (req, res) => {
        const { body } = req;
        const { id } = req.params;
        const updatedProcedure = await service.updateProcedure(id, body);
        success(res, 200, 'updatedProcedure', updatedProcedure, 'updated procedure');
    }
);

module.exports = router;