const { models } = require('../lib/sequelize');

const boom = require('@hapi/boom');

const Service = require('./massiveNotifServices');
const service = new Service();

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

        // * massive notification body creation * //
        const area = await models.Area.findByPk(body.areaId);
        const MNBody = {
            message: area.dataValues.area+" agendó el evento "+body.name,
            route: "/api/v1/events/calendar/"+newElement.id,
            levelId: 3
        }
        await service.createEventNotification(MNBody);
        //* - *//

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