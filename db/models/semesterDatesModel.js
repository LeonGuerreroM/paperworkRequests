const { Model, DataTypes, Sequelize } = require('sequelize');

const SEMESTER_TABLE = 'tbl_semester_dates';

const SemesterSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    start: {
        allowNull: false,
        type: DataTypes.DATEONLY
    },
    end: {
        allowNull: false,
        type: DataTypes.DATEONLY
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        field: 'created_at'
    }
}

class Semester extends Model {
    
    static associate(models){ 
        
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: SEMESTER_TABLE,
            modelName: 'Semester',
            timestamps: false
        }
    }

}

module.exports = { SEMESTER_TABLE, SemesterSchema, Semester };