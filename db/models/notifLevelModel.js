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
        this.hasMany(models.MassiveNotif, {
            as: 'massiveNotifs',
            foreignKey: 'idLevel'
        })
        this.hasMany(models.UnitaryNotif, {
            as: 'unitaryNotifs',
            foreignKey: 'idLevel'
        })
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