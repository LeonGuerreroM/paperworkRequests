const { Model, DataTypes } = require('sequelize');
const {STUDENT_TABLE} = require('./studentModel');
const {MN_TABLE} = require('./massiveNotifModel');

const MNS_TABLE = 'rel_massive_notif-student';

const MNSSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    studentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'student_id',
        references: {
            model: STUDENT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL'
    },
    massiveNotifId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'massive_notif_id',
        references: {
            model: MN_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL'
    }
}

class MNS extends Model {
    
    static associate(models){ //eslint-disable-line
        
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: MNS_TABLE,
            modelName: 'MNStudent',
            timestamps: false
        }
    }

}

module.exports = { MNS_TABLE, MNSSchema, MNS };