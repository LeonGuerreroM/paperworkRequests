const { Model, DataTypes } = require('sequelize');

const PROCESS_TABLE = 'cat_process';

const ProcessSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    process: {
        allowNull: false,
        type: DataTypes.STRING
    }
};

class Process extends Model {

    static associate(models){

    }

    static config(sequelize){
        return{
            sequelize,
            tableName: PROCESS_TABLE,
            modelName: 'Process',
            timestamps: false
        }
    }

}

module.exports = { PROCESS_TABLE, ProcessSchema, Process };