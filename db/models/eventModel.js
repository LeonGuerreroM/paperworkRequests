const { Model, DataTypes, Sequelize } = require('sequelize');

const EVENT_TABLE = 'tbl_event';

const EventSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    startDatetime: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'start_datetime'
    },
    endDatetime: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'end_datetime'
    },
    idArea: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_area',
        defaultValue: 1
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
};

class Event extends Model {

    static associate(models){

    }

    static config(sequelize){
        return{
            sequelize,
            tableName: EVENT_TABLE,
            modelName: 'Event',
            timestamps: false
        }
    }

}

module.exports = { EVENT_TABLE, EventSchema, Event };