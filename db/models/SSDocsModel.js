const {DataTypes, Model, Sequelize} = require('sequelize');
const {STUDENT_TABLE} = require('./studentModel');

const SS_TABLE = 'tbl_ss_docs';

const SSSchema = {
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
    doc5: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc6: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc7: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc8: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc9: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc10: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc11: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc12: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc13: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    doc14: {
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

class SS extends Model{

    static associate(models){
        this.belongsTo(models.Student, { as: 'student' });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: SS_TABLE,
            modelName: 'SS',
            timestamps: false
        }
    }

}

module.exports = { SS_TABLE, SSSchema, SS };
