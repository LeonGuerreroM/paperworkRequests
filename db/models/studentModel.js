const { Model, DataTypes, Sequelize } = require('sequelize');
const {MAJOR_TABLE} = require('./majorModel');
const {AS_TABLE} = require('./academicStatusModel');
const {STATUS_TABLE} = require('./statusModel');

const STUDENT_TABLE = 'tbl_student';

const StudentSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: { isEmail: true }
    },
    studentNumber: {
        allowNull: false,
        unique: true,
        field: 'student_number',
        type: DataTypes.INTEGER
    },
    firstName: {
        allowNull: false,
        field: 'first_name',
        type: DataTypes.STRING
    },
    lastName1: {
        allowNull: false,
        field: 'last_name_1',
        type: DataTypes.STRING
    },
    lastName2: {
        allowNull: false,
        field: 'last_name_2',
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    idMajor: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_major',
        references: {
            model: MAJOR_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL'
    },
    idAcademicStatus: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_academic_status',
        references: {
            model: AS_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    idStatus: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1,
        field: 'id_status',
        references: {
            model: STATUS_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    image: {
        allowNull: true,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
}

class Student extends Model {
    
    static associate(models){ 
        
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: STUDENT_TABLE,
            modelName: 'Student',
            timestamps: false
        }
    }

}

module.exports = { STUDENT_TABLE, StudentSchema, Student };