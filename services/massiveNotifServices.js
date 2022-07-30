const { models } = require('../lib/sequelize');

const boom = require('@hapi/boom');

const StudentServices = require('./studentServices');
const studentServices = new StudentServices();

class MassiveNotifServices{
    
    constructor(){

    }

    async getStudentNotifications(studentId){
        const relations = await models.MNStudent.findAll({ where: {studentId} }) //! its an array, you give it the object format on reponse.json
        
        let notificationsList = [];
        for(let relation of relations){
            const notification = await models.MassiveNotif.findByPk(relation.id)
            notificationsList.push(notification);
        }

        return notificationsList;
    }

    async get(id){
        const element = await models.MassiveNotif.findByPk(id);
        if(!element){
            throw boom.notFound('not founded notification');
        }
        return element;
    }

    async create(body, academicStatusId){
        const newElement = await models.MassiveNotif.create(body);

        //* adding relations to MN-Student relation table *//
        const relationBody = {
            massiveNotifId: newElement.id, 
        }
        const searchedStudents = await studentServices.getAll(academicStatusId);
        // searchedStudents.forEach( student => { 
        //! foreach doesnt work well along with models
        //     const newRelationBody = {
        //         ...relationBody,
        //         studentId: student.id
        //     };
        //     const newRegister = await models.MNStudent.create(newRelationBody);
        //     console.log(newRegister);
        // });
        for(let student of searchedStudents){
            const newRelationBody = {
                ...relationBody,
                studentId: student.id 
            };
            await models.MNStudent.create(newRelationBody);
        }
        //* - *//

        return newElement;
    }

}

module.exports = MassiveNotifServices;