const { Model, DataTypes } = require('sequelize');

const MAJOR_TABLE = 'cat_major';

const MajorSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    major: {
        allowNull: false,
        type: DataTypes.STRING
    }
};

class Major extends Model {

    static associate(models){
        this.hasMany(models.Student, {
            as: 'students',
            foreignKey: 'idMajor'
        });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: MAJOR_TABLE,
            modelName: 'Major',
            timestamps: false
        }
    }

}

module.exports = { MAJOR_TABLE, MajorSchema, Major };