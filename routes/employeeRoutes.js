const express = require('express');
const success = require('../utils/successResponse');

const Service = require('../services/employeeServices');
const service = new Service();

const router = express.Router();

    /** 
    * @module EmployeesRoutes
    */

    /**
     * @name getEmployees
     * @path {GET} /api/v1/employees/
     * 
     * @header {String} Authorization Bearer token (Admin)
     * 
     * @response {Object} every registered element
     * 
     * @code {200} elements list returned
     * @code {400} wrong body parameters
     * @code {500} internal errors with the request
     */
router.get('/', 
    async (req, res) => {
        const employees = await service.getEmployees();
        success(res, 200, 'employees', employees, 'employees list');
    }
);


    /**
    * @name getEmployee Search an employee by Id
    * @path {GET} /api/v1/employee/search/:idEmployee
    *
    * @header {String} Authorization Bearer token (Admin)
    * 
    * @params {Number} idEmployee searched employee id
    * 
    * @response {Object} requested element
    *
    * @code {200} correct element return
    * @code {401} in case of unmatched privileges or token absence
    * @code {404} in case of not founded element
    * @code {500} in case of internal errors with the request
    *
    */
router.get('/search/:idEmployee',
    async (req, res) => {
        const { idEmployee } = req.params;
        const employee = await service.getEmployee(idEmployee);
        success(res, 200, 'employee', employee, 'wanted employee')
    }
);


    /**
    * @name getEmployeeInfo Show logged employee info
    * @path {GET} /api/v1/employee/my-info
    *
    * @header {String} Authorization Bearer token (Employee)
    *
    * @response {Object} requested element
    *
    * @code {200} correct element return
    * @code {401} in case of unmatched privileges or token absence
    * @code {404} in case of not founded element
    * @code {500} in case of internal errors with the request
    *
    */
router.get('/my-info',
    async (req, res) => {
        //TODO sub.id
        const employee = await service.getEmployee(2);
        success(res, 200, 'employee', employee, 'wanted employee')
    }
);


    /**
   * @name createEmployee
   * @path {POST} /api/v1/employees/createEmployee 
   * 
   * @header {String} Authorization Bearer token (Admin)
   *
   * @body {String} employeeNumber labour employee id
   * @body {String} email employee's email
   * @body {String} firstName employee's first name
   * @body {String} lastName1 first employee's last name
   * @body {String} lastName2 second employee's last name
   * @body {String} password
   * @body {String} [image] user profile picture
   * @body {Number} rolId employee's rol id
   *
   * @response {Object} object.data created element data
   *
   * @code {200} element created
   * @code {401} unmatched privileges or token absence
   * @code {400} wrong body parameters
   * @code {500} internal errors with the request
   *
   */
router.post('/register-employee', 
    async (req, res) => {
        const body = req.body;
        const newEmployee = await service.createEmployee(body);
        success(res, 201, 'newEmployee', newEmployee, 'employee created')
    }
);


    /**
   * @name updateEmployee Update employee crucial info
   * @path {PATCH} /api/v1/employees/update/:idEmployee
   *
   * @header {String} Authorization Bearer token (Admin)
   *
   * @params {Number} idEmployee searched employee id
   * 
   * @body {String} [employeeNumber] labour employee id
   * @body {Number} [idRol] employee's rol id
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
router.patch('/update/:idEmployee', 
    async (req, res) => {
        const { idEmployee } = req.params;
        const body =  req.body;
        const updatedEmployee = await service.update(idEmployee, body);
        success(res, 200, 'updatedEmployee', updatedEmployee, 'employee updated');
    }
);


    /**
   * @name updateEmployeeInfo Update employee non-crucial info
   * @path {PATCH} /api/v1/employees/updateInfo
   *
   * @header {String} Authorization Bearer token (Employee)
   *
   * @body {String} [email] employee's email
   * @body {String} [firstName] employee's first name
   * @body {String} [lastName1] first employee's last name
   * @body {String} [lastName2] second employee's last name
   * @body {String} [password]
   * @body {String} [image] user profile picture
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
router.patch('/update-info', 
    async (req, res) => {
        //TODO use sub.id
        const { body } =  req;
        const updatedEmployee = await service.update(2, body);
        success(res, 200, 'updatedEmployee', updatedEmployee, 'employee updated');
    }
);


    /**
   * @name deleteEmployee
   * @path {DELETE} /api/v1/employees/:idEmployee
   *
   * @header {String} Authorization Bearer token (Admin)
   *
   * @params {Number} idEmployee searched employee id
   *
   * @response {Boolean} object.confirmation done deletion boolean confirmation
   *
   * @code {200} in case of element deleted
   * @code {401} in case of unmatched privileges or token absence
   * @code {404} in case of not founded element
   * @code {500} in case of internal errors with the request
   *
   */
router.delete('/:idEmployee', 
    async (req, res) => {
        const { idEmployee } = req.params;
        const deletedEmployeeStatus = await service.delete(idEmployee);
        success(res, 200, 'result', deletedEmployeeStatus, 'employee deleted');
    }
);



module.exports = router;