const { Model, DataTypes } = require('sequelize');

const STATUS_TABLE = 'cat_status';

const StatusSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING,
    }
}

class Status extends Model {

    static associate(models){
        this.hasMany(models.Student, {
            as: 'students',
            foreignKey: 'idStatus'
        });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: STATUS_TABLE,
            modelName: 'Status',
            timestamps: false
        }
    }

}

module.exports = { STATUS_TABLE, StatusSchema, Status };