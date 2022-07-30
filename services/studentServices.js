const { models } = require('../lib/sequelize');
const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');

class StudentServices{

    constructor(){

    }

    async getAll(academicStatusId){ 
        const options = {
            attributes: {
                exclude: ['password']
            },
            where: { academicStatusId }
        }
        const elements = await models.Student.findAll(options);
        return elements;
    }

    async getStudent(id){
        const relations = {
            include: ['major', 'status', 'academicStatus']
        }
        const student = await models.Student.findByPk(id, relations);
        if(!student){
            throw boom.notFound('student not found');
        }
        delete student.dataValues.password;
        return student;
    }

    async studentSearch(studentNumber){
        const student = await models.Student.findOne({
            where : {studentNumber},
            include: ['major', 'status', 'academicStatus']
        });
        if(!student){
            throw boom.notFound('student not found');
        }
        delete student.dataValues.password;
        return student;
    }

    async create(body){
        const newBody = {
            ...body,
            password: await bcrypt.hash(body.password, 10)
        }
        const newElement = await models.Student.create(newBody);
        delete newElement.dataValues.password;
        return newElement
    }

    async update(id, body){
        const element = await this.getStudent(id);
        const updatedElement = await element.update(body);
        delete updatedElement.dataValues.password;
        return updatedElement;
    }

    async updateStatus(id, body){
        
        const relations = {
            include: ['major', 'status', 'academicStatus']
        }
        const student = await models.Student.findByPk(id, relations);
        if(!student){
            throw boom.notFound('student not found');
        }

        const isMatch = await bcrypt.compare(body.password, student.password);
        if(!isMatch){
            throw boom.unauthorized()
        }

        let newBody = { statusId: body.statusId }
        if(body.statusId == 2){
            newBody = {
                ...newBody,
                suspendedDate: new Date()
            };
        }else if(body.statusId==1 && student.statusId==2){
            newBody = {
                ...newBody,
                suspendedDate: null
            };
        }
        const updatedElement = await student.update(newBody);
        delete updatedElement.dataValues.password;
        return updatedElement;
    }

}

module.exports = StudentServices;