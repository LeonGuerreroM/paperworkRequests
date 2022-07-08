const {DataTypes, Model, Sequelize} = require('sequelize');
const {STUDENT_TABLE} = require('./studentModel');

const DICTAMEN_TABLE = 'tbl_dictamen_docs';

const DictamenSchema = {
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
        unique: true,
        references: {
            model: STUDENT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    doc1: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc2: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc3: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc4: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class Dictamen extends Model{

    static associate(models){
        this.belongsTo(models.Student, { as: 'student' });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: DICTAMEN_TABLE,
            modelName: 'Dictamen',
            timestamps: false
        }
    }

}

module.exports = { DICTAMEN_TABLE, DictamenSchema, Dictamen };
