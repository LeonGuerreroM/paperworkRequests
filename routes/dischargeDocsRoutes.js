const express = require('express');
const success = require('../utils/successResponse'); //eslint-disable-line

const router = express.Router();

    /**
     * @module DischargeProcedureRoutes
     */

    /**
     * @name getDischargeProcedure
     * @path {GET} /api/v1/docs/discharge/student-procedure
     * 
     * @header {String} Authorization Bearer token (Student)
     * 
     * @response {Object} requested element
     * 
     * @code {200} correct element return
     * @code {401} in case of unmatched privileges or token absence
     * @code {404} in case of not founded element
     * @code {500} in case of internal errors with the request 
     * 
     */
router.get('/student-procedure',
    async(req, res) => {
        //TODO use sub.id
        const procedure = await service.getProcedure(id);
        success(res, 200, 'procedure', procedure, 'wanted procedure');
    }
);



    /**
   * @name createDischargeProcedure
   * @path {POST} /api/v1/docs/discharge/start-procedure
   * 
   * @header {String} Authorization Bearer token (Student)
   * 
   * @response {Object} object.data created element data
   *
   * @code {200} element created
   * @code {401} unmatched privileges or token absence
   * @code {400} wrong body parameters
   * @code {500} internal errors with the request
   *
   */
router.post('/start-procedure',
    async(req, res) => {
        //TODO use sub.id
        const newProcedure = await service.createProcedure(body);
        success(res, 201, 'newProcedure', newProcedure, 'created procedure');
    }
);



    /**
   * @name updateDischargeProcedure
   * @path {PATCH} /api/v1/docs/discharge
   *
   * @header {String} Authorization Bearer token (Student)
   *
   * @body {Boolean} [doc1] doc1 status
   * @body {Boolean} [doc2] doc2 status
   * @body {Boolean} [doc3] doc3 status
   *  
   * @response {Object} object.data updated element data
   *
   * @code {200} element updated
   * @code {401} unmatched privileges or token absence
   * @code {400} wrong body parameters
   * @code {404} not founded user
   * @code {500} internal errors with the request
   *
   */
router.patch('/',
    async(req, res) => {
        //TODO use sub.id to update student student register
        const { body } = req;
        const updatedProcedure = await service.updateProcedure(id, body);
        success(res, 200, 'updatedProcedure', updatedProcedure, 'updated procedure');
    }
);



    /**
   * @name deleteDischargeProcedure
   * @path {DELETE} /api/v1/docs/discharge/restart-procedure
   *
   * @header {String} Authorization Bearer token (Student)
   *
   * @response {Boolean} object.confirmation done deletion boolean confirmation
   *
   * @code {200} in case of element deleted
   * @code {401} in case of unmatched privileges or token absence
   * @code {404} in case of not founded element
   * @code {500} in case of internal errors with the request
   *
   */
router.delete('/restart-procedure',
    async(req, res) => {
        //TODO use sub.id
        const deletedProcedure = await service.deleteProcedure(sub.id);
        success(res, 200, 'deletedProcedure', deletedProcedure, 'deletedProcedure');
    }
);

module.exports = router;