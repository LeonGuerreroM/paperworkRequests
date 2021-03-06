const { Model, DataTypes } = require('sequelize');

const AS_TABLE = 'cat_academic_status';

const ASSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    academicStatus: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'academic_status'
    }
}

class AS extends Model {

    static associate(models){

    }

    static config(sequelize){
        return{
            sequelize,
            tableName: AS_TABLE,
            modelName: 'AcademicStatus',
            timestamps: false
        }
    }

}

module.exports = { AS_TABLE, ASSchema, AS };