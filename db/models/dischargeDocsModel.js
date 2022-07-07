const {DataTypes, Model, Sequelize} = require('sequelize');
const {STUDENT_TABLE} = require('./studentModel');

const DISCHARGE_TABLE = 'tbl_discharge_docs';

const DischargeSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    idStudent: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_student',
        unique: true,
        references: {
            model: STUDENT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    doc1: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc2: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc3: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class Discharge extends Model{

    static associate(models){

    }

    static config(sequelize){
        return{
            sequelize,
            tableName: DISCHARGE_TABLE,
            modelName: 'Discharge',
            timestamps: false
        }
    }

}

module.exports = { DISCHARGE_TABLE, DischargeSchema, Discharge };
