const { models } = require('../lib/sequelize');

const boom = require('@hapi/boom');

class postServices{

    constructor(){

    }

    async getAll(areaId){
        const options = {
            include: ['area', 'academicStatus']
        };
        if(areaId){
            options.where = { areaId }
        }
        const elements = await models.Post.findAll(options);
        return elements;
    }

    async get(id){
        const element = await models.Post.findByPk(id, {include: ['area', 'academicStatus']});
        if(!element){
            throw boom.notFound('not founded post');
        }
        return element;
    }

    async create(body){
        const newElement = await models.Post.create(body);
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

module.exports = postServices;