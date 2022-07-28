const { Model, DataTypes, Sequelize } = require('sequelize');
const {AREA_TABLE} =  require('./areaModel');
const {AS_TABLE} =  require('./academicStatusModel');


const POST_TABLE = 'tbl_post';

const PostSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    content: {
        allowNull: false,
        type: DataTypes.STRING
    },
    areaId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'area_id',
        references: {
            model: AREA_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    image: {
        allowNull: true,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
    academicStatusId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'academic_status_id',
        defaultValue: 1,
        references: {
            model: AS_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    document: {
        allowNull: true,
        type: DataTypes.STRING
    }
};

class Post extends Model {

    static associate(models){
        this.belongsTo(models.Area, { as: 'area' });
        this.belongsTo(models.AcademicStatus, { as: 'academicStatus' });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: POST_TABLE,
            modelName: 'Post',
            timestamps: false
        }
    }

}

module.exports = { POST_TABLE, PostSchema, Post };