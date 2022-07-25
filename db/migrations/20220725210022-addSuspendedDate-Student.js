'use strict';

const { DataTypes } = require('sequelize');

const { STUDENT_TABLE } = require('../models/studentModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(STUDENT_TABLE, 'suspended_date', 
      {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'suspended_date'
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(STUDENT_TABLE, 'suspendedDate')
  }
};
