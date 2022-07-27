const express = require('express');
const success = require('../utils/successResponse');

const Service = require('../services/studentServices');

const service = new Service();

const router = express.Router();

    /** 
    * @module StudentsRoutes
    */


    /**
   * @name studentInfo Show logged student info
   * @path {GET} /api/v1/students/my-info
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
router.get('/my-info', 
    async (req, res) => { //eslint-disable-line
        //TODO use sub.id
        const student = await service.getStudent(3);
        success(res, 200, 'student', student, 'required student');
    }
);


    /**
   * @name studentSearch Search student by name
   * @path {GET} /api/v1/students/student-search
   *
   * @header {String} Authorization Bearer token (Admin, Employee)
   *
   * @body {String} studentNumber searched student number
   * 
   * @response {Object} requested student
   *
   * @code {200} correct element return
   * @code {401} in case of unmatched privileges or token absence
   * @code {404} in case of not founded element
   * @code {500} in case of internal errors with the request
   *
   */
router.get('/student-search', 
    async (req, res) => {
        const { studentNumber } = req.body;
        const student = await service.studentSearch(studentNumber);
        success(res, 200, 'student', student, 'required student');
    }
);


    /**
   * @name createStudent
   * @path {POST} /api/v1/students/
   *
   * @body {String} email institutional email
   * @body {String} studentNumber academic student id
   * @body {String} firstName student's first name
   * @body {String} lastName1 first student's last name
   * @body {String} lastName2 second student's last name
   * @body {String} password
   * @body {Number} majorId student's major id
   * @body {Number} academicStatusId student's Academic Status id
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
        const body = req.body;
        const newStudent = await service.create(body);
        success(res, 201, 'newStudent', newStudent, 'student created')
    }
);


    /**
   * @name updateStudentInfo Update student non-crucial info
   * @path {PATCH} /api/v1/students/update-info
   *
   * @header {String} Authorization Bearer token (Student)
   *
   * @body {String} [email] institutional email
   * @body {String} [password]
   * @body {Number} [majorId] student's major id 
   * @body {String} [image] user profile picture
   * 
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
        //TODO create specialized service to change password
        const body = req.body;
        const updatedStudent = await service.update(2, body);
        success(res, 200, 'updatedStudent', updatedStudent, 'student updated');
    }
);


    /**
   * @name updateStudentAcademicStatus 
   * @path {PATCH} /api/v1/students/update-academic
   *
   * @header {String} Authorization Bearer token (Student)
   *
   * @body {Number} academicStatusId student's Academic Status id
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
router.patch('/update-academic-status', 
    async (req, res) => {
        //TODO use sub.id
        const body = req.body;
        const updatedStudent = await service.update(2, body);
        success(res, 200, 'updatedStudent', updatedStudent, 'student updated');
    }
);


    /**
   * @name updateStudentStatus Used on account deletion o reactivation 
   * @path {PATCH} /api/v1/students/update-status
   *
   * @header {String} Authorization Bearer token (Student)
   *
   * @body {Number} idStatus student's status at the platform id (only accepts active or suspended)
   * @body {String} password
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
router.patch('/update-status', 
    async (req, res) => {
        //TODO use sub.id
        //TODO ask for password
        const body = req.body;
        const updatedStudent = await service.update(1, body);
        success(res, 200, 'updatedStudent', updatedStudent, 'student updated');
    }
);


    /**
   * @name updateStudent Update student crucial info
   * @path {PATCH} /api/v1/students/:idStudent
   *
   * @header {String} Authorization Bearer token (Admin)
   *
   * @params {Number} idStudent searched student id
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
   * @code {404} not founded element
   * @code {500} internal errors with the request
   *
   */
router.patch('/:idStudent', 
    async (req, res) => {
        const { idStudent } = req.params;
        const body = req.body;
        const updatedStudent = await service.update(idStudent, body);
        success(res, 200, 'updatedStudent', updatedStudent, 'student updated');
    }
);



module.exports = router;


