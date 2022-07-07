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
    idArea: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_area',
        references: {
            model: AREA_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    content: {
        allowNull: false,
        type: DataTypes.STRING
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
    idAcademicStatus: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'id_academic_status',
        defaultValue: 1,
        references: {
            model: AS_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class Post extends Model {

    static associate(models){

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