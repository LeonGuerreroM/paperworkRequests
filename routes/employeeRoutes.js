const express = require('express');
const success = require('../utils/successResponse');

const router = express.Routes();

    /** 
    * @module EmployeesRoutes
    */

    /**
    * @Function getEmployees
    * 
    * @returns {object} Employees List
    */
router.get('/', 
    async (req, res) => {
        const employees = await service.getEmployees();
        success(res, 200, 'employees', employees, 'employees list');
    }
);



    /**
     * @Function createEmployee
     * @param {number} employeeNumber labour id
     * @param {number} idRol employee's department id
     * @param {string} email labor email
     * @param {string} password
     * file: image
     * @returns {object} created employee
     */
router.post('/createEmployee', 
    async (req, res) => {
        const { body } = req;
        const newEmployee = await service.createEmployee(body);
        success(res, 201, 'newEmployee', newEmployee, 'employee created')
    }
);



    /**
     * @Function updateEmployee
     * @param {number} employeeNumber labour id
     * @param {number} idRol employee's department id
     * @param {string} email labor email
     * @param {string} password
     * file: image
     * @returns {object} updated employee
     */
router.patch('/info/:id', 
    async (req, res) => {
        const { id } = req.params;
        const { body } =  req;
        const updatedEmployee = await service.updateEmployee(id, body);
        success(res, 200, 'updatedEmployee', updatedEmployee, 'employee updated');
    }
);

    /**
     * @Function deleteEmployee
     * @param {number} id employee's id
     * 
     * @returns {boolean} indicates if the elimination was successful
     */

router.delete('/:id', 
    async (req, res) => {
        const { id } = req.params;
        const deletedEmployeeStatus = await service.deleteEmployee(id);
        success(res, 200, 'result', deletedEmployeeStatus, 'employee deleted');
    }
);



module.exports = router;