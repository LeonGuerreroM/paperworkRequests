const express = require('express');
const success = require('../utils/successResponse');

const router = express.Router();

    /** 
    * @module StudentsRoutes
    */

    /**
    * @Function getStudents
    * 
    * @returns {object} Students List
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
    */
router.get('/studentSearch/:idStudent', 
    async (res, req) => {
        const { idStudent } = req.params;
        const student = await service.getStudent(idStudent);
        success(res, 200, 'student', student, 'required student');
    }
)



    /**
    * @Function createStudent
    * @param {string} email institutional email
    * @param {number} studentNumber academic student id
    * @param {string} firstName student's first name
    * @param {string} lastName1 first student's last name
    * @param {string} lastName2 second student's last name
    * @param {string} password
    * @param {number} idMajor student's major id from majors cat
    * @param {number} idAcademicStatus student's Academic Status id
    * file: image
    * @returns {object} created student
    */
router.post('/register', 
    async (req, res) => {
        const { body } = req;
        const newStudent = await service.createStudent(body);
        success(res, 201, 'newStudent', newStudent, 'student created')
    }
);



    /**
    * @Function updateStudent
    * @param {string} email institutional email
    * @param {number} studentNumber academic student id
    * @param {string} firstName student's first name
    * @param {string} lastName1 first student's last name
    * @param {string} lastName2 second student's last name
    * @param {string} password
    * @param {number} idMajor student's major id from majors cat
    * @param {number} idAcademicStatus student's Academic Status id
    * file: image
    * @returns {object} updated student
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