const { models } = require('../lib/sequelize');

const boom = require('@hapi/boom');

class StudentServices{

    constructor(){

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
        const newElement = await models.Student.create(body);
        delete newElement.dataValues.password;
        return newElement
    }

    async update(id, body){
        const element = await this.getStudent(id);
        let newBody = body
        if(body.statusId == 2){
            newBody = {
                ...body,
                suspendedDate: new Date()
            };
        }else if(body.statusId==1 && element.statusId==2){
            newBody = {
                ...body,
                suspendedDate: null
            };
        }
        const updatedElement = await element.update(newBody);
        delete updatedElement.dataValues.password;
        return updatedElement;
    }

}

module.exports = StudentServices;