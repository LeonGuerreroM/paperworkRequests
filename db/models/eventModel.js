const { Model, DataTypes, Sequelize } = require('sequelize');
const {AREA_TABLE} =  require('./areaModel');

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
    areaId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'area_id',
        references: {
            model: AREA_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class Event extends Model {

    static associate(models){
        this.belongsTo(models.Area, { as: 'area' });
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