const { Model, DataTypes } = require('sequelize');

const LEVEL_TABLE = 'cat_notif_level';

const LevelSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    level: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
};

class Level extends Model {

    static associate(models){

    }

    static config(sequelize){
        return{
            sequelize,
            tableName: LEVEL_TABLE,
            modelName: 'Level',
            timestamps: false
        }
    }

}

module.exports = { LEVEL_TABLE, LevelSchema, Level };