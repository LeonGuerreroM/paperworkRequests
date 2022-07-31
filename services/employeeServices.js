
const { models } = require('../lib/sequelize');

const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');

class EmployeeServices{

    constructor(){

    }

    async getEmployees(){
        const options = {
            attributes: {
                exclude: ['password']
            },
            include: ['rol']
        }
        const elements = await models.Employee.findAll(options);

        // for(let i=0; i<elements.length; i++){
        //     console.log(elements[i].get({
        //         plain: true
        //     }));
        // }

        // elements.forEach( element => {
        //     console.log(element.id)
        // });

        return elements;

    }

    async getEmployee(id){
        const options = {
            attributes: {
                exclude: ['password']
            },
            include: ['rol']
        }
        const element = await models.Employee.findByPk(id, options);
        if(!element){
            throw boom.notFound('not founded employee');
        }
        return element;
    }

    async update(id, body){
        const element = await this.getEmployee(id);
        const updatedElement = await element.update(body);
        return updatedElement;
    }

    async createEmployee(body){
        const newBody = {
            ...body,
            password: await bcrypt.hash(body.password, 10)
        }
        const newElement = await models.Employee.create(newBody);
        delete newElement.dataValues.password;
        return newElement;
    }

    async changePassword(id, body){
        const element = await models.Employee.findByPk(id);
        if(!element){
            throw boom.notFound('not founded employee');
        }
        const isMatch = await bcrypt.compare(body.password, element.password);
        if(!isMatch){
            throw boom.unauthorized();
        }
        if(body.newPassword != body.repeatedPassword){
            throw boom.badRequest();
        }
        const newBody = {
            password: await bcrypt.hash(body.newPassword, 10)
        }
        const updatedElement = await element.update(newBody);
        delete updatedElement.dataValues.password;
        return updatedElement;
    }

    async delete(id){
        const element = await this.getEmployee(id);
        element.destroy();
        return true;
    }


}

module.exports = EmployeeServices;