const { Model, DataTypes, Sequelize } = require('sequelize');
const {STUDENT_TABLE} = require('./studentModel');
const {LEVEL_TABLE} = require('./levelModel');

const UN_TABLE = 'tbl_unitary_notif';

const UNSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    idStudent: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_student',
        references: {
            model: STUDENT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL'
    },
    message: {
        allowNull: false,
        type: DataTypes.STRING
    },
    link: {
        allowNull: false,
        type: DataTypes.STRING
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
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
}

class UN extends Model {
    
    static associate(models){ 
        this.belongsTo(models.Student, { as: 'student' });
        this.belongsTo(models.Level, { as: 'level' });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: UN_TABLE,
            modelName: 'UnitaryNotif',
            timestamps: false
        }
    }

}

module.exports = { UN_TABLE, UNSchema, UN };