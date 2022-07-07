const { Model, DataTypes } = require('sequelize');

const REGISTRATION_TABLE = 'tbl_registration';

const RegistrationSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        unique: true
    }
}

class Registration extends Model {
    
    static associate(models){ 
        
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: REGISTRATION_TABLE,
            modelName: 'Registration',
            timestamps: false
        }
    }

}

module.exports = { REGISTRATION_TABLE, RegistrationSchema, Registration };