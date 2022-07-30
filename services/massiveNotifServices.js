const { models } = require('../lib/sequelize');
const { Op } = require('sequelize');

const boom = require('@hapi/boom');

const StudentServices = require('./studentServices');
const studentServices = new StudentServices();

class MassiveNotifServices{
    
    constructor(){

    }
    
    async getStudentNotifications(studentId){
        const relations = await models.MNStudent.findAll({ where: {
            [Op.or]: [{studentId}, {studentId:0}] //! Add student default id ZERO as admin
        }}); //! its an array, you give it the object format on response.json

        let notificationsList = [];
        for(let relation of relations){
            const notification = await models.MassiveNotif.findByPk(relation.massiveNotifId)
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

    async createPostNotification(body, academicStatusId){
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

    async createEventNotification(body){
        const newElement = await models.MassiveNotif.create(body);

        //* adding relations to MN-Student relation table *//
        const relationBody = {
            massiveNotifId: newElement.id,
            studentId: 0 //those notifications with studentId 0 will be for everyone
        }
        
        await models.MNStudent.create(relationBody);
        //* - *//

        return newElement;
    }

}

module.exports = MassiveNotifServices;