const { Model, DataTypes } = require('sequelize');

const AREA_TABLE = 'cat_area';

const AreaSchema = {
    
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    area: {
        allowNull: false,
        type: DataTypes.STRING
    }

};

class Area extends Model {

    static associate(models){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: AREA_TABLE,
            modelName: 'Area',
            timestamps: false
        }
    }

}

module.exports = { AREA_TABLE, AreaSchema, Area };