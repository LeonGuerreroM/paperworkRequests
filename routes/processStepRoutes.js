const express = require('express');
const success = require('../utils/successResponse');

const router = express.Router();

    /**
     * @module ProcessStepRoutes
     */


    /**
    * @name getProcessStep
    * @path {GET} /api/v1/process-step/:id
    *
    * @header {String} Authorization Bearer token (Student)
    * 
    * @params {Number} id searched student-process relation id
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
    async (req, res) => {
        const { id } = req.params;
        const procedure = await service.getProcedure(id);
        success(res, 200, 'procedure', procedure, 'wanted procedure');
    }
);

//in case of get for all student open processes use sub.id
//? crete a functionality to see te step on each process?

    /**
   * @name createProcess
   * @path {POST} /api/v1/process-step/open-process
   * 
   * @header {String} Authorization Bearer token (Student)
   *
   * @body {Number} step current process step
   *
   * @response {Object} object.data created element data
   *
   * @code {200} element created
   * @code {401} unmatched privileges or token absence
   * @code {400} wrong body parameters
   * @code {500} internal errors with the request
   *
   */
router.post('/open-process',
    async (req, res) => {
        const { body } = req;
        const newProcedure = await service.createProcedure(body);
        success(res, 201, 'newProcedure', newProcedure, 'created procedure');
    }
);



    /**
   * @name updatePost
   * @path {PATCH} /api/v1/process-step/
   *
   * @header {String} Authorization Bearer token (Student)
   *
   * @params {Number} id searched student-process relation id
   * 
   * @body {Number} [step] current process step
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
    async (req, res) => {
        const { body } = req;
        const { id } = req.params;
        const updatedProcedure = await service.updateProcedure(id, body);
        success(res, 200, 'updatedProcedure', updatedProcedure, 'updated procedure');
    }
);

module.exports = router;