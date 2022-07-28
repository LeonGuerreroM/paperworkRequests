'use strict';

const { AREA_TABLE } = require('../models/areaModel');
const { POST_TABLE } = require('../models/postModel');
const { AS_TABLE } = require('../models/academicStatusModel');

const { DataTypes, Sequelize } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(AREA_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      area: {
          allowNull: false,
          type: DataTypes.STRING
      }
    });
    
    await queryInterface.createTable(POST_TABLE, {
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
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(AREA_TABLE);
    await queryInterface.dropTable(POST_TABLE);
  }
};
