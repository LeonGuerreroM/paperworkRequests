const { models } = require('../lib/sequelize');

const boom = require('@hapi/boom');

class eventServices{

    constructor(){

    }

    async getAll(){
        const elements = await models.Event.findAll({ include: ['area'] });
        return elements;
    }

    async get(id){
        const element = await models.Event.findByPk(id, { include: ['area'] });
        if(!element){
            throw boom.notFound('not founded event');
        }
        return element;
    }

    async create(body){
        const newElement = await models.Event.create(body);
        return newElement;
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