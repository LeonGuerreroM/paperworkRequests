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
        type: DataTypes.STRING
    }
};

class Level extends Model {

    static associate(models){
        this.hasMany(models.MassiveNotif, {
            as: 'massiveNotifs',
            foreignKey: 'levelId'
        })
        this.hasMany(models.UnitaryNotif, {
            as: 'unitaryNotifs',
            foreignKey: 'levelId'
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