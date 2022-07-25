'use strict';

const { STATUS_TABLE } = require('../models/statusModel');
const { AS_TABLE } = require('../models/academicStatusModel');
const { MAJOR_TABLE } = require('../models/majorModel');
const { STUDENT_TABLE } = require('../models/studentModel');
const { DataTypes, Sequelize } = require('sequelize');

module.exports = {

  up: async (queryInterface) => {
    
    await queryInterface.createTable(STATUS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      status: {
          allowNull: false,
          type: DataTypes.STRING,
      }
    });

    await queryInterface.createTable(AS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      academicStatus: {
          allowNull: false,
          type: DataTypes.STRING,
          field: 'academic_status'
      }
    });

    await queryInterface.createTable(MAJOR_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      major: {
          allowNull: false,
          type: DataTypes.STRING
      }
    });

    await queryInterface.createTable(STUDENT_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: {
          allowNull: false,
          unique: true,
          type: DataTypes.STRING,
          validate: { isEmail: true }
      },
      studentNumber: {
          allowNull: false,
          unique: true,
          field: 'student_number',
          type: DataTypes.STRING
      },
      firstName: {
          allowNull: false,
          field: 'first_name',
          type: DataTypes.STRING
      },
      lastName1: {
          allowNull: false,
          field: 'last_name_1',
          type: DataTypes.STRING
      },
      lastName2: {
          allowNull: false,
          field: 'last_name_2',
          type: DataTypes.STRING
      },
      password: {
          allowNull: false,
          type: DataTypes.STRING
      },
      majorId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          field: 'major_id',
          references: {
              model: MAJOR_TABLE,
              key: 'id'
          },
          onUpdate: 'CASCADE', 
          onDelete: 'SET NULL'
      },
      academicStatusId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          field: 'academic_status_id',
          references: {
              model: AS_TABLE,
              key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
      },
      statusId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          defaultValue: 1,
          field: 'status_id',
          references: {
              model: STATUS_TABLE,
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
      }
    });

  },


  down: async (queryInterface) => {
    await queryInterface.dropTable(AS_TABLE);
    await queryInterface.dropTable(STATUS_TABLE);
    await queryInterface.dropTable(MAJOR_TABLE);
    await queryInterface.dropTable(STUDENT_TABLE);
  }

};
