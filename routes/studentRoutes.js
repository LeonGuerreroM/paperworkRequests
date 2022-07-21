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
     * @response {Object} every registered element
     * 
     * @code {200} elements list returned
     * @code {400} wrong body parameters
     * @code {500} internal errors with the request
     */
router.get('/', 
    async (req, res) => {
        //? pa k?
        const students = await service.getStudents();
        success(res, 200, 'students', students, 'students list');
    }
);



    /**
    * @name getStudent Search a student by Id
    * @path {GET} /api/v1/students/:idStudent
    *
    * @header {String} Authorization Bearer token (Admin)
    *
    * @params {Number} idStudent searched student id
    * 
    * @response {Object} requested element
    *
    * @code {200} correct element return
    * @code {401} in case of unmatched privileges or token absence
    * @code {404} in case of not founded element
    * @code {500} in case of internal errors with the request
    *
    */
router.get('/:idStudent', 
    async (res, req) => {
        //? should we keep this method?
        const { idStudent } = req.params;
        const student = await service.getStudent(idStudent);
        success(res, 200, 'student', student, 'required student');
    }
);



    /**
   * @name studentInfo Show logged student info
   * @path {GET} /api/v1/students/myInfo
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
router.get('/myInfo', 
    async (res, req) => {
        //TODO use sub.id
        const student = await service.getStudentInfo(sub.id);
        success(res, 200, 'student', student, 'required student');
    }
);



    /**
   * @name studentSearch Search student by name
   * @path {GET} /api/v1/students/studentSearch
   *
   * @header {String} Authorization Bearer token (Admin, Employee)
   *
   * @body {}
   * 
   * @response {Object} requested student
   *
   * @code {200} correct element return
   * @code {401} in case of unmatched privileges or token absence
   * @code {404} in case of not founded element
   * @code {500} in case of internal errors with the request
   *
   */
router.get('/studentSearch', 
    async (res, req) => {
        const { body } = req;
        const student = await service.studentSearch(body);
        success(res, 200, 'student', student, 'required student');
    }
);



    /**
   * @name createStudent
   * @path {POST} /api/v1/students/
   *
   * @body {String} email institutional email
   * @body {Number} studentNumber academic student id
   * @body {String} firstName student's first name
   * @body {String} lastName1 first student's last name
   * @body {String} lastName2 second student's last name
   * @body {String} password
   * @body {Number} idMajor student's major id
   * @body {Number} idAcademicStatus student's Academic Status id
   * @body {String} [image] user profile picture
   *
   * @response {Object} object.data created element data
   *
   * @code {200} element created
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
   * @name updateStudentInfo Update student non-crucial info
   * @path {PATCH} /api/v1/students/updateInfo
   *
   * @header {String} Authorization Bearer token (Student)
   *
   * @body {String} [email] institutional email
   * @body {String} [password]
   * @body {Number} [idMajor] student's major id 
   * @body {Number} [idAcademicStatus] student's Academic Status id
   * @body {Number} [idStatus] student's status at the platform id
   * @body {String} [image] user profile picture
   * 
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
router.patch('/updateInfo', 
    async (req, res) => {
        //TODO use sub.id
        const { body } =  req;
        const updatedStudent = await service.updateStudent(sub.id, body);
        success(res, 200, 'updatedStudent', updatedStudent, 'student updated');
    }
);



    /**
   * @name updateStudent Update student crucial info
   * @path {PATCH} /api/v1/students/:idStudent
   *
   * @header {String} Authorization Bearer token (Admin)
   *
   * @params {Number} student searched student id
   * 
   * @body {Number} [studentNumber] academic student id
   * @body {String} [firstName] student's first name
   * @body {String} [lastName1] first student's last name
   * @body {String} [lastName2] second student's last name
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
router.patch('/:idStudent', 
    async (req, res) => {
        const { idStudent } = req.params;
        const { body } =  req;
        const updatedStudent = await service.updateStudent(idStudent, body);
        success(res, 200, 'updatedStudent', updatedStudent, 'student updated');
    }
);



module.exports = router;


