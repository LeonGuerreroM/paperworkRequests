const { Model, DataTypes } = require('sequelize');

const ROL_TABLE = 'cat_rol';

const RolSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    rol: {
        allowNull: false,
        type: DataTypes.STRING
    }
};

class Rol extends Model {

    static associate(models){
        this.hasMany(models.Employee, {
            as: 'employees',
            foreignKey: 'rolId'
        });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: ROL_TABLE,
            modelName: 'Rol',
            timestamps: false
        }
    }

}

module.exports = { ROL_TABLE, RolSchema, Rol };