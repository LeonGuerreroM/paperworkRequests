const express = require('express');
const success = require('../utils/successResponse');

const router = express.Router();

    /** 
    * @module StudentsRoutes
    */

    /**
     * @name getStudents
     * @path {GET} /api/v1/students/
     * 
     * @header {String} Authorization Bearer token
     * 
     * @response {Object} every registered student
     * 
     * @code {200} students list returned
     * @code {400} wrong body parameters
     * @code {500} internal errors with the request
     */
router.get('/', 
    async (req, res) => {
        const students = await service.getStudents();
        success(res, 200, 'students', students, 'students list');
    }
);



    /**
    * @Function getStudent
    * @param {number} idStudent wanted student id
    * 
    * @returns {object} wanted student
    * 
    * @code {200} students list returned
    * 
    */
router.get('/studentSearch/:idStudent', 
    async (res, req) => {
        const { idStudent } = req.params;
        const student = await service.getStudent(idStudent);
        success(res, 200, 'student', student, 'required student');
    }
)



    /**
   * @name createStudent
   * @path {POST} /api/v1/students/
   *
   * @header {String} Authorization Bearer token
   *
   * @body {String} email institutional email
   * @body {Number} studentNumber academic student id
   * @body {String} firstName student's first name
   * @body {String} lastName1 first student's last name
   * @body {String} lastName2 second student's last name
   * @body {String} password
   * @body {Number} idMajor student's major id from majors cat
   * @body {Number} idAcademicStatus student's Academic Status id
   * @body {Number} idStatus student's status at the platform id
   * @body {file}   image user related area
   * 
   *
   * @response {Object} object.data created student data
   *
   * @code {200} student created
   * @code {401} unmatched privileges or token absence
   * @code {400} wrong body parameters
   * @code {500} internal errors with the request
   *
   */
router.post('/register', 
    async (req, res) => {
        const { body } = req;
        const newStudent = await service.createStudent(body);
        success(res, 201, 'newStudent', newStudent, 'student created')
    }
);

    /**
   * @name updateStudent
   * @path {PATCH} /api/v1/students/
   *
   * @header {String} Authorization Bearer token
   *
   * @body {String} [email] institutional email
   * @body {Number} [studentNumber] academic student id
   * @body {String} [firstName] student's first name
   * @body {String} [lastName1] first student's last name
   * @body {String} [lastName2] second student's last name
   * @body {String} [password]
   * @body {Number} [idMajor] student's major id from majors cat
   * @body {Number} [idAcademicStatus] student's Academic Status id
   * @body {Number} [idStatus] student's status at the platform id
   * @body {file} [image] user related area
   * 
   *
   * @response {Object} object.data updated student data
   *
   * @code {200} student updated
   * @code {401} unmatched privileges or token absence
   * @code {400} wrong body parameters
   * @code {404} not founded user
   * @code {500} internal errors with the request
   *
   */

router.patch('/info/:id', 
    async (req, res) => {
        const { id } = req.params;
        const { body } =  req;
        const updatedStudent = await service.updateStudent(id, body);
        success(res, 200, 'updatedStudent', updatedStudent, 'student updated');
    }
);



module.exports = router;