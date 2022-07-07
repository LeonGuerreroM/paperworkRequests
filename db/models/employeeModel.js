const {DataTypes, Model, Sequelize} = require('sequelize');
const {ROL_TABLE} = require('./rolModel');

const EMPLOYEE_TABLE = 'tbl_employee';

const EmployeeSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    employeeNumber: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: { isEmail: true }
    },
    image: {
        allowNull: true,
        type: DataTypes.STRING
    },
    idRol: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_rol',
        references: {
            model: ROL_TABLE,
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

class Employee extends Model{

    static associate(models){

    }

    static config(sequelize){
        return{
            sequelize,
            tableName: EMPLOYEE_TABLE,
            modelName: 'Employee',
            timestamps: false
        }
    }

}

module.exports = { EMPLOYEE_TABLE, EmployeeSchema, Employee };
