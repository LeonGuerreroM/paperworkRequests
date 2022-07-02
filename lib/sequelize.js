const { Sequelize } = require('sequelize');

const { config } = require('../config')

const sequelize = new Sequelize(config.dbUrl, {
    dialect: 'postgres',
    logging: console.log
});

module.exports = sequelize;