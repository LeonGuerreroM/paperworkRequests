const { models } = require('../lib/sequelize');

const boom = require('@hapi/boom');

class eventServices{

    constructor(){

    }

    async getAll(){
        const elements = await models.Employee.findAll();
        return elements;
    }

    async get(id){
        const element = await models.Employee.findByPk(id);
        if(!element){
            throw boom.notFound('not founded event');
        }
        return element;
    }

    async create(body){
        const newBody = {
            ...body,
            startDatetime: new Date(body.startDatetime),
            endDatetime: new Date(body.endDatetime),
        }
        console.log(newBody);
        // const newElement = models.Event.create(body);
        // return newElement;
    }

    async update(id, body){
        const element = await this.get(id);
        const updatedElement = await element.update(body);
        return updatedElement;
    }

    async delete(id){
        const element = await this.get(id);
        element.destroy();
        return true;
    }

}

module.exports = eventServices;


console.log(new Date());
console.log(Date())