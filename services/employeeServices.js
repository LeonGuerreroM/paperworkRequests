
const { models } = require('../lib/sequelize');

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
        const elements = models.Employee.findAll(options);
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
        const newElement = await models.Employee.create(body);
        delete newElement.dataValues.password;
        return newElement;
    }

    async delete(id){
        const element = await this.getEmployee(id);
        element.destroy();
        return true;
    }


}

module.exports = EmployeeServices;