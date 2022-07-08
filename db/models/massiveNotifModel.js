const {DataTypes, Model, Sequelize} = require('sequelize');
const {LEVEL_TABLE} = require('./notifLevelModel');
const { Student } = require('./studentModel');

const MN_TABLE = 'tbl_massive_notif';

const MNSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    message: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    link: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
    idLevel: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_level',
        references: {
            model: LEVEL_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class MN extends Model{

    static associate(models){
        this.belongsTo(models.Level, { as: 'level' });

        this.belongsToMany(models.Student, {
            as: 'receivers',
            through: models.MN-Student,
            foreignKey: 'idMassiveNotif',
            otherKey: 'idStudent'
        });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: MN_TABLE,
            modelName: 'MassiveNotif',
            timestamps: false
        }
    }

}

module.exports = { MN_TABLE, MNSchema, MN };

