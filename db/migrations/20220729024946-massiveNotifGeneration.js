'use strict';

const { DataTypes, Sequelize } = require('sequelize');

const { LEVEL_TABLE } = require('../models/notifLevelModel');
const { MN_TABLE } = require('../models/massiveNotifModel');
const { STUDENT_TABLE } = require('../models/studentModel');
const { MNS_TABLE } = require('../models/massiveNotif-studentModel');

module.exports = {
  up: async (queryInterface) => {
    
    await queryInterface.createTable(LEVEL_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      level: {
          allowNull: false,
          type: DataTypes.STRING
      }
    });

    await queryInterface.createTable(MN_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      message: {
          allowNull: false,
          type: DataTypes.STRING,
      },
      route: {
          allowNull: false,
          type: DataTypes.STRING,
      },
      createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          field: 'created_at',
          defaultValue: Sequelize.NOW
      },
      levelId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          field: 'level_id',
          references: {
              model: LEVEL_TABLE,
              key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
      }
    });

    await queryInterface.createTable(MNS_TABLE, {
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
    });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(MNS_TABLE);
    await queryInterface.dropTable(MN_TABLE);
    await queryInterface.dropTable(LEVEL_TABLE);
  }
};
