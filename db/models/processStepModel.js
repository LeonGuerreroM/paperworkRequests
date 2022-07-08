const { Model, DataTypes, Sequelize } = require('sequelize');
const {STUDENT_TABLE} = require('./studentModel');
const {PROCESS_TABLE} = require('./processModel');

const PSTEP_TABLE = 'tbl_process_step';

const PStepSchema = {
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
        references: {
            model: STUDENT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL'
    },
    idProcess: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1,
        field: 'id_process',
        references: {
            model: PROCESS_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    step: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
}

class PStep extends Model {
    
    static associate(models){ 
        this.belongsTo(models.Student, { as: 'student' });
        this.belongsTo(models.Process, { as: 'process' });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: PSTEP_TABLE,
            modelName: 'PStep',
            timestamps: false
        }
    }

}

module.exports = { PSTEP_TABLE, PStepSchema, PStep };