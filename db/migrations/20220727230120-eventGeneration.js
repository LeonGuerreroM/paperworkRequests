'use strict';

const { DataTypes, Sequelize } = require('sequelize');

const { AREA_TABLE } = require('../models/areaModel');
const { EVENT_TABLE } = require('../models/eventModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(EVENT_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
          allowNull: false,
          type: DataTypes.STRING
      },
      startDatetime: {
          allowNull: false,
          type: DataTypes.DATE,
          field: 'start_datetime'
      },
      endDatetime: {
          allowNull: false,
          type: DataTypes.DATE,
          field: 'end_datetime'
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
      createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          field: 'created_at',
          defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(EVENT_TABLE);
  }

};
