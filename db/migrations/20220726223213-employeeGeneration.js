'use strict';

const { DataTypes, Sequelize } = require('sequelize');

const { ROL_TABLE } = require('../models/rolModel');
const { EMPLOYEE_TABLE } = require('../models/employeeModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ROL_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      rol: {
          allowNull: false,
          type: DataTypes.STRING
      }
    });

    await queryInterface.createTable(EMPLOYEE_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      employeeNumber: {
          allowNull: false,
          unique: true,
          type: DataTypes.STRING,
          field: 'employee_number'
      },
      email: {
          allowNull: false,
          unique: true,
          type: DataTypes.STRING,
          validate: { isEmail: true }
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
          type: DataTypes.STRING,
      },
      image: {
          allowNull: true,
          type: DataTypes.STRING
      },
      rolId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          field: 'rol_id',
          references: {
              model: ROL_TABLE,
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
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ROL_TABLE);
    await queryInterface.dropTable(EMPLOYEE_TABLE);
  }
};
